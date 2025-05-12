
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { User, UserRole } from '@/types/auth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock users data
  const [users] = useState<User[]>([
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Gestionare Utilizatori</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 mb-4">Administrarea conturilor de student și accesul la cursuri</p>
                <Button asChild className="w-full">
                  <Link to="/admin/users">
                    <Users className="mr-2 h-4 w-4" />
                    Acces Management Utilizatori
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Utilizatori</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{users.length}</div>
                <p className="text-gray-500">Conturi active pe platformă</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Cursuri</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{courses.length}</div>
                <p className="text-gray-500">Cursuri disponibile pe platformă</p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="overview">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Prezentare generală</TabsTrigger>
              <TabsTrigger value="recent">Activitate recentă</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Statistici Platformă</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="text-sm font-medium text-blue-600">Total Studenți</h3>
                          <div className="text-2xl font-bold">{users.filter(u => u.role === UserRole.USER).length}</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h3 className="text-sm font-medium text-green-600">Total Administratori</h3>
                          <div className="text-2xl font-bold">{users.filter(u => u.role === UserRole.ADMIN).length}</div>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg">
                          <h3 className="text-sm font-medium text-amber-600">Cursuri Active</h3>
                          <div className="text-2xl font-bold">{courses.length}</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h3 className="text-sm font-medium text-purple-600">Lecții Totale</h3>
                          <div className="text-2xl font-bold">40</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="recent">
              <Card>
                <CardHeader>
                  <CardTitle>Activitate Recentă</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-center py-8">Nu există activitate recentă de afișat</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
