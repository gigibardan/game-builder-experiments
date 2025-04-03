
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
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-400 py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Lecția 1: Introducere în GDevelop
              </h1>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Primii pași în dezvoltarea de jocuri cu fizică realistă și efecte vizuale impresionante
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-indigo-700">Ce este GDevelop?</h2>
              <p className="mb-6 text-gray-700">
                GDevelop este un motor de jocuri open-source și gratuit care permite crearea jocurilor 2D fără
                a necesita experiență în programare. Cu GDevelop, poți crea logica jocului folosind un sistem de 
                evenimente vizuale, similare cu diagramele de flux.
              </p>

              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src="https://gdevelop.io/page-assets/game-example-screenshots/screenshot-platformer.png" 
                  alt="Exemplu de joc GDevelop" 
                  className="w-full"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6 text-indigo-700">De ce să înveți GDevelop?</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Este complet gratuit și open-source</li>
                <li>Permite crearea jocurilor fără cunoștințe de programare</li>
                <li>Suportă fizică realistă, particule și efecte vizuale avansate</li>
                <li>Poți publica jocurile pe web, Android, iOS și Windows</li>
                <li>Comunitate mare și prietenoasă de dezvoltatori</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-indigo-700">Ce vom învăța în acest curs</h2>
              <p className="mb-6 text-gray-700">
                În cadrul acestui curs, vom explora cum să creăm jocuri captivante folosind GDevelop. 
                Vom începe cu noțiuni de bază și vom avansa treptat spre crearea unor jocuri complexe cu
                mecanici interesante, fizică realistă și efecte vizuale impresionante.
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-indigo-700">Exercițiu pentru acasă</h3>
                <p className="text-gray-700 mb-4">
                  Descarcă și instalează GDevelop de pe site-ul oficial (gdevelop.io). 
                  Explorează interfața și încearcă să deschizi câteva exemple incluse în program.
                </p>
              </div>

              <div className="flex justify-between mt-12">
                <Button asChild variant="outline">
                  <Link to="/gdevelop" className="flex items-center">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Înapoi la curs</span>
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/gdevelop" className="flex items-center">
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
