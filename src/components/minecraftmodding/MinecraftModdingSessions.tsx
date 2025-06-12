
import React from 'react';
import SessionCard from '@/components/SessionCard';

const MinecraftModdingSessions = () => {
  const sessions = [
    {
      number: 1,
      title: "Introducere în Minecraft Modding",
      description: "Descoperă ce înseamnă să creezi modificări pentru Minecraft și configurează mediul de dezvoltare.",
      link: "/minecraftmodding/session1",
      isAvailable: true,
      duration: "45 min",
      level: "Începător",
      ageGroup: "12-16 ani",
      highlights: ["Introducere în MCreator", "Configurare mediu", "Concepte de bază"],
      color: "green",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 2,
      title: "Primul tău addon: Armură de rubin",
      description: "Învață să creezi o nouă armură și să definești proprietățile acesteia în joc.",
      link: "/minecraftmodding/ruby-armor",
      isAvailable: true,
      duration: "60 min",
      level: "Începător",
      ageGroup: "12-16 ani",
      highlights: ["Definirea materialelor", "Crearea texturii", "Configurarea proprietăților"],
      color: "green",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 3,
      title: "Creează o dimensiune nouă: Tărâmul de cristal",
      description: "Construiește o lume nouă cu propriile reguli, blocuri și structuri.",
      link: "/minecraftmodding/crystal-realm",
      isAvailable: true,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-16 ani",
      highlights: ["Definire dimensiune", "Generare de teren", "Blocuri personalizate"],
      color: "green",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 4,
      title: "Creaturi personalizate",
      description: "Crearea mob-urilor și animalelor noi în Minecraft cu MCreator.",
      link: "/minecraftmodding/session4",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-16 ani",
      highlights: ["Design mob-uri", "AI comportament", "Drops și loot"],
      color: "green",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 5,
      title: "Blocuri funcționale",
      description: "Blocuri cu funcționalități speciale și GUI-uri interactive.",
      link: "/minecraftmodding/session5",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-16 ani",
      highlights: ["GUI design", "Funcționalități custom", "Inventare"],
      color: "green",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 6,
      title: "Generarea lumilor procedurale",
      description: "Algoritmi pentru generarea terenurilor și structurilor.",
      link: "/minecraftmodding/session6",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-16 ani",
      highlights: ["World generation", "Biome custom", "Structuri"],
      color: "green",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 7,
      title: "Rețete și crafting personalizat",
      description: "Sisteme de crafting și rețete custom pentru mod-urile tale.",
      link: "/minecraftmodding/session7",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-16 ani",
      highlights: ["Custom recipes", "Crafting tables", "Smelting"],
      color: "green",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 8,
      title: "Mod complet fantasy",
      description: "Crearea unui mod tematic complet cu toate elementele învățate.",
      link: "/minecraftmodding/session8",
      isAvailable: false,
      duration: "120 min",
      level: "Avansat",
      ageGroup: "14-16 ani",
      highlights: ["Themed mod", "Complete system", "Integration"],
      color: "green",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 9,
      title: "Magie și sisteme complexe",
      description: "Implementarea sistemelor de magie și encantments custom.",
      link: "/minecraftmodding/session9",
      isAvailable: false,
      duration: "120 min",
      level: "Avansat",
      ageGroup: "14-16 ani",
      highlights: ["Magic systems", "Enchantments", "Potion effects"],
      color: "green",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 10,
      title: "Texturi și modele 3D",
      description: "Crearea asset-urilor vizuale pentru mod-urile personalizate.",
      link: "/minecraftmodding/session10",
      isAvailable: false,
      duration: "90 min",
      level: "Avansat",
      ageGroup: "14-16 ani",
      highlights: ["Texture creation", "3D models", "Animation"],
      color: "green",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 11,
      title: "Optimizare și performanță",
      description: "Tehnici pentru mod-uri eficiente și performante.",
      link: "/minecraftmodding/session11",
      isAvailable: false,
      duration: "90 min",
      level: "Expert",
      ageGroup: "15-16 ani",
      highlights: ["Performance tips", "Memory management", "Optimization"],
      color: "green",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 12,
      title: "Compatibilitate și mod packs",
      description: "Crearea mod-urilor compatibile și integrarea în pack-uri.",
      link: "/minecraftmodding/session12",
      isAvailable: false,
      duration: "90 min",
      level: "Expert",
      ageGroup: "15-16 ani",
      highlights: ["Mod compatibility", "Pack integration", "Dependencies"],
      color: "green",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 13,
      title: "Distribuție și comunitate",
      description: "Publicarea mod-urilor și construirea unei comunități de jucători.",
      link: "/minecraftmodding/session13",
      isAvailable: false,
      duration: "90 min",
      level: "Expert",
      ageGroup: "15-16 ani",
      highlights: ["Publishing", "Community", "Feedback"],
      color: "green",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 14,
      title: "Mega-proiect și showcase",
      description: "Mod complet de anvergură pentru portfolio personal.",
      link: "/minecraftmodding/session14",
      isAvailable: false,
      duration: "180 min",
      level: "Expert",
      ageGroup: "15-16 ani",
      highlights: ["Final project", "Portfolio", "Showcase"],
      color: "green",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sesiunile cursului</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transformă jocul tău preferat prin crearea propriilor blocuri, iteme și dimensiuni.
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

export default MinecraftModdingSessions;
