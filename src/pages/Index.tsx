
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Gamepad, Laptop, Trophy, Code, Puzzle, Box, 
  Rocket, Layout, Brush, Blocks, Coffee, Globe, BookOpen, Award
} from 'lucide-react';
import CourseCard from '@/components/CourseCard';

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
      link: "/scratch",
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
      link: "/appinventor",
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
      link: "/construct3",
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
      link: "/gdevelop",
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
      link: "/alice3",
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
      link: "/microbit-arcade",
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
      link: "/minecraft-modding",
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
      link: "/roblox-lua",
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
      link: "/python",
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
      link: "/greenfoot",
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
      link: "/frontend-dev",
      age: "13-18 ani",
      level: "Intermediar-Avansat"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-72 h-72 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute -left-20 bottom-0 w-96 h-96 bg-white/5 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="block">TechMinds Academy</span>
              <span className="text-yellow-300">Explorează Cursurile Noastre</span>
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Transformă pasiunea pentru tehnologie în abilități practice 
              prin cursuri interactive și proiecte captivante
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/about" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center">
                <Award className="mr-2 h-5 w-5" />
                <span>Despre noi</span>
              </Link>
              <a href="#courses" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                <span>Vezi toate cursurile</span>
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-10 left-1/4 w-20 h-20 bg-yellow-400 rounded-full opacity-70"></div>
        <div className="absolute top-10 right-1/4 w-12 h-12 bg-green-400 rounded-full opacity-70"></div>
      </section>
      
      {/* Highlighted Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-sm"
            >
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Învățare Adaptată</h3>
              <p className="text-gray-600">Cursuri pentru toate vârstele și nivelurile de experiență, cu metode interactive de predare.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-purple-50 rounded-xl p-6 border border-purple-100 shadow-sm"
            >
              <div className="bg-purple-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Gamepad className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Învățare prin Joc</h3>
              <p className="text-gray-600">Transformă teoria în practică prin metode distractive și proiecte creative ce stimulează gândirea.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-green-50 rounded-xl p-6 border border-green-100 shadow-sm"
            >
              <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Proiecte Personalizate</h3>
              <p className="text-gray-600">Fiecare elev creează proiecte unice, bazate pe propriile interese și nivel de creativitate.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* All Courses Section */}
      <section id="courses" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Toate Cursurile Noastre</h2>
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
            <h2 className="text-3xl font-bold mb-4">Gata să începi călătoria ta în programare?</h2>
            <p className="text-xl mb-8 text-white/90">
              Alege cursul care ți se potrivește și începe să creezi proiecte fantastice chiar astăzi!
            </p>
            <Link 
              to="/contact" 
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
            >
              <Rocket className="mr-2 h-5 w-5" />
              <span>Contactează-ne</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
