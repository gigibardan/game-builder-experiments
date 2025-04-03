
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';

const Courses = () => {
  const { isAuthenticated } = useAuth();

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Scratch Course */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-48 bg-yellow-400 flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Scratch" 
                    className="h-32"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">Scratch pentru începători</h2>
                  <p className="text-gray-600 mb-4">
                    Învață programare vizuală într-un mod distractiv și creativ, perfect pentru copii între 8-12 ani.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Vârsta: 8-12 ani</span>
                    <a 
                      href="/courses/scratch" 
                      className="text-course-blue hover:underline"
                    >
                      Vezi detalii →
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* App Inventor Course */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-48 bg-green-400 flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="App Inventor" 
                    className="h-32"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">App Inventor</h2>
                  <p className="text-gray-600 mb-4">
                    Învață să creezi aplicații mobile pentru Android folosind MIT App Inventor.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Vârsta: 10-14 ani</span>
                    <a 
                      href="/courses/appinventor" 
                      className="text-course-blue hover:underline"
                    >
                      Vezi detalii →
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Python Course */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-48 bg-blue-400 flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Python" 
                    className="h-32"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">Python pentru copii</h2>
                  <p className="text-gray-600 mb-4">
                    Descoperă limbajul Python și creează jocuri, aplicații și proiecte științifice.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Vârsta: 12+ ani</span>
                    <a 
                      href="/courses/python" 
                      className="text-course-blue hover:underline"
                    >
                      Vezi detalii →
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Alice 3 Course */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-48 bg-purple-400 flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Alice 3" 
                    className="h-32"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">Alice 3</h2>
                  <p className="text-gray-600 mb-4">
                    Creează animații 3D și povești interactive folosind Alice 3, o platformă educativă dezvoltată de Carnegie Mellon.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">Vârsta: 10-14 ani</span>
                    <a 
                      href="/courses/alice3" 
                      className="text-course-blue hover:underline"
                    >
                      Vezi detalii →
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Frontend Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-48 bg-pink-400 flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Frontend Development" 
                    className="h-32"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">Frontend Development</h2>
                  <p className="text-gray-600 mb-4">
                    Învață să creezi site-uri web interactive folosind HTML, CSS și JavaScript.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm bg-pink-100 text-pink-800 px-2 py-1 rounded">Vârsta: 13+ ani</span>
                    <a 
                      href="/courses/frontenddev" 
                      className="text-course-blue hover:underline"
                    >
                      Vezi detalii →
                    </a>
                  </div>
                </div>
              </motion.div>
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
