
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
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Lecția 1: Introducere în Construct 3
              </h1>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Primii pași în dezvoltarea de jocuri 2D folosind Construct 3
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-blue-700">Ce este Construct 3?</h2>
              <p className="mb-6 text-gray-700">
                Construct 3 este un motor de jocuri 2D bazat pe browser care permite crearea jocurilor
                fără a necesita cunoștințe avansate de programare. În loc să scrii cod complex, poți folosi
                sistemul vizual de evenimente pentru a defini comportamentul jocului tău.
              </p>

              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src="https://construct3.net/downloads/public/images/c3hero_0008.jpg" 
                  alt="Interfața Construct 3" 
                  className="w-full"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6 text-blue-700">De ce să înveți Construct 3?</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Este accesibil începătorilor, dar suficient de puternic pentru proiecte complexe</li>
                <li>Funcționează direct în browser, fără a necesita instalare</li>
                <li>Permite exportarea jocurilor pe multiple platforme</li>
                <li>Comunitate activă și multe resurse de învățare</li>
                <li>Interfață vizuală intuitivă pentru designul nivelurilor</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-blue-700">Ce vom învăța în acest curs</h2>
              <p className="mb-6 text-gray-700">
                În cadrul acestui curs, vom explora toate aspectele dezvoltării de jocuri cu Construct 3. 
                Vom începe cu noțiuni de bază și vom avansa treptat spre concepte mai complexe. 
                La final, vei avea cunoștințele necesare pentru a crea propriile jocuri 2D.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Exercițiu pentru acasă</h3>
                <p className="text-gray-700 mb-4">
                  Explorează site-ul oficial Construct 3 și încearcă editorul gratuit. 
                  Familiarizează-te cu interfața și observă câteva exemple de jocuri create cu Construct 3.
                </p>
              </div>

              <div className="flex justify-between mt-12">
                <Button asChild variant="outline">
                  <Link to="/construct3" className="flex items-center">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Înapoi la curs</span>
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/construct3" className="flex items-center">
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
