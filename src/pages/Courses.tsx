
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import CourseCard from '@/components/CourseCard';
import { 
  Code, Gamepad, Laptop, Rocket, Layout, Brush, Blocks, 
  Box, Puzzle, Binary, Coffee, Globe 
} from 'lucide-react';

const Courses = () => {
  const { isAuthenticated } = useAuth();
  
  const courses = [
    {
      title: "Laboratorul de Jocuri",
      subtitle: "Scratch",
      description: "Descoperă programarea prin joc și creează primele tale proiecte interactive.",
      icon: <Puzzle className="h-10 w-10 text-white" />,
      color: "border-yellow-400",
      bgcolor: "bg-yellow-400",
      link: "/courses/scratch",
      age: "8-12 ani",
      level: "Începător"
    },
    {
      title: "Atelierul de Aplicații Mobile",
      subtitle: "AppInventor",
      description: "Învață să creezi aplicații și jocuri pentru dispozitive mobile.",
      icon: <Laptop className="h-10 w-10 text-white" />,
      color: "border-course-purple",
      bgcolor: "bg-course-purple",
      link: "/courses/appinventor",
      age: "10-14 ani",
      level: "Începător-Intermediar"
    },
    {
      title: "Dezvoltare de Jocuri 2D",
      subtitle: "Construct 3",
      description: "Creează jocuri 2D captivante fără cunoștințe avansate de programare.",
      icon: <Gamepad className="h-10 w-10 text-white" />,
      color: "border-blue-500",
      bgcolor: "bg-blue-500",
      link: "/courses/construct3",
      age: "10-15 ani",
      level: "Începător-Intermediar"
    },
    {
      title: "Fabrica de Jocuri",
      subtitle: "GDevelop",
      description: "Dezvoltă jocuri 2D complexe cu fizică realistă și efecte vizuale impresionante.",
      icon: <Rocket className="h-10 w-10 text-white" />,
      color: "border-indigo-600",
      bgcolor: "bg-indigo-600",
      link: "/courses/gdevelop",
      age: "11-15 ani",
      level: "Intermediar"
    },
    {
      title: "Povești 3D Interactive",
      subtitle: "Alice 3",
      description: "Creează povești și animații 3D interactive într-un mediu vizual de programare.",
      icon: <Box className="h-10 w-10 text-white" />,
      color: "border-pink-500",
      bgcolor: "bg-pink-500",
      link: "/courses/alice3",
      age: "12-16 ani",
      level: "Intermediar"
    },
    {
      title: "Jocuri și Electronice",
      subtitle: "micro:bit Arcade",
      description: "Combină programarea cu electronica pentru a crea jocuri fizice interactive.",
      icon: <Blocks className="h-10 w-10 text-white" />,
      color: "border-red-500",
      bgcolor: "bg-red-500",
      link: "/courses/microbit-arcade",
      age: "11-15 ani",
      level: "Intermediar"
    },
    {
      title: "De la jucător la creator",
      subtitle: "Minecraft Modding",
      description: "Transformă jocul tău preferat prin crearea propriilor modificări și extensii.",
      icon: <Brush className="h-10 w-10 text-white" />,
      color: "border-green-600",
      bgcolor: "bg-green-600",
      link: "/courses/minecraft-modding",
      age: "12-16 ani",
      level: "Intermediar-Avansat"
    },
    {
      title: "Universul Dezvoltării de Jocuri",
      subtitle: "Roblox Lua",
      description: "Creează jocuri complexe în platforma Roblox folosind limbajul de programare Lua.",
      icon: <Layout className="h-10 w-10 text-white" />,
      color: "border-red-600",
      bgcolor: "bg-red-600",
      link: "/courses/roblox-lua",
      age: "12-17 ani",
      level: "Intermediar-Avansat"
    },
    {
      title: "De la Cod la Aplicații",
      subtitle: "Python",
      description: "Începe călătoria în programarea textului cu unul dintre cele mai populare limbaje.",
      icon: <Code className="h-10 w-10 text-white" />,
      color: "border-blue-600",
      bgcolor: "bg-blue-600",
      link: "/courses/python",
      age: "13-18 ani",
      level: "Intermediar-Avansat"
    },
    {
      title: "Java prin Jocuri",
      subtitle: "Greenfoot",
      description: "Învață programare orientată pe obiecte prin crearea jocurilor în Java.",
      icon: <Coffee className="h-10 w-10 text-white" />,
      color: "border-orange-600",
      bgcolor: "bg-orange-600",
      link: "/courses/greenfoot",
      age: "14-18 ani",
      level: "Intermediar-Avansat"
    },
    {
      title: "Game Development Pro",
      subtitle: "Godot",
      description: "Dezvoltă jocuri profesionale 2D și 3D cu un motor de joc avansat și gratuit.",
      icon: <Gamepad className="h-10 w-10 text-white" />,
      color: "border-indigo-700",
      bgcolor: "bg-indigo-700",
      link: "/courses/godot",
      age: "14-18 ani",
      level: "Avansat"
    },
    {
      title: "Construiește Web-ul Viitorului",
      subtitle: "Frontend Development",
      description: "Învață să creezi site-uri web moderne și interactive cu HTML, CSS și JavaScript.",
      icon: <Globe className="h-10 w-10 text-white" />,
      color: "border-cyan-600",
      bgcolor: "bg-cyan-600",
      link: "/courses/frontenddev",
      age: "13-18 ani",
      level: "Intermediar-Avansat"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-course-blue to-course-purple py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Cursurile noastre</h1>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Descoperă cursurile noastre interactive de programare pentru toate vârstele și nivelurile de experiență
              </p>
            </motion.div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Toate cursurile disponibile</h2>
              <p className="text-gray-600">Explorează toate cursurile noastre și alege-l pe cel care ți se potrivește</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <CourseCard
                    title={course.title}
                    subtitle={course.subtitle}
                    description={course.description}
                    icon={course.icon}
                    color={course.color}
                    bgcolor={course.bgcolor}
                    link={course.link}
                    age={course.age}
                    level={course.level}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Gata să începi aventura programării?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {isAuthenticated 
                ? "Explorează cursurile și începe să înveți acum!" 
                : "Creează un cont sau autentifică-te pentru a accesa cursurile noastre complete."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {!isAuthenticated && (
                <>
                  <a 
                    href="/register" 
                    className="bg-course-purple hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Creează cont
                  </a>
                  <a 
                    href="/login" 
                    className="bg-white border-2 border-course-blue text-course-blue hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Autentificare
                  </a>
                </>
              )}
              {isAuthenticated && (
                <a 
                  href="/scratch/session1" 
                  className="bg-course-purple hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Începe primul curs
                </a>
              )}
            </div>
          </div>
        </section>
        
        {/* Admin Links */}
        <section className="py-4 bg-gray-800 text-white">
          <div className="container mx-auto px-4 text-center text-xs">
            <p>Links Administrative:</p>
            <div className="flex flex-wrap gap-4 justify-center mt-2">
              <a href="/admin/dashboard" className="text-gray-400 hover:text-white">Admin Dashboard</a>
              <a href="/lesson-template" className="text-gray-400 hover:text-white">Template Lecție</a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
