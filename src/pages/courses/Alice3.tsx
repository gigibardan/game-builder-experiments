
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Box, ArrowRight, Clock, Award, Gamepad, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import SessionCard from '@/components/SessionCard';

const Alice3 = () => {
  const sessions = [
    {
      id: 1,
      title: "Aventură în Pădure",
      description: "Creează o poveste 3D interactivă în care un personaj explorează o pădure fermecată, întâlnind animale și descoperind comori ascunse.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "8-14 ani",
      link: "/alice3/session1adventure",
      highlights: ["Introducere în interfața Alice 3", "Plasarea obiectelor 3D", "Animarea personajelor", "Adăugarea interacțiunilor simple"]
    },
    {
      id: 2,
      title: "Cursa Spațială",
      description: "Dezvoltă un joc simplu în care controlezi o navă spațială pentru a colecta stele și a evita asteroizi într-un mediu 3D captivant.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "9-14 ani",
      link: "/alice3/session2spacegame",
      highlights: ["Controlul obiectelor cu tastatura", "Crearea mișcărilor fluide", "Implementarea coliziunilor", "Adăugarea efectelor sonore"]
    },
    {
      id: 3,
      title: "Animalul Virtual",
      description: "Creează un animal virtual interactiv 3D care poate executa comenzi, își poate schimba comportamentul și poate interacționa cu utilizatorul.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "8-14 ani",
      link: "/alice3/session3virtualpet",
      highlights: ["Personalizarea animalelor 3D", "Animarea comportamentelor", "Implementarea comenzilor vocale", "Programarea stărilor și reacțiilor"]
    },
    {
      id: 4,
      title: "Animații Geometrice",
      description: "Explorează concepte matematice prin crearea unei expoziții interactive de forme geometrice animate care creează modele fascinante.",
      duration: "90 minute",
      level: "Începător-Intermediar",
      ageGroup: "10-15 ani",
      link: "/alice3/session4geometry",
      highlights: ["Utilizarea formelor primitive 3D", "Crearea animațiilor coordonate", "Aplicarea conceptelor matematice", "Implementarea interactivității"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-500 to-pink-400 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Povești 3D Interactive
                    <span className="block text-pink-900">Alice 3</span>
                  </h1>
                  <p className="text-xl mb-8 text-white/90 max-w-xl">
                    Descoperă magia programării vizuale 3D! Învață să creezi lumi virtuale, 
                    povești interactive și jocuri captivante cu Alice 3, un mediu de programare creat special pentru începători.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button asChild size="lg" className="bg-pink-900 hover:bg-pink-800 text-white">
                    <a href="#sessions">
                      <span>Vezi lecțiile</span>
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                    <a href="https://www.alice.org/" target="_blank" rel="noopener noreferrer">
                      <span>Site oficial Alice 3</span>
                    </a>
                  </Button>
                </motion.div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative"
                >
                  <img 
                    src="https://www.alice.org/wp-content/uploads/2017/01/WonderLand-scaled.jpg" 
                    alt="Alice 3 Programming Interface" 
                    className="rounded-lg shadow-xl max-w-md w-full"
                  />
                  <div className="absolute -bottom-5 -right-5 bg-pink-400 rounded-full p-4 shadow-lg animate-bounce-slow">
                    <Box className="h-8 w-8 text-pink-900" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* About the Course */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Despre Acest Curs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                O introducere captivantă în lumea programării 3D pentru copiii și adolescenții cu vârste între 8-14 ani
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl shadow-md">
                <div className="bg-pink-200 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Box className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Programare Vizuală 3D</h3>
                <p className="text-gray-600">
                  Alice 3 folosește un sistem intuitiv de drag-and-drop pentru a crea animații și povești 3D, 
                  făcând programarea accesibilă și distractivă pentru începători.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl shadow-md">
                <div className="bg-pink-200 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Gamepad className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Povești Interactive</h3>
                <p className="text-gray-600">
                  Elevii vor crea povești 3D interactive cu personaje care pot fi controlate, 
                  animații captivante și interacțiuni complexe.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl shadow-md">
                <div className="bg-pink-200 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Gândire Algoritmică</h3>
                <p className="text-gray-600">
                  Dezvoltă abilitățile de rezolvare a problemelor, gândirea logică 
                  și creativitatea prin programare orientată pe obiecte.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Sessions */}
        <section id="sessions" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Lecții Alice 3</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explorează lecțiile noastre interactive pentru a crea lumi 3D fascinante
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {sessions.map((session) => (
                <SessionCard 
                  key={session.id}
                  title={session.title}
                  description={session.description}
                  link={session.link}
                  number={session.id}
                  duration={session.duration}
                  level={session.level}
                  ageGroup={session.ageGroup}
                  highlights={session.highlights}
                  color="pink"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Resurse Utile</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Aprofundează învățarea cu aceste resurse adiționale
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="bg-pink-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Documentație Alice 3</h3>
                <p className="text-gray-600 mb-4">
                  Explorează ghidurile oficiale și materialele de învățare pentru a stăpâni toate funcțiile Alice 3.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://www.alice.org/resources/how-tos/" target="_blank" rel="noopener noreferrer">
                    <span>Explorează</span>
                  </a>
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="bg-pink-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Gamepad className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Tutoriale Video</h3>
                <p className="text-gray-600 mb-4">
                  Urmărește tutoriale video pentru a vedea cum se creează diverse proiecte în Alice 3.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://www.youtube.com/c/AliceProject" target="_blank" rel="noopener noreferrer">
                    <span>Vizionează</span>
                  </a>
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="bg-pink-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Galerie de Proiecte</h3>
                <p className="text-gray-600 mb-4">
                  Descoperă proiecte create de alți utilizatori pentru inspirație și idei noi.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://www.alice.org/gallery/" target="_blank" rel="noopener noreferrer">
                    <span>Descoperă</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Întrebări Frecvente</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Răspunsuri la cele mai comune întrebări despre Alice 3 și cursul nostru
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Ce este Alice 3?</h3>
                <p className="text-gray-600">
                  Alice 3 este un mediu de programare vizuală 3D dezvoltat de Carnegie Mellon University.
                  Este conceput pentru a-i învăța pe elevi concepte de programare orientată pe obiecte prin
                  crearea de povești interactive, animații și jocuri simple.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Ce vârstă trebuie să aibă copilul meu pentru a folosi Alice 3?</h3>
                <p className="text-gray-600">
                  Alice 3 este recomandat pentru copii cu vârste între 8 și 16 ani. Este suficient de simplu pentru
                  începători, dar oferă și posibilități avansate pentru cei care doresc să își aprofundeze cunoștințele.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Este nevoie de cunoștințe anterioare de programare?</h3>
                <p className="text-gray-600">
                  Nu, Alice 3 este conceput special pentru începători. Interfața vizuală și sistemul de drag-and-drop
                  fac învățarea programării intuitivă și accesibilă pentru toți, indiferent de experiența anterioară.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Ce vor învăța copiii în acest curs?</h3>
                <p className="text-gray-600">
                  Copiii vor învăța concepte fundamentale de programare precum metode, funcții, loop-uri, condiții,
                  variabile, precum și principiile programării orientate pe obiecte. De asemenea, vor dezvolta abilități
                  de rezolvare a problemelor, gândire algoritmică și creativitate digitală.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-pink-500 to-pink-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Gata să creezi lumi 3D captivante?</h2>
              <p className="text-xl mb-8 text-white/90">
                Alege prima lecție și începe să dezvolți povești interactive chiar astăzi!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button asChild size="lg" className="bg-pink-900 hover:bg-pink-800">
                  <Link to="/alice3/session1adventure" className="flex items-center">
                    <span>Începe prima lecție</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Alice3;
