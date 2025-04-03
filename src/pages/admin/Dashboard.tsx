
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, UserRole } from '@/types/auth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard: React.FC = () => {
  // Mock users data
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      username: 'john_doe',
      email: 'john@example.com',
      role: UserRole.USER,
      courseAccess: [
        { courseId: 'scratch', sessions: ['1', '2'] },
        { courseId: 'appinventor', sessions: ['1'] }
      ]
    },
    {
      id: '2',
      username: 'jane_smith',
      email: 'jane@example.com',
      role: UserRole.USER,
      courseAccess: [
        { courseId: 'scratch', sessions: ['1'] }
      ]
    },
    {
      id: '3',
      username: 'admin_user',
      email: 'admin@example.com',
      role: UserRole.ADMIN,
      courseAccess: []
    }
  ]);

  // Mock courses data
  const courses = [
    { id: 'scratch', name: 'Scratch' },
    { id: 'appinventor', name: 'App Inventor' },
    { id: 'python', name: 'Python' },
    { id: 'alice3', name: 'Alice 3' },
  ];

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [newUsername, setNewUsername] = useState<string>('');
  const [newEmail, setNewEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newRole, setNewRole] = useState<UserRole>(UserRole.USER);

  const handleAddUser = () => {
    if (newUsername && newEmail && newPassword) {
      const newUser: User = {
        id: (users.length + 1).toString(),
        username: newUsername,
        email: newEmail,
        role: newRole,
        courseAccess: []
      };

      setUsers([...users, newUser]);
      setNewUsername('');
      setNewEmail('');
      setNewPassword('');
    }
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
    if (selectedUser && selectedUser.id === userId) {
      setSelectedUser(null);
    }
  };

  const handleToggleCourseAccess = (courseId: string) => {
    if (!selectedUser) return;

    const updatedUsers = users.map(user => {
      if (user.id === selectedUser.id) {
        const hasCourse = user.courseAccess.some(ca => ca.courseId === courseId);
        
        let newCourseAccess;
        if (hasCourse) {
          // Remove course access
          newCourseAccess = user.courseAccess.filter(ca => ca.courseId !== courseId);
        } else {
          // Add course access
          newCourseAccess = [...user.courseAccess, { courseId, sessions: [] }];
        }

        const updatedUser = { ...user, courseAccess: newCourseAccess };
        setSelectedUser(updatedUser);
        return updatedUser;
      }
      return user;
    });

    setUsers(updatedUsers);
  };

  const handleToggleSessionAccess = (courseId: string, sessionId: string) => {
    if (!selectedUser) return;

    const updatedUsers = users.map(user => {
      if (user.id === selectedUser.id) {
        const updatedCourseAccess = user.courseAccess.map(ca => {
          if (ca.courseId === courseId) {
            const hasSession = ca.sessions.includes(sessionId);
            
            if (hasSession) {
              // Remove session access
              return {
                ...ca,
                sessions: ca.sessions.filter(s => s !== sessionId)
              };
            } else {
              // Add session access
              return {
                ...ca,
                sessions: [...ca.sessions, sessionId]
              };
            }
          }
          return ca;
        });

        const updatedUser = { ...user, courseAccess: updatedCourseAccess };
        setSelectedUser(updatedUser);
        return updatedUser;
      }
      return user;
    });

    setUsers(updatedUsers);
  };

  // Check if a user has access to a course
  const hasAccessToCourse = (userId: string, courseId: string): boolean => {
    const user = users.find(u => u.id === userId);
    return user?.courseAccess.some(ca => ca.courseId === courseId) || false;
  };

  // Check if a user has access to a session
  const hasAccessToSession = (userId: string, courseId: string, sessionId: string): boolean => {
    const user = users.find(u => u.id === userId);
    const courseAccess = user?.courseAccess.find(ca => ca.courseId === courseId);
    return courseAccess?.sessions.includes(sessionId) || false;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
          
          <Tabs defaultValue="users">
            <TabsList className="mb-4">
              <TabsTrigger value="users">Gestionare Utilizatori</TabsTrigger>
              <TabsTrigger value="courses">Gestionare Acces Cursuri</TabsTrigger>
            </TabsList>
            
            <TabsContent value="users">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* User List */}
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Utilizatori</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Utilizator</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Rol</TableHead>
                          <TableHead>Acțiuni</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  onClick={() => setSelectedUser(user)}
                                >
                                  Select
                                </Button>
                                <Button 
                                  variant="destructive" 
                                  size="sm" 
                                  onClick={() => handleDeleteUser(user.id)}
                                >
                                  Șterge
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              
                {/* Add User */}
                <Card>
                  <CardHeader>
                    <CardTitle>Adaugă Utilizator Nou</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Nume utilizator</label>
                        <Input 
                          value={newUsername} 
                          onChange={(e) => setNewUsername(e.target.value)} 
                          placeholder="Nume utilizator"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <Input 
                          value={newEmail} 
                          onChange={(e) => setNewEmail(e.target.value)} 
                          placeholder="Email"
                          type="email"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Parolă</label>
                        <Input 
                          value={newPassword} 
                          onChange={(e) => setNewPassword(e.target.value)} 
                          placeholder="Parolă"
                          type="password"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Rol</label>
                        <Select 
                          value={newRole} 
                          onValueChange={(value) => setNewRole(value as UserRole)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selectează rol" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value={UserRole.USER}>User</SelectItem>
                            <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button 
                        className="w-full"
                        onClick={handleAddUser}
                      >
                        Adaugă Utilizator
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="courses">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* User Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle>Selectează Utilizator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select 
                      value={selectedUser?.id || ''} 
                      onValueChange={(value) => {
                        const user = users.find(u => u.id === value);
                        setSelectedUser(user || null);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selectează utilizator" />
                      </SelectTrigger>
                      <SelectContent>
                        {users.map((user) => (
                          <SelectItem key={user.id} value={user.id}>
                            {user.username}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    {selectedUser && (
                      <div className="mt-4">
                        <h3 className="font-medium">Detalii utilizator:</h3>
                        <p>Username: {selectedUser.username}</p>
                        <p>Email: {selectedUser.email}</p>
                        <p>Rol: {selectedUser.role}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              
                {/* Course Access Management */}
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Management Acces Cursuri</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedUser ? (
                      <div>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Curs</TableHead>
                              <TableHead>Acces</TableHead>
                              <TableHead>Sesiuni</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {courses.map((course) => (
                              <TableRow key={course.id}>
                                <TableCell>{course.name}</TableCell>
                                <TableCell>
                                  <Checkbox 
                                    checked={hasAccessToCourse(selectedUser.id, course.id)}
                                    onCheckedChange={() => handleToggleCourseAccess(course.id)}
                                  />
                                </TableCell>
                                <TableCell>
                                  {hasAccessToCourse(selectedUser.id, course.id) && (
                                    <div className="flex flex-wrap gap-2">
                                      {[1, 2, 3, 4, 5].map((sessionId) => (
                                        <div key={sessionId} className="flex items-center gap-2">
                                          <Checkbox 
                                            id={`session-${course.id}-${sessionId}`}
                                            checked={hasAccessToSession(selectedUser.id, course.id, sessionId.toString())}
                                            onCheckedChange={() => handleToggleSessionAccess(course.id, sessionId.toString())}
                                          />
                                          <label htmlFor={`session-${course.id}-${sessionId}`} className="text-sm">
                                            Sesiunea {sessionId}
                                          </label>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        Selectează un utilizator pentru a gestiona accesul la cursuri
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
