
import React from 'react';
import { Gamepad } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SessionCard from '@/components/SessionCard';

const Godot = () => {
  const sessions = [
    {
      number: 1,
      title: "Introducere în Godot Engine",
      description: "Primii pași în dezvoltarea de jocuri cu Godot și înțelegerea interfeței de dezvoltare.",
      link: "/godot/session1",
      isAvailable: true,
      duration: "90 min",
      level: "Începător",
      ageGroup: "12-18 ani",
      highlights: ["Interfața Godot", "Scene și noduri", "Primul proiect"],
      color: "indigo",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 2,
      title: "Concepte de bază în GDScript",
      description: "Învață limbajul GDScript și cum să implementezi funcționalități simple.",
      link: "/godot/session2",
      isAvailable: true,
      duration: "90 min",
      level: "Începător",
      ageGroup: "12-18 ani",
      highlights: ["GDScript basics", "Variables", "Functions"],
      color: "indigo",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 3,
      title: "Fizică și coliziuni",
      description: "Aplicarea fizicii și gestionarea coliziunilor în jocurile 2D.",
      link: "/godot/session3",
      isAvailable: true,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["Physics bodies", "Collision detection", "Signals"],
      color: "indigo",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 4,
      title: "Animații și efecte vizuale",
      description: "Crearea animațiilor și efectelor vizuale pentru personaje și medii.",
      link: "/godot/session4",
      isAvailable: true,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["AnimationPlayer", "Tweens", "Particles"],
      color: "indigo",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 5,
      title: "Sisteme de UI și meniuri",
      description: "Dezvoltarea interfețelor utilizator și a meniurilor pentru jocuri.",
      link: "/godot/session5",
      isAvailable: true,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["Control nodes", "UI design", "Responsive layouts"],
      color: "indigo",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 6,
      title: "Audio și efecte sonore",
      description: "Implementarea sunetului și muzicii în jocurile dezvoltate cu Godot.",
      link: "/godot/session6",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["AudioStreamPlayer", "Sound effects", "Music"],
      color: "indigo",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 7,
      title: "Joc complet 2D",
      description: "Crearea unui joc 2D complet de la zero, aplicând toate conceptele învățate.",
      link: "/godot/session7",
      isAvailable: false,
      duration: "120 min",
      level: "Avansat",
      ageGroup: "14-18 ani",
      highlights: ["Complete game", "Game mechanics", "Polishing"],
      color: "indigo",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 8,
      title: "Introducere în 3D",
      description: "Tranziția de la 2D la 3D: concepte de bază pentru dezvoltarea jocurilor 3D.",
      link: "/godot/session8",
      isAvailable: false,
      duration: "120 min",
      level: "Avansat",
      ageGroup: "14-18 ani",
      highlights: ["3D scenes", "Cameras", "Lighting"],
      color: "indigo",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 9,
      title: "Personaje și animații 3D",
      description: "Crearea și animarea personajelor în mediul 3D Godot.",
      link: "/godot/session9",
      isAvailable: false,
      duration: "120 min",
      level: "Avansat",
      ageGroup: "14-18 ani",
      highlights: ["3D characters", "Rigging", "Animation"],
      color: "indigo",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 10,
      title: "Materiale și texturi",
      description: "Aplicarea materialelor și texturilor pentru jocuri 3D realiste.",
      link: "/godot/session10",
      isAvailable: false,
      duration: "90 min",
      level: "Avansat",
      ageGroup: "14-18 ani",
      highlights: ["Materials", "Textures", "Shaders"],
      color: "indigo",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 11,
      title: "Optimizare și performanță",
      description: "Tehnici de optimizare pentru jocurile Godot pe diverse platforme.",
      link: "/godot/session11",
      isAvailable: false,
      duration: "90 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["Performance", "Optimization", "Profiling"],
      color: "indigo",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 12,
      title: "Networking și multiplayer",
      description: "Implementarea funcționalităților multiplayer în Godot.",
      link: "/godot/session12",
      isAvailable: false,
      duration: "120 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["Networking", "Multiplayer", "Servers"],
      color: "indigo",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 13,
      title: "Publicarea jocurilor",
      description: "Exportarea și publicarea jocurilor pe diferite platforme.",
      link: "/godot/session13",
      isAvailable: false,
      duration: "90 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["Export", "Publishing", "Distribution"],
      color: "indigo",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 14,
      title: "Proiect final și portfolio",
      description: "Crearea unui proiect final complet pentru portfolio personal.",
      link: "/godot/session14",
      isAvailable: false,
      duration: "180 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["Final project", "Portfolio", "Game design"],
      color: "indigo",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-900 p-4 rounded-full">
                  <Gamepad className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Game Development Pro</h1>
              <h2 className="text-3xl md:text-4xl mb-4">Godot</h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                Dezvoltă jocuri profesionale 2D și 3D cu un motor de joc avansat și gratuit.
              </p>
            </div>
          </div>
        </section>
        
        {/* Sessions Grid */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Sesiunile cursului</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Învață pas cu pas cum să dezvolți jocuri complexe cu Godot Engine, de la elementele de bază până la crearea unui joc complet.
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Godot;
