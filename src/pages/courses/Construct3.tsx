
import React from 'react';
import { Gamepad } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Construct3Overview from '@/components/construct3/Construct3Overview';
import Construct3Sessions from '@/components/construct3/Construct3Sessions';

const Construct3 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <div className="inline-block bg-white/20 p-3 rounded-full backdrop-blur-sm mb-4">
                <Gamepad className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Dezvoltare de Jocuri 2D
              </h1>
              <h2 className="text-2xl md:text-3xl mb-4">
                Construct 3
              </h2>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Învață să creezi jocuri 2D captivante fără a avea nevoie de cunoștințe avansate de programare
              </p>
            </div>
          </div>
        </section>
        
        <Construct3Overview />
        <Construct3Sessions />
      </main>
      
      <Footer />
    </div>
  );
};

export default Construct3;
