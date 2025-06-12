
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Box, Hammer, Zap, Users } from 'lucide-react';

const MinecraftModdingOverview = () => {
  const features = [
    {
      icon: <Box className="h-8 w-8 text-green-600" />,
      title: "Creativitate Nelimitată",
      description: "Adaugă blocuri, iteme, creaturi și dimensiuni complet noi în jocul tău preferat."
    },
    {
      icon: <Hammer className="h-8 w-8 text-green-600" />,
      title: "Fără Programare",
      description: "Folosește MCreator pentru a crea mod-uri complexe fără să scrii cod Java."
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Funcționalități Avansate",
      description: "Implementează sisteme complexe precum magie, GUI-uri și AI pentru creaturi."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Comunitate Activă",
      description: "Împărtășește creațiile tale cu milioane de jucători Minecraft din lume."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">De ce să alegi Minecraft Modding?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transformă-te de la jucător la creator și descoperă magia din spatele unuia dintre 
            cele mai populare jocuri din lume.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-green-50 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-900">
                Obiectivele cursului
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Înțelegerea fundamentelor modding-ului Minecraft
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Stăpânirea platformei MCreator pentru dezvoltare vizuală
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Crearea de conținut original și inovativ pentru Minecraft
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Dezvoltarea abilităților de design și creativitate digitală
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Împărtășirea creațiilor cu comunitatea Minecraft
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-xl font-semibold mb-2 text-green-900">Durata cursului</h4>
                <p className="text-3xl font-bold text-green-600 mb-2">14 sesiuni</p>
                <p className="text-gray-600">Aproximativ 19 ore de conținut</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinecraftModdingOverview;
