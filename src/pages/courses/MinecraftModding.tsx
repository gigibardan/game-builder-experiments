
import React from 'react';
import { Brush, Grid3X3, Box } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SessionCard from '@/components/SessionCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

const MinecraftModding = () => {
  const sessions = [
    {
      number: 1,
      title: "Introducere în Minecraft Modding",
      description: "Descoperă ce înseamnă să creezi modificări pentru Minecraft și configurează mediul de dezvoltare.",
      link: "/minecraftmodding/session1",
      isAvailable: true,
      color: "green-600",
      duration: "45 min",
      level: "Începător",
      ageGroup: "12-16 ani",
      highlights: [
        "Introducere în MCreator",
        "Configurare mediu",
        "Concepte de bază"
      ]
    },
    {
      number: 2,
      title: "Primul tău addon: Armură de rubin",
      description: "Învață să creezi o nouă armură și să definești proprietățile acesteia în joc.",
      link: "/minecraftmodding/ruby-armor",
      isAvailable: true,
      color: "green-600",
      duration: "60 min",
      level: "Începător",
      ageGroup: "12-16 ani",
      highlights: [
        "Definirea materialelor",
        "Crearea texturii",
        "Configurarea proprietăților",
        "Testarea în joc"
      ]
    },
    {
      number: 3,
      title: "Creează un dimensiune nouă: Tărâmul de cristal",
      description: "Construiește o lume nouă cu propriile reguli, blocuri și structuri.",
      link: "/minecraftmodding/crystal-realm",
      isAvailable: true,
      color: "green-600",
      duration: "90 min",
      level: "Intermediar",
      ageGroup: "12-16 ani",
      highlights: [
        "Definire dimensiune",
        "Generare de teren",
        "Blocuri personalizate",
        "Structuri procedurale"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-400 py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                De la jucător la creator
              </h1>
              <h2 className="text-2xl md:text-3xl mb-4">
                Minecraft Modding
              </h2>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Transformă jocul tău preferat prin crearea propriilor modificări și extensii.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 text-green-700">Despre acest curs</h2>
                  <p className="mb-4 text-gray-700">
                    Cursul de Minecraft Modding este conceput pentru tinerii pasionați de Minecraft care doresc să treacă 
                    de la simpli jucători la creatori de conținut. Vei învăța să creezi propriile blocuri, 
                    iteme, creaturi și chiar dimensiuni folosind MCreator, un instrument vizual care face modding-ul 
                    accesibil și pentru cei fără experiență în programare.
                  </p>
                  <p className="mb-4 text-gray-700">
                    Pe parcursul cursului, vei dezvolta abilități de design, vei înțelege concepte fundamentale de 
                    dezvoltare de jocuri și vei avea oportunitatea de a-ți împărtăși creațiile cu comunitatea Minecraft.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-3 text-green-700">Ce vei învăța:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    <li className="flex items-start">
                      <Box className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Crearea de blocuri personalizate</span>
                    </li>
                    <li className="flex items-start">
                      <Box className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Adăugarea de iteme și unelte noi</span>
                    </li>
                    <li className="flex items-start">
                      <Box className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Designul armurilor și texturilor</span>
                    </li>
                    <li className="flex items-start">
                      <Box className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Generare de structuri și lumi</span>
                    </li>
                    <li className="flex items-start">
                      <Box className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Crearea de creaturi și entități</span>
                    </li>
                    <li className="flex items-start">
                      <Box className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Publicarea și distribuirea mod-urilor</span>
                    </li>
                  </ul>
                </div>
                
                <div className="md:w-1/3">
                  <Card className="overflow-hidden border-green-200 shadow-lg">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image 
                        src="https://www.minecraft.net/content/dam/minecraft/community-content/minecraft-with-ray-tracing-beta-screenshot-landscape.jpg" 
                        alt="Minecraft Landscape" 
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Durata: 8 săptămâni
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Nivel</h3>
                          <p className="font-medium">Intermediar</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Vârstă recomandată</h3>
                          <p className="font-medium">12-16 ani</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Cerințe</h3>
                          <p className="text-sm">
                            Minecraft Java Edition, un computer cu Windows/Mac/Linux, cunoștințe de bază despre Minecraft
                          </p>
                        </div>
                        
                        <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                          <Link to="/minecraftmodding/session1">
                            Începe cursul
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sessions List */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Lecții și proiecte</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {sessions.map((session) => (
                <SessionCard 
                  key={session.number}
                  number={session.number}
                  title={session.title}
                  description={session.description}
                  link={session.link}
                  isAvailable={session.isAvailable}
                  color={session.color}
                  duration={session.duration}
                  level={session.level}
                  ageGroup={session.ageGroup}
                  highlights={session.highlights}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Project Showcase */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Exemple de proiecte create de elevi</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image 
                    src="https://static.planetminecraft.com/files/resource_media/screenshot/1632/2016-08-13_205842-10476855.png" 
                    alt="Dimensiune personalizată"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Dimensiune Floating Islands</h3>
                  <p className="text-gray-600 text-sm">Insulele plutitoare cu biome personalizate și structuri generate.</p>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image 
                    src="https://static.planetminecraft.com/files/resource_media/screenshot/1938/screenshot-2019-09-22-at-204526-1569196151.png" 
                    alt="Set de armuri"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Set de armuri elementale</h3>
                  <p className="text-gray-600 text-sm">Armuri cu proprietăți magice pentru foc, apă, aer și pământ.</p>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image 
                    src="https://static.planetminecraft.com/files/resource_media/screenshot/1726/2017-07-01-17-54-03-1498926666.png" 
                    alt="Craftinguri noi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Arme magice și rețete noi</h3>
                  <p className="text-gray-600 text-sm">Săbii cu efecte speciale și rețete de crafting personalizate.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MinecraftModding;
