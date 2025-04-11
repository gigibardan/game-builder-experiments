
import React from 'react';
import { Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

const MinecraftOverview = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Despre acest curs</h2>
              <p className="mb-4 text-gray-700">
                Cursul de Minecraft Modding este conceput pentru tinerii pasionați de Minecraft care doresc să treacă 
                de la simpli jucători la creatori de conținut. Vei învăța să creezi propriile blocuri, 
                iteme, creaturi și chiar dimensiuni folosind MCreator, un instrument vizual care face modding-ul 
                accesibil și pentru cei fără experiență în programare.
              </p>
              <p className="mb-4 text-gray-700">
                Pe parcursul cursului, vei dezvolta abilități de design, vei înțelege concepte fundamentale de 
                dezvoltare de jocuri și vei avea oportunitatea de a-ți împărtăși creațiile cu comunitatea Minecraft.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-green-700">Ce vei învăța:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li className="flex items-start">
                  <Box className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Crearea de blocuri personalizate</span>
                </li>
                <li className="flex items-start">
                  <Box className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Adăugarea de iteme și unelte noi</span>
                </li>
                <li className="flex items-start">
                  <Box className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Designul armurilor și texturilor</span>
                </li>
                <li className="flex items-start">
                  <Box className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Generare de structuri și lumi</span>
                </li>
                <li className="flex items-start">
                  <Box className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Crearea de creaturi și entități</span>
                </li>
                <li className="flex items-start">
                  <Box className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Publicarea și distribuirea mod-urilor</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/3">
              <Card className="overflow-hidden border-green-200 shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src="https://www.minecraft.net/content/dam/minecraft/community-content/minecraft-with-ray-tracing-beta-screenshot-landscape.jpg" 
                    alt="Minecraft Landscape" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Durata: 8 săptămâni
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Nivel</h3>
                      <p className="font-medium">Intermediar</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Vârstă recomandată</h3>
                      <p className="font-medium">12-16 ani</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Cerințe</h3>
                      <p className="text-sm">
                        Minecraft Java Edition, un computer cu Windows/Mac/Linux, cunoștințe de bază despre Minecraft
                      </p>
                    </div>
                    
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                      <Link to="/minecraftmodding/session1">
                        Începe cursul
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinecraftOverview;
