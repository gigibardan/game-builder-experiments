
import React from 'react';
import SessionCard from '@/components/SessionCard';

const MinecraftSessions = () => {
  const sessions = [
    {
      number: 1,
      title: "Introducere în Minecraft Modding",
      description: "Descoperă ce înseamnă să creezi modificări pentru Minecraft și configurează mediul de dezvoltare.",
      link: "/minecraftmodding/session1",
      isAvailable: true,
      color: "green-600",
      duration: "45 min",
      level: "Începător",
      ageGroup: "12-16 ani",
      highlights: [
        "Introducere în MCreator",
        "Configurare mediu",
        "Concepte de bază"
      ]
    },
    {
      number: 2,
      title: "Primul tău addon: Armură de rubin",
      description: "Învață să creezi o nouă armură și să definești proprietățile acesteia în joc.",
      link: "/minecraftmodding/ruby-armor",
      isAvailable: true,
      color: "green-600",
      duration: "60 min",
      level: "Începător",
      ageGroup: "12-16 ani",
      highlights: [
        "Definirea materialelor",
        "Crearea texturii",
        "Configurarea proprietăților",
        "Testarea în joc"
      ]
    },
    {
      number: 3,
      title: "Creează un dimensiune nouă: Tărâmul de cristal",
      description: "Construiește o lume nouă cu propriile reguli, blocuri și structuri.",
      link: "/minecraftmodding/crystal-realm",
      isAvailable: true,
      color: "green-600",
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-16 ani",
      highlights: [
        "Definire dimensiune",
        "Generare de teren",
        "Blocuri personalizate",
        "Structuri procedurale"
      ]
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Lecții și proiecte</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sessions.map((session) => (
            <SessionCard 
              key={session.number}
              number={session.number}
              title={session.title}
              description={session.description}
              link={session.link}
              isAvailable={session.isAvailable}
              color={session.color}
              duration={session.duration}
              level={session.level}
              ageGroup={session.ageGroup}
              highlights={session.highlights}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinecraftSessions;
