
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Gamepad, 
  Laptop, 
  Code, 
  Rocket, 
  Box, 
  LayoutGrid, 
  Blocks,
  Layout,
  Brush,
  Globe,
  Coffee
} from 'lucide-react';

const Courses = () => {
  // Motion variants for animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Course data with corrected links
  const coursesData = [
    {
      title: "Laboratorul de Jocuri",
      subtitle: "Scratch",
      description: "Descoperă programarea prin joc și creează primele tale proiecte interactive.",
      icon: <Gamepad className="h-10 w-10 text-yellow-500" />,
      color: "border-yellow-500",
      bgColor: "bg-yellow-500",
      link: "/courses/scratch",
      age: "8-12 ani",
      level: "Începător"
    },
    {
      title: "Atelierul de Aplicații Mobile",
      subtitle: "App Inventor",
      description: "Învață să creezi aplicații și jocuri pentru dispozitive mobile.",
      icon: <Laptop className="h-10 w-10 text-purple-600" />,
      color: "border-purple-600",
      bgColor: "bg-purple-600",
      link: "/courses/appinventor",
      age: "10-14 ani",
      level: "Începător-Intermediar"
    },
    {
      title: "Povești 3D Interactive",
      subtitle: "Alice 3",
      description: "Creează povești și animații 3D interactive într-un mediu vizual de programare.",
      icon: <Box className="h-10 w-10 text-pink-600" />,
      color: "border-pink-600",
      bgColor: "bg-pink-600",
      link: "/courses/alice3",
      age: "12-16 ani",
      level: "Intermediar"
    },
    {
      title: "Jocuri și Electronice",
      subtitle: "micro:bit Arcade",
      description: "Combină programarea cu electronica pentru a crea jocuri fizice interactive.",
      icon: <LayoutGrid className="h-10 w-10 text-red-500" />,
      color: "border-red-500",
      bgColor: "bg-red-500",
      link: "/courses/microbitarcade",
      age: "11-15 ani",
      level: "Intermediar"
    },
    {
      title: "De la jucător la creator",
      subtitle: "Minecraft Modding",
      description: "Transformă jocul tău preferat prin crearea propriilor modificări și extensii.",
      icon: <Blocks className="h-10 w-10 text-green-600" />,
      color: "border-green-600",
      bgColor: "bg-green-600",
      link: "/courses/minecraft-modding",
      age: "12-16 ani",
      level: "Intermediar-Avansat"
    },
    {
      title: "Universul Dezvoltării de Jocuri",
      subtitle: "Roblox Lua",
      description: "Creează jocuri complexe în platforma Roblox folosind limbajul de programare Lua.",
      icon: <Layout className="h-10 w-10 text-red-600" />,
      color: "border-red-600",
      bgColor: "bg-red-600",
      link: "/courses/robloxlua",
      age: "12-17 ani",
      level: "Intermediar-Avansat"
    },
    {
      title: "De la Cod la Aplicații",
      subtitle: "Python",
      description: "Începe călătoria în programarea textului cu unul dintre cele mai populare limbaje.",
      icon: <Code className="h-10 w-10 text-blue-600" />,
      color: "border-blue-600",
      bgColor: "bg-blue-600",
      link: "/courses/python",
      age: "13-18 ani",
      level: "Intermediar-Avansat"
    },
    {
      title: "Construiește Web-ul Viitorului",
      subtitle: "Frontend Development",
      description: "Învață să creezi site-uri web moderne și interactive cu HTML, CSS și JavaScript.",
      icon: <Globe className="h-10 w-10 text-cyan-600" />,
      color: "border-cyan-600",
      bgColor: "bg-cyan-600",
      link: "/courses/frontenddev",
      age: "13-18 ani",
      level: "Intermediar-Avansat"
    },
    {
      title: "Java prin Jocuri",
      subtitle: "Greenfoot",
      description: "Învață programare orientată pe obiecte prin crearea jocurilor în Java.",
      icon: <Coffee className="h-10 w-10 text-orange-600" />,
      color: "border-orange-600",
      bgColor: "bg-orange-600",
      link: "/courses/greenfoot",
      age: "14-18 ani",
      level: "Intermediar-Avansat"
    },
    {
      title: "Game Development Pro",
      subtitle: "Godot",
      description: "Dezvoltă jocuri profesionale 2D și 3D cu un motor de joc avansat și gratuit.",
      icon: <Gamepad className="h-10 w-10 text-indigo-700" />,
      color: "border-indigo-700",
      bgColor: "bg-indigo-700",
      link: "/courses/godot",
      age: "14-18 ani",
      level: "Avansat"
    },
    {
      title: "Dezvoltare de Jocuri 2D",
      subtitle: "Construct 3",
      description: "Creează jocuri 2D captivante fără cunoștințe avansate de programare.",
      icon: <Gamepad className="h-10 w-10 text-blue-500" />,
      color: "border-blue-500",
      bgColor: "bg-blue-500",
      link: "/courses/construct3",
      age: "10-15 ani",
      level: "Începător-Intermediar"
    },
    {
      title: "Fabrica de Jocuri",
      subtitle: "GDevelop",
      description: "Dezvoltă jocuri 2D complexe cu fizică realistă și efecte vizuale impresionante.",
      icon: <Rocket className="h-10 w-10 text-indigo-600" />,
      color: "border-indigo-600",
      bgColor: "bg-indigo-600",
      link: "/courses/gdevelop",
      age: "11-15 ani",
      level: "Intermediar"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-course-blue to-course-purple py-16">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Cursurile noastre</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Explorează programele noastre educative adaptate pentru diferite niveluri de experiență și vârste
              </p>
            </div>
          </div>
        </section>
        
        {/* Courses Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {coursesData.map((course, index) => (
                <motion.div key={index} variants={item}>
                  <div className={`bg-white rounded-xl overflow-hidden shadow-lg border-t-4 ${course.color} h-full flex flex-col`}>
                    <div className="p-6">
                      <div className="flex items-start mb-4">
                        <div className={`${course.bgColor} p-3 rounded-lg text-white mr-4`}>
                          {course.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                          <p className="text-gray-500 font-medium">{course.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{course.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                          {course.age}
                        </span>
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                          {course.level}
                        </span>
                      </div>
                    </div>
                    <div className="mt-auto p-6 pt-0">
                      <Link to={course.link} className={`inline-block w-full py-3 px-6 text-center text-white font-medium rounded-lg ${course.bgColor} hover:opacity-90 transition-opacity`}>
                        Vezi detalii
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
