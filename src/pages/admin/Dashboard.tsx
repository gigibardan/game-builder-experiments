
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { User, UserCourseAccess } from '@/contexts/AuthContext';
import { toast } from 'sonner';

// Mock data - would be fetched from a backend in a real app
const COURSES = [
  { id: 'appinventor', name: 'App Inventor', sessions: ['session1', 'session2', 'session3', 'session4', 'session5', 'session6', 'session7', 'session8', 'session9'] },
  { id: 'scratch', name: 'Scratch', sessions: ['session1', 'session2'] },
  { id: 'construct3', name: 'Construct 3', sessions: ['session1'] },
  { id: 'gdevelop', name: 'GDevelop', sessions: ['session1'] },
  { id: 'alice3', name: 'Alice 3', sessions: ['session1'] },
  { id: 'microbitarcade', name: 'micro:bit Arcade', sessions: ['session1'] },
  { id: 'minecraftmodding', name: 'Minecraft Modding', sessions: ['session1'] },
  { id: 'robloxlua', name: 'Roblox Lua', sessions: ['session1'] },
  { id: 'python', name: 'Python', sessions: ['session1'] },
  { id: 'greenfoot', name: 'Greenfoot', sessions: ['session1'] },
  { id: 'godot', name: 'Godot', sessions: ['session1'] },
  { id: 'frontenddev', name: 'Frontend Development', sessions: ['session1'] }
];

const USERS = [
  { id: '2', username: 'student1', email: 'student1@example.com', role: 'student', courseAccess: [
    { courseId: 'appinventor', sessions: ['session1', 'session2'] },
    { courseId: 'scratch', sessions: ['session1'] }
  ] },
  { id: '3', username: 'student2', email: 'student2@example.com', role: 'student', courseAccess: [
    { courseId: 'python', sessions: ['all'] }
  ] },
];

const Dashboard = () => {
  const { user, isAdmin } = useAuth();
  const [users, setUsers] = useState<User[]>(USERS);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userCourseAccess, setUserCourseAccess] = useState<UserCourseAccess[]>([]);

  if (!isAdmin) {
    return null;
  }

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
    setUserCourseAccess([...user.courseAccess]);
  };

  const handleToggleCourseAccess = (courseId: string) => {
    const updatedAccess = [...userCourseAccess];
    const existingIndex = updatedAccess.findIndex(access => access.courseId === courseId);

    if (existingIndex !== -1) {
      // Remove course access
      updatedAccess.splice(existingIndex, 1);
    } else {
      // Add course access with no sessions
      updatedAccess.push({ courseId, sessions: [] });
    }

    setUserCourseAccess(updatedAccess);
  };

  const handleToggleSessionAccess = (courseId: string, sessionId: string) => {
    const updatedAccess = [...userCourseAccess];
    const courseAccessIndex = updatedAccess.findIndex(access => access.courseId === courseId);

    if (courseAccessIndex === -1) {
      // Course access doesn't exist yet, create it with this session
      updatedAccess.push({ courseId, sessions: [sessionId] });
    } else {
      const courseAccess = updatedAccess[courseAccessIndex];
      
      if (sessionId === 'all') {
        // Handle "All Sessions" toggle
        if (courseAccess.sessions.includes('all')) {
          // Remove "all" access
          courseAccess.sessions = [];
        } else {
          // Grant access to all sessions
          courseAccess.sessions = ['all'];
        }
      } else {
        // Handle individual session toggle
        if (courseAccess.sessions.includes(sessionId)) {
          // Remove session
          courseAccess.sessions = courseAccess.sessions.filter(id => id !== sessionId);
        } else {
          // If "all" is already set, don't add individual sessions
          if (!courseAccess.sessions.includes('all')) {
            // Add session
            courseAccess.sessions.push(sessionId);
          }
        }
      }
      
      updatedAccess[courseAccessIndex] = courseAccess;
    }

    setUserCourseAccess(updatedAccess);
  };

  const saveUserAccess = () => {
    if (!selectedUser) return;
    
    // Update local state (in a real app, this would be an API call)
    const updatedUsers = users.map(u => {
      if (u.id === selectedUser.id) {
        return { ...u, courseAccess: userCourseAccess };
      }
      return u;
    });
    
    setUsers(updatedUsers);
    setSelectedUser(null);
    toast.success("Accesul utilizatorului a fost actualizat cu succes!");
  };

  const hasCourseAccess = (courseId: string) => {
    return userCourseAccess.some(access => access.courseId === courseId);
  };

  const hasSessionAccess = (courseId: string, sessionId: string) => {
    const courseAccess = userCourseAccess.find(access => access.courseId === courseId);
    if (!courseAccess) return false;
    return courseAccess.sessions.includes('all') || courseAccess.sessions.includes(sessionId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Dashboard Administrator</h1>

          <Tabs defaultValue="users">
            <TabsList className="mb-6">
              <TabsTrigger value="users">Gestionare Utilizatori</TabsTrigger>
              <TabsTrigger value="courses">Gestionare Cursuri</TabsTrigger>
            </TabsList>

            <TabsContent value="users" className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Utilizatori</h2>
                
                {selectedUser ? (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-medium">
                        Editare acces pentru: <span className="text-course-blue">{selectedUser.username}</span>
                      </h3>
                      <div className="space-x-3">
                        <Button onClick={saveUserAccess} className="bg-course-blue hover:bg-course-blue/90">
                          Salvează modificările
                        </Button>
                        <Button variant="outline" onClick={() => setSelectedUser(null)}>
                          Anulează
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-8">
                      {COURSES.map(course => (
                        <div key={course.id} className="border rounded-md p-4">
                          <div className="flex items-center mb-3">
                            <input
                              type="checkbox"
                              id={`course-${course.id}`}
                              checked={hasCourseAccess(course.id)}
                              onChange={() => handleToggleCourseAccess(course.id)}
                              className="mr-2 h-4 w-4"
                            />
                            <label htmlFor={`course-${course.id}`} className="font-medium">
                              {course.name}
                            </label>
                          </div>

                          {hasCourseAccess(course.id) && (
                            <div className="ml-6 space-y-2">
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id={`${course.id}-all`}
                                  checked={hasSessionAccess(course.id, 'all')}
                                  onChange={() => handleToggleSessionAccess(course.id, 'all')}
                                  className="mr-2 h-4 w-4"
                                />
                                <label htmlFor={`${course.id}-all`} className="text-sm font-medium">
                                  Acces la toate lecțiile
                                </label>
                              </div>

                              {!hasSessionAccess(course.id, 'all') && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                                  {course.sessions.map(sessionId => (
                                    <div key={`${course.id}-${sessionId}`} className="flex items-center">
                                      <input
                                        type="checkbox"
                                        id={`${course.id}-${sessionId}`}
                                        checked={hasSessionAccess(course.id, sessionId)}
                                        onChange={() => handleToggleSessionAccess(course.id, sessionId)}
                                        className="mr-2 h-4 w-4"
                                      />
                                      <label htmlFor={`${course.id}-${sessionId}`} className="text-sm">
                                        Lecția {sessionId.replace('session', '')}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                      <thead>
                        <tr className="bg-gray-50 border-b">
                          <th className="px-4 py-2 text-left">Utilizator</th>
                          <th className="px-4 py-2 text-left">Email</th>
                          <th className="px-4 py-2 text-left">Rol</th>
                          <th className="px-4 py-2 text-left">Cursuri</th>
                          <th className="px-4 py-2 text-right">Acțiuni</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map(user => (
                          <tr key={user.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3">{user.username}</td>
                            <td className="px-4 py-3">{user.email}</td>
                            <td className="px-4 py-3">
                              <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                                {user.role === 'admin' ? 'Administrator' : 'Student'}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              {user.courseAccess.length} cursuri
                            </td>
                            <td className="px-4 py-3 text-right">
                              <Button 
                                variant="outline"
                                size="sm"
                                onClick={() => handleSelectUser(user)}
                              >
                                Editează acces
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="courses" className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Cursuri disponibile</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="bg-gray-50 border-b">
                        <th className="px-4 py-2 text-left">Curs</th>
                        <th className="px-4 py-2 text-left">ID</th>
                        <th className="px-4 py-2 text-left">Nr. lecții</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COURSES.map(course => (
                        <tr key={course.id} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium">{course.name}</td>
                          <td className="px-4 py-3">{course.id}</td>
                          <td className="px-4 py-3">{course.sessions.length}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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
