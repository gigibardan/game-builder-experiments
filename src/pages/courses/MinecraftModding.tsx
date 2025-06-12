import React from 'react';
import { 
  Box, 
  Hammer, 
  Code, 
  Cog, 
  ArrowRight, 
  Star, 
  Layers, 
  Award, 
  Layout,
  LayoutPanelTop 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import SessionCard from '@/components/SessionCard';
import MinecraftModdingSessions from '@/components/MinecraftModdingSessions';

const MinecraftModding = () => {
  // Array cu lectiile disponibile 
  const sessions = [
    {
      id: 1,
      title: "Introducere în Minecraft Modding",
      description: "Descoperă ce înseamnă să creezi modificări pentru Minecraft și configurează mediul de dezvoltare.",
      duration: "45 minute",
      level: "Începător",
      ageGroup: "12-16 ani",
      link: "/minecraftmodding/session1",
      highlights: ["Introducere în MCreator", "Configurare mediu", "Concepte de bază"],
      imageSrc: "/assets/images/minecraft/session1-preview.png",
      color: "green"
    },
    {
      id: 2,
      title: "Primul tău addon: Armură de rubin",
      description: "Învață să creezi o nouă armură și să definești proprietățile acesteia în joc.",
      duration: "60 minute",
      level: "Începător",
      ageGroup: "12-16 ani",
      link: "/minecraftmodding/ruby-armor",
      highlights: ["Definirea materialelor", "Crearea texturii", "Configurarea proprietăților", "Testarea în joc"],
      imageSrc: "/assets/images/minecraft/ruby-armor.png",
      color: "emerald"
    },
    {
      id: 3,
      title: "Creează o dimensiune nouă: Tărâmul de cristal",
      description: "Construiește o lume nouă cu propriile reguli, blocuri și structuri.",
      duration: "90 minute",
      level: "Intermediar",
      ageGroup: "12-16 ani",
      link: "/minecraftmodding/crystal-realm",
      highlights: ["Definire dimensiune", "Generare de teren", "Blocuri personalizate", "Structuri procedurale"],
      imageSrc: "/assets/images/minecraft/crystal-realm.png",
      color: "lime"
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

  // Array cu proiecte de elevi
  const projects = [
    {
      title: "Dimensiune Floating Islands",
      description: "Insulele plutitoare cu biome personalizate și structuri generate.",
      imageSrc: "https://static.planetminecraft.com/files/resource_media/screenshot/1632/2016-08-13_205842-10476855.png"
    },
    {
      title: "Set de armuri elementale",
      description: "Armuri cu proprietăți magice pentru foc, apă, aer și pământ.",
      imageSrc: "https://static.planetminecraft.com/files/resource_media/screenshot/1938/screenshot-2019-09-22-at-204526-1569196151.png"
    },
    {
      title: "Arme magice și rețete noi",
      description: "Săbii cu efecte speciale și rețete de crafting personalizate.",
      imageSrc: "https://static.planetminecraft.com/files/resource_media/screenshot/1726/2017-07-01-17-54-03-1498926666.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-green-50/20">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 py-16 md:py-20">
          {/* Decorative elements - Minecraft style */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            {/* Minecraft blocks style decoration */}
            <div className="absolute w-24 h-24 bg-green-500 rounded-none border-4 border-black/20 -top-6 left-1/4 animate-float"></div>
            <div className="absolute w-16 h-16 bg-emerald-500 rounded-none border-4 border-black/20 top-20 left-1/5 animate-float-delay"></div>
            <div className="absolute w-32 h-32 bg-lime-500 rounded-none border-4 border-black/20 -bottom-10 right-1/4 animate-float-slow"></div>
            <div className="absolute w-20 h-20 bg-green-800 rounded-none border-4 border-black/20 top-10 right-10 animate-float-delay-slow"></div>
            
            {/* Minecraft style icons */}
            <div className="absolute top-1/3 left-1/6 transform -rotate-12">
              <Box className="w-24 h-24 text-white opacity-30" />
            </div>
            <div className="absolute bottom-1/4 right-1/5 transform rotate-12">
              <Hammer className="w-20 h-20 text-white opacity-30" />
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
                  <div className="inline-block mb-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-none border-2 border-white/30">
                    <p className="text-white font-minecraft flex items-center">
                      <Box className="h-4 w-4 mr-2" />
                      De la jucător la creator
                    </p>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-minecraft mb-4 text-white drop-shadow-md">
                    MINECRAFT MODDING
                    <span className="block text-yellow-300">Atelierul de Mod-uri</span>
                  </h1>
                  <p className="text-xl mb-8 text-white/90 max-w-xl drop-shadow-sm">
                    Transformă jocul tău preferat prin crearea propriilor blocuri, iteme, 
                    creaturi și chiar dimensiuni folosind MCreator.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button asChild size="lg" className="bg-white hover:bg-white/90 text-green-700 shadow-md rounded-none">
                    <a href="#sessions">
                      <span>Vezi lecțiile</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 shadow-md rounded-none">
                    <a href="https://mcreator.net/" target="_blank" rel="noopener noreferrer">
                      <span>Site oficial MCreator</span>
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
                  <div className="bg-green-800 rounded-none shadow-2xl p-6 overflow-hidden max-w-md border-4 border-green-900/70">
                    <img 
                      src="/assets/images/mcreator/minecraft-logo.webp" 
                      alt="Minecraft Logo" 
                      className="w-full object-cover border-2 border-black/20"
                    />
                    <div className="mt-4 p-2 bg-green-700/50 rounded-none border-2 border-green-900/50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex">
                          <div className="w-3 h-3 bg-red-500 rounded-none border border-black/20 mr-1"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-none border border-black/20 mr-1"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-none border border-black/20"></div>
                        </div>
                        <div className="text-xs text-green-300 font-minecraft">mod.json</div>
                      </div>
                      <div className="bg-green-900/50 p-2 rounded-none border-2 border-green-800">
                        <div className="flex items-center text-sm text-green-300 font-minecraft">
                          <Code className="h-4 w-4 text-yellow-300 mr-2" />
                          <span>{"{"}</span>
                        </div>
                        <div className="flex items-start text-sm text-green-300 ml-6 mt-1 font-minecraft">
                          <span className="text-yellow-300">"item"</span>: <span className="text-white">"ruby_sword"</span>,
                        </div>
                        <div className="flex items-start text-sm text-green-300 ml-6 mt-1 font-minecraft">
                          <span className="text-yellow-300">"damage"</span>: <span className="text-white">8</span>
                        </div>
                        <div className="flex items-start text-sm text-green-300 ml-0 mt-1 font-minecraft">
                          <span>{"}"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-5 -right-5 bg-green-600 rounded-none p-4 shadow-lg animate-bounce-slow border-2 border-green-900">
                    <Hammer className="h-8 w-8 text-white" />
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
                className="bg-gradient-to-br from-green-600 to-green-800 rounded-none shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 border-2 border-green-900/20"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-none w-16 h-16 flex items-center justify-center mb-4 border-2 border-green-500">
                  <Box className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-minecraft mb-2 text-white">Fără Cod</h3>
                <p className="text-white/90">
                  Creează mod-uri complexe folosind interfața vizuală MCreator, 
                  fără a scrie o linie de cod Java.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-none shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 border-2 border-emerald-900/20"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-none w-16 h-16 flex items-center justify-center mb-4 border-2 border-emerald-500">
                  <LayoutPanelTop className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-minecraft mb-2 text-white">Creativitate Totală</h3>
                <p className="text-white/90">
                  Adaugă noi blocuri, iteme, armuri, unelte, creaturi și 
                  chiar dimensiuni întregi în jocul tău.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-lime-600 to-lime-800 rounded-none shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 border-2 border-lime-900/20"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-none w-16 h-16 flex items-center justify-center mb-4 border-2 border-lime-500">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-minecraft mb-2 text-white">Distribuție Ușoară</h3>
                <p className="text-white/90">
                  Exportă mod-urile tale pentru a le distribui prietenilor sau 
                  pentru a le împărtăși cu comunitatea Minecraft.
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
        <h2 className="text-2xl font-minecraft mb-4 text-green-700">Despre acest curs</h2>
        <p className="mb-4 text-gray-700">
          Cursul de Minecraft Modding este conceput pentru tinerii pasionați de Minecraft care doresc să treacă 
          de la simpli jucători la creatori de conținut. Vei învăța să creezi propriile blocuri, 
          iteme, creaturi și chiar dimensiuni folosind MCreator, un instrument vizual care face modding-ul 
          accesibil și pentru cei fără experiență în programare.
        </p>
        <p className="mb-4 text-gray-700">
          Pe parcursul cursului, vei dezvolta abilități de design, vei înțelege concepte fundamentale de 
          dezvoltare de jocuri și vei avea oportunitatea de a-ți împărtăși creațiile cu comunitatea Minecraft.
        </p>
      </div>
    </div>
  </div>
</section>
        
        {/* Course Sessions */}
        <section id="sessions" className="py-8 bg-gradient-to-b from-white to-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="inline-block rounded-none bg-green-100 px-3 py-1 text-green-800 font-medium text-sm mb-3 border-2 border-green-200">
                <span className="flex items-center font-minecraft">
                  <Layers className="w-4 h-4 mr-1" />
                  Lecții Interactive
                </span>
              </div>
              <h2 className="text-3xl font-minecraft mb-4 text-gray-800">Explorează Lecțiile Minecraft Modding</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                De la concepte de bază la crearea de mod-uri complexe, învață să transformi Minecraft
              </p>
            </div>
            
            <MinecraftModdingSessions />
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="inline-block rounded-none bg-emerald-100 px-3 py-1 text-emerald-800 font-medium text-sm mb-3 border-2 border-emerald-200">
                <span className="flex items-center font-minecraft">
                  <Star className="w-4 h-4 mr-1" />
                  Showcase
                </span>
              </div>
              <h2 className="text-3xl font-minecraft mb-4 text-gray-800">Exemple de proiecte create de elevi</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descoperă ce poți crea după parcurgerea cursului nostru
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="rounded-none overflow-hidden shadow-md border-2 border-green-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-minecraft mb-2 text-green-700">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden bg-gradient-to-r from-green-700 to-emerald-700 text-white">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            {/* Pixel blocks background - Minecraft style */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i}
                className="absolute w-16 h-16 bg-white rounded-none"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0.3 + Math.random() * 0.4
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-minecraft mb-4 text-white drop-shadow-sm">De la idee la mod funcțional</h2>
              <p className="text-xl mb-8 text-white/90">
                Transformă-ți creativitatea în realitate și devino creator de conținut pentru Minecraft
              </p>
              <div className="inline-block">
                <Button asChild size="lg" className="bg-white hover:bg-white/90 text-green-700 shadow-lg font-medium px-8 rounded-none">
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
          @font-face {
            font-family: 'Minecraft';
            src: url('/assets/fonts/Minecraft.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
          }
          
          .font-minecraft {
            font-family: 'Minecraft', sans-serif;
            letter-spacing: 0.05em;
          }
          
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

export default MinecraftModding;
