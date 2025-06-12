
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react'; // Adăugat acest import

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section - Reduced to 50% height */}
        <section className="bg-gradient-to-r from-course-blue to-course-purple py-12 overflow-hidden relative">
          {/* Elemente decorative de fundal */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-white opacity-5 rounded-full"></div>
            <div className="absolute left-1/4 top-3/4 w-32 h-32 bg-white opacity-5 rounded-full"></div>
            <div className="absolute right-1/3 bottom-0 w-48 h-48 bg-white opacity-5 rounded-full"></div>

            {/* Linii animate pentru efect tech */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
                </linearGradient>
              </defs>
              <path d="M0,0 L100,100 M200,50 L250,150 M300,100 L350,200" stroke="url(#techGradient)" strokeWidth="0.5" fill="none" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2 text-white mb-8 md:mb-0 pr-0 md:pr-8"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Învață să programezi <span className="text-yellow-300">în mod distractiv!</span>
                </h1>
                <p className="text-xl mb-8 text-white/90 max-w-lg">
                  Cursuri interactive de programare pentru copii și adolescenți, adaptate pentru fiecare nivel de vârstă și experiență.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-white text-course-purple hover:bg-gray-100 hover:scale-105 transition-transform shadow-lg">
                    <Link to="/courses">
                      <span className="flex items-center">
                        Vezi cursurile
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-course-purple transition-colors shadow-lg"
                  >
                    <Link to="/about">
                      <span>Despre noi</span>
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="md:w-1/2 flex justify-center"
              >
                <div className="relative">
                  {/* Halo effect behind the logo */}
                  <div className="absolute inset-0 bg-yellow-300/20 blur-3xl rounded-full transform scale-90"></div>

                  {/* Logo with refined styling */}
                  <img
                    src="https://techminds-academy.ro/assets/images/logo-techminds-academy.webp"
                    alt="TechMinds Academy Logo"
                    className="relative z-10 max-w-full h-auto max-h-80 object-contain filter drop-shadow-2xl"
                  />

                  {/* Floating tech elements */}
                  <motion.div
                    className="absolute -top-4 -left-4 w-12 h-12 bg-blue-400/80 rounded-lg"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "mirror"
                    }}
                  />

                  <motion.div
                    className="absolute -bottom-4 -right-4 w-10 h-10 bg-purple-400/80 rounded-full"
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      repeatType: "mirror",
                      delay: 0.5
                    }}
                  />

                  <motion.div
                    className="absolute top-1/4 -right-6 w-8 h-8 bg-yellow-400/80 rounded-lg rotate-45"
                    animate={{
                      y: [0, -8, 0],
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "mirror",
                      delay: 1
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Accente animate în partea de jos pentru efect tech */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 to-purple-300 opacity-50"></div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-16 left-0 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-16 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0,rgba(99,102,241,0)_70%)]"></div>

            {/* Animated dotted grid */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
              backgroundSize: '30px 30px',
              opacity: 0.3
            }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                De ce să înveți cu noi?
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '120px' }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-course-blue to-course-purple mx-auto rounded-full mb-6"
              ></motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-600 max-w-2xl mx-auto"
              >
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {/* Feature 1 - Învățare practică */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative group"
              >
                {/* Accent line on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-2xl"></div>

                {/* Icon container with animated background */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-blue-300/20 rounded-full blur-md transform group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-blue-400/30 shadow-lg relative z-10 group-hover:rotate-6 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Învățare practică</h3>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    Cursurile noastre sunt bazate pe proiecte practice ce stimulează creativitatea și gândirea logică a copiilor.
                  </p>

                  {/* Benefits list */}
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Peste 100 de proiecte practice</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Abordare hands-on</span>
                    </li>
                  </ul>
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-blue-100 rounded-tl-xl rounded-br-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              {/* Feature 2 - Materiale adaptate */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative group "
              >
                {/* Accent line on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-t-2xl"></div>

                {/* Icon container with animated background */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-purple-300/20 rounded-full blur-md transform group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-purple-400/30 shadow-lg relative z-10 group-hover:rotate-6 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">Materiale adaptate</h3>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    Fiecare curs este adaptat pentru diferite vârste și niveluri de experiență, permițând o progresie naturală.
                  </p>

                  {/* Benefits list */}
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Conținut personalizat pe vârste</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Grupe de maximum 15 elevi</span>
                    </li>
                  </ul>
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-purple-100 rounded-tl-xl rounded-br-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              {/* Feature 3 - Mediu sigur */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative group"
              >
                {/* Accent line on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-t-2xl"></div>

                {/* Icon container with animated background */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-green-300/20 rounded-full blur-md transform group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4 shadow-green-400/30 shadow-lg relative z-10 group-hover:rotate-6 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300">Mediu sigur</h3>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    Oferim un mediu de învățare sigur și prietenos, cu profesori experimentați și materiale verificate.
                  </p>

                  {/* Benefits list */}
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Profesori certificați</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Suport tehnic permanent</span>
                    </li>
                  </ul>
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-green-100 rounded-tl-xl rounded-br-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </div>






          </div>
        </section>

        {/* Popular Courses Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Cursurile noastre populare</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-course-blue to-course-purple mx-auto rounded-full mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">Descoperă programele noastre de top care au inspirat sute de copii să își dezvolte abilitățile digitale</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Course Card 1 - Scratch */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 relative group"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                  Începător
                </div>

                {/* Image container with overlay */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                  <img
                    src="https://techminds-academy.ro/assets/images/scratch.webp"
                    alt="Scratch pentru începători"
                    className="w-full h-52 object-cover object-center transition-transform group-hover:scale-105"
                  />
                  {/* Tech pattern overlay */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjMuNSAzLjIgMS4zLjguOCAxLjMgMS45IDEuMyAzLjIgMCAxLjItLjUgMi4zLTEuMyAzLjItLjguOC0xLjkgMS4zLTMuMiAxLjMtMS4yIDAtMi4zLS41LTMuMi0xLjMtLjgtLjgtMS4zLTEuOS0xLjMtMy4yIDAtMS4yLjUtMi4zIDEuMy0zLjIuOC0uOCAxLjktMS4zIDMuMi0xLjN6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTMwIDYwTDAgMzBMMzAgMHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10 mix-blend-overlay"></div>
                </div>

                <div className="p-6 relative">
                  {/* New age range indicator */}
                  <div className="flex items-center mb-3">
                    <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      7 ani
                    </span>
                    <span className="ml-2 bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      12 lecții
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900">Scratch pentru începători</h3>
                  <p className="text-gray-600 mb-6">
                    Învață programare vizuală într-un mod distractiv și creativ, perfect pentru primii pași în lumea codului.
                  </p>

                  {/* New button style with gradient and animation */}
                  <Button asChild className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-md hover:shadow-lg transform transition-all duration-200 hover:-translate-y-1">
                    <Link to="/courses/scratch" className="flex items-center justify-center">
                      <span>Vezi detalii</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </motion.div>

              {/* Course Card 2 - Minecraft */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 relative group"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                  Intermediar
                </div>

                {/* Image container with overlay */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                  <img
                    src="https://techminds-academy.ro/assets/images/minecraft.png"
                    alt="Minecraft Modding"
                    className="w-full h-52 object-cover object-center transition-transform group-hover:scale-105"
                  />
                  {/* Tech pattern overlay */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjMuNSAzLjIgMS4zLjguOCAxLjMgMS45IDEuMyAzLjIgMCAxLjItLjUgMi4zLTEuMyAzLjItLjguOC0xLjkgMS4zLTMuMiAxLjMtMS4yIDAtMi4zLS41LTMuMi0xLjMtLjgtLjgtMS4zLTEuOS0xLjMtMy4yIDAtMS4yLjUtMi4zIDEuMy0zLjIuOC0uOCAxLjktMS4zIDMuMi0xLjN6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTMwIDYwTDAgMzBMMzAgMHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10 mix-blend-overlay"></div>
                </div>

                <div className="p-6 relative">
                  {/* New age range indicator */}
                  <div className="flex items-center mb-3">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      9 ani
                    </span>
                    <span className="ml-2 bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      12 lecții
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900">Minecraft Modding</h3>
                  <p className="text-gray-600 mb-6">
                    Transformă jocul tău preferat prin crearea propriilor modificări și extensii. Învață Java prin joc.
                  </p>

                  {/* New button style with gradient and animation */}
                  <Button asChild className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md hover:shadow-lg transform transition-all duration-200 hover:-translate-y-1">
                    <Link to="/courses/minecraft-modding" className="flex items-center justify-center">
                      <span>Vezi detalii</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </motion.div>

              {/* Course Card 3 - App Inventor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 relative group"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                  Creativ
                </div>

                {/* Image container with overlay */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                  <img
                    src="https://techminds-academy.ro/assets/images/appInventor.webp"
                    alt="App Inventor"
                    className="w-full h-52 object-cover object-center transition-transform group-hover:scale-105"
                  />
                  {/* Tech pattern overlay */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjMuNSAzLjIgMS4zLjguOCAxLjMgMS45IDEuMyAzLjIgMCAxLjItLjUgMi4zLTEuMyAzLjItLjguOC0xLjkgMS4zLTMuMiAxLjMtMS4yIDAtMi4zLS41LTMuMi0xLjMtLjgtLjgtMS4zLTEuOS0xLjMtMy4yIDAtMS4yLjUtMi4zIDEuMy0zLjIuOC0uOCAxLjktMS4zIDMuMi0xLjN6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTMwIDYwTDAgMzBMMzAgMHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10 mix-blend-overlay"></div>
                </div>

                <div className="p-6 relative">
                  {/* New age range indicator */}
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      8 ani
                    </span>
                    <span className="ml-2 bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      12 lecții
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900">App Inventor</h3>
                  <p className="text-gray-600 mb-6">
                    Învață să creezi aplicații mobile pentru Android folosind MIT App Inventor. De la idee la App Store.
                  </p>

                  {/* New button style with gradient and animation */}
                  <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md hover:shadow-lg transform transition-all duration-200 hover:-translate-y-1">
                    <Link to="/courses/appinventor" className="flex items-center justify-center">
                      <span>Vezi detalii</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-course-blue to-course-purple hover:from-course-blue/90 hover:to-course-purple/90 text-white shadow-lg hover:shadow-xl transform transition-all duration-200 hover:-translate-y-1 px-8"
              >
                <Link to="/courses" className="flex items-center">
                  <span>Vezi toate cursurile</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
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
