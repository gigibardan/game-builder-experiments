
import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad, Users, Clock, BookOpen } from 'lucide-react';

const Construct3Overview = () => {
  const features = [
    {
      icon: <Gamepad className="h-8 w-8 text-blue-600" />,
      title: "Dezvoltare Jocuri 2D",
      description: "Creează jocuri 2D captivante fără cod complex"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Pentru Începători",
      description: "Interfață drag-and-drop prietenoasă"
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Dezvoltare Rapidă",
      description: "De la idee la joc în timp record"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Învățare Progresivă",
      description: "Concepte de la simplu la complex"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">De ce Construct 3?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Construct 3 este motorul perfect pentru începători care vor să creeze jocuri 2D 
            profesionale fără să învețe limbaje de programare complexe.
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
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-blue-100 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Ce vei învăța</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Interfața Construct 3
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Sisteme de evenimente
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Animații și efecte
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Publicarea jocurilor
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Optimizarea performanței
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Proiecte complete
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Construct3Overview;
