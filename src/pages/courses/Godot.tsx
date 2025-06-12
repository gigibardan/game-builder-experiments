
import React from 'react';
import { Gamepad } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GodotOverview from '@/components/godot/GodotOverview';
import GodotSessions from '@/components/godot/GodotSessions';

const Godot = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-900 p-4 rounded-full">
                  <Gamepad className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Game Development Pro</h1>
              <h2 className="text-3xl md:text-4xl mb-4">Godot</h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                Dezvoltă jocuri profesionale 2D și 3D cu un motor de joc avansat și gratuit.
              </p>
            </div>
          </div>
        </section>
        
        <GodotOverview />
        <GodotSessions />
      </main>
      
      <Footer />
    </div>
  );
};

export default Godot;
