
import React from 'react';
import { Code } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PythonOverview from '@/components/python/PythonOverview';
import PythonSessions from '@/components/python/PythonSessions';

const Python = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-800 p-4 rounded-full">
                  <Code className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Programare Python</h1>
              <h2 className="text-3xl md:text-4xl mb-4">De la cod la aplicații</h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                Învață unul dintre cele mai populare limbaje de programare din lume și creează aplicații incredibile.
              </p>
            </div>
          </div>
        </section>
        
        <PythonOverview />
        <PythonSessions />
      </main>
      
      <Footer />
    </div>
  );
};

export default Python;
