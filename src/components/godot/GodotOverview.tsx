
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gamepad, Code, Lightbulb, Trophy } from 'lucide-react';

const GodotOverview = () => {
  const features = [
    {
      icon: <Gamepad className="h-8 w-8 text-indigo-600" />,
      title: "Dezvoltare Profesională",
      description: "Învață să creezi jocuri 2D și 3D cu un motor de joc avansat și gratuit folosit de dezvoltatori din întreaga lume."
    },
    {
      icon: <Code className="h-8 w-8 text-indigo-600" />,
      title: "GDScript și C#",
      description: "Stăpânește limbajul GDScript specific Godot și explorează opțiunile avansate cu C# pentru proiecte complexe."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-indigo-600" />,
      title: "Scene și Noduri",
      description: "Înțelege arhitectura unică a Godot bazată pe scene și noduri pentru organizarea eficientă a proiectelor."
    },
    {
      icon: <Trophy className="h-8 w-8 text-indigo-600" />,
      title: "Proiecte Reale",
      description: "Creează jocuri complete funcționale care pot fi publicate pe multiple platforme."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">De ce să alegi Godot?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Godot Engine este un motor de joc open-source care oferă o abordare modernă și flexibilă pentru dezvoltarea jocurilor. 
            Perfect pentru începători și profesioniști deopotrivă.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-indigo-200 hover:shadow-lg transition-shadow">
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

        <div className="bg-indigo-50 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-900">
                Obiectivele cursului
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Înțelegerea fundamentelor dezvoltării de jocuri cu Godot Engine
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Stăpânirea limbajului GDScript și a conceptelor de programare
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Crearea jocurilor 2D și 3D funcționale și atractive
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Implementarea sistemelor complexe: AI, physics, audio
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Publicarea și distribuirea jocurilor pe multiple platforme
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-xl font-semibold mb-2 text-indigo-900">Durata cursului</h4>
                <p className="text-3xl font-bold text-indigo-600 mb-2">14 sesiuni</p>
                <p className="text-gray-600">Aproximativ 21 ore de conținut</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GodotOverview;
