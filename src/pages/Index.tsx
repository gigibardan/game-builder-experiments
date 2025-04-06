
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Gamepad, Laptop, Trophy, Code, Puzzle, Box, 
  Rocket, Layout, Brush, Blocks, Coffee, Globe, BookOpen, Award,
  ArrowRight, Sparkles, Target, Lightbulb
} from 'lucide-react';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const courses = [
    {
      title: "Laboratorul de Jocuri",
      subtitle: "Scratch",
      description: "Descoperă programarea prin joc și creează primele tale proiecte interactive.",
      icon: <Puzzle className="h-6 w-6" />,
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
      icon: <Laptop className="h-6 w-6" />,
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
      icon: <Gamepad className="h-6 w-6" />,
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
      icon: <Rocket className="h-6 w-6" />,
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
      icon: <Box className="h-6 w-6" />,
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
      icon: <Blocks className="h-6 w-6" />,
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
      icon: <Brush className="h-6 w-6" />,
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
      icon: <Layout className="h-6 w-6" />,
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
      icon: <Code className="h-6 w-6" />,
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
      icon: <Coffee className="h-6 w-6" />,
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
      icon: <Gamepad className="h-6 w-6" />,
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
      icon: <Globe className="h-6 w-6" />,
      color: "border-cyan-600",
      bgcolor: "bg-cyan-600",
      link: "/courses/frontenddev",
      age: "13-18 ani",
      level: "Intermediar-Avansat"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Interactive Elements */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute -left-20 top-40 w-72 h-72 bg-blue-400/20 rounded-full blur-xl"></div>
          <div className="absolute right-1/4 bottom-0 w-80 h-80 bg-purple-300/10 rounded-full blur-xl"></div>
          
          {/* Floating Shapes */}
          <motion.div 
            className="absolute top-20 right-1/4 w-12 h-12 bg-yellow-300 rounded-lg"
            animate={{ 
              y: [0, -15, 0], 
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          <motion.div 
            className="absolute bottom-20 left-1/4 w-8 h-8 bg-green-400 rounded-full"
            animate={{ 
              y: [0, 20, 0], 
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          <motion.div 
            className="absolute top-40 left-1/3 w-6 h-6 bg-pink-400 rounded-md"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1] 
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block">TechMinds Academy</span>
                <motion.span 
                  className="text-yellow-300 inline-block"
                  animate={{ 
                    textShadow: ["0 0 8px rgba(254, 240, 138, 0)", "0 0 16px rgba(254, 240, 138, 0.6)", "0 0 8px rgba(254, 240, 138, 0)"]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity 
                  }}
                >
                  Învățare prin Creativitate
                </motion.span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
                Transformă pasiunea pentru tehnologie în abilități practice și descoperă 
                lumea fascinantă a programării prin jocuri și proiecte interactive.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/courses" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center text-lg">
                  <BookOpen className="mr-2 h-5 w-5" />
                  <span>Cursuri</span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="#featured-courses" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center text-lg">
                  <Sparkles className="mr-2 h-5 w-5" />
                  <span>Explorează</span>
                </a>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/about" className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center text-lg">
                  <Award className="mr-2 h-5 w-5" />
                  <span>Despre noi</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Highlighted Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">De ce să alegi TechMinds?</h2>
            <p className="text-xl text-gray-600">
              Oferim o experiență educațională completă bazată pe învățare prin proiecte și metodologii interactive
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 rounded-xl p-8 border border-blue-100 shadow-sm"
            >
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Trophy className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Învățare Adaptată</h3>
              <p className="text-gray-600">Cursuri pentru toate vârstele și nivelurile de experiență, cu metode interactive de predare adaptate fiecărui elev.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-purple-50 rounded-xl p-8 border border-purple-100 shadow-sm"
            >
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Gamepad className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Învățare prin Joc</h3>
              <p className="text-gray-600">Transformă teoria în practică prin metode distractive și proiecte creative ce stimulează gândirea și imaginația.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-green-50 rounded-xl p-8 border border-green-100 shadow-sm"
            >
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Proiecte Personalizate</h3>
              <p className="text-gray-600">Fiecare elev creează proiecte unice, bazate pe propriile interese și nivel de creativitate, cu îndrumare personalizată.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Courses */}
      <section id="featured-courses" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Cursuri Recomandate</h2>
            <p className="text-xl text-gray-600">
              Explorează programele noastre educative adaptate pentru diferite niveluri de experiență și vârste
            </p>
          </motion.div>
          
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Pentru Începători</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses
                .filter(course => course.level.includes("Începător"))
                .slice(0, 3)
                .map((course, index) => (
                <motion.div 
                  key={`beginner-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
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
          
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Nivel Intermediar</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses
                .filter(course => course.level.includes("Intermediar"))
                .slice(0, 3)
                .map((course, index) => (
                <motion.div 
                  key={`intermediate-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
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
          
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Lightbulb className="h-8 w-8 text-purple-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Pentru Avansați</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses
                .filter(course => course.level.includes("Avansat"))
                .slice(0, 3)
                .map((course, index) => (
                <motion.div 
                  key={`advanced-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
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
        </div>
      </section>
      
      {/* All Courses Section */}
      <section id="courses" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Toate Cursurile Noastre</h2>
            <p className="text-xl text-gray-600">
              De la cursuri pentru începători până la module avansate, 
              avem programul perfect pentru fiecare etapă a călătoriei tale în programare
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {courses.map((course, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                transition={{ duration: 0.3 }}
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
          </motion.div>
        </div>
      </section>
      
      {/* Admin Links (Hidden Section) */}
      <section className="py-4 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center text-xs">
          <p>Links Administrative:</p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Link to="/admin/dashboard" className="text-gray-400 hover:text-white">Admin Dashboard</Link>
            <Link to="/lesson-template" className="text-gray-400 hover:text-white">Template Lecție</Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-course-purple to-course-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gata să începi călătoria ta în programare?</h2>
            <p className="text-xl mb-8 text-white/90">
              Alege cursul care ți se potrivește și începe să creezi proiecte fantastice chiar astăzi!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                to="/contact" 
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center text-lg"
              >
                <Rocket className="mr-2 h-5 w-5" />
                <span>Contactează-ne</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
