
import React from 'react';
import SessionCard from '@/components/SessionCard';

const FrontendDevSessions = () => {
  const sessions = [
    {
      number: 1,
      title: "HTML și structura paginii",
      description: "Învață fundamentele HTML și cum să structurezi conținutul web.",
      link: "/frontenddev/session1",
      isAvailable: true,
      duration: "90 min",
      level: "Începător",
      ageGroup: "12-18 ani",
      highlights: ["Elemente HTML", "Semantica", "Structura document"],
      color: "cyan",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 2,
      title: "CSS și stilizarea de bază",
      description: "Descoperă puterea CSS pentru stilizarea elementelor web.",
      link: "/frontenddev/session2",
      isAvailable: true,
      duration: "90 min",
      level: "Începător",
      ageGroup: "12-18 ani",
      highlights: ["Selectori CSS", "Proprietăți", "Box model"],
      color: "cyan",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 3,
      title: "CSS și stilizarea avansată",
      description: "Învață să stilizezi site-urile web cu CSS avansat.",
      link: "/frontenddev/session3",
      isAvailable: false,
      duration: "90 min",
      level: "Începător",
      ageGroup: "12-18 ani",
      highlights: ["Flexbox", "Grid", "Animații CSS"],
      color: "cyan",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 4,
      title: "JavaScript fundamentals",
      description: "Începe să programezi cu JavaScript și adaugă interactivitate.",
      link: "/frontenddev/session4",
      isAvailable: false,
      duration: "90 min",
      level: "Începător",
      ageGroup: "12-18 ani",
      highlights: ["Variabile", "Funcții", "Evenimente"],
      color: "cyan",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 5,
      title: "DOM manipulation",
      description: "Interacțiunea cu elementele paginii web prin JavaScript.",
      link: "/frontenddev/session5",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["Selectors", "Event listeners", "Modificare conținut"],
      color: "cyan",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 6,
      title: "Responsive design",
      description: "Crearea site-urilor adaptabile pentru toate dispozitivele.",
      link: "/frontenddev/session6",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["Media queries", "Mobile first", "Breakpoints"],
      color: "cyan",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 7,
      title: "Framework-uri CSS",
      description: "Folosirea Bootstrap și Tailwind CSS pentru dezvoltare rapidă.",
      link: "/frontenddev/session7",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["Bootstrap", "Tailwind CSS", "Component libraries"],
      color: "cyan",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 8,
      title: "JavaScript avansat și ES6",
      description: "Concepte avansate și sintaxa modernă JavaScript.",
      link: "/frontenddev/session8",
      isAvailable: false,
      duration: "120 min",
      level: "Avansat",
      ageGroup: "14-18 ani",
      highlights: ["Arrow functions", "Promises", "Async/await"],
      color: "cyan",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 9,
      title: "Introducere în React",
      description: "Primii pași în dezvoltarea cu biblioteca React.",
      link: "/frontenddev/session9",
      isAvailable: false,
      duration: "120 min",
      level: "Avansat",
      ageGroup: "14-18 ani",
      highlights: ["Componente", "JSX", "State management"],
      color: "cyan",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 10,
      title: "Git și workflow-ul dezvoltatorului",
      description: "Controlul versiunilor și colaborarea în echipă.",
      link: "/frontenddev/session10",
      isAvailable: false,
      duration: "90 min",
      level: "Avansat",
      ageGroup: "14-18 ani",
      highlights: ["Git basics", "GitHub", "Collaboration"],
      color: "cyan",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 11,
      title: "API-uri și fetch",
      description: "Comunicarea cu servicii web și integrarea API-urilor.",
      link: "/frontenddev/session11",
      isAvailable: false,
      duration: "90 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["REST APIs", "Fetch API", "JSON"],
      color: "cyan",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 12,
      title: "Optimizare și performanță",
      description: "Tehnici de optimizare pentru site-uri web rapide.",
      link: "/frontenddev/session12",
      isAvailable: false,
      duration: "90 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["Performance", "Lazy loading", "Minification"],
      color: "cyan",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 13,
      title: "Deploy și hosting",
      description: "Publicarea site-urilor web pe internet.",
      link: "/frontenddev/session13",
      isAvailable: false,
      duration: "90 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["Hosting", "Deployment", "Domain management"],
      color: "cyan",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 14,
      title: "Proiect final și portfolio",
      description: "Crearea unui site web complet pentru portfolio personal.",
      link: "/frontenddev/session14",
      isAvailable: false,
      duration: "180 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["Final project", "Portfolio", "Professional website"],
      color: "cyan",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sesiunile cursului</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Construiește site-uri web moderne și interactive de la zero, învățând HTML, CSS și JavaScript.
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

export default FrontendDevSessions;
