import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Puzzle, ArrowRight, Clock, Award, Gamepad, BookOpen, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import SessionCard from '@/components/SessionCard';

const Scratch = () => {
  const sessions = [
    {
      id: 1,
      title: "Jocul \"Alege Sănătos\"",
      description: "Învață să creezi un joc simplu în care trebuie să prinzi mâncăruri sănătoase și să eviți cele nesănătoase.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "7-14 ani",
      link: "/scratch/session1alegesanatos",
      highlights: ["Controlarea personajelor", "Detectarea coliziunilor", "Folosirea variabilelor", "Condiții de victorie"]
    },
    {
      id: 2,
      title: "Jocul \"Space Dodge\"",
      description: "Creează un joc spațial în care trebuie să eviți meteoriții pentru a supraviețui cât mai mult.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "7-14 ani",
      link: "/scratch/session2spacedodge",
      highlights: ["Animarea personajelor", "Generarea de obstacole", "Sistem de scor", "Elemente de fundal"]
    },
    {
      id: 3,
      title: "Jocul \"Labirint\"",
      description: "Învață să creezi un joc de tip labirint unde jucătorul trebuie să găsească drumul către ieșire.",
      duration: "120 minute",
      level: "Începător-Intermediar",
      ageGroup: "8-14 ani",
      link: "/scratch/session3",
      highlights: ["Crearea unui labirint", "Deplasare cu taste", "Detectarea coliziunilor cu pereții", "Timer și condiții de victorie"]
    },
    {
      id: 4,
      title: "Jocul \"Quiz\"",
      description: "Creează un joc educativ de tip quiz cu întrebări și răspunsuri multiple.",
      duration: "120 minute",
      level: "Începător-Intermediar",
      ageGroup: "8-14 ani",
      link: "/scratch/session4",
      highlights: ["Utilizarea variabilelor", "Liste pentru întrebări și răspunsuri", "Crearea unui sistem de feedback", "Design interactiv"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Laboratorul de Jocuri
                    <span className="block text-amber-900">Scratch</span>
                  </h1>
                  <p className="text-xl mb-8 text-white/90 max-w-xl">
                    Descoperă programarea într-un mod distractiv și creativ! 
                    Învață să creezi jocuri, animații și povești interactive folosind limbajul vizual Scratch.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button asChild size="lg" className="bg-amber-900 hover:bg-amber-800 text-white">
                    <a href="#sessions">
                      <span>Vezi lecțiile</span>
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                    <a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer">
                      <span>Site oficial Scratch</span>
                    </a>
                  </Button>
                </motion.div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative"
                >
                  <img 
                    src="https://scratch.mit.edu/images/scratch-og.png" 
                    alt="Scratch Programming Interface" 
                    className="rounded-lg shadow-xl max-w-md w-full"
                  />
                  <div className="absolute -bottom-5 -right-5 bg-amber-400 rounded-full p-4 shadow-lg animate-bounce-slow">
                    <Puzzle className="h-8 w-8 text-amber-900" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* About the Course */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Despre Acest Curs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                O introducere prietenoasă în lumea programării pentru copiii cu vârste între 8-12 ani
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl shadow-md">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Puzzle className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Programare Vizuală</h3>
                <p className="text-gray-600">
                  Scratch utilizează blocuri colorate care se îmbină precum piesele unui puzzle, 
                  făcând programarea accesibilă și distractivă pentru începători.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl shadow-md">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Gamepad className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Proiecte Creative</h3>
                <p className="text-gray-600">
                  Elevii vor crea jocuri, povești animate și proiecte interactive 
                  care pot fi împărtășite cu prietenii și familia.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl shadow-md">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Gândire Computațională</h3>
                <p className="text-gray-600">
                  Dezvoltă abilitățile de rezolvare a problemelor, gândirea logică 
                  și creativitatea prin activități practice.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Sessions */}
        <section id="sessions" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Lecții Scratch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explorează lecțiile noastre interactive pentru a învăța programare prin joc
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {sessions.map((session) => (
                <SessionCard 
                  key={session.id}
                  title={session.title}
                  description={session.description}
                  link={session.link}
                  number={session.id}
                  duration={session.duration}
                  level={session.level}
                  ageGroup={session.ageGroup}
                  highlights={session.highlights}
                  color="amber"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Resurse Utile</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Aprofundează învățarea cu aceste resurse adiționale
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="bg-amber-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Documentație Scratch</h3>
                <p className="text-gray-600 mb-4">
                  Explorează documentația oficială și tutorialele pentru a învăța toate aspectele Scratch.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://scratch.mit.edu/ideas" target="_blank" rel="noopener noreferrer">
                    <span>Explorează</span>
                  </a>
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="bg-amber-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Gamepad className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Tutoriale Video</h3>
                <p className="text-gray-600 mb-4">
                  Urmărește tutoriale video pentru a vedea cum se creează diverse proiecte în Scratch.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://scratch.mit.edu/studios/1809250/" target="_blank" rel="noopener noreferrer">
                    <span>Vizionează</span>
                  </a>
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="bg-amber-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Comunitatea Scratch</h3>
                <p className="text-gray-600 mb-4">
                  Descoperă proiecte create de alți utilizatori și împărtășește propriile tale creații.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://scratch.mit.edu/explore/projects/all" target="_blank" rel="noopener noreferrer">
                    <span>Conectează-te</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Întrebări Frecvente</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Răspunsuri la cele mai comune întrebări despre Scratch și cursul nostru
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Ce este Scratch?</h3>
                <p className="text-gray-600">
                  Scratch este un limbaj de programare vizual și o platformă online dezvoltată de MIT Media Lab.
                  Este conceput special pentru a ajuta tinerii să învețe să gândească creativ, să raționeze sistematic
                  și să lucreze colaborativ prin programare.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Ce vârstă trebuie să aibă copilul meu pentru a folosi Scratch?</h3>
                <p className="text-gray-600">
                  Scratch este recomandat pentru copii cu vârste între 8 și 16 ani, dar este accesibil și pentru cei mai mici
                  cu puțină îndrumare. Platforma ScratchJr este disponibilă pentru copiii între 5 și 7 ani.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Este nevoie de cunoștințe anterioare de programare?</h3>
                <p className="text-gray-600">
                  Nu, Scratch este conceput special pentru începători. Interfața vizuală și instrucțiunile de tip puzzle
                  fac învățarea programării intuitivă și accesibilă pentru toți, indiferent de experiența anterioară.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Ce vor învăța copiii în acest curs?</h3>
                <p className="text-gray-600">
                  Copiii vor învăța concepte fundamentale de programare precum secvențe, bucle, condiții, variabile, 
                  precum și abilități de rezolvare a problemelor, gândire algoritmică și creativitate digitală.
                  Toate acestea sunt învățate în timp ce creează jocuri și proiecte interactive.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-500 to-amber-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Gata să începi aventura în programare?</h2>
              <p className="text-xl mb-8 text-white/90">
                Alege prima lecție și începe să creezi jocuri interactive chiar astăzi!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button asChild size="lg" className="bg-amber-900 hover:bg-amber-800">
                  <Link to="/scratch/session1alegesanatos" className="flex items-center">
                    <span>Începe prima lecție</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Scratch;
