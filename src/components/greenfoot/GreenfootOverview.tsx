
import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Code, BookOpen, PenTool, Award } from 'lucide-react';

const GreenfootOverview = () => {
  const features = [
    {
      icon: <Coffee className="h-10 w-10 text-orange-600" />,
      title: "Java pentru începători",
      description: "Învață unul dintre cele mai populare limbaje de programare într-un mod accesibil și vizual."
    },
    {
      icon: <Code className="h-10 w-10 text-orange-600" />,
      title: "Programare orientată pe obiecte",
      description: "Descoperă conceptele OOP esențiale precum clase, obiecte, moștenire și polimorfism."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-orange-600" />,
      title: "De la jucător la creator",
      description: "Transformă-te din consumator de jocuri în creator, învățând principiile dezvoltării de jocuri."
    },
    {
      icon: <PenTool className="h-10 w-10 text-orange-600" />,
      title: "Învățare interactivă",
      description: "Experimentează cu codul în timp real și vezi rezultatele imediat în mediul vizual Greenfoot."
    }
  ];

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">De ce să înveți Java cu Greenfoot?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Greenfoot este un mediu de dezvoltare creat special pentru educație, care face programarea Java
            accesibilă și distractivă prin dezvoltarea de jocuri și simulări interactive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-lg shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <Award className="h-16 w-16 text-orange-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Ce vei învăța</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="bg-orange-100 text-orange-600 rounded-full p-1 mr-2">✓</span>
                    Sintaxa și structura limbajului Java
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="bg-orange-100 text-orange-600 rounded-full p-1 mr-2">✓</span>
                    Variabile, tipuri de date și operatori
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="bg-orange-100 text-orange-600 rounded-full p-1 mr-2">✓</span>
                    Structuri de control (if, for, while)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="bg-orange-100 text-orange-600 rounded-full p-1 mr-2">✓</span>
                    Funcții și metode
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="bg-orange-100 text-orange-600 rounded-full p-1 mr-2">✓</span>
                    Clase și obiecte
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="bg-orange-100 text-orange-600 rounded-full p-1 mr-2">✓</span>
                    Moștenire și polimorfism
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="bg-orange-100 text-orange-600 rounded-full p-1 mr-2">✓</span>
                    Încapsulare și abstractizare
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="bg-orange-100 text-orange-600 rounded-full p-1 mr-2">✓</span>
                    Principii de dezvoltare a jocurilor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GreenfootOverview;
