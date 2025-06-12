
import React from 'react';
import { Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FrontendDevOverview from '@/components/frontenddev/FrontendDevOverview';
import FrontendDevSessions from '@/components/frontenddev/FrontendDevSessions';

const FrontendDev = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-cyan-400 text-white py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-cyan-800 p-4 rounded-full">
                  <Globe className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Construiește Web-ul Viitorului</h1>
              <h2 className="text-3xl md:text-4xl mb-4">Frontend Development</h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                Învață să creezi site-uri web moderne și interactive cu HTML, CSS și JavaScript.
              </p>
            </div>
          </div>
        </section>
        
        <FrontendDevOverview />
        <FrontendDevSessions />
      </main>
      
      <Footer />
    </div>
  );
};

export default FrontendDev;
