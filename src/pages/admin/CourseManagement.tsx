
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Book, Plus, Edit, Trash2, Settings, Users, Eye, Calendar } from 'lucide-react';
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
    orderNumber: 1
  });

  const handleCreateCourse = async () => {
    try {
      const { error } = await supabase
        .from('courses')
        .insert([{
          name: formData.name,
          slug: formData.slug,
          description: formData.description
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

    try {
      const { error } = await supabase
        .from('courses')
        .update({
          name: formData.name,
          slug: formData.slug,
          description: formData.description
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

    try {
      const { error } = await supabase
        .from('sessions')
        .insert([{
          course_id: selectedCourse.id,
          name: sessionFormData.name,
          slug: sessionFormData.slug,
          description: sessionFormData.description,
          order_number: sessionFormData.orderNumber
        }]);

      if (error) throw error;

      toast.success('Sesiunea a fost creată cu succes!');
      setIsCreateSessionOpen(false);
      setSessionFormData({ name: '', slug: '', description: '', orderNumber: 1 });
      refetchSessions();
    } catch (error) {
      console.error('Error creating session:', error);
      toast.error('Eroare la crearea sesiunii');
    }
  };

  const handleUpdateSession = async () => {
    if (!selectedSession) return;

    try {
      const { error } = await supabase
        .from('sessions')
        .update({
          name: sessionFormData.name,
          slug: sessionFormData.slug,
          description: sessionFormData.description,
          order_number: sessionFormData.orderNumber
        })
        .eq('id', selectedSession.id);

      if (error) throw error;

      toast.success('Sesiunea a fost actualizată cu succes!');
      setIsEditSessionOpen(false);
      setSelectedSession(null);
      setSessionFormData({ name: '', slug: '', description: '', orderNumber: 1 });
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
      orderNumber: session.order_number
    });
    setIsEditSessionOpen(true);
  };

  const getCourseSessions = (courseId: string) => {
    return sessions.filter(session => session.course_id === courseId);
  };

  const getCourseUsersCount = (courseId: string) => {
    return userAccess.filter(access => access.course_id === courseId).length;
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
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Creează Curs Nou</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nume Curs</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Introduceți numele cursului"
                      />
                    </div>
                    <div>
                      <Label htmlFor="slug">Slug</Label>
                      <Input
                        id="slug"
                        value={formData.slug}
                        onChange={(e) => setFormData({...formData, slug: e.target.value})}
                        placeholder="curs-slug"
                      />
                    </div>
                    <div>
                      <Label htmlFor="description">Descriere</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        placeholder="Descrierea cursului"
                        rows={3}
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
                  <CardTitle className="flex items-center">
                    <Book className="mr-2 h-5 w-5" />
                    Lista Cursuri ({courses.length})
                  </CardTitle>
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
                        {courses.map((course) => (
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
                              <div className="flex space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    setSelectedCourse(course);
                                    setIsCreateSessionOpen(true);
                                  }}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => openEditCourse(course)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <AlertDialog>
                                  <AlertDialogTrigger asChild>
                                    <Button variant="outline" size="sm">
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
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Lista Sesiuni ({sessions.length})
                  </CardTitle>
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
                        {sessions.map((session) => {
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
                                <div className="flex space-x-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => openEditSession(session)}
                                  >
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                      <Button variant="outline" size="sm">
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
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Editează Curs</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="edit-name">Nume Curs</Label>
                  <Input
                    id="edit-name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-slug">Slug</Label>
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
                    rows={3}
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
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Creează Sesiune Nouă</DialogTitle>
                {selectedCourse && (
                  <p className="text-sm text-muted-foreground">
                    Pentru cursul: {selectedCourse.name}
                  </p>
                )}
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="session-name">Nume Sesiune</Label>
                  <Input
                    id="session-name"
                    value={sessionFormData.name}
                    onChange={(e) => setSessionFormData({...sessionFormData, name: e.target.value})}
                    placeholder="Introduceți numele sesiunii"
                  />
                </div>
                <div>
                  <Label htmlFor="session-slug">Slug</Label>
                  <Input
                    id="session-slug"
                    value={sessionFormData.slug}
                    onChange={(e) => setSessionFormData({...sessionFormData, slug: e.target.value})}
                    placeholder="sesiune-slug"
                  />
                </div>
                <div>
                  <Label htmlFor="session-order">Numărul de ordine</Label>
                  <Input
                    id="session-order"
                    type="number"
                    value={sessionFormData.orderNumber}
                    onChange={(e) => setSessionFormData({...sessionFormData, orderNumber: parseInt(e.target.value) || 1})}
                    min="1"
                  />
                </div>
                <div>
                  <Label htmlFor="session-description">Descriere</Label>
                  <Textarea
                    id="session-description"
                    value={sessionFormData.description}
                    onChange={(e) => setSessionFormData({...sessionFormData, description: e.target.value})}
                    placeholder="Descrierea sesiunii"
                    rows={3}
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
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Editează Sesiune</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="edit-session-name">Nume Sesiune</Label>
                  <Input
                    id="edit-session-name"
                    value={sessionFormData.name}
                    onChange={(e) => setSessionFormData({...sessionFormData, name: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-session-slug">Slug</Label>
                  <Input
                    id="edit-session-slug"
                    value={sessionFormData.slug}
                    onChange={(e) => setSessionFormData({...sessionFormData, slug: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-session-order">Numărul de ordine</Label>
                  <Input
                    id="edit-session-order"
                    type="number"
                    value={sessionFormData.orderNumber}
                    onChange={(e) => setSessionFormData({...sessionFormData, orderNumber: parseInt(e.target.value) || 1})}
                    min="1"
                  />
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
