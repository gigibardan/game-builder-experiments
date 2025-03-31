
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ChevronRight, Star } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import ReadingProgressBar from '@/components/ReadingProgressBar';

const Session2 = () => {
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
                    2
                  </span>
                  <h1 className="text-2xl md:text-3xl font-bold">Sesiunea 2: Aplicația Quiz</h1>
                </div>
                <p className="text-white/90">
                  Dezvoltă o aplicație de quiz interactivă cu întrebări și răspunsuri multiple!
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
                      În această sesiune, vom crea o aplicație de quiz interactivă care testează cunoștințele utilizatorului 
                      printr-o serie de întrebări cu răspunsuri multiple. Acest tip de aplicație este foarte popular și poate fi 
                      personalizată pentru diverse subiecte educaționale sau de divertisment.
                    </p>
                    <p className="mb-4">
                      Vom folosi componente de interfață utilizator precum butoane, etichete și imagini pentru a crea o experiență 
                      plăcută și vom învăța cum să gestionăm logica din spatele aplicației pentru a urmări și verifica răspunsurile utilizatorului.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-course-blue p-4 my-6">
                      <h3 className="text-lg font-semibold text-course-blue mb-2">Ce vei învăța</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Cum să creezi un sistem de navigare între întrebări</li>
                        <li>Cum să implementezi logica de verificare a răspunsurilor</li>
                        <li>Cum să calculezi și să afișezi scorul final</li>
                        <li>Cum să folosești liste pentru a stoca întrebările și răspunsurile</li>
                        <li>Cum să adaugi feedback audio și vizual pentru răspunsurile utilizatorului</li>
                      </ul>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 mt-8" id="planificare">Pasul 1: Planificarea Aplicației</h2>
                    <p className="mb-4">
                      Înainte de a începe codarea, este important să planificăm structura aplicației noastre de quiz:
                    </p>

                    <ol className="list-decimal list-inside space-y-4 mb-6">
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Ecrane necesare</strong>:
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Ecran de start cu titlu și buton de începere</li>
                          <li>Ecran de quiz cu întrebări și opțiuni de răspuns</li>
                          <li>Ecran de rezultate cu scorul final și opțiune de reluare</li>
                        </ul>
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Date necesare</strong>:
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Lista de întrebări</li>
                          <li>Lista de răspunsuri pentru fiecare întrebare</li>
                          <li>Răspunsurile corecte pentru fiecare întrebare</li>
                          <li>Scorul curent al utilizatorului</li>
                        </ul>
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Funcționalități</strong>:
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Navigarea între întrebări</li>
                          <li>Verificarea răspunsurilor</li>
                          <li>Calcularea scorului final</li>
                          <li>Feedback pentru utilizator (corect/greșit)</li>
                          <li>Opțiune de reluare a quiz-ului</li>
                        </ul>
                      </li>
                    </ol>

                    {/* Continue with the rest of your tutorial content */}
                    <h2 className="text-2xl font-bold mb-4" id="configurare">Pasul 2: Configurarea Proiectului</h2>
                    
                    <div className="space-y-6">
                      {/* Your implementation steps can go here */}
                      <p className="mb-4">
                        Vom începe prin a crea un nou proiect în MIT App Inventor și configurarea componentelor necesare.
                      </p>
                      
                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold mb-2">2.1 Crearea unui nou proiect</h3>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Deschide MIT App Inventor în browser</li>
                          <li>Creează un proiect nou numit "QuizApp"</li>
                          <li>Organizează proiectul folosind mai multe ecrane</li>
                        </ol>
                      </div>
                      
                      {/* Additional content should follow... */}
                      
                      <div className="flex justify-between mt-8">
                        <Button asChild className="bg-gray-500 hover:bg-gray-600">
                          <Link to="/appinventor/session1">
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            <span>Sesiunea 1: Jocul Clicker</span>
                          </Link>
                        </Button>
                        
                        <Button asChild className="bg-course-purple hover:bg-course-blue">
                          <Link to="/appinventor/session3">
                            <span>Sesiunea 3: Drawing App</span>
                            <ChevronRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
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
                          <a href="#planificare" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 1: Planificare
                          </a>
                        </li>
                        <li>
                          <a href="#configurare" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 2: Configurare
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

export default Session2;
