
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
        <section className="bg-gradient-to-r from-red-600 to-red-400 py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Lecția 1: Introducere în micro:bit Arcade
              </h1>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Primii pași în combinarea programării cu electronica
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-red-700">Ce este micro:bit Arcade?</h2>
              <p className="mb-6 text-gray-700">
                micro:bit este un mini-calculator programabil creat special pentru educație. 
                Cu micro:bit Arcade, vei învăța să creezi jocuri interactive care pot rula pe 
                dispozitivul fizic, combinând astfel programarea cu electronica într-un mod distractiv.
              </p>

              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src="https://microbit.org/images/microbit-hardware-access.jpg" 
                  alt="micro:bit hardware" 
                  className="w-full"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6 text-red-700">De ce să înveți micro:bit Arcade?</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Combină programarea cu electronica într-un mod accesibil</li>
                <li>Învață programare vizuală cu blocuri (ca în Scratch)</li>
                <li>Creează jocuri și proiecte interactive fizice</li>
                <li>Înțelege concepte de electronică și senzori</li>
                <li>Dezvoltă abilități practice pentru viitor</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-red-700">Ce vom învăța în acest curs</h2>
              <p className="mb-6 text-gray-700">
                În acest curs, vom descoperi cum să creăm jocuri interactive folosind platforma micro:bit. 
                Vom învăța să programăm afișajul LED, să folosim butoanele și senzorii, și să creăm 
                jocuri simple care pot fi jucate direct pe dispozitivul micro:bit.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-red-700">Exercițiu pentru acasă</h3>
                <p className="text-gray-700 mb-4">
                  Explorează MakeCode pentru micro:bit (makecode.microbit.org) și familiarizează-te cu 
                  editorul. Încearcă să execuți câteva exemple de proiecte și observă cum funcționează.
                </p>
              </div>

              <div className="flex justify-between mt-12">
                <Button asChild variant="outline">
                  <Link to="/microbitarcade" className="flex items-center">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Înapoi la curs</span>
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/microbitarcade" className="flex items-center">
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
