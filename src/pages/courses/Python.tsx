
import React from 'react';
import { Code, Zap, Rocket, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PythonOverview from '@/components/python/PythonOverview';
import PythonSessions from '@/components/python/PythonSessions';

const Python = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Python Style */}
        <section className="relative bg-gradient-to-br from-blue-800 via-blue-600 to-indigo-600 text-white py-20 overflow-hidden">
          {/* Python-style background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          {/* Floating code elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 opacity-20 transform -rotate-12">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg font-mono text-sm">
                print("Hello World!")
              </div>
            </div>
            <div className="absolute top-40 right-20 opacity-20 transform rotate-12">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg font-mono text-sm">
                for i in range(10):
              </div>
            </div>
            <div className="absolute bottom-32 left-1/4 opacity-20 transform rotate-6">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg font-mono text-sm">
                def game():
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="bg-blue-900/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-blue-400/30 shadow-2xl">
                    <Code className="h-20 w-20 text-blue-200" />
                  </div>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  Programare Python
                </h1>
                <h2 className="text-3xl md:text-4xl mb-6 text-blue-100">
                  De la cod la aplicații
                </h2>
                <p className="text-xl md:text-2xl max-w-3xl mb-8 text-blue-50">
                  Învață unul dintre cele mai populare limbaje de programare din lume și creează 
                  aplicații, jocuri și proiecte incredibile. Python te duce de la început la expert!
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="bg-blue-900/40 backdrop-blur-sm border border-blue-400/30 px-6 py-3 rounded-full flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    <span className="font-bold">14 Sesiuni</span>
                  </div>
                  <div className="bg-blue-900/40 backdrop-blur-sm border border-blue-400/30 px-6 py-3 rounded-full flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    <span className="font-bold">Interactiv</span>
                  </div>
                  <div className="bg-blue-900/40 backdrop-blur-sm border border-blue-400/30 px-6 py-3 rounded-full flex items-center">
                    <Rocket className="h-5 w-5 mr-2" />
                    <span className="font-bold">Proiecte</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="relative">
                  {/* Python logo decorative elements */}
                  <div className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-500/20 rounded-full border-2 border-yellow-400/30 opacity-80"></div>
                  <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-blue-500/20 rounded-full border-2 border-blue-400/30 opacity-80"></div>
                  <div className="absolute top-4 -right-12 w-8 h-8 bg-green-500/20 rounded-full border-2 border-green-400/30 opacity-80"></div>
                  
                  <div className="relative bg-blue-900/30 backdrop-blur-sm p-12 rounded-3xl border-2 border-blue-400/30 shadow-2xl">
                    <div className="bg-gradient-to-br from-yellow-400 to-blue-500 p-8 rounded-2xl shadow-2xl">
                      <div className="text-6xl font-bold text-white text-center">
                        Python
                      </div>
                      <div className="text-center mt-4">
                        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                          <Code className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
