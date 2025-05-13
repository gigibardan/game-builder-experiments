import React from 'react';
import { Gamepad, Smartphone, Code, Server, ArrowRight, Star, Download, Layers, Gift } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import SessionCard from '@/components/SessionCard';

const AppInventor = () => {
  // Array cu lectiile disponibile
  const sessions = [
    {
      id: 1,
      title: "Introducere în App Inventor",
      description: "Primii pași în App Inventor, configurarea mediului și crearea primului proiect.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "10-14 ani",
      link: "/appinventor/session1",
      highlights: ["Configurare mediu", "Interfața utilizator", "Component Designer", "Blocks Editor"],
      imageSrc: "/assets/images/appinventor/session1-preview.png",
      color: "blue"
    },
    {
      id: 2,
      title: "Quiz App",
      description: "Învață să creezi o aplicație de quiz cu întrebări și răspunsuri multiple.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "10-14 ani",
      link: "/appinventor/session2",
      highlights: ["Butoane interactive", "Logică condițională", "Feedback utilizator", "Afișare scor"],
      imageSrc: "/assets/images/appinventor/session2-preview.png",
      color: "green"
    },
    {
      id: 3,
      title: "Drawing App",
      description: "Creează o aplicație de desen care folosește gesturile tactile.",
      duration: "90 minute",
      level: "Intermediar",
      ageGroup: "10-14 ani",
      link: "/appinventor/session3",
      highlights: ["Canvas", "Detectare atingere", "Schimbare culori", "Salvare desen"],
      imageSrc: "/assets/images/appinventor/session3-preview.png",
      color: "purple"
    },
    {
      id: 4,
      title: "Weather App",
      description: "Dezvoltă o aplicație meteo care utilizează date din API-uri externe.",
      duration: "120 minute",
      level: "Intermediar",
      ageGroup: "11-14 ani",
      link: "/appinventor/session4",
      highlights: ["API Requests", "Parsare JSON", "Interfață dinamică", "Afișare date meteo"],
      imageSrc: "/assets/images/appinventor/session4-preview.png",
      color: "cyan"
    },
    {
      id: 5,
      title: "Joc Arcade",
      description: "Creează un joc arcade simplu cu obiecte în mișcare și coliziuni.",
      duration: "120 minute",
      level: "Intermediar",
      ageGroup: "11-14 ani",
      link: "/appinventor/session5",
      highlights: ["Animații sprite", "Detecție coliziuni", "Timer", "Sistem de scor"],
      imageSrc: "/assets/images/appinventor/session5-preview.png",
      color: "amber"
    },
    {
      id: 6,
      title: "Aplicație de Chat",
      description: "Construiește o aplicație de mesagerie instant cu comunicare în timp real.",
      duration: "150 minute",
      level: "Avansat",
      ageGroup: "12-14 ani",
      link: "/appinventor/session6",
      highlights: ["Firebase", "Comunicare real-time", "Autentificare", "Stocare mesaje"],
      imageSrc: "/assets/images/appinventor/session6-preview.png",
      color: "indigo"
    },
    {
      id: 7,
      title: "Aplicația Meteo cu API",
      description: "Învață să comunici cu servicii web și să afișezi date meteo în timp real.",
      duration: "120 minute",
      level: "Intermediar",
      ageGroup: "11-14 ani",
      link: "/appinventor/session7",
      highlights: ["OpenWeather API", "Web components", "Afișare locație", "Prognoză extinsă"],
      imageSrc: "/assets/images/appinventor/session7-preview.png",
      color: "blue"
    },
    {
      id: 8,
      title: "Salvarea Datelor cu TinyDB",
      description: "Învață să stochezi și să recuperezi date locale pentru a crea aplicații cu memorie.",
      duration: "90 minute",
      level: "Intermediar",
      ageGroup: "11-14 ani",
      link: "/appinventor/session8",
      highlights: ["Persistența datelor", "TinyDB", "CRUD operații", "Preferințe utilizator"],
      imageSrc: "/assets/images/appinventor/session8-preview.png",
      color: "orange"
    },
    {
      id: 9,
      title: "Aplicație de Notițe",
      description: "Dezvoltă o aplicație completă de notițe cu funcționalități CRUD și personalizare.",
      duration: "150 minute",
      level: "Avansat",
      ageGroup: "12-14 ani",
      link: "/appinventor/session9",
      highlights: ["Multiple ecrane", "Liste dinamice", "Editare text", "Sortare și căutare"],
      imageSrc: "/assets/images/appinventor/session9-preview.png",
      color: "emerald"
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50/20">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-16 md:py-20">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute w-24 h-24 bg-white rounded-full -top-6 left-1/4 animate-float"></div>
            <div className="absolute w-16 h-16 bg-blue-300 rounded-full top-20 left-1/5 animate-float-delay"></div>
            <div className="absolute w-32 h-32 bg-indigo-300 rounded-full -bottom-10 right-1/4 animate-float-slow"></div>
            <div className="absolute w-20 h-20 bg-purple-300 rounded-full top-10 right-10 animate-float-delay-slow"></div>
            
            {/* App icons decorations */}
            <div className="absolute top-1/3 left-1/6 transform -rotate-12">
              <Smartphone className="w-24 h-24 text-white opacity-30" />
            </div>
            <div className="absolute bottom-1/4 right-1/5 transform rotate-12">
              <Code className="w-20 h-20 text-white opacity-30" />
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
                      <Smartphone className="h-4 w-4 mr-2" />
                      Creează Aplicații Mobile Fără Cod
                    </p>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">
                    MIT App Inventor
                    <span className="block text-yellow-300">Atelierul de Aplicații Mobile</span>
                  </h1>
                  <p className="text-xl mb-8 text-white/90 max-w-xl drop-shadow-sm">
                    Învață să creezi aplicații și jocuri pentru dispozitive mobile folosind 
                    o platformă vizuală de programare dezvoltată de Massachusetts Institute of Technology.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button asChild size="lg" className="bg-white hover:bg-white/90 text-indigo-600 shadow-md">
                    <a href="#sessions">
                      <span>Vezi lecțiile</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 shadow-md">
                    <a href="https://appinventor.mit.edu/" target="_blank" rel="noopener noreferrer">
                      <span>Site oficial MIT</span>
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
                  <div className="bg-white rounded-xl shadow-2xl p-6 overflow-hidden max-w-md">
                    <img 
                      src="/assets/images/appinventor/app-inventor-logo.jpg" 
                      alt="MIT App Inventor Logo" 
                      className="rounded-lg w-full object-cover"
                    />
                    <div className="mt-4 p-2 bg-indigo-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-xs text-gray-500">app.aia</div>
                      </div>
                      <div className="bg-white p-2 rounded-md border border-gray-200">
                        <div className="flex items-center text-sm text-gray-700">
                          <Code className="h-4 w-4 text-indigo-500 mr-2" />
                          <span className="font-mono">When Button.Click</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700 ml-6 mt-1">
                          <span className="font-mono text-indigo-600">do something amazing...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-5 -right-5 bg-indigo-500 rounded-full p-4 shadow-lg animate-bounce-slow">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 -mt-6 relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Programare Vizuală</h3>
                <p className="text-white/90">
                  Creează aplicații mobile prin simpla tragere și plasare a blocurilor de cod, 
                  fără a scrie cod tradițional.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Aplicații Reale</h3>
                <p className="text-white/90">
                  Dezvoltă aplicații funcționale care pot fi instalate și utilizate 
                  pe orice dispozitiv Android.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Server className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Funcționalități Avansate</h3>
                <p className="text-white/90">
                  Utilizează senzori, baze de date, conexiuni la servicii web și 
                  multe alte capacități moderne ale dispozitivelor mobile.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* About the Course */}
        <section className="py-4 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Despre Cursul de MIT App Inventor</h2>
                <p className="text-xl text-gray-600">
                  O introducere interactivă în lumea dezvoltării de aplicații mobile pentru copii și adolescenți
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl shadow-sm mb-8">
                <p className="mb-4">
                  App Inventor este o platformă vizuală de programare dezvoltată de MIT, care permite 
                  crearea de aplicații pentru telefoane și tablete Android fără a scrie cod tradițional.
                  Prin intermediul unei interfețe de tip "drag-and-drop", vei învăța să creezi aplicații
                  interactive și jocuri captivante.
                </p>
                <p>
                  Cu ajutorul acestui curs, vei învăța să utilizezi toate componentele importante ale App Inventor,
                  de la elemente de interfață (butoane, casete text, etichete) până la funcționalități avansate
                  precum senzori, baze de date și comunicare cu servicii web.
                </p>
              </div>

            </div>
          </div>
        </section>
        
        {/* Course Sessions */}
        <section id="sessions" className="py-4 bg-gradient-to-b from-white to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-indigo-800 font-medium text-sm mb-3">
                <span className="flex items-center">
                  <Layers className="w-4 h-4 mr-1" />
                  Lecții Interactive
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Explorează Lecțiile App Inventor</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                De la aplicații simple la proiecte avansate, învață pas cu pas cum să creezi aplicații mobile captivante
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
              
              {/* Coming Soon Card */}
              <motion.div 
                variants={itemVariants}
                className="mt-12 max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl p-6 border-2 border-dashed border-indigo-300 text-center shadow-md">
                  <div className="bg-indigo-200 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                    <Smartphone className="h-8 w-8 text-indigo-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-indigo-800">Mai multe lecții în curând!</h3>
                  <p className="text-indigo-700 mb-3">
                    Echipa noastră lucrează la noi tutoriale captivante pentru App Inventor.
                    Revino curând pentru a descoperi mai multe proiecte interesante!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tools and Resources */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-blue-800 font-medium text-sm mb-3">
                <span className="flex items-center">
                  <Code className="w-4 h-4 mr-1" />
                  Instrumente & Resurse
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Tot ce ai nevoie pentru a începe</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Resurse și unelte esențiale pentru dezvoltarea aplicațiilor cu MIT App Inventor
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Platformă Online</h3>
                <p className="text-gray-600 mb-4">
                  MIT App Inventor rulează complet în browser, fără a necesita instalare. 
                  Poți accesa proiectele tale de oriunde.
                </p>
                <a href="https://appinventor.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Accesează platforma 
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Companion App</h3>
                <p className="text-gray-600 mb-4">
                  Testează aplicațiile tale în timp real pe un dispozitiv Android folosind 
                  aplicația MIT AI2 Companion.
                </p>
                <a href="https://play.google.com/store/apps/details?id=edu.mit.appinventor.aicompanion3" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center">
                  Descarcă aplicația 
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Documentație</h3>
                <p className="text-gray-600 mb-4">
                  Accesează ghiduri complete, tutoriale și referințe pentru toate componentele și 
                  funcționalitățile App Inventor.
                </p>
                <a href="https://appinventor.mit.edu/explore/library" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                  Explorează biblioteca 
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials or App Showcase */}
        <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Dezvoltă aplicații pentru lumea reală</h2>
              <p className="text-xl mb-10 text-white/90">
                Cu MIT App Inventor poți crea aplicații care rezolvă probleme reale și pot fi distribuite pe Google Play.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Aplicații Practice</h3>
                  <p className="text-white/80">Creează aplicații utile pentru organizare, productivitate și învățare.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Jocuri Interactive</h3>
                  <p className="text-white/80">Dezvoltă jocuri captivante care pot fi jucate pe orice dispozitiv Android.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Aplicații Sociale</h3>
                  <p className="text-white/80">Construiește platforme de comunicare și partajare pentru comunități.</p>
                </div>
              </div>
              
              <div className="mt-10">
                <Button asChild size="lg" className="bg-white hover:bg-white/90 text-indigo-600 shadow-lg font-medium px-8">
                  <a href="#sessions" className="flex items-center">
                    <span>Începe prima lecție</span>
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

export default AppInventor;