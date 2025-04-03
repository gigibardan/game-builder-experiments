
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { motion } from 'framer-motion';

const Session1 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ReadingProgressBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-500 to-pink-400 py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Lecția 1: Introducere în Alice 3
              </h1>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Primii pași în crearea de povești și animații 3D interactive
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-pink-700">Ce este Alice 3?</h2>
              <p className="mb-6 text-gray-700">
                Alice 3 este un mediu de programare educațional care facilitează crearea de animații,
                povești interactive și jocuri simple în 3D. Dezvoltat de Carnegie Mellon University,
                acest software te învață concepte de programare prin metode vizuale și interactive.
              </p>

              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src="https://www.alice.org/wp-content/uploads/2021/06/alice3-scene-editor.png" 
                  alt="Interfața Alice 3" 
                  className="w-full"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6 text-pink-700">De ce să înveți Alice 3?</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Introducere excelentă în programarea orientată pe obiecte</li>
                <li>Interfață vizuală pentru programare (drag-and-drop)</li>
                <li>Suport pentru animații și interacțiuni 3D</li>
                <li>Bibliotecă vastă de modele 3D și scene</li>
                <li>Traseu educațional structurat pentru învățare progresivă</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-pink-700">Ce vom învăța în acest curs</h2>
              <p className="mb-6 text-gray-700">
                În acest curs, vom explora Alice 3 pentru a crea povești interactive captivante în 3D.
                Vom învăța cum să manipulăm personaje, să creăm scene și să adăugăm elemente interactive 
                pentru a da viață poveștilor noastre digitale.
              </p>

              <div className="bg-pink-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-pink-700">Exercițiu pentru acasă</h3>
                <p className="text-gray-700 mb-4">
                  Descarcă Alice 3 de pe site-ul oficial (www.alice.org) și explorează interfața. 
                  Încearcă să deschizi câteva proiecte model pentru a te familiariza cu mediul și 
                  posibilitățile oferite.
                </p>
              </div>

              <div className="flex justify-between mt-12">
                <Button asChild variant="outline">
                  <Link to="/alice3" className="flex items-center">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Înapoi la curs</span>
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/alice3" className="flex items-center">
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

export default Session1;
