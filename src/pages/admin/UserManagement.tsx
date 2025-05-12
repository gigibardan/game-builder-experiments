
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from "sonner";
import { Search, UserPlus, Edit, Trash, Key, Loader2 } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { User, UserRole, Profile, Course, Session } from '@/types/auth';
import { supabase } from '@/integrations/supabase/client';

// List of all available courses with their sessions
const UserManagement: React.FC = () => {
  const { isAdmin, isAuthenticated, updateUserPassword } = useAuth();
  const navigate = useNavigate();
  
  // State for user management
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  // State for courses and sessions
  const [courses, setCourses] = useState<Course[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  
  // State for user editing/creation
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isResetPasswordDialogOpen, setIsResetPasswordDialogOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [newPassword, setNewPassword] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Form fields
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    email: '',
    password: '',
    role: UserRole.USER,
    courseAccess: [] as {courseId: string, sessions: string[]}[]
  });
  
  // Access management state
  const [selectedCourses, setSelectedCourses] = useState<{[key: string]: boolean}>({});
  const [selectedSessions, setSelectedSessions] = useState<{[key: string]: {[key: string]: boolean}}>({});
  
  // Load users, courses, and sessions on component mount
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      
      try {
        // Load courses
        const { data: coursesData, error: coursesError } = await supabase
          .from('courses')
          .select('*')
          .order('name');
        
        if (coursesError) {
          throw coursesError;
        }
        
        // Load sessions
        const { data: sessionsData, error: sessionsError } = await supabase
          .from('sessions')
          .select('*')
          .order('order_number');
        
        if (sessionsError) {
          throw sessionsError;
        }
        
        // Load profiles
        const { data: profilesData, error: profilesError } = await supabase
          .from('profiles')
          .select('*');
        
        if (profilesError) {
          throw profilesError;
        }
        
        // Load user access
        const { data: userAccessData, error: userAccessError } = await supabase
          .from('user_access')
          .select('*');
        
        if (userAccessError) {
          throw userAccessError;
        }
        
        // Set courses and sessions
        setCourses(coursesData);
        setSessions(sessionsData);
        
        // Transform profiles to users
        const transformedUsers = profilesData.map(profile => {
          // Find all access entries for this user
          const userAccess = userAccessData.filter(access => access.user_id === profile.id);
          
          // Group sessions by course
          const courseAccessMap = new Map<string, string[]>();
          
          userAccess.forEach(access => {
            const courseId = access.course_id;
            if (!courseAccessMap.has(courseId)) {
              courseAccessMap.set(courseId, []);
            }
            
            if (access.session_id) {
              const sessions = courseAccessMap.get(courseId) || [];
              sessions.push(access.session_id);
              courseAccessMap.set(courseId, sessions);
            }
          });
          
          // Convert map to array
          const courseAccess = Array.from(courseAccessMap).map(([courseId, sessions]) => ({
            courseId,
            sessions
          }));
          
          // Create user object
          return {
            id: profile.id,
            username: profile.username,
            email: profile.email,
            role: profile.role === 'admin' ? UserRole.ADMIN : UserRole.USER,
            courseAccess
          };
        });
        
        setUsers(transformedUsers);
        setFilteredUsers(transformedUsers);
      } catch (error) {
        console.error('Error loading data:', error);
        toast.error('Failed to load data');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);
  
  // Filter users when search term changes
  useEffect(() => {
    const filtered = users.filter(user => 
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);
  
  // Check if user is authorized to access this page
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else if (!isAdmin) {
      navigate('/unauthorized');
    }
  }, [isAuthenticated, isAdmin, navigate]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const openCreateDialog = () => {
    // Reset form data for new user
    setFormData({
      id: '',
      username: '',
      email: '',
      password: '',
      role: UserRole.USER,
      courseAccess: []
    });
    
    // Reset course and session selections
    const initialCoursesState: {[key: string]: boolean} = {};
    const initialSessionsState: {[key: string]: {[key: string]: boolean}} = {};
    
    courses.forEach(course => {
      initialCoursesState[course.id] = false;
      initialSessionsState[course.id] = {};
      
      const courseSessions = sessions.filter(session => session.course_id === course.id);
      courseSessions.forEach(session => {
        initialSessionsState[course.id][session.id] = false;
      });
    });
    
    setSelectedCourses(initialCoursesState);
    setSelectedSessions(initialSessionsState);
    setCurrentUser(null);
    setIsEditDialogOpen(true);
  };
  
  const openEditDialog = (user: User) => {
    setCurrentUser(user);
    
    setFormData({
      id: user.id,
      username: user.username,
      email: user.email,
      password: '',
      role: user.role,
      courseAccess: [...user.courseAccess]
    });
    
    // Set course and session selections based on user access
    const coursesState: {[key: string]: boolean} = {};
    const sessionsState: {[key: string]: {[key: string]: boolean}} = {};
    
    courses.forEach(course => {
      const courseAccess = user.courseAccess.find(access => access.courseId === course.id);
      coursesState[course.id] = !!courseAccess;
      
      sessionsState[course.id] = {};
      const courseSessions = sessions.filter(session => session.course_id === course.id);
      
      courseSessions.forEach(session => {
        sessionsState[course.id][session.id] = courseAccess ? 
          courseAccess.sessions.includes(session.id) : false;
      });
    });
    
    setSelectedCourses(coursesState);
    setSelectedSessions(sessionsState);
    setIsEditDialogOpen(true);
  };
  
  const openDeleteDialog = (user: User) => {
    setCurrentUser(user);
    setIsDeleteDialogOpen(true);
  };
  
  const openResetPasswordDialog = (user: User) => {
    setCurrentUser(user);
    setNewPassword('');
    setIsResetPasswordDialogOpen(true);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRoleChange = (value: string) => {
    setFormData(prev => ({ 
      ...prev, 
      role: value === 'admin' ? UserRole.ADMIN : UserRole.USER 
    }));
  };
  
  const handleCourseToggle = (courseId: string, checked: boolean) => {
    // Update the selected course state
    setSelectedCourses(prev => ({
      ...prev,
      [courseId]: checked
    }));
    
    // If unchecking a course, make sure all sessions are unchecked too
    if (!checked) {
      const updatedSessions = { ...selectedSessions };
      Object.keys(updatedSessions[courseId] || {}).forEach(sessionId => {
        if (updatedSessions[courseId]) {
          updatedSessions[courseId][sessionId] = false;
        }
      });
      setSelectedSessions(updatedSessions);
    }
  };
  
  const handleSessionToggle = (courseId: string, sessionId: string, checked: boolean) => {
    setSelectedSessions(prev => ({
      ...prev,
      [courseId]: {
        ...(prev[courseId] || {}),
        [sessionId]: checked
      }
    }));
    
    // If checking a session, make sure the course is checked too
    if (checked && !selectedCourses[courseId]) {
      setSelectedCourses(prev => ({
        ...prev,
        [courseId]: true
      }));
    }
  };
  
  const handleSelectAllSessions = (courseId: string, checked: boolean) => {
    const updatedSessions = { ...selectedSessions };
    const courseSessions = sessions.filter(session => session.course_id === courseId);
    
    if (!updatedSessions[courseId]) {
      updatedSessions[courseId] = {};
    }
    
    courseSessions.forEach(session => {
      updatedSessions[courseId][session.id] = checked;
    });
    
    setSelectedSessions(updatedSessions);
    
    // If selecting all sessions, also check the course
    if (checked) {
      setSelectedCourses(prev => ({
        ...prev,
        [courseId]: true
      }));
    }
  };
  
  const handleSaveUser = async () => {
    try {
      setIsProcessing(true);
      
      // Validate form data
      if (!formData.username || !formData.email || (!currentUser && !formData.password)) {
        toast.error("Toate câmpurile trebuie completate");
        return;
      }
      
      // Create updated courseAccess based on selections
      const updatedCourseAccess: {courseId: string, sessions: string[]}[] = [];
      
      Object.entries(selectedCourses).forEach(([courseId, isSelected]) => {
        if (isSelected && selectedSessions[courseId]) {
          const selectedSessionIds = Object.entries(selectedSessions[courseId])
            .filter(([_, isChecked]) => isChecked)
            .map(([sessionId]) => sessionId);
          
          if (selectedSessionIds.length > 0) {
            updatedCourseAccess.push({
              courseId,
              sessions: selectedSessionIds
            });
          }
        }
      });
      
      if (currentUser) {
        // Update existing user
        
        // 1. Update profile
        const { error: profileError } = await supabase
          .from('profiles')
          .update({
            username: formData.username,
            email: formData.email,
            role: formData.role === UserRole.ADMIN ? 'admin' : 'student',
            updated_at: new Date().toISOString()
          })
          .eq('id', currentUser.id);
        
        if (profileError) {
          throw profileError;
        }
        
        // 2. Delete all existing user access
        const { error: deleteError } = await supabase
          .from('user_access')
          .delete()
          .eq('user_id', currentUser.id);
        
        if (deleteError) {
          throw deleteError;
        }
        
        // 3. Insert new user access entries
        const userAccessEntries: any[] = [];
        
        updatedCourseAccess.forEach(access => {
          access.sessions.forEach(sessionId => {
            userAccessEntries.push({
              user_id: currentUser.id,
              course_id: access.courseId,
              session_id: sessionId
            });
          });
        });
        
        if (userAccessEntries.length > 0) {
          const { error: insertError } = await supabase
            .from('user_access')
            .insert(userAccessEntries);
          
          if (insertError) {
            throw insertError;
          }
        }
        
        // 4. Update password if provided
        if (formData.password) {
          if (updateUserPassword) {
            await updateUserPassword(currentUser.id, formData.password);
          }
        }
        
        // 5. Update local state
        const updatedUsers = users.map(user => 
          user.id === currentUser.id 
            ? { ...user, username: formData.username, email: formData.email, role: formData.role, courseAccess: updatedCourseAccess }
            : user
        );
        
        setUsers(updatedUsers);
        toast.success(`Utilizatorul ${formData.username} a fost actualizat`);
        
      } else {
        // Create new user
        
        // 1. Create auth user (this would normally be done via Supabase admin API or edge function)
        // For now, we'll simulate it with a success message
        
        // In a real implementation, you would use Supabase Edge Functions or an admin API
        // to create the user in auth.users, and the trigger we created would handle
        // creating the profile
        
        toast.success(`Utilizatorul ${formData.username} a fost creat`);
        toast.info('Notă: În implementarea actuală, utilizatorii trebuie să se înregistreze manual.');
        
        // For local state update, we'll simulate a new user
        const newUserId = Math.random().toString(36).substring(2, 15);
        
        const newUser: User = {
          id: newUserId,
          username: formData.username,
          email: formData.email,
          role: formData.role,
          courseAccess: updatedCourseAccess
        };
        
        setUsers([...users, newUser]);
      }
      
      setIsEditDialogOpen(false);
      
    } catch (error) {
      console.error('Error saving user:', error);
      toast.error('A apărut o eroare la salvarea utilizatorului');
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handleDeleteUser = async () => {
    if (!currentUser) return;
    
    try {
      setIsProcessing(true);
      
      // In a real implementation, you would use Supabase Edge Functions to delete the user
      // from auth.users, and the cascading delete would handle the profile and access
      // For now, we'll just update the local state
      
      const updatedUsers = users.filter(user => user.id !== currentUser.id);
      setUsers(updatedUsers);
      
      toast.success(`Utilizatorul ${currentUser.username} a fost șters`);
      toast.info('Notă: În implementarea actuală, utilizatorii nu sunt șterși din baza de date.');
      
      setIsDeleteDialogOpen(false);
      
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('A apărut o eroare la ștergerea utilizatorului');
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handleResetPassword = async () => {
    if (!currentUser || !newPassword) {
      toast.error("Te rugăm să introduci o parolă nouă");
      return;
    }
    
    try {
      setIsProcessing(true);
      
      if (updateUserPassword) {
        await updateUserPassword(currentUser.id, newPassword);
      }
      
      toast.success(`Parola pentru ${currentUser.username} a fost resetată`);
      setIsResetPasswordDialogOpen(false);
      
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error('A apărut o eroare la resetarea parolei');
    } finally {
      setIsProcessing(false);
    }
  };

  // Function to get course and session information for display
  const getCourseInfo = (courseId: string) => {
    return courses.find(course => course.id === courseId)?.name || courseId;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Gestionare Utilizatori</h1>
            <Button onClick={openCreateDialog} className="bg-green-600 hover:bg-green-700">
              <UserPlus className="mr-2 h-4 w-4" />
              Adaugă Utilizator
            </Button>
          </div>
          
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
                  onChange={handleSearchChange}
                />
              </div>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex justify-center items-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-course-blue" />
                </div>
              ) : (
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
                      filteredUsers.map(user => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.username}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              user.role === UserRole.ADMIN ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {user.role === UserRole.ADMIN ? 'Administrator' : 'Student'}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {user.courseAccess.map(access => (
                                <span key={access.courseId} className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">
                                  {getCourseInfo(access.courseId)}
                                </span>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" onClick={() => openEditDialog(user)}>
                                <Edit className="h-3.5 w-3.5" />
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => openResetPasswordDialog(user)}>
                                <Key className="h-3.5 w-3.5" />
                              </Button>
                              {user.role !== UserRole.ADMIN && (
                                <Button variant="outline" size="sm" onClick={() => openDeleteDialog(user)}
                                  className="text-red-500 hover:bg-red-50">
                                  <Trash className="h-3.5 w-3.5" />
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                          Nu s-au găsit utilizatori care să corespundă criteriilor de căutare
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              )}
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
            <DialogDescription>
              {currentUser 
                ? 'Modifică detaliile utilizatorului și permisiunile de acces'
                : 'Completează detaliile pentru a crea un utilizator nou'}
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="details" className="mt-4">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="details">Detalii Utilizator</TabsTrigger>
              <TabsTrigger value="access">Permisiuni de Acces</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="space-y-4 py-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Nume utilizator</Label>
                    <Input 
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Nume utilizator"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email utilizator"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">
                      {currentUser ? 'Parolă (lăsați gol pentru a păstra parola actuală)' : 'Parolă'}
                    </Label>
                    <Input 
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder={currentUser ? '••••••••' : 'Parolă nouă'}
                      required={!currentUser}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="role">Rol</Label>
                    <Select 
                      value={formData.role === UserRole.ADMIN ? 'admin' : 'student'} 
                      onValueChange={handleRoleChange}
                      disabled={currentUser?.role === UserRole.ADMIN}
                    >
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Selectează un rol" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="admin">Administrator</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="access" className="py-4">
              <div className="space-y-6">
                {courses.map((course) => {
                  const courseSessions = sessions.filter(session => session.course_id === course.id);
                  return (
                    <div key={course.id} className="space-y-2 border-b pb-4">
                      <div className="flex items-center gap-2">
                        <Checkbox 
                          id={`course-${course.id}`}
                          checked={selectedCourses[course.id] || false}
                          onCheckedChange={(checked) => 
                            handleCourseToggle(course.id, checked === true)}
                        />
                        <Label htmlFor={`course-${course.id}`} className="font-semibold">
                          {course.name}
                        </Label>
                      </div>
                      
                      {selectedCourses[course.id] && (
                        <div className="ml-6 mt-2">
                          <div className="flex items-center gap-2 mb-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleSelectAllSessions(course.id, true)}
                            >
                              Selectează tot
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleSelectAllSessions(course.id, false)}
                            >
                              Deselectează tot
                            </Button>
                          </div>
                          
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
                            {courseSessions.map((session) => (
                              <div key={session.id} className="flex items-center gap-2">
                                <Checkbox 
                                  id={`session-${course.id}-${session.id}`}
                                  checked={selectedSessions[course.id]?.[session.id] || false}
                                  onCheckedChange={(checked) => 
                                    handleSessionToggle(course.id, session.id, checked === true)}
                                />
                                <Label 
                                  htmlFor={`session-${course.id}-${session.id}`}
                                  className="text-sm"
                                >
                                  {session.name}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
          
          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)} disabled={isProcessing}>
              Anulează
            </Button>
            <Button onClick={handleSaveUser} disabled={isProcessing}>
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Se procesează...
                </>
              ) : (
                currentUser ? 'Salvează Modificările' : 'Creează Utilizator'
              )}
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
              Ești sigur că vrei să ștergi utilizatorul {currentUser?.username}? Această acțiune nu poate fi anulată.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)} disabled={isProcessing}>
              Anulează
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDeleteUser}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Se procesează...
                </>
              ) : (
                'Șterge utilizatorul'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Reset Password Dialog */}
      <Dialog open={isResetPasswordDialogOpen} onOpenChange={setIsResetPasswordDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Resetare parolă</DialogTitle>
            <DialogDescription>
              Setează o parolă nouă pentru {currentUser?.username}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="new-password">Parolă nouă</Label>
              <Input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Introduceți parola nouă"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsResetPasswordDialogOpen(false)} disabled={isProcessing}>
              Anulează
            </Button>
            <Button onClick={handleResetPassword} disabled={isProcessing}>
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Se procesează...
                </>
              ) : (
                'Resetează Parola'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default UserManagement;
