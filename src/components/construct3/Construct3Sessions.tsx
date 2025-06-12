
import React from 'react';
import { motion } from 'framer-motion';
import SessionCard from '@/components/SessionCard';

const Construct3Sessions = () => {
  const sessions = [
    {
      number: 1,
      title: "Introducere în Construct 3",
      description: "Primul pas în dezvoltarea jocurilor 2D",
      link: "/construct3/session1",
      isAvailable: true,
      duration: "2 ore",
      level: "Începător",
      ageGroup: "12-18 ani",
      highlights: ["Interfața Construct 3", "Primul joc", "Sprites și animații"]
    },
    {
      number: 2,
      title: "Sisteme de Evenimente",
      description: "Învață să controlezi comportamentul jocului",
      link: "/construct3/session2",
      isAvailable: false,
      duration: "2 ore",
      level: "Începător",
      ageGroup: "12-18 ani",
      highlights: ["Event System", "Behaviors", "Physics"]
    },
    {
      number: 3,
      title: "Jocuri Complexe",
      description: "Creează jocuri mai avansate cu mecanici speciale",
      link: "/construct3/session3",
      isAvailable: false,
      duration: "3 ore",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["Advanced Mechanics", "UI Systems", "Audio"]
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Lecții Construct 3</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Învață să creezi jocuri 2D profesionale pas cu pas
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
                color="blue-600"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Construct3Sessions;
