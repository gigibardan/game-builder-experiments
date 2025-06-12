
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SessionCard from '@/components/SessionCard';
import SessionCardInDevelopment from '@/components/SessionCardInDevelopment';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AppInventor = () => {
  const sessions = [
    {
      id: 10,
      title: "Session 10",
      description: "Această lecție este în curs de dezvoltare.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "10-14 ani",
      link: "/appinventor/session10",
      highlights: ["În dezvoltare"],
      imageSrc: "/assets/images/appinventor/app-inventor-logo.jpg",
      color: "purple"
    },
    {
      id: 11,
      title: "Session 11",
      description: "Această lecție este în curs de dezvoltare.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "10-14 ani",
      link: "/appinventor/session11",
      highlights: ["În dezvoltare"],
      imageSrc: "/assets/images/appinventor/app-inventor-logo.jpg",
      color: "purple"
    },
    {
      id: 12,
      title: "Session 12",
      description: "Această lecție este în curs de dezvoltare.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "10-14 ani",
      link: "/appinventor/session12",
      highlights: ["În dezvoltare"],
      imageSrc: "/assets/images/appinventor/app-inventor-logo.jpg",
      color: "purple"
    },
    {
      id: 13,
      title: "Session 13",
      description: "Această lecție este în curs de dezvoltare.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "10-14 ani",
      link: "/appinventor/session13",
      highlights: ["În dezvoltare"],
      imageSrc: "/assets/images/appinventor/app-inventor-logo.jpg",
      color: "purple"
    },
    {
      id: 14,
      title: "Session 14",
      description: "Această lecție este în curs de dezvoltare.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "10-14 ani",
      link: "/appinventor/session14",
      highlights: ["În dezvoltare"],
      imageSrc: "/assets/images/appinventor/app-inventor-logo.jpg",
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-course-purple to-course-blue text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">MIT App Inventor</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Învață să creezi aplicații și jocuri pentru dispozitive mobile!
            </p>
          </div>
        </section>

        {/* Sessions Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sessions.map((session) => (
                <SessionCard
                  key={session.id}
                  number={session.id}
                  title={session.title}
                  description={session.description}
                  duration={session.duration}
                  level={session.level}
                  ageGroup={session.ageGroup}
                  highlights={session.highlights}
                  link={session.link}
                  imageSrc={session.imageSrc}
                  color={session.color}
                  isAvailable={false} // None are available yet
                />
              ))}
              
              {/* Add more placeholder cards */}
              {Array.from({ length: 7 }, (_, index) => (
                <SessionCardInDevelopment 
                  key={index + 15}
                  number={index + 15}
                  title={`Session ${index + 15}`} 
                  description="Această lecție este în curs de dezvoltare și va fi disponibilă în curând."
                  color="purple"
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Cursul este în dezvoltare</h2>
            <p className="text-lg text-gray-600 mb-6">
              Echipa noastră lucrează pentru a vă oferi conținut educațional de calitate!
            </p>
            <Button asChild className="bg-course-purple hover:bg-course-purple/90">
              <Link to="/courses" className="flex items-center">
                <span>Înapoi la cursuri</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AppInventor;
