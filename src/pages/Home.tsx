
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Reduced to 50% height */}
        <section className="bg-gradient-to-r from-course-blue to-course-purple py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2 text-white mb-8 md:mb-0"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Învață să programezi în mod distractiv!
                </h1>
                <p className="text-xl mb-8">
                  Cursuri interactive de programare pentru copii și adolescenți, adaptate pentru fiecare nivel de vârstă și experiență.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link to="/courses">
                      Vezi cursurile
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="bg-white text-course-purple hover:bg-gray-100">
                    <Link to="/about">
                      Despre noi
                    </Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 flex justify-center"
              >
                <img 
                  src="https://techminds-academy.ro/assets/images/logo-techminds-academy.webp" 
                  alt="TechMinds Academy Logo" 
                  className="max-w-full rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">De ce să înveți cu noi?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-course-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Învățare practică</h3>
                <p className="text-gray-600">
                  Cursurile noastre sunt bazate pe proiecte practice ce stimulează creativitatea și gândirea logică a copiilor.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-course-purple">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Materiale adaptate</h3>
                <p className="text-gray-600">
                  Fiecare curs este adaptat pentru diferite vârste și niveluri de experiență, permițând o progresie naturală.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Mediu sigur</h3>
                <p className="text-gray-600">
                  Oferim un mediu de învățare sigur și prietenos, cu profesori experimentați și materiale verificate.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Popular Courses Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Cursurile noastre populare</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Course Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Scratch pentru începători" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Scratch pentru începători</h3>
                  <p className="text-gray-600 mb-4">
                    Învață programare vizuală într-un mod distractiv și creativ, perfect pentru copii între 8-12 ani.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/courses/scratch">
                      Vezi detalii
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              {/* Course Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Python pentru copii" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Python pentru copii</h3>
                  <p className="text-gray-600 mb-4">
                    Descoperă limbajul Python și creează jocuri, aplicații și proiecte științifice. Recomandat pentru 12+ ani.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/courses/python">
                      Vezi detalii
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              {/* Course Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img 
                  src="/placeholder.svg" 
                  alt="App Inventor" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">App Inventor</h3>
                  <p className="text-gray-600 mb-4">
                    Învață să creezi aplicații mobile pentru Android folosind MIT App Inventor. Pentru copii și adolescenți 10+ ani.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/courses/appinventor">
                      Vezi detalii
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/courses">
                  Vezi toate cursurile
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
