
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
                            <Button asChild className="bg-course-purple hover:bg-course-blue" disabled>
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
                            <CodeBlock
                              title="Inițializarea Variabilelor"
                              code={`// Creăm variabilele globale
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
                              language="plaintext"
                            />
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold mb-4">Procedura Afișează Întrebare</h3>
                            <p className="mb-4">
                              Această procedură se ocupă de afișarea întrebării curente și a variantelor de răspuns.
                            </p>
                            <CodeBlock
                              title="Procedura AfiseazaIntrebare"
                              code={`to procedure AfiseazaIntrebare
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
                              language="plaintext"
                            />
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold mb-4">Programarea Butonului START</h3>
                            <p className="mb-4">
                              Aceste blocuri definesc comportamentul butonului START când este apăsat.
                            </p>
                            <CodeBlock
                              title="Evenimentul ButonStart.Click"
                              code={`when ButonStart.Click do
  // Resetăm variabilele
  set global scor to 0
  set global intrebareCurenta to 1
  
  // Actualizăm afișarea scorului
  set LabelScor.Text to 0
  
  // Ascundem butonul de start
  set ButonStart.Visible to false
  
  // Afișăm prima întrebare
  call AfiseazaIntrebare`}
                              language="plaintext"
                            />
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold mb-4">Programarea Butoanelor de Răspuns</h3>
                            <p className="mb-4">
                              Aceste blocuri definesc comportamentul butonului de răspuns 1 când este apăsat. Logica similară trebuie implementată pentru celelalte butoane de răspuns.
                            </p>
                            <CodeBlock
                              title="Evenimentul ButonRaspuns1.Click"
                              code={`when ButonRaspuns1.Click do
  // Verificăm dacă răspunsul este corect
  if select item intrebareCurenta from list listaRaspunsuriCorecte = 1 then
    // Răspuns corect
    set global scor to global scor + 1
    set LabelScor.Text to global scor
    set LabelFeedback.Text to "Corect!"
    set LabelFeedback.TextColor to "green"
  else
    // Răspuns greșit
    set LabelFeedback.Text to "Greșit! Răspunsul corect era: " & 
      select item intrebareCurenta from list
        if select item intrebareCurenta from list listaRaspunsuriCorecte = 1 then
          listaRaspunsuriA
        else if select item intrebareCurenta from list listaRaspunsuriCorecte = 2 then
          listaRaspunsuriB
        else if select item intrebareCurenta from list listaRaspunsuriCorecte = 3 then
          listaRaspunsuriC
        else
          listaRaspunsuriD
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
  set global intrebareCurenta to global intrebareCurenta + 1
  
  // Verificăm dacă mai sunt întrebări
  if global intrebareCurenta <= length of list listaIntrebari then
    // Mai sunt întrebări, așteaptă o secundă și afișează următoarea
    call AfiseazaIntrebare
  else
    // Nu mai sunt întrebări, afișăm rezultatul final
    set LabelIntrebare.Text to "Quiz terminat! Scorul tău final: " & global scor & " din " & length of list listaIntrebari
    set ButonStart.Text to "JOC NOU"
    set ButonStart.Visible to true
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
                              Acum că ai creat jocul de quiz de bază, iată câteva provocări pentru a-l îmbunătăți și a-ți dezvolta abilitățile de programare:
                            </p>
                            
                            <div className="space-y-6">
                              <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                                <h3 className="font-bold flex items-center">
                                  <Star className="h-5 w-5 text-course-purple mr-2" />
                                  Provocare 1: Adaugă un Cronometru
                                </h3>
                                <p className="mt-2">
                                  Adaugă un cronometru care limitează timpul disponibil pentru a răspunde la fiecare întrebare. Dacă timpul expiră înainte ca utilizatorul să răspundă, consideră întrebarea ca fiind greșită și treci la următoarea.
                                </p>
                                <div className="mt-3">
                                  <h4 className="font-semibold mb-1">Indicii:</h4>
                                  <ul className="list-disc list-inside space-y-1">
                                    <li>Folosește componenta "Clock" din categoria "Sensors"</li>
                                    <li>Setează un interval pentru cronometru (ex: 10 secunde)</li>
                                    <li>Adaugă o variabilă pentru a urmări timpul rămas</li>
                                    <li>Afișează timpul rămas pe ecran</li>
                                  </ul>
                                </div>
                              </div>
                              
                              <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                                <h3 className="font-bold flex items-center">
                                  <Star className="h-5 w-5 text-course-purple mr-2" />
                                  Provocare 2: Categorii de Întrebări
                                </h3>
                                <p className="mt-2">
                                  Extinde quiz-ul pentru a include mai multe categorii de întrebări (ex: Știință, Istorie, Geografie, Sport, etc.). Permite utilizatorului să aleagă categoria înainte de a începe jocul.
                                </p>
                                <div className="mt-3">
                                  <h4 className="font-semibold mb-1">Indicii:</h4>
                                  <ul className="list-disc list-inside space-y-1">
                                    <li>Creează liste separate pentru fiecare categorie</li>
                                    <li>Adaugă butoane sau un ListPicker pentru selectarea categoriei</li>
                                    <li>Modifică logica jocului pentru a utiliza listele corespunzătoare categoriei selectate</li>
                                  </ul>
                                </div>
                              </div>
                              
                              <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                                <h3 className="font-bold flex items-center">
                                  <Star className="h-5 w-5 text-course-purple mr-2" />
                                  Provocare 3: Salvarea Scorurilor
                                </h3>
                                <p className="mt-2">
                                  Implementează un sistem care salvează cele mai bune scoruri obținute de utilizator. Afișează un clasament al celor mai bune scoruri la sfârșitul fiecărui joc.
                                </p>
                                <div className="mt-3">
                                  <h4 className="font-semibold mb-1">Indicii:</h4>
                                  <ul className="list-disc list-inside space-y-1">
                                    <li>Folosește componenta "TinyDB" din categoria "Storage" pentru a salva scorurile</li>
                                    <li>Creează o listă pentru a stoca scorurile</li>
                                    <li>Sortează scorurile pentru a afișa clasamentul</li>
                                    <li>Verifică dacă scorul curent se califică pentru clasament</li>
                                  </ul>
                                </div>
                              </div>
                              
                              <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                                <h3 className="font-bold flex items-center">
                                  <Star className="h-5 w-5 text-course-purple mr-2" />
                                  Provocare 4: Niveluri de Dificultate
                                </h3>
                                <p className="mt-2">
                                  Adaugă multiple niveluri de dificultate (Ușor, Mediu, Dificil) cu întrebări diferite și, eventual, timpuri diferite pentru răspuns.
                                </p>
                                <div className="mt-3">
                                  <h4 className="font-semibold mb-1">Indicii:</h4>
                                  <ul className="list-disc list-inside space-y-1">
                                    <li>Creează liste separate pentru fiecare nivel de dificultate</li>
                                    <li>Ajustează punctajul în funcție de dificultate (ex: întrebările dificile valorează mai multe puncte)</li>
                                    <li>Modifică timpul disponibil pentru răspuns în funcție de dificultate</li>
                                  </ul>
                                </div>
                              </div>
                              
                              <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                                <h3 className="font-bold flex items-center">
                                  <Star className="h-5 w-5 text-course-purple mr-2" />
                                  Provocare 5: Aspectul Vizual și Sunetele
                                </h3>
                                <p className="mt-2">
                                  Îmbunătățește aspectul vizual al jocului cu imagini, culori atractive și adaugă efecte sonore pentru răspunsurile corecte/incorecte.
                                </p>
                                <div className="mt-3">
                                  <h4 className="font-semibold mb-1">Indicii:</h4>
                                  <ul className="list-disc list-inside space-y-1">
                                    <li>Utilizează componenta "Player" pentru a reda sunete</li>
                                    <li>Adaugă imagini și fundal personalizat</li>
                                    <li>Folosește culori diferite pentru a indica răspunsurile corecte/incorecte</li>
                                    <li>Adaugă animații pentru tranziția între întrebări</li>
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
                                  <h4 className="font-medium">Gestionarea Timpului</h4>
                                  <p className="text-sm text-gray-600">Utilizarea componentei Clock pentru a crea timere interactive în aplicații</p>
                                </div>
                              </div>
                              
                              <div className="p-4 bg-gray-50 rounded-md flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                  <h4 className="font-medium">Structuri de Date Complexe</h4>
                                  <p className="text-sm text-gray-600">Organizarea și gestionarea datelor folosind multiple liste și variabile</p>
                                </div>
                              </div>
                              
                              <div className="p-4 bg-gray-50 rounded-md flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                  <h4 className="font-medium">Stocarea Datelor</h4>
                                  <p className="text-sm text-gray-600">Salvarea și recuperarea informațiilor între sesiunile de joc</p>
                                </div>
                              </div>
                              
                              <div className="p-4 bg-gray-50 rounded-md flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                  <h4 className="font-medium">Experiența de Utilizare</h4>
                                  <p className="text-sm text-gray-600">Îmbunătățirea experienței utilizatorului cu efecte vizuale și sonore</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold mb-4">Împărtășește Realizările Tale</h3>
                            <p className="mb-4">
                              După ce ai finalizat proiectul și ai implementat unele dintre provocări, împărtășește-l cu colegii și profesorii tăi. Poți exporta proiectul ca fișier .aia din App Inventor (Projects > Export selected project (.aia) to my computer).
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
                        <Link to="/appinventor/session1">
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          <span>Sesiunea anterioară</span>
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex items-center">
                        <Link to="/appinventor/session3">
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
                              Pasul 2: Interfața Quiz-ului
                            </a>
                          </li>
                          <li>
                            <a href="#pasul3" className="text-gray-700 hover:text-course-blue flex items-center">
                              <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                              Pasul 3: Liste de Întrebări
                            </a>
                          </li>
                          <li>
                            <a href="#pasul4" className="text-gray-700 hover:text-course-blue flex items-center">
                              <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                              Pasul 4: Programare
                            </a>
                          </li>
                          <li>
                            <a href="#pasul5" className="text-gray-700 hover:text-course-blue flex items-center">
                              <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                              Pasul 5: Testare
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
                          <a href="https://appinventor.mit.edu/explore/library" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Biblioteca de componente
                          </a>
                        </li>
                        <li>
                          <a href="https://appinventor.mit.edu/explore/resources/beginner" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Resurse pentru începători
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

export default Session2;
