
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ChevronRight, Star, Terminal } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Session5 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-course-purple to-course-blue text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <span className="bg-white text-course-purple rounded-full h-8 w-8 flex items-center justify-center mr-2">
                    5
                  </span>
                  <h1 className="text-2xl md:text-3xl font-bold">Sesiunea 5: Joc Arcade</h1>
                </div>
                <p className="text-white/90">
                  Creează un joc arcade simplu cu obiecte în mișcare și coliziuni în App Inventor
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button asChild variant="secondary" className="border-white text-gray-800 hover:bg-white/90">
                  <Link to="/appinventor" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <span>Înapoi la curs</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-3/4">
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Jocul Arcade: Space Defender</h2>
                    <p className="mb-4">
                      În această sesiune vom crea un joc arcade simplu de tip "Space Defender", unde jucătorul controlează o navă spațială și trebuie să evite sau să distrugă asteroizii care se apropie. Vom învăța despre animații, detecția coliziunilor și cum să implementăm un sistem de scor și vieți.
                    </p>
                    
                    <div className="bg-blue-50 border-l-4 border-course-blue p-4 my-6">
                      <h3 className="text-lg font-semibold text-course-blue mb-2">Ce vei învăța</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Cum să creezi obiecte care se mișcă pe ecran</li>
                        <li>Cum să implementezi controlul prin atingere și senzorul de accelerometru</li>
                        <li>Cum să detectezi coliziunile între obiecte</li>
                        <li>Cum să implementezi un sistem de scor și vieți</li>
                        <li>Cum să creezi efecte sonore și vizuale</li>
                      </ul>
                    </div>

                    <Tabs defaultValue="setup" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="setup">Configurare</TabsTrigger>
                        <TabsTrigger value="implementation">Implementare</TabsTrigger>
                        <TabsTrigger value="challenges">Provocări</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="setup">
                        <div className="space-y-4 mt-4">
                          <h3 className="text-xl font-semibold">Pasul 1: Pregătirea mediului de lucru</h3>
                          <p>
                            Înainte de a începe, vom crea un nou proiect în MIT App Inventor și vom configura interfața pentru jocul nostru arcade.
                          </p>
                          
                          <ol className="list-decimal list-inside space-y-4 pl-4 mt-4">
                            <li className="p-4 border rounded-md bg-gray-50">
                              Accesează <a href="https://appinventor.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline">MIT App Inventor</a> și autentifică-te.
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              Creează un nou proiect și numește-l "SpaceDefender".
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              În secțiunea Palette din stânga, caută și descarcă câteva imagini pentru proiectul tău:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>O imagine pentru nava spațială</li>
                                <li>O imagine pentru asteroizi</li>
                                <li>O imagine pentru fundal (opțională)</li>
                                <li>O imagine pentru explozie (opțională)</li>
                              </ul>
                            </li>
                          </ol>
                          
                          <h3 className="text-xl font-semibold mt-6">Pasul 2: Configurarea interfeței utilizator</h3>
                          <p>
                            Acum vom configura interfața utilizator pentru jocul nostru. Vom avea nevoie de un Canvas pentru zona de joc, etichete pentru scor și vieți și butoane pentru control.
                          </p>
                          
                          <ol className="list-decimal list-inside space-y-4 pl-4 mt-4">
                            <li className="p-4 border rounded-md bg-gray-50">
                              Din secțiunea "Drawing and Animation", trage un component Canvas în ecran. Acesta va fi zona noastră principală de joc.
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Setează Width la Fill Parent</li>
                                <li>Setează Height la 70% din înălțimea ecranului</li>
                                <li>Dacă ai o imagine de fundal, setează BackgroundImage la imaginea respectivă</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              Din secțiunea "User Interface", adaugă două etichete (Label) în partea de sus a ecranului:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Prima etichetă va afișa scorul. Denumește-o "ScoreLabel" și setează textul la "Scor: 0"</li>
                                <li>A doua etichetă va afișa viețile. Denumește-o "LivesLabel" și setează textul la "Vieți: 3"</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              Din secțiunea "User Interface", adaugă un buton (Button) pentru a începe jocul:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Denumește-l "StartButton"</li>
                                <li>Setează textul la "Start Joc"</li>
                                <li>Poziționează-l sub canvas</li>
                              </ul>
                            </li>
                          </ol>
                          
                          <h3 className="text-xl font-semibold mt-6">Pasul 3: Adăugarea obiectelor de joc</h3>
                          <p>
                            Acum vom adăuga obiectele principale ale jocului: nava spațială și asteroizii.
                          </p>
                          
                          <ol className="list-decimal list-inside space-y-4 pl-4 mt-4">
                            <li className="p-4 border rounded-md bg-gray-50">
                              Din secțiunea "Drawing and Animation", trage un component ImageSprite pe Canvas:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Denumește-l "PlayerShip"</li>
                                <li>Setează Picture la imaginea navei tale spațiale</li>
                                <li>Poziționează-l în partea de jos a Canvas-ului</li>
                                <li>Ajustează Width și Height pentru a se potrivi jocului</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              Din secțiunea "Drawing and Animation", trage alt component ImageSprite pe Canvas:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Denumește-l "Asteroid1"</li>
                                <li>Setează Picture la imaginea asteroidului</li>
                                <li>Poziționează-l în partea de sus a Canvas-ului</li>
                                <li>Ajustează Width și Height după preferință</li>
                                <li>Setează Visible la False (îl vom face vizibil când începe jocul)</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              Din secțiunea "Sensors", adaugă un component AccelerometerSensor:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Acesta va permite controlul navei prin înclinarea dispozitivului</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              Din secțiunea "Media", adaugă două componente Sound:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Primul pentru sunetul de coliziune (denumește-l "CollisionSound")</li>
                                <li>Al doilea pentru sunetul de fundal sau efecte (denumește-l "BackgroundSound")</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              Din secțiunea "Sensors", adaugă un component Clock:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Denumește-l "GameClock"</li>
                                <li>Setează TimerInterval la 50 milisecunde</li>
                                <li>Setează TimerEnabled la False (îl vom activa când începe jocul)</li>
                              </ul>
                            </li>
                          </ol>
                          
                          <div className="mt-6 border p-4 rounded-md text-center">
                            <p className="text-gray-600 mb-2">
                              Interfața ta ar trebui să arate similar cu aceasta:
                            </p>
                            <div className="bg-white border-2 border-gray-300 rounded-xl p-4 max-w-md mx-auto">
                              <div className="flex justify-between p-2 bg-gray-100 rounded-t">
                                <div>Scor: 0</div>
                                <div>Vieți: 3</div>
                              </div>
                              <div className="bg-black h-60 relative flex items-center justify-center">
                                <div className="text-white text-sm">[Zona de joc]</div>
                                <div className="absolute bottom-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">Navă</span>
                                </div>
                                <div className="absolute top-4 right-10 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">Asteroid</span>
                                </div>
                              </div>
                              <div className="p-2 flex justify-center">
                                <div className="bg-green-500 text-white py-2 px-4 rounded">Start Joc</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="implementation">
                        <div className="space-y-4 mt-4">
                          <h3 className="text-xl font-semibold">Pasul 4: Programarea logicii jocului</h3>
                          <p>
                            Acum vom programa logica jocului nostru folosind blocurile din App Inventor.
                          </p>
                          
                          <h4 className="text-lg font-medium mt-6">Variabile globale</h4>
                          <p className="mb-3">
                            În primul rând, vom crea variabilele globale necesare pentru jocul nostru.
                          </p>
                          
                          <CodeBlock>
{`// Inițializează scor la 0
initialize global score to 0

// Inițializează vieți la 3
initialize global lives to 3

// Variabilă pentru a controla dacă jocul rulează
initialize global gameRunning to false

// Viteza de mișcare a asteroizilor
initialize global asteroidSpeed to 3`}
                          </CodeBlock>
                          
                          <h4 className="text-lg font-medium mt-6">Butonul Start</h4>
                          <p className="mb-3">
                            Vom programa butonul de start pentru a începe jocul.
                          </p>
                          
                          <CodeBlock>
{`when StartButton.Click
  do
    // Resetează valorile inițiale
    set global score to 0
    set global lives to 3
    set ScoreLabel.Text to join "Scor: " (global score)
    set LivesLabel.Text to join "Vieți: " (global lives)
    
    // Asigură-te că nava este vizibilă și în poziția inițială
    set PlayerShip.Visible to true
    set PlayerShip.X to (divide Canvas1.Width by 2) - (divide PlayerShip.Width by 2)
    set PlayerShip.Y to Canvas1.Height - PlayerShip.Height - 10
    
    // Resetează poziția asteroidului și îl face vizibil
    set Asteroid1.Visible to true
    reset_asteroid
    
    // Pornește cronometrul jocului
    set GameClock.TimerEnabled to true
    
    // Marchează jocul ca fiind în desfășurare
    set global gameRunning to true
    
    // Schimbă textul butonului
    set StartButton.Text to "Joc în desfășurare..."`}
                          </CodeBlock>
                          
                          <h4 className="text-lg font-medium mt-6">Funcția pentru resetarea asteroidului</h4>
                          <p className="mb-3">
                            Vom crea o procedură pentru a reseta poziția asteroidului.
                          </p>
                          
                          <CodeBlock>
{`to reset_asteroid
  // Plasează asteroidul într-o poziție aleatorie în partea de sus
  set Asteroid1.X to random integer from 0 to (Canvas1.Width - Asteroid1.Width)
  set Asteroid1.Y to 0 - Asteroid1.Height
  
  // Setează viteza (poate varia pentru dificultate progresivă)
  set global asteroidSpeed to random integer from 2 to 5`}
                          </CodeBlock>
                          
                          <h4 className="text-lg font-medium mt-6">Cronometrul jocului</h4>
                          <p className="mb-3">
                            Cronometrul va actualiza poziția obiectelor și va verifica coliziunile.
                          </p>
                          
                          <CodeBlock>
{`when GameClock.Timer
  do
    // Verifică dacă jocul rulează
    if global gameRunning then
      // Mișcă asteroidul în jos
      set Asteroid1.Y to Asteroid1.Y + global asteroidSpeed
      
      // Verifică dacă asteroidul a ieșit din ecran
      if Asteroid1.Y > Canvas1.Height then
        // Increment scor
        set global score to global score + 1
        set ScoreLabel.Text to join "Scor: " (global score)
        // Resetează asteroidul
        reset_asteroid
      end if
      
      // Verifică coliziunea cu nava
      if Asteroid1.CollidingWith(PlayerShip) then
        // Scade o viață
        set global lives to global lives - 1
        set LivesLabel.Text to join "Vieți: " (global lives)
        
        // Redă sunetul de coliziune
        call CollisionSound.Play
        
        // Verifică dacă am rămas fără vieți
        if global lives <= 0 then
          // Game over
          set global gameRunning to false
          set GameClock.TimerEnabled to false
          set StartButton.Text to "Joc terminat! Reîncepe"
        else
          // Resetează asteroidul
          reset_asteroid
        end if
      end if
    end if`}
                          </CodeBlock>
                          
                          <h4 className="text-lg font-medium mt-6">Controlul navei</h4>
                          <p className="mb-3">
                            Vom controla nava folosind senzorul de accelerometru.
                          </p>
                          
                          <CodeBlock>
{`when AccelerometerSensor1.AccelerationChanged
  do
    // Verifică dacă jocul este în desfășurare
    if global gameRunning then
      // Mișcă nava în funcție de înclinarea telefonului (pe axa X)
      set PlayerShip.X to PlayerShip.X - (AccelerometerSensor1.YAccel * 10)
      
      // Asigură-te că nava nu iese din ecran
      if PlayerShip.X < 0 then
        set PlayerShip.X to 0
      end if
      
      if PlayerShip.X > Canvas1.Width - PlayerShip.Width then
        set PlayerShip.X to Canvas1.Width - PlayerShip.Width
      end if
    end if`}
                          </CodeBlock>
                          
                          <h4 className="text-lg font-medium mt-6">Control alternativ prin atingere</h4>
                          <p className="mb-3">
                            De asemenea, vom adăuga posibilitatea de a controla nava prin atingerea ecranului.
                          </p>
                          
                          <CodeBlock>
{`when Canvas1.Touched
  do
    // Verifică dacă jocul este în desfășurare
    if global gameRunning then
      // Mișcă nava la poziția atingerii (pe axa X)
      set PlayerShip.X to get x - (divide PlayerShip.Width by 2)
      
      // Asigură-te că nava nu iese din ecran
      if PlayerShip.X < 0 then
        set PlayerShip.X to 0
      end if
      
      if PlayerShip.X > Canvas1.Width - PlayerShip.Width then
        set PlayerShip.X to Canvas1.Width - PlayerShip.Width
      end if
    end if`}
                          </CodeBlock>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="challenges">
                        <div className="space-y-4 mt-4">
                          <h3 className="text-xl font-semibold">Provocări pentru îmbunătățirea jocului</h3>
                          <p>
                            Acum că ai implementat baza jocului, poți încerca următoarele provocări pentru a-l îmbunătăți:
                          </p>
                          
                          <div className="space-y-4">
                            <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                              <h4 className="font-bold flex items-center">
                                <Star className="h-5 w-5 text-course-purple mr-2" />
                                Provocare 1: Adaugă mai mulți asteroizi
                              </h4>
                              <p className="mt-2">
                                Adaugă 2-3 asteroizi suplimentari care se mișcă independent. Aceștia pot avea viteze diferite și pot apărea la intervale diferite.
                              </p>
                              <ul className="list-disc list-inside mt-2 text-gray-700">
                                <li>Adaugă mai multe sprite-uri pentru asteroizi</li>
                                <li>Modifică logica pentru a gestiona fiecare asteroid</li>
                                <li>Asigură-te că jocul rămâne jucabil (nu prea dificil)</li>
                              </ul>
                            </div>
                            
                            <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                              <h4 className="font-bold flex items-center">
                                <Star className="h-5 w-5 text-course-purple mr-2" />
                                Provocare 2: Adaugă un sistem de punctaj avansat
                              </h4>
                              <p className="mt-2">
                                Implementează un sistem de punctaj care crește în funcție de timpul de joc și dificultatea crescândă.
                              </p>
                              <ul className="list-disc list-inside mt-2 text-gray-700">
                                <li>Adaugă puncte bonus pentru evitarea asteroizilor timp îndelungat</li>
                                <li>Crește viteza asteroizilor pe măsură ce scorul crește</li>
                                <li>Adaugă un sistem de high-score care se salvează între sesiuni</li>
                              </ul>
                            </div>
                            
                            <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                              <h4 className="font-bold flex items-center">
                                <Star className="h-5 w-5 text-course-purple mr-2" />
                                Provocare 3: Adaugă putere de foc navei
                              </h4>
                              <p className="mt-2">
                                Permite navei să tragă pentru a distruge asteroizii. Aceasta adaugă un nou nivel de interactivitate jocului.
                              </p>
                              <ul className="list-disc list-inside mt-2 text-gray-700">
                                <li>Adaugă un buton sau gest pentru a trage</li>
                                <li>Creează sprite-uri pentru proiectile</li>
                                <li>Implementează logica de coliziune între proiectile și asteroizi</li>
                                <li>Adaugă efecte vizuale și sonore pentru distrugerea asteroizilor</li>
                              </ul>
                            </div>
                            
                            <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                              <h4 className="font-bold flex items-center">
                                <Star className="h-5 w-5 text-course-purple mr-2" />
                                Provocare 4: Adaugă power-up-uri
                              </h4>
                              <p className="mt-2">
                                Implementează power-up-uri care apar ocazional și oferă avantaje temporare când sunt colectate.
                              </p>
                              <ul className="list-disc list-inside mt-2 text-gray-700">
                                <li>Creează sprite-uri pentru power-up-uri</li>
                                <li>Adaugă diferite tipuri de power-up-uri (scut, viață în plus, viteză mai mare, etc.)</li>
                                <li>Implementează logica pentru apariția și colectarea lor</li>
                                <li>Adaugă efecte vizuale pentru a indica power-up-ul activ</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                      <h3 className="text-lg font-semibold text-green-700 mb-2">Ce ai învățat</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Cum să folosești Canvas și ImageSprite pentru a crea jocuri</li>
                        <li>Cum să implementezi logica de mișcare și coliziuni</li>
                        <li>Cum să folosești accelerometrul pentru control</li>
                        <li>Cum să implementezi un sistem basic de scor și vieți</li>
                        <li>Cum să implementezi un cronometru de joc pentru actualizări constante</li>
                      </ul>
                    </div>

                    <div className="flex justify-between mt-8">
                      <Button className="bg-gray-500 hover:bg-gray-600" asChild>
                        <Link to="/appinventor/session4">
                          <ArrowLeft className="mr-2 h-5 w-5" />
                          <span>Sesiunea anterioară</span>
                        </Link>
                      </Button>
                      
                      <Button className="bg-course-purple hover:bg-course-blue" asChild>
                        <Link to="/appinventor/session6">
                          <span>Sesiunea următoare</span>
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/4">
                <div className="sticky top-4">
                  <Card className="mb-6">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-2">Conținut</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="text-course-purple hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-course-purple rounded-full mr-2"></div>
                            Configurare
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Interfața jocului
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Programare
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Coliziuni
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Provocări
                          </a>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-2">Resurse</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="https://appinventor.mit.edu/explore/ai2/space-invaders" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <Terminal className="h-4 w-4 mr-1" />
                            Tutorial oficial Space Invaders
                          </a>
                        </li>
                        <li>
                          <a href="https://appinventor.mit.edu/explore/ai2/gaming" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <Terminal className="h-4 w-4 mr-1" />
                            Tutoriale de jocuri MIT
                          </a>
                        </li>
                        <li>
                          <a href="https://puravidaapps.com/snippets.php" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <Terminal className="h-4 w-4 mr-1" />
                            Elemente de cod pentru jocuri
                          </a>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Session5;
