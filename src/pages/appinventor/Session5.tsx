
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ChevronRight, Star, Monitor, Smartphone } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
                  Creează un joc arcade simplu cu obiecte în mișcare și coliziuni!
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/20">
                  <Link to="/appinventor" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <span>Înapoi la curriculum</span>
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
                    <Tabs defaultValue="tutorial">
                      <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="tutorial">Tutorial</TabsTrigger>
                        <TabsTrigger value="code">Codul complet</TabsTrigger>
                      </TabsList>

                      <TabsContent value="tutorial">
                        <h2 className="text-2xl font-bold mb-4">Introducere în Jocul Arcade</h2>
                        <p className="mb-4">
                          În această lecție vom crea un joc arcade simplu în care jucătorul controlează un obiect 
                          pentru a evita obstacole în mișcare și pentru a colecta puncte.
                        </p>
                        
                        <div className="bg-blue-50 border-l-4 border-course-blue p-4 my-6">
                          <h3 className="text-lg font-semibold text-course-blue mb-2">Ce vei învăța</h3>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Cum să folosești Canvas pentru jocuri grafice</li>
                            <li>Cum să controlezi obiecte cu accelerometrul dispozitivului</li>
                            <li>Cum să implementezi detecția de coliziuni</li>
                            <li>Cum să folosești timer-ul pentru animații</li>
                            <li>Cum să salvezi scoruri mari locale</li>
                          </ul>
                        </div>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Pasul 1: Configurarea interfeței</h2>
                        <p className="mb-4">
                          Pentru jocul nostru arcade, vom utiliza un Canvas pentru desenarea și controlul obiectelor jocului:
                        </p>

                        <ol className="list-decimal list-inside space-y-4 mb-6">
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Creează un nou proiect</strong> în MIT App Inventor numit "JocArcade"
                          </li>
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Adaugă un Canvas</strong> din secțiunea Drawing and Animation
                            <ul className="list-disc list-inside mt-2 ml-4">
                              <li>Setează Width la Fill parent</li>
                              <li>Setează Height la 300 pixels</li>
                              <li>Schimbă BackgroundColor la Light Gray</li>
                            </ul>
                          </li>
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Adaugă un ImageSprite</strong> pe Canvas (va fi jucătorul)
                            <ul className="list-disc list-inside mt-2 ml-4">
                              <li>Încarcă o imagine simplă pentru jucător</li>
                              <li>Setează Width și Height la 30 pixels</li>
                              <li>Poziționează-l în partea de jos a ecranului</li>
                            </ul>
                          </li>
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Adaugă etichete pentru scor</strong> sub Canvas
                            <ul className="list-disc list-inside mt-2 ml-4">
                              <li>O etichetă pentru "Scor: 0"</li>
                              <li>O etichetă pentru "Scor maxim: 0"</li>
                            </ul>
                          </li>
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Adaugă un Clock</strong> din secțiunea Sensors
                            <ul className="list-disc list-inside mt-2 ml-4">
                              <li>Setează TimerInterval la 50 milliseconds</li>
                              <li>Activează TimerEnabled</li>
                            </ul>
                          </li>
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Adaugă AccelerometerSensor</strong> pentru controlul jucătorului
                          </li>
                        </ol>

                        <div className="my-8 border p-4 rounded-md text-center">
                          <p className="text-gray-600 mb-2">
                            Interfața jocului tău ar trebui să arate astfel:
                          </p>
                          <div className="bg-white border-2 border-gray-300 rounded-xl p-4 mx-auto">
                            <div className="bg-gray-200 h-48 rounded-lg mb-4 relative">
                              <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 bg-blue-500 w-8 h-8 rounded-full"></div>
                            </div>
                            <div className="flex justify-between">
                              <div className="text-left">Scor: 0</div>
                              <div className="text-right">Scor maxim: 0</div>
                            </div>
                          </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-4">Pasul 2: Adaugă Obstacole și Bonusuri</h2>
                        
                        <p className="mb-4">
                          Acum vom adăuga obiecte pe care jucătorul trebuie să le evite și obiecte bonus:
                        </p>

                        <ol className="list-decimal list-inside space-y-4 mb-6">
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Adaugă un ImageSprite pentru obstacol</strong> pe Canvas
                            <ul className="list-disc list-inside mt-2 ml-4">
                              <li>Încarcă o imagine pentru obstacol (de exemplu, un cerc roșu)</li>
                              <li>Setează Width și Height la 20 pixels</li>
                              <li>Poziționează-l în partea de sus a ecranului</li>
                              <li>Poți adăuga mai multe obstacole după același model</li>
                            </ul>
                          </li>
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Adaugă un ImageSprite pentru bonus</strong> pe Canvas
                            <ul className="list-disc list-inside mt-2 ml-4">
                              <li>Încarcă o imagine pentru bonus (de exemplu, o stea galbenă)</li>
                              <li>Setează Width și Height la 20 pixels</li>
                              <li>Poziționează-l în partea de sus a ecranului</li>
                            </ul>
                          </li>
                        </ol>

                        <h2 className="text-2xl font-bold mb-4">Pasul 3: Programăm comportamentul jocului</h2>

                        <p className="mb-4">
                          Acum vom adăuga blocurile de cod pentru a face jocul să funcționeze:
                        </p>

                        <h3 className="text-xl font-bold mb-3">3.1. Inițializarea variabilelor globale</h3>
                        <p className="mb-4">Mai întâi, vom inițializa variabilele globale pentru joc:</p>

                        <ul className="list-disc list-inside space-y-2 mb-6">
                          <li>scor - pentru a ține evidența scorului curent</li>
                          <li>scorMaxim - pentru a păstra cel mai mare scor</li>
                          <li>jocActiv - pentru a ști dacă jocul este în desfășurare</li>
                        </ul>

                        <h3 className="text-xl font-bold mb-3">3.2. Controlul jucătorului cu accelerometru</h3>
                        <p className="mb-4">
                          Vom adăuga blocuri pentru a deplasa jucătorul în funcție de înclinarea dispozitivului:
                        </p>

                        <h3 className="text-xl font-bold mb-3">3.3. Animația obstacolelor și bonusurilor</h3>
                        <p className="mb-4">
                          Vom folosi bloculClock.Timer pentru a muta obstacolele și bonusurile în jos pe ecran:
                        </p>

                        <h3 className="text-xl font-bold mb-3">3.4. Detectarea coliziunilor</h3>
                        <p className="mb-4">
                          Vom adăuga blocuri pentru a detecta coliziunile între jucător, obstacole și bonusuri:
                        </p>
                        
                        <ul className="list-disc list-inside space-y-2 mb-6">
                          <li>Coliziune jucător-obstacol: Jocul se termină</li>
                          <li>Coliziune jucător-bonus: Se adaugă puncte la scor</li>
                        </ul>

                        <h3 className="text-xl font-bold mb-3">3.5. Resetarea și salvarea scorului</h3>
                        <p className="mb-4">
                          Vom adăuga funcționalitatea de resetare a jocului și salvare a scorului maxim:
                        </p>
                        
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                          <h3 className="text-lg font-semibold text-green-700 mb-2">Ce ai învățat</h3>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Cum să folosești Canvas pentru a crea jocuri 2D</li>
                            <li>Cum să controlezi obiecte folosind accelerometrul</li>
                            <li>Cum să implementezi detecția de coliziuni între sprite-uri</li>
                            <li>Cum să folosești timer-ul pentru animații continue</li>
                            <li>Cum să salvezi date locale (scorul maxim)</li>
                          </ul>
                        </div>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Provocări suplimentare</h2>
                        <div className="space-y-4 mb-8">
                          <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                            <h3 className="font-bold flex items-center">
                              <Star className="h-5 w-5 text-course-purple mr-2" />
                              Provocare 1: Adaugă niveluri de dificultate
                            </h3>
                            <p className="mt-2">
                              Mărește viteza obstacolelor pe măsură ce scorul crește pentru a face jocul mai dificil.
                            </p>
                          </div>
                          
                          <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                            <h3 className="font-bold flex items-center">
                              <Star className="h-5 w-5 text-course-purple mr-2" />
                              Provocare 2: Adaugă efecte sonore
                            </h3>
                            <p className="mt-2">
                              Adaugă sunete pentru coliziuni, colectare de bonusuri și sfârșitul jocului.
                            </p>
                          </div>
                          
                          <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                            <h3 className="font-bold flex items-center">
                              <Star className="h-5 w-5 text-course-purple mr-2" />
                              Provocare 3: Implementează vieți multiple
                            </h3>
                            <p className="mt-2">
                              Oferă jucătorului 3 vieți înainte ca jocul să se termine complet.
                            </p>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="code">
                        <section>
                          <h2 className="text-2xl font-bold mb-4">Codul complet pentru Jocul Arcade</h2>

                          <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3">Inițializarea variabilelor globale</h3>
                            <CodeBlock
                              language="blocks"
                              code={`
initialize global scor to 0
initialize global scorMaxim to 0
initialize global jocActiv to true
`}
                            />
                          </div>

                          <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3">Controlul jucătorului cu accelerometrul</h3>
                            <CodeBlock
                              language="blocks"
                              code={`
when AccelerometerSensor1.AccelerationChanged
  do
    if jocActiv then
      set SpriteJucator.X to SpriteJucator.X + AccelerometerSensor1.XAccel * -5
      if SpriteJucator.X < 0 then
        set SpriteJucator.X to 0
      end if
      if SpriteJucator.X > Canvas1.Width - SpriteJucator.Width then
        set SpriteJucator.X to Canvas1.Width - SpriteJucator.Width
      end if
    end if
`}
                            />
                          </div>

                          <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3">Animația obstacolelor și resetarea pozițiilor</h3>
                            <CodeBlock
                              language="blocks"
                              code={`
when Clock1.Timer
  do
    if jocActiv then
      set SpriteObstacol.Y to SpriteObstacol.Y + 5
      set SpriteBonus.Y to SpriteBonus.Y + 3
      
      if SpriteObstacol.Y > Canvas1.Height then
        set SpriteObstacol.Y to 0
        set SpriteObstacol.X to random integer from 0 to Canvas1.Width - SpriteObstacol.Width
        set scor to scor + 1
        set LabelScor.Text to join "Scor: " scor
      end if
      
      if SpriteBonus.Y > Canvas1.Height then
        set SpriteBonus.Y to 0
        set SpriteBonus.X to random integer from 0 to Canvas1.Width - SpriteBonus.Width
      end if
    end if
`}
                            />
                          </div>

                          <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3">Detectarea coliziunilor</h3>
                            <CodeBlock
                              language="blocks"
                              code={`
when SpriteJucator.CollidedWith
  do
    if jocActiv then
      if CollidedWith = SpriteObstacol then
        call GameOver
      end if
      if CollidedWith = SpriteBonus then
        set SpriteBonus.Y to 0
        set SpriteBonus.X to random integer from 0 to Canvas1.Width - SpriteBonus.Width
        set scor to scor + 5
        set LabelScor.Text to join "Scor: " scor
      end if
    end if
`}
                            />
                          </div>

                          <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3">Funcția GameOver</h3>
                            <CodeBlock
                              language="blocks"
                              code={`
to GameOver
  do
    set jocActiv to false
    if scor > scorMaxim then
      set scorMaxim to scor
      set LabelScorMaxim.Text to join "Scor maxim: " scorMaxim
      call TinyDB1.StoreValue
        tag "scorMaxim"
        valueToStore scorMaxim
    end if
    call Notifier1.ShowAlert
      notice join "Joc terminat! Scorul tău: " scor
`}
                            />
                          </div>

                          <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3">Reset și inițializare joc</h3>
                            <CodeBlock
                              language="blocks"
                              code={`
when ButtonReset.Click
  do
    set jocActiv to true
    set scor to 0
    set LabelScor.Text to "Scor: 0"
    set SpriteJucator.X to Canvas1.Width / 2 - SpriteJucator.Width / 2
    set SpriteJucator.Y to Canvas1.Height - SpriteJucator.Height - 10
    set SpriteObstacol.X to random integer from 0 to Canvas1.Width - SpriteObstacol.Width
    set SpriteObstacol.Y to 0
    set SpriteBonus.X to random integer from 0 to Canvas1.Width - SpriteBonus.Width
    set SpriteBonus.Y to 0

when Screen1.Initialize
  do
    set scorMaxim to call TinyDB1.GetValue
      tag "scorMaxim"
      valueIfTagNotThere 0
    set LabelScorMaxim.Text to join "Scor maxim: " scorMaxim
`}
                            />
                          </div>
                        </section>
                      </TabsContent>
                    </Tabs>

                    <div className="flex justify-between mt-8">
                      <Button asChild className="bg-gray-500 hover:bg-gray-600">
                        <Link to="/appinventor/session4" className="flex items-center">
                          <ArrowLeft className="mr-2 h-5 w-5" />
                          <span>Lecția anterioară</span>
                        </Link>
                      </Button>
                      <Button asChild className="bg-course-purple hover:bg-course-blue">
                        <Link to="/appinventor/session6" className="flex items-center">
                          <span>Lecția următoare</span>
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
                            Introducere
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 1: Interfața
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 2: Obstacole și Bonusuri
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 3: Programarea jocului
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
                          <a href="https://appinventor.mit.edu/explore/ai2/tutorials" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Tutoriale oficiale
                          </a>
                        </li>
                        <li>
                          <a href="https://appinventor.mit.edu/explore/library" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Biblioteca de componente
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
