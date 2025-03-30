
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, Laptop, Smartphone, Rocket, GameController, 
  MessageSquare, PaintBucket, Compass, Zap, Database,
  Bolt, Sparkles, Code
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SessionCard from '@/components/SessionCard';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AppInventor = () => {
  useEffect(() => {
    document.title = "Atelierul de Aplicații Mobile - App Inventor | TechMinds Academy";
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

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-course-purple to-course-blue text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1551650975-87deedd944c3')] opacity-10 bg-cover bg-center"></div>
            <div className="absolute right-0 bottom-0 w-72 h-72 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -left-20 top-20 w-96 h-96 bg-white/5 rounded-full blur-xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Atelierul de Aplicații Mobile
                    <span className="block text-yellow-300">App Inventor</span>
                  </h1>
                  <p className="text-xl mb-8 text-white/90 max-w-xl">
                    Descoperă lumea dezvoltării de aplicații mobile prin intermediul unei platforme vizuale intuitive. 
                    Construiește jocuri și aplicații funcționale pentru telefoanele Android într-un mod distractiv și creativ.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 shadow-lg">
                    <Link to="/appinventor/session1" className="flex items-center">
                      <Rocket className="mr-2 h-5 w-5" />
                      <span>Începe Prima Lecție</span>
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                    <a href="#curriculum" className="flex items-center">
                      <span>Vezi curriculum</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:w-1/2 flex justify-center"
              >
                <div className="relative">
                  <Card className="overflow-hidden border-0 shadow-xl">
                    <CardContent className="p-0">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                        alt="App Inventor Mockup" 
                        className="w-full h-80 object-cover"
                      />
                    </CardContent>
                  </Card>
                  <div className="absolute -bottom-5 -right-5 bg-yellow-400 rounded-full p-4 shadow-lg animate-bounce-slow">
                    <Smartphone className="h-8 w-8 text-gray-800" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About the Course */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl font-bold text-gray-800 mb-4"
              >
                Despre Acest Curs
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                O călătorie practică prin dezvoltarea de aplicații mobile pentru copii și adolescenți între 10-14 ani
              </motion.p>
            </div>
            
            <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Prezentare Generală</TabsTrigger>
                <TabsTrigger value="skills">Ce vei învăța</TabsTrigger>
                <TabsTrigger value="requirements">Cerințe</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <p className="mb-4 text-gray-700">
                      App Inventor este o platformă vizuală creată de Google și acum dezvoltată de MIT, care permite începătorilor să creeze aplicații mobile pentru dispozitivele Android fără a avea nevoie de cunoștințe avansate de programare.
                    </p>
                    <p className="mb-4 text-gray-700">
                      În acest curs de 12 sesiuni, elevii vor învăța să creeze diverse tipuri de jocuri și aplicații utile, folosind o interfață vizuală de tip drag-and-drop și blocuri colorate pentru a programa comportamentul aplicațiilor.
                    </p>
                    <p className="text-gray-700">
                      Cursul este structurat progresiv, de la noțiuni de bază la concepte mai avansate, permițând elevilor să dezvolte proiecte din ce în ce mai complexe pe măsură ce avansează. Fiecare sesiune se concentrează pe un proiect specific care introduce noi concepte și tehnici.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="skills" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <div className="bg-purple-100 rounded-full p-2 mr-3">
                          <Laptop className="h-5 w-5 text-course-purple" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Interfețe Utilizator</h3>
                          <p className="text-sm text-gray-600">Crearea de interfețe atractive și funcționale pentru aplicații</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-2 mr-3">
                          <GameController className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Dezvoltare de Jocuri</h3>
                          <p className="text-sm text-gray-600">Crearea jocurilor interactive pentru dispozitive mobile</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-green-100 rounded-full p-2 mr-3">
                          <MessageSquare className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Programare Vizuală</h3>
                          <p className="text-sm text-gray-600">Utilizarea blocurilor pentru a crea logica aplicațiilor</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-red-100 rounded-full p-2 mr-3">
                          <PaintBucket className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Design Creativ</h3>
                          <p className="text-sm text-gray-600">Crearea elementelor vizuale și designul interactiv</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-orange-100 rounded-full p-2 mr-3">
                          <Compass className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Utilizarea Senzorilor</h3>
                          <p className="text-sm text-gray-600">Integrarea senzorilor telefonului în aplicații</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-teal-100 rounded-full p-2 mr-3">
                          <Database className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Gestionarea Datelor</h3>
                          <p className="text-sm text-gray-600">Stocarea și manipularea datelor în aplicații</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="requirements" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-yellow-100 rounded-full p-2 mr-3 mt-0.5">
                          <Laptop className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Computer sau Laptop</h3>
                          <p className="text-gray-600">Cu acces la internet și browser web actualizat (Chrome, Firefox, Edge)</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-green-100 rounded-full p-2 mr-3 mt-0.5">
                          <Smartphone className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Dispozitiv Android (opțional)</h3>
                          <p className="text-gray-600">Pentru testarea aplicațiilor (alternativ, se poate folosi emulatorul)</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-purple-100 rounded-full p-2 mr-3 mt-0.5">
                          <Rocket className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Cont Google</h3>
                          <p className="text-gray-600">Pentru autentificare în platforma MIT App Inventor</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-2 mr-3 mt-0.5">
                          <Zap className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Cunoștințe Minime</h3>
                          <p className="text-gray-600">Nu sunt necesare cunoștințe prealabile de programare</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Course Highlights */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl font-bold text-gray-800 mb-4"
              >
                De Ce să Alegi Acest Curs
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Avantajele învățării App Inventor la TechMinds Academy
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Învățare prin Proiecte</h3>
                  <p className="text-gray-600">
                    Fiecare sesiune se concentrează pe un proiect practic și distractiv care construiește aptitudini reale de dezvoltare a aplicațiilor.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-green-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Bolt className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Rezultate Imediate</h3>
                  <p className="text-gray-600">
                    Elevii creează aplicații funcționale încă din prima sesiune, oferind satisfacție și motivație pentru a continua învățarea.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-pink-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Creativitate Nelimitată</h3>
                  <p className="text-gray-600">
                    Încurajăm personalizarea și adăugarea de elemente unice la proiecte, stimulând creativitatea și gândirea inovatoare.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Curriculum */}
        <section id="curriculum" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl font-bold text-gray-800 mb-4"
              >
                Curriculum
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                12 sesiuni de învățare prin proiecte practice și distractive
              </motion.p>
            </div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <motion.div variants={item}>
                <SessionCard 
                  number={1}
                  title="Introducere și Joc Clicker" 
                  description="Descoperă App Inventor și creează primul tău joc simplu de tipul clicker."
                  skills={['Butoane', 'Etichete', 'Evenimente']}
                  link="/appinventor/session1"
                  isAvailable={true}
                />
              </motion.div>
              
              <motion.div variants={item}>
                <SessionCard 
                  number={2}
                  title="Joc de Quiz" 
                  description="Dezvoltă un joc quiz interactiv cu sistem de urmărire a scorului."
                  skills={['Liste', 'Variabile', 'Scor']}
                  link="/appinventor/session2"
                  isAvailable={true}
                />
              </motion.div>
              
              <motion.div variants={item}>
                <SessionCard 
                  number={3}
                  title="Jocul Prinde Obiectul" 
                  description="Creează un joc în care trebuie să prinzi obiecte care cad."
                  skills={['Timer', 'Poziționare aleatorie', 'Imagini']}
                  link="/appinventor/session3"
                  isAvailable={false}
                />
              </motion.div>
              
              <motion.div variants={item}>
                <SessionCard 
                  number={4}
                  title="Animal Virtual (Partea 1)" 
                  description="Începe să construiești o aplicație cu un animal virtual pe care îl poți îngriji."
                  skills={['Stări', 'Efecte Sonore']}
                  link="/appinventor/session4"
                  isAvailable={false}
                />
              </motion.div>
              
              <motion.div variants={item}>
                <SessionCard 
                  number={5}
                  title="Animal Virtual (Partea 2)" 
                  description="Adaugă funcționalități avansate animalului tău virtual."
                  skills={['Animații', 'Salvare Date']}
                  link="/appinventor/session5"
                  isAvailable={false}
                />
              </motion.div>
              
              <motion.div variants={item}>
                <SessionCard 
                  number={6}
                  title="Aplicație de Desen" 
                  description="Dezvoltă o aplicație care îți permite să desenezi folosind gesturi."
                  skills={['Gesturi tactile', 'Canvas']}
                  link="/appinventor/session6"
                  isAvailable={false}
                />
              </motion.div>
              
              <motion.div variants={item}>
                <SessionCard 
                  number={7}
                  title="Jocul Labirint" 
                  description="Creează un joc în care controlezi un personaj printr-un labirint."
                  skills={['Accelerometru', 'Detectarea coliziunilor']}
                  link="/appinventor/session7"
                  isAvailable={false}
                />
              </motion.div>
              
              <motion.div variants={item}>
                <SessionCard 
                  number={8}
                  title="Test de Reacție" 
                  description="Dezvoltă un joc care testează viteza de reacție a jucătorului."
                  skills={['Timere', 'Provocări aleatorii']}
                  link="/appinventor/session8"
                  isAvailable={false}
                />
              </motion.div>
              
              <motion.div variants={item}>
                <SessionCard 
                  number={9}
                  title="X și 0 Multiplayer (Partea 1)" 
                  description="Începe să construiești un joc de X și 0 pentru mai mulți jucători."
                  skills={['Bază de date Cloud', 'Interacțiune']}
                  link="/appinventor/session9"
                  isAvailable={false}
                />
              </motion.div>
              
              <motion.div variants={item}>
                <SessionCard 
                  number={10}
                  title="X și 0 Multiplayer (Partea 2)" 
                  description="Completează jocul X și 0 cu funcționalități avansate."
                  skills={['Autentificare', 'Scoruri online']}
                  link="/appinventor/session10"
                  isAvailable={false}
                />
              </motion.div>
              
              <motion.div variants={item}>
                <SessionCard 
                  number={11}
                  title="Space Shooter" 
                  description="Creează un joc de tip Space Shooter cu inamici și proiectile."
                  skills={['Controale tactile', 'Mișcarea proiectilelor']}
                  link="/appinventor/session11"
                  isAvailable={false}
                />
              </motion.div>
              
              <motion.div variants={item}>
                <SessionCard 
                  number={12}
                  title="Proiect Final" 
                  description="Modifică și creează propriul tău joc folosind toate conceptele învățate."
                  skills={['Creativitate', 'Proiect personal']}
                  link="/appinventor/session12"
                  isAvailable={false}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-course-purple to-course-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Pregătit să începi aventura în App Inventor?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
            >
              Alătură-te cursului și creează primele tale aplicații mobile astăzi!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-lg shadow-lg">
                <Link to="/appinventor/session1" className="flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  <span>Începe Prima Lecție</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AppInventor;
