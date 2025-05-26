
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { User, UserRole } from '@/types/auth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Shield, Book, Settings, BarChart3, UserPlus, FileText, Key } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
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

  const handleFeatureInDevelopment = () => {
    toast.info("Această funcționalitate este în curs de dezvoltare");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard Administrator</h1>
              <p className="text-gray-500">Bine ai venit, {user?.username}! Administrează platforma TechMinds Academy</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Button asChild variant="outline" className="mr-2">
                <Link to="/">
                  Înapoi la site
                </Link>
              </Button>
              <Button asChild>
                <Link to="/admin/users">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Adaugă Utilizator
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-blue-700 flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Utilizatori
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{users.length}</div>
                <p className="text-gray-600">Conturi active</p>
                <Button asChild variant="ghost" className="w-full mt-4 text-blue-700 hover:bg-blue-100">
                  <Link to="/admin/users">
                    Administrare Utilizatori
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-green-700 flex items-center">
                  <Book className="mr-2 h-5 w-5" />
                  Cursuri
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{courses.length}</div>
                <p className="text-gray-600">Cursuri disponibile</p>
                <Button onClick={handleFeatureInDevelopment} variant="ghost" className="w-full mt-4 text-green-700 hover:bg-green-100">
                  Administrare Cursuri
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-purple-700 flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Permisiuni
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2</div>
                <p className="text-gray-600">Niveluri de acces</p>
                <Button onClick={handleFeatureInDevelopment} variant="ghost" className="w-full mt-4 text-purple-700 hover:bg-purple-100">
                  Administrare Permisiuni
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-amber-700 flex items-center">
                  <Settings className="mr-2 h-5 w-5" />
                  Setări
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-600 mt-2">Configurarea platformei</div>
                <Button onClick={handleFeatureInDevelopment} variant="ghost" className="w-full mt-4 text-amber-700 hover:bg-amber-100">
                  Setări Platformă
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Prezentare generală</TabsTrigger>
                  <TabsTrigger value="recent">Activitate recentă</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart3 className="mr-2 h-5 w-5" />
                        Statistici Platformă
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
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
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Distribuția Utilizatorilor</h3>
                          <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                              <div>
                                <span className="text-xs font-semibold inline-block text-blue-600">
                                  Studenți
                                </span>
                              </div>
                              <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-blue-600">
                                  {Math.round((users.filter(u => u.role === UserRole.USER).length / users.length) * 100)}%
                                </span>
                              </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                              <div style={{ width: `${(users.filter(u => u.role === UserRole.USER).length / users.length) * 100}%` }} 
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500">
                              </div>
                            </div>
                            
                            <div className="flex mb-2 items-center justify-between">
                              <div>
                                <span className="text-xs font-semibold inline-block text-purple-600">
                                  Administratori
                                </span>
                              </div>
                              <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-purple-600">
                                  {Math.round((users.filter(u => u.role === UserRole.ADMIN).length / users.length) * 100)}%
                                </span>
                              </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                              <div style={{ width: `${(users.filter(u => u.role === UserRole.ADMIN).length / users.length) * 100}%` }} 
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="recent">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="mr-2 h-5 w-5" />
                        Activitate Recentă
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li className="flex items-start space-x-3 border-b pb-4">
                          <span className="bg-blue-100 text-blue-700 p-1.5 rounded-full">
                            <UserPlus size={16} />
                          </span>
                          <div>
                            <p className="text-sm">Utilizator nou adăugat: <strong>student1</strong></p>
                            <p className="text-xs text-gray-500">Acum 2 zile</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3 border-b pb-4">
                          <span className="bg-green-100 text-green-700 p-1.5 rounded-full">
                            <Book size={16} />
                          </span>
                          <div>
                            <p className="text-sm">Curs nou adăugat: <strong>Scratch</strong></p>
                            <p className="text-xs text-gray-500">Acum 5 zile</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="bg-amber-100 text-amber-700 p-1.5 rounded-full">
                            <Key size={16} />
                          </span>
                          <div>
                            <p className="text-sm">Parolă resetată pentru: <strong>student2</strong></p>
                            <p className="text-xs text-gray-500">Acum 1 săptămână</p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Acțiuni Rapide
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full justify-start">
                    <Link to="/admin/users">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Adaugă Utilizator Nou
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" onClick={handleFeatureInDevelopment}>
                    <Book className="mr-2 h-4 w-4" />
                    Adaugă Curs Nou
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" onClick={handleFeatureInDevelopment}>
                    <Key className="mr-2 h-4 w-4" />
                    Resetează Parole
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" onClick={handleFeatureInDevelopment}>
                    <Settings className="mr-2 h-4 w-4" />
                    Configurare Platformă
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
