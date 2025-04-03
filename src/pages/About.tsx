
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const About = () => {
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Despre noi</h1>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Descoperă povestea TechMinds Academy și misiunea noastră de a introduce copiii în lumea programării
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="md:w-1/2"
              >
                <h2 className="text-3xl font-bold mb-6 text-course-blue">Povestea noastră</h2>
                <p className="text-gray-700 mb-4">
                  TechMinds Academy a fost fondată în 2020 cu o misiune clară: să facem programarea accesibilă, distractivă și educativă pentru copii și adolescenți. Credem că fiecare copil merită șansa de a învăța abilitățile digitale necesare pentru viitorul lor.
                </p>
                <p className="text-gray-700 mb-4">
                  Începând cu doar câteva cursuri de Scratch pentru copii, am evoluat rapid pentru a oferi o gamă completă de programe educaționale care acoperă toate aspectele programării, de la limbaje vizuale pentru începători până la dezvoltare web și aplicații mobile pentru elevii mai avansați.
                </p>
                <p className="text-gray-700">
                  Astăzi, suntem mândri să avem peste 1,000 de absolvenți care au dobândit abilități valoroase de programare și gândire computațională prin programele noastre.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="md:w-1/2"
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Copii învățând programare" 
                  className="w-full rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-course-purple">Misiunea și valorile noastre</h2>
            
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Inspirăm creativitatea</h3>
                <p className="text-gray-600">
                  Credem că programarea nu este doar despre cod, ci despre exprimarea creativității și rezolvarea problemelor în moduri inovatoare.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Construim comunitate</h3>
                <p className="text-gray-600">
                  Dezvoltăm un mediu de învățare colaborativ unde copiii se pot sprijini reciproc și pot lucra împreună la proiecte interesante.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Promovăm excelența</h3>
                <p className="text-gray-600">
                  Încurajăm copiii să se autodepășească și să aspire la excelență în tot ceea ce fac, dezvoltându-și abilități care îi vor ajuta pe tot parcursul vieții.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Echipa noastră</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Maria Popescu</h3>
                <p className="text-course-purple font-medium">Fondator & Director</p>
                <p className="text-gray-600 mt-2">
                  Cu peste 10 ani de experiență în educație și tehnologie.
                </p>
              </motion.div>
              
              {/* Team Member 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Andrei Ionescu</h3>
                <p className="text-course-purple font-medium">Instructor Senior</p>
                <p className="text-gray-600 mt-2">
                  Specialist în Python și dezvoltare web cu pasiune pentru educație.
                </p>
              </motion.div>
              
              {/* Team Member 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Elena Dumitrescu</h3>
                <p className="text-course-purple font-medium">Instructor</p>
                <p className="text-gray-600 mt-2">
                  Specializată în programare vizuală și cursuri pentru începători.
                </p>
              </motion.div>
              
              {/* Team Member 4 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Mihai Stancu</h3>
                <p className="text-course-purple font-medium">Coordonator Curriculum</p>
                <p className="text-gray-600 mt-2">
                  Dezvoltă și coordonează materialele educaționale pentru toate cursurile.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-course-blue to-course-purple text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Alătură-te comunității noastre</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Fie că ești părinte, elev sau educator, te invităm să descoperi ce oferim și cum te putem ajuta să explorezi lumea programării.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="secondary" size="lg">
                <a href="/courses">Vezi cursurile noastre</a>
              </Button>
              <Button asChild size="lg">
                <a href="/contact">Contactează-ne</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
