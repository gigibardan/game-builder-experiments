import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ChevronRight, Star } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import ReadingProgressBar from '@/components/ReadingProgressBar';

const Session1 = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle anchor scrolling when URL contains hash
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ReadingProgressBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-course-purple to-course-blue text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <span className="bg-white text-course-purple rounded-full h-8 w-8 flex items-center justify-center mr-2">
                    1
                  </span>
                  <h1 className="text-2xl md:text-3xl font-bold">Sesiunea 1: Jocul Clicker</h1>
                </div>
                <p className="text-white/90">
                  Învață elementele de bază ale App Inventor și creează primul tău joc simplu!
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 hover:text-white">
                  <Link to="/courses/appinventor" className="flex items-center">
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
                    <h2 className="text-2xl font-bold mb-4" id="introducere">Introducere</h2>
                    <p className="mb-4">
                      Bine ai venit la prima noastră sesiune! Astăzi vom face cunoștință cu MIT App Inventor și vom crea primul nostru joc: un joc clicker simplu. Acest tip de joc este foarte popular și ușor de realizat - perfect pentru a învăța elementele de bază ale dezvoltării de aplicații.
                    </p>
                    <p className="mb-4">
                      În acest joc, jucătorul va trebui să apese pe un buton cât mai repede posibil pentru a acumula puncte. Este un proiect simplu, dar vei învăța concepte importante precum: butoane, etichete și evenimente.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-course-blue p-4 my-6">
                      <h3 className="text-lg font-semibold text-course-blue mb-2">Ce vei învăța</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Cum să creezi interfața utilizator cu butoane și etichete</li>
                        <li>Cum să răspunzi la evenimente (click-uri pe buton)</li>
                        <li>Cum să actualizezi scorul jucătorului</li>
                        <li>Cum să folosești variabile pentru a stoca informații</li>
                      </ul>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 mt-8" id="configurare">Pasul 1: Configurarea MIT App Inventor</h2>
                    <p className="mb-4">
                      Înainte de a începe să construim jocul, trebuie să ne asigurăm că avem acces la MIT App Inventor. Urmează acești pași:
                    </p>

                    <ol className="list-decimal list-inside space-y-4 mb-6">
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Deschide un browser web</strong> (Chrome, Firefox, etc.) și navigheză la: 
                        <a href="https://appinventor.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline">
                          https://appinventor.mit.edu/
                        </a>
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Apasă pe butonul "Create Apps!"</strong> din partea de sus a paginii.
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Autentifică-te</strong> folosind contul tău Google. Dacă nu ai un cont Google, va trebui să creezi unul.
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Odată autentificat</strong>, vei fi redirecționat către interfața MIT App Inventor.
                      </li>
                    </ol>

                    <div className="my-8 border p-4 rounded-md">
                      <img 
                        src="https://appinventor.mit.edu/sites/all/themes/appinventor/images/logo.png" 
                        alt="MIT App Inventor Logo" 
                        className="mx-auto h-24 mb-4" 
                      />
                      <p className="text-center text-gray-600">
                        Interfața MIT App Inventor - Aici vom crea aplicațiile noastre
                      </p>
                    </div>

                    <h2 className="text-2xl font-bold mb-4" id="proiect-nou">Pasul 2: Crearea unui proiect nou</h2>
                    <p className="mb-4">
                      Acum că suntem conectați la MIT App Inventor, să creăm un proiect nou pentru jocul nostru clicker:
                    </p>

                    <ol className="list-decimal list-inside space-y-4 mb-6">
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Apasă pe "Projects"</strong> în bara de meniu de sus.
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Selectează "Start new project"</strong> din meniul dropdown.
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Numește proiectul</strong> "JocClicker" și apasă OK.
                      </li>
                    </ol>

                    <div className="my-8">
                      <h3 className="text-xl font-bold mb-4">Interfața App Inventor</h3>
                      <p className="mb-4">
                        Interfața MIT App Inventor este împărțită în două părți principale:
                      </p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li><strong>Designer</strong> - Aici creezi aspectul vizual al aplicației tale (butoane, etichete, etc.)</li>
                        <li><strong>Blocks</strong> - Aici programezi comportamentul aplicației folosind blocuri vizuale</li>
                      </ul>
                      <p>
                        Vom începe cu partea de Designer pentru a crea interfața jocului nostru.
                      </p>
                    </div>

                    <h2 className="text-2xl font-bold mb-4" id="interfata">Pasul 3: Crearea interfeței jocului</h2>
                    <p className="mb-6">
                      Acum vom adăuga elementele necesare pentru jocul nostru clicker. Vom avea nevoie de:
                    </p>

                    <ul className="list-disc list-inside space-y-2 mb-6">
                      <li>Un titlu pentru joc</li>
                      <li>O etichetă pentru afișarea scorului</li>
                      <li>Un buton pe care utilizatorul va apăsa pentru a câștiga puncte</li>
                    </ul>

                    <ol className="list-decimal list-inside space-y-4 mb-6">
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>În Palette (stânga),</strong> găsește secțiunea "User Interface".
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Trage un element "Label"</strong> în Viewer (centru). Acesta va fi titlul jocului.
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>În Components (dreapta), selectează Label1</li>
                          <li>În Properties (dreapta jos), schimbă proprietatea "Text" la "JOC CLICKER"</li>
                          <li>Schimbă "FontSize" la 24</li>
                          <li>Schimbă "TextAlignment" la "Center"</li>
                        </ul>
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Adaugă încă o etichetă (Label)</strong> sub titlu. Aceasta va afișa scorul.
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Schimbă proprietatea "Text" la "Scor: 0"</li>
                          <li>Schimbă "FontSize" la 18</li>
                          <li>Schimbă "TextAlignment" la "Center"</li>
                          <li>Redenumește componenta în "LabelScor" (în Components, apasă pe Label2 și apoi pe Rename)</li>
                        </ul>
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Adaugă un buton (Button)</strong> sub eticheta scorului.
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Schimbă proprietatea "Text" la "APASĂ-MĂ!"</li>
                          <li>Schimbă "FontSize" la 20</li>
                          <li>Schimbă "BackgroundColor" la o culoare roșie</li>
                          <li>Schimbă "Shape" la "rounded" pentru un buton mai atractiv</li>
                          <li>Redenumește componenta în "ButonClicker"</li>
                        </ul>
                      </li>
                    </ol>

                    <div className="my-8 border p-4 rounded-md text-center">
                      <p className="text-gray-600 mb-2">
                        Așa ar trebui să arate interfața jocului tău:
                      </p>
                      <div className="bg-white border-2 border-gray-300 rounded-xl p-4 max-w-xs mx-auto">
                        <div className="text-center p-2 mb-4 text-xl font-bold">
                          JOC CLICKER
                        </div>
                        <div className="text-center p-2 mb-6">
                          Scor: 0
                        </div>
                        <div className="bg-red-500 text-white py-4 px-8 rounded-lg text-center mx-auto w-32">
                          APASĂ-MĂ!
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-4" id="programare">Pasul 4: Programarea comportamentului</h2>
                    <p className="mb-4">
                      Acum că am creat interfața, trebuie să adăugăm codul care va face jocul să funcționeze. Pentru aceasta, vom folosi Blocks Editor.
                    </p>

                    <ol className="list-decimal list-inside space-y-4 mb-6">
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Apasă pe "Blocks"</strong> în partea de sus a ecranului pentru a comuta la editorul de blocuri.
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Creează o variabilă pentru scor:</strong>
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>În stânga, apasă pe "Variables"</li>
                          <li>Trage blocul "initialize global name to" în spațiul de lucru</li>
                          <li>Schimbă "name" în "scor"</li>
                          <li>Setează valoarea inițială la 0</li>
                        </ul>
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Adaugă cod pentru când butonul este apăsat:</strong>
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>În stânga, apasă pe "ButonClicker"</li>
                          <li>Trage blocul "when ButonClicker.Click do" în spațiul de lucru</li>
                          <li>Din "Variables", trage blocul "set global scor to"</li>
                          <li>Din "Math", trage blocul de adunare "+"</li>
                          <li>Din "Variables", trage blocul "get global scor" în partea stângă a blocului de adunare</li>
                          <li>Pune numărul 1 în partea dreaptă a blocului de adunare</li>
                        </ul>
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Actualizează eticheta scorului:</strong>
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Din "LabelScor", trage blocul "set LabelScor.Text to"</li>
                          <li>Din "Text", trage blocul de concatenare "join"</li>
                          <li>Pune textul "Scor: " în primul câmp</li>
                          <li>Din "Variables", trage blocul "get global scor" în al doilea câmp</li>
                        </ul>
                      </li>
                    </ol>

                    <h2 className="text-2xl font-bold mb-4" id="testare">Pasul 5: Testarea jocului</h2>
                    <p className="mb-4">
                      Acum că am creat și programat jocul, este timpul să-l testăm!
                    </p>

                    <ol className="list-decimal list-inside space-y-4 mb-6">
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Apasă pe "Connect"</strong> în bara de meniu de sus.
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Alege una dintre opțiunile:</strong>
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>"AI Companion" - pentru a testa pe un dispozitiv fizic</li>
                          <li>"Emulator" - pentru a testa pe calculator</li>
                        </ul>
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Odată ce aplicația este deschisă:</strong>
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Apasă pe butonul "APASĂ-MĂ!" de mai multe ori</li>
                          <li>Verifică dacă scorul se actualizează cu fiecare apăsare</li>
                        </ul>
                      </li>
                    </ol>

                    <h2 className="text-2xl font-bold mb-4" id="provocari">Provocări suplimentare</h2>
                    <p className="mb-4">
                      Felicitări! Ai creat primul tău joc clicker. Dacă vrei să-l îmbunătățești, încearcă aceste provocări:
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                        <h3 className="font-bold flex items-center">
                          <Star className="h-5 w-5 text-course-purple mr-2" />
                          Provocare 1: Adaugă un cronometru
                        </h3>
                        <p className="mt-2">
                          Adaugă un cronometru de 30 de secunde. După expirarea timpului, afișează un mesaj cu scorul final și dezactivează butonul.
                        </p>
                      </div>
                      
                      <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                        <h3 className="font-bold flex items-center">
                          <Star className="h-5 w-5 text-course-purple mr-2" />
                          Provocare 2: Adaugă sunete
                        </h3>
                        <p className="mt-2">
                          Adaugă un efect sonor când utilizatorul apasă pe buton.
                        </p>
                      </div>
                      
                      <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                        <h3 className="font-bold flex items-center">
                          <Star className="h-5 w-5 text-course-purple mr-2" />
                          Provocare 3: Adaugă power-ups
                        </h3>
                        <p className="mt-2">
                          Adaugă un nou buton care apare ocazional și oferă puncte bonus când este apăsat.
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                      <h3 className="text-lg font-semibold text-green-700 mb-2">Ce ai învățat</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Cum să creezi o interfață de utilizator cu etichete și butoane</li>
                        <li>Cum să folosești variabile pentru a stoca informații (scorul)</li>
                        <li>Cum să răspunzi la evenimente (apăsarea butonului)</li>
                        <li>Cum să actualizezi conținutul unei etichete în timpul rulării aplicației</li>
                      </ul>
                    </div>

                    <div className="flex justify-end mt-8">
                      <Button asChild className="bg-course-purple hover:bg-course-blue">
                        <Link to="/appinventor/session2">
                          <span>Sesiunea 2: Joc Quiz</span>
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/4">
                <div className="sticky top-24">
                  <Card className="mb-6">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-2">Conținut</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="#introducere" className="text-course-purple hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-course-purple rounded-full mr-2"></div>
                            Introducere
                          </a>
                        </li>
                        <li>
                          <a href="#configurare" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 1: Configurare
                          </a>
                        </li>
                        <li>
                          <a href="#proiect-nou" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 2: Proiect nou
                          </a>
                        </li>
                        <li>
                          <a href="#interfata" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 3: Interfața
                          </a>
                        </li>
                        <li>
                          <a href="#programare" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 4: Programare
                          </a>
                        </li>
                        <li>
                          <a href="#testare" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 5: Testare
                          </a>
                        </li>
                        <li>
                          <a href="#provocari" className="text-gray-700 hover:text-course-blue flex items-center">
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
                          <a href="https://appinventor.mit.edu/explore/library" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Biblioteca MIT App Inventor
                          </a>
                        </li>
                        <li>
                          <a href="https://appinventor.mit.edu/explore/ai2/tutorials" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Tutoriale oficiale
                          </a>
                        </li>
                        <li>
                          <a href="https://appinventor.mit.edu/explore/forum" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Forum App Inventor
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

export default Session1;
