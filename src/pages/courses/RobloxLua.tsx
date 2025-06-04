import React from 'react';
import { Layout, Code, Joystick, Server, ArrowRight, Star, Layers, Cpu, Box } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// React Router link removed - using regular links instead
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import SessionCard from '@/components/SessionCard';


const RobloxLua = () => {
  // Array cu lectiile reale de Roblox
  const sessions = [
    {
      id: 1,
      title: "Roblox Studio – Introducere",
      description: "Instalează și configurează Roblox Studio, învață elementele de bază ale platformei de dezvoltare.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "10-15 ani",
      link: "/robloxlua/session1introducere",
      highlights: ["Instalare Roblox Studio", "Interfața de lucru", "Elementele de bază", "Configurare inițială"],
      imageSrc: "/assets/images/roblox/roblox_l1_preview.png",
      color: "red"
    },
    {
      id: 2,
      title: "Quiz Game",
      description: "Creează un joc de tip quiz interactive cu întrebări de cultură generală și sistem de punctaj.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "10-15 ani",
      link: "/robloxlua/session2quizgame",
      highlights: ["Interfață quiz", "Sistem întrebări", "Punctaj și feedback", "Logică de joc"],
      imageSrc: "/assets/images/roblox/quiz-game-l2-preview.png",
      color: "orange"
    },
    {
      id: 3,
      title: "Scripts for Beginners ",
      description: "Ghidează-te pas cu pas în crearea scripturilor de bază și înțelegerea fundamentelor Lua.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "11-15 ani",
      link: "/robloxlua/session3constructiisctripturiincepatori",
      highlights: ["Sintaxa Lua", "Variabile și funcții", "Evenimente de bază", "Debugging"],
      imageSrc: "/assets/images/roblox/scripts_beginners_l3_preview.png",
      color: "red"
    },
    {
      id: 4,
      title: "Obby Creator",
      description: "Construiește un Obby simplu și învață mecanici de platformă, checkpoints și provocări.",
      duration: "90 minute",
      level: "Începător-Intermediar",
      ageGroup: "11-15 ani",
      link: "/robloxlua/session4obby",
      highlights: ["Design platforme", "Sisteme checkpoint", "Mecanici de salt", "Provocări progresive"],
      imageSrc: "/assets/images/roblox/obby-l4.png",
      color: "orange"
    },
    {
      id: 5,
      title: "NPC Creator & Talking NPC ",
      description: "Adaugă NPC-uri interactive care pot vorbi cu jucătorii și oferă quest-uri sau informații.",
      duration: "90 minute",
      level: "Intermediar",
      ageGroup: "12-15 ani",
      link: "/robloxlua/session5npccreator",
      highlights: ["Crearea NPC-urilor", "Sisteme de dialog", "AI comportament", "Interacțiuni complexe"],
      imageSrc: "/assets/images/roblox/npc-creator-talking-npc-l5.png",
      color: "red"
    },
    {
      id: 6,
      title: "Animations ",
      description: "Crează și controlează animații de personaje în Roblox, de la animații simple la secvențe complexe.",
      duration: "120 minute",
      level: "Intermediar",
      ageGroup: "12-15 ani",
      link: "/robloxlua/session6createanimations",
      highlights: ["Animation Editor", "Keyframes", "Controlul animațiilor", "Sincronizare cu scripturi"],
      imageSrc: "/assets/images/roblox/animations_l6_l7_preview.png",
      color: "orange"
    },
    {
      id: 7,
      title: "Tutorial Shop Roblox ",
      description: "Implementarea unui magazin complet cu achiziții de skin-uri, articole și sistem de monedă virtuală.",
      duration: "120 minute",
      level: "Avansat",
      ageGroup: "13-15 ani",
      link: "/robloxlua/session7shop",
      highlights: ["Sisteme de cumpărături", "GUI complexe", "Baze de date", "Monetizare"],
      imageSrc: "/assets/images/roblox/tutorial_shop_roblox_l8_l9_preview.png",
      color: "red"
    },
    {
      id: 8,
      title: "Personal Projects – pregătire și prezentare",
      description: "Dezvoltă și prezintă propriile proiecte Roblox, de la conceptualizare la publicarea finală.",
      duration: "90 minute",
      level: "Toate nivelurile",
      ageGroup: "10-15 ani",
      link: "/robloxlua/personal-projects",
      highlights: ["Planning proiect", "Dezvoltare independentă", "Testare și feedback", "Publicare și promovare"],
      imageSrc: "/assets/images/roblox/personal_projects_preview.png",
      color: "orange"
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-red-50/20">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-orange-500 py-16 md:py-20">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            {/* Roblox styled blocks */}
            <div className="absolute w-24 h-24 bg-white rounded-xl shadow-lg border-2 border-white/30 -top-6 left-1/4 animate-float"></div>
            <div className="absolute w-16 h-16 bg-orange-300 rounded-xl shadow-lg border-2 border-orange-400/30 top-20 left-1/5 animate-float-delay"></div>
            <div className="absolute w-32 h-32 bg-red-300 rounded-xl shadow-lg border-2 border-red-400/30 -bottom-10 right-1/4 animate-float-slow"></div>
            <div className="absolute w-20 h-20 bg-yellow-300 rounded-xl shadow-lg border-2 border-yellow-400/30 top-10 right-10 animate-float-delay-slow"></div>
            
            {/* Roblox style icons */}
            <div className="absolute top-1/3 left-1/6 transform -rotate-12">
              <Box className="w-24 h-24 text-white opacity-30" />
            </div>
            <div className="absolute bottom-1/4 right-1/5 transform rotate-12">
              <Joystick className="w-20 h-20 text-white opacity-30" />
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
                  <div className="inline-block mb-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-lg">
                    <p className="text-white font-bold flex items-center">
                      <Joystick className="h-4 w-4 mr-2" />
                      Universul Dezvoltării de Jocuri
                    </p>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">
                    ROBLOX
                    <span className="block text-yellow-300">Studio & Lua</span>
                  </h1>
                  <p className="text-xl mb-8 text-white/90 max-w-xl drop-shadow-sm">
                    Creează jocuri 3D complexe pe platforma Roblox folosind limbajul de programare Lua.
                    Dă viață imaginației tale și partajează creațiile cu milioane de jucători!
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button asChild size="lg" className="bg-white hover:bg-white/90 text-red-600 shadow-md">
                    <a href="#sessions">
                      <span>Vezi lecțiile</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 shadow-md">
                    <a href="https://www.roblox.com/create" target="_blank" rel="noopener noreferrer">
                      <span>Site oficial Roblox</span>
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
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl p-6 overflow-hidden max-w-md border-2 border-red-500/30">
                    <img 
                      src="/assets/images/roblox/roblox-studio-logo.webp" 
                      alt="Roblox Studio Logo" 
                      className="rounded-lg w-full object-cover"
                    />
                    <div className="mt-4 p-2 bg-slate-800 rounded-lg border border-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-xs text-slate-400">game.lua</div>
                      </div>
                      <div className="bg-slate-900 p-2 rounded-md border border-slate-700">
                        <div className="flex items-center text-sm text-blue-300">
                          <Code className="h-4 w-4 text-red-400 mr-2" />
                          <span className="font-mono">local function</span>
                          <span className="font-mono text-green-300 ml-2">onTouch()</span>
                        </div>
                        <div className="flex items-center text-sm ml-6 mt-1">
                          <span className="font-mono text-orange-300">print("Hello, Roblox!")</span>
                        </div>
                        <div className="flex items-center text-sm text-blue-300 mt-1">
                          <span className="font-mono">end</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-5 -right-5 bg-red-600 rounded-full p-4 shadow-lg animate-bounce-slow">
                    <Layout className="h-8 w-8 text-white" />
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
                className="bg-gradient-to-br from-red-500 to-red-700 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-xl w-16 h-16 flex items-center justify-center mb-4">
                  <Box className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Platformă inovativă</h3>
                <p className="text-white/90">
                  Roblox oferă o platformă completă pentru crearea, 
                  publicarea și monetizarea jocurilor tale.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-xl w-16 h-16 flex items-center justify-center mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Programare Lua</h3>
                <p className="text-white/90">
                  Învață un limbaj de programare real și puternic, utilizat în 
                  industria jocurilor și nu numai.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-xl w-16 h-16 flex items-center justify-center mb-4">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Comunitate globală</h3>
                <p className="text-white/90">
                  Creațiile tale pot fi jucate de milioane de utilizatori din 
                  întreaga lume, pe toate platformele.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* About the Course */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-red-600">Despre acest curs</h2>
                <p className="mb-4 text-gray-700">
                  Cursul de Roblox Studio și Lua este conceput pentru tinerii pasionați de jocuri care vor să facă
                  tranziția de la simpli jucători la creatori de experiențe interactive. Vei învăța să folosești
                  platforma Roblox Studio pentru a construi medii 3D captivante și să le aduci la viață folosind
                  limbajul de programare Lua.
                </p>
                <p className="mb-4 text-gray-700">
                  Pe parcursul cursului, vei dobândi abilități de modelare 3D, design de nivel, programare și game design.
                  Roblox este una dintre cele mai populare platforme pentru tineri, cu peste 150 de milioane de utilizatori
                  activi lunar, oferindu-ți șansa de a-ți împărtăși creațiile cu o comunitate globală enormă.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-red-50 p-4 rounded-xl shadow-sm border border-red-100">
                    <h3 className="font-bold text-red-700 mb-2">Ce vei învăța:</h3>
                    <ul className="grid grid-cols-1 gap-2">
                      <li className="flex items-start">
                        <Box className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Modelarea și construcția în mediul 3D</span>
                      </li>
                      <li className="flex items-start">
                        <Box className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Fundamente ale programării în Lua</span>
                      </li>
                      <li className="flex items-start">
                        <Box className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Fizică și interacțiuni în joc</span>
                      </li>
                      <li className="flex items-start">
                        <Box className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Crearea de interfețe pentru utilizatori</span>
                      </li>
                      <li className="flex items-start">
                        <Box className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Publicarea și monetizarea jocurilor</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-xl shadow-sm border border-orange-100">
                    <h3 className="font-bold text-orange-700 mb-2">Beneficii:</h3>
                    <ul className="grid grid-cols-1 gap-2">
                      <li className="flex items-start">
                        <Box className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Dezvoltarea gândirii logice și a creativității</span>
                      </li>
                      <li className="flex items-start">
                        <Box className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Învățarea unui limbaj de programare real</span>
                      </li>
                      <li className="flex items-start">
                        <Box className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Crearea unui portofoliu de proiecte</span>
                      </li>
                      <li className="flex items-start">
                        <Box className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Posibilitatea de a câștiga bani reali</span>
                      </li>
                      <li className="flex items-start">
                        <Box className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Dezvoltarea abilităților colaborative</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Sessions */}
        <section id="sessions" className="py-8 bg-gradient-to-b from-white to-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-red-800 font-medium text-sm mb-3">
                <span className="flex items-center">
                  <Layers className="w-4 h-4 mr-1" />
                  Lecții Interactive
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Explorează Lecțiile Roblox & Lua</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                De la primii pași în Roblox Studio la crearea de jocuri complexe cu Lua
              </p>
            </div>
            
            <div className="relative">
              {/* Background pattern for the sessions section */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 to-white/30 -z-10"></div>
              
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
            </div>
          </div>
        </section>

        {/* Why Roblox */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">De ce Roblox Studio?</h2>
              <p className="text-xl mb-10 text-white/90">
                Roblox este una dintre cele mai populare platforme de creare și joc din lume
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">150+ Milioane</h3>
                  <p className="text-white/80">de utilizatori activi lunar pe platforma Roblox</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Server className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Multi-platformă</h3>
                  <p className="text-white/80">Jocurile funcționează pe PC, mobil, console și realitate virtuală</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Engine complet</h3>
                  <p className="text-white/80">Include tot ce ai nevoie: fizică, networking, animații și multe altele</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild size="lg" className="bg-white hover:bg-white/90 text-red-600 shadow-lg font-medium px-8">
                  <a href="#sessions" className="flex items-center">
                    <span>Începe aventura Roblox</span>
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

export default RobloxLua;