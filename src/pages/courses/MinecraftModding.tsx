
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
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-400 text-white py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-green-800 p-4 rounded-full">
                  <Pickaxe className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Creează Lumea Ta</h1>
              <h2 className="text-3xl md:text-4xl mb-4">Minecraft Modding</h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                Transformă jocul tău preferat prin crearea propriilor blocuri, iteme și dimensiuni cu MCreator.
              </p>
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
