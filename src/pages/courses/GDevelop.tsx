
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
        <section className="bg-gradient-to-r from-purple-600 to-purple-400 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left text-white">
                <div className="inline-block bg-white/20 p-4 rounded-full backdrop-blur-sm mb-6">
                  <Rocket className="h-16 w-16 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Fabrica de Jocuri
                </h1>
                <h2 className="text-3xl md:text-4xl mb-6">
                  GDevelop
                </h2>
                <p className="text-xl mb-6 max-w-2xl">
                  Creează jocuri 2D incredibile fără programare folosind sistemul visual de evenimente GDevelop. 
                  De la platformere simple la RPG-uri complexe, totul este posibil!
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-semibold">12-14 Sesiuni</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-semibold">10-16 ani</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-semibold">Fără cod</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm transform rotate-3"></div>
                  <div className="relative bg-white/20 backdrop-blur-sm p-8 rounded-3xl">
                    <img 
                      src="/assets/images/gdevelop/gdevelop-logo.webp" 
                      alt="GDevelop Logo" 
                      className="max-w-md mx-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
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
