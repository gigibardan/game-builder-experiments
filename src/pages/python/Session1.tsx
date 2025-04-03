
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
        <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Lecția 1: Introducere în Python
              </h1>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Primii pași în programarea cu unul dintre cele mai populare limbaje
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-blue-700">Ce este Python?</h2>
              <p className="mb-6 text-gray-700">
                Python este un limbaj de programare de nivel înalt, interpretat și cu o sintaxă simplă și ușor de învățat. 
                Este unul dintre cele mai populare limbaje de programare din lume, folosit în diverse domenii precum 
                dezvoltarea web, știința datelor, inteligența artificială și automatizare.
              </p>

              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src="https://www.python.org/static/community_logos/python-logo-master-v3-TM.png" 
                  alt="Python Logo" 
                  className="w-full"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6 text-blue-700">De ce să înveți Python?</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Sintaxă clară și ușor de învățat, perfectă pentru începători</li>
                <li>Limbaj versatil, folosit în numeroase domenii</li>
                <li>Comunitate mare și resurse abundente de învățare</li>
                <li>Biblioteci și framework-uri pentru aproape orice ai nevoie</li>
                <li>Cerere mare pe piața muncii pentru programatori Python</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-blue-700">Ce vom învăța în acest curs</h2>
              <p className="mb-6 text-gray-700">
                În acest curs, vom explora fundamentele programării în Python și vom avansa treptat spre 
                crearea de aplicații interactive. Vom învăța despre variabile, structuri de control, 
                funcții, și cum să folosim biblioteci populare pentru a rezolva probleme din lumea reală.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Exercițiu pentru acasă</h3>
                <p className="text-gray-700 mb-4">
                  Instalează Python de pe site-ul oficial (python.org) și familiarizează-te cu 
                  interpretorul Python și cu IDLE (mediul de dezvoltare integrat care vine cu Python). 
                  Încearcă să rulezi un program simplu care afișează "Hello, World!".
                </p>
              </div>

              <div className="flex justify-between mt-12">
                <Button asChild variant="outline">
                  <Link to="/python" className="flex items-center">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Înapoi la curs</span>
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/python" className="flex items-center">
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
