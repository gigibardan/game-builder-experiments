
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Database, 
  Code, 
  Folder, 
  FileText, 
  Users, 
  BookOpen, 
  Settings,
  Shield,
  Monitor,
  Layers,
  Component,
  GitBranch,
  Server,
  Lock
} from 'lucide-react';

const ProjectStructure = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Structura Proiectului TechMinds Academy</h1>
            <p className="text-gray-600">Documentația completă a arhitecturii, bazei de date și funcționalităților</p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">Prezentare</TabsTrigger>
              <TabsTrigger value="database">Baza de Date</TabsTrigger>
              <TabsTrigger value="courses">Cursuri</TabsTrigger>
              <TabsTrigger value="auth">Autentificare</TabsTrigger>
              <TabsTrigger value="structure">Structura Fișiere</TabsTrigger>
              <TabsTrigger value="components">Componente</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Monitor className="mr-2 h-5 w-5" />
                    Prezentare Generală
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Tehnologii Utilizate</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React 18.3.1</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Vite</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                      <Badge variant="secondary">Shadcn/ui</Badge>
                      <Badge variant="secondary">Supabase 2.49.8</Badge>
                      <Badge variant="secondary">React Router 6.26.2</Badge>
                      <Badge variant="secondary">Framer Motion 12.6.2</Badge>
                      <Badge variant="secondary">Lucide React 0.462.0</Badge>
                      <Badge variant="secondary">Sonner (Toast)</Badge>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Arhitectura Aplicației</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Frontend:</strong> React SPA cu TypeScript</li>
                      <li>• <strong>Backend:</strong> Supabase (PostgreSQL + Auth + Storage)</li>
                      <li>• <strong>Styling:</strong> Tailwind CSS cu componente Shadcn/ui</li>
                      <li>• <strong>Routing:</strong> React Router Dom</li>
                      <li>• <strong>State Management:</strong> React hooks + Context</li>
                      <li>• <strong>Animations:</strong> Framer Motion</li>
                      <li>• <strong>Icons:</strong> Lucide React</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Funcționalități Principale</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Sistem complet de autentificare și autorizare</li>
                      <li>• Management utilizatori cu roluri (admin/student)</li>
                      <li>• Cursuri de programare și robotică</li>
                      <li>• Sesiuni/lecții pentru fiecare curs</li>
                      <li>• Dashboard pentru administratori</li>
                      <li>• Sistem de acces controlat la cursuri</li>
                      <li>• Design responsive și animații</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Database Tab */}
            <TabsContent value="database" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="mr-2 h-5 w-5" />
                    Structura Bazei de Date Supabase
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      Tabelul: profiles
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Coloane:</p>
                      <ul className="text-sm space-y-1">
                        <li>• <code>id</code> (uuid, PK) - referință la auth.users</li>
                        <li>• <code>username</code> (text, NOT NULL) - nume utilizator</li>
                        <li>• <code>email</code> (text, NOT NULL) - adresa email</li>
                        <li>• <code>role</code> (user_role enum, DEFAULT 'student') - rol utilizator</li>
                        <li>• <code>first_name</code> (text, nullable) - prenume</li>
                        <li>• <code>last_name</code> (text, nullable) - nume</li>
                        <li>• <code>created_at</code> (timestamp) - data creării</li>
                        <li>• <code>updated_at</code> (timestamp) - data ultimei actualizări</li>
                      </ul>
                      <p className="text-sm mt-2"><strong>Roluri disponibile:</strong> 'student' | 'admin'</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Tabelul: courses
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Coloane:</p>
                      <ul className="text-sm space-y-1">
                        <li>• <code>id</code> (uuid, PK, gen_random_uuid()) - identificator unic</li>
                        <li>• <code>name</code> (text, NOT NULL) - numele cursului</li>
                        <li>• <code>slug</code> (text, NOT NULL) - URL slug pentru curs</li>
                        <li>• <code>description</code> (text, nullable) - descrierea cursului</li>
                        <li>• <code>created_at</code> (timestamp) - data creării</li>
                        <li>• <code>updated_at</code> (timestamp) - data ultimei actualizări</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      Tabelul: sessions
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Coloane:</p>
                      <ul className="text-sm space-y-1">
                        <li>• <code>id</code> (uuid, PK, gen_random_uuid()) - identificator unic</li>
                        <li>• <code>course_id</code> (uuid, NOT NULL, FK) - referință la courses</li>
                        <li>• <code>name</code> (text, NOT NULL) - numele sesiunii</li>
                        <li>• <code>slug</code> (text, NOT NULL) - URL slug pentru sesiune</li>
                        <li>• <code>description</code> (text, nullable) - descrierea sesiunii</li>
                        <li>• <code>order_number</code> (integer, NOT NULL) - ordinea sesiunii</li>
                        <li>• <code>created_at</code> (timestamp) - data creării</li>
                        <li>• <code>updated_at</code> (timestamp) - data ultimei actualizări</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Lock className="mr-2 h-4 w-4" />
                      Tabelul: user_access
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Coloane:</p>
                      <ul className="text-sm space-y-1">
                        <li>• <code>id</code> (uuid, PK, gen_random_uuid()) - identificator unic</li>
                        <li>• <code>user_id</code> (uuid, NOT NULL, FK) - referință la profiles</li>
                        <li>• <code>course_id</code> (uuid, NOT NULL, FK) - referință la courses</li>
                        <li>• <code>session_id</code> (uuid, nullable, FK) - referință la sessions</li>
                        <li>• <code>created_at</code> (timestamp) - data creării</li>
                        <li>• <code>updated_at</code> (timestamp) - data ultimei actualizări</li>
                      </ul>
                      <p className="text-sm mt-2"><strong>Funcție:</strong> Controlează accesul utilizatorilor la cursuri și sesiuni</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Server className="mr-2 h-4 w-4" />
                      Funcții Database
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="text-sm space-y-2">
                        <li>• <code>handle_new_user()</code> - trigger pentru crearea automată a profilului</li>
                        <li>• <code>get_user_role(user_id uuid)</code> - returnează rolul utilizatorului</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Courses Tab */}
            <TabsContent value="courses" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Cursuri și Sesiuni
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Cursuri de Programare (12 cursuri)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-medium">Scratch</h4>
                        <p className="text-sm text-gray-600">Laboratorul de Jocuri • 8-12 ani</p>
                        <p className="text-xs mt-1">Link: /scratch</p>
                        <p className="text-xs">11 sesiuni complete</p>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-medium">AppInventor</h4>
                        <p className="text-sm text-gray-600">Atelierul de Aplicații Mobile • 10-14 ani</p>
                        <p className="text-xs mt-1">Link: /appinventor</p>
                        <p className="text-xs">9 sesiuni complete</p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium">Construct 3</h4>
                        <p className="text-sm text-gray-600">Dezvoltare de Jocuri 2D • 10-15 ani</p>
                        <p className="text-xs mt-1">Link: /construct3</p>
                        <p className="text-xs">Status: Coming Soon</p>
                      </div>

                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h4 className="font-medium">GDevelop</h4>
                        <p className="text-sm text-gray-600">Fabrica de Jocuri • 11-15 ani</p>
                        <p className="text-xs mt-1">Link: /gdevelop</p>
                        <p className="text-xs">1 sesiune</p>
                      </div>

                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h4 className="font-medium">Alice 3</h4>
                        <p className="text-sm text-gray-600">Povești 3D Interactive • 12-16 ani</p>
                        <p className="text-xs mt-1">Link: /alice3</p>
                        <p className="text-xs">4 sesiuni complete</p>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-medium">micro:bit Arcade</h4>
                        <p className="text-sm text-gray-600">Jocuri și Electronice • 11-15 ani</p>
                        <p className="text-xs mt-1">Link: /microbit-arcade</p>
                        <p className="text-xs">Status: Coming Soon</p>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-medium">Minecraft Modding</h4>
                        <p className="text-sm text-gray-600">De la jucător la creator • 12-16 ani</p>
                        <p className="text-xs mt-1">Link: /minecraft-modding</p>
                        <p className="text-xs">3 sesiuni complete</p>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-medium">Roblox Lua</h4>
                        <p className="text-sm text-gray-600">Universul Dezvoltării de Jocuri • 12-17 ani</p>
                        <p className="text-xs mt-1">Link: /roblox-lua</p>
                        <p className="text-xs">7 sesiuni complete</p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium">Python</h4>
                        <p className="text-sm text-gray-600">De la Cod la Aplicații • 13-18 ani</p>
                        <p className="text-xs mt-1">Link: /python</p>
                        <p className="text-xs">1 sesiune</p>
                      </div>

                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-medium">Greenfoot</h4>
                        <p className="text-sm text-gray-600">Java prin Jocuri • 14-18 ani</p>
                        <p className="text-xs mt-1">Link: /greenfoot</p>
                        <p className="text-xs">3 sesiuni complete</p>
                      </div>

                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h4 className="font-medium">Godot</h4>
                        <p className="text-sm text-gray-600">Game Development Pro • 14-18 ani</p>
                        <p className="text-xs mt-1">Link: /godot</p>
                        <p className="text-xs">6 sesiuni complete</p>
                      </div>

                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <h4 className="font-medium">Frontend Development</h4>
                        <p className="text-sm text-gray-600">Construiește Web-ul Viitorului • 13-18 ani</p>
                        <p className="text-xs mt-1">Link: /frontend-dev</p>
                        <p className="text-xs">Status: Coming Soon</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3">Cursuri de Robotică (3 cursuri)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-medium">LEGO SPIKE Essentials</h4>
                        <p className="text-sm text-gray-600">Primul pas în robotică • 7-9 ani</p>
                        <p className="text-xs mt-1">Link: /lego-spike-essentials</p>
                        <p className="text-xs">5 sesiuni complete</p>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-medium">LEGO SPIKE Prime</h4>
                        <p className="text-sm text-gray-600">Robotică avansată • 9-12 ani</p>
                        <p className="text-xs mt-1">Link: /lego-spike-prime</p>
                        <p className="text-xs">Status: Coming Soon</p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium">micro:bit Explorers</h4>
                        <p className="text-sm text-gray-600">Exploratori ai Inovației • 9-12 ani</p>
                        <p className="text-xs mt-1">Link: /microbit-explorers</p>
                        <p className="text-xs">Status: Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Auth Tab */}
            <TabsContent value="auth" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Sistem de Autentificare
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Funcționalități Auth</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Provider:</strong> Supabase Auth</li>
                      <li>• <strong>Metode:</strong> Email/Password</li>
                      <li>• <strong>Roluri:</strong> admin, student</li>
                      <li>• <strong>Pagini:</strong> /auth (login/signup), /auth/forgot-password, /auth/reset-password</li>
                      <li>• <strong>Protecție:</strong> ProtectedRoute component</li>
                      <li>• <strong>Context:</strong> useAuth hook</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Rute Protejate</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Admin Only:</p>
                      <ul className="text-sm space-y-1">
                        <li>• /admin/dashboard - Dashboard principal admin</li>
                        <li>• /admin/users - Management utilizatori</li>
                        <li>• /admin/structure - Această pagină</li>
                      </ul>
                      
                      <p className="text-sm font-medium mb-2 mt-4">Autentificare Necesară:</p>
                      <ul className="text-sm space-y-1">
                        <li>• /student/dashboard - Dashboard student</li>
                        <li>• Toate sesiunile cursurilor (protejate prin CourseAccessGuard)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Hooks și Servicii</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• <code>useAuth()</code> - context pentru autentificare</li>
                      <li>• <code>useUsers()</code> - management utilizatori</li>
                      <li>• <code>useUserAccess()</code> - controlul accesului</li>
                      <li>• <code>useCourses()</code> - gestionarea cursurilor</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* File Structure Tab */}
            <TabsContent value="structure" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Folder className="mr-2 h-5 w-5" />
                    Structura Fișierelor
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-3">Directoare Principale</h3>
                    <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                      <div>src/</div>
                      <div className="ml-4">├── components/ - Componente reutilizabile</div>
                      <div className="ml-4">├── pages/ - Pagini aplicației</div>
                      <div className="ml-4">├── hooks/ - Custom hooks</div>
                      <div className="ml-4">├── services/ - Servicii API</div>
                      <div className="ml-4">├── types/ - Tipuri TypeScript</div>
                      <div className="ml-4">├── lib/ - Utilitare și configurări</div>
                      <div className="ml-4">└── integrations/ - Integrări externe</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Pagini (/pages)</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium mb-2">Pagini Principale:</p>
                          <ul className="space-y-1">
                            <li>• Home.tsx - Pagina principală</li>
                            <li>• About.tsx - Despre noi</li>
                            <li>• Contact.tsx - Contact</li>
                            <li>• Courses.tsx - Lista cursuri</li>
                            <li>• NotFound.tsx - 404</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium mb-2">Auth:</p>
                          <ul className="space-y-1">
                            <li>• auth/AuthPage.tsx</li>
                            <li>• auth/ForgotPassword.tsx</li>
                            <li>• auth/ResetPassword.tsx</li>
                            <li>• auth/Unauthorized.tsx</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium mb-2">Admin:</p>
                          <ul className="space-y-1">
                            <li>• admin/Dashboard.tsx</li>
                            <li>• admin/UserManagement.tsx</li>
                            <li>• admin/ProjectStructure.tsx</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium mb-2">Student:</p>
                          <ul className="space-y-1">
                            <li>• student/StudentDashboard.tsx</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Pagini Cursuri (/pages/courses)</h3>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        <div>Scratch.tsx</div>
                        <div>AppInventor.tsx</div>
                        <div>Construct3.tsx</div>
                        <div>GDevelop.tsx</div>
                        <div>Alice3.tsx</div>
                        <div>MicrobitArcade.tsx</div>
                        <div>MinecraftModding.tsx</div>
                        <div>RobloxLua.tsx</div>
                        <div>Python.tsx</div>
                        <div>Greenfoot.tsx</div>
                        <div>Godot.tsx</div>
                        <div>FrontendDev.tsx</div>
                        <div>LegoSpikeEssentials.tsx</div>
                        <div>LegoSpikePrime.tsx</div>
                        <div>MicrobitExplorers.tsx</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Assets Statice (/public/assets)</h3>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm">
                      <ul className="space-y-1">
                        <li>• <strong>images/scratch/</strong> - 50+ imagini pentru cursul Scratch</li>
                        <li>• <strong>images/roblox/</strong> - 80+ imagini pentru cursul Roblox</li>
                        <li>• <strong>images/robotica/</strong> - 20+ imagini pentru robotică</li>
                        <li>• <strong>images/appinventor/</strong> - Imagini App Inventor</li>
                        <li>• <strong>images/gdevelop/</strong> - Imagini GDevelop</li>
                        <li>• <strong>images/mcreator/</strong> - Imagini Minecraft</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Components Tab */}
            <TabsContent value="components" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Component className="mr-2 h-5 w-5" />
                    Componente și Hooks
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Componente UI Custom</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Layout:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Header.tsx - Header cu navigație</li>
                          <li>• Footer.tsx - Footer site</li>
                          <li>• LessonLayout.tsx - Layout pentru lecții</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Functional:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• ProtectedRoute.tsx - Protecție rute</li>
                          <li>• CourseAccessGuard.tsx - Control acces</li>
                          <li>• ReadingProgressBar.tsx - Progress bar</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Display:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• CourseCard.tsx - Card-uri cursuri</li>
                          <li>• SessionCard.tsx - Card-uri sesiuni</li>
                          <li>• CourseComingSoon.tsx - Placeholder</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Content:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• CodeBlock.tsx - Afișare cod</li>
                          <li>• CodeExample.tsx - Exemple cod</li>
                          <li>• ImageModal.tsx - Modal imagini</li>
                          <li>• LessonComponents.tsx - Componente lecții</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3">Hooks Custom</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="text-sm space-y-2">
                        <li>• <strong>useAuth()</strong> - Gestionează autentificarea și starea utilizatorului</li>
                        <li>• <strong>useUsers()</strong> - Fetch și management utilizatori</li>
                        <li>• <strong>useUserAccess()</strong> - Controlează accesul la cursuri și sesiuni</li>
                        <li>• <strong>useCourses()</strong> - Gestionează cursurile și sesiunile</li>
                        <li>• <strong>useIsMobile()</strong> - Detectează dispozitive mobile</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Servicii API</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="text-sm space-y-2">
                        <li>• <strong>courseService.ts</strong> - Operații cu cursuri și sesiuni</li>
                        <li>• <strong>userService.ts</strong> - Operații cu utilizatori</li>
                        <li>• <strong>userAccessService.ts</strong> - Gestionează accesul utilizatorilor</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Componente Shadcn/ui</h3>
                    <p className="text-sm text-gray-600 mb-2">40+ componente UI instalate:</p>
                    <div className="bg-gray-50 p-4 rounded-lg text-xs">
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                        <div>Button</div>
                        <div>Card</div>
                        <div>Input</div>
                        <div>Label</div>
                        <div>Tabs</div>
                        <div>Badge</div>
                        <div>Dialog</div>
                        <div>Select</div>
                        <div>Table</div>
                        <div>Toast</div>
                        <div>Alert</div>
                        <div>Avatar</div>
                        <div>Calendar</div>
                        <div>Checkbox</div>
                        <div>Command</div>
                        <div>Dropdown</div>
                        <div>Form</div>
                        <div>Hover Card</div>
                        <div>Navigation</div>
                        <div>Popover</div>
                        <div>Progress</div>
                        <div>Radio Group</div>
                        <div>Scroll Area</div>
                        <div>Separator</div>
                        <div>Sheet</div>
                        <div>Sidebar</div>
                        <div>Skeleton</div>
                        <div>Slider</div>
                        <div>Switch</div>
                        <div>Textarea</div>
                        <div>Toggle</div>
                        <div>Tooltip</div>
                        <div>și altele...</div>
                      </div>
                    </div>
                  </div>
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

export default ProjectStructure;
