
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowRight, ArrowLeft, Lightbulb, 
  Code, Terminal, Trophy, Check, Info, Download, FileCode, 
  GameController, Rocket, Share2, PlusCircle, Sparkles
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CodeBlock from '@/components/CodeBlock';

const Session3 = () => {
  useEffect(() => {
    document.title = "Sesiunea 3: Jocul Prinde Obiectul | App Inventor";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-course-purple to-course-blue text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Sesiunea 3: Jocul Prinde Obiectul</h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Învață cum să creezi un joc în care vei utiliza senzorul de orientare pentru a prinde obiecte care cad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Breadcrumbs */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-sm">
                <Link to="/" className="text-gray-500 hover:text-course-purple">Acasă</Link>
                <span className="text-gray-500">/</span>
                <Link to="/appinventor" className="text-gray-500 hover:text-course-purple">App Inventor</Link>
                <span className="text-gray-500">/</span>
                <span className="text-course-purple font-medium">Sesiunea 3</span>
              </div>
              <div className="flex space-x-2">
                <Button asChild variant="outline" size="sm">
                  <Link to="/appinventor/session2" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <span>Sesiunea Anterioară</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" disabled>
                  <Link to="/appinventor/session4" className="flex items-center">
                    <span>Sesiunea Următoare</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Tutorial Content */}
            <div className="lg:w-3/4">
              <Card className="mb-8 border-0 shadow-md">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Obiectivele Lecției</h2>
                  <p className="text-gray-600 mb-4">
                    În această sesiune, vei învăța să creezi un joc în care jucătorul trebuie să prindă obiecte care cad pe ecran, 
                    controlând un coș prin înclinarea dispozitivului. Acest joc utilizează senzorul de orientare al dispozitivului pentru control, 
                    oferind o experiență de joc interactivă și captivantă.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-course-purple">
                      <h3 className="font-bold text-gray-800 flex items-center">
                        <Code className="mr-2 h-5 w-5 text-course-purple" />
                        Vei învăța
                      </h3>
                      <ul className="mt-2 space-y-1 text-gray-600">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Utilizarea senzorului de orientare</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Controlarea obiectelor prin înclinarea dispozitivului</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Crearea de animații pentru obiectele căzătoare</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Implementarea unui sistem de scor și dificultate dinamică</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-course-blue">
                      <h3 className="font-bold text-gray-800 flex items-center">
                        <Terminal className="mr-2 h-5 w-5 text-course-blue" />
                        Concepte Cheie
                      </h3>
                      <ul className="mt-2 space-y-1 text-gray-600">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Senzorul de orientare și evenimente asociate</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Gestionarea coliziunilor între sprite-uri</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Timer-e pentru animații și mecanica jocului</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Controlarea vitezei de joc pentru ajustarea dificultății</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Step 1: Setup */}
              <Card className="mb-8 border-0 shadow-md" id="paso1">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-course-purple text-white rounded-full h-8 w-8 flex items-center justify-center mr-2">1</span>
                    Configurarea Proiectului
                  </h2>
                  
                  <p className="mb-6 text-gray-600">
                    În acest joc, vom utiliza un Canvas pentru a desena elementele jocului și senzorul de orientare pentru a controla poziția coșului. 
                    Mai întâi, să creăm interfața de bază a proiectului nostru.
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Pașii de Configurare:</h3>
                    
                    <ol className="space-y-4 text-gray-600">
                      <li className="flex items-start">
                        <div className="bg-purple-100 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 text-purple-800 font-semibold flex-shrink-0">1</div>
                        <div>
                          <p className="mb-2">Deschide <a href="https://ai2.appinventor.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-course-blue font-semibold underline">MIT App Inventor</a> și creează un nou proiect numit "PrindeObiectul".</p>
                          <img src="https://cdn.discordapp.com/attachments/1170433329471049868/1170433509877792889/Screenshot_2021-04-19_at_11.53.33.png?ex=6558c97d&is=6546547d&hm=b99aa0dd2172678ca26cb0bc69fb3d876f4cab1a16639cbfa11083240971a315&" alt="Crearea unui nou proiect" className="rounded-lg border shadow-sm max-w-md" />
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-purple-100 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 text-purple-800 font-semibold flex-shrink-0">2</div>
                        <div>
                          <p className="mb-2">Din paleta din stânga, adaugă următoarele componente în ecranul tău:</p>
                          <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li>Un <strong>Canvas</strong> (din categoria Drawing and Animation)</li>
                            <li>Două <strong>ImageSprite</strong>-uri (din categoria Drawing and Animation)</li>
                            <li>Un <strong>OrientationSensor</strong> (din categoria Sensors)</li>
                            <li>Două <strong>Label</strong>-uri (din categoria User Interface)</li>
                            <li>Un <strong>Clock</strong> (din categoria Sensors)</li>
                          </ul>
                          <Alert variant="default" className="bg-blue-50 border-blue-200 mb-4">
                            <Info className="h-4 w-4 text-blue-500" />
                            <AlertTitle>Sfat</AlertTitle>
                            <AlertDescription>
                              Canvas-ul va fi suprafața de joc, cele două ImageSprite-uri vor reprezenta coșul și obiectul care cade, iar OrientationSensor va detecta înclinarea dispozitivului.
                            </AlertDescription>
                          </Alert>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-purple-100 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 text-purple-800 font-semibold flex-shrink-0">3</div>
                        <div>
                          <p className="mb-2">Configurează proprietățile componentelor astfel:</p>
                          
                          <div className="overflow-x-auto mb-4">
                            <table className="min-w-full border-collapse border border-gray-300 rounded-lg">
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="border border-gray-300 px-4 py-2 text-left">Componentă</th>
                                  <th className="border border-gray-300 px-4 py-2 text-left">Proprietate</th>
                                  <th className="border border-gray-300 px-4 py-2 text-left">Valoare</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-gray-300 px-4 py-2">Screen1</td>
                                  <td className="border border-gray-300 px-4 py-2">Title</td>
                                  <td className="border border-gray-300 px-4 py-2">Prinde Obiectul</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 px-4 py-2">Canvas1</td>
                                  <td className="border border-gray-300 px-4 py-2">Width</td>
                                  <td className="border border-gray-300 px-4 py-2">Fill parent</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 px-4 py-2">Canvas1</td>
                                  <td className="border border-gray-300 px-4 py-2">Height</td>
                                  <td className="border border-gray-300 px-4 py-2">Fill parent</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 px-4 py-2">Canvas1</td>
                                  <td className="border border-gray-300 px-4 py-2">BackgroundColor</td>
                                  <td className="border border-gray-300 px-4 py-2">Light Blue</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 px-4 py-2">ImageSprite1</td>
                                  <td className="border border-gray-300 px-4 py-2">Rename to</td>
                                  <td className="border border-gray-300 px-4 py-2">CosSprite</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 px-4 py-2">ImageSprite2</td>
                                  <td className="border border-gray-300 px-4 py-2">Rename to</td>
                                  <td className="border border-gray-300 px-4 py-2">ObiectSprite</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 px-4 py-2">Label1</td>
                                  <td className="border border-gray-300 px-4 py-2">Text</td>
                                  <td className="border border-gray-300 px-4 py-2">Scor: 0</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 px-4 py-2">Label1</td>
                                  <td className="border border-gray-300 px-4 py-2">FontSize</td>
                                  <td className="border border-gray-300 px-4 py-2">18</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 px-4 py-2">Label2</td>
                                  <td className="border border-gray-300 px-4 py-2">Text</td>
                                  <td className="border border-gray-300 px-4 py-2">Vieți: 3</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 px-4 py-2">Label2</td>
                                  <td className="border border-gray-300 px-4 py-2">FontSize</td>
                                  <td className="border border-gray-300 px-4 py-2">18</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 px-4 py-2">Clock1</td>
                                  <td className="border border-gray-300 px-4 py-2">TimerInterval</td>
                                  <td className="border border-gray-300 px-4 py-2">1000</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 px-4 py-2">Clock1</td>
                                  <td className="border border-gray-300 px-4 py-2">TimerEnabled</td>
                                  <td className="border border-gray-300 px-4 py-2">True</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-purple-100 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 text-purple-800 font-semibold flex-shrink-0">4</div>
                        <div>
                          <p className="mb-2">Adaugă imagini pentru sprite-uri:</p>
                          <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Pentru <strong>CosSprite</strong>, uploadează o imagine de coș sau găleată (sau utilizează una din biblioteca App Inventor)</li>
                            <li>Pentru <strong>ObiectSprite</strong>, uploadează o imagine pentru obiectul care va cădea (ex: un măr, o minge, etc.)</li>
                          </ul>
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <p className="font-semibold mb-2">Pentru a adăuga imagini în proiect:</p>
                            <ol className="list-decimal pl-6 space-y-1 text-sm">
                              <li>Clickează pe "Media" în meniul de sus</li>
                              <li>Alege "Upload File..." și selectează imaginea de pe calculator</li>
                              <li>După uploadare, setează imaginea pentru fiecare sprite folosind proprietatea Picture</li>
                            </ol>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                  
                  <div className="mt-8 bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                      <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
                      Rezultatul după configurare
                    </h3>
                    <p className="text-gray-600 mb-4">
                      După configurarea inițială, interfața ta de utilizator ar trebui să arate similar cu imaginea de mai jos:
                    </p>
                    <div className="flex justify-center">
                      <img 
                        src="https://cdn.discordapp.com/attachments/1170433329471049868/1170433504442490990/AppInventor-Setup.png?ex=6558c97c&is=6546547c&hm=014fc175ef0762de38a58f2b02df631b3c9ce31aa6d0f56e65af07e90f4c78c4&" 
                        alt="Interfața configurată pentru jocul Prinde Obiectul" 
                        className="rounded-lg border shadow-sm max-w-md"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Step 2: Blocks Editor */}
              <Card className="mb-8 border-0 shadow-md" id="paso2">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-course-purple text-white rounded-full h-8 w-8 flex items-center justify-center mr-2">2</span>
                    Programarea Logicii Jocului
                  </h2>
                  
                  <p className="mb-6 text-gray-600">
                    Acum că avem interfața configurată, să trecem la programarea logicii jocului folosind editorul de blocuri. 
                    Vom adăuga cod pentru a controla coșul cu senzorul de orientare, pentru a face obiectul să cadă și pentru a detecta coliziunile.
                  </p>
                  
                  <Tabs defaultValue="initialization" className="mb-8">
                    <TabsList>
                      <TabsTrigger value="initialization">Inițializare Joc</TabsTrigger>
                      <TabsTrigger value="orientation">Control cu Senzorul</TabsTrigger>
                      <TabsTrigger value="falling">Căderea Obiectului</TabsTrigger>
                      <TabsTrigger value="collision">Detecția Coliziunilor</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="initialization" className="pt-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Inițializarea Variabilelor Globale</h3>
                        <p className="mb-4 text-gray-600">
                          Mai întâi, vom defini câteva variabile globale pentru a ține evidența scorului, vieților și stării jocului:
                        </p>
                        
                        <CodeBlock language="text" className="mb-4">
{`Când Screen1.Initialize
   set global scor to 0
   set global vieti to 3
   set global gameSpeed to 1000
   call resetObject`}
                        </CodeBlock>
                        
                        <div className="flex justify-center mb-4">
                          <img 
                            src="https://cdn.discordapp.com/attachments/1170433329471049868/1170433632424124426/catch-game-initialization.png?ex=6558c999&is=65465499&hm=bcc65cfdba0e36a3d4c9adf0980d44e33e67e50e57a805c171d53959b9eb3cd2&" 
                            alt="Blocuri pentru inițializarea variabilelor" 
                            className="rounded-lg border shadow-sm max-w-md"
                          />
                        </div>
                        
                        <p className="mb-4 text-gray-600">
                          De asemenea, trebuie să creăm o procedură pentru resetarea poziției obiectului:
                        </p>
                        
                        <CodeBlock language="text" className="mb-4">
{`to resetObject
   set ObiectSprite.X to random integer from 10 to (Canvas1.Width - ObiectSprite.Width - 10)
   set ObiectSprite.Y to 0
   set ObiectSprite.Speed to 0
   set ObiectSprite.Heading to 90
   set global dropSpeed to 2`}
                        </CodeBlock>
                        
                        <div className="flex justify-center">
                          <img 
                            src="https://cdn.discordapp.com/attachments/1170433329471049868/1170433656696881248/catch-game-reset-object.png?ex=6558c99f&is=6546549f&hm=94f8fb30eb0b6175bd5ddc5c3451c0fbb2c3cd0cc17dadbea14bbbb160968bd3&" 
                            alt="Blocuri pentru resetarea obiectului" 
                            className="rounded-lg border shadow-sm max-w-md"
                          />
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="orientation" className="pt-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Controlul cu Senzorul de Orientare</h3>
                        <p className="mb-4 text-gray-600">
                          Vom utiliza senzorul de orientare pentru a mișca coșul stânga-dreapta, în funcție de înclinarea dispozitivului:
                        </p>
                        
                        <CodeBlock language="text" className="mb-4">
{`Când OrientationSensor1.OrientationChanged
   set move to OrientationSensor1.Pitch / 10
   set newX to CosSprite.X + move
   
   // Asigură-te că coșul rămâne în limitele ecranului
   if newX < 0 then
      set CosSprite.X to 0
   else if newX > (Canvas1.Width - CosSprite.Width) then
      set CosSprite.X to (Canvas1.Width - CosSprite.Width)
   else
      set CosSprite.X to newX
   end if`}
                        </CodeBlock>
                        
                        <div className="flex justify-center">
                          <img 
                            src="https://cdn.discordapp.com/attachments/1170433329471049868/1170433697831694376/catch-game-orientation.png?ex=6558c9a9&is=654654a9&hm=1c9bf9aa9f7846a90254b44c1ba2df96d73a65be1f8e6720cdc139f3ad2f183b&" 
                            alt="Blocuri pentru controlul cu senzorul de orientare" 
                            className="rounded-lg border shadow-sm max-w-md"
                          />
                        </div>
                        
                        <Alert variant="default" className="bg-yellow-50 border-yellow-200 mt-4">
                          <Lightbulb className="h-4 w-4 text-yellow-500" />
                          <AlertTitle>Sfat</AlertTitle>
                          <AlertDescription>
                            Valoarea Pitch reprezintă înclinarea dispozitivului înainte/înapoi. O împărțim la 10 pentru a obține o mișcare mai controlată a coșului.
                          </AlertDescription>
                        </Alert>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="falling" className="pt-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Căderea Obiectului</h3>
                        <p className="mb-4 text-gray-600">
                          Pentru a face obiectul să cadă, vom utiliza Clock1.Timer și vom actualiza poziția Y a obiectului:
                        </p>
                        
                        <CodeBlock language="text" className="mb-4">
{`Când Clock1.Timer
   set ObiectSprite.Y to ObiectSprite.Y + dropSpeed
   
   // Verifică dacă obiectul a ieșit din ecran
   if ObiectSprite.Y > Canvas1.Height then
      // Obiectul a fost ratat
      set global vieti to global vieti - 1
      set Label2.Text to join "Vieți: " global vieti
      
      if global vieti <= 0 then
         // Game over
         set Clock1.TimerEnabled to false
         call GameOver
      else
         // Reset obiect
         call resetObject
      end if
   end if
   
   // Crește dificultatea pe măsură ce scorul crește
   if global scor > 0 and global scor mod 5 = 0 then
      set global dropSpeed to global dropSpeed + 0.5
      set global gameSpeed to global gameSpeed - 50
      set Clock1.TimerInterval to global gameSpeed
   end if`}
                        </CodeBlock>
                        
                        <div className="flex justify-center">
                          <img 
                            src="https://cdn.discordapp.com/attachments/1170433329471049868/1170433743763357747/catch-game-falling.png?ex=6558c9b4&is=654654b4&hm=3bad8479d1020e3e7bf938efd409641614aebdfc6b50fbd9db7053006344be03&" 
                            alt="Blocuri pentru căderea obiectului" 
                            className="rounded-lg border shadow-sm max-w-md"
                          />
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="collision" className="pt-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Detecția Coliziunilor</h3>
                        <p className="mb-4 text-gray-600">
                          Când obiectul care cade lovește coșul, trebuie să actualizăm scorul și să resetăm poziția obiectului:
                        </p>
                        
                        <CodeBlock language="text" className="mb-4">
{`Când ObiectSprite.CollidedWith CosSprite
   // Obiectul a fost prins
   set global scor to global scor + 1
   set Label1.Text to join "Scor: " global scor
   
   // Reset obiect
   call resetObject
   
   // Redă un sunet pentru feedback pozitiv
   call Canvas1.PlaySound "success.mp3"`}
                        </CodeBlock>
                        
                        <div className="flex justify-center mb-6">
                          <img 
                            src="https://cdn.discordapp.com/attachments/1170433329471049868/1170433795297451029/catch-game-collision.png?ex=6558c9c0&is=654654c0&hm=266ea0580002dd494e19ff81c7b7ce60e5706e606dda2673c765215c11c8c575&" 
                            alt="Blocuri pentru detecția coliziunilor" 
                            className="rounded-lg border shadow-sm max-w-md"
                          />
                        </div>
                        
                        <p className="mb-4 text-gray-600">
                          În final, trebuie să adăugăm o procedură pentru terminarea jocului:
                        </p>
                        
                        <CodeBlock language="text" className="mb-4">
{`to GameOver
   set notificare to " Jocul s-a terminat! Scor final: " 
   set notificare to join notificare global scor
   call Canvas1.DrawText notificare Canvas1.Width / 2 - 80 Canvas1.Height / 2
   
   // Crează un buton de restart
   // (Acest cod este opțional și poate fi adăugat pentru a permite reînceperea jocului)`}
                        </CodeBlock>
                        
                        <div className="flex justify-center">
                          <img 
                            src="https://cdn.discordapp.com/attachments/1170433329471049868/1170433803052859412/catch-game-game-over.png?ex=6558c9c2&is=654654c2&hm=6303022c77cf6bfec6f3f71e805effd419ee2cec63dd6cf289cc18f1688e36f5&" 
                            alt="Blocuri pentru terminarea jocului" 
                            className="rounded-lg border shadow-sm max-w-md"
                          />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-course-purple">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Explicație Detaliată a Logicii Jocului</h3>
                    
                    <p className="mb-4 text-gray-600">
                      Jocul nostru "Prinde Obiectul" funcționează astfel:
                    </p>
                    
                    <ol className="space-y-2 text-gray-600 mb-4">
                      <li>
                        <strong>Inițializare:</strong> Setăm valorile inițiale pentru scor (0), vieți (3) și viteza jocului (1000ms).
                      </li>
                      <li>
                        <strong>Control:</strong> Jucătorul controlează coșul prin înclinarea telefonului. Cu cât înclinarea e mai mare, cu atât coșul se mișcă mai repede.
                      </li>
                      <li>
                        <strong>Mecanica Jocului:</strong> Un obiect cade de sus în jos la intervale regulate. Obiectul își mărește viteza pe măsură ce scorul crește.
                      </li>
                      <li>
                        <strong>Scorul:</strong> Când obiectul este prins în coș, scorul crește cu 1 punct.
                      </li>
                      <li>
                        <strong>Vieți:</strong> Când obiectul scapă de coș, jucătorul pierde o viață. Jocul se termină când nu mai sunt vieți rămase.
                      </li>
                      <li>
                        <strong>Dificultate Progresivă:</strong> La fiecare 5 puncte, viteza de cădere a obiectului crește, făcând jocul mai dificil.
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
              
              {/* Step 3: Testing and Improvements */}
              <Card className="mb-8 border-0 shadow-md" id="paso3">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-course-purple text-white rounded-full h-8 w-8 flex items-center justify-center mr-2">3</span>
                    Testarea și Îmbunătățiri
                  </h2>
                  
                  <p className="mb-6 text-gray-600">
                    Acum că am implementat logica de bază a jocului, este timpul să testăm aplicația și să adăugăm unele îmbunătățiri.
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Testarea Aplicației</h3>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Moduri de Testare</h4>
                      <p className="text-gray-600 mb-4">Există mai multe moduri de a testa aplicația ta:</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="border border-gray-300 rounded-lg p-4">
                          <h5 className="font-semibold flex items-center mb-2">
                            <Smartphone className="mr-2 h-5 w-5 text-course-blue" />
                            Pe Dispozitiv
                          </h5>
                          <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-600">
                            <li>Instalează aplicația <strong>MIT AI2 Companion</strong> pe telefonul Android</li>
                            <li>În App Inventor, dă click pe "Connect" și alege "AI Companion"</li>
                            <li>Scanează codul QR cu aplicația companion</li>
                          </ol>
                        </div>
                        
                        <div className="border border-gray-300 rounded-lg p-4">
                          <h5 className="font-semibold flex items-center mb-2">
                            <Laptop className="mr-2 h-5 w-5 text-course-blue" />
                            Cu Emulatorul
                          </h5>
                          <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-600">
                            <li>În App Inventor, dă click pe "Connect" și alege "Emulator"</li>
                            <li>Așteaptă ca emulatorul să pornească</li>
                            <li>Pentru a simula înclinarea, folosește tastele 7, 9, 1, 3 pentru a controla senzorul de orientare</li>
                          </ol>
                        </div>
                      </div>
                      
                      <Alert variant="default" className="bg-yellow-50 border-yellow-200">
                        <Lightbulb className="h-4 w-4 text-yellow-500" />
                        <AlertTitle>Sfat Important</AlertTitle>
                        <AlertDescription>
                          Testarea pe un dispozitiv real este recomandată pentru acest joc, deoarece utilizează senzorul de orientare care este dificil de simulat cu precizie în emulator.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Îmbunătățiri Posibile</h3>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-600 mb-4">
                        Iată câteva modalități de a îmbunătăți jocul și de a-l face mai captivant:
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border bg-white border-gray-300 rounded-lg p-4">
                          <h4 className="font-semibold flex items-center mb-2">
                            <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
                            Adaugă un Sistem de Nivele
                          </h4>
                          <p className="text-gray-600 text-sm">
                            Creează mai multe nivele cu dificultate progresivă, fiecare cu obiective diferite sau viteze diferite de cădere.
                          </p>
                          <CodeBlock language="text" className="mt-2" style={{ maxHeight: "100px" }}>
{`set global level to 1
if global scor > 10 then
   set global level to 2
   // Setări pentru nivelul 2
end if`}
                          </CodeBlock>
                        </div>
                        
                        <div className="border bg-white border-gray-300 rounded-lg p-4">
                          <h4 className="font-semibold flex items-center mb-2">
                            <Rocket className="mr-2 h-5 w-5 text-red-500" />
                            Adaugă Obstacole
                          </h4>
                          <p className="text-gray-600 text-sm">
                            Introdu obstacole care se mișcă pe ecran și pe care jucătorul trebuie să le evite în timp ce încearcă să prindă obiectele.
                          </p>
                          <CodeBlock language="text" className="mt-2" style={{ maxHeight: "100px" }}>
{`Când ObstacolSprite.CollidedWith CosSprite
   set global vieti to global vieti - 1
   // Actualizare afișaj vieți`}
                          </CodeBlock>
                        </div>
                        
                        <div className="border bg-white border-gray-300 rounded-lg p-4">
                          <h4 className="font-semibold flex items-center mb-2">
                            <GameController className="mr-2 h-5 w-5 text-purple-500" />
                            Obiecte Bonus
                          </h4>
                          <p className="text-gray-600 text-sm">
                            Adaugă obiecte speciale care oferă bonusuri (ex: vieți suplimentare, scor dublu, încetinirea timpului).
                          </p>
                          <CodeBlock language="text" className="mt-2" style={{ maxHeight: "100px" }}>
{`if global itemType = "viataExtra" then
   set global vieti to global vieti + 1
   // Actualizare afișaj vieți
end if`}
                          </CodeBlock>
                        </div>
                        
                        <div className="border bg-white border-gray-300 rounded-lg p-4">
                          <h4 className="font-semibold flex items-center mb-2">
                            <Share2 className="mr-2 h-5 w-5 text-blue-500" />
                            Împărtășirea Scorului
                          </h4>
                          <p className="text-gray-600 text-sm">
                            Adaugă o funcționalitate pentru a împărtăși scorul pe rețelele sociale sau pentru a salva recordurile locale.
                          </p>
                          <CodeBlock language="text" className="mt-2" style={{ maxHeight: "100px" }}>
{`Când ShareButton.Click
   set message to join "Am obținut " global scor " puncte în jocul Prinde Obiectul!"
   call Sharing1.ShareMessage message`}
                          </CodeBlock>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Step 4: Challenges */}
              <Card className="mb-8 border-0 shadow-md" id="paso4">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-course-purple text-white rounded-full h-8 w-8 flex items-center justify-center mr-2">4</span>
                    Provocări pentru Extindere
                  </h2>
                  
                  <p className="mb-6 text-gray-600">
                    Pentru a-ți dezvolta în continuare abilitățile, încearcă să implementezi următoarele provocări:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-course-purple relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-course-purple text-white px-3 py-1 text-xs font-bold">
                        Nivel Mediu
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 mt-4">Ecran de Start și Game Over</h3>
                      <p className="text-gray-600 mb-4">
                        Adaugă un ecran de start cu un buton de "Începe Jocul" și un ecran de Game Over cu opțiunea de a reîncepe jocul.
                      </p>
                      <div className="flex items-center text-course-purple">
                        <PlusCircle className="h-5 w-5 mr-2" />
                        <span className="font-semibold">Bonus: Adaugă un sistem de record personal</span>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-course-blue relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-course-blue text-white px-3 py-1 text-xs font-bold">
                        Nivel Avansat
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 mt-4">Multiple Tipuri de Obiecte</h3>
                      <p className="text-gray-600 mb-4">
                        Adaugă mai multe tipuri de obiecte care cad, fiecare cu valori diferite de puncte și viteze diferite.
                      </p>
                      <div className="flex items-center text-course-blue">
                        <PlusCircle className="h-5 w-5 mr-2" />
                        <span className="font-semibold">Bonus: Obiecte negative care trebuie evitate</span>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-600 relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-xs font-bold">
                        Nivel Mediu
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 mt-4">Efecte Sonore și Animații</h3>
                      <p className="text-gray-600 mb-4">
                        Adaugă efecte sonore pentru diferite evenimente (prindere obiect, pierdere viață, game over) și animații vizuale.
                      </p>
                      <div className="flex items-center text-green-600">
                        <PlusCircle className="h-5 w-5 mr-2" />
                        <span className="font-semibold">Bonus: Adaugă o melodie de fundal</span>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-xs font-bold">
                        Nivel Expert
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 mt-4">Moduri de Joc Alternative</h3>
                      <p className="text-gray-600 mb-4">
                        Creează moduri de joc alternative, cum ar fi un mod cu timp limitat sau un mod infinit cu dificultate progresivă.
                      </p>
                      <div className="flex items-center text-orange-500">
                        <PlusCircle className="h-5 w-5 mr-2" />
                        <span className="font-semibold">Bonus: Sistem de deblocare a modurilor de joc</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <Sparkles className="mr-2 h-6 w-6 text-purple-500" />
                      Împărtășește Creația Ta
                    </h3>
                    <p className="text-gray-700 mb-4">
                      După ce ai finalizat proiectul și ai implementat unele dintre provocări, împărtășește-l cu colegii și 
                      profesorii tăi. Poți exporta proiectul ca fișier .aia din App Inventor 
                      (Projects {'>'}  Export selected project (.aia) to my computer).
                    </p>
                    <p className="text-gray-700">
                      Fii deschis la feedback și idei pentru îmbunătățiri ulterioare. Învățarea prin colaborare și 
                      schimbul de idei este o parte importantă a dezvoltării abilităților de programare!
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Step 5: Wrap-up */}
              <Card className="mb-8 border-0 shadow-md">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Ce Urmează?</h2>
                  
                  <p className="text-gray-600 mb-6">
                    Felicitări pentru finalizarea celei de-a treia sesiuni a cursului App Inventor! 
                    Ai învățat cum să folosești senzorul de orientare pentru a crea un joc interactiv și captivant.
                  </p>
                  
                  <div className="bg-gradient-to-r from-course-purple to-course-blue rounded-lg p-6 text-white mb-6">
                    <h3 className="text-xl font-bold mb-3">Concepte Învățate</h3>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-300 flex-shrink-0" />
                        <span>Utilizarea senzorului de orientare pentru a controla obiecte în joc</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-300 flex-shrink-0" />
                        <span>Implementarea fizicii simple pentru obiecte în cădere</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-300 flex-shrink-0" />
                        <span>Detecția coliziunilor între sprite-uri</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-300 flex-shrink-0" />
                        <span>Gestionarea scorului și a unui sistem de vieți</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-300 flex-shrink-0" />
                        <span>Crearea unei dificultăți dinamice care crește odată cu scorul</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-between">
                    <Button asChild variant="outline" size="lg" className="border-course-purple text-course-purple hover:bg-course-purple hover:text-white">
                      <Link to="/appinventor/session2" className="flex items-center">
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        <span>Sesiunea 2: Joc de Quiz</span>
                      </Link>
                    </Button>
                    
                    <Button asChild variant="outline" size="lg" className="border-course-purple text-course-purple hover:bg-course-purple hover:text-white" disabled>
                      <Link to="/appinventor/session4" className="flex items-center">
                        <span>Sesiunea 4: Animal Virtual (Partea 1)</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <Card className="border-0 shadow-md mb-6">
                  <CardContent className="p-0">
                    <div className="bg-course-purple text-white p-4">
                      <h2 className="text-xl font-bold">În Această Lecție</h2>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        <li>
                          <a href="#paso1" className="text-course-blue hover:text-course-purple flex items-center">
                            <div className="bg-course-blue/10 rounded-full h-6 w-6 flex items-center justify-center mr-2 text-course-blue">1</div>
                            <span>Configurarea Proiectului</span>
                          </a>
                        </li>
                        <li>
                          <a href="#paso2" className="text-course-blue hover:text-course-purple flex items-center">
                            <div className="bg-course-blue/10 rounded-full h-6 w-6 flex items-center justify-center mr-2 text-course-blue">2</div>
                            <span>Programarea Logicii Jocului</span>
                          </a>
                        </li>
                        <li>
                          <a href="#paso3" className="text-course-blue hover:text-course-purple flex items-center">
                            <div className="bg-course-blue/10 rounded-full h-6 w-6 flex items-center justify-center mr-2 text-course-blue">3</div>
                            <span>Testarea și Îmbunătățiri</span>
                          </a>
                        </li>
                        <li>
                          <a href="#paso4" className="text-course-blue hover:text-course-purple flex items-center">
                            <div className="bg-course-blue/10 rounded-full h-6 w-6 flex items-center justify-center mr-2 text-course-blue">4</div>
                            <span>Provocări pentru Extindere</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md mb-6">
                  <CardContent className="p-0">
                    <div className="bg-blue-500 text-white p-4">
                      <h2 className="text-xl font-bold">Resurse</h2>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-3">
                        <li>
                          <a href="https://appinventor.mit.edu/explore/ai2/tutorials" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
                            <FileCode className="mr-2 h-5 w-5" />
                            <span>Tutoriale Oficiale App Inventor</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://puravidaapps.com/tutorials.php" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
                            <GameController className="mr-2 h-5 w-5" />
                            <span>Tutoriale pentru Jocuri App Inventor</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.appinventor.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
                            <Download className="mr-2 h-5 w-5" />
                            <span>Resurse Suplimentare</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md">
                  <CardContent className="p-0">
                    <div className="bg-gray-800 text-white p-4">
                      <h2 className="text-xl font-bold">Navigare Rapidă</h2>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        <Button asChild variant="outline" size="sm" className="justify-start">
                          <Link to="/appinventor/session1" className="flex items-center">
                            <span>Sesiunea 1: Joc Clicker</span>
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="justify-start">
                          <Link to="/appinventor/session2" className="flex items-center">
                            <span>Sesiunea 2: Joc de Quiz</span>
                          </Link>
                        </Button>
                        <Button asChild variant="default" size="sm" className="justify-start bg-course-purple">
                          <Link to="/appinventor/session3" className="flex items-center">
                            <span>Sesiunea 3: Jocul Prinde Obiectul</span>
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm" disabled className="justify-start">
                          <Link to="/appinventor/session4" className="flex items-center">
                            <span>Sesiunea 4: Animal Virtual (Partea 1)</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Session3;
