
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  FileText, 
  Folder, 
  Code, 
  Database, 
  Shield, 
  Users, 
  BookOpen,
  Settings,
  Search,
  Filter,
  Edit,
  Copy,
  Eye,
  Trash2,
  Plus
} from 'lucide-react';

const ProjectStructure = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6">
        <div className="container mx-auto px-4 space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Structura Proiectului</h1>
            <p className="text-muted-foreground">
              Documentația completă a structurii și funcționalităților platformei TechMinds Academy
            </p>
          </div>

          {/* Administrare Cursuri - Secțiune extinsă */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Administrare Cursuri - Funcționalități Complete
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Management Cursuri (CRUD)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center">
                      <Plus className="mr-1 h-4 w-4" />
                      Crearea Cursurilor
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Nume și slug automat generat</li>
                      <li>• Descriere detaliată</li>
                      <li>• Validare completă a datelor</li>
                      <li>• Verificare unicitate slug</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center">
                      <Edit className="mr-1 h-4 w-4" />
                      Editarea Cursurilor
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Modificare nume și descriere</li>
                      <li>• Actualizare slug</li>
                      <li>• Salvare automată</li>
                      <li>• Feedback instantaneu</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center">
                      <Search className="mr-1 h-4 w-4" />
                      Căutare și Filtrare
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Căutare în nume, slug, descriere</li>
                      <li>• Sortare după nume/dată</li>
                      <li>• Ordine ascendentă/descendentă</li>
                      <li>• Filtrare în timp real</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center">
                      <Copy className="mr-1 h-4 w-4" />
                      Funcționalități Avansate
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Duplicare cursuri</li>
                      <li>• Preview pe site</li>
                      <li>• Ștergere cu confirmare</li>
                      <li>• Statistici utilizatori</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Management Sesiuni (CRUD)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center">
                      <Plus className="mr-1 h-4 w-4" />
                      Crearea Sesiunilor
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Asociere automată cu cursul</li>
                      <li>• Nume și slug generat</li>
                      <li>• Număr de ordine personalizabil</li>
                      <li>• Descriere și obiective</li>
                      <li>• Prerequisite și durata</li>
                      <li>• Nivel de dificultate</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center">
                      <Filter className="mr-1 h-4 w-4" />
                      Filtrare Avansată
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Filtrare după curs</li>
                      <li>• Căutare în conținut</li>
                      <li>• Sortare după ordine</li>
                      <li>• Sortare după dată</li>
                      <li>• Sortare alfabetică</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center">
                      <Edit className="mr-1 h-4 w-4" />
                      Editare Structurată
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Dialog modal extins</li>
                      <li>• Câmpuri organizate</li>
                      <li>• Validare completă</li>
                      <li>• Salvare optimizată</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center">
                      <Eye className="mr-1 h-4 w-4" />
                      Organizare Conținut
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Descrieri structurate</li>
                      <li>• Obiective de învățare</li>
                      <li>• Prerequisite clare</li>
                      <li>• Estimări de timp</li>
                      <li>• Niveluri de dificultate</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Integrare și Sincronizare</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-green-600">✓ Implementat</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Modificările se reflectă instant pe site</li>
                      <li>• Refetch automat după operații</li>
                      <li>• Sincronizare completă cu baza de date</li>
                      <li>• Preview direct din admin</li>
                      <li>• Statistici actualizate în timp real</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-blue-600">🔄 Optimizări</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Căutare debounced</li>
                      <li>• Sortare memorată</li>
                      <li>• Filtre persistente</li>
                      <li>• Loading states</li>
                      <li>• Error handling complet</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-purple-600">🎯 User Experience</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Interface intuitivă</li>
                      <li>• Feedback instant</li>
                      <li>• Confirmări pentru acțiuni destructive</li>
                      <li>• Tooltips pentru claritate</li>
                      <li>• Design responsive</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Structura Fișierelor */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Folder className="mr-2 h-5 w-5" />
                Structura Fișierelor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Pagini Principale</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>src/pages/Home.tsx</span>
                      <Badge variant="outline">Public</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>src/pages/Courses.tsx</span>
                      <Badge variant="outline">Public</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>src/pages/About.tsx</span>
                      <Badge variant="outline">Public</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>src/pages/Contact.tsx</span>
                      <Badge variant="outline">Public</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Administrare</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-red-500" />
                      <span>src/pages/admin/Dashboard.tsx</span>
                      <Badge variant="destructive">Admin</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-red-500" />
                      <span>src/pages/admin/UserManagement.tsx</span>
                      <Badge variant="destructive">Admin</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-red-500" />
                      <span>src/pages/admin/CourseManagement.tsx</span>
                      <Badge variant="destructive">Admin</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-red-500" />
                      <span>src/pages/admin/ProjectStructure.tsx</span>
                      <Badge variant="destructive">Admin</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Autentificare și Autorizare */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Sistem de Autentificare
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Roluri Utilizatori</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="destructive">Admin</Badge>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Acces complet la dashboard</li>
                        <li>• Gestionare utilizatori</li>
                        <li>• Gestionare cursuri și sesiuni</li>
                        <li>• Vizualizare statistici</li>
                      </ul>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary">Student</Badge>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Acces la cursurile atribuite</li>
                        <li>• Dashboard personal</li>
                        <li>• Progres urmărire</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Componente Protejate</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 w-4" />
                      <span>ProtectedRoute.tsx</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 w-4" />
                      <span>CourseAccessGuard.tsx</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 w-4" />
                      <span>useAuth.tsx</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Pagini Autentificare</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>src/pages/auth/AuthPage.tsx</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>src/pages/auth/ForgotPassword.tsx</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>src/pages/auth/ResetPassword.tsx</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>src/pages/auth/Unauthorized.tsx</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Baza de Date */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="mr-2 h-5 w-5" />
                Schema Baza de Date
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Tabele Principale</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold">profiles</h4>
                      <p className="text-sm text-muted-foreground mb-2">Informații utilizatori</p>
                      <ul className="text-xs space-y-1">
                        <li>• id (uuid, PK)</li>
                        <li>• username (text)</li>
                        <li>• email (text)</li>
                        <li>• role (user_role)</li>
                        <li>• created_at, updated_at</li>
                      </ul>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold">courses</h4>
                      <p className="text-sm text-muted-foreground mb-2">Cursuri disponibile</p>
                      <ul className="text-xs space-y-1">
                        <li>• id (uuid, PK)</li>
                        <li>• name (text)</li>
                        <li>• slug (text, unique)</li>
                        <li>• description (text)</li>
                        <li>• created_at, updated_at</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Relații și Access</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold">sessions</h4>
                      <p className="text-sm text-muted-foreground mb-2">Sesiuni cursuri</p>
                      <ul className="text-xs space-y-1">
                        <li>• id (uuid, PK)</li>
                        <li>• course_id (uuid, FK)</li>
                        <li>• name, slug</li>
                        <li>• description</li>
                        <li>• order_number (integer)</li>
                      </ul>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold">user_access</h4>
                      <p className="text-sm text-muted-foreground mb-2">Permisiuni utilizatori</p>
                      <ul className="text-xs space-y-1">
                        <li>• id (uuid, PK)</li>
                        <li>• user_id (uuid)</li>
                        <li>• course_id (uuid)</li>
                        <li>• session_id (uuid, optional)</li>
                        <li>• created_at, updated_at</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Componente UI */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2 h-5 w-5" />
                Componentele UI și Funcționalități
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Componente de Bază</h3>
                  <div className="space-y-2 text-sm">
                    <div>• Header.tsx - Navigație principală</div>
                    <div>• Footer.tsx - Subsol cu links</div>
                    <div>• CourseCard.tsx - Card pentru cursuri</div>
                    <div>• SessionCard.tsx - Card pentru sesiuni</div>
                    <div>• LessonLayout.tsx - Layout lecții</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Hook-uri Custom</h3>
                  <div className="space-y-2 text-sm">
                    <div>• useAuth.tsx - Autentificare</div>
                    <div>• useUsers.tsx - Gestionare utilizatori</div>
                    <div>• useCourses.tsx - Gestionare cursuri</div>
                    <div>• useUserAccess.tsx - Permisiuni</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">UI Shadcn/UI</h3>
                  <div className="space-y-2 text-sm">
                    <div>• Card, Button, Input</div>
                    <div>• Table, Badge, Dialog</div>
                    <div>• Tabs, Select, Textarea</div>
                    <div>• AlertDialog, Separator</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Status Implementare */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="mr-2 h-5 w-5" />
                Status Implementare
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-600">✅ Implementat Complet</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-green-50">✓</Badge>
                      <span>Autentificare și autorizare</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-green-50">✓</Badge>
                      <span>CRUD complet cursuri</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-green-50">✓</Badge>
                      <span>CRUD complet sesiuni</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-green-50">✓</Badge>
                      <span>Gestionare utilizatori</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-green-50">✓</Badge>
                      <span>Dashboard administrativ</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-green-50">✓</Badge>
                      <span>Căutare și filtrare avansată</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-green-50">✓</Badge>
                      <span>Sincronizare în timp real</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">🔄 Următoarele Faze</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-blue-50">📝</Badge>
                      <span>Faza 3: Management Acces Utilizatori</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-blue-50">📊</Badge>
                      <span>Faza 4: Rapoarte și Analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-blue-50">📚</Badge>
                      <span>Faza 5: Content Management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-blue-50">⚙️</Badge>
                      <span>Faza 6: Setări Platformă</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectStructure;
