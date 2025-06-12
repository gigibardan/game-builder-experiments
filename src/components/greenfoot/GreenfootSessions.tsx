
import React from 'react';
import SessionCard from '@/components/SessionCard';

const GreenfootSessions = () => {
  const sessions = [
    {
      number: 1,
      title: "Introducere în Greenfoot",
      description: "Primii pași în dezvoltarea de jocuri cu Greenfoot și învățarea conceptelor Java.",
      link: "/greenfoot/session1",
      isAvailable: true,
      duration: "90 min",
      level: "Începător",
      ageGroup: "12-18 ani",
      highlights: ["Interfața Greenfoot", "Clase și obiecte", "Primul joc"],
      color: "amber",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 2,
      title: "Programare orientată pe obiecte",
      description: "Înțelegerea conceptelor OOP prin dezvoltarea de jocuri în Greenfoot.",
      link: "/greenfoot/session2",
      isAvailable: true,
      duration: "90 min",
      level: "Începător",
      ageGroup: "12-18 ani",
      highlights: ["OOP concepts", "Inheritance", "Methods"],
      color: "amber",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 3,
      title: "Interacțiuni și coliziuni",
      description: "Implementarea interacțiunilor între obiecte și detectarea coliziunilor.",
      link: "/greenfoot/session3",
      isAvailable: true,
      duration: "90 min",
      level: "Începător",
      ageGroup: "12-18 ani",
      highlights: ["Object interactions", "Collision detection", "Game logic"],
      color: "amber",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 4,
      title: "Animații și mișcare",
      description: "Crearea animațiilor și implementarea diferitelor tipuri de mișcare.",
      link: "/greenfoot/session4",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["Animations", "Movement patterns", "Sprite handling"],
      color: "amber",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 5,
      title: "Control utilizator și input",
      description: "Implementarea controlului utilizator și gestionarea input-ului de la tastatură.",
      link: "/greenfoot/session5",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["User input", "Keyboard controls", "Mouse events"],
      color: "amber",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 6,
      title: "Scoruri și progresie",
      description: "Implementarea sistemelor de scoruri și progresie în jocuri.",
      link: "/greenfoot/session6",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["Scoring systems", "Game progression", "Data management"],
      color: "amber",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 7,
      title: "Joc platformer",
      description: "Crearea unui joc platformer complet cu nivele și obstacole.",
      link: "/greenfoot/session7",
      isAvailable: false,
      duration: "120 min",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["Platformer game", "Level design", "Physics"],
      color: "amber",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 8,
      title: "Joc de tip shooter",
      description: "Dezvoltarea unui joc shooter cu proiectile și inamici.",
      link: "/greenfoot/session8",
      isAvailable: false,
      duration: "120 min",
      level: "Avansat",
      ageGroup: "14-18 ani",
      highlights: ["Shooter mechanics", "Projectiles", "Enemy AI"],
      color: "amber",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 9,
      title: "Inteligență artificială",
      description: "Implementarea AI-ului pentru inamici și NPC-uri în jocuri.",
      link: "/greenfoot/session9",
      isAvailable: false,
      duration: "120 min",
      level: "Avansat",
      ageGroup: "14-18 ani",
      highlights: ["AI programming", "Pathfinding", "Behavior trees"],
      color: "amber",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 10,
      title: "Sunet și muzică",
      description: "Adăugarea efectelor sonore și muzicii în jocurile Greenfoot.",
      link: "/greenfoot/session10",
      isAvailable: false,
      duration: "90 min",
      level: "Avansat",
      ageGroup: "14-18 ani",
      highlights: ["Sound effects", "Background music", "Audio management"],
      color: "amber",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 11,
      title: "Optimizare și debugging",
      description: "Tehnici de optimizare și debugging pentru jocurile Greenfoot.",
      link: "/greenfoot/session11",
      isAvailable: false,
      duration: "90 min",
      level: "Avansat",
      ageGroup: "14-18 ani",
      highlights: ["Code optimization", "Debugging", "Performance"],
      color: "amber",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 12,
      title: "Jocuri complexe",
      description: "Crearea jocurilor complexe cu multiple nivele și funcționalități.",
      link: "/greenfoot/session12",
      isAvailable: false,
      duration: "150 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["Complex games", "Multiple levels", "Advanced features"],
      color: "amber",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 13,
      title: "Extensii și biblioteci",
      description: "Utilizarea extensiilor și bibliotecilor externe în Greenfoot.",
      link: "/greenfoot/session13",
      isAvailable: false,
      duration: "120 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["Extensions", "Libraries", "External tools"],
      color: "amber",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 14,
      title: "Proiect final și portfolio",
      description: "Dezvoltarea unui proiect final complex pentru portfolio personal.",
      link: "/greenfoot/session14",
      isAvailable: false,
      duration: "180 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["Final project", "Portfolio", "Professional development"],
      color: "amber",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sesiunile cursului</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explorează toate sesiunile cursului de Greenfoot, învață Java prin dezvoltarea jocurilor.
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
