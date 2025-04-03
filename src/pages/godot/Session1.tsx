
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
        <section className="bg-gradient-to-r from-indigo-700 to-indigo-500 py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Lecția 1: Introducere în Godot Engine
              </h1>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Primii pași în dezvoltarea jocurilor profesionale 2D și 3D
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-indigo-700">Ce este Godot Engine?</h2>
              <p className="mb-6 text-gray-700">
                Godot este un motor de jocuri open-source și complet gratuit care îți permite să creezi 
                jocuri 2D și 3D profesionale. Oferă un set complet de instrumente comune și este 
                conceput pentru a facilita munca dezvoltatorilor de jocuri prin procesul său intuitiv.
              </p>

              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src="https://godotengine.org/assets/press/logo_large_color_light.png" 
                  alt="Godot Engine Logo" 
                  className="w-full"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6 text-indigo-700">De ce să înveți Godot?</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Motor de jocuri gratuit și open-source, fără taxe sau redevențe</li>
                <li>Suport pentru dezvoltare 2D și 3D</li>
                <li>Editor integrat complet cu funcționalități extensive</li>
                <li>Limbaj de scripting GDScript ușor de învățat (similar cu Python)</li>
                <li>Dimensiune redusă și performanță excelentă</li>
                <li>Comunitate activă și prietenoasă</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-indigo-700">Ce vom învăța în acest curs</h2>
              <p className="mb-6 text-gray-700">
                În acest curs, vom explora dezvoltarea de jocuri folosind Godot Engine. 
                Vom învăța interfața, sistemul de noduri, programarea în GDScript, 
                fizica și animațiile, sunetul și multe altele. Până la sfârșitul cursului, 
                vei avea cunoștințele necesare pentru a crea propriile jocuri.
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-indigo-700">Exercițiu pentru acasă</h3>
                <p className="text-gray-700 mb-4">
                  Descarcă și instalează Godot Engine de pe site-ul oficial (godotengine.org). 
                  Explorează interfața și familiarizează-te cu editorul. Încearcă să deschizi și să 
                  rulezi unul dintre proiectele demo incluse.
                </p>
              </div>

              <div className="flex justify-between mt-12">
                <Button asChild variant="outline">
                  <Link to="/godot" className="flex items-center">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Înapoi la curs</span>
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/godot" className="flex items-center">
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
