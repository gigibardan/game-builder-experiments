
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PuzzlePiece, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Scratch = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Laboratorul de Jocuri
                    <span className="block text-amber-900">Scratch</span>
                  </h1>
                  <p className="text-xl mb-8 text-white/90 max-w-xl">
                    Descoperă programarea într-un mod distractiv și creativ! 
                    Învață să creezi jocuri, animații și povești interactive folosind limbajul vizual Scratch.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button asChild size="lg" className="bg-amber-900 hover:bg-amber-800 text-white">
                    <Link to="/scratch/session1">
                      <span>Prima Lecție</span>
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                    <a href="#curriculum">
                      <span>Vezi curriculum</span>
                    </a>
                  </Button>
                </motion.div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <img 
                    src="https://scratch.mit.edu/images/scratch-og.png" 
                    alt="Scratch Programming Interface" 
                    className="rounded-lg shadow-xl max-w-md w-full"
                  />
                  <div className="absolute -bottom-5 -right-5 bg-amber-400 rounded-full p-4 shadow-lg animate-bounce-slow">
                    <PuzzlePiece className="h-8 w-8 text-amber-900" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* About the Course */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Despre Acest Curs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                O introducere prietenoasă în lumea programării pentru copiii cu vârste între 8-12 ani
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl shadow-md">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <PuzzlePiece className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Programare Vizuală</h3>
                <p className="text-gray-600">
                  Scratch utilizează blocuri colorate care se îmbină precum piesele unui puzzle, 
                  făcând programarea accesibilă și distractivă pentru începători.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl shadow-md">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Proiecte Creative</h3>
                <p className="text-gray-600">
                  Elevii vor crea jocuri, povești animate și proiecte interactive 
                  care pot fi împărtășite cu prietenii și familia.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl shadow-md">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Gândire Computațională</h3>
                <p className="text-gray-600">
                  Dezvoltă abilitățile de rezolvare a problemelor, gândirea logică 
                  și creativitatea prin activități practice.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Curriculum Preview - To be expanded in a future update */}
        <section id="curriculum" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Curriculum</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                12 sesiuni interactive pentru a învăța programare prin joc
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-xl shadow-md max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-yellow-600 mb-6">În curând!</h3>
              <p className="text-gray-600 mb-8">
                Curriculum-ul complet pentru acest curs este în curs de dezvoltare și va fi disponibil în curând. 
                Acesta va include 12 sesiuni interactive care vor acoperi toate conceptele fundamentale de programare în Scratch.
              </p>
              
              <div className="flex justify-center">
                <Button asChild className="bg-yellow-500 hover:bg-yellow-600">
                  <Link to="/" className="flex items-center">
                    <span>Înapoi la pagina principală</span>
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

export default Scratch;
