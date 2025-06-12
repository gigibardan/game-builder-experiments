
import React from 'react';
import SessionCard from '@/components/SessionCard';

const GreenfootSessions = () => {
  const sessions = [
    {
      number: 1,
      title: "Introducere în Greenfoot",
      description: "Primii pași în dezvoltarea de jocuri cu Greenfoot și înțelegerea conceptelor de bază ale programării orientate pe obiecte.",
      link: "/greenfoot/session1",
      isAvailable: true,
      duration: "90 min",
      level: "Începător",
      ageGroup: "12-18 ani",
      highlights: ["Interfața Greenfoot", "Actori și lumi", "Primul proiect"],
      color: "orange",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 2,
      title: "Concepte de bază în Java",
      description: "Învățarea conceptelor fundamentale de programare în Java prin intermediul Greenfoot.",
      link: "/greenfoot/session2",
      isAvailable: true,
      duration: "90 min",
      level: "Începător",
      ageGroup: "12-18 ani",
      highlights: ["Variabile", "Metode", "Clase și obiecte"],
      color: "orange",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 3,
      title: "Controlul personajelor",
      description: "Implementarea controlului personajelor și gestionarea input-ului de la utilizator.",
      link: "/greenfoot/session3",
      isAvailable: true,
      duration: "90 min",
      level: "Începător",
      ageGroup: "12-18 ani",
      highlights: ["Input handling", "Mișcare personaje", "Collision detection"],
      color: "orange",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 4,
      title: "Fizică și coliziuni",
      description: "Aplicarea principiilor fizicii și gestionarea coliziunilor în jocurile Greenfoot.",
      link: "/greenfoot/session4",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["Physics simulation", "Collision systems", "Game mechanics"],
      color: "orange",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 5,
      title: "Animații și efecte",
      description: "Crearea animațiilor și efectelor vizuale pentru personaje și obiecte.",
      link: "/greenfoot/session5",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["Sprite animation", "Visual effects", "Smooth movement"],
      color: "orange",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 6,
      title: "Sisteme de punctaj",
      description: "Implementarea sistemelor de punctaj și interfețelor utilizator.",
      link: "/greenfoot/session6",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["Scoring systems", "UI elements", "Game state"],
      color: "orange",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 7,
      title: "Audio și sunet",
      description: "Adăugarea sunetelor și muzicii în jocurile Greenfoot.",
      link: "/greenfoot/session7",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["Sound effects", "Background music", "Audio management"],
      color: "orange",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 8,
      title: "Joc complet 2D",
      description: "Crearea unui joc 2D complet aplicând toate conceptele învățate.",
      link: "/greenfoot/session8",
      isAvailable: false,
      duration: "120 min",
      level: "Avansat",
      ageGroup: "14-18 ani",
      highlights: ["Complete game", "Game loop", "Level design"],
      color: "orange",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 9,
      title: "Algoritmi avansați",
      description: "Implementarea algoritmilor avansați pentru inteligența artificială și pathfinding.",
      link: "/greenfoot/session9",
      isAvailable: false,
      duration: "120 min",
      level: "Avansat",
      ageGroup: "14-18 ani",
      highlights: ["AI algorithms", "Pathfinding", "Game intelligence"],
      color: "orange",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 10,
      title: "Optimizare și performanță",
      description: "Tehnici de optimizare pentru îmbunătățirea performanței jocurilor.",
      link: "/greenfoot/session10",
      isAvailable: false,
      duration: "90 min",
      level: "Avansat",
      ageGroup: "14-18 ani",
      highlights: ["Performance optimization", "Memory management", "Efficient coding"],
      color: "orange",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 11,
      title: "Jocuri multiplayer",
      description: "Implementarea funcționalităților multiplayer în Greenfoot.",
      link: "/greenfoot/session11",
      isAvailable: false,
      duration: "120 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["Multiplayer systems", "Network programming", "Synchronized gameplay"],
      color: "orange",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 12,
      title: "Testare și debugging",
      description: "Tehnici de testare și debugging pentru jocurile Greenfoot.",
      link: "/greenfoot/session12",
      isAvailable: false,
      duration: "90 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["Testing strategies", "Debugging tools", "Quality assurance"],
      color: "orange",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 13,
      title: "Publicarea jocurilor",
      description: "Exportarea și distribuirea jocurilor create în Greenfoot.",
      link: "/greenfoot/session13",
      isAvailable: false,
      duration: "90 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["Game export", "Distribution", "Publishing platforms"],
      color: "orange",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 14,
      title: "Proiect final și portfolio",
      description: "Crearea unui proiect final complet pentru portfolio personal.",
      link: "/greenfoot/session14",
      isAvailable: false,
      duration: "180 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["Final project", "Portfolio", "Game showcase"],
      color: "orange",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sesiunile cursului</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Învață programare orientată pe obiecte prin crearea jocurilor captivante în Java cu Greenfoot.
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

export default GreenfootSessions;
