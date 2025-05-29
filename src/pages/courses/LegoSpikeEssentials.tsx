
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, BookOpen, Target, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SessionCard from '@/components/SessionCard';

const LegoSpikeEssentials = () => {
  const sessions = [
        {
      number: 1,
      title: "Caruselul Clasic",
      description: "Construiește și programează un carusel cu viteză variabilă.",
      link: "/legoessentials/session1classiccarusel",
      duration: "90 min",
      level: "Începător",
      ageGroup: "7-9 ani",
      highlights: ["Construcție", "Mișcare", "Viteză variabilă"],
      color: "orange"
    },
    {
      number: 2,
      title: "Roata Panoramică",
      description: "Programează o roată panoramică cu semnale de siguranță.",
      link: "/legoessentials/session2ferriswheel",
      duration: "90 min",
      level: "Începător",
      ageGroup: "7-9 ani",
      highlights: ["Semnale LED", "Control motor", "Automatizare"],
      color: "orange"
    },
    {
      number: 3,
      title: "Telecabina Aventurașilor",
      description: "Construiește o telecabină care se deplasează între două stații.",
      link: "/legoessentials/session3cablecar",
      duration: "90 min",
      level: "Începător",
      ageGroup: "7-9 ani",
      highlights: ["Mișcare dus-întors", "LED-uri semnalizare", "Pauze programate"],
      color: "orange"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-400 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                  <Cog className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                LEGO SPIKE Essentials
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Primul pas în robotică
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Users className="mr-1 h-4 w-4" />
                  7-9 ani
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Clock className="mr-1 h-4 w-4" />
                  12 săptămâni
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Award className="mr-1 h-4 w-4" />
                  Începător
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
                    <BookOpen className="mr-3 h-6 w-6 text-orange-600" />
                    Despre Curs
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    Acest modul transformă învățarea roboticii și programării într-o aventură plină de entuziasm pentru copiii cu vârste între 7 și 9 ani. Prin utilizarea seturilor LEGO SPIKE Essential, cei mici descoperă cum pot construi roboți unici și cum să îi facă să „gândească" prin programare.
                  </p>
                  <p className="mb-4">
                    Copiii vor învăța concepte fundamentale ale roboticii într-un mod ludic și interactiv, dezvoltându-și în același timp abilitățile de rezolvare a problemelor și gândirea creativă.
                  </p>
                </CardContent>
              </Card>

              {/* Learning Objectives */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Target className="mr-3 h-6 w-6 text-orange-600" />
                    Ce Vei Învăța
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <Cog className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Construcție Robot</h3>
                        <p className="text-sm text-gray-600">Asamblarea pieselor LEGO pentru crearea de roboți funcționali</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <BookOpen className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Programare Vizuală</h3>
                        <p className="text-sm text-gray-600">Învățarea conceptelor de programare prin interfața drag-and-drop</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <Users className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Colaborare</h3>
                        <p className="text-sm text-gray-600">Lucrul în echipă pentru rezolvarea provocărilor</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <Target className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Rezolvare Probleme</h3>
                        <p className="text-sm text-gray-600">Dezvoltarea gândirii logice și creative</p>
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
                  Fiecare sesiune este o aventură nouă în lumea roboticii
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
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gata să construiești primul tău robot?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Alătură-te aventurii LEGO SPIKE Essentials și descoperă magia roboticii!
            </p>
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
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

export default LegoSpikeEssentials;
