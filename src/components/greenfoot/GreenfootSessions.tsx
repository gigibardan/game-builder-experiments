
import React from 'react';
import { motion } from 'framer-motion';
import SessionCard from '@/components/SessionCard';

const GreenfootSessions = () => {
  const sessions = [
    {
      number: 1,
      title: "Introducere în Greenfoot",
      description: "Învață Java prin crearea jocurilor interactive",
      link: "/greenfoot/session1",
      isAvailable: true,
      duration: "2 ore",
      level: "Începător",
      ageGroup: "14-18 ani",
      highlights: ["Java Basics", "Greenfoot Interface", "Creating Objects"]
    },
    {
      number: 2,
      title: "Clase și Obiecte în Java",
      description: "Descoperă fundamentele programării orientate pe obiecte",
      link: "/greenfoot/session2",
      isAvailable: true,
      duration: "2 ore",
      level: "Începător",
      ageGroup: "14-18 ani",
      highlights: ["OOP Concepts", "Classes", "Objects", "Methods"]
    },
    {
      number: 3,
      title: "Moștenire și Polimorfism",
      description: "Concepte avansate în programarea orientată pe obiecte",
      link: "/greenfoot/session3",
      isAvailable: true,
      duration: "2 ore",
      level: "Intermediar",
      ageGroup: "14-18 ani",
      highlights: ["Inheritance", "Polymorphism", "Method Overriding"]
    },
    {
      number: 4,
      title: "Construcția unui Joc Complet",
      description: "Aplicarea conceptelor Java pentru a crea un joc funcțional",
      link: "/greenfoot/session4",
      isAvailable: false,
      duration: "3 ore",
      level: "Avansat",
      ageGroup: "14-18 ani",
      highlights: ["Game Loop", "Collision Detection", "Game State"]
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Lecții Java cu Greenfoot</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Învață programare Java pas cu pas prin crearea de jocuri interactive
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SessionCard
                number={session.number}
                title={session.title}
                description={session.description}
                link={session.link}
                isAvailable={session.isAvailable}
                duration={session.duration}
                level={session.level}
                ageGroup={session.ageGroup}
                highlights={session.highlights}
                color="orange-600"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GreenfootSessions;
