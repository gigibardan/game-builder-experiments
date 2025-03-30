
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

interface CourseComingSoonProps {
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  icon: React.ReactNode;
}

const CourseComingSoon = ({
  title,
  subtitle,
  description,
  bgColor,
  textColor,
  accentColor,
  icon
}: CourseComingSoonProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className={`py-20 ${bgColor}`}>
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={`text-center ${textColor}`}
            >
              <div className="flex justify-center mb-6">
                <div className={`${accentColor} rounded-full p-5 shadow-lg`}>
                  {icon}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-2xl mb-6">{subtitle}</p>
              <p className="max-w-2xl mx-auto mb-8 text-xl opacity-90">
                {description}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-white rounded-xl shadow-xl max-w-3xl mx-auto p-8 md:p-12"
            >
              <div className="flex items-center justify-center mb-8">
                <CalendarIcon className="h-12 w-12 text-gray-400 mr-4" />
                <h2 className="text-2xl font-bold text-gray-700">Conținut în dezvoltare</h2>
              </div>
              
              <p className="text-gray-600 text-lg mb-6 text-center">
                Acest curs este în curs de dezvoltare și va fi disponibil în curând. Lucrăm pentru a crea 
                experiențe educaționale de calitate și conținut interactiv pentru acest curs. 
                Te invităm să verifici periodic această pagină pentru actualizări.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-gray-700 mb-3">Ce va include acest curs:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    12 sesiuni interactive de învățare
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Proiecte practice pentru fiecare lecție
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Exerciții și provocări suplimentare
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Resurse și materiale suplimentare
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <Button asChild className="bg-gray-800 hover:bg-gray-700">
                  <Link to="/" className="flex items-center">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Înapoi la pagina principală</span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseComingSoon;
