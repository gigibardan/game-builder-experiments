
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { motion } from 'framer-motion';
import { InfoBox, Challenge } from '@/components/LessonComponents';

const Session4 = () => {
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
                Lecția 4: Bucle și Evenimente
              </h1>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Explorăm buclele repetitive și evenimentele în Scratch
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-amber-700">Înțelegerea Buclelor</h2>
              <p className="mb-6 text-gray-700">
                Buclele sunt blocuri care ne permit să repetăm o secvență de instrucțiuni de mai multe ori.
                În Scratch, avem mai multe tipuri de bucle care ne ajută să facem programele mai eficiente.
              </p>

              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src="https://en.scratch-wiki.info/w/images/Repeat_10.png" 
                  alt="Scratch Loop Blocks" 
                  className="w-full"
                />
              </div>
              
              <InfoBox title="Tipuri de bucle în Scratch" variant="secondary">
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Repetă de X ori</strong> - Execută blocurile de un număr specific de ori</li>
                  <li><strong>Repetă la infinit</strong> - Execută blocurile continuu, fără oprire</li>
                  <li><strong>Repetă până când</strong> - Execută blocurile până când o condiție devine adevărată</li>
                </ul>
              </InfoBox>

              <h2 className="text-2xl font-bold mb-6 mt-8 text-amber-700">Evenimente în Scratch</h2>
              <p className="mb-6 text-gray-700">
                Evenimentele sunt acțiuni care declanșează anumite blocuri de cod. De exemplu, putem face ca 
                anumite blocuri să se execute când utilizatorul apasă o tastă, când face clic pe un sprite,
                sau când primim un mesaj de la un alt sprite.
              </p>

              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src="https://en.scratch-wiki.info/w/images/Event_Blocks_1.9.png" 
                  alt="Scratch Event Blocks" 
                  className="w-full"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6 text-amber-700">Proiectul nostru: Animație Interactivă</h2>
              <p className="mb-6 text-gray-700">
                În această lecție, vom crea o animație interactivă în care vom folosi bucle și evenimente pentru a face
                sprite-urile să reacționeze la acțiunile utilizatorului.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-amber-700">Pași pentru crearea animației:</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li className="text-gray-700">Adaugă mai multe sprite-uri în scenă</li>
                  <li className="text-gray-700">Folosește blocuri de eveniment pentru a detecta când utilizatorul face clic pe fiecare sprite</li>
                  <li className="text-gray-700">Când un sprite este apăsat, folosește o buclă pentru a crea o animație</li>
                  <li className="text-gray-700">Adaugă sunete și efecte pentru a face animația mai interesantă</li>
                  <li className="text-gray-700">Folosește evenimente cu mesaje pentru a coordona animațiile între sprite-uri</li>
                </ol>
              </div>

              <Challenge title="Provocare: Jocul Whack-a-Mole" difficulty="medium">
                <p>Folosind ceea ce ai învățat despre bucle și evenimente, creează un joc simplu de Whack-a-Mole:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Adaugă mai multe sprite-uri care reprezintă "cârtiță"</li>
                  <li>Folosește bucle și temporizări pentru a face cârtiţele să apară și să dispară aleatoriu</li>
                  <li>Adaugă un sistem de scor care crește când utilizatorul face clic pe o cârtiță</li>
                  <li>Adaugă un cronometru pentru a limita timpul de joc</li>
                  <li>La finalul jocului, afișează scorul final</li>
                </ul>
              </Challenge>

              <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-amber-700">Exercițiu pentru acasă</h3>
                <p className="text-gray-700 mb-4">
                  Extinde jocul Whack-a-Mole adăugând:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-gray-700">Niveluri de dificultate (viteza cu care apar cârtiţele crește)</li>
                  <li className="text-gray-700">"Bonus cârtiţe" care oferă puncte extra</li>
                  <li className="text-gray-700">Efecte sonore pentru a face jocul mai antrenant</li>
                  <li className="text-gray-700">Un ecran de început și unul de game over</li>
                </ul>
              </div>

              <div className="flex justify-between mt-12">
                <Button asChild variant="outline">
                  <Link to="/scratch/session3" className="flex items-center">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Lecția anterioară</span>
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/courses/scratch" className="flex items-center">
                    <span>Înapoi la curs</span>
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

export default Session4;
