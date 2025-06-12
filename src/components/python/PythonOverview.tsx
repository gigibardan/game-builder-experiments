
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Bot, Zap } from 'lucide-react';

const PythonOverview = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Sintaxă Simplă",
      description: "Python are o sintaxă clară și ușor de înțeles, perfectă pentru începători în programare."
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "Analiza Datelor",
      description: "Învață să procesezi și analizezi date folosind biblioteci puternice precum pandas și NumPy."
    },
    {
      icon: <Bot className="h-8 w-8 text-blue-600" />,
      title: "Machine Learning",
      description: "Explorează lumea inteligenței artificiale cu scikit-learn și alte biblioteci ML."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Aplicații Versatile",
      description: "De la web development la automatizare, Python poate face aproape orice."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">De ce să alegi Python?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Python este unul dintre cele mai populare limbaje de programare din lume, 
            folosit de companii precum Google, Netflix și Instagram.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-blue-200 hover:shadow-lg transition-shadow">
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

        <div className="bg-blue-50 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                Obiectivele cursului
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Înțelegerea fundamentelor programării cu Python
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Dezvoltarea gândirii algoritmice și rezolvării problemelor
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Utilizarea bibliotecilor Python pentru proiecte reale
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Explorarea aplicațiilor Python în diverse domenii
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Pregătirea pentru cariera în tehnologie și programare
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-xl font-semibold mb-2 text-blue-900">Durata cursului</h4>
                <p className="text-3xl font-bold text-blue-600 mb-2">14 sesiuni</p>
                <p className="text-gray-600">Aproximativ 21 ore de conținut</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PythonOverview;
