
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, BookOpen, Target, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SessionCard from '@/components/SessionCard';

const LegoSpikePrime = () => {
  const sessions = [
    {
      number: 1,
      title: "Robot Navigator",
      description: "Construiește un robot care poate naviga prin obstacole și învață despre algoritmi de navigație.",
      link: "/lego-spike-prime/robot-navigator",
      duration: "75 min",
      level: "Intermediar",
      ageGroup: "9-12 ani",
      highlights: ["Navigație autonomă", "Senzori ultrasonici", "Algoritmi de evitare"],
      color: "red"
    },
    {
      number: 2,
      title: "Brațul Robotic",
      description: "Creează un braț robotic care poate ridica și muta obiecte cu precizie.",
      link: "/lego-spike-prime/bratul-robotic",
      duration: "75 min",
      level: "Intermediar",
      ageGroup: "9-12 ani",
      highlights: ["Mecanisme complexe", "Control precis", "Automatizare"],
      color: "red"
    },
    {
      number: 3,
      title: "Robot de Competiție",
      description: "Programează un robot pentru competiții și provocări complexe, optimizând performanțele.",
      link: "/lego-spike-prime/robot-de-competitie",
      duration: "75 min",
      level: "Intermediar",
      ageGroup: "9-12 ani",
      highlights: ["Optimizare cod", "Strategii competiție", "Performanță maximă"],
      color: "red"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-400 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                  <Cpu className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                LEGO SPIKE Prime
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Robotică avansată
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Users className="mr-1 h-4 w-4" />
                  9-12 ani
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Clock className="mr-1 h-4 w-4" />
                  12 săptămâni
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Award className="mr-1 h-4 w-4" />
                  Intermediar
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <BookOpen className="mr-3 h-6 w-6 text-red-600" />
                    Despre Curs
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    Modulul pentru copiii de 9-12 ani reprezintă o incursiune în lumea roboticii avansate, unde creativitatea și logica se îmbină armonios cu tehnologia. Folosind seturile LEGO SPIKE Prime, copiii vor construi roboți mai complecși și îi vor programa să execute sarcini elaborate.
                  </p>
                  <p className="mb-4">
                    Acest curs dezvoltă abilități avansate de inginerie și programare, pregătind copiii pentru provocările tehnologice ale viitorului prin proiecte hands-on captivante.
                  </p>
                </CardContent>
              </Card>

              {/* Learning Objectives */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Target className="mr-3 h-6 w-6 text-red-600" />
                    Ce Vei Învăța
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <Cpu className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Robotică Avansată</h3>
                        <p className="text-sm text-gray-600">Construirea de sisteme robotice complexe cu multiple funcții</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <BookOpen className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Programare Structurată</h3>
                        <p className="text-sm text-gray-600">Concepte avansate: funcții, variabile, structuri de control</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <Users className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Managementul Proiectelor</h3>
                        <p className="text-sm text-gray-600">Planificarea și implementarea proiectelor complexe</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <Target className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Optimizare și Eficiență</h3>
                        <p className="text-sm text-gray-600">Îmbunătățirea performanțelor și eficienței robotului</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sessions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Sesiunile Cursului
                </h2>
                <p className="text-lg text-gray-600">
                  Proiecte complexe pentru viitorii ingineri robotici
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sessions.map((session, index) => (
                  <SessionCard
                    key={index}
                    {...session}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-red-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pregătit pentru robotica avansată?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Explorează LEGO SPIKE Prime și construiește roboți de următoarea generație!
            </p>
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Link to="/auth">
                Începe Acum
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LegoSpikePrime;
