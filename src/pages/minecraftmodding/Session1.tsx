
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
        <section className="bg-gradient-to-r from-green-600 to-green-400 py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Lecția 1: Introducere în Minecraft Modding
              </h1>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Transformă Minecraft prin crearea propriilor modificări
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-green-700">Ce este Minecraft Modding?</h2>
              <p className="mb-6 text-gray-700">
                Minecraft Modding se referă la procesul de modificare a jocului Minecraft pentru a adăuga
                conținut nou, cum ar fi obiecte, blocuri, mob-uri sau chiar mecanici de joc complet noi. 
                Acest lucru îți permite să personalizezi jocul și să creezi experiențe unice.
              </p>

              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src="https://educationstore.microsoft.com/Content/Images/BrandedProducts/minecraft-mod-and-addon-creation.png" 
                  alt="Minecraft Modding" 
                  className="w-full"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6 text-green-700">De ce să înveți Minecraft Modding?</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Transformă un joc pe care îl cunoști și îl iubești</li>
                <li>Învață principii de programare într-un context familiar</li>
                <li>Dezvoltă creativitatea și gândirea logică</li>
                <li>Înțelege cum funcționează jocurile din interior</li>
                <li>Poți împărtăși creațiile tale cu alți jucători</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-green-700">Ce vom învăța în acest curs</h2>
              <p className="mb-6 text-gray-700">
                În acest curs, vom explora cum să creăm modificări pentru Minecraft folosind Java. 
                Vom începe cu configurarea mediului de dezvoltare și vom avansa treptat spre crearea de
                blocuri personalizate, obiecte, mob-uri și alte elemente care vor îmbogăți jocul.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-green-700">Exercițiu pentru acasă</h3>
                <p className="text-gray-700 mb-4">
                  Asigură-te că ai Minecraft Java Edition instalat și funcțional. Explorează câteva 
                  modificări populare din CurseForge sau Modrinth pentru a te inspira și a înțelege 
                  ce fel de lucruri sunt posibile prin modding.
                </p>
              </div>

              <div className="flex justify-between mt-12">
                <Button asChild variant="outline">
                  <Link to="/minecraftmodding" className="flex items-center">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Înapoi la curs</span>
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/minecraftmodding" className="flex items-center">
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
