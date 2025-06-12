
import React from 'react';
import { Pickaxe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MinecraftModdingOverview from '@/components/minecraftmodding/MinecraftModdingOverview';
import MinecraftModdingSessions from '@/components/minecraftmodding/MinecraftModdingSessions';

const MinecraftModding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Minecraft Style */}
        <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 text-white py-20 overflow-hidden">
          {/* Minecraft-style background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40v40z'/%3E%3Cpath d='m40 0v40l-40-40z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="bg-green-800/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-green-400/30 shadow-2xl">
                    <Pickaxe className="h-20 w-20 text-green-200" />
                  </div>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-shadow-lg">
                  Creează Lumea Ta
                </h1>
                <h2 className="text-3xl md:text-4xl mb-6 text-green-100">
                  Minecraft Modding
                </h2>
                <p className="text-xl md:text-2xl max-w-3xl mb-8 text-green-50">
                  Transformă jocul tău preferat prin crearea propriilor blocuri, iteme și dimensiuni cu MCreator. 
                  Construiește mod-uri incredibile fără să scrii o singură linie de cod!
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="bg-green-800/40 backdrop-blur-sm border border-green-400/30 px-6 py-3 rounded-full">
                    <span className="font-bold text-lg">14 Sesiuni</span>
                  </div>
                  <div className="bg-green-800/40 backdrop-blur-sm border border-green-400/30 px-6 py-3 rounded-full">
                    <span className="font-bold text-lg">MCreator</span>
                  </div>
                  <div className="bg-green-800/40 backdrop-blur-sm border border-green-400/30 px-6 py-3 rounded-full">
                    <span className="font-bold text-lg">Java Edition</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="relative">
                  {/* Minecraft-style decorative blocks */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-brown-600 border-2 border-brown-400 rounded-lg opacity-80 transform rotate-12"></div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gray-600 border-2 border-gray-400 rounded-lg opacity-80 transform -rotate-12"></div>
                  <div className="absolute top-8 -right-8 w-8 h-8 bg-blue-600 border-2 border-blue-400 rounded-lg opacity-80 transform rotate-45"></div>
                  
                  <div className="relative bg-green-800/30 backdrop-blur-sm p-8 rounded-3xl border-2 border-green-400/30 shadow-2xl">
                    <img 
                      src="/assets/images/mcreator/minecraft-logo.webp" 
                      alt="Minecraft Modding" 
                      className="max-w-md mx-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <MinecraftModdingOverview />
        <MinecraftModdingSessions />
      </main>
      
      <Footer />
    </div>
  );
};

export default MinecraftModding;
