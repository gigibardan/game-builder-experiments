import React from 'react';
import { Button } from '@/components/ui/button';
import { Puzzle, ArrowRight, Clock, Award, Gamepad, BookOpen, CheckCircle, Star, Code, Brain, Zap, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SessionCard from '@/components/SessionCard';

const Scratch = () => {
  const sessions = [
    {
      id: 1,
      title: "Jocul Alege Sănătos",
      description: "Învață să creezi un joc simplu în care trebuie să prinzi mâncăruri sănătoase și să eviți cele nesănătoase.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "7-14 ani",
      link: "/scratch/session1alegesanatos",
      highlights: ["Controlarea personajelor", "Detectarea coliziunilor", "Folosirea variabilelor", "Condiții de victorie"],
      imageSrc: "/assets/images/scratch/scratch-alegesanatos-preview1.png",
      color: "amber"
    },
    {
      id: 2,
      title: "Jocul Space Dodge",
      description: "Creează un joc spațial în care trebuie să eviți meteoriții pentru a supraviețui cât mai mult.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "7-14 ani",
      link: "/scratch/session2spacedodge",
      highlights: ["Animarea personajelor", "Generarea de obstacole", "Sistem de scor", "Elemente de fundal"],
      imageSrc: "/assets/images/scratch/scratchproiect5preview.png",
      color: "blue"
    },
    {
      id: 3,
      title: "Jocul Moto Racer",
      description: "Învață să creezi un joc captivant în care controlezi o motocicletă, eviți obstacole și colectezi stele.",
      duration: "90 minute",
      level: "Începător-Intermediar",
      ageGroup: "7-14 ani",
      link: "/scratch/session3motoracer",
      highlights: ["Controlul cu săgeți", "Generarea de obiecte aleatorii", "Utilizarea clonelor", "Detectarea coliziunilor"],
      imageSrc: "/assets/images/scratch/scratchproiect2preview1.png",
      color: "green"
    },
    {
      id: 4,
      title: "Jocul City Runner",
      description: "Creează un joc captivant în care controlezi o pisică ce aleargă prin oraș, colectând diamante și evitând bombe.",
      duration: "90 minute",
      level: "Începător-Intermediar",
      ageGroup: "7-14 ani",
      link: "/scratch/session4cityrunner",
      highlights: ["Controlul cu săgeți", "Animarea personajelor", "Sisteme de recompense și penalizări", "Elemente de decor animate"],
      imageSrc: "/assets/images/scratch/scratchproiect3preview1.png",
      color: "purple"
    },
    {
      id: 5,
      title: "Beach Ball Bounce",
      description: "Învață să creezi un joc distractiv în care controlezi un colac pentru a menține o minge de plajă în aer.",
      duration: "90 minute",
      level: "Începător-Intermediar",
      ageGroup: "7-14 ani",
      link: "/scratch/session5beachballbounce",
      highlights: ["Control cu mouse", "Simularea fizicii", "Obiecte bonus și obstacole", "Gravitație și ricoșare"],
      imageSrc: "/assets/images/scratch/scratchproiect4preview1.png",
      color: "cyan"
    },
    {
      id: 6,
      title: "Stitch's Beach Adventure",
      description: "Creează un joc distractiv cu Stitch, personajul tău preferat, care colectează torturi și evită bombe pe o plajă.",
      duration: "90 minute",
      level: "Începător-Intermediar",
      ageGroup: "8-14 ani",
      link: "/scratch/session6stitchbeach",
      highlights: ["Animarea personajelor", "Detecția coliziunilor", "Sisteme de punctaj complexe", "Condiții de victorie și înfrângere"],
      imageSrc: "/assets/images/scratch/scratchproiect7preview1.png",
      color: "indigo"
    },
    {
      id: 7,
      title: "The Cake Quest",
      description: "Ajută personajul Roadster să traverseze o stradă aglomerată, evitând mașinile, pentru a ajunge la un tort delicios.",
      duration: "90 minute",
      level: "Începător-Intermediar",
      ageGroup: "7-14 ani",
      link: "/scratch/session7cakequest",
      highlights: ["Controlul personajului", "Clonarea obiectelor", "Detecția coliziunilor", "Condiții de victorie și înfrângere"],
      imageSrc: "/assets/images/scratch/scratchproiect8preview.png",
      color: "rose"
    },
    {
      id: 8,
      title: "Wizard's Quest",
      description: "Ghidează un vrăjitor broscoi prin labirint pentru a găsi bagheta magică pierdută, evitând liliecii periculoși care patrulează coridoarele.",
      duration: "90 minute",
      level: "Intermediar",
      ageGroup: "7-14 ani",
      link: "/scratch/session8wizardsquest",
      highlights: ["Detectarea coliziunilor folosind culori", "Algoritm de evitare a obstacolelor", "Mișcarea inamicilor autonomi", "Labirint interactiv"],
      imageSrc: "/assets/images/scratch/scratchproiect6preview1.png",
      color: "purple"
    },
    {
      id: 9,
      title: "Robot Football",
      description: "Creează un joc distractiv în Scratch unde doi roboți joacă fotbal, controlând mingea și marcând goluri împotriva adversarului.",
      duration: "90 minute",
      level: "Intermediar",
      ageGroup: "7-14 ani",
      link: "/scratch/session9robotfootball",
      highlights: ["Joc pentru doi jucători", "Coliziuni și ricoșări", "Sistem de scor", "Animații de countdown"],
      imageSrc: "/assets/images/scratch/robotfootballpreview1.png",
      color: "emerald"
    },
    {
  id: 10,
  title: "Flappy Minecraft (Partea 1)",
  description: "Începe să creezi un joc captivant inspirat din Flappy Bird, dar cu elemente și personaje din universul Minecraft.",
  duration: "90 minute",
  level: "Intermediar",
  ageGroup: "8-14 ani",
  link: "/scratch/session10flappyminecraftpart1",
  highlights: ["Crearea obstacolelor", "Sistem de clonare", "Efecte de animație", "Detecția punctelor"],
  imageSrc: "/assets/images/scratch/previewminecraft.png",
  color: "amber"
},
{
  id: 11,
  title: "Flappy Minecraft (Partea 2)",
  description: "Finalizează jocul Flappy Minecraft adăugând personajul principal, fizica zborului, detecția coliziunilor și efecte vizuale.",
  duration: "90 minute",
  level: "Intermediar",
  ageGroup: "8-14 ani",
  link: "/scratch/session10flappyminecraftpart2",
  highlights: ["Fizică de zbor", "Controlul personajului", "Detecția coliziunilor", "Efecte vizuale și sonore"],
  imageSrc: "/assets/images/scratch/previewminecraft.png",
  color: "green"
},
{
  id: 12,
  title: "Egg Dropper",
  description: "Creează un joc captivant în care controlezi un iepuraș cu jetpack care aruncă ouă, încercând să țintească coșurile în mișcare pentru a acumula puncte.",
  duration: "120 minute",
  level: "Intermediar",
  ageGroup: "8-14 ani",
  link: "/scratch/session11eggdropper",
  highlights: ["Funcții trigonometrice", "Sistemul de lansare de ouă", "Efecte vizuale și de fum", "Detecția coliziunilor avansată"],
  imageSrc: "/assets/images/scratch/previewEggD.png",
  color: "purple"
}
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-20">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 z-0"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            {/* Animated circles */}
            <div className="absolute w-24 h-24 bg-white/20 rounded-full -top-6 left-1/4 animate-float"></div>
            <div className="absolute w-16 h-16 bg-yellow-300/30 rounded-full top-20 left-1/5 animate-float-delay"></div>
            <div className="absolute w-32 h-32 bg-amber-300/30 rounded-full -bottom-10 right-1/4 animate-float-slow"></div>
            <div className="absolute w-20 h-20 bg-orange-300/30 rounded-full top-10 right-10 animate-float-delay-slow"></div>
            
            {/* Scratch themed icons */}
            <div className="absolute top-1/3 left-1/6 transform -rotate-12">
              <Puzzle className="w-24 h-24 text-white/20" />
            </div>
            <div className="absolute bottom-1/4 right-1/5 transform rotate-12">
              <Code className="w-20 h-20 text-white/20" />
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <div className="inline-block mb-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">
                  <p className="text-white font-medium flex items-center">
                    <Code className="h-4 w-4 mr-2" />
                    Programare Creativă pentru Copii
                  </p>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">
                  Laboratorul de Jocuri
                  <span className="block text-amber-900">Scratch</span>
                </h1>
                <p className="text-xl mb-8 text-white/90 max-w-xl drop-shadow-sm">
                  Descoperă programarea într-un mod distractiv și creativ! 
                  Învață să creezi jocuri, animații și povești interactive folosind limbajul vizual Scratch.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-white hover:bg-white/90 text-amber-500 shadow-md">
                    <a href="#sessions">
                      <span>Vezi lecțiile</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 shadow-md">
                    <a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer">
                      <span>Site oficial Scratch</span>
                    </a>
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative">
                  <img 
                    src="/assets/images/scratch/logoscratch.webp" 
                    alt="Scratch Programming Interface" 
                    className="rounded-xl shadow-2xl max-w-md w-full border-4 border-white/30 transform rotate-1"
                  />
                  <div className="absolute -bottom-5 -right-5 bg-amber-500 rounded-full p-4 shadow-lg animate-bounce-slow">
                    <Puzzle className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                    <Star className="h-6 w-6 text-amber-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Colorful blocks */}
        <section className="py-12 -mt-6 relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-amber-500 to-orange-400 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Puzzle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Programare Vizuală</h3>
                <p className="text-white/90">
                  Scratch utilizează blocuri colorate care se îmbină precum piesele unui puzzle, 
                  făcând programarea accesibilă și distractivă.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Gamepad className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Proiecte Creative</h3>
                <p className="text-white/90">
                  Creează jocuri, povești animate și proiecte interactive 
                  care pot fi împărtășite cu prietenii și familia.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Gândire Computațională</h3>
                <p className="text-white/90">
                  Dezvoltă abilitățile de rezolvare a problemelor, gândirea logică 
                  și creativitatea prin activități practice.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Sessions with redesigned cards */}
        <section id="sessions" className="py-16 bg-gradient-to-b from-white to-amber-50/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-amber-800 font-medium text-sm mb-3">
                <span className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-1" />
                  Lecții Interactive
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Explorează Lecțiile Scratch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pornește în aventura programării prin crearea unor jocuri captivante
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {sessions.map((session) => (
                <div key={session.id} className="transform hover:translate-y-[-5px] transition-transform duration-300">
                  <SessionCard 
                    title={session.title}
                    description={session.description}
                    link={session.link}
                    number={session.id}
                    duration={session.duration}
                    level={session.level}
                    ageGroup={session.ageGroup}
                    highlights={session.highlights}
                    color={session.color}
                    imageSrc={session.imageSrc}
                  />
                </div>
              ))}
            </div>
            
            {/* Coming Soon Card */}
            <div className="mt-16 max-w-md mx-auto">
              <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-6 border-2 border-dashed border-amber-300 text-center shadow-md">
                <div className="bg-amber-200 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Sparkles className="h-8 w-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-amber-800">Mai multe proiecte în curând!</h3>
                <p className="text-amber-700 mb-3">
                  Echipa noastră lucrează la noi lecții captivante.
                  Revino curând pentru a descoperi mai multe aventuri Scratch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Learn Roadmap - Horizontal Step-by-Step */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-blue-800 font-medium text-sm mb-3">
                <span className="flex items-center">
                  <Zap className="w-4 h-4 mr-1" />
                  Parcursul de Învățare
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Cum vei deveni expert în Scratch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Urmează pașii pentru a-ți dezvolta abilitățile de programare
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto relative">
              {/* Connecting line */}
              <div className="absolute h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 top-16 left-0 right-0 hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="bg-amber-500 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Primii Pași</h3>
                  <p className="text-gray-600">Învață elementele de bază și creează primele proiecte simple</p>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Dezvoltare Jocuri</h3>
                  <p className="text-gray-600">Construiește jocuri interactive cu mecanici interesante</p>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Tehnici Avansate</h3>
                  <p className="text-gray-600">Adaugă fizică, inteligență artificială și elemente complexe</p>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Proiecte Personale</h3>
                  <p className="text-gray-600">Creează și împărtășește propriile tale proiecte originale</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skill Building Benefits */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-purple-800 font-medium text-sm mb-3">
                <span className="flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  Beneficii
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Ce abilități vei dezvolta</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Programarea Scratch cultivă competențe esențiale pentru viitor
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {/* Skill 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-amber-400">
                <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Gândire Logică</h3>
                <p className="text-gray-600">
                  Dezvoltă capacitatea de a descompune probleme complexe în pași simpli și de a găsi soluții eficiente.
                </p>
              </div>
              
              {/* Skill 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-400">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Puzzle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Rezolvarea Problemelor</h3>
                <p className="text-gray-600">
                  Construiește abilitatea de a identifica probleme și de a le aborda metodic pentru a găsi soluții.
                </p>
              </div>
              
              {/* Skill 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-400">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Creativitate</h3>
                <p className="text-gray-600">
                  Exprimă-ți ideile original și dezvoltă abilitatea de a crea proiecte unice și inovatoare.
                </p>
              </div>
              
              {/* Skill 4 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-purple-400">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Fundamente de Programare</h3>
                <p className="text-gray-600">
                  Învață concepte esențiale de programare care se aplică în orice limbaj de programare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Background with gradient and pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 z-0"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 z-0">
            {/* Circles */}
            <div className="absolute w-64 h-64 rounded-full border-8 border-white/30 -top-20 -left-20"></div>
            <div className="absolute w-40 h-40 rounded-full border-8 border-white/30 bottom-10 right-10"></div>
            
            {/* Icons */}
            <div className="absolute top-10 right-1/4">
              <Puzzle className="w-16 h-16 text-white opacity-40 transform rotate-12" />
            </div>
            <div className="absolute bottom-10 left-1/3">
              <Code className="w-12 h-12 text-white opacity-40 transform -rotate-12" />
            </div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-sm">Gata să începi aventura în programare?</h2>
              <p className="text-xl mb-8 text-white/90">
                Alege prima lecție și începe să creezi jocuri interactive chiar astăzi!
              </p>
              <div className="inline-block transform hover:scale-105 transition-transform duration-300">
                <Button asChild size="lg" className="bg-white hover:bg-white/90 text-amber-500 shadow-lg font-medium px-8">
                  <a href="/scratch/session1alegesanatos" className="flex items-center">
                    <span>Începe prima lecție</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Adaugăm animațiile CSS într-un mod compatibil */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes floatDelay {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          .animate-float-delay {
            animation: floatDelay 6s ease-in-out infinite;
            animation-delay: 1s;
          }
          .animate-float-slow {
            animation: float 10s ease-in-out infinite;
          }
          .animate-float-delay-slow {
            animation: floatDelay 7s ease-in-out infinite;
            animation-delay: 2s;
          }
          .animate-bounce-slow {
            animation: bounce 3s infinite;
          }
        `
      }} />
    </div>
  );
};

export default Scratch;