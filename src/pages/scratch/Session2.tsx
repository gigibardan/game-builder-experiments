
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { motion } from 'framer-motion';

const Session2 = () => {
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
                Lecția 2: Primele Blocuri în Scratch
              </h1>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Învățăm să lucrăm cu sprite-uri și blocuri de mișcare
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-amber-700">Înțelegerea Sprite-urilor</h2>
              <p className="mb-6 text-gray-700">
                În Scratch, sprite-urile sunt personajele și obiectele din proiectul tău. Ele pot fi controlate
                prin blocuri de cod și pot interacționa între ele. În această lecție, vom învăța cum să adăugăm
                și să manipulăm sprite-uri în proiectele noastre.
              </p>

              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src="https://en.scratch-wiki.info/w/images/thumb/SpritesList.png/450px-SpritesList.png" 
                  alt="Scratch Sprites" 
                  className="w-full"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6 text-amber-700">Blocuri de Mișcare</h2>
              <p className="mb-6 text-gray-700">
                Blocurile de mișcare ne permit să controlăm cum se deplasează sprite-urile pe ecran.
                Vom explora diferitele tipuri de blocuri de mișcare și cum să le combinăm pentru a crea 
                animații și interacțiuni interesante.
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Mutarea în direcții specifice</li>
                <li>Rotirea sprite-urilor</li>
                <li>Deplasarea către puncte sau alte sprite-uri</li>
                <li>Schimbarea stilului de rotație</li>
                <li>Utilizarea coordonatelor x și y</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-amber-700">Proiectul nostru: Pisica Dansatoare</h2>
              <p className="mb-6 text-gray-700">
                În această lecție, vom crea un proiect simplu în care vom face pisica Scratch să danseze
                pe ecran folosind blocurile de mișcare. Vom învăța cum să programăm o secvență de mișcări
                care se repetă într-o buclă.
              </p>

              <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-amber-700">Exercițiu pentru acasă</h3>
                <p className="text-gray-700 mb-4">
                  Extinde proiectul "Pisica Dansatoare" adăugând încă un sprite care să interacționeze
                  cu pisica. Poți face sprite-urile să danseze împreună sau să creezi o mică poveste
                  animată folosind blocurile învățate.
                </p>
              </div>

              <div className="flex justify-between mt-12">
                <Button asChild variant="outline">
                  <Link to="/scratch/session1" className="flex items-center">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Lecția anterioară</span>
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/scratch" className="flex items-center">
                    <span>Înapoi la curs</span>
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

export default Session2;
