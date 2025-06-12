
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Book, Plus, Edit, Trash2, Users, Search, Filter, SortAsc, SortDesc, Calendar, FileText, Copy, Eye } from 'lucide-react';
import { useCourses } from '@/hooks/useCourses';
import { useUsers } from '@/hooks/useUsers';
import { useUserAccess } from '@/hooks/useUserAccess';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { Course, Session } from '@/types/database';

const CourseManagement: React.FC = () => {
  const { courses, sessions, loading, refetchCourses, refetchSessions } = useCourses();
  const { users } = useUsers();
  const { userAccess } = useUserAccess();
  
  // State pentru filtre și căutări
  const [courseSearchTerm, setCourseSearchTerm] = useState('');
  const [sessionSearchTerm, setSessionSearchTerm] = useState('');
  const [selectedCourseFilter, setSelectedCourseFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'created_at' | 'order_number'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  
  // State pentru editare
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isCreateCourseOpen, setIsCreateCourseOpen] = useState(false);
  const [isEditCourseOpen, setIsEditCourseOpen] = useState(false);
  const [isCreateSessionOpen, setIsCreateSessionOpen] = useState(false);
  const [isEditSessionOpen, setIsEditSessionOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: ''
  });
  const [sessionFormData, setSessionFormData] = useState({
    name: '',
    slug: '',
    description: '',
    orderNumber: 1,
    content: '',
    objectives: '',
    prerequisites: '',
    duration: '',
    difficulty: 'beginner' as 'beginner' | 'intermediate' | 'advanced'
  });

  // Logică pentru filtrare și sortare cursuri
  const filteredAndSortedCourses = useMemo(() => {
    let filtered = courses.filter(course =>
      course.name.toLowerCase().includes(courseSearchTerm.toLowerCase()) ||
      course.slug.toLowerCase().includes(courseSearchTerm.toLowerCase()) ||
      (course.description && course.description.toLowerCase().includes(courseSearchTerm.toLowerCase()))
    );

    return filtered.sort((a, b) => {
      const factor = sortOrder === 'asc' ? 1 : -1;
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name) * factor;
        case 'created_at':
          return (new Date(a.created_at).getTime() - new Date(b.created_at).getTime()) * factor;
        default:
          return 0;
      }
    });
  }, [courses, courseSearchTerm, sortBy, sortOrder]);

  // Logică pentru filtrare și sortare sesiuni
  const filteredAndSortedSessions = useMemo(() => {
    let filtered = sessions.filter(session => {
      const matchesSearch = session.name.toLowerCase().includes(sessionSearchTerm.toLowerCase()) ||
        session.slug.toLowerCase().includes(sessionSearchTerm.toLowerCase()) ||
        (session.description && session.description.toLowerCase().includes(sessionSearchTerm.toLowerCase()));
      
      const matchesCourseFilter = selectedCourseFilter === 'all' || session.course_id === selectedCourseFilter;
      
      return matchesSearch && matchesCourseFilter;
    });

    return filtered.sort((a, b) => {
      const factor = sortOrder === 'asc' ? 1 : -1;
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name) * factor;
        case 'created_at':
          return (new Date(a.created_at).getTime() - new Date(b.created_at).getTime()) * factor;
        case 'order_number':
          return (a.order_number - b.order_number) * factor;
        default:
          return 0;
      }
    });
  }, [sessions, sessionSearchTerm, selectedCourseFilter, sortBy, sortOrder]);

  const handleCreateCourse = async () => {
    if (!formData.name.trim() || !formData.slug.trim()) {
      toast.error('Numele și slug-ul sunt obligatorii');
      return;
    }

    try {
      const { error } = await supabase
        .from('courses')
        .insert([{
          name: formData.name.trim(),
          slug: formData.slug.trim(),
          description: formData.description.trim() || null
        }]);

      if (error) throw error;

      toast.success('Cursul a fost creat cu succes!');
      setIsCreateCourseOpen(false);
      setFormData({ name: '', slug: '', description: '' });
      refetchCourses();
    } catch (error) {
      console.error('Error creating course:', error);
      toast.error('Eroare la crearea cursului');
    }
  };

  const handleUpdateCourse = async () => {
    if (!selectedCourse) return;
    if (!formData.name.trim() || !formData.slug.trim()) {
      toast.error('Numele și slug-ul sunt obligatorii');
      return;
    }

    try {
      const { error } = await supabase
        .from('courses')
        .update({
          name: formData.name.trim(),
          slug: formData.slug.trim(),
          description: formData.description.trim() || null
        })
        .eq('id', selectedCourse.id);

      if (error) throw error;

      toast.success('Cursul a fost actualizat cu succes!');
      setIsEditCourseOpen(false);
      setSelectedCourse(null);
      setFormData({ name: '', slug: '', description: '' });
      refetchCourses();
    } catch (error) {
      console.error('Error updating course:', error);
      toast.error('Eroare la actualizarea cursului');
    }
  };

  const handleDeleteCourse = async (courseId: string) => {
    try {
      // First delete all sessions for this course
      await supabase
        .from('sessions')
        .delete()
        .eq('course_id', courseId);

      // Then delete all user access for this course
      await supabase
        .from('user_access')
        .delete()
        .eq('course_id', courseId);

      // Finally delete the course
      const { error } = await supabase
        .from('courses')
        .delete()
        .eq('id', courseId);

      if (error) throw error;

      toast.success('Cursul a fost șters cu succes!');
      refetchCourses();
      refetchSessions();
    } catch (error) {
      console.error('Error deleting course:', error);
      toast.error('Eroare la ștergerea cursului');
    }
  };

  const handleCreateSession = async () => {
    if (!selectedCourse) return;
    if (!sessionFormData.name.trim() || !sessionFormData.slug.trim()) {
      toast.error('Numele și slug-ul sunt obligatorii');
      return;
    }

    try {
      const { error } = await supabase
        .from('sessions')
        .insert([{
          course_id: selectedCourse.id,
          name: sessionFormData.name.trim(),
          slug: sessionFormData.slug.trim(),
          description: sessionFormData.description.trim() || null,
          order_number: sessionFormData.orderNumber
        }]);

      if (error) throw error;

      toast.success('Sesiunea a fost creată cu succes!');
      setIsCreateSessionOpen(false);
      setSessionFormData({ 
        name: '', 
        slug: '', 
        description: '', 
        orderNumber: 1,
        content: '',
        objectives: '',
        prerequisites: '',
        duration: '',
        difficulty: 'beginner'
      });
      refetchSessions();
    } catch (error) {
      console.error('Error creating session:', error);
      toast.error('Eroare la crearea sesiunii');
    }
  };

  const handleUpdateSession = async () => {
    if (!selectedSession) return;
    if (!sessionFormData.name.trim() || !sessionFormData.slug.trim()) {
      toast.error('Numele și slug-ul sunt obligatorii');
      return;
    }

    try {
      const { error } = await supabase
        .from('sessions')
        .update({
          name: sessionFormData.name.trim(),
          slug: sessionFormData.slug.trim(),
          description: sessionFormData.description.trim() || null,
          order_number: sessionFormData.orderNumber
        })
        .eq('id', selectedSession.id);

      if (error) throw error;

      toast.success('Sesiunea a fost actualizată cu succes!');
      setIsEditSessionOpen(false);
      setSelectedSession(null);
      setSessionFormData({ 
        name: '', 
        slug: '', 
        description: '', 
        orderNumber: 1,
        content: '',
        objectives: '',
        prerequisites: '',
        duration: '',
        difficulty: 'beginner'
      });
      refetchSessions();
    } catch (error) {
      console.error('Error updating session:', error);
      toast.error('Eroare la actualizarea sesiunii');
    }
  };

  const handleDeleteSession = async (sessionId: string) => {
    try {
      // First delete all user access for this session
      await supabase
        .from('user_access')
        .delete()
        .eq('session_id', sessionId);

      // Then delete the session
      const { error } = await supabase
        .from('sessions')
        .delete()
        .eq('id', sessionId);

      if (error) throw error;

      toast.success('Sesiunea a fost ștearsă cu succes!');
      refetchSessions();
    } catch (error) {
      console.error('Error deleting session:', error);
      toast.error('Eroare la ștergerea sesiunii');
    }
  };

  const handleDuplicateCourse = async (course: Course) => {
    try {
      const { error } = await supabase
        .from('courses')
        .insert([{
          name: `${course.name} (Copie)`,
          slug: `${course.slug}-copy`,
          description: course.description
        }]);

      if (error) throw error;

      toast.success('Cursul a fost duplicat cu succes!');
      refetchCourses();
    } catch (error) {
      console.error('Error duplicating course:', error);
      toast.error('Eroare la duplicarea cursului');
    }
  };

  const handleDuplicateSession = async (session: Session) => {
    try {
      const { error } = await supabase
        .from('sessions')
        .insert([{
          course_id: session.course_id,
          name: `${session.name} (Copie)`,
          slug: `${session.slug}-copy`,
          description: session.description,
          order_number: session.order_number + 0.5
        }]);

      if (error) throw error;

      toast.success('Sesiunea a fost duplicată cu succes!');
      refetchSessions();
    } catch (error) {
      console.error('Error duplicating session:', error);
      toast.error('Eroare la duplicarea sesiunii');
    }
  };

  const openEditCourse = (course: Course) => {
    setSelectedCourse(course);
    setFormData({
      name: course.name,
      slug: course.slug,
      description: course.description || ''
    });
    setIsEditCourseOpen(true);
  };

  const openEditSession = (session: Session) => {
    setSelectedSession(session);
    setSessionFormData({
      name: session.name,
      slug: session.slug,
      description: session.description || '',
      orderNumber: session.order_number,
      content: '',
      objectives: '',
      prerequisites: '',
      duration: '',
      difficulty: 'beginner'
    });
    setIsEditSessionOpen(true);
  };

  const getCourseSessions = (courseId: string) => {
    return sessions.filter(session => session.course_id === courseId);
  };

  const getCourseUsersCount = (courseId: string) => {
    return userAccess.filter(access => access.course_id === courseId).length;
  };

  const generateSlugFromName = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Administrare Cursuri</h1>
              <p className="text-muted-foreground">Gestionează cursurile și sesiunile platformei</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex gap-2">
              <Dialog open={isCreateCourseOpen} onOpenChange={setIsCreateCourseOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Curs Nou
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Creează Curs Nou</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nume Curs *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => {
                          const name = e.target.value;
                          setFormData({
                            ...formData, 
                            name,
                            slug: name ? generateSlugFromName(name) : ''
                          });
                        }}
                        placeholder="Introduceți numele cursului"
                      />
                    </div>
                    <div>
                      <Label htmlFor="slug">Slug *</Label>
                      <Input
                        id="slug"
                        value={formData.slug}
                        onChange={(e) => setFormData({...formData, slug: e.target.value})}
                        placeholder="curs-slug"
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Se generează automat din nume, dar poate fi editat
                      </p>
                    </div>
                    <div>
                      <Label htmlFor="description">Descriere</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        placeholder="Descrierea cursului (obiective, ce vor învăța studenții, etc.)"
                        rows={4}
                      />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setIsCreateCourseOpen(false)}>
                        Anulează
                      </Button>
                      <Button onClick={handleCreateCourse}>
                        Creează
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Tabs defaultValue="courses" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="courses">Cursuri</TabsTrigger>
              <TabsTrigger value="sessions">Sesiuni</TabsTrigger>
            </TabsList>
            
            <TabsContent value="courses">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Book className="mr-2 h-5 w-5" />
                      Lista Cursuri ({filteredAndSortedCourses.length})
                    </CardTitle>
                    
                    <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Caută cursuri..."
                          value={courseSearchTerm}
                          onChange={(e) => setCourseSearchTerm(e.target.value)}
                          className="pl-10 w-64"
                        />
                      </div>
                      
                      <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="name">Sortează după nume</SelectItem>
                          <SelectItem value="created_at">Sortează după dată</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                      >
                        {sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Nume</TableHead>
                          <TableHead>Slug</TableHead>
                          <TableHead>Sesiuni</TableHead>
                          <TableHead>Utilizatori</TableHead>
                          <TableHead>Creat</TableHead>
                          <TableHead>Acțiuni</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredAndSortedCourses.map((course) => (
                          <TableRow key={course.id}>
                            <TableCell className="font-medium">
                              <div>
                                <div className="font-semibold">{course.name}</div>
                                {course.description && (
                                  <div className="text-sm text-muted-foreground truncate max-w-xs">
                                    {course.description}
                                  </div>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="secondary">{course.slug}</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">
                                {getCourseSessions(course.id).length} sesiuni
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">
                                <Users className="mr-1 h-3 w-3" />
                                {getCourseUsersCount(course.id)}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {new Date(course.created_at).toLocaleDateString('ro-RO')}
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-1">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    setSelectedCourse(course);
                                    setIsCreateSessionOpen(true);
                                  }}
                                  title="Adaugă sesiune"
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => openEditCourse(course)}
                                  title="Editează"
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleDuplicateCourse(course)}
                                  title="Duplică"
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => window.open(`/courses/${course.slug}`, '_blank')}
                                  title="Vezi pe site"
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <AlertDialog>
                                  <AlertDialogTrigger asChild>
                                    <Button variant="outline" size="sm" title="Șterge">
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </AlertDialogTrigger>
                                  <AlertDialogContent>
                                    <AlertDialogHeader>
                                      <AlertDialogTitle>Șterge Cursul</AlertDialogTitle>
                                      <AlertDialogDescription>
                                        Ești sigur că vrei să ștergi cursul "{course.name}"? 
                                        Această acțiune va șterge și toate sesiunile asociate și nu poate fi anulată.
                                      </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                      <AlertDialogCancel>Anulează</AlertDialogCancel>
                                      <AlertDialogAction onClick={() => handleDeleteCourse(course.id)}>
                                        Șterge
                                      </AlertDialogAction>
                                    </AlertDialogFooter>
                                  </AlertDialogContent>
                                </AlertDialog>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sessions">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5" />
                      Lista Sesiuni ({filteredAndSortedSessions.length})
                    </CardTitle>
                    
                    <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Caută sesiuni..."
                          value={sessionSearchTerm}
                          onChange={(e) => setSessionSearchTerm(e.target.value)}
                          className="pl-10 w-64"
                        />
                      </div>
                      
                      <Select value={selectedCourseFilter} onValueChange={setSelectedCourseFilter}>
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Toate cursurile</SelectItem>
                          {courses.map(course => (
                            <SelectItem key={course.id} value={course.id}>
                              {course.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      
                      <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="name">Sortează după nume</SelectItem>
                          <SelectItem value="order_number">Sortează după ordine</SelectItem>
                          <SelectItem value="created_at">Sortează după dată</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                      >
                        {sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Nume</TableHead>
                          <TableHead>Curs</TableHead>
                          <TableHead>Slug</TableHead>
                          <TableHead>Ordine</TableHead>
                          <TableHead>Creat</TableHead>
                          <TableHead>Acțiuni</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredAndSortedSessions.map((session) => {
                          const course = courses.find(c => c.id === session.course_id);
                          return (
                            <TableRow key={session.id}>
                              <TableCell className="font-medium">
                                <div>
                                  <div className="font-semibold">{session.name}</div>
                                  {session.description && (
                                    <div className="text-sm text-muted-foreground truncate max-w-xs">
                                      {session.description}
                                    </div>
                                  )}
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge variant="secondary">{course?.name || 'N/A'}</Badge>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">{session.slug}</Badge>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">#{session.order_number}</Badge>
                              </TableCell>
                              <TableCell>
                                {new Date(session.created_at).toLocaleDateString('ro-RO')}
                              </TableCell>
                              <TableCell>
                                <div className="flex space-x-1">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => openEditSession(session)}
                                    title="Editează"
                                  >
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleDuplicateSession(session)}
                                    title="Duplică"
                                  >
                                    <Copy className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => window.open(`/${course?.slug}/${session.slug}`, '_blank')}
                                    title="Vezi pe site"
                                  >
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                  <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                      <Button variant="outline" size="sm" title="Șterge">
                                        <Trash2 className="h-4 w-4" />
                                      </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                      <AlertDialogHeader>
                                        <AlertDialogTitle>Șterge Sesiunea</AlertDialogTitle>
                                        <AlertDialogDescription>
                                          Ești sigur că vrei să ștergi sesiunea "{session.name}"? 
                                          Această acțiune nu poate fi anulată.
                                        </AlertDialogDescription>
                                      </AlertDialogHeader>
                                      <AlertDialogFooter>
                                        <AlertDialogCancel>Anulează</AlertDialogCancel>
                                        <AlertDialogAction onClick={() => handleDeleteSession(session.id)}>
                                          Șterge
                                        </AlertDialogAction>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>
                                </div>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Edit Course Dialog */}
          <Dialog open={isEditCourseOpen} onOpenChange={setIsEditCourseOpen}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Editează Curs</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="edit-name">Nume Curs *</Label>
                  <Input
                    id="edit-name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-slug">Slug *</Label>
                  <Input
                    id="edit-slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-description">Descriere</Label>
                  <Textarea
                    id="edit-description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={4}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsEditCourseOpen(false)}>
                    Anulează
                  </Button>
                  <Button onClick={handleUpdateCourse}>
                    Actualizează
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Create Session Dialog */}
          <Dialog open={isCreateSessionOpen} onOpenChange={setIsCreateSessionOpen}>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Creează Sesiune Nouă</DialogTitle>
                {selectedCourse && (
                  <p className="text-sm text-muted-foreground">
                    Pentru cursul: {selectedCourse.name}
                  </p>
                )}
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="session-name">Nume Sesiune *</Label>
                    <Input
                      id="session-name"
                      value={sessionFormData.name}
                      onChange={(e) => {
                        const name = e.target.value;
                        setSessionFormData({
                          ...sessionFormData, 
                          name,
                          slug: name ? generateSlugFromName(name) : ''
                        });
                      }}
                      placeholder="Introduceți numele sesiunii"
                    />
                  </div>
                  <div>
                    <Label htmlFor="session-slug">Slug *</Label>
                    <Input
                      id="session-slug"
                      value={sessionFormData.slug}
                      onChange={(e) => setSessionFormData({...sessionFormData, slug: e.target.value})}
                      placeholder="sesiune-slug"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="session-order">Numărul de ordine *</Label>
                    <Input
                      id="session-order"
                      type="number"
                      value={sessionFormData.orderNumber}
                      onChange={(e) => setSessionFormData({...sessionFormData, orderNumber: parseInt(e.target.value) || 1})}
                      min="1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="session-difficulty">Dificultate</Label>
                    <Select 
                      value={sessionFormData.difficulty} 
                      onValueChange={(value: any) => setSessionFormData({...sessionFormData, difficulty: value})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Începător</SelectItem>
                        <SelectItem value="intermediate">Intermediar</SelectItem>
                        <SelectItem value="advanced">Avansat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="session-description">Descriere</Label>
                  <Textarea
                    id="session-description"
                    value={sessionFormData.description}
                    onChange={(e) => setSessionFormData({...sessionFormData, description: e.target.value})}
                    placeholder="Descrierea sesiunii (scurtă descriere pentru ce vor învăța în această sesiune)"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="session-objectives">Obiective de învățare</Label>
                  <Textarea
                    id="session-objectives"
                    value={sessionFormData.objectives}
                    onChange={(e) => setSessionFormData({...sessionFormData, objectives: e.target.value})}
                    placeholder="Ce vor învăța studenții în această sesiune? (listă cu obiective concrete)"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="session-prerequisites">Prerequisite</Label>
                  <Textarea
                    id="session-prerequisites"
                    value={sessionFormData.prerequisites}
                    onChange={(e) => setSessionFormData({...sessionFormData, prerequisites: e.target.value})}
                    placeholder="Ce trebuie să știe studenții înainte de această sesiune?"
                    rows={2}
                  />
                </div>

                <div>
                  <Label htmlFor="session-duration">Durata estimată</Label>
                  <Input
                    id="session-duration"
                    value={sessionFormData.duration}
                    onChange={(e) => setSessionFormData({...sessionFormData, duration: e.target.value})}
                    placeholder="ex: 45 minute, 1 oră, 90 minute"
                  />
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsCreateSessionOpen(false)}>
                    Anulează
                  </Button>
                  <Button onClick={handleCreateSession}>
                    Creează
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Edit Session Dialog */}
          <Dialog open={isEditSessionOpen} onOpenChange={setIsEditSessionOpen}>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Editează Sesiune</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-session-name">Nume Sesiune *</Label>
                    <Input
                      id="edit-session-name"
                      value={sessionFormData.name}
                      onChange={(e) => setSessionFormData({...sessionFormData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-session-slug">Slug *</Label>
                    <Input
                      id="edit-session-slug"
                      value={sessionFormData.slug}
                      onChange={(e) => setSessionFormData({...sessionFormData, slug: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-session-order">Numărul de ordine *</Label>
                    <Input
                      id="edit-session-order"
                      type="number"
                      value={sessionFormData.orderNumber}
                      onChange={(e) => setSessionFormData({...sessionFormData, orderNumber: parseInt(e.target.value) || 1})}
                      min="1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-session-difficulty">Dificultate</Label>
                    <Select 
                      value={sessionFormData.difficulty} 
                      onValueChange={(value: any) => setSessionFormData({...sessionFormData, difficulty: value})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Începător</SelectItem>
                        <SelectItem value="intermediate">Intermediar</SelectItem>
                        <SelectItem value="advanced">Avansat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="edit-session-description">Descriere</Label>
                  <Textarea
                    id="edit-session-description"
                    value={sessionFormData.description}
                    onChange={(e) => setSessionFormData({...sessionFormData, description: e.target.value})}
                    rows={3}
                  />
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsEditSessionOpen(false)}>
                    Anulează
                  </Button>
                  <Button onClick={handleUpdateSession}>
                    Actualizează
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseManagement;
