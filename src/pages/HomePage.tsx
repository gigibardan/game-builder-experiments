
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, Gamepad, Laptop, Rocket, Layout, Brush, Blocks, 
  Box, PuzzlePiece, Binary, Coffee, Globe, BadgeCheck 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { motion } from 'framer-motion';

const HomePage = () => {
  useEffect(() => {
    document.title = "TechMinds Academy - Cursuri de Programare pentru Copii";
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const courses = [
    {
      title: "Laboratorul de Jocuri",
      subtitle: "Scratch",
      description: "Descoperă programarea prin joc și creează primele tale proiecte interactive.",
      icon: <PuzzlePiece className="h-10 w-10" />,
      color: "border-yellow-400",
      bgcolor: "bg-yellow-400",
      link: "/scratch",
      age: "8-12 ani",
      level: "Începător"
    },
    {
      title: "Atelierul de Aplicații Mobile",
      subtitle: "AppInventor",
      description: "Învață să creezi aplicații și jocuri pentru dispozitive mobile.",
      icon: <Laptop className="h-10 w-10" />,
      color: "border-course-purple",
      bgcolor: "bg-course-purple",
      link: "/appinventor",
      age: "10-14 ani",
      level: "Începător-Intermediar"
    },
    {
      title: "Dezvoltare de Jocuri 2D",
      subtitle: "Construct 3",
      description: "Creează jocuri 2D captivante fără cunoștințe avansate de programare.",
      icon: <Gamepad className="h-10 w-10" />,
      color: "border-blue-500",
      bgcolor: "bg-blue-500",
      link: "/construct3",
      age: "10-15 ani",
      level: "Începător-Intermediar"
    },
    {
      title: "Fabrica de Jocuri",
      subtitle: "GDevelop",
      description: "Dezvoltă jocuri 2D complexe cu fizică realistă și efecte vizuale impresionante.",
      icon: <Rocket className="h-10 w-10" />,
      color: "border-indigo-600",
      bgcolor: "bg-indigo-600",
      link: "/gdevelop",
      age: "11-15 ani",
      level: "Intermediar"
    },
    {
      title: "Povești 3D Interactive",
      subtitle: "Alice 3",
      description: "Creează povești și animații 3D interactive într-un mediu vizual de programare.",
      icon: <Box className="h-10 w-10" />,
      color: "border-pink-500",
      bgcolor: "bg-pink-500",
      link: "/alice3",
      age: "12-16 ani",
      level: "Intermediar"
    },
    {
      title: "Jocuri și Electronice",
      subtitle: "micro:bit Arcade",
      description: "Combină programarea cu electronica pentru a crea jocuri fizice interactive.",
      icon: <Blocks className="h-10 w-10" />,
      color: "border-red-500",
      bgcolor: "bg-red-500",
      link: "/microbit-arcade",
      age: "11-15 ani",
      level: "Intermediar"
    },
    {
      title: "De la jucător la creator",
      subtitle: "Minecraft Modding",
      description: "Transformă jocul tău preferat prin crearea propriilor modificări și extensii.",
      icon: <Brush className="h-10 w-10" />,
      color: "border-green-600",
      bgcolor: "bg-green-600",
      link: "/minecraft-modding",
      age: "12-16 ani",
      level: "Intermediar-Avansat"
    },
    {
      title: "Universul Dezvoltării de Jocuri",
      subtitle: "Roblox Lua",
      description: "Creează jocuri complexe în platforma Roblox folosind limbajul de programare Lua.",
      icon: <Layout className="h-10 w-10" />,
      color: "border-red-600",
      bgcolor: "bg-red-600",
      link: "/roblox-lua",
      age: "12-17 ani",
      level: "Intermediar-Avansat"
    },
    {
      title: "De la Cod la Aplicații",
      subtitle: "Python",
      description: "Începe călătoria în programarea textului cu unul dintre cele mai populare limbaje.",
      icon: <Code className="h-10 w-10" />,
      color: "border-blue-600",
      bgcolor: "bg-blue-600",
      link: "/python",
      age: "13-18 ani",
      level: "Intermediar-Avansat"
    },
    {
      title: "Java prin Jocuri",
      subtitle: "Greenfoot",
      description: "Învață programare orientată pe obiecte prin crearea jocurilor în Java.",
      icon: <Coffee className="h-10 w-10" />,
      color: "border-orange-600",
      bgcolor: "bg-orange-600",
      link: "/greenfoot",
      age: "14-18 ani",
      level: "Intermediar-Avansat"
    },
    {
      title: "Game Development Pro",
      subtitle: "Godot",
      description: "Dezvoltă jocuri profesionale 2D și 3D cu un motor de joc avansat și gratuit.",
      icon: <Gamepad className="h-10 w-10" />,
      color: "border-indigo-700",
      bgcolor: "bg-indigo-700",
      link: "/godot",
      age: "14-18 ani",
      level: "Avansat"
    },
    {
      title: "Construiește Web-ul Viitorului",
      subtitle: "Frontend Development",
      description: "Învață să creezi site-uri web moderne și interactive cu HTML, CSS și JavaScript.",
      icon: <Globe className="h-10 w-10" />,
      color: "border-cyan-600",
      bgcolor: "bg-cyan-600",
      link: "/frontend-dev",
      age: "13-18 ani",
      level: "Intermediar-Avansat"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 overflow-hidden relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-10 -top-10 w-72 h-72 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -left-20 bottom-0 w-96 h-96 bg-white/5 rounded-full blur-xl"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  TechMinds Academy
                  <span className="block text-yellow-300">Programare pentru Copii</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-xl mb-8 text-white/90 max-w-xl">
                  Descoperă lumea fascinantă a programării prin jocuri și proiecte creative. 
                  Cursuri interactive pentru copii și tineri între 8 și 18 ani.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-wrap gap-4">
                  <Link to="/appinventor" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center">
                    <Rocket className="mr-2 h-5 w-5" />
                    <span>Începe cu App Inventor</span>
                  </Link>
                  <a href="#courses" className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-all">
                    Descoperă toate cursurile
                  </a>
                </motion.div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
                    <div className="bg-white rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80" 
                        alt="Copii învățând programare" 
                        className="w-full object-cover h-80 lg:h-96"
                      />
                      <div className="p-6 bg-white">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-xl text-gray-800">Învață. Creează. Inovează.</h3>
                          <div className="flex items-center">
                            <BadgeCheck className="text-green-500 h-5 w-5 mr-1" />
                            <span className="text-green-600 text-sm font-medium">Certificat la finalizare</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-5 -right-5 bg-yellow-400 rounded-full p-4 shadow-lg animate-bounce-slow">
                    <Gamepad className="h-8 w-8 text-gray-800" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">De ce să alegi TechMinds Academy?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ajutăm copiii să treacă de la consumatori la creatori de tehnologie prin metode de învățare practice și interactive.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md border border-blue-100">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Gamepad className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Învățare prin Joc</h3>
                <p className="text-gray-600">Programarea devine distractivă prin proiecte creative și jocuri interactive.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl shadow-md border border-green-100">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Box className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Proiecte Personale</h3>
                <p className="text-gray-600">Fiecare elev dezvoltă proiecte unice, bazate pe interesele și creativitatea proprie.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-md border border-purple-100">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Rocket className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Progres Vizibil</h3>
                <p className="text-gray-600">Proiecte concrete și aplicații funcționale la finalul fiecărui modul de învățare.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl shadow-md border border-orange-100">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Layout className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Platforme Moderne</h3>
                <p className="text-gray-600">Utilizăm cele mai populare și accesibile platforme de învățare a programării.</p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Courses Section */}
        <section id="courses" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl font-bold mb-4 text-gray-800">
                Cursurile Noastre
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descoperă cursurile noastre interactive și începe călătoria în lumea programării
              </motion.p>
            </div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div key={index} variants={item}>
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
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6">
              Pregătit să începi aventura în programare?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Alege cursul care ți se potrivește și începe să creezi proiecte fantastice chiar astăzi!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/appinventor" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 inline-flex items-center">
                <Rocket className="mr-2 h-5 w-5" />
                <span>Începe cu App Inventor</span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
