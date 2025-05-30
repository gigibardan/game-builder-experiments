
import React, { useState } from 'react';
import { useUsers } from '@/hooks/useUsers';
import { useCourses } from '@/hooks/useCourses';
import { useUserAccess } from '@/hooks/useUserAccess';
import { useAuth } from '@/hooks/useAuth';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, UserPlus, Edit, Trash, Key, AlertTriangle, RefreshCw } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Profile } from '@/types/database';

const UserManagement: React.FC = () => {
  const { isAdmin } = useAuth();
  const { users, loading: usersLoading, createUser, updateUser, deleteUser, syncUsers } = useUsers();
  const { courses, sessions, loading: coursesLoading } = useCourses();
  const { updateUserAccess, getUserAccess, getUsersWithoutAccess, loading: accessLoading } = useUserAccess();
  
  const loading = usersLoading || coursesLoading || accessLoading;
  const [filteredUsers, setFilteredUsers] = useState<Profile[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);
  
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<Profile | null>(null);
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'student' as 'student' | 'admin'
  });
  
  const [selectedCourses, setSelectedCourses] = useState<{[key: string]: boolean}>({});
  const [selectedSessions, setSelectedSessions] = useState<{[key: string]: {[key: string]: boolean}}>({});

  const usersWithoutAccess = getUsersWithoutAccess(users);

  React.useEffect(() => {
    const filtered = users.filter(user => 
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  if (!isAdmin) {
    return <div>Nu aveți permisiunea să accesați această pagină.</div>;
  }

  const handleSyncUsers = async () => {
    setIsSyncing(true);
    await syncUsers();
    setIsSyncing(false);
  };

  const openCreateDialog = () => {
    setFormData({ username: '', email: '', password: '', role: 'student' });
    setSelectedCourses({});
    setSelectedSessions({});
    setCurrentUser(null);
    setIsEditDialogOpen(true);
  };

  const openEditDialog = (user: Profile) => {
    setCurrentUser(user);
    setFormData({
      username: user.username,
      email: user.email,
      password: '',
      role: user.role
    });

    // Set current user access
    const userAccess = getUserAccess(user.id);
    const coursesState: {[key: string]: boolean} = {};
    const sessionsState: {[key: string]: {[key: string]: boolean}} = {};

    courses.forEach(course => {
      const access = userAccess.find(a => a.courseId === course.id);
      coursesState[course.id] = !!access;
      
      sessionsState[course.id] = {};
      sessions.filter(s => s.course_id === course.id).forEach(session => {
        sessionsState[course.id][session.id] = access ? 
          access.sessions.includes(session.id) : false;
      });
    });

    setSelectedCourses(coursesState);
    setSelectedSessions(sessionsState);
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (user: Profile) => {
    setCurrentUser(user);
    setIsDeleteDialogOpen(true);
  };

  const handleSaveUser = async () => {
    if (!formData.username || !formData.email || (!currentUser && !formData.password)) {
      return;
    }

    let result;
    if (currentUser) {
      // Update existing user
      const updateData: any = {
        username: formData.username,
        email: formData.email,
        role: formData.role
      };
      
      // Add password if provided
      if (formData.password) {
        updateData.password = formData.password;
      }
      
      result = await updateUser(currentUser.id, updateData);
    } else {
      // Create new user
      result = await createUser(formData.email, formData.password, formData.username, undefined, undefined, formData.role);
    }

    if (result.success) {
      // Update access permissions
      const courseAccess = Object.entries(selectedCourses)
        .filter(([_, isSelected]) => isSelected)
        .map(([courseId]) => ({
          courseId,
          sessions: Object.entries(selectedSessions[courseId] || {})
            .filter(([_, isChecked]) => isChecked)
            .map(([sessionId]) => sessionId)
        }))
        .filter(access => access.sessions.length > 0);

      const userId = currentUser?.id || users.find(u => u.email === formData.email)?.id;
      if (userId) {
        await updateUserAccess(userId, courseAccess);
      }

      setIsEditDialogOpen(false);
    }
  };

  const handleDeleteUser = async () => {
    if (!currentUser) return;
    
    const result = await deleteUser(currentUser.id);
    if (result.success) {
      setIsDeleteDialogOpen(false);
    }
  };

  const handleCourseToggle = (courseId: string, checked: boolean) => {
    setSelectedCourses(prev => ({ ...prev, [courseId]: checked }));
    
    if (checked) {
      // Auto-select all sessions for this course
      const courseSessions = sessions.filter(s => s.course_id === courseId);
      setSelectedSessions(prev => ({
        ...prev,
        [courseId]: courseSessions.reduce((acc, session) => {
          acc[session.id] = true;
          return acc;
        }, {} as {[key: string]: boolean})
      }));
    } else {
      // Deselect all sessions for this course
      setSelectedSessions(prev => ({
        ...prev,
        [courseId]: Object.keys(prev[courseId] || {}).reduce((acc, sessionId) => {
          acc[sessionId] = false;
          return acc;
        }, {} as {[key: string]: boolean})
      }));
    }
  };

  const handleSessionToggle = (courseId: string, sessionId: string, checked: boolean) => {
    setSelectedSessions(prev => ({
      ...prev,
      [courseId]: {
        ...prev[courseId],
        [sessionId]: checked
      }
    }));

    if (checked && !selectedCourses[courseId]) {
      setSelectedCourses(prev => ({ ...prev, [courseId]: true }));
    }

    // Check if all sessions are unchecked, then uncheck the course
    if (!checked) {
      const courseSessions = sessions.filter(s => s.course_id === courseId);
      const allSessionsUnchecked = courseSessions.every(session => 
        !selectedSessions[courseId]?.[session.id] || session.id === sessionId
      );
      
      if (allSessionsUnchecked) {
        setSelectedCourses(prev => ({ ...prev, [courseId]: false }));
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-course-blue"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Gestionare Utilizatori</h1>
            <div className="flex gap-2">
              <Button 
                onClick={handleSyncUsers} 
                variant="outline"
                disabled={isSyncing}
                className="bg-blue-50 hover:bg-blue-100 border-blue-200"
              >
                <RefreshCw className={`mr-2 h-4 w-4 ${isSyncing ? 'animate-spin' : ''}`} />
                {isSyncing ? 'Sincronizare...' : 'Sincronizează din Auth'}
              </Button>
              <Button onClick={openCreateDialog} className="bg-green-600 hover:bg-green-700">
                <UserPlus className="mr-2 h-4 w-4" />
                Adaugă Utilizator
              </Button>
            </div>
          </div>

          {/* Alert pentru utilizatori fără acces */}
          {usersWithoutAccess.length > 0 && (
            <Card className="mb-6 border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Utilizatori fără acces la cursuri ({usersWithoutAccess.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {usersWithoutAccess.map(user => (
                    <Button
                      key={user.id}
                      variant="outline"
                      size="sm"
                      onClick={() => openEditDialog(user)}
                      className="border-orange-300 text-orange-700 hover:bg-orange-100"
                    >
                      {user.username}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Utilizatori</CardTitle>
              <CardDescription>Gestionează conturile de utilizator și accesul lor la cursuri</CardDescription>
              <div className="relative mt-4">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Caută după nume sau email..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Utilizator</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Rol</TableHead>
                    <TableHead>Cursuri</TableHead>
                    <TableHead>Acțiuni</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map(user => {
                      const userAccess = getUserAccess(user.id);
                      const hasNoAccess = userAccess.length === 0 && user.role === 'student';
                      return (
                        <TableRow key={user.id} className={hasNoAccess ? 'bg-red-50' : ''}>
                          <TableCell className="font-medium">
                            <div className="flex items-center">
                              {user.username}
                              {hasNoAccess && (
                                <AlertTriangle className="ml-2 h-4 w-4 text-red-500" />
                              )}
                            </div>
                          </TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {user.role === 'admin' ? 'Administrator' : 'Student'}
                            </span>
                          </TableCell>
                          <TableCell>
                            {hasNoAccess ? (
                              <span className="text-red-500 text-sm">Fără acces</span>
                            ) : (
                              <div className="flex flex-wrap gap-1">
                                {userAccess.map(access => {
                                  const course = courses.find(c => c.id === access.courseId);
                                  return (
                                    <span key={access.courseId} className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">
                                      {course?.name || access.courseId}
                                    </span>
                                  );
                                })}
                              </div>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" onClick={() => openEditDialog(user)}>
                                <Edit className="h-3.5 w-3.5" />
                              </Button>
                              {user.role !== 'admin' && (
                                <Button variant="outline" size="sm" onClick={() => openDeleteDialog(user)}
                                  className="text-red-500 hover:bg-red-50">
                                  <Trash className="h-3.5 w-3.5" />
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                        Nu s-au găsit utilizatori
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
      
      {/* Edit/Create User Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {currentUser ? `Editare ${currentUser.username}` : 'Adaugă Utilizator Nou'}
            </DialogTitle>
          </DialogHeader>
          
          <Tabs defaultValue="details" className="mt-4">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="details">Detalii Utilizator</TabsTrigger>
              <TabsTrigger value="access">Permisiuni de Acces</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Nume utilizator</Label>
                  <Input 
                    value={formData.username}
                    onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Parolă {currentUser && '(lasă gol pentru a păstra actuala)'}</Label>
                  <Input 
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    required={!currentUser}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Rol</Label>
                  <Select 
                    value={formData.role} 
                    onValueChange={(value: 'student' | 'admin') => setFormData(prev => ({ ...prev, role: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="admin">Administrator</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="access" className="py-4">
              <div className="space-y-6">
                {courses.map((course) => {
                  const courseSessions = sessions.filter(s => s.course_id === course.id);
                  const allSessionsSelected = courseSessions.length > 0 && courseSessions.every(session => 
                    selectedSessions[course.id]?.[session.id]
                  );
                  const someSessionsSelected = courseSessions.some(session => 
                    selectedSessions[course.id]?.[session.id]
                  );
                  
                  return (
                    <div key={course.id} className="space-y-2 border-b pb-4">
                      <div className="flex items-center gap-2">
                        <Checkbox 
                          checked={selectedCourses[course.id] || false}
                          onCheckedChange={(checked) => 
                            handleCourseToggle(course.id, checked === true)}
                        />
                        <Label className="font-semibold">{course.name}</Label>
                        {courseSessions.length > 0 && (
                          <span className="text-sm text-gray-500">
                            ({courseSessions.filter(s => selectedSessions[course.id]?.[s.id]).length}/{courseSessions.length} lecții)
                          </span>
                        )}
                      </div>
                      
                      {selectedCourses[course.id] && courseSessions.length > 0 && (
                        <div className="ml-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {courseSessions.map((session) => (
                            <div key={session.id} className="flex items-center gap-2">
                              <Checkbox 
                                checked={selectedSessions[course.id]?.[session.id] || false}
                                onCheckedChange={(checked) => 
                                  handleSessionToggle(course.id, session.id, checked === true)}
                              />
                              <Label className="text-sm">{session.name}</Label>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
          
          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Anulează
            </Button>
            <Button onClick={handleSaveUser}>
              {currentUser ? 'Salvează' : 'Creează'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Delete User Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmare ștergere</DialogTitle>
            <DialogDescription>
              Ești sigur că vrei să ștergi utilizatorul {currentUser?.username}?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Anulează
            </Button>
            <Button variant="destructive" onClick={handleDeleteUser}>
              Șterge
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default UserManagement;
