
import React from 'react';
import { Rocket } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GDevelopOverview from '@/components/gdevelop/GDevelopOverview';
import GDevelopSessions from '@/components/gdevelop/GDevelopSessions';

const GDevelop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-400 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <div className="inline-block bg-white/20 p-3 rounded-full backdrop-blur-sm mb-4">
                <Rocket className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Fabrica de Jocuri
              </h1>
              <h2 className="text-2xl md:text-3xl mb-4">
                GDevelop
              </h2>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Creează jocuri 2D fără programare folosind sistemul visual de evenimente GDevelop
              </p>
            </div>
          </div>
        </section>
        
        <GDevelopOverview />
        <GDevelopSessions />
      </main>
      
      <Footer />
    </div>
  );
};

export default GDevelop;
