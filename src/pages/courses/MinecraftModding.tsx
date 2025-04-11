
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MinecraftHero from '@/components/minecraft/MinecraftHero';
import MinecraftOverview from '@/components/minecraft/MinecraftOverview';
import MinecraftSessions from '@/components/minecraft/MinecraftSessions';
import MinecraftProjects from '@/components/minecraft/MinecraftProjects';

const MinecraftModding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <MinecraftHero />
        <MinecraftOverview />
        <MinecraftSessions />
        <MinecraftProjects />
      </main>
      
      <Footer />
    </div>
  );
};

export default MinecraftModding;
