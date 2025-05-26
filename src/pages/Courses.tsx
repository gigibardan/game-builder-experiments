
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { 
  Code, 
  Laptop, 
  Gamepad, 
  Rocket, 
  PenTool, 
  LayoutGrid, 
  Boxes, 
  Globe, 
  Coffee,
  Cog,
  Cpu,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

const Courses = () => {
  const programmingCourses = [
    {
      title: "Scratch",
      subtitle: "Laboratorul de Jocuri",
      description: "Perfect pentru începători! Copiii învață conceptele de bază ale programării prin crearea de povești interactive, jocuri și animații.",
      icon: <PenTool className="h-6 w-6" />,
      color: "border-amber-300",
      bgcolor: "bg-gradient-to-r from-amber-500 to-amber-600",
      link: "/courses/scratch",
      age: "8-12 ani",
      level: "Începător"
    },
    {
      title: "App Inventor",
      subtitle: "Atelierul de Aplicații Mobile",
      description: "Creează aplicații mobile reale! Copiii învață să dezvolte aplicații pentru Android folosind programarea vizuală.",
      icon: <Laptop className="h-6 w-6" />,
      color: "border-blue-300",
      bgcolor: "bg-gradient-to-r from-blue-500 to-blue-600",
      link: "/courses/appinventor",
      age: "8-12 ani",
      level: "Începător"
    },
    {
      title: "Construct 3",
      subtitle: "Dezvoltare de Jocuri 2D",
      description: "Creează jocuri profesionale 2D fără cod complex! Perfect pentru tinerii care vor să-și vadă ideile transformate în jocuri reale.",
      icon: <Gamepad className="h-6 w-6" />,
      color: "border-green-300",
      bgcolor: "bg-gradient-to-r from-green-500 to-green-600",
      link: "/courses/construct3",
      age: "10-15 ani",
      level: "Intermediar"
    },
    {
      title: "GDevelop",
      subtitle: "Fabrica de Jocuri",
      description: "O platformă intuitivă pentru crearea de jocuri 2D și 3D. Copiii învață logica jocurilor și principiile game design-ului.",
      icon: <Rocket className="h-6 w-6" />,
      color: "border-purple-300",
      bgcolor: "bg-gradient-to-r from-purple-500 to-purple-600",
      link: "/courses/gdevelop",
      age: "10-15 ani",
      level: "Intermediar"
    },
    {
      title: "Alice 3",
      subtitle: "Povești 3D Interactive",
      description: "Programarea devine o aventură 3D! Copiii creează povești animate și învață concepte avansate de programare.",
      icon: <Code className="h-6 w-6" />,
      color: "border-cyan-300",
      bgcolor: "bg-gradient-to-r from-cyan-500 to-cyan-600",
      link: "/courses/alice3",
      age: "10-15 ani",
      level: "Intermediar"
    },
    {
      title: "micro:bit Arcade",
      subtitle: "Jocuri și Electronice",
      description: "Combină programarea cu electronica pentru a crea jocuri fizice interactive. O introducere perfectă în IoT pentru copii.",
      icon: <LayoutGrid className="h-6 w-6" />,
      color: "border-red-300",
      bgcolor: "bg-gradient-to-r from-red-500 to-red-600",
      link: "/courses/microbitarcade",
      age: "10-15 ani",
      level: "Intermediar"
    },
    {
      title: "Minecraft Modding",
      subtitle: "De la jucător la creator",
      description: "Transformă pasiunea pentru Minecraft în abilități de programare! Creează moduri personalizate și învață Java.",
      icon: <Boxes className="h-6 w-6" />,
      color: "border-emerald-300",
      bgcolor: "bg-gradient-to-r from-emerald-500 to-emerald-600",
      link: "/courses/minecraft-modding",
      age: "12-18 ani",
      level: "Avansat"
    },
    {
      title: "Roblox Lua",
      subtitle: "Universul Dezvoltării de Jocuri",
      description: "Învață Lua prin dezvoltarea de jocuri pe Roblox. De la scripturi simple la sisteme complexe de joc.",
      icon: <Code className="h-6 w-6" />,
      color: "border-indigo-300",
      bgcolor: "bg-gradient-to-r from-indigo-500 to-indigo-600",
      link: "/courses/robloxlua",
      age: "12-18 ani",
      level: "Avansat"
    },
    {
      title: "Python",
      subtitle: "De la Cod la Aplicații",
      description: "Unul dintre cele mai populare limbaje de programare! De la jocuri simple la aplicații web și inteligență artificială.",
      icon: <Code className="h-6 w-6" />,
      color: "border-yellow-300",
      bgcolor: "bg-gradient-to-r from-yellow-500 to-yellow-600",
      link: "/courses/python",
      age: "12-18 ani",
      level: "Avansat"
    },
    {
      title: "Frontend Development",
      subtitle: "Construiește Web-ul Viitorului",
      description: "HTML, CSS, JavaScript și React. Creează site-uri web moderne și aplicații interactive pentru browser.",
      icon: <Globe className="h-6 w-6" />,
      color: "border-blue-300",
      bgcolor: "bg-gradient-to-r from-blue-500 to-blue-600",
      link: "/courses/frontenddev",
      age: "12-18 ani",
      level: "Avansat"
    },
    {
      title: "Greenfoot",
      subtitle: "Java prin Jocuri",
      description: "Învață Java, unul dintre cele mai importante limbaje de programare, prin crearea de jocuri interactive și simulări.",
      icon: <Coffee className="h-6 w-6" />,
      color: "border-orange-300",
      bgcolor: "bg-gradient-to-r from-orange-500 to-orange-600",
      link: "/courses/greenfoot",
      age: "12-18 ani",
      level: "Avansat"
    },
    {
      title: "Godot",
      subtitle: "Game Development Pro",
      description: "Engine-ul open-source pentru dezvoltarea profesională de jocuri. De la 2D la 3D, de la mobile la desktop.",
      icon: <Gamepad className="h-6 w-6" />,
      color: "border-purple-300",
      bgcolor: "bg-gradient-to-r from-purple-500 to-purple-600",
      link: "/courses/godot",
      age: "12-18 ani",
      level: "Avansat"
    }
  ];

  const roboticsCourses = [
    {
      title: "LEGO SPIKE Essentials",
      subtitle: "Primul pas în robotică",
      description: "Acest modul transformă învățarea roboticii și programării într-o aventură plină de entuziasm pentru copiii cu vârste între 7 și 9 ani.",
      icon: <Cog className="h-6 w-6" />,
      color: "border-orange-300",
      bgcolor: "bg-gradient-to-r from-orange-500 to-orange-600",
      link: "/courses/lego-spike-essentials",
      age: "7-9 ani",
      level: "Începător"
    },
    {
      title: "LEGO SPIKE Prime",
      subtitle: "Robotică avansată",
      description: "O incursiune în lumea roboticii avansate, unde creativitatea și logica se îmbină armonios cu tehnologia.",
      icon: <Cpu className="h-6 w-6" />,
      color: "border-red-300",
      bgcolor: "bg-gradient-to-r from-red-500 to-red-600",
      link: "/courses/lego-spike-prime",
      age: "9-12 ani",
      level: "Intermediar"
    },
    {
      title: "micro:bit Explorers",
      subtitle: "Programare și electronice",
      description: "O lume fascinantă a tehnologiei, unde programarea și electronica de bază se întâlnesc pentru a crea proiecte interactive.",
      icon: <Zap className="h-6 w-6" />,
      color: "border-blue-300",
      bgcolor: "bg-gradient-to-r from-blue-500 to-blue-600",
      link: "/courses/microbit-explorers",
      age: "9-12 ani",
      level: "Intermediar"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-course-blue to-course-purple text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Cursurile Noastre
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              De la primul cod la creații complexe - descoperă lumea programării și roboticii
            </motion.p>
          </div>
        </section>

        {/* Programming Courses Section */}
        <section id="programming-courses" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Cursuri de Programare
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                De la concepte de bază la dezvoltarea aplicațiilor complexe
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programmingCourses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Robotics Courses Section */}
        <section id="robotics-courses" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Cursuri de Robotică
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                De la primul robot la creații complexe
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roboticsCourses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-course-purple to-course-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Gata să începi aventura?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Alătură-te comunității noastre și descoperă magia programării și roboticii!
            </motion.p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
