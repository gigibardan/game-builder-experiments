
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
  Lock,
  Layout,
  Palette,
  Zap,
  Globe,
  Cpu,
  HardDrive,
  Network,
  Key,
  Eye,
  Edit3
} from 'lucide-react';

const ProjectStructure = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">📊 Structura Completă TechMinds Academy</h1>
            <p className="text-gray-600">Documentația detaliată a arhitecturii, bazei de date, componente, pagini și funcționalități</p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-8 mb-6">
              <TabsTrigger value="overview">Prezentare</TabsTrigger>
              <TabsTrigger value="database">Baza de Date</TabsTrigger>
              <TabsTrigger value="courses">Cursuri</TabsTrigger>
              <TabsTrigger value="pages">Pagini</TabsTrigger>
              <TabsTrigger value="components">Componente</TabsTrigger>
              <TabsTrigger value="auth">Autentificare</TabsTrigger>
              <TabsTrigger value="structure">Fișiere</TabsTrigger>
              <TabsTrigger value="features">Funcționalități</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Monitor className="mr-2 h-5 w-5" />
                      Stack Tehnologic
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Cpu className="mr-2 h-4 w-4" />
                        Frontend
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">React 18.3.1</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Vite</Badge>
                        <Badge variant="secondary">React Router 6.26.2</Badge>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Palette className="mr-2 h-4 w-4" />
                        Styling
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Tailwind CSS</Badge>
                        <Badge variant="secondary">Shadcn/ui</Badge>
                        <Badge variant="secondary">Framer Motion 12.6.2</Badge>
                        <Badge variant="secondary">Lucide React 0.462.0</Badge>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Server className="mr-2 h-4 w-4" />
                        Backend & Database
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Supabase 2.49.8</Badge>
                        <Badge variant="secondary">PostgreSQL</Badge>
                        <Badge variant="secondary">Row Level Security</Badge>
                        <Badge variant="secondary">Real-time</Badge>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Zap className="mr-2 h-4 w-4" />
                        Utilitare
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Sonner (Toast)</Badge>
                        <Badge variant="secondary">Date-fns</Badge>
                        <Badge variant="secondary">Class Variance Authority</Badge>
                        <Badge variant="secondary">Tailwind Merge</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="mr-2 h-5 w-5" />
                      Arhitectura Aplicației
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <strong>SPA (Single Page Application)</strong> cu React și TypeScript
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <strong>Client-Side Routing</strong> cu React Router Dom
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <strong>State Management</strong> cu React Hooks și Context API
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <strong>Responsive Design</strong> cu Tailwind CSS
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <strong>Real-time Updates</strong> cu Supabase subscriptions
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <strong>Component-Based Architecture</strong> cu Shadcn/ui
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HardDrive className="mr-2 h-5 w-5" />
                    Statistici Proiect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">15</div>
                      <div className="text-sm text-gray-600">Cursuri Total</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">150+</div>
                      <div className="text-sm text-gray-600">Sesiuni/Lecții</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">200+</div>
                      <div className="text-sm text-gray-600">Componente</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">300+</div>
                      <div className="text-sm text-gray-600">Imagini Assets</div>
                    </div>
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
                    Schema Baza de Date Supabase
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        Tabelul: profiles
                      </h3>
                      <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                        <div className="text-sm">
                          <code className="bg-blue-100 px-2 py-1 rounded">id</code> (uuid, PK) - referință la auth.users
                        </div>
                        <div className="text-sm">
                          <code className="bg-blue-100 px-2 py-1 rounded">username</code> (text, NOT NULL) - nume utilizator unic
                        </div>
                        <div className="text-sm">
                          <code className="bg-blue-100 px-2 py-1 rounded">email</code> (text, NOT NULL) - adresa email
                        </div>
                        <div className="text-sm">
                          <code className="bg-blue-100 px-2 py-1 rounded">role</code> (user_role enum, DEFAULT 'student')
                        </div>
                        <div className="text-sm">
                          <code className="bg-blue-100 px-2 py-1 rounded">first_name</code> (text, nullable) - prenume opțional
                        </div>
                        <div className="text-sm">
                          <code className="bg-blue-100 px-2 py-1 rounded">last_name</code> (text, nullable) - nume opțional
                        </div>
                        <div className="text-sm">
                          <code className="bg-blue-100 px-2 py-1 rounded">created_at</code> / <code className="bg-blue-100 px-2 py-1 rounded">updated_at</code> (timestamp)
                        </div>
                        <div className="mt-2 p-2 bg-blue-100 rounded text-xs">
                          <strong>Enum:</strong> user_role → 'student' | 'admin'
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Tabelul: courses
                      </h3>
                      <div className="bg-green-50 p-4 rounded-lg space-y-2">
                        <div className="text-sm">
                          <code className="bg-green-100 px-2 py-1 rounded">id</code> (uuid, PK, gen_random_uuid())
                        </div>
                        <div className="text-sm">
                          <code className="bg-green-100 px-2 py-1 rounded">name</code> (text, NOT NULL) - numele cursului
                        </div>
                        <div className="text-sm">
                          <code className="bg-green-100 px-2 py-1 rounded">slug</code> (text, NOT NULL, UNIQUE) - URL slug
                        </div>
                        <div className="text-sm">
                          <code className="bg-green-100 px-2 py-1 rounded">description</code> (text, nullable) - descriere
                        </div>
                        <div className="text-sm">
                          <code className="bg-green-100 px-2 py-1 rounded">created_at</code> / <code className="bg-green-100 px-2 py-1 rounded">updated_at</code>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        Tabelul: sessions
                      </h3>
                      <div className="bg-purple-50 p-4 rounded-lg space-y-2">
                        <div className="text-sm">
                          <code className="bg-purple-100 px-2 py-1 rounded">id</code> (uuid, PK, gen_random_uuid())
                        </div>
                        <div className="text-sm">
                          <code className="bg-purple-100 px-2 py-1 rounded">course_id</code> (uuid, FK → courses.id)
                        </div>
                        <div className="text-sm">
                          <code className="bg-purple-100 px-2 py-1 rounded">name</code> (text, NOT NULL) - numele sesiunii
                        </div>
                        <div className="text-sm">
                          <code className="bg-purple-100 px-2 py-1 rounded">slug</code> (text, NOT NULL) - URL slug
                        </div>
                        <div className="text-sm">
                          <code className="bg-purple-100 px-2 py-1 rounded">order_number</code> (integer) - ordinea sesiunii
                        </div>
                        <div className="text-sm">
                          <code className="bg-purple-100 px-2 py-1 rounded">description</code> (text, nullable)
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Lock className="mr-2 h-4 w-4" />
                        Tabelul: user_access
                      </h3>
                      <div className="bg-orange-50 p-4 rounded-lg space-y-2">
                        <div className="text-sm">
                          <code className="bg-orange-100 px-2 py-1 rounded">id</code> (uuid, PK)
                        </div>
                        <div className="text-sm">
                          <code className="bg-orange-100 px-2 py-1 rounded">user_id</code> (uuid, FK → profiles.id)
                        </div>
                        <div className="text-sm">
                          <code className="bg-orange-100 px-2 py-1 rounded">course_id</code> (uuid, FK → courses.id)
                        </div>
                        <div className="text-sm">
                          <code className="bg-orange-100 px-2 py-1 rounded">session_id</code> (uuid, nullable, FK → sessions.id)
                        </div>
                        <div className="text-sm text-orange-700 mt-2">
                          <strong>Scop:</strong> Controlează accesul granular la cursuri și sesiuni
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Server className="mr-2 h-4 w-4" />
                      Funcții Database & Triggers
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">🔧 handle_new_user()</h4>
                        <p className="text-sm text-gray-600 mb-2">Trigger function pentru crearea automată a profilului când se înregistrează un utilizator nou</p>
                        <div className="text-xs bg-gray-100 p-2 rounded">
                          <strong>Trigger:</strong> AFTER INSERT ON auth.users
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">🔍 get_user_role(user_id)</h4>
                        <p className="text-sm text-gray-600 mb-2">Returnează rolul utilizatorului pentru verificări de autorizare</p>
                        <div className="text-xs bg-gray-100 p-2 rounded">
                          <strong>Returns:</strong> user_role enum
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Shield className="mr-2 h-4 w-4" />
                      Row Level Security (RLS)
                    </h3>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-sm text-red-700 mb-2">
                        <strong>Status:</strong> RLS este activat pe toate tabelele pentru securitate maximă
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>profiles:</strong> Utilizatorii pot vedea doar propriul profil</li>
                        <li>• <strong>user_access:</strong> Access controlat prin verificări de autorizare</li>
                        <li>• <strong>courses/sessions:</strong> Acces public pentru citire, admin pentru modificare</li>
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
                    Cursuri de Programare (12 cursuri)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Scratch</h4>
                        <Badge variant="outline" className="text-green-600">Complet</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Laboratorul de Jocuri • 8-12 ani</p>
                      <div className="text-xs space-y-1">
                        <div><strong>Slug:</strong> /scratch</div>
                        <div><strong>Sesiuni:</strong> 11 complete</div>
                        <div><strong>Assets:</strong> 50+ imagini</div>
                      </div>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">App Inventor</h4>
                        <Badge variant="outline" className="text-green-600">Complet</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Atelierul de Aplicații Mobile • 10-14 ani</p>
                      <div className="text-xs space-y-1">
                        <div><strong>Slug:</strong> /appinventor</div>
                        <div><strong>Sesiuni:</strong> 9 complete</div>
                        <div><strong>Assets:</strong> 20+ imagini</div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Construct 3</h4>
                        <Badge variant="outline" className="text-orange-500">Coming Soon</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Dezvoltare de Jocuri 2D • 10-15 ani</p>
                      <div className="text-xs space-y-1">
                        <div><strong>Slug:</strong> /construct3</div>
                        <div><strong>Status:</strong> Pagina structurată</div>
                      </div>
                    </div>

                    <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">GDevelop</h4>
                        <Badge variant="outline" className="text-yellow-600">Parțial</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Fabrica de Jocuri • 11-15 ani</p>
                      <div className="text-xs space-y-1">
                        <div><strong>Slug:</strong> /gdevelop</div>
                        <div><strong>Sesiuni:</strong> 1 din 14</div>
                        <div><strong>Hero:</strong> Design Minecraft-style</div>
                      </div>
                    </div>

                    <div className="bg-pink-50 border border-pink-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Alice 3</h4>
                        <Badge variant="outline" className="text-green-600">Complet</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Povești 3D Interactive • 12-16 ani</p>
                      <div className="text-xs space-y-1">
                        <div><strong>Slug:</strong> /alice3</div>
                        <div><strong>Sesiuni:</strong> 4 complete</div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Minecraft Modding</h4>
                        <Badge variant="outline" className="text-yellow-600">Parțial</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">De la jucător la creator • 12-16 ani</p>
                      <div className="text-xs space-y-1">
                        <div><strong>Slug:</strong> /minecraft-modding</div>
                        <div><strong>Sesiuni:</strong> 3 din 14</div>
                        <div><strong>Hero:</strong> Design Minecraft cu blocuri</div>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Roblox Lua</h4>
                        <Badge variant="outline" className="text-green-600">Complet</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Universul Dezvoltării de Jocuri • 12-17 ani</p>
                      <div className="text-xs space-y-1">
                        <div><strong>Slug:</strong> /roblox-lua</div>
                        <div><strong>Sesiuni:</strong> 7 complete</div>
                        <div><strong>Assets:</strong> 80+ imagini</div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Python</h4>
                        <Badge variant="outline" className="text-yellow-600">Început</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">De la Cod la Aplicații • 13-18 ani</p>
                      <div className="text-xs space-y-1">
                        <div><strong>Slug:</strong> /python</div>
                        <div><strong>Sesiuni:</strong> 1 din 14</div>
                        <div><strong>Hero:</strong> Design cu cod floating</div>
                      </div>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Greenfoot</h4>
                        <Badge variant="outline" className="text-green-600">Complet</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Java prin Jocuri • 14-18 ani</p>
                      <div className="text-xs space-y-1">
                        <div><strong>Slug:</strong> /greenfoot</div>
                        <div><strong>Sesiuni:</strong> 3 din 14</div>
                      </div>
                    </div>

                    <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Godot</h4>
                        <Badge variant="outline" className="text-green-600">Complet</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Game Development Pro • 14-18 ani</p>
                      <div className="text-xs space-y-1">
                        <div><strong>Slug:</strong> /godot</div>
                        <div><strong>Sesiuni:</strong> 6 din 14</div>
                      </div>
                    </div>

                    <div className="bg-cyan-50 border border-cyan-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Frontend Dev</h4>
                        <Badge variant="outline" className="text-orange-500">Coming Soon</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Construiește Web-ul Viitorului • 13-18 ani</p>
                      <div className="text-xs space-y-1">
                        <div><strong>Slug:</strong> /frontend-dev</div>
                        <div><strong>Status:</strong> Structură pregătită</div>
                      </div>
                    </div>

                    <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">micro:bit Arcade</h4>
                        <Badge variant="outline" className="text-orange-500">Coming Soon</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Jocuri și Electronice • 11-15 ani</p>
                      <div className="text-xs space-y-1">
                        <div><strong>Slug:</strong> /microbit-arcade</div>
                        <div><strong>Status:</strong> Planificat</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="mr-2 h-5 w-5" />
                    Cursuri de Robotică (3 cursuri)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">LEGO SPIKE Essentials</h4>
                        <Badge variant="outline" className="text-green-600">Complet</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Primul pas în robotică • 7-9 ani</p>
                      <div className="text-xs space-y-1">
                        <div><strong>Slug:</strong> /lego-spike-essentials</div>
                        <div><strong>Sesiuni:</strong> 5 complete</div>
                        <div><strong>Assets:</strong> 25+ imagini robotică</div>
                        <div><strong>Proiecte:</strong> Carusel, Roată, Teleferic, Ceaiuri, Stand</div>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">LEGO SPIKE Prime</h4>
                        <Badge variant="outline" className="text-orange-500">Coming Soon</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Robotică avansată • 9-12 ani</p>
                      <div className="text-xs space-y-1">
                        <div><strong>Slug:</strong> /lego-spike-prime</div>
                        <div><strong>Status:</strong> Structură pregătită</div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">micro:bit Explorers</h4>
                        <Badge variant="outline" className="text-orange-500">Coming Soon</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Exploratori ai Inovației • 9-12 ani</p>
                      <div className="text-xs space-y-1">
                        <div><strong>Slug:</strong> /microbit-explorers</div>
                        <div><strong>Status:</strong> Planificat</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Pages Tab */}
            <TabsContent value="pages" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-5 w-5" />
                    Structura Completă a Paginilor
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Layout className="mr-2 h-4 w-4" />
                        Pagini Publice (6 pagini)
                      </h3>
                      <div className="space-y-2">
                        <div className="bg-blue-50 p-3 rounded border border-blue-200">
                          <div className="font-medium">🏠 Home (HomePage.tsx)</div>
                          <div className="text-sm text-gray-600">Route: / • Pagina principală cu hero și prezentare</div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded border border-blue-200">
                          <div className="font-medium">📚 Courses (Courses.tsx)</div>
                          <div className="text-sm text-gray-600">Route: /courses • Lista completă cursuri cu filtrare</div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded border border-blue-200">
                          <div className="font-medium">ℹ️ About (About.tsx)</div>
                          <div className="text-sm text-gray-600">Route: /about • Despre TechMinds Academy</div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded border border-blue-200">
                          <div className="font-medium">📞 Contact (Contact.tsx)</div>
                          <div className="text-sm text-gray-600">Route: /contact • Informații de contact</div>
                        </div>
                        <div className="bg-red-50 p-3 rounded border border-red-200">
                          <div className="font-medium">🔒 Unauthorized (Unauthorized.tsx)</div>
                          <div className="text-sm text-gray-600">Route: /unauthorized • Acces interzis</div>
                        </div>
                        <div className="bg-red-50 p-3 rounded border border-red-200">
                          <div className="font-medium">❌ NotFound (NotFound.tsx)</div>
                          <div className="text-sm text-gray-600">Route: * • Pagina 404</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Shield className="mr-2 h-4 w-4" />
                        Pagini Autentificare (4 pagini)
                      </h3>
                      <div className="space-y-2">
                        <div className="bg-green-50 p-3 rounded border border-green-200">
                          <div className="font-medium">🔐 AuthPage (AuthPage.tsx)</div>
                          <div className="text-sm text-gray-600">Route: /auth • Login/Signup cu tab switching</div>
                        </div>
                        <div className="bg-green-50 p-3 rounded border border-green-200">
                          <div className="font-medium">🔑 ForgotPassword (ForgotPassword.tsx)</div>
                          <div className="text-sm text-gray-600">Route: /auth/forgot-password • Reset parolă</div>
                        </div>
                        <div className="bg-green-50 p-3 rounded border border-green-200">
                          <div className="font-medium">🔄 ResetPassword (ResetPassword.tsx)</div>
                          <div className="text-sm text-gray-600">Route: /auth/reset-password • Setare parolă nouă</div>
                        </div>
                        <div className="bg-purple-50 p-3 rounded border border-purple-200">
                          <div className="font-medium">👨‍🎓 StudentDashboard (StudentDashboard.tsx)</div>
                          <div className="text-sm text-gray-600">Route: /student/dashboard • Dashboard pentru studenți</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        Pagini Admin (3 pagini)
                      </h3>
                      <div className="space-y-2">
                        <div className="bg-orange-50 p-3 rounded border border-orange-200">
                          <div className="font-medium">🎛️ Dashboard (Dashboard.tsx)</div>
                          <div className="text-sm text-gray-600">Route: /admin/dashboard • Statistici și management</div>
                        </div>
                        <div className="bg-orange-50 p-3 rounded border border-orange-200">
                          <div className="font-medium">👥 UserManagement (UserManagement.tsx)</div>
                          <div className="text-sm text-gray-600">Route: /admin/users • Gestionare utilizatori</div>
                        </div>
                        <div className="bg-orange-50 p-3 rounded border border-orange-200">
                          <div className="font-medium">📊 ProjectStructure (ProjectStructure.tsx)</div>
                          <div className="text-sm text-gray-600">Route: /admin/structure • Această pagină</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Index Cursuri (15 pagini)
                      </h3>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        <div className="bg-yellow-50 p-2 rounded border text-sm">
                          <div className="font-medium">Scratch.tsx</div>
                          <div className="text-xs text-gray-600">/scratch • Hero colorat, overview + sessions</div>
                        </div>
                        <div className="bg-purple-50 p-2 rounded border text-sm">
                          <div className="font-medium">AppInventor.tsx</div>
                          <div className="text-xs text-gray-600">/appinventor • Design mobile-focused</div>
                        </div>
                        <div className="bg-blue-50 p-2 rounded border text-sm">
                          <div className="font-medium">Construct3.tsx</div>
                          <div className="text-xs text-gray-600">/construct3 • Coming soon design</div>
                        </div>
                        <div className="bg-indigo-50 p-2 rounded border text-sm">
                          <div className="font-medium">GDevelop.tsx</div>
                          <div className="text-xs text-gray-600">/gdevelop • Hero purple cu logo</div>
                        </div>
                        <div className="bg-pink-50 p-2 rounded border text-sm">
                          <div className="font-medium">Alice3.tsx</div>
                          <div className="text-xs text-gray-600">/alice3 • 3D storytelling theme</div>
                        </div>
                        <div className="bg-green-50 p-2 rounded border text-sm">
                          <div className="font-medium">MinecraftModding.tsx</div>
                          <div className="text-xs text-gray-600">/minecraft-modding • Hero cu blocuri decorative</div>
                        </div>
                        <div className="bg-red-50 p-2 rounded border text-sm">
                          <div className="font-medium">RobloxLua.tsx</div>
                          <div className="text-xs text-gray-600">/roblox-lua • Gaming universe theme</div>
                        </div>
                        <div className="bg-blue-50 p-2 rounded border text-sm">
                          <div className="font-medium">Python.tsx</div>
                          <div className="text-xs text-gray-600">/python • Hero cu cod floating elements</div>
                        </div>
                        <div className="bg-orange-50 p-2 rounded border text-sm">
                          <div className="font-medium">Greenfoot.tsx</div>
                          <div className="text-xs text-gray-600">/greenfoot • Java gaming theme</div>
                        </div>
                        <div className="bg-indigo-50 p-2 rounded border text-sm">
                          <div className="font-medium">Godot.tsx</div>
                          <div className="text-xs text-gray-600">/godot • Professional game dev</div>
                        </div>
                        <div className="bg-cyan-50 p-2 rounded border text-sm">
                          <div className="font-medium">FrontendDev.tsx</div>
                          <div className="text-xs text-gray-600">/frontend-dev • Web development focus</div>
                        </div>
                        <div className="bg-teal-50 p-2 rounded border text-sm">
                          <div className="font-medium">MicrobitArcade.tsx</div>
                          <div className="text-xs text-gray-600">/microbit-arcade • Electronics + gaming</div>
                        </div>
                        <div className="bg-orange-50 p-2 rounded border text-sm">
                          <div className="font-medium">LegoSpikeEssentials.tsx</div>
                          <div className="text-xs text-gray-600">/lego-spike-essentials • Robotics beginner</div>
                        </div>
                        <div className="bg-red-50 p-2 rounded border text-sm">
                          <div className="font-medium">LegoSpikePrime.tsx</div>
                          <div className="text-xs text-gray-600">/lego-spike-prime • Advanced robotics</div>
                        </div>
                        <div className="bg-blue-50 p-2 rounded border text-sm">
                          <div className="font-medium">MicrobitExplorers.tsx</div>
                          <div className="text-xs text-gray-600">/microbit-explorers • Innovation exploration</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      Pagini Sesiuni/Lecții (150+ pagini)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <h4 className="font-medium mb-2">📁 /scratch/ (11 sesiuni)</h4>
                        <div className="text-xs space-y-1">
                          <div>Session1Alegesanatos.tsx</div>
                          <div>Session2SpaceDodge.tsx</div>
                          <div>Session3MotoRacer.tsx</div>
                          <div>Session4CityRunner.tsx</div>
                          <div>Session5BeachBallBounce.tsx</div>
                          <div>Session6StitchBeach.tsx</div>
                          <div>Session7cakequest.tsx</div>
                          <div>Session8WizardsQuest.tsx</div>
                          <div>Session9RobotFootball.tsx</div>
                          <div>Session10FlappyMinecraft*.tsx</div>
                          <div>Session11EggDropper.tsx</div>
                        </div>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <h4 className="font-medium mb-2">📁 /appinventor/ (9 sesiuni)</h4>
                        <div className="text-xs space-y-1">
                          <div>Session1.tsx → Session9.tsx</div>
                          <div className="text-gray-600 mt-2">Aplicații mobile complete cu tutorial pas-cu-pas</div>
                        </div>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <h4 className="font-medium mb-2">📁 /roblox-lua/ (7 sesiuni)</h4>
                        <div className="text-xs space-y-1">
                          <div>Session1Introducere.tsx</div>
                          <div>Session2QuizGame.tsx</div>
                          <div>Session3ConstructiiScripturi.tsx</div>
                          <div>Session4Obby.tsx</div>
                          <div>Session5NPCCreator.tsx</div>
                          <div>Session6CreateAnimations.tsx</div>
                          <div>Session7Shop.tsx</div>
                        </div>
                      </div>

                      <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                        <h4 className="font-medium mb-2">📁 /alice3/ (4 sesiuni)</h4>
                        <div className="text-xs space-y-1">
                          <div>Session1Adventure.tsx</div>
                          <div>Session2SpaceGame.tsx</div>
                          <div>Session3VirtualPet.tsx</div>
                          <div>Session4Geometry.tsx</div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-medium mb-2">📁 /minecraft-modding/ (3 sesiuni active)</h4>
                        <div className="text-xs space-y-1">
                          <div>Session1.tsx</div>
                          <div>CrystalRealm.tsx</div>
                          <div>RubyArmor.tsx</div>
                          <div className="text-gray-600">+ 11 sesiuni placeholder</div>
                        </div>
                      </div>

                      <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                        <h4 className="font-medium mb-2">📁 /legoessentials/ (5 sesiuni)</h4>
                        <div className="text-xs space-y-1">
                          <div>Session1ClassicCarousel.tsx</div>
                          <div>Session2FerrisWheel.tsx</div>
                          <div>Session3CableCar.tsx</div>
                          <div>Session4TwirlingTeacups.tsx</div>
                          <div>Session5SnackStand.tsx</div>
                        </div>
                      </div>

                      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                        <h4 className="font-medium mb-2">📁 /godot/ (6 sesiuni + SimpleGame)</h4>
                        <div className="text-xs space-y-1">
                          <div>Session1.tsx → Session6.tsx</div>
                          <div>SimpleGame.tsx</div>
                          <div className="text-gray-600">+ 8 sesiuni placeholder</div>
                        </div>
                      </div>

                      <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                        <h4 className="font-medium mb-2">📁 /greenfoot/ (3 sesiuni active)</h4>
                        <div className="text-xs space-y-1">
                          <div>Session1.tsx → Session3.tsx</div>
                          <div className="text-gray-600">+ 11 sesiuni placeholder</div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-medium mb-2">📁 /python/ (1 sesiune activă)</h4>
                        <div className="text-xs space-y-1">
                          <div>Session1.tsx</div>
                          <div className="text-gray-600">+ 13 sesiuni placeholder</div>
                        </div>
                      </div>
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
                    Arhitectura Componentelor
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Layout className="mr-2 h-4 w-4" />
                        Componente Layout & Navigație
                      </h3>
                      <div className="space-y-2">
                        <div className="bg-blue-50 p-3 rounded border">
                          <div className="font-medium">Header.tsx</div>
                          <div className="text-sm text-gray-600">Navigație principală cu logo, meniu, auth status</div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded border">
                          <div className="font-medium">Footer.tsx</div>
                          <div className="text-sm text-gray-600">Footer cu informații contact și linkuri</div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded border">
                          <div className="font-medium">LessonLayout.tsx</div>
                          <div className="text-sm text-gray-600">Layout consistent pentru toate lecțiile</div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded border">
                          <div className="font-medium">ReadingProgressBar.tsx</div>
                          <div className="text-sm text-gray-600">Progress bar pentru urmărirea lecturii</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Shield className="mr-2 h-4 w-4" />
                        Componente Securitate & Acces
                      </h3>
                      <div className="space-y-2">
                        <div className="bg-red-50 p-3 rounded border">
                          <div className="font-medium">ProtectedRoute.tsx</div>
                          <div className="text-sm text-gray-600">Protecție rute cu verificare autentificare și rol</div>
                        </div>
                        <div className="bg-red-50 p-3 rounded border">
                          <div className="font-medium">CourseAccessGuard.tsx</div>
                          <div className="text-sm text-gray-600">Control granular acces la cursuri și sesiuni</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Eye className="mr-2 h-4 w-4" />
                        Componente Display & Content
                      </h3>
                      <div className="space-y-2">
                        <div className="bg-green-50 p-3 rounded border">
                          <div className="font-medium">CourseCard.tsx</div>
                          <div className="text-sm text-gray-600">Card-uri pentru afișarea cursurilor</div>
                        </div>
                        <div className="bg-green-50 p-3 rounded border">
                          <div className="font-medium">SessionCard.tsx</div>
                          <div className="text-sm text-gray-600">Card-uri pentru sesiuni/lecții</div>
                        </div>
                        <div className="bg-green-50 p-3 rounded border">
                          <div className="font-medium">CourseComingSoon.tsx</div>
                          <div className="text-sm text-gray-600">Placeholder pentru cursuri în dezvoltare</div>
                        </div>
                        <div className="bg-green-50 p-3 rounded border">
                          <div className="font-medium">ImageModal.tsx</div>
                          <div className="text-sm text-gray-600">Modal pentru afișarea imaginilor în lecții</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Code className="mr-2 h-4 w-4" />
                        Componente Cod & Exemple
                      </h3>
                      <div className="space-y-2">
                        <div className="bg-purple-50 p-3 rounded border">
                          <div className="font-medium">CodeBlock.tsx</div>
                          <div className="text-sm text-gray-600">Afișare cod cu syntax highlighting</div>
                        </div>
                        <div className="bg-purple-50 p-3 rounded border">
                          <div className="font-medium">CodeExample.tsx</div>
                          <div className="text-sm text-gray-600">Componente pentru exemple de cod</div>
                        </div>
                        <div className="bg-purple-50 p-3 rounded border">
                          <div className="font-medium">LessonComponents.tsx</div>
                          <div className="text-sm text-gray-600">Set complet de componente pentru lecții</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Folder className="mr-2 h-4 w-4" />
                      Componente Specifice Cursuri
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-yellow-50 p-3 rounded border">
                        <h4 className="font-medium">scratch/</h4>
                        <div className="text-sm text-gray-600">ScratchOverview.tsx<br/>ScratchSessions.tsx</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded border">
                        <h4 className="font-medium">appinventor/</h4>
                        <div className="text-sm text-gray-600">AppInventorOverview.tsx<br/>AppInventorSessions.tsx</div>
                      </div>
                      <div className="bg-indigo-50 p-3 rounded border">
                        <h4 className="font-medium">gdevelop/</h4>
                        <div className="text-sm text-gray-600">GDevelopOverview.tsx<br/>GDevelopSessions.tsx</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded border">
                        <h4 className="font-medium">minecraftmodding/</h4>
                        <div className="text-sm text-gray-600">MinecraftModdingOverview.tsx<br/>MinecraftModdingSessions.tsx</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded border">
                        <h4 className="font-medium">python/</h4>
                        <div className="text-sm text-gray-600">PythonOverview.tsx<br/>PythonSessions.tsx</div>
                      </div>
                      <div className="bg-red-50 p-3 rounded border">
                        <h4 className="font-medium">godot/</h4>
                        <div className="text-sm text-gray-600">GodotOverview.tsx<br/>GodotSessions.tsx</div>
                      </div>
                      <div className="bg-orange-50 p-3 rounded border">
                        <h4 className="font-medium">greenfoot/</h4>
                        <div className="text-sm text-gray-600">GreenfootOverview.tsx<br/>GreenfootSessions.tsx</div>
                      </div>
                      <div className="bg-cyan-50 p-3 rounded border">
                        <h4 className="font-medium">frontenddev/</h4>
                        <div className="text-sm text-gray-600">FrontendDevOverview.tsx<br/>FrontendDevSessions.tsx</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded border">
                        <h4 className="font-medium">construct3/</h4>
                        <div className="text-sm text-gray-600">Construct3Overview.tsx<br/>Construct3Sessions.tsx</div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Componente Shadcn/ui (40+ componente)
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-xs">
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
                        <div>Accordion</div>
                        <div>Alert Dialog</div>
                        <div>Aspect Ratio</div>
                        <div>Breadcrumb</div>
                        <div>Carousel</div>
                        <div>Chart</div>
                        <div>Collapsible</div>
                        <div>Context Menu</div>
                        <div>Drawer</div>
                        <div>Image</div>
                        <div>Input OTP</div>
                        <div>Menubar</div>
                        <div>Pagination</div>
                        <div>Resizable</div>
                        <div>Toggle Group</div>
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
                    Sistem Complet de Autentificare
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Key className="mr-2 h-4 w-4" />
                        Funcționalități Auth
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Provider:</strong> Supabase Auth cu PostgreSQL</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Metode:</strong> Email/Password authentication</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Roluri:</strong> admin, student (enum user_role)</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Sessions:</strong> Persistent cu refresh tokens</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Security:</strong> Row Level Security (RLS) pe toate tabelele</div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        Fluxul de Autentificare
                      </h3>
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                          <div className="font-medium text-blue-800">1. Înregistrare</div>
                          <div className="text-sm text-blue-600">Signup → Trigger handle_new_user() → Profile creat automat</div>
                        </div>
                        <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                          <div className="font-medium text-green-800">2. Autentificare</div>
                          <div className="text-sm text-green-600">Login → Session start → useAuth hook actualizat</div>
                        </div>
                        <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-400">
                          <div className="font-medium text-purple-800">3. Autorizare</div>
                          <div className="text-sm text-purple-600">ProtectedRoute verifică rol → CourseAccessGuard verifică permisiuni</div>
                        </div>
                        <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-400">
                          <div className="font-medium text-orange-800">4. Deconectare</div>
                          <div className="text-sm text-orange-600">Logout → Session cleared → Redirect la /auth</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Lock className="mr-2 h-4 w-4" />
                      Rute Protejate și Niveluri de Acces
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <h4 className="font-medium text-red-800 mb-2">🔴 Admin Only</h4>
                        <ul className="text-sm space-y-1">
                          <li>• /admin/dashboard</li>
                          <li>• /admin/users</li>
                          <li>• /admin/structure</li>
                        </ul>
                        <div className="mt-2 text-xs text-red-600">
                          <strong>Verificare:</strong> isAdmin = true
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <h4 className="font-medium text-yellow-800 mb-2">🟡 Autentificare Necesară</h4>
                        <ul className="text-sm space-y-1">
                          <li>• /student/dashboard</li>
                          <li>• Toate sesiunile cursurilor</li>
                          <li>• Profilul utilizatorului</li>
                        </ul>
                        <div className="mt-2 text-xs text-yellow-600">
                          <strong>Verificare:</strong> isAuthenticated = true
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-medium text-blue-800 mb-2">🔵 Acces Controlat</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Sesiuni specifice cursuri</li>
                          <li>• Conținut premium</li>
                          <li>• Resurse descărcabile</li>
                        </ul>
                        <div className="mt-2 text-xs text-blue-600">
                          <strong>Verificare:</strong> user_access table
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Code className="mr-2 h-4 w-4" />
                      Hooks și Servicii Auth
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">🎣 Custom Hooks</h4>
                        <ul className="text-sm space-y-1">
                          <li>• <code>useAuth()</code> - Context principal autentificare</li>
                          <li>• <code>useUsers()</code> - Management utilizatori (admin)</li>
                          <li>• <code>useUserAccess()</code> - Control acces granular</li>
                          <li>• <code>useCourses()</code> - Gestionare cursuri</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">⚙️ Servicii</h4>
                        <ul className="text-sm space-y-1">
                          <li>• <code>userService.ts</code> - CRUD operații utilizatori</li>
                          <li>• <code>userAccessService.ts</code> - Gestionare permisiuni</li>
                          <li>• <code>courseService.ts</code> - Operații cursuri/sesiuni</li>
                        </ul>
                      </div>
                    </div>
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
                    Structura Detaliată a Fișierelor
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <HardDrive className="mr-2 h-4 w-4" />
                        Directoare Principale (/src)
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-1">
                        <div>📁 <strong>src/</strong></div>
                        <div className="ml-4">├── 📁 <strong>components/</strong> (40+ fișiere)</div>
                        <div className="ml-8">├── ui/ (40 componente Shadcn)</div>
                        <div className="ml-8">├── scratch/, appinventor/, etc.</div>
                        <div className="ml-8">└── Layout & functional components</div>
                        <div className="ml-4">├── 📁 <strong>pages/</strong> (170+ fișiere)</div>
                        <div className="ml-8">├── admin/ (3 pagini)</div>
                        <div className="ml-8">├── auth/ (4 pagini)</div>
                        <div className="ml-8">├── courses/ (15 index)</div>
                        <div className="ml-8">└── [course]/ (150+ sesiuni)</div>
                        <div className="ml-4">├── 📁 <strong>hooks/</strong> (6 fișiere)</div>
                        <div className="ml-4">├── 📁 <strong>services/</strong> (3 fișiere)</div>
                        <div className="ml-4">├── 📁 <strong>types/</strong> (2 fișiere)</div>
                        <div className="ml-4">├── 📁 <strong>lib/</strong> (2 fișiere)</div>
                        <div className="ml-4">└── 📁 <strong>integrations/</strong> (1 fișier)</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Globe className="mr-2 h-4 w-4" />
                        Assets Statice (/public)
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-1">
                        <div>📁 <strong>public/</strong></div>
                        <div className="ml-4">├── 📁 <strong>assets/images/</strong></div>
                        <div className="ml-8">├── scratch/ (50+ imagini)</div>
                        <div className="ml-8">├── roblox/ (80+ imagini)</div>
                        <div className="ml-8">├── robotica/ (25+ imagini)</div>
                        <div className="ml-8">├── appinventor/ (20+ imagini)</div>
                        <div className="ml-8">├── gdevelop/ (logo + assets)</div>
                        <div className="ml-8">└── mcreator/ (minecraft assets)</div>
                        <div className="ml-4">├── favicon.ico</div>
                        <div className="ml-4">├── placeholder.svg</div>
                        <div className="ml-4">└── robots.txt</div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      Configurații și Utilitare
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">⚙️ Build & Dev</h4>
                        <ul className="text-sm space-y-1">
                          <li>• vite.config.ts</li>
                          <li>• tsconfig.json</li>
                          <li>• tsconfig.app.json</li>
                          <li>• tsconfig.node.json</li>
                          <li>• package.json</li>
                          <li>• bun.lockb</li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">🎨 Styling</h4>
                        <ul className="text-sm space-y-1">
                          <li>• tailwind.config.ts</li>
                          <li>• postcss.config.js</li>
                          <li>• src/index.css</li>
                          <li>• src/App.css</li>
                          <li>• components.json</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">🚀 Deploy</h4>
                        <ul className="text-sm space-y-1">
                          <li>• vercel.json</li>
                          <li>• .gitignore</li>
                          <li>• README.md</li>
                          <li>• eslint.config.js</li>
                          <li>• index.html</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Network className="mr-2 h-4 w-4" />
                      Integrări și Servicii
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">🗃️ Supabase Integration</h4>
                          <ul className="text-sm space-y-1">
                            <li>• <code>src/lib/supabase.ts</code> - Client configuration</li>
                            <li>• <code>src/integrations/supabase/types.ts</code> - Auto-generated types</li>
                            <li>• <code>src/types/database.ts</code> - Custom type definitions</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">🔧 Utilities</h4>
                          <ul className="text-sm space-y-1">
                            <li>• <code>src/lib/utils.ts</code> - Helper functions</li>
                            <li>• <code>src/hooks/use-toast.ts</code> - Toast notifications</li>
                            <li>• <code>src/hooks/use-mobile.tsx</code> - Mobile detection</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Features Tab */}
            <TabsContent value="features" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="mr-2 h-5 w-5" />
                    Funcționalități Complete ale Platformei
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        Management Utilizatori
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Înregistrare automată:</strong> Profile create automat la signup</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Roluri diferențiate:</strong> Admin vs Student cu permisiuni specifice</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Dashboard personalizat:</strong> Interface diferite pentru fiecare rol</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Gestionare completă:</strong> CRUD operations pentru admin</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Reset parolă:</strong> Flow complet de recuperare</div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Sistem Cursuri
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>15 cursuri diferite:</strong> Programare și robotică</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>150+ sesiuni/lecții:</strong> Conținut structurat</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Design unic:</strong> Hero sections tematice pentru fiecare curs</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Overview + Sessions:</strong> Structură consistentă</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Assets bogate:</strong> 300+ imagini și resurse</div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Lock className="mr-2 h-4 w-4" />
                        Control Acces
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Acces granular:</strong> Control per curs și sesiune</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>CourseAccessGuard:</strong> Verificare automată permisiuni</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>User management:</strong> Admin poate gestiona accesul</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Real-time updates:</strong> Sincronizare automată</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Securitate RLS:</strong> Database-level protection</div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Eye className="mr-2 h-4 w-4" />
                        Experience Utilizator
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Responsive design:</strong> Perfect pe toate device-urile</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Animații smooth:</strong> Framer Motion transitions</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Toast notifications:</strong> Feedback instant pentru acțiuni</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Loading states:</strong> Indicatori vizuali pentru toate operațiunile</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                          <div><strong>Error handling:</strong> Gestionare elegantă a erorilor</div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Code className="mr-2 h-4 w-4" />
                      Funcționalități Tehnice Avansate
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-medium mb-2">🔄 Real-time Sync</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Supabase subscriptions</li>
                          <li>• Auto-refresh pe modificări</li>
                          <li>• Sincronizare user access</li>
                          <li>• Updates instantanee UI</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-medium mb-2">🎨 Design System</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Tailwind semantic tokens</li>
                          <li>• Shadcn/ui components</li>
                          <li>• Consistent styling</li>
                          <li>• Theme customization</li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <h4 className="font-medium mb-2">⚡ Performance</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Vite build optimization</li>
                          <li>• Code splitting</li>
                          <li>• Lazy loading components</li>
                          <li>• Optimized images</li>
                        </ul>
                      </div>

                      <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                        <h4 className="font-medium mb-2">🔐 Security</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Row Level Security</li>
                          <li>• JWT token validation</li>
                          <li>• Protected routes</li>
                          <li>• CSRF protection</li>
                        </ul>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <h4 className="font-medium mb-2">📱 Responsive</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Mobile-first design</li>
                          <li>• Tablet optimization</li>
                          <li>• Desktop experience</li>
                          <li>• Touch-friendly UI</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <h4 className="font-medium mb-2">🚀 Development</h4>
                        <ul className="text-sm space-y-1">
                          <li>• TypeScript strict mode</li>
                          <li>• ESLint configuration</li>
                          <li>• Hot reload development</li>
                          <li>• Component architecture</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Funcționalități Admin Avansate
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">📊 Dashboard Analytics</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Statistici utilizatori</li>
                          <li>• Distribuția rolurilor</li>
                          <li>• Utilizatori fără acces</li>
                          <li>• Activitate recentă</li>
                          <li>• Acțiuni rapide</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">👥 User Management</h4>
                        <ul className="text-sm space-y-1">
                          <li>• CRUD complet utilizatori</li>
                          <li>• Gestionare permisiuni granulare</li>
                          <li>• Filtrare și căutare</li>
                          <li>• Export/Import (planificat)</li>
                          <li>• Audit log (planificat)</li>
                        </ul>
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
