
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ChevronRight, Star, BookOpen, Code, CheckCircle, Gamepad } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Session3 = () => {
  useEffect(() => {
    document.title = "Joc Prinde Obiectul | App Inventor - TechMinds Academy";
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Add smooth scrolling to anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
    
    // Cleanup
    return () => {
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

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
                    3
                  </span>
                  <h1 className="text-2xl md:text-3xl font-bold">Sesiunea 3: Joc Prinde Obiectul</h1>
                </div>
                <p className="text-white/90">
                  Dezvoltă un joc captivant de tip arcade folosind senzorul de orientare și timere în App Inventor.
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/20">
                  <Link to="/appinventor" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <span>Înapoi la curs</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/20">
                  <Link to="/appinventor/session2" className="flex items-center">
                    <span>Sesiunea anterioară</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Bar */}
        <div className="bg-gray-100 h-2">
          <div className="bg-course-purple h-2" style={{ width: '25%' }}></div>
        </div>

        {/* Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-3/4">
                <Card className="mb-8 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className="bg-course-purple text-white">Sesiunea 3</Badge>
                      <Badge className="bg-yellow-500 text-white">Intermediar</Badge>
                      <Badge className="bg-blue-500 text-white">Senzori & Animații</Badge>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">Joc Prinde Obiectul: Folosirea Senzorilor și Animațiilor</h2>
                    <div className="flex items-center text-gray-600 text-sm space-x-4">
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        <span>Durată: ~60 minute</span>
                      </div>
                      <div className="flex items-center">
                        <Code className="h-4 w-4 mr-1" />
                        <span>Nivel: Intermediar</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <Tabs defaultValue="tutorial">
                      <TabsList className="mb-4 grid w-full grid-cols-3">
                        <TabsTrigger value="tutorial">Tutorial</TabsTrigger>
                        <TabsTrigger value="blocks">Blocuri de Cod</TabsTrigger>
                        <TabsTrigger value="challenges">Provocări</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="tutorial" className="space-y-8">
                        <section id="introducere">
                          <h2 className="text-2xl font-bold mb-4">Introducere</h2>
                          <p className="mb-4">
                            În această sesiune, vom crea un joc arcade distractiv în care jucătorul trebuie să prindă obiecte care cad folosind un coș pe care îl controlează înclinând dispozitivul. Acest proiect ne va ajuta să explorăm modul în care putem folosi senzorii telefonului pentru a crea experiențe interactive.
                          </p>
                          <p className="mb-6">
                            Vom folosi senzorul de orientare pentru a controla mișcarea coșului, vom crea obiecte care cad aleatoriu pe ecran, și vom implementa un sistem de punctaj pentru a urmări performanța jucătorului.
                          </p>

                          <div className="bg-blue-50 border-l-4 border-course-blue p-4 my-6">
                            <h3 className="text-lg font-semibold text-course-blue mb-2">Ce vei învăța</h3>
                            <ul className="list-disc list-inside space-y-1">
                              <li>Cum să folosești senzorul de orientare pentru a controla obiecte pe ecran</li>
                              <li>Cum să implementezi timere pentru generarea și animarea obiectelor</li>
                              <li>Cum să detectezi coliziuni între obiecte</li>
                              <li>Cum să creezi un sistem de scor și vieți pentru joc</li>
                              <li>Cum să folosești sunete pentru a îmbunătăți experiența jocului</li>
                            </ul>
                          </div>

                          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg my-6">
                            <h3 className="font-semibold mb-2">Proiectul final va arăta astfel:</h3>
                            <div className="flex flex-wrap gap-4">
                              <img 
                                src="https://i.imgur.com/example1.png" 
                                alt="Joc Prinde Obiectul - Ecran principal" 
                                className="rounded-lg border-2 border-white shadow-md max-w-[280px]"
                              />
                              <img 
                                src="https://i.imgur.com/example2.png" 
                                alt="Joc Prinde Obiectul - În timpul jocului" 
                                className="rounded-lg border-2 border-white shadow-md max-w-[280px]"
                              />
                            </div>
                          </div>
                        </section>

                        <section id="pasul1">
                          <h2 className="text-2xl font-bold mb-4">Pasul 1: Configurarea Proiectului</h2>
                          <p className="mb-4">
                            Să începem prin crearea unui nou proiect în MIT App Inventor și configurarea elementelor de bază.
                          </p>

                          <ol className="list-decimal list-inside space-y-4 mb-6">
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Deschide MIT App Inventor</strong> și autentifică-te în contul tău.
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Creează un proiect nou</strong> apăsând pe "Projects" și apoi pe "Start new project".
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Numește proiectul</strong> "PrindeObiectul" și apasă "OK".
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Configurează Screen1</strong> cu următoarele proprietăți:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Title: "Prinde Obiectul"</li>
                                <li>ScreenOrientation: Portrait</li>
                                <li>BackgroundColor: Alege o culoare deschisă de fundal (de ex. Light Blue)</li>
                              </ul>
                            </li>
                          </ol>

                          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                            <h3 className="font-medium mb-2">Sfat</h3>
                            <p>
                              Pentru acest joc, este important să blocăm orientarea ecranului în modul Portrait, deoarece jocul se bazează pe mișcarea laterală folosind senzorul de orientare al telefonului.
                            </p>
                          </div>
                        </section>

                        <section id="pasul2">
                          <h2 className="text-2xl font-bold mb-4">Pasul 2: Crearea Interfeței de Joc</h2>
                          <p className="mb-4">
                            Acum vom crea interfața pentru jocul nostru. Vom avea nevoie de un coș controlat de jucător, obiecte care cad, și elemente de afișare pentru scor și vieți.
                          </p>

                          <ol className="list-decimal list-inside space-y-4 mb-6">
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Adaugă un Canvas</strong> pentru zona de joc:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Din categoria "Drawing and Animation", adaugă un component Canvas</li>
                                <li>Setează Width la "Fill parent"</li>
                                <li>Setează Height la 300 pixeli (sau mai mult, în funcție de dimensiunea ecranului)</li>
                                <li>Redenumește componenta în "GameCanvas"</li>
                                <li>Setează BackgroundColor la White</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Adaugă un ImageSprite</strong> pentru coșul jucătorului:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Din categoria "Drawing and Animation", adaugă un ImageSprite la Canvas</li>
                                <li>Redenumește-l în "Basket"</li>
                                <li>Încarcă o imagine pentru coș (poți găsi una gratuită online sau poți folosi una din biblioteca App Inventor)</li>
                                <li>Setează Width la 50 pixeli și Height la 50 pixeli</li>
                                <li>Poziționează-l în partea de jos a Canvas-ului (Y aproape de Height-ul Canvas-ului)</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Adaugă un ImageSprite</strong> pentru obiectul care cade:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Adaugă un alt ImageSprite la Canvas</li>
                                <li>Redenumește-l în "FallingObject"</li>
                                <li>Încarcă o imagine pentru obiectul care cade (de exemplu, un măr sau o stea)</li>
                                <li>Setează Width și Height la 30 pixeli</li>
                                <li>Setează Y la 0 (partea de sus a Canvas-ului)</li>
                                <li>Setează X la o valoare aleatorie între 0 și Width-ul Canvas-ului</li>
                                <li>Setează Visible la "False" (va fi făcut vizibil când jocul începe)</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Adaugă etichetele pentru scor și vieți</strong> deasupra Canvas-ului:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Din categoria "User Interface", adaugă un HorizontalArrangement</li>
                                <li>Setează Width la "Fill parent"</li>
                                <li>În interiorul HorizontalArrangement-ului, adaugă două VerticalArrangement-uri:</li>
                                <ul className="list-disc list-inside ml-4">
                                  <li>În primul VerticalArrangement, adaugă două etichete: "Scor:" și o etichetă pentru valoarea scorului (redenumește-o "LabelScor")</li>
                                  <li>În al doilea VerticalArrangement, adaugă două etichete: "Vieți:" și o etichetă pentru numărul de vieți rămase (redenumește-o "LabelVieti")</li>
                                </ul>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Adaugă un buton Start</strong> sub Canvas:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Din categoria "User Interface", adaugă un Button</li>
                                <li>Setează Text la "START JOC"</li>
                                <li>Setează FontSize la 20</li>
                                <li>Redenumește-l în "ButtonStart"</li>
                              </ul>
                            </li>
                          </ol>

                          <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                            <h3 className="font-medium mb-2">Componente invizibile necesare</h3>
                            <p className="mb-2">Pe lângă componentele vizibile, vom avea nevoie și de următoarele componente nevizibile:</p>
                            <ol className="list-decimal list-inside space-y-2">
                              <li>Un <strong>OrientationSensor</strong> (din categoria "Sensors") pentru a detecta înclinarea telefonului</li>
                              <li>Un <strong>Clock</strong> (din categoria "Sensors") pentru a actualiza poziția obiectului care cade</li>
                              <li>Un <strong>Sound</strong> (din categoria "Media") pentru efectele sonore când prinzi sau ratezi un obiect</li>
                              <li>Un <strong>Clock</strong> suplimentar pentru a genera noi obiecte la intervale aleatorii</li>
                            </ol>
                          </div>
                        </section>

                        <section id="pasul3">
                          <h2 className="text-2xl font-bold mb-4">Pasul 3: Programarea Controlului Coșului</h2>
                          <p className="mb-6">
                            Acum vom programa controlul coșului folosind senzorul de orientare al dispozitivului. Când jucătorul înclină telefonul la stânga sau la dreapta, coșul se va deplasa în direcția respectivă.
                          </p>

                          <ol className="list-decimal list-inside space-y-4 mb-6">
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Inițializează variabilele globale</strong> pentru joc:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Din categoria "Variables", creează variabile globale pentru:</li>
                                <ul className="list-disc list-inside ml-4">
                                  <li>"score" - inițializată cu 0</li>
                                  <li>"lives" - inițializată cu 3</li>
                                  <li>"gameActive" - inițializată cu false</li>
                                </ul>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Programează butonul Start</strong>:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Când butonul Start este apăsat:</li>
                                <ul className="list-disc list-inside ml-4">
                                  <li>Setează "score" la 0</li>
                                  <li>Setează "lives" la 3</li>
                                  <li>Actualizează LabelScor și LabelVieti</li>
                                  <li>Setează "gameActive" la true</li>
                                  <li>Activează senzorul de orientare</li>
                                  <li>Pornește cele două timere (Clock-uri)</li>
                                  <li>Ascunde butonul Start</li>
                                </ul>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Programează senzorul de orientare</strong>:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Când orientarea se schimbă (OrientationChanged):</li>
                                <ul className="list-disc list-inside ml-4">
                                  <li>Verifică dacă jocul este activ</li>
                                  <li>Dacă da, ajustează poziția X a coșului bazată pe valoarea "azimuth" (rotația în jurul axei z)</li>
                                  <li>Asigură-te că coșul rămâne în limitele Canvas-ului</li>
                                </ul>
                              </ul>
                            </li>
                          </ol>

                          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                            <h3 className="font-medium mb-2">Sfat pentru programarea senzorului</h3>
                            <p>
                              Valoarea "azimuth" a senzorului de orientare reprezintă rotația dispozitivului în jurul axei verticale. Poți folosi această valoare pentru a determina cât de mult să miști coșul. De exemplu:
                            </p>
                            <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto text-sm">
                              set Basket.X to (GameCanvas.Width / 2) - (Basket.Width / 2) + (OrientationSensor.Azimuth * 10)
                            </pre>
                            <p className="mt-2">
                              Această formulă poziționează coșul în centrul Canvas-ului și apoi îl deplasează în funcție de înclinarea telefonului.
                            </p>
                          </div>
                        </section>

                        <section id="pasul4">
                          <h2 className="text-2xl font-bold mb-4">Pasul 4: Animarea Obiectelor care Cad</h2>
                          <p className="mb-6">
                            Acum vom programa comportamentul obiectelor care cad și modul în care interacționează cu coșul jucătorului.
                          </p>

                          <ol className="list-decimal list-inside space-y-4 mb-6">
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Programează ceasul principal</strong> (Clock1):
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Setează intervalul la 50 milisecunde (sau mai puțin pentru o animație mai fluidă)</li>
                                <li>Când ceasul face "tick":</li>
                                <ul className="list-disc list-inside ml-4">
                                  <li>Verifică dacă jocul este activ</li>
                                  <li>Dacă da, mută obiectul care cade în jos (crește Y)</li>
                                  <li>Verifică dacă obiectul a ajuns la baza Canvas-ului</li>
                                  <li>Dacă da, înseamnă că jucătorul a ratat obiectul</li>
                                </ul>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Programează generarea obiectelor</strong> (Clock2):
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Setează intervalul la o valoare între 1000-3000 milisecunde</li>
                                <li>Când ceasul face "tick":</li>
                                <ul className="list-disc list-inside ml-4">
                                  <li>Verifică dacă jocul este activ și dacă obiectul curent nu este vizibil</li>
                                  <li>Dacă da, resetează poziția obiectului la partea de sus a ecranului</li>
                                  <li>Setează o poziție X aleatorie pentru obiect</li>
                                  <li>Fă obiectul vizibil</li>
                                </ul>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Programează coliziunea</strong> cu coșul:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Când FallingObject intră în coliziune cu Basket (CollideWith):</li>
                                <ul className="list-disc list-inside ml-4">
                                  <li>Incrementează scorul</li>
                                  <li>Actualizează LabelScor</li>
                                  <li>Redă un sunet pozitiv</li>
                                  <li>Ascunde obiectul (va fi regenerat de Clock2)</li>
                                </ul>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Programează ratarea obiectului</strong>:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>În evenimentul Clock1.Timer, când obiectul ajunge la baza Canvas-ului:</li>
                                <ul className="list-disc list-inside ml-4">
                                  <li>Decrementează numărul de vieți</li>
                                  <li>Actualizează LabelVieti</li>
                                  <li>Redă un sunet negativ</li>
                                  <li>Ascunde obiectul</li>
                                  <li>Verifică dacă numărul de vieți a ajuns la 0</li>
                                  <li>Dacă da, termină jocul (oprește timere-le, arată butonul Start, etc.)</li>
                                </ul>
                              </ul>
                            </li>
                          </ol>

                          <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                            <h3 className="font-medium mb-2">Variație a vitezei</h3>
                            <p>
                              Pentru a face jocul mai interesant, poți varia viteza cu care cad obiectele pe măsură ce scorul crește. De exemplu, poți adăuga următorul cod în evenimentul de coliziune:
                            </p>
                            <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto text-sm">
                              if score {'>'} 5 then set Clock1.TimerInterval to 40
                              else if score {'>'} 10 then set Clock1.TimerInterval to 30
                              else if score {'>'} 15 then set Clock1.TimerInterval to 20
                            </pre>
                          </div>
                        </section>

                        <section id="pasul5">
                          <h2 className="text-2xl font-bold mb-4">Pasul 5: Îmbunătățirea Jocului</h2>
                          <p className="mb-4">
                            Acum că avem funcționalitățile de bază ale jocului, să adăugăm câteva îmbunătățiri pentru a-l face mai interesant și mai atractiv.
                          </p>

                          <ol className="list-decimal list-inside space-y-4 mb-6">
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Adaugă mai multe tipuri de obiecte</strong>:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Creează mai multe ImageSprite-uri pentru obiecte diferite</li>
                                <li>Alege aleatoriu care obiect să cadă</li>
                                <li>Atribuie punctaje diferite pentru obiecte diferite</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Adaugă obiecte speciale</strong>:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Obiecte care dau vieți suplimentare</li>
                                <li>Obiecte care cresc temporar dimensiunea coșului</li>
                                <li>Obiecte care trebuie evitate (pierdere de vieți)</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Adaugă niveluri de dificultate</strong>:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Pe măsură ce scorul crește, mărește viteza obiectelor</li>
                                <li>Adaugă mai multe obiecte simultan pe ecran</li>
                                <li>Reduce intervalul dintre generările de obiecte</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Adaugă un sistem de scoruri maxime</strong>:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Folosește TinyDB pentru a salva scorurile maxime</li>
                                <li>Afișează un ecran cu cele mai bune scoruri</li>
                                <li>Permite jucătorului să-și introducă numele pentru scorurile mari</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Îmbunătățește aspectul vizual</strong>:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Adaugă o imagine de fundal pentru Canvas</li>
                                <li>Adaugă animații când un obiect este prins</li>
                                <li>Folosește imagini atractive pentru obiecte și coș</li>
                              </ul>
                            </li>
                          </ol>

                          <div className="bg-blue-50 border-l-4 border-course-blue p-4 my-6">
                            <h3 className="text-lg font-medium text-course-blue mb-2">Idee de îmbunătățire: Mod accelerometru</h3>
                            <p className="mb-2">
                              O alternativă la utilizarea senzorului de orientare este folosirea accelerometrului pentru a controla coșul. Aceasta poate oferi un control mai precis în unele situații.
                            </p>
                            <p>
                              Pentru a implementa acest lucru, adaugă un accelerometru din categoria "Sensors" și utilizează valoarea "xAccel" pentru a mișca coșul lateral. Nu uita să adaugi o opțiune pentru ca jucătorul să aleagă între cele două moduri de control.
                            </p>
                          </div>
                        </section>

                        <section id="recapitulare">
                          <h2 className="text-2xl font-bold mb-4">Recapitulare</h2>
                          <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                            <h3 className="text-lg font-semibold text-green-700 mb-2">Ce ai învățat</h3>
                            <ul className="list-disc list-inside space-y-1">
                              <li>Cum să folosești senzorii dispozitivului pentru a controla elemente în joc</li>
                              <li>Cum să creezi și să animezi obiecte folosind timere</li>
                              <li>Cum să detectezi coliziunile între sprite-uri</li>
                              <li>Cum să implementezi un sistem de scor și vieți</li>
                              <li>Cum să adaugi elemente de gameplay care fac jocul mai captivant</li>
                              <li>Cum să folosești sunete pentru feedback</li>
                            </ul>
                          </div>

                          <p className="mb-4">
                            Felicitări! Ai creat un joc arcade funcțional folosind App Inventor. Acest proiect a introdus concepte importante cum ar fi utilizarea senzorilor, detectarea coliziunilor și animațiile bazate pe timere.
                          </p>

                          <p className="mb-4">
                            Poți îmbunătăți acest joc adăugând mai multe tipuri de obiecte, power-up-uri, niveluri de dificultate, sau chiar transformându-l într-un joc complet diferit! Experimentează cu diferite valori pentru viteza de cădere, frecvența obiectelor și mecanicile de joc pentru a-l face mai distractiv și mai provocator.
                          </p>

                          <div className="flex justify-between mt-8">
                            <Button asChild className="bg-course-purple hover:bg-course-blue">
                              <Link to="/appinventor/session2" className="flex items-center">
                                <ArrowLeft className="mr-2 h-5 w-5" />
                                <span>Sesiunea 2: Joc de Quiz</span>
                              </Link>
                            </Button>
                            <Button asChild className="bg-course-purple hover:bg-course-blue">
                              <Link to="/appinventor/session4" className="flex items-center">
                                <span>Sesiunea 4: Aplicație de Desen</span>
                                <ArrowRight className="ml-2 h-5 w-5" />
                              </Link>
                            </Button>
                          </div>
                        </section>
                      </TabsContent>
                      
                      <TabsContent value="blocks">
                        <section className="space-y-8">
                          <div>
                            <h3 className="text-xl font-bold mb-4">Inițializarea Componentelor și Variabilelor</h3>
                            <p className="mb-4">
                              Aceste blocuri trebuie adăugate în secțiunea de blocuri pentru a inițializa variabilele și a configura componentele.
                            </p>
                            <CodeBlock
                              title="Inițializarea Variabilelor"
                              code={`// Creăm variabilele globale
initialize global score to 0
initialize global lives to 3
initialize global gameActive to false

// Configurare inițială
when Screen1.Initialize
  set LabelScor.Text to 0
  set LabelVieti.Text to 3
  set FallingObject.Visible to false
  set OrientationSensor.Enabled to false  // dezactivăm senzorul până la start
  set Clock1.TimerEnabled to false  // dezactivăm timer-ele
  set Clock2.TimerEnabled to false`}
                              language="plaintext"
                            />
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold mb-4">Programarea Butonului Start</h3>
                            <p className="mb-4">
                              Aceste blocuri definesc comportamentul butonului START când este apăsat.
                            </p>
                            <CodeBlock
                              title="Evenimentul ButtonStart.Click"
                              code={`when ButtonStart.Click do
  // Resetăm variabilele
  set global score to 0
  set global lives to 3
  set global gameActive to true
  
  // Actualizăm afișajul
  set LabelScor.Text to 0
  set LabelVieti.Text to 3
  
  // Activăm componentele necesare pentru joc
  set OrientationSensor.Enabled to true
  set Clock1.TimerEnabled to true
  set Clock2.TimerEnabled to true
  
  // Ascundem butonul de start pe durata jocului
  set ButtonStart.Visible to false`}
                              language="plaintext"
                            />
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold mb-4">Controlul Coșului cu Senzorul de Orientare</h3>
                            <p className="mb-4">
                              Aceste blocuri controlează mișcarea coșului în funcție de orientarea dispozitivului.
                            </p>
                            <CodeBlock
                              title="Evenimentul OrientationSensor.OrientationChanged"
                              code={`when OrientationSensor.OrientationChanged do
  // Verificăm dacă jocul este activ
  if gameActive then
    // Calculăm noua poziție a coșului bazată pe orientare
    set Basket.X to (GameCanvas.Width / 2) - (Basket.Width / 2) + (OrientationSensor.Azimuth * 5)
    
    // Ne asigurăm că coșul rămâne în limitele canvas-ului
    if Basket.X < 0 then
      set Basket.X to 0
    end if
    
    if Basket.X > GameCanvas.Width - Basket.Width then
      set Basket.X to GameCanvas.Width - Basket.Width
    end if
  end if`}
                              language="plaintext"
                            />
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold mb-4">Animarea Obiectelor care Cad</h3>
                            <p className="mb-4">
                              Aceste blocuri controlează mișcarea obiectelor care cad pe ecran.
                            </p>
                            <CodeBlock
                              title="Evenimentul Clock1.Timer"
                              code={`when Clock1.Timer do
  // Verificăm dacă jocul este activ și obiectul este vizibil
  if gameActive and FallingObject.Visible then
    // Mutăm obiectul în jos
    set FallingObject.Y to FallingObject.Y + 10
    
    // Verificăm dacă obiectul a ajuns la baza canvas-ului
    if FallingObject.Y > GameCanvas.Height then
      // Jucătorul a ratat obiectul
      set global lives to global lives - 1
      set LabelVieti.Text to global lives
      call Sound1.Play  // Redăm sunetul pentru ratare
      set FallingObject.Visible to false
      
      // Verificăm dacă jocul s-a terminat
      if global lives <= 0 then
        set global gameActive to false
        set OrientationSensor.Enabled to false
        set Clock1.TimerEnabled to false
        set Clock2.TimerEnabled to false
        set ButtonStart.Text to "RESTART"
        set ButtonStart.Visible to true
      end if
    end if
  end if`}
                              language="plaintext"
                            />
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold mb-4">Generarea Obiectelor</h3>
                            <p className="mb-4">
                              Aceste blocuri se ocupă de generarea de noi obiecte la intervale regulate.
                            </p>
                            <CodeBlock
                              title="Evenimentul Clock2.Timer"
                              code={`when Clock2.Timer do
  // Verificăm dacă jocul este activ și obiectul curent nu este vizibil
  if gameActive and not FallingObject.Visible then
    // Resetăm poziția obiectului la partea de sus
    set FallingObject.Y to 0
    
    // Alegem o poziție X aleatoare pentru obiect
    set FallingObject.X to random integer from 0 to GameCanvas.Width - FallingObject.Width
    
    // Facem obiectul vizibil
    set FallingObject.Visible to true
  end if`}
                              language="plaintext"
                            />
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold mb-4">Detectarea Coliziunilor</h3>
                            <p className="mb-4">
                              Aceste blocuri detectează când un obiect este prins în coș și actualizează scorul.
                            </p>
                            <CodeBlock
                              title="Evenimentul FallingObject.CollidedWith"
                              code={`when FallingObject.CollidedWith Basket do
  if gameActive then
    // Incrementăm scorul
    set global score to global score + 1
    set LabelScor.Text to global score
    
    // Redăm sunetul pentru prinderea obiectului
    call Sound2.Play
    
    // Ascundem obiectul (va fi regenerat de Clock2)
    set FallingObject.Visible to false
    
    // Adaptăm dificultatea în funcție de scor
    if global score = 5 then
      set Clock1.TimerInterval to 40
    else if global score = 10 then
      set Clock1.TimerInterval to 30
    else if global score = 15 then
      set Clock1.TimerInterval to 25
    end if
  end if`}
                              language="plaintext"
                            />
                          </div>
                        </section>
                      </TabsContent>
                      
                      <TabsContent value="challenges">
                        <section className="space-y-8">
                          <div>
                            <h2 className="text-2xl font-bold mb-4">Provocări Suplimentare</h2>
                            <p className="mb-6">
                              Acum că ai creat jocul de bază, iată câteva provocări pentru a-l îmbunătăți și a-ți dezvolta abilitățile de programare:
                            </p>
                            
                            <div className="space-y-6">
                              <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                                <h3 className="font-bold flex items-center">
                                  <Star className="h-5 w-5 text-course-purple mr-2" />
                                  Provocare 1: Multiple Obiecte Simultane
                                </h3>
                                <p className="mt-2">
                                  Modifică jocul astfel încât să existe mai multe obiecte care cad simultan pe ecran. Vei avea nevoie să creezi mai multe ImageSprite-uri și să le gestionezi independent.
                                </p>
                                <div className="mt-3">
                                  <h4 className="font-semibold mb-1">Indicii:</h4>
                                  <ul className="list-disc list-inside space-y-1">
                                    <li>Creează un număr fix de sprite-uri (de ex. 3-5)</li>
                                    <li>Folosește liste pentru a gestiona mai ușor toate sprite-urile</li>
                                    <li>Activează obiectele la intervale aleatorii</li>
                                    <li>Asigură-te că logica de coliziune funcționează pentru toate obiectele</li>
                                  </ul>
                                </div>
                              </div>
                              
                              <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                                <h3 className="font-bold flex items-center">
                                  <Star className="h-5 w-5 text-course-purple mr-2" />
                                  Provocare 2: Tipuri Diferite de Obiecte
                                </h3>
                                <p className="mt-2">
                                  Adaugă diferite tipuri de obiecte cu comportamente și valori diferite:
                                </p>
                                <ul className="list-disc list-inside mt-2">
                                  <li>Obiecte valoroase (ex: diamante) care valorează mai multe puncte</li>
                                  <li>Obiecte care acordă vieți suplimentare</li>
                                  <li>Obiecte periculoase care trebuie evitate</li>
                                </ul>
                                <div className="mt-3">
                                  <h4 className="font-semibold mb-1">Indicii:</h4>
                                  <ul className="list-disc list-inside space-y-1">
                                    <li>Folosește imagini diferite pentru fiecare tip de obiect</li>
                                    <li>Adaugă un tag sau o variabilă pentru a identifica tipul obiectului</li>
                                    <li>Modifică evenimentul de coliziune pentru a gestiona diferit fiecare tip</li>
                                  </ul>
                                </div>
                              </div>
                              
                              <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                                <h3 className="font-bold flex items-center">
                                  <Star className="h-5 w-5 text-course-purple mr-2" />
                                  Provocare 3: Power-Up-uri și Abilități Speciale
                                </h3>
                                <p className="mt-2">
                                  Implementează power-up-uri care oferă abilități speciale pentru o perioadă limitată de timp:
                                </p>
                                <ul className="list-disc list-inside mt-2">
                                  <li>Magnet: atrage automat obiectele din apropiere</li>
                                  <li>Coș mare: dublează temporar dimensiunea coșului</li>
                                  <li>Încetinire: reduce viteza de cădere a obiectelor</li>
                                </ul>
                                <div className="mt-3">
                                  <h4 className="font-semibold mb-1">Indicii:</h4>
                                  <ul className="list-disc list-inside space-y-1">
                                    <li>Folosește un timer suplimentar pentru a urmări durata power-up-urilor</li>
                                    <li>Adaugă indicatori vizuale când un power-up este activ</li>
                                    <li>Creează funcții pentru activarea și dezactivarea efectelor</li>
                                  </ul>
                                </div>
                              </div>
                              
                              <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                                <h3 className="font-bold flex items-center">
                                  <Star className="h-5 w-5 text-course-purple mr-2" />
                                  Provocare 4: Niveluri de Joc
                                </h3>
                                <p className="mt-2">
                                  Implementează un sistem de niveluri cu dificultate progresivă. Fiecare nivel poate avea:
                                </p>
                                <ul className="list-disc list-inside mt-2">
                                  <li>Viteze diferite pentru obiectele care cad</li>
                                  <li>Tipuri diferite de obiecte</li>
                                  <li>Obiective specifice pentru a avansa la următorul nivel</li>
                                </ul>
                                <div className="mt-3">
                                  <h4 className="font-semibold mb-1">Indicii:</h4>
                                  <ul className="list-disc list-inside space-y-1">
                                    <li>Adaugă o variabilă pentru a urmări nivelul curent</li>
                                    <li>Creează o procedură pentru inițializarea fiecărui nivel</li>
                                    <li>Adaugă un ecran sau o animație pentru tranziția între niveluri</li>
                                  </ul>
                                </div>
                              </div>
                              
                              <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                                <h3 className="font-bold flex items-center">
                                  <Star className="h-5 w-5 text-course-purple mr-2" />
                                  Provocare 5: Clasament de Scoruri
                                </h3>
                                <p className="mt-2">
                                  Implementează un sistem de clasament care salvează cele mai bune scoruri și permite jucătorilor să-și compare performanțele.
                                </p>
                                <div className="mt-3">
                                  <h4 className="font-semibold mb-1">Indicii:</h4>
                                  <ul className="list-disc list-inside space-y-1">
                                    <li>Folosește componenta TinyDB pentru a salva scorurile</li>
                                    <li>Creează o listă pentru a stoca și sorta scorurile</li>
                                    <li>Adaugă un ecran pentru afișarea clasamentului</li>
                                    <li>Permite jucătorilor să-și introducă numele pentru scorurile mari</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold mb-4">Ce ai învățat din Provocări</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="p-4 bg-gray-50 rounded-md flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                  <h4 className="font-medium">Gestionarea Obiectelor Multiple</h4>
                                  <p className="text-sm text-gray-600">Tehnici pentru a gestiona și sincroniza mai multe obiecte pe ecran</p>
                                </div>
                              </div>
                              
                              <div className="p-4 bg-gray-50 rounded-md flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                  <h4 className="font-medium">Design de Gameplay</h4>
                                  <p className="text-sm text-gray-600">Cum să proiectezi mecanici de joc echilibrate și captivante</p>
                                </div>
                              </div>
                              
                              <div className="p-4 bg-gray-50 rounded-md flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                  <h4 className="font-medium">Persistența Datelor</h4>
                                  <p className="text-sm text-gray-600">Salvarea și încărcarea datelor între sesiunile de joc</p>
                                </div>
                              </div>
                              
                              <div className="p-4 bg-gray-50 rounded-md flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                  <h4 className="font-medium">Experiența Utilizatorului</h4>
                                  <p className="text-sm text-gray-600">Îmbunătățirea experienței de joc cu feedback vizual și sonor</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold mb-4">Împartașește Realizările Tale</h3>
                            <p className="mb-4">
                              După ce ai finalizat proiectul și ai implementat unele dintre provocări, împărtășește-l cu colegii și profesorii tăi. Poți exporta proiectul ca fișier .aia din App Inventor (Projects {'>'} Export selected project (.aia) to my computer).
                            </p>
                            <p>
                              Fii deschis la feedback și idei pentru îmbunătățiri ulterioare. Învățarea prin colaborare și schimbul de idei este o parte importantă a dezvoltării abilităților de programare!
                            </p>
                          </div>
                        </section>
                      </TabsContent>
                    </Tabs>

                    <div className="flex justify-between mt-12 border-t pt-6">
                      <Button asChild variant="outline" className="flex items-center">
                        <Link to="/appinventor/session2">
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          <span>Sesiunea anterioară</span>
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex items-center">
                        <Link to="/appinventor/session4">
                          <span>Următoarea sesiune</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/4">
                <div className="sticky top-4 space-y-6">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-3">Conținut</h3>
                      <nav>
                        <ul className="space-y-2">
                          <li>
                            <a href="#introducere" className="text-course-purple hover:text-course-blue flex items-center">
                              <div className="h-2 w-2 bg-course-purple rounded-full mr-2"></div>
                              Introducere
                            </a>
                          </li>
                          <li>
                            <a href="#pasul1" className="text-gray-700 hover:text-course-blue flex items-center">
                              <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                              Pasul 1: Configurare
                            </a>
                          </li>
                          <li>
                            <a href="#pasul2" className="text-gray-700 hover:text-course-blue flex items-center">
                              <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                              Pasul 2: Interfața de Joc
                            </a>
                          </li>
                          <li>
                            <a href="#pasul3" className="text-gray-700 hover:text-course-blue flex items-center">
                              <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                              Pasul 3: Controlul Coșului
                            </a>
                          </li>
                          <li>
                            <a href="#pasul4" className="text-gray-700 hover:text-course-blue flex items-center">
                              <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                              Pasul 4: Animarea Obiectelor
                            </a>
                          </li>
                          <li>
                            <a href="#pasul5" className="text-gray-700 hover:text-course-blue flex items-center">
                              <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                              Pasul 5: Îmbunătățiri
                            </a>
                          </li>
                          <li>
                            <a href="#recapitulare" className="text-gray-700 hover:text-course-blue flex items-center">
                              <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                              Recapitulare
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-3">Resurse</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="https://appinventor.mit.edu/explore/ai2/tutorials" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Tutoriale MIT App Inventor
                          </a>
                        </li>
                        <li>
                          <a href="https://appinventor.mit.edu/explore/sensors" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Ghidul senzorilor
                          </a>
                        </li>
                        <li>
                          <a href="https://appinventor.mit.edu/explore/ai2/gaming" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Dezvoltare de jocuri
                          </a>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 bg-gradient-to-br from-course-purple/10 to-blue-100">
                      <h3 className="text-lg font-bold mb-2">Ai nevoie de ajutor?</h3>
                      <p className="text-gray-700 text-sm mb-4">
                        Dacă întâmpini dificultăți sau ai întrebări despre acest tutorial, nu ezita să contactezi instructorul.
                      </p>
                      <Button asChild className="w-full bg-course-purple hover:bg-course-blue">
                        <a href="mailto:contact@techmindsa.ro">
                          Contactează instructorul
                        </a>
                      </Button>
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

export default Session3;
