
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
        <section className="bg-gradient-to-r from-orange-600 to-orange-400 py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Lecția 1: Introducere în Greenfoot
              </h1>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Învață Java prin crearea jocurilor interactive
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-orange-700">Ce este Greenfoot?</h2>
              <p className="mb-6 text-gray-700">
                Greenfoot este un mediu educațional interactiv conceput pentru a învăța programare orientată pe 
                obiecte folosind Java. Cu Greenfoot, poți crea jocuri, simulări și alte aplicații interactive
                într-un mod vizual și accesibil.
              </p>

              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src="https://www.greenfoot.org/images/home/greenfoot_environment.png" 
                  alt="Greenfoot Environment" 
                  className="w-full"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6 text-orange-700">De ce să înveți Greenfoot?</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Introducere accesibilă în Java și programarea orientată pe obiecte</li>
                <li>Vizualizare imediată a rezultatelor codului tău</li>
                <li>Creare de jocuri și simulări interactive</li>
                <li>Concepte avansate predate într-un mod distractiv</li>
                <li>Tranziție ușoară spre dezvoltarea Java profesională</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-orange-700">Ce vom învăța în acest curs</h2>
              <p className="mb-6 text-gray-700">
                În acest curs, vom explora cum să folosim Greenfoot pentru a învăța programarea orientată pe obiecte
                în Java. Vom crea jocuri simple, vom învăța concepte fundamentale precum clase, obiecte, moștenire,
                și vom aplica aceste cunoștințe în proiecte practice și distractive.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-orange-700">Exercițiu pentru acasă</h3>
                <p className="text-gray-700 mb-4">
                  Descarcă și instalează Greenfoot de pe site-ul oficial (greenfoot.org). 
                  Explorează interfața și deschide câteva exemple pentru a înțelege 
                  structura de bază a unui proiect Greenfoot.
                </p>
              </div>

              <div className="flex justify-between mt-12">
                <Button asChild variant="outline">
                  <Link to="/greenfoot" className="flex items-center">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Înapoi la curs</span>
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/greenfoot" className="flex items-center">
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
