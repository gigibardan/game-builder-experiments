
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
        <section className="bg-gradient-to-r from-red-600 to-orange-500 py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Lecția 1: Introducere în Roblox Lua
              </h1>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Primii pași în dezvoltarea jocurilor pe platforma Roblox
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-red-700">Ce este Roblox Studio?</h2>
              <p className="mb-6 text-gray-700">
                Roblox Studio este un mediu de dezvoltare gratuit care îți permite să creezi jocuri pentru
                platforma Roblox. Cu ajutorul limbajului de programare Lua, poți dezvolta experiențe interactive
                care pot fi jucate de milioane de utilizatori din întreaga lume.
              </p>

              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src="https://t3.ftcdn.net/jpg/03/96/36/62/360_F_396366219_dFXK0m1PKIGfJaDZ8WQUZv0nJKVBfKDC.jpg" 
                  alt="Roblox Studio Interface" 
                  className="w-full"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6 text-red-700">De ce să înveți Roblox Lua?</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Platformă cu peste 150 de milioane de utilizatori activi lunar</li>
                <li>Posibilitatea de a câștiga bani reali din creațiile tale</li>
                <li>Combină modelarea 3D cu programare</li>
                <li>Comunitate mare de dezvoltatori și resurse de învățare</li>
                <li>Publicare instantanee a jocurilor tale pentru întreaga lume</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-red-700">Ce vom învăța în acest curs</h2>
              <p className="mb-6 text-gray-700">
                În acest curs, vom explora Roblox Studio și limbajul de programare Lua pentru a crea 
                jocuri captivante. Vom începe cu configurarea mediului și vom avansa spre concepte 
                avansate precum fizica, sistemele de joc, monetizare și optimizare.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-red-700">Exercițiu pentru acasă</h3>
                <p className="text-gray-700 mb-4">
                  Descarcă și instalează Roblox Studio de pe site-ul oficial (create.roblox.com/dashboard). 
                  Explorează interfața și încearcă să deschizi câteva template-uri pentru a înțelege 
                  structura de bază a unui joc Roblox.
                </p>
              </div>

              <div className="flex justify-between mt-12">
                <Button asChild variant="outline">
                  <Link to="/robloxlua" className="flex items-center">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Înapoi la curs</span>
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/robloxlua" className="flex items-center">
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
