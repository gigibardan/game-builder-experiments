
import React from 'react';
import { Image } from '@/components/ui/image';

const MinecraftProjects = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Exemple de proiecte create de elevi</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image 
                src="https://static.planetminecraft.com/files/resource_media/screenshot/1632/2016-08-13_205842-10476855.png" 
                alt="Dimensiune personalizată"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Dimensiune Floating Islands</h3>
              <p className="text-gray-600 text-sm">Insulele plutitoare cu biome personalizate și structuri generate.</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image 
                src="https://static.planetminecraft.com/files/resource_media/screenshot/1938/screenshot-2019-09-22-at-204526-1569196151.png" 
                alt="Set de armuri"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Set de armuri elementale</h3>
              <p className="text-gray-600 text-sm">Armuri cu proprietăți magice pentru foc, apă, aer și pământ.</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image 
                src="https://static.planetminecraft.com/files/resource_media/screenshot/1726/2017-07-01-17-54-03-1498926666.png" 
                alt="Craftinguri noi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Arme magice și rețete noi</h3>
              <p className="text-gray-600 text-sm">Săbii cu efecte speciale și rețete de crafting personalizate.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinecraftProjects;
