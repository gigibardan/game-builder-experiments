
import React from 'react';
import SessionCard from '@/components/SessionCard';

const PythonSessions = () => {
  const sessions = [
    {
      number: 1,
      title: "Introducere în Python",
      description: "Primii pași în programarea cu Python și instalarea mediului de dezvoltare.",
      link: "/python/session1",
      isAvailable: true,
      duration: "90 min",
      level: "Începător",
      ageGroup: "12-18 ani",
      highlights: ["Instalare Python", "IDLE", "Prima aplicație"],
      color: "blue",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 2,
      title: "Variabile și tipuri de date",
      description: "Învață să lucrezi cu date în Python: numere, stringuri și operatori.",
      link: "/python/session2",
      isAvailable: true,
      duration: "90 min",
      level: "Începător",
      ageGroup: "12-18 ani",
      highlights: ["Tipuri de date", "Operatori", "Input/Output"],
      color: "blue",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 3,
      title: "Structuri de control",
      description: "If, else, loop-uri și logica programării în Python.",
      link: "/python/session3",
      isAvailable: false,
      duration: "90 min",
      level: "Începător",
      ageGroup: "12-18 ani",
      highlights: ["Conditionale", "Bucle", "Logica boolean"],
      color: "blue",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 4,
      title: "Funcții și module",
      description: "Organizarea codului în funcții reutilizabile și module.",
      link: "/python/session4",
      isAvailable: false,
      duration: "90 min",
      level: "Începător",
      ageGroup: "12-18 ani",
      highlights: ["Definire funcții", "Parametri", "Import module"],
      color: "blue",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 5,
      title: "Liste și dicționare",
      description: "Structuri de date fundamentale în Python pentru organizarea informațiilor.",
      link: "/python/session5",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["Liste", "Dicționare", "Metode built-in"],
      color: "blue",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 6,
      title: "Programare orientată pe obiecte",
      description: "Clase, obiecte și moștenirea în Python pentru cod modular.",
      link: "/python/session6",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["Clase", "Obiecte", "Moștenire"],
      color: "blue",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 7,
      title: "Manipularea fișierelor",
      description: "Citirea și scrierea datelor în fișiere pentru persistență.",
      link: "/python/session7",
      isAvailable: false,
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-18 ani",
      highlights: ["File I/O", "CSV files", "JSON data"],
      color: "blue",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 8,
      title: "Biblioteci externe și pip",
      description: "Utilizarea bibliotecilor Python populare pentru funcționalități avansate.",
      link: "/python/session8",
      isAvailable: false,
      duration: "120 min",
      level: "Avansat",
      ageGroup: "14-18 ani",
      highlights: ["pip install", "NumPy", "Matplotlib"],
      color: "blue",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 9,
      title: "Web scraping cu Python",
      description: "Extragerea datelor de pe site-uri web folosind Python.",
      link: "/python/session9",
      isAvailable: false,
      duration: "120 min",
      level: "Avansat",
      ageGroup: "14-18 ani",
      highlights: ["Requests", "BeautifulSoup", "Web parsing"],
      color: "blue",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      number: 10,
      title: "Analiza datelor cu pandas",
      description: "Procesarea și analiza seturilor de date cu pandas.",
      link: "/python/session10",
      isAvailable: false,
      duration: "90 min",
      level: "Avansat",
      ageGroup: "14-18 ani",
      highlights: ["DataFrames", "Data cleaning", "Visualizations"],
      color: "blue",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      number: 11,
      title: "Machine Learning cu scikit-learn",
      description: "Introducere în învățarea automată și algoritmi ML.",
      link: "/python/session11",
      isAvailable: false,
      duration: "90 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["ML algorithms", "Scikit-learn", "Predictions"],
      color: "blue",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      number: 12,
      title: "Aplicații web cu Flask",
      description: "Crearea aplicațiilor web simple folosind Flask framework.",
      link: "/python/session12",
      isAvailable: false,
      duration: "90 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["Flask framework", "Routes", "Templates"],
      color: "blue",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      number: 13,
      title: "Testing și debugging",
      description: "Testarea și depanarea codului Python pentru aplicații robuste.",
      link: "/python/session13",
      isAvailable: false,
      duration: "90 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["Unit testing", "Debugging", "Error handling"],
      color: "blue",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      number: 14,
      title: "Proiect final și carieră",
      description: "Aplicație completă Python și perspective de carieră în programare.",
      link: "/python/session14",
      isAvailable: false,
      duration: "180 min",
      level: "Expert",
      ageGroup: "15-18 ani",
      highlights: ["Final project", "Career paths", "Portfolio"],
      color: "blue",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sesiunile cursului</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Începe călătoria în programarea textului cu unul dintre cele mai populare limbaje din lume.
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

export default PythonSessions;
