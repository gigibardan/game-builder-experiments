import React from 'react';
import { Gamepad, Rocket, Code, Zap, ArrowRight, Star, Layers, BatteryCharging, Cpu } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import SessionCard from '@/components/SessionCard';

const GDevelop = () => {
  // Array cu lectiile disponibile (fictive pentru moment)
  const sessions = [
    {
      id: 1,
      title: "Introducere în GDevelop",
      description: "Descoperă interfața GDevelop și creează primul tău joc simplu folosind evenimente și acțiuni.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "10-15 ani",
      link: "/gdevelop/session1",
      highlights: ["Interfața GDevelop", "Sprites și Obiecte", "Evenimente de bază", "Mișcarea personajelor"],
      imageSrc: "/assets/images/gdevelop/intro-gdevelop.png",
      color: "indigo"
    },
    {
      id: 2,
      title: "Platformer Game",
      description: "Învață să creezi un joc de platformă cu fizică realistă, coliziuni și colectare de obiecte.",
      duration: "120 minute",
      level: "Începător-Intermediar",
      ageGroup: "10-15 ani",
      link: "/gdevelop/session2",
      highlights: ["Fizică și gravitație", "Animații de mișcare", "Detecție coliziuni", "Colectare de obiecte"],
      imageSrc: "/assets/images/gdevelop/platformer-game.png",
      color: "purple"
    },
    {
      id: 3,
      title: "Shooter Game",
      description: "Creează un joc shooter cu inamici, proiectile, efecte de particule și sistem de scor.",
      duration: "120 minute",
      level: "Intermediar",
      ageGroup: "12-15 ani",
      link: "/gdevelop/session3",
      highlights: ["Sisteme de tragere", "Mișcare inamici", "Efecte particule", "Sistem de viață și scor"],
      imageSrc: "/assets/images/gdevelop/shooter-game.png",
      color: "blue"
    }
  ];

  // Variabile pentru animații
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-indigo-50/20">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-700 py-16 md:py-20">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute w-24 h-24 bg-white rounded-full -top-6 left-1/4 animate-float"></div>
            <div className="absolute w-16 h-16 bg-indigo-300 rounded-full top-20 left-1/5 animate-float-delay"></div>
            <div className="absolute w-32 h-32 bg-purple-300 rounded-full -bottom-10 right-1/4 animate-float-slow"></div>
            <div className="absolute w-20 h-20 bg-blue-300 rounded-full top-10 right-10 animate-float-delay-slow"></div>
            
            {/* Game development icons */}
            <div className="absolute top-1/3 left-1/6 transform -rotate-12">
              <Gamepad className="w-24 h-24 text-white opacity-30" />
            </div>
            <div className="absolute bottom-1/4 right-1/5 transform rotate-12">
              <Zap className="w-20 h-20 text-white opacity-30" />
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-block mb-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">
                    <p className="text-white font-medium flex items-center">
                      <Gamepad className="h-4 w-4 mr-2" />
                      Dezvoltare de Jocuri Fără Cod
                    </p>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">
                    Fabrica de Jocuri
                    <span className="block text-purple-300">GDevelop</span>
                  </h1>
                  <p className="text-xl mb-8 text-white/90 max-w-xl drop-shadow-sm">
                    Dezvoltă jocuri 2D complexe cu fizică realistă și efecte vizuale impresionante, 
                    fără a scrie o linie de cod. Creează, testează și publică jocuri pentru multiple platforme.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button asChild size="lg" className="bg-white hover:bg-white/90 text-indigo-700 shadow-md">
                    <a href="#sessions">
                      <span>Vezi lecțiile</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 shadow-md">
                    <a href="https://gdevelop.io/" target="_blank" rel="noopener noreferrer">
                      <span>Site oficial GDevelop</span>
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
                  <div className="bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-xl shadow-2xl p-6 overflow-hidden max-w-md border-2 border-indigo-300/30">
                    <img 
                      src="/assets/images/gdevelop/gdevelop-logo.webp" 
                      alt="GDevelop Logo" 
                      className="rounded-lg w-full object-cover"
                    />
                    <div className="mt-4 p-2 bg-indigo-900/50 rounded-lg border border-indigo-700">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-xs text-indigo-300">game.json</div>
                      </div>
                      <div className="bg-indigo-800/50 p-2 rounded-md border border-indigo-600">
                        <div className="flex items-center text-sm text-indigo-300">
                          <Code className="h-4 w-4 text-purple-400 mr-2" />
                          <span className="font-mono">Events</span>
                        </div>
                        <div className="flex items-center text-sm text-indigo-300 ml-6 mt-1">
                          <span className="font-mono text-purple-300">When player collides with coin...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-5 -right-5 bg-purple-600 rounded-full p-4 shadow-lg animate-bounce-slow">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 -mt-6 relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Fără Cod</h3>
                <p className="text-white/90">
                  Creează jocuri complexe folosind un sistem vizual de evenimente și acțiuni, 
                  fără a scrie o linie de cod.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Fizică Realistă</h3>
                <p className="text-white/90">
                  Adaugă comportamente fizice realiste obiectelor din joc, inclusiv gravitație, 
                  coliziuni și forțe.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <BatteryCharging className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Multi-platformă</h3>
                <p className="text-white/90">
                  Publică jocurile tale pe web, mobil, desktop și console cu un singur click, 
                  fără configurări complicate.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Course Sessions */}
        <section id="sessions" className="py-8 bg-gradient-to-b from-white to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-indigo-800 font-medium text-sm mb-3">
                <span className="flex items-center">
                  <Layers className="w-4 h-4 mr-1" />
                  Lecții Interactive
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Explorează Lecțiile GDevelop</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                De la concepte de bază la tehnici avansate, învață cum să creezi jocuri impresionante
              </p>
            </div>
            
            <div className="relative">
              {/* Background pattern for the sessions section */}
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-white/30 -z-10"></div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
              >
                {sessions.map((session) => (
                  <motion.div key={session.id} variants={itemVariants}>
                    <SessionCard 
                      title={session.title}
                      description={session.description}
                      link={session.link}
                      number={session.id}
                      duration={session.duration}
                      level={session.level}
                      ageGroup={session.ageGroup}
                      highlights={session.highlights}
                      color={session.color}
                      imageSrc={session.imageSrc}
                    />
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Coming Soon Message */}
              <motion.div 
                variants={itemVariants}
                className="mt-10 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-8 border-2 border-dashed border-indigo-300 text-center shadow-md">
                  <div className="bg-indigo-200 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                    <Rocket className="h-8 w-8 text-indigo-700" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-indigo-800">Curs în dezvoltare</h3>
                  <p className="text-indigo-700 mb-5 text-lg">
                    Suntem în proces de creare a unor lecții captivante pentru GDevelop.
                    Curând vei putea explora mai multe proiecte și tehnici avansate!
                  </p>
                  <p className="text-indigo-600 mb-3">
                    Lecțiile existente sunt demonstrative și vor fi înlocuite cu conținut oficial în curând.
                  </p>
                  <div className="mt-4">
                    <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white">
                      <a href="https://gdevelop.io/academy" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <span>Explorează resurse oficiale</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why GDevelop */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">De ce GDevelop?</h2>
              <p className="text-xl mb-10 text-white/90">
                GDevelop este o platformă modernă, gratuită și open-source pentru dezvoltarea de jocuri 2D
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Pentru începători</h3>
                  <p className="text-white/80">Interfață intuitivă și evenimente vizuale pentru cei care nu au experiență în programare.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Pentru avansați</h3>
                  <p className="text-white/80">Funcții avansate, extensii și chiar posibilitatea de a scrie cod JavaScript pentru funcționalități complexe.</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild size="lg" className="bg-white hover:bg-white/90 text-indigo-700 shadow-lg font-medium px-8">
                  <a href="#sessions" className="flex items-center">
                    <span>Începe aventura</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Adăugăm animațiile CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes floatDelay {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          .animate-float-delay {
            animation: floatDelay 6s ease-in-out infinite;
            animation-delay: 1s;
          }
          .animate-float-slow {
            animation: float 10s ease-in-out infinite;
          }
          .animate-float-delay-slow {
            animation: floatDelay 7s ease-in-out infinite;
            animation-delay: 2s;
          }
          .animate-bounce-slow {
            animation: bounce 3s infinite;
          }
        `
      }} />
    </div>
  );
};

export default GDevelop;