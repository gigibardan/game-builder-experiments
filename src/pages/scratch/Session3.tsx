
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { motion } from 'framer-motion';
import { InfoBox } from '@/components/LessonComponents';

const Session3 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ReadingProgressBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-500 to-amber-500 py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Lecția 3: Variabile și Condiții
              </h1>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Învățăm să folosim variabile și structuri de decizie în Scratch
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-amber-700">Înțelegerea Variabilelor</h2>
              <p className="mb-6 text-gray-700">
                Variabilele sunt ca niște cutii în care putem păstra informații. În Scratch, putem crea variabile
                pentru a stoca numere, text sau alte tipuri de date pe care le putem folosi și modifica pe parcursul
                programului nostru.
              </p>

              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src="https://en.scratch-wiki.info/w/images/Variableblock.png" 
                  alt="Scratch Variables" 
                  className="w-full"
                />
              </div>
              
              <InfoBox title="Cum creăm o variabilă?" variant="primary">
                <p>Pentru a crea o variabilă în Scratch, urmează acești pași:</p>
                <ol className="list-decimal pl-5 space-y-2 mt-2">
                  <li>Mergi la secțiunea "Variabile" din paleta de blocuri</li>
                  <li>Click pe butonul "Creează o variabilă"</li>
                  <li>Dă un nume variabilei (de exemplu "scor" sau "vieti")</li>
                  <li>Alege dacă variabila este pentru toate sprite-urile sau doar pentru un anumit sprite</li>
                </ol>
              </InfoBox>

              <h2 className="text-2xl font-bold mb-6 mt-8 text-amber-700">Condiții și Blocuri IF</h2>
              <p className="mb-6 text-gray-700">
                Condițiile ne permit să executăm anumite blocuri de cod doar dacă o anumită condiție este îndeplinită.
                În Scratch, folosim blocurile "dacă" (if) pentru a implementa structuri de decizie.
              </p>

              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src="https://en.scratch-wiki.info/w/images/If_Then.png" 
                  alt="Scratch If-Then Blocks" 
                  className="w-full"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6 text-amber-700">Proiectul nostru: Jocul de Prindere</h2>
              <p className="mb-6 text-gray-700">
                În această lecție, vom crea un joc simplu în care vom folosi variabile pentru a ține scorul și condiții 
                pentru a verifica când jucătorul prinde obiectul.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-amber-700">Pași pentru crearea jocului:</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li className="text-gray-700">Creează o variabilă numită "scor" care începe de la 0</li>
                  <li className="text-gray-700">Adaugă un sprite care va fi controlat de jucător</li>
                  <li className="text-gray-700">Adaugă un alt sprite care va cădea de sus</li>
                  <li className="text-gray-700">Folosește un bloc "dacă" pentru a verifica dacă cele două sprite-uri se ating</li>
                  <li className="text-gray-700">Dacă se ating, crește scorul cu 1 și resetează poziția obiectului căzător</li>
                </ol>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-amber-700">Exercițiu pentru acasă</h3>
                <p className="text-gray-700 mb-4">
                  Extinde jocul creat în timpul lecției adăugând:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-gray-700">O variabilă pentru vieți (jucătorul începe cu 3 vieți)</li>
                  <li className="text-gray-700">Un alt sprite "obstacol" care trebuie evitat</li>
                  <li className="text-gray-700">Folosește blocuri "dacă" pentru a verifica ciocnirea cu obstacolul</li>
                  <li className="text-gray-700">Dacă jucătorul atinge obstacolul, scade o viață</li>
                  <li className="text-gray-700">Când viețile ajung la 0, jocul se termină</li>
                </ul>
              </div>

              <div className="flex justify-between mt-12">
                <Button asChild variant="outline">
                  <Link to="/scratch/session2" className="flex items-center">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Lecția anterioară</span>
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/scratch/session4" className="flex items-center">
                    <span>Lecția următoare</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
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
