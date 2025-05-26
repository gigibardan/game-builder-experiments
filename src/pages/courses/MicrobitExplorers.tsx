
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, BookOpen, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SessionCard from '@/components/SessionCard';

const MicrobitExplorers = () => {
  const sessions = [
    {
      number: 1,
      title: "Primul Program micro:bit",
      description: "Învață să programezi micro:bit pentru primul tău proiect interactiv și descoperă funcțiile de bază.",
      link: "/microbit-explorers/primul-program-microbit",
      duration: "60 min",
      level: "Începător",
      ageGroup: "9-12 ani",
      highlights: ["Interfața micro:bit", "LED-uri", "Butoane"],
      color: "blue"
    },
    {
      number: 2,
      title: "Jocuri cu LED-uri",
      description: "Creează jocuri simple folosind matricea de LED-uri a micro:bit și învață despre animații.",
      link: "/microbit-explorers/jocuri-cu-leduri",
      duration: "60 min",
      level: "Începător",
      ageGroup: "9-12 ani",
      highlights: ["Animații LED", "Jocuri interactive", "Scoruri"],
      color: "blue"
    },
    {
      number: 3,
      title: "Senzori Inteligenti",
      description: "Explorează senzorii micro:bit și creează proiecte interactive care răspund la mediul înconjurător.",
      link: "/microbit-explorers/senzori-inteligenti",
      duration: "60 min",
      level: "Intermediar",
      ageGroup: "9-12 ani",
      highlights: ["Senzor temperatură", "Accelerometru", "Comunicare radio"],
      color: "blue"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                  <Zap className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                micro:bit Explorers
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Exploratori ai Inovației
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
                    <BookOpen className="mr-3 h-6 w-6 text-blue-600" />
                    Despre Curs
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    Modulul dedicat micro:bit introduce copiii într-o lume fascinantă a tehnologiei, unde programarea și electronica de bază se întâlnesc pentru a crea proiecte interactive și captivante. Cu ajutorul plăcilor micro:bit, cei mici învață să programeze și să controleze diferite dispozitive.
                  </p>
                  <p className="mb-4">
                    Acest curs oferă o introducere perfectă în Internet of Things (IoT) și tehnologiile moderne, dezvoltând abilități practice de programare și înțelegerea sistemelor electronice.
                  </p>
                </CardContent>
              </Card>

              {/* Learning Objectives */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Target className="mr-3 h-6 w-6 text-blue-600" />
                    Ce Vei Învăța
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Zap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Programare micro:bit</h3>
                        <p className="text-sm text-gray-600">Învățarea programării vizuale și textuale pentru micro:bit</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Electronica de Bază</h3>
                        <p className="text-sm text-gray-600">Înțelegerea circuitelor electrice și componentelor</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Proiecte Interactive</h3>
                        <p className="text-sm text-gray-600">Crearea de dispozitive care interactionează cu mediul</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Target className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">IoT și Comunicații</h3>
                        <p className="text-sm text-gray-600">Basics of Internet of Things și comunicarea wireless</p>
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
                  Explorează tehnologia modernă prin proiecte captivante
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
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gata să explorezi tehnologia viitorului?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Alătură-te aventurii micro:bit și descoperă magia IoT!
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
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

export default MicrobitExplorers;
