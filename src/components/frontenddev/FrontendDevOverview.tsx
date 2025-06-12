
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Code, Smartphone, Zap } from 'lucide-react';

const FrontendDevOverview = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-cyan-600" />,
      title: "Dezvoltare Web Modernă",
      description: "Învață să creezi site-uri web responsive și interactive folosind cele mai noi tehnologii web."
    },
    {
      icon: <Code className="h-8 w-8 text-cyan-600" />,
      title: "HTML, CSS și JavaScript",
      description: "Stăpânește cele trei limbaje fundamentale ale dezvoltării web frontend."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-cyan-600" />,
      title: "Responsive Design",
      description: "Creează site-uri care arată perfect pe toate dispozitivele, de la telefoane la desktop."
    },
    {
      icon: <Zap className="h-8 w-8 text-cyan-600" />,
      title: "Tehnologii Avansate",
      description: "Explorează framework-uri moderne precum React și instrumente de dezvoltare profesionale."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">De ce să alegi Frontend Development?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dezvoltarea frontend te învață să creezi interfețe web moderne și atractive. 
            Este punctul perfect de plecare pentru o carieră în tehnologie.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-cyan-200 hover:shadow-lg transition-shadow">
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

        <div className="bg-cyan-50 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-900">
                Obiectivele cursului
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Înțelegerea structurii și semanticii HTML
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Stăpânirea CSS pentru design și layout
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Programarea interactivă cu JavaScript
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Crearea site-urilor responsive și accesibile
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Utilizarea instrumentelor și framework-urilor moderne
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-xl font-semibold mb-2 text-cyan-900">Durata cursului</h4>
                <p className="text-3xl font-bold text-cyan-600 mb-2">14 sesiuni</p>
                <p className="text-gray-600">Aproximativ 21 ore de conținut</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontendDevOverview;
