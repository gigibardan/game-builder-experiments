
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ChevronRight, Star, BookOpen, Code, CheckCircle, XCircle } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Session2 = () => {
  useEffect(() => {
    document.title = "Joc de Quiz | App Inventor - TechMinds Academy";
    
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
                    2
                  </span>
                  <h1 className="text-2xl md:text-3xl font-bold">Sesiunea 2: Joc de Quiz</h1>
                </div>
                <p className="text-white/90">
                  Dezvoltă un joc quiz interactiv cu sistem de urmărire a scorului folosind App Inventor.
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
                  <Link to="/appinventor/session1" className="flex items-center">
                    <span>Sesiunea anterioară</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Bar */}
        <div className="bg-gray-100 h-2">
          <div className="bg-course-purple h-2" style={{ width: '16.7%' }}></div>
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
                      <Badge className="bg-course-purple text-white">Sesiunea 2</Badge>
                      <Badge className="bg-yellow-500 text-white">Intermediar</Badge>
                      <Badge className="bg-blue-500 text-white">Liste & Variabile</Badge>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">Joc de Quiz: Învățăm despre Liste și Variabile</h2>
                    <div className="flex items-center text-gray-600 text-sm space-x-4">
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        <span>Durată: ~60 minute</span>
                      </div>
                      <div className="flex items-center">
                        <Code className="h-4 w-4 mr-1" />
                        <span>Nivel: Începător-Intermediar</span>
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
                            Bine ai venit la a doua sesiune din cursul nostru de App Inventor! Astăzi vom crea un joc quiz interactiv, în care jucătorul va trebui să răspundă la întrebări și să acumuleze puncte pentru fiecare răspuns corect.
                          </p>
                          <p className="mb-6">
                            Acest joc ne va ajuta să explorăm concepte importante precum listele (pentru stocarea întrebărilor și răspunsurilor) și variabilele (pentru urmărirea scorului). Aceste concepte sunt fundamentale în programare și le vei folosi în aproape toate aplicațiile pe care le vei crea în viitor!
                          </p>

                          <div className="bg-blue-50 border-l-4 border-course-blue p-4 my-6">
                            <h3 className="text-lg font-semibold text-course-blue mb-2">Ce vei învăța</h3>
                            <ul className="list-disc list-inside space-y-1">
                              <li>Cum să folosești liste pentru stocarea întrebărilor și răspunsurilor</li>
                              <li>Cum să creezi o interfață pentru un joc de quiz</li>
                              <li>Cum să gestionezi variabile pentru scor și urmărirea progresului</li>
                              <li>Cum să controlezi fluxul jocului folosind butoane și condiții</li>
                            </ul>
                          </div>

                          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg my-6">
                            <h3 className="font-semibold mb-2">Proiectul final va arăta astfel:</h3>
                            <div className="flex flex-wrap gap-4">
                              <img 
                                src="https://i.imgur.com/VfeXXXX.png" 
                                alt="Quiz Game Preview" 
                                className="rounded-lg border-2 border-white shadow-md max-w-[280px]"
                              />
                              <img 
                                src="https://i.imgur.com/YyyYYYY.png" 
                                alt="Quiz Game Question" 
                                className="rounded-lg border-2 border-white shadow-md max-w-[280px]"
                              />
                            </div>
                          </div>
                        </section>

                        <section id="pasul1">
                          <h2 className="text-2xl font-bold mb-4">Pasul 1: Configurarea Proiectului Nou</h2>
                          <p className="mb-4">
                            Înainte de a începe să construim jocul, trebuie să creăm un proiect nou în MIT App Inventor și să configurăm elementele de bază.
                          </p>

                          <ol className="list-decimal list-inside space-y-4 mb-6">
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Deschide MIT App Inventor</strong> și autentifică-te în contul tău.
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Creează un proiect nou</strong> apăsând pe "Projects" și apoi pe "Start new project".
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Numește proiectul</strong> "JocQuiz" și apasă "OK".
                            </li>
                          </ol>

                          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                            <h3 className="font-medium mb-2">Sfat</h3>
                            <p>
                              Folosește nume descriptive pentru proiectele tale. Acest lucru te va ajuta să le găsești și să le organizezi mai ușor pe măsură ce creezi mai multe aplicații.
                            </p>
                          </div>
                        </section>

                        <section id="pasul2">
                          <h2 className="text-2xl font-bold mb-4">Pasul 2: Crearea Interfeței Quiz-ului</h2>
                          <p className="mb-6">
                            Acum vom crea interfața pentru jocul nostru de quiz. Vom avea nevoie de următoarele elemente:
                          </p>

                          <ol className="list-decimal list-inside space-y-4 mb-6">
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Adaugă un element Label</strong> pentru titlul jocului:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Schimbă proprietatea "Text" la "Quiz de Cultură Generală"</li>
                                <li>Setează "FontSize" la 24</li>
                                <li>Setează "TextAlignment" la "Center"</li>
                                <li>Redenumește componenta în "LabelTitlu"</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Adaugă un element HorizontalArrangement</strong> pentru score:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Setează "Width" la "Fill parent"</li>
                                <li>Setează "AlignHorizontal" la "Center"</li>
                                <li>În interiorul acestuia, adaugă două etichete:</li>
                                <ul className="list-disc list-inside ml-4">
                                  <li>Prima etichetă: Text = "Scor: ", FontSize = 18</li>
                                  <li>A doua etichetă: Text = "0", FontSize = 18, redenumește în "LabelScor"</li>
                                </ul>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Adaugă un element Label</strong> pentru întrebare:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Setează "Text" la "Apasă START pentru a începe quiz-ul"</li>
                                <li>Setează "FontSize" la 18</li>
                                <li>Setează "TextAlignment" la "Center"</li>
                                <li>Redenumește în "LabelIntrebare"</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Adaugă patru butoane</strong> pentru răspunsuri:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Pentru fiecare buton:</li>
                                <ul className="list-disc list-inside ml-4">
                                  <li>Setează "Text" la "Răspuns X" (unde X este 1, 2, 3 sau 4)</li>
                                  <li>Setează "Width" la "Fill parent"</li>
                                  <li>Setează "Visible" la "False" (inițial butoanele vor fi ascunse)</li>
                                  <li>Redenumește-le în "ButonRaspuns1", "ButonRaspuns2", etc.</li>
                                </ul>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Adaugă un buton START</strong> pentru începerea jocului:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Setează "Text" la "START"</li>
                                <li>Setează "FontSize" la 20</li>
                                <li>Setează "BackgroundColor" la verde</li>
                                <li>Redenumește în "ButonStart"</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Adaugă un element Label</strong> pentru feedback:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Setează "Text" la ""</li>
                                <li>Setează "FontSize" la 18</li>
                                <li>Setează "TextAlignment" la "Center"</li>
                                <li>Setează "Visible" la "False"</li>
                                <li>Redenumește în "LabelFeedback"</li>
                              </ul>
                            </li>
                          </ol>

                          <div className="my-8 border p-4 rounded-md text-center">
                            <p className="text-gray-600 mb-2">
                              Interfața ar trebui să arate aproximativ așa:
                            </p>
                            <div className="bg-white border-2 border-gray-300 rounded-xl p-4 max-w-xs mx-auto">
                              <div className="text-center p-2 mb-4 text-xl font-bold">
                                Quiz de Cultură Generală
                              </div>
                              <div className="text-center p-2 mb-2">
                                <span>Scor: </span>
                                <span>0</span>
                              </div>
                              <div className="text-center p-2 mb-6 text-lg">
                                Apasă START pentru a începe quiz-ul
                              </div>
                              <div className="bg-green-500 text-white py-4 px-8 rounded-lg text-center mx-auto w-32 mb-4">
                                START
                              </div>
                            </div>
                          </div>
                        </section>

                        <section id="pasul3">
                          <h2 className="text-2xl font-bold mb-4">Pasul 3: Crearea Listelor de Întrebări și Răspunsuri</h2>
                          <p className="mb-6">
                            Acum vom crea listele care vor conține întrebările și răspunsurile pentru quiz-ul nostru.
                          </p>

                          <ol className="list-decimal list-inside space-y-4 mb-6">
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Apasă pe "Blocks"</strong> în partea de sus a ecranului pentru a trece la editorul de blocuri.
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Creează o listă de întrebări:</strong>
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Din categoria "Variables", trage blocul "initialize global name to"</li>
                                <li>Schimbă "name" în "listaIntrebari"</li>
                                <li>Din categoria "Lists", trage blocul "create empty list" și conectează-l la blocul anterior</li>
                                <li>Adaugă 5-10 întrebări folosind blocurile "add items to list" și "make a list"</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Creează patru liste pentru răspunsuri:</strong>
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Repetă pașii de mai sus pentru a crea:
                                  <ul className="list-disc list-inside ml-4">
                                    <li>"listaRaspunsuriA" - prima variantă pentru fiecare întrebare</li>
                                    <li>"listaRaspunsuriB" - a doua variantă pentru fiecare întrebare</li>
                                    <li>"listaRaspunsuriC" - a treia variantă pentru fiecare întrebare</li>
                                    <li>"listaRaspunsuriD" - a patra variantă pentru fiecare întrebare</li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Creează o listă pentru răspunsurile corecte:</strong>
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Creează o listă numită "listaRaspunsuriCorecte"</li>
                                <li>Adaugă numărul variantei corecte pentru fiecare întrebare (1, 2, 3 sau 4)</li>
                                <li>Asigură-te că numărul de elemente din această listă corespunde cu numărul de întrebări</li>
                              </ul>
                            </li>
                          </ol>

                          <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                            <h3 className="font-medium mb-2">Exemplu de întrebări și răspunsuri</h3>
                            <p className="mb-2">Iată câteva exemple de întrebări și răspunsuri pe care le poți folosi în quiz-ul tău:</p>
                            <ol className="list-decimal list-inside space-y-2">
                              <li>
                                <strong>Întrebare:</strong> Care este capitala României?<br />
                                <strong>Răspunsuri:</strong> A) București, B) Paris, C) Londra, D) Berlin<br />
                                <strong>Răspuns corect:</strong> 1 (A)
                              </li>
                              <li>
                                <strong>Întrebare:</strong> Câte planete sunt în sistemul solar?<br />
                                <strong>Răspunsuri:</strong> A) 7, B) 8, C) 9, D) 10<br />
                                <strong>Răspuns corect:</strong> 2 (B)
                              </li>
                              <li>
                                <strong>Întrebare:</strong> Cine a scris "Romeo și Julieta"?<br />
                                <strong>Răspunsuri:</strong> A) Charles Dickens, B) Mark Twain, C) William Shakespeare, D) Jules Verne<br />
                                <strong>Răspuns corect:</strong> 3 (C)
                              </li>
                            </ol>
                          </div>
                        </section>

                        <section id="pasul4">
                          <h2 className="text-2xl font-bold mb-4">Pasul 4: Programarea Jocului</h2>
                          <p className="mb-6">
                            Acum vom adăuga logica jocului nostru de quiz. Vom folosi variabile pentru a urmări scorul și întrebarea curentă, și vom programa comportamentul butoanelor.
                          </p>

                          <ol className="list-decimal list-inside space-y-4 mb-6">
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Creează variabile globale pentru:</strong>
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>"scor" - inițializat cu 0</li>
                                <li>"intrebareCurenta" - inițializat cu 1</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Creează procedura "AfiseazaIntrebare":</strong>
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Din categoria "Procedures", trage blocul "to procedure"</li>
                                <li>Redenumește procedura în "AfiseazaIntrebare"</li>
                                <li>Adaugă codul pentru:
                                  <ul className="list-disc list-inside ml-4">
                                    <li>Setarea textului din "LabelIntrebare" la întrebarea curentă</li>
                                    <li>Setarea textului butoanelor la variantele de răspuns</li>
                                    <li>Făcând butoanele de răspuns vizibile</li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Programează butonul START:</strong>
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Când butonul START este apăsat:
                                  <ul className="list-disc list-inside ml-4">
                                    <li>Resetează "scor" la 0</li>
                                    <li>Resetează "intrebareCurenta" la 1</li>
                                    <li>Actualizează "LabelScor" la "0"</li>
                                    <li>Ascunde butonul START</li>
                                    <li>Apelează procedura "AfiseazaIntrebare"</li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Programează butoanele de răspuns:</strong>
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Pentru fiecare buton de răspuns, când este apăsat:
                                  <ul className="list-disc list-inside ml-4">
                                    <li>Verifică dacă numărul butonului corespunde cu răspunsul corect pentru întrebarea curentă</li>
                                    <li>Dacă răspunsul este corect, crește scorul și afișează feedback pozitiv</li>
                                    <li>Dacă răspunsul este greșit, afișează feedback negativ</li>
                                    <li>Incrementează "intrebareCurenta"</li>
                                    <li>Verifică dacă mai sunt întrebări disponibile</li>
                                    <li>Dacă da, apelează "AfiseazaIntrebare" pentru următoarea întrebare</li>
                                    <li>Dacă nu, afișează scorul final și fă butonul START din nou vizibil</li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ol>
                        </section>

                        <section id="pasul5">
                          <h2 className="text-2xl font-bold mb-4">Pasul 5: Testarea și Îmbunătățirea Jocului</h2>
                          <p className="mb-4">
                            Acum că am implementat toate funcționalitățile de bază ale jocului nostru de quiz, este timpul să-l testăm și să adăugăm câteva îmbunătățiri.
                          </p>

                          <ol className="list-decimal list-inside space-y-4 mb-6">
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Testează aplicația</strong> folosind butonul "Connect" și fie emulatorul, fie dispozitivul tău fizic.
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Verifică comportamentul</strong> la fiecare etapă:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Butonul START inițiază corect jocul</li>
                                <li>Întrebările și răspunsurile sunt afișate corect</li>
                                <li>Verificarea răspunsurilor funcționează corect</li>
                                <li>Scorul este actualizat corespunzător</li>
                                <li>Jocul se termină corespunzător după ultima întrebare</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              <strong>Adaugă îmbunătățiri:</strong>
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Un cronometru pentru fiecare întrebare</li>
                                <li>Efecte sonore pentru răspunsuri corecte/incorecte</li>
                                <li>Animații pentru tranziția între întrebări</li>
                                <li>Un sistem de salvare a scorurilor maxime</li>
                              </ul>
                            </li>
                          </ol>

                          <div className="bg-purple-50 border-l-4 border-course-purple p-4 my-6">
                            <h3 className="font-medium mb-2">Depanare</h3>
                            <p className="mb-2">Dacă întâmpini probleme, verifică următoarele aspecte comune:</p>
                            <ul className="list-disc list-inside space-y-1">
                              <li>Asigură-te că toate listele au același număr de elemente</li>
                              <li>Verifică dacă indicii listelor sunt folosiți corect (listele în App Inventor încep de la 1, nu de la 0)</li>
                              <li>Asigură-te că toate variabilele sunt inițializate corect</li>
                              <li>Verifică dacă toate componentele sunt denumite corect în blocurile de cod</li>
                            </ul>
                          </div>
                        </section>

                        <section id="recapitulare">
                          <h2 className="text-2xl font-bold mb-4">Recapitulare</h2>
                          <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                            <h3 className="text-lg font-semibold text-green-700 mb-2">Ce ai învățat</h3>
                            <ul className="list-disc list-inside space-y-1">
                              <li>Cum să folosești liste pentru a stoca și accesa date structurate (întrebări și răspunsuri)</li>
                              <li>Cum să gestionezi variabile pentru a urmări scorul și progresul jocului</li>
                              <li>Cum să creezi proceduri pentru a organiza codul și a evita repetițiile</li>
                              <li>Cum să controlezi fluxul aplicației folosind condiții și evenimente</li>
                            </ul>
                          </div>

                          <p className="mb-4">
                            Felicitări! Ai creat un joc de quiz funcțional folosind App Inventor. Acest proiect a introdus concepte importante precum listele și variabilele, care sunt fundamentale în dezvoltarea de aplicații.
                          </p>

                          <p className="mb-4">
                            Poți îmbunătăți acest joc adăugând mai multe întrebări, categorii diferite, niveluri de dificultate, sau chiar un sistem de clasament pentru mai mulți jucători. Fii creativ și experimentează cu diferite idei pentru a face jocul tău unic!
                          </p>

                          <div className="flex justify-between mt-8">
                            <Button asChild className="bg-course-purple hover:bg-course-blue">
                              <Link to="/appinventor/session1" className="flex items-center">
                                <ArrowLeft className="mr-2 h-5 w-5" />
                                <span>Sesiunea 1: Joc Clicker</span>
                              </Link>
                            </Button>
                            <Button asChild className="bg-course-purple hover:bg-course-blue">
                              <Link to="/appinventor/session3" className="flex items-center">
                                <span>Sesiunea 3: Jocul Prinde Obiectul</span>
                                <ArrowRight className="ml-2 h-5 w-5" />
                              </Link>
                            </Button>
                          </div>
                        </section>
                      </TabsContent>
                      
                      <TabsContent value="blocks">
                        <section className="space-y-8">
                          <div>
                            <h3 className="text-xl font-bold mb-4">Inițializarea Listelor și Variabilelor</h3>
                            <p className="mb-4">
                              Aceste blocuri trebuie adăugate în secțiunea de blocuri pentru a crea și inițializa listele și variabilele necesare.
                            </p>
                            <CodeBlock title="Inițializarea Variabilelor">
                              {`// Creăm variabilele globale
initialize global scor to 0
initialize global intrebareCurenta to 1

// Creăm listele pentru întrebări și răspunsuri
initialize global listaIntrebari to create empty list
initialize global listaRaspunsuriA to create empty list
initialize global listaRaspunsuriB to create empty list
initialize global listaRaspunsuriC to create empty list
initialize global listaRaspunsuriD to create empty list
initialize global listaRaspunsuriCorecte to create empty list

// Adăugăm întrebările (se pot adăuga mai multe)
add items to list listaIntrebari
  • "Care este capitala României?"
  • "Câte planete sunt în sistemul solar?"
  • "Cine a scris 'Romeo și Julieta'?"

// Adăugăm variantele de răspuns A
add items to list listaRaspunsuriA
  • "București"
  • "7"
  • "Charles Dickens"

// Adăugăm variantele de răspuns B
add items to list listaRaspunsuriB
  • "Paris"
  • "8"
  • "Mark Twain"

// Adăugăm variantele de răspuns C
add items to list listaRaspunsuriC
  • "Londra"
  • "9"
  • "William Shakespeare"

// Adăugăm variantele de răspuns D
add items to list listaRaspunsuriD
  • "Berlin"
  • "10"
  • "Jules Verne"

// Adăugăm răspunsurile corecte (1=A, 2=B, 3=C, 4=D)
add items to list listaRaspunsuriCorecte
  • 1
  • 2
  • 3`}
                            </CodeBlock>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold mb-4">Procedura Afișează Întrebare</h3>
                            <p className="mb-4">
                              Această procedură se ocupă de afișarea întrebării curente și a variantelor de răspuns.
                            </p>
                            <CodeBlock title="Procedura AfiseazaIntrebare">
                              {`to procedure AfiseazaIntrebare
  // Afișăm întrebarea curentă
  set LabelIntrebare.Text to select item intrebareCurenta from list listaIntrebari

  // Afișăm variantele de răspuns
  set ButonRaspuns1.Text to select item intrebareCurenta from list listaRaspunsuriA
  set ButonRaspuns2.Text to select item intrebareCurenta from list listaRaspunsuriB
  set ButonRaspuns3.Text to select item intrebareCurenta from list listaRaspunsuriC
  set ButonRaspuns4.Text to select item intrebareCurenta from list listaRaspunsuriD

  // Facem butoanele vizibile
  set ButonRaspuns1.Visible to true
  set ButonRaspuns2.Visible to true
  set ButonRaspuns3.Visible to true
  set ButonRaspuns4.Visible to true

  // Ascundem feedback-ul anterior
  set LabelFeedback.Visible to false`}
                            </CodeBlock>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold mb-4">Programarea Butonului START</h3>
                            <p className="mb-4">
                              Aceste blocuri definesc comportamentul butonului START când este apăsat.
                            </p>
                            <CodeBlock title="Evenimentul ButonStart.Click">
                              {`when ButonStart.Click do
  // Resetăm variabilele
  set global scor to 0
  set global intrebareCurenta to 1

  // Actualizăm afișarea scorului
  set LabelScor.Text to 0

  // Ascundem butonul de start
  set ButonStart.Visible to false

  // Afișăm prima întrebare
  call AfiseazaIntrebare`}
                            </CodeBlock>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold mb-4">Programarea Butoanelor de Răspuns</h3>
                            <p className="mb-4">
                              Aceste blocuri definesc comportamentul butonului de răspuns 1 când este apăsat. Logica similară trebuie implementată pentru celelalte butoane de răspuns.
                            </p>
                            <CodeBlock title="Evenimentul ButonRaspuns1.Click">
                              {`when ButonRaspuns1.Click do
  // Verificăm dacă răspunsul este corect
  if (select item intrebareCurenta from list listaRaspunsuriCorecte) = 1 then
    // Răspuns corect
    set global scor to global scor + 1
    set LabelScor.Text to global scor
    set LabelFeedback.Text to "Corect!"
    set LabelFeedback.TextColor to "green"
  else
    // Răspuns greșit
    set LabelFeedback.Text to "Greșit! Răspunsul corect era: " & 
      (if (select item intrebareCurenta from list listaRaspunsuriCorecte) = 1 then
        select item intrebareCurenta from list listaRaspunsuriA
      else if (select item intrebareCurenta from list listaRaspunsuriCorecte) = 2 then
        select item intrebareCurenta from list listaRaspunsuriB
      else if (select item intrebareCurenta from list listaRaspunsuriCorecte) = 3 then
        select item intrebareCurenta from list listaRaspunsuriC
      else
        select item intrebareCurenta from list listaRaspunsuriD)
    set LabelFeedback.TextColor to "red"
  end if

  // Facem feedback-ul vizibil
  set LabelFeedback.Visible to true

  // Ascundem butoanele de răspuns
  set ButonRaspuns1.Visible to false
  set ButonRaspuns2.Visible to false
  set ButonRaspuns3.Visible to false
  set ButonRaspuns4.Visible to false

  // Trecem la următoarea întrebare
  set global intrebareCurenta to global intrebareCurenta + 1`}
                            </CodeBlock>
                          </div>
                        </section>
                      </TabsContent>
                      
                      <TabsContent value="challenges">
                        <section className="space-y-6">
                          <h2 className="text-xl font-bold">Provocări pentru îmbunătățirea jocului de quiz</h2>
                          
                          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-4">
                            <h3 className="font-semibold text-orange-800 mb-2">Provocare #1: Cronometru</h3>
                            <p className="mb-2">
                              Adaugă un cronometru pentru fiecare întrebare, astfel încât jucătorul să aibă un timp limitat pentru a răspunde.
                            </p>
                            <ul className="list-disc list-inside space-y-1">
                              <li>Folosește componenta Timer pentru a crea un cronometru</li>
                              <li>Afișează timpul rămas pentru fiecare întrebare</li>
                              <li>Dacă timpul expiră înainte ca jucătorul să răspundă, consideră răspunsul ca fiind greșit și treci la următoarea întrebare</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                            <h3 className="font-semibold text-blue-800 mb-2">Provocare #2: Categorii de întrebări</h3>
                            <p className="mb-2">
                              Creează categorii diferite de întrebări și permite jucătorului să aleagă categoria dorită.
                            </p>
                            <ul className="list-disc list-inside space-y-1">
                              <li>Creează liste separate pentru fiecare categorie de întrebări</li>
                              <li>Adaugă un ecran de selecție a categoriei înainte de începerea jocului</li>
                              <li>Adaptează logica jocului pentru a încărca întrebările din categoria selectată</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 my-4">
                            <h3 className="font-semibold text-purple-800 mb-2">Provocare #3: Efecte sonore</h3>
                            <p className="mb-2">
                              Adaugă efecte sonore pentru a face jocul mai interactiv și atractiv.
                            </p>
                            <ul className="list-disc list-inside space-y-1">
                              <li>Adaugă sunete pentru răspunsuri corecte și greșite</li>
                              <li>Adaugă un sunet pentru finalizarea jocului</li>
                              <li>Adaugă muzică de fundal în timpul jocului</li>
                              <li>Oferă opțiunea de a activa/dezactiva sunetele</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 border-l-4 border-green-500 p-4 my-4">
                            <h3 className="font-semibold text-green-800 mb-2">Provocare #4: Sistem de scor complex</h3>
                            <p className="mb-2">
                              Îmbunătățește sistemul de scor pentru a lua în considerare și alți factori decât răspunsurile corecte.
                            </p>
                            <ul className="list-disc list-inside space-y-1">
                              <li>Acordă mai multe puncte pentru răspunsurile rapide</li>
                              <li>Adaugă un multiplicator de scor pentru răspunsuri consecutive corecte</li>
                              <li>Implementează un sistem de "vieți" pentru a permite un număr limitat de greșeli</li>
                              <li>Salvează scorurile maxime utilizând componenta TinyDB</li>
                            </ul>
                          </div>
                          
                          <div className="mt-6 p-4 border rounded-lg bg-gray-50">
                            <h3 className="font-bold text-lg mb-2">Resurse suplimentare</h3>
                            <p>Pentru mai multe informații despre cum să implementezi aceste provocări, consultă următoarele resurse:</p>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                              <li><a href="#" className="text-blue-600 hover:underline">Documentația oficială App Inventor</a></li>
                              <li><a href="#" className="text-blue-600 hover:underline">Tutoriale video pentru jocuri în App Inventor</a></li>
                              <li><a href="#" className="text-blue-600 hover:underline">Comunitatea App Inventor pentru întrebări și sfaturi</a></li>
                            </ul>
                          </div>
                        </section>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/4">
                <div className="bg-gray-50 p-6 rounded-lg border sticky top-6">
                  <h3 className="font-bold text-lg mb-4">Cuprins</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#introducere" className="flex items-center hover:text-course-purple transition-colors">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        <span>Introducere</span>
                      </a>
                    </li>
                    <li>
                      <a href="#pasul1" className="flex items-center hover:text-course-purple transition-colors">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        <span>Configurarea Proiectului</span>
                      </a>
                    </li>
                    <li>
                      <a href="#pasul2" className="flex items-center hover:text-course-purple transition-colors">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        <span>Crearea Interfeței</span>
                      </a>
                    </li>
                    <li>
                      <a href="#pasul3" className="flex items-center hover:text-course-purple transition-colors">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        <span>Liste de Întrebări</span>
                      </a>
                    </li>
                    <li>
                      <a href="#pasul4" className="flex items-center hover:text-course-purple transition-colors">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        <span>Programarea Jocului</span>
                      </a>
                    </li>
                    <li>
                      <a href="#pasul5" className="flex items-center hover:text-course-purple transition-colors">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        <span>Testare și Îmbunătățiri</span>
                      </a>
                    </li>
                    <li>
                      <a href="#recapitulare" className="flex items-center hover:text-course-purple transition-colors">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        <span>Recapitulare</span>
                      </a>
                    </li>
                  </ul>
                  
                  <div className="border-t mt-6 pt-6">
                    <h3 className="font-bold text-lg mb-2">Resurse utile</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="text-sm text-blue-600 hover:underline flex items-center">
                          <BookOpen className="h-4 w-4 mr-2" />
                          <span>Documentație App Inventor</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-sm text-blue-600 hover:underline flex items-center">
                          <Code className="h-4 w-4 mr-2" />
                          <span>Exemple de cod</span>
                        </a>
                      </li>
                    </ul>
                  </div>
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

export default Session2;
