
import React from 'react';
import SessionCard from '@/components/SessionCard';

const GDevelopSessions = () => {
  const sessions = [
    {
      number: 1,
      title: "Introducere în GDevelop",
      description: "Primii pași în dezvoltarea de jocuri cu GDevelop și înțelegerea sistemului de evenimente.",
      link: "/gdevelop/session1",
      isAvailable: true,
      duration: "90 min",
      level: "Începător",
      ageGroup: "10-18 ani",
      highlights: ["Interfața GDevelop", "Evenimente de bază", "Primul proiect"],
      color: "purple",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 2,
      title: "Obiecte și scene",
      description: "Lucrul cu obiecte, sprite-uri și managementul scenelor în GDevelop.",
      link: "/gdevelop/session2",
      isAvailable: true,
      duration: "90 min",
      level: "Începător",
      ageGroup: "10-18 ani",
      highlights: ["Sprite objects", "Scene management", "Object behaviors"],
      color: "purple",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 3,
      title: "Evenimente și acțiuni",
      description: "Înțelegerea sistemului de evenimente și implementarea acțiunilor în joc.",
      link: "/gdevelop/session3",
      isAvailable: false,
      duration: "90 min",
      level: "Începător",
      ageGroup: "10-18 ani",
      highlights: ["Event system", "Actions", "Conditions"],
      color: "purple",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 4,
      title: "Animații și mișcare",
      description: "Crearea animațiilor și implementarea sistemelor de mișcare pentru personaje.",
      link: "/gdevelop/session4",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "10-18 ani",
      highlights: ["Sprite animations", "Movement systems", "Character control"],
      color: "purple",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 5,
      title: "Coliziuni și fizică",
      description: "Gestionarea coliziunilor și aplicarea principiilor fizicii în jocuri.",
      link: "/gdevelop/session5",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "10-18 ani",
      highlights: ["Collision detection", "Physics engine", "Realistic movement"],
      color: "purple",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 6,
      title: "Interface utilizator",
      description: "Crearea interfețelor utilizator și a meniurilor pentru jocuri.",
      link: "/gdevelop/session6",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "10-18 ani",
      highlights: ["UI design", "Menus", "HUD elements"],
      color: "purple",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 7,
      title: "Audio și efecte",
      description: "Implementarea sunetelor, muzicii și efectelor vizuale în jocuri.",
      link: "/gdevelop/session7",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "10-18 ani",
      highlights: ["Sound effects", "Background music", "Visual effects"],
      color: "purple",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 8,
      title: "Joc platformer complet",
      description: "Crearea unui joc platformer complet cu toate elementele învățate.",
      link: "/gdevelop/session8",
      isAvailable: false,
      duration: "120 min",
      level: "Avansat",
      ageGroup: "12-18 ani",
      highlights: ["Complete platformer", "Level design", "Game mechanics"],
      color: "purple",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 9,
      title: "Variabile și logică",
      description: "Lucrul cu variabile, logica jocului și managementul datelor.",
      link: "/gdevelop/session9",
      isAvailable: false,
      duration: "90 min",
      level: "Avansat",
      ageGroup: "12-18 ani",
      highlights: ["Variables", "Game logic", "Data management"],
      color: "purple",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 10,
      title: "Comportamente avansate",
      description: "Implementarea comportamentelor avansate și a inteligenței artificiale.",
      link: "/gdevelop/session10",
      isAvailable: false,
      duration: "120 min",
      level: "Avansat",
      ageGroup: "12-18 ani",
      highlights: ["Advanced behaviors", "AI systems", "Smart NPCs"],
      color: "purple",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 11,
      title: "Optimizare și performanță",
      description: "Tehnici de optimizare pentru îmbunătățirea performanței jocurilor.",
      link: "/gdevelop/session11",
      isAvailable: false,
      duration: "90 min",
      level: "Avansat",
      ageGroup: "12-18 ani",
      highlights: ["Performance optimization", "Memory management", "Efficient events"],
      color: "purple",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 12,
      title: "Jocuri mobile",
      description: "Adaptarea jocurilor pentru platforme mobile și optimizarea pentru touch.",
      link: "/gdevelop/session12",
      isAvailable: false,
      duration: "120 min",
      level: "Expert",
      ageGroup: "14-18 ani",
      highlights: ["Mobile optimization", "Touch controls", "Responsive design"],
      color: "purple",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 13,
      title: "Publicarea jocurilor",
      description: "Exportarea și publicarea jocurilor pe diferite platforme.",
      link: "/gdevelop/session13",
      isAvailable: false,
      duration: "90 min",
      level: "Expert",
      ageGroup: "14-18 ani",
      highlights: ["Game export", "Publishing", "Distribution platforms"],
      color: "purple",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 14,
      title: "Proiect final și portfolio",
      description: "Crearea unui proiect final complet pentru portfolio personal.",
      link: "/gdevelop/session14",
      isAvailable: false,
      duration: "180 min",
      level: "Expert",
      ageGroup: "14-18 ani",
      highlights: ["Final project", "Portfolio", "Game showcase"],
      color: "purple",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sesiunile cursului</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Creează jocuri 2D captivante fără programare folosind sistemul visual de evenimente GDevelop.
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
