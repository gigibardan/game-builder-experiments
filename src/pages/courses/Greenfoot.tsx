
import React from 'react';
import { Coffee } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GreenfootOverview from '@/components/greenfoot/GreenfootOverview';
import GreenfootSessions from '@/components/greenfoot/GreenfootSessions';

const Greenfoot = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-400 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <div className="inline-block bg-white/20 p-3 rounded-full backdrop-blur-sm mb-4">
                <Coffee className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Java prin Jocuri
              </h1>
              <h2 className="text-2xl md:text-3xl mb-4">
                Greenfoot
              </h2>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Învață programare orientată pe obiecte prin crearea jocurilor în Java
              </p>
            </div>
          </div>
        </section>
        
        <GreenfootOverview />
        <GreenfootSessions />
      </main>
      
      <Footer />
    </div>
  );
};

export default Greenfoot;
