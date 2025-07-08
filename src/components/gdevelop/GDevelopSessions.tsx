
import React from 'react';
import SessionCard from '@/components/SessionCard';

const GDevelopSessions = () => {
  const sessions = [
    {
      number: 1,
      title: "Shoter Game - Apără-te de inamici",
      description: "Creează un shooter game în care te aperi de inamicii roboți care vin spre tine.",
      link: "/gdevelop/session1",
      isAvailable: true,
      duration: "90 min",
      level: "Începător",
      ageGroup: "10-16 ani",
      highlights: ["Interfața GDevelop", "Evenimente de bază", "Primul proiect"],
      color: "purple",
      imageSrc: "/assets/images/gdevelop/preview-shoter.png"
    },
    {
      number: 2,
      title: "Drag and Drop - Trage obiectele colorate în forma lor",
      description: "Creează un joc simplu, de bază, de tip Drag and Drop. Joacă și exersează!",
      link: "/gdevelop/session2",
      isAvailable: true,
      duration: "90 min",
      level: "Începător",
      ageGroup: "10-16 ani",
      highlights: ["Sprite objects", "Scene management", "Object behaviors"],
      color: "purple",
      imageSrc: "/assets/images/gdevelop/preview-dad.png"
    },
    {
      number: 3,
      title: "Bumpy Platformer - Evadarea din Fabrica de Roboți",
      description: "Creează un joc de tip platformer, simplu și distractiv!",
      link: "/gdevelop/session3",
      isAvailable: true,
      duration: "90 min",
      level: "Începător",
      ageGroup: "10-16 ani",
      highlights: ["Event system", "Actions", "Conditions"],
      color: "purple",
      imageSrc: "/assets/images/gdevelop/BumpyPlatformer/Preview.png"
    },
    {
      number: 4,
      title: "Road Rider - Aventura pe Autostradă",
      description: "Creează un joc de curse infinite runner cu sistem complex de trafic și efecte vizuale.",
      link: "/gdevelop/session4",
      isAvailable: true,
      duration: "120 min",
      level: "Intermediar",
      ageGroup: "10-16 ani",
      highlights: ["Infinite runner", "Sistem de trafic", "Controlul cu săgețile", "Efecte de explozie"],
      color: "purple",
      imageSrc: "/assets/images/gdevelop/RoadRider/Imagine-din-joc.png"
    },
    {
      number: 5,
      title: "Tanks Battle - Bătălia Supremă",
      description: "Creează un joc de tip tower defense cu tancuri, AI pentru inamici și sistem complex de coliziuni.",
      link: "/gdevelop/session5",
      isAvailable: true,
      duration: "120 min",
      level: "Intermediar",
      ageGroup: "10-16 ani",
      highlights: ["Tower defense static", "AI urmărire inamici", "Extensii externe", "Explozii spectaculoase"],
      color: "purple",
      imageSrc: "/assets/images/gdevelop/TanksBattle/imagine-din-joc.png"
    },
    {
      number: 6,
      title: "Geometry Monster - Aventura Mobilă",
      description: "Primul tău joc mobil complet cu extensii avansate, particle systems și control touch optimizat.",
      link: "/gdevelop/session6",
      isAvailable: true,
      duration: "150 min",
      level: "Avansat",
      ageGroup: "12-16 ani",
      highlights: ["Joc mobil 640x960", "Extensii avansate", "Particle systems", "3 scene cu navigare", "Health system"],
      color: "purple",
      imageSrc: "/assets/images/gdevelop/GeometryMonster/previewgeometry.png"
    },
    {
      number: 7,
      title: "Audio și efecte",
      description: "Implementarea sunetelor, muzicii și efectelor vizuale în jocuri.",
      link: "/gdevelop/session7",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "10-16 ani",
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
      ageGroup: "12-16 ani",
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
      ageGroup: "12-16 ani",
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
      ageGroup: "12-16 ani",
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
      ageGroup: "12-16 ani",
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
