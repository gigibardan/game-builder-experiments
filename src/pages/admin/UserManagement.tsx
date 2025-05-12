
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
import { Search, UserPlus, Edit, Trash, Key } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { User, UserRole } from '@/types/auth';

// List of all available courses with their sessions
const AVAILABLE_COURSES = [
  {
    id: 'scratch',
    name: 'Scratch',
    sessions: [
      { id: 'session1alegesanatos', name: 'Alege Sănătos' },
      { id: 'session2spacedodge', name: 'Space Dodge' },
      { id: 'session3motoracer', name: 'Moto Racer' },
      { id: 'session4cityrunner', name: 'City Runner' },
      { id: 'session5beachballbounce', name: 'Beach Ball Bounce' },
      { id: 'session6stitchbeach', name: 'Stitch Beach' },
      { id: 'session7cakequest', name: 'Cake Quest' },
      { id: 'session8wizardsquest', name: 'Wizards Quest' },
      { id: 'session9robotfootball', name: 'Robot Football' },
    ],
  },
  {
    id: 'appinventor',
    name: 'App Inventor',
    sessions: [
      { id: 'session1', name: 'Sesiunea 1' },
      { id: 'session2', name: 'Sesiunea 2' },
      { id: 'session3', name: 'Sesiunea 3' },
      { id: 'session4', name: 'Sesiunea 4' },
      { id: 'session5', name: 'Sesiunea 5' },
      { id: 'session7', name: 'Sesiunea 7' },
    ],
  },
  {
    id: 'python',
    name: 'Python',
    sessions: [
      { id: 'session1', name: 'Sesiunea 1' },
    ],
  },
  {
    id: 'alice3',
    name: 'Alice 3',
    sessions: [
      { id: 'session1', name: 'Sesiunea 1' },
      { id: 'session1adventure', name: 'Adventure Game' },
      { id: 'session2spacegame', name: 'Space Game' },
      { id: 'session3virtualpet', name: 'Virtual Pet' },
      { id: 'session4geometry', name: 'Geometry' },
    ],
  },
  {
    id: 'frontenddev',
    name: 'Frontend Development',
    sessions: [
      { id: 'session1', name: 'Sesiunea 1' },
    ],
  },
  {
    id: 'godot',
    name: 'Godot',
    sessions: [
      { id: 'session1', name: 'Sesiunea 1' },
      { id: 'session2', name: 'Sesiunea 2' },
      { id: 'session3', name: 'Sesiunea 3' },
      { id: 'session4', name: 'Sesiunea 4' },
      { id: 'session5', name: 'Sesiunea 5' },
      { id: 'game', name: 'Simple Game' },
    ],
  },
  {
    id: 'minecraftmodding',
    name: 'Minecraft Modding',
    sessions: [
      { id: 'session1', name: 'Sesiunea 1' },
      { id: 'ruby-armor', name: 'Ruby Armor' },
      { id: 'crystal-realm', name: 'Crystal Realm' },
    ],
  },
  {
    id: 'greenfoot',
    name: 'Greenfoot',
    sessions: [
      { id: 'session1', name: 'Sesiunea 1' },
      { id: 'session2', name: 'Sesiunea 2' },
      { id: 'session3', name: 'Sesiunea 3' },
    ],
  },
];

const UserManagement: React.FC = () => {
  const { isAdmin, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  // State for user management
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // State for user editing/creation
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isResetPasswordDialogOpen, setIsResetPasswordDialogOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [newPassword, setNewPassword] = useState('');
  
  // Form fields
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    email: '',
    password: '',
    role: 'student' as UserRole,
    courseAccess: [] as {courseId: string, sessions: string[]}[]
  });
  
  // Access management state
  const [selectedCourses, setSelectedCourses] = useState<{[key: string]: boolean}>({});
  const [selectedSessions, setSelectedSessions] = useState<{[key: string]: {[key: string]: boolean}}>({});
  
  // Mock load users on component mount
  useEffect(() => {
    // This would be replaced with an API call
    const mockUsers: User[] = [
      {
        id: '1',
        username: 'student1',
        email: 'student1@example.com',
        role: 'student',
        courseAccess: [
          { courseId: 'scratch', sessions: ['session1alegesanatos', 'session2spacedodge'] },
          { courseId: 'appinventor', sessions: ['session1'] }
        ]
      },
      {
        id: '2',
        username: 'student2',
        email: 'student2@example.com',
        role: 'student',
        courseAccess: [
          { courseId: 'python', sessions: ['session1'] }
        ]
      },
      {
        id: '3',
        username: 'admin',
        email: 'admin@techminds.ro',
        role: 'admin',
        courseAccess: []
      }
    ];
    
    setUsers(mockUsers);
    setFilteredUsers(mockUsers);
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
      role: 'student',
      courseAccess: []
    });
    
    // Reset course and session selections
    const initialCoursesState: {[key: string]: boolean} = {};
    const initialSessionsState: {[key: string]: {[key: string]: boolean}} = {};
    
    AVAILABLE_COURSES.forEach(course => {
      initialCoursesState[course.id] = false;
      initialSessionsState[course.id] = {};
      course.sessions.forEach(session => {
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
    
    AVAILABLE_COURSES.forEach(course => {
      const courseAccess = user.courseAccess.find(access => access.courseId === course.id);
      coursesState[course.id] = !!courseAccess;
      
      sessionsState[course.id] = {};
      course.sessions.forEach(session => {
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
    setFormData(prev => ({ ...prev, role: value as UserRole }));
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
      Object.keys(updatedSessions[courseId]).forEach(sessionId => {
        updatedSessions[courseId][sessionId] = false;
      });
      setSelectedSessions(updatedSessions);
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
    const course = AVAILABLE_COURSES.find(c => c.id === courseId);
    
    if (course) {
      course.sessions.forEach(session => {
        updatedSessions[courseId][session.id] = checked;
      });
    }
    
    setSelectedSessions(updatedSessions);
    
    // If selecting all sessions, also check the course
    if (checked) {
      setSelectedCourses(prev => ({
        ...prev,
        [courseId]: true
      }));
    }
  };
  
  const handleSaveUser = () => {
    // Validate form data
    if (!formData.username || !formData.email || (!currentUser && !formData.password)) {
      toast.error("Toate câmpurile trebuie completate");
      return;
    }
    
    // Create updated courseAccess based on selections
    const updatedCourseAccess: {courseId: string, sessions: string[]}[] = [];
    
    Object.entries(selectedCourses).forEach(([courseId, isSelected]) => {
      if (isSelected) {
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
    
    const updatedUser: User = {
      ...formData,
      courseAccess: updatedCourseAccess
    };
    
    // Check if we're creating or updating
    if (currentUser) {
      // Update existing user
      const updatedUsers = users.map(user => 
        user.id === currentUser.id ? updatedUser : user
      );
      setUsers(updatedUsers);
      toast.success(`Utilizatorul ${updatedUser.username} a fost actualizat`);
    } else {
      // Create new user
      const newUser: User = {
        ...updatedUser,
        id: String(users.length + 1) // In a real app, this would be generated by the backend
      };
      setUsers([...users, newUser]);
      toast.success(`Utilizatorul ${newUser.username} a fost creat`);
    }
    
    setIsEditDialogOpen(false);
  };
  
  const handleDeleteUser = () => {
    if (!currentUser) return;
    
    const updatedUsers = users.filter(user => user.id !== currentUser.id);
    setUsers(updatedUsers);
    toast.success(`Utilizatorul ${currentUser.username} a fost șters`);
    setIsDeleteDialogOpen(false);
  };
  
  const handleResetPassword = () => {
    if (!currentUser || !newPassword) {
      toast.error("Te rugăm să introduci o parolă nouă");
      return;
    }
    
    // In a real app, this would make an API call to reset the password
    toast.success(`Parola pentru ${currentUser.username} a fost resetată`);
    setIsResetPasswordDialogOpen(false);
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
                            user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {user.role === 'admin' ? 'Administrator' : 'Student'}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {user.courseAccess.map(access => (
                              <span key={access.courseId} className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">
                                {AVAILABLE_COURSES.find(c => c.id === access.courseId)?.name || access.courseId}
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
                            {user.role !== 'admin' && (
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
                      value={formData.role} 
                      onValueChange={handleRoleChange}
                      disabled={currentUser?.role === 'admin'}
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
                {AVAILABLE_COURSES.map((course) => (
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
                          {course.sessions.map((session) => (
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
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Anulează
            </Button>
            <Button onClick={handleSaveUser}>
              {currentUser ? 'Salvează Modificările' : 'Creează Utilizator'}
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
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Anulează
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDeleteUser}
            >
              Șterge utilizatorul
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
            <Button variant="outline" onClick={() => setIsResetPasswordDialogOpen(false)}>
              Anulează
            </Button>
            <Button onClick={handleResetPassword}>
              Resetează Parola
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default UserManagement;
