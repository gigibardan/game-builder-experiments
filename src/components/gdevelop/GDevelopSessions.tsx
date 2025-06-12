
import React from 'react';
import SessionCard from '@/components/SessionCard';

const GDevelopSessions = () => {
  const sessions = [
    {
      number: 1,
      title: "Introducere în GDevelop",
      description: "Primii pași în dezvoltarea de jocuri cu GDevelop și înțelegerea interfeței de dezvoltare.",
      link: "/gdevelop/session1",
      isAvailable: true,
      duration: "60 min",
      level: "Începător",
      ageGroup: "10-15 ani",
      highlights: ["Interfața GDevelop", "Evenimente de bază", "Primul joc"],
      color: "purple",
      imageSrc: "/public/assets/images/gdevelop/gdevelop-logo.webp"
    },
    {
      number: 2,
      title: "Concepte avansate",
      description: "Explorarea conceptelor mai avansate în GDevelop pentru crearea de jocuri complexe.",
      link: "/gdevelop/session2",
      isAvailable: true,
      duration: "60 min",
      level: "Începător",
      ageGroup: "10-15 ani",
      highlights: ["Sisteme de evenimente", "Animații", "Efecte vizuale"],
      color: "purple",
      imageSrc: "/public/assets/images/gdevelop/gdevelop-logo.webp"
    },
    {
      number: 3,
      title: "Fizică și coliziuni",
      description: "Implementarea fizicii și gestionarea coliziunilor în jocurile 2D.",
      link: "/gdevelop/session3",
      isAvailable: false,
      duration: "60 min",
      level: "Intermediar",
      ageGroup: "10-15 ani",
      highlights: ["Fizică 2D", "Coliziuni", "Gravity"],
      color: "purple",
      imageSrc: "/public/assets/images/gdevelop/gdevelop-logo.webp"
    },
    {
      number: 4,
      title: "Animații și efecte",
      description: "Crearea animațiilor și efectelor vizuale pentru personaje și medii.",
      link: "/gdevelop/session4",
      isAvailable: false,
      duration: "60 min",
      level: "Intermediar",
      ageGroup: "10-15 ani",
      highlights: ["Animații sprite", "Efecte particule", "Tranziții"],
      color: "purple",
      imageSrc: "/public/assets/images/gdevelop/gdevelop-logo.webp"
    },
    {
      number: 5,
      title: "Sisteme de UI",
      description: "Dezvoltarea interfețelor utilizator și a meniurilor pentru jocuri.",
      link: "/gdevelop/session5",
      isAvailable: false,
      duration: "60 min",
      level: "Intermediar",
      ageGroup: "10-15 ani",
      highlights: ["Meniuri", "HUD", "Butoane interactive"],
      color: "purple",
      imageSrc: "/public/assets/images/gdevelop/gdevelop-logo.webp"
    },
    {
      number: 6,
      title: "Audio și sunet",
      description: "Implementarea sunetului și muzicii în jocurile dezvoltate cu GDevelop.",
      link: "/gdevelop/session6",
      isAvailable: false,
      duration: "60 min",
      level: "Intermediar",
      ageGroup: "10-15 ani",
      highlights: ["Efecte sonore", "Muzică de fundal", "Control audio"],
      color: "purple",
      imageSrc: "/public/assets/images/gdevelop/gdevelop-logo.webp"
    },
    {
      number: 7,
      title: "Platformer simplu",
      description: "Crearea unui joc platformer complet cu GDevelop.",
      link: "/gdevelop/session7",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "10-15 ani",
      highlights: ["Platformer", "Personaj controlabil", "Nivele"],
      color: "purple",
      imageSrc: "/public/assets/images/gdevelop/gdevelop-logo.webp"
    },
    {
      number: 8,
      title: "Joc de tip puzzle",
      description: "Dezvoltarea unui joc puzzle cu mecanici complexe.",
      link: "/gdevelop/session8",
      isAvailable: false,
      duration: "90 min",
      level: "Avansat",
      ageGroup: "12-16 ani",
      highlights: ["Logică puzzle", "Sisteme complexe", "Level design"],
      color: "purple",
      imageSrc: "/public/assets/images/gdevelop/gdevelop-logo.webp"
    },
    {
      number: 9,
      title: "Joc de tip arcade",
      description: "Crearea unui joc arcade cu scoruri și power-ups.",
      link: "/gdevelop/session9",
      isAvailable: false,
      duration: "90 min",
      level: "Avansat",
      ageGroup: "12-16 ani",
      highlights: ["Arcade mechanics", "Scoruri", "Power-ups"],
      color: "purple",
      imageSrc: "/public/assets/images/gdevelop/gdevelop-logo.webp"
    },
    {
      number: 10,
      title: "Optimizare și performanță",
      description: "Tehnici de optimizare pentru jocurile dezvoltate în GDevelop.",
      link: "/gdevelop/session10",
      isAvailable: false,
      duration: "60 min",
      level: "Avansat",
      ageGroup: "12-16 ani",
      highlights: ["Optimizare", "Performance", "Best practices"],
      color: "purple",
      imageSrc: "/public/assets/images/gdevelop/gdevelop-logo.webp"
    },
    {
      number: 11,
      title: "Publicarea jocurilor",
      description: "Cum să publici și să distribui jocurile create cu GDevelop.",
      link: "/gdevelop/session11",
      isAvailable: false,
      duration: "60 min",
      level: "Avansat",
      ageGroup: "12-16 ani",
      highlights: ["Export", "Publishing", "Distribution"],
      color: "purple",
      imageSrc: "/public/assets/images/gdevelop/gdevelop-logo.webp"
    },
    {
      number: 12,
      title: "Extensii și plugin-uri",
      description: "Utilizarea extensiilor și crearea de funcționalități personalizate.",
      link: "/gdevelop/session12",
      isAvailable: false,
      duration: "90 min",
      level: "Avansat",
      ageGroup: "12-16 ani",
      highlights: ["Extensions", "Custom functions", "Advanced features"],
      color: "purple",
      imageSrc: "/public/assets/images/gdevelop/gdevelop-logo.webp"
    },
    {
      number: 13,
      title: "Joc multiplayer local",
      description: "Implementarea funcționalităților multiplayer pentru mai mulți jucători.",
      link: "/gdevelop/session13",
      isAvailable: false,
      duration: "120 min",
      level: "Expert",
      ageGroup: "14-18 ani",
      highlights: ["Multiplayer", "Local gaming", "Player management"],
      color: "purple",
      imageSrc: "/public/assets/images/gdevelop/gdevelop-logo.webp"
    },
    {
      number: 14,
      title: "Proiect final",
      description: "Crearea unui joc complet folosind toate cunoștințele acumulate.",
      link: "/gdevelop/session14",
      isAvailable: false,
      duration: "180 min",
      level: "Expert",
      ageGroup: "14-18 ani",
      highlights: ["Proiect final", "Portfolio", "Game design"],
      color: "purple",
      imageSrc: "/public/assets/images/gdevelop/gdevelop-logo.webp"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sesiunile cursului</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explorează toate sesiunile cursului de GDevelop, de la concepte de bază până la dezvoltarea de jocuri complexe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map((session) => (
            <SessionCard
              key={session.number}
              {...session}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GDevelopSessions;
