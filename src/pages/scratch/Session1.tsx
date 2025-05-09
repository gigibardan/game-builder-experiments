
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { motion } from 'framer-motion';
import ImageModal from '@/components/ImageModal';

const Session1 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ReadingProgressBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Lecția 1: Introducere în Scratch
              </h1>
              <p className="text-xl mb-6 max-w-2xl mx-auto">
                Primii pași în programarea vizuală și mediul de dezvoltare Scratch
              </p>
              <Button
                asChild
                className="bg-amber-800 hover:bg-amber-900 text-white shadow-lg"
              >
                <a 
                  href="https://scratch.mit.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3"
                >
                  Site oficial Scratch
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-amber-700">Ce este Scratch?</h2>
              <p className="mb-6 text-gray-700">
                Scratch este un limbaj de programare vizual dezvoltat de MIT Media Lab. Este conceput pentru a fi ușor de învățat și utilizat, 
                fiind perfect pentru copiii care doresc să învețe programare. În loc să scrii cod text, în Scratch vei aranja blocuri colorate 
                care se îmbină pentru a crea programe.
              </p>

              <div className="mb-8">
                <ImageModal 
                  src="https://scratch.mit.edu/images/scratch-interface.png" 
                  alt="Interfața Scratch"
                  caption="Interfața Scratch - click pentru a mări imaginea"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6 text-amber-700">De ce să înveți Scratch?</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Este distractiv și ușor de învățat</li>
                <li>Te învață concepte de programare fără a te împiedica de sintaxă complicată</li>
                <li>Dezvoltă gândirea algoritmică și capacitatea de rezolvare a problemelor</li>
                <li>Te ajută să creezi jocuri, animații și povești interactive</li>
                <li>Este o introducere excelentă în lumea programării</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-amber-700">Ce vom învăța în acest curs</h2>
              <p className="mb-6 text-gray-700">
                În cadrul acestui curs, vom învăța toate conceptele fundamentale ale programării folosind Scratch. 
                Vom crea diverse proiecte distractive, de la animații simple până la jocuri interactive. Până la 
                finalul cursului, vei putea să-ți creezi propriile jocuri și să le împărtășești cu prietenii tăi.
              </p>

              <div className="bg-yellow-50 p-6 rounded-lg mb-8 border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold mb-3 text-amber-700">Exercițiu pentru acasă</h3>
                <p className="text-gray-700 mb-4">
                  Pentru a te familiariza cu mediul Scratch, intră pe site-ul oficial Scratch (scratch.mit.edu) 
                  și explorează câteva proiecte create de alți utilizatori. Încearcă să înțelegi cum funcționează 
                  și inspiră-te pentru proiectele tale viitoare!
                </p>
              </div>

              <div className="flex justify-between mt-12">
                <Button asChild variant="outline" className="bg-amber-600 hover:bg-amber-700 text-white shadow-sm">
                  <Link to="/courses/scratch" className="flex items-center">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Înapoi la curs</span>
                  </Link>
                </Button>
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white shadow-md">
                  <Link to="/scratch/session2spacedodge" className="flex items-center">
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
