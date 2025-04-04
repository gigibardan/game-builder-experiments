
import React from 'react';
import { Gamepad } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Godot = () => {
  const sessions = [
    {
      id: 1,
      title: "Introducere în Godot Engine",
      description: "Primii pași în dezvoltarea de jocuri cu Godot și înțelegerea interfeței de dezvoltare.",
      path: "/godot/session1",
      bgColor: "bg-indigo-600"
    },
    {
      id: 2,
      title: "Concepte de bază în GDScript",
      description: "Învață limbajul GDScript și cum să implementezi funcționalități simple.",
      path: "/godot/session2",
      bgColor: "bg-indigo-600"
    },
    {
      id: 3,
      title: "Fizică și coliziuni",
      description: "Aplicarea fizicii și gestionarea coliziunilor în jocurile 2D.",
      path: "/godot/session3",
      bgColor: "bg-indigo-600"
    },
    {
      id: 4,
      title: "Animații și efecte vizuale",
      description: "Crearea animațiilor și efectelor vizuale pentru personaje și medii.",
      path: "/godot/session4",
      bgColor: "bg-indigo-600"
    },
    {
      id: 5,
      title: "Sisteme de UI și meniuri",
      description: "Dezvoltarea interfețelor utilizator și a meniurilor pentru jocuri.",
      path: "/godot/session5",
      bgColor: "bg-indigo-600"
    },
    {
      id: 6,
      title: "Audio și efecte sonore",
      description: "Implementarea sunetului și muzicii în jocurile dezvoltate cu Godot.",
      path: "/godot/session6",
      bgColor: "bg-indigo-600"
    },
    {
      id: 7,
      title: "Joc complet 2D",
      description: "Crearea unui joc 2D complet de la zero, aplicând toate conceptele învățate.",
      path: "/godot/session7",
      bgColor: "bg-indigo-600"
    },
    {
      id: 8,
      title: "Introducere în 3D",
      description: "Tranziția de la 2D la 3D: concepte de bază pentru dezvoltarea jocurilor 3D.",
      path: "/godot/session8",
      bgColor: "bg-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-900 p-4 rounded-full">
                <Gamepad className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Game Development Pro: Godot</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Dezvoltă jocuri profesionale 2D și 3D cu un motor de joc avansat și gratuit.
            </p>
            <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-gray-100">
              <Link to="/godot/session1">
                Începe cursul
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Course Content */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Conținutul cursului</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Învață pas cu pas cum să dezvolți jocuri complexe cu Godot Engine, de la elementele de bază până la crearea unui joc complet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: session.id * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`${session.bgColor} p-4 text-white`}>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">Sesiunea {session.id}</span>
                      <span className="bg-white text-indigo-700 text-sm py-1 px-3 rounded-full font-medium">
                        {session.id <= 4 ? "Începător" : session.id <= 6 ? "Intermediar" : "Avansat"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{session.title}</h3>
                    <p className="text-gray-600 mb-6">{session.description}</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={session.path}>
                        Accesează lecția
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Course Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">De ce să înveți Godot?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Godot Engine oferă multe avantaje pentru dezvoltatorii de jocuri, indiferent de nivelul lor de experiență.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-100"
            >
              <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Open Source</h3>
              <p className="text-gray-600">
                Godot este complet gratuit și open source, fără taxe sau restricții pentru jocurile tale.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-100"
            >
              <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Ușor de învățat</h3>
              <p className="text-gray-600">
                Interfața intuitivă și limbajul GDScript fac din Godot o alegere excelentă pentru începători.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-100"
            >
              <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Versatil</h3>
              <p className="text-gray-600">
                Suport excelent pentru dezvoltare 2D și 3D, permitându-ți să creezi o gamă largă de jocuri.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-100"
            >
              <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Multi-platform</h3>
              <p className="text-gray-600">
                Exportă jocurile tale pentru PC, mobile, console și web cu ușurință.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-100"
            >
              <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Comunitate activă</h3>
              <p className="text-gray-600">
                Beneficiază de o comunitate mare și prietenoasă, documentație excelentă și tutoriale.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-100"
            >
              <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Performanță</h3>
              <p className="text-gray-600">
                Motor optimizat care rulează rapid chiar și pe hardware modest, perfect pentru dezvoltarea independentă.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Godot;
