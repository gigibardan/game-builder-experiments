
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Gamepad2, ArrowRight, Laptop, Users, Rocket, Trophy } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-course-purple to-course-blue text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Învață să creezi jocuri <span className="block">distractive cu App Inventor!</span>
                </h1>
                <p className="text-xl mb-8 text-white/90">
                  Descoperă lumea programării prin crearea jocurilor interactive și aplicații mobile. 
                  Un curs perfect pentru copiii între 10-14 ani!
                </p>
                <div className="flex space-x-4">
                  <Button asChild size="lg" className="bg-white text-course-purple hover:bg-white/90 hover:text-course-blue">
                    <Link to="/curriculum" className="flex items-center">
                      <span>Vezi cursul</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                    <Link to="/session1">
                      Prima lecție
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-xl animate-float">
                    <Gamepad2 size={200} className="text-white" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-course-pink text-white p-3 rounded-full shadow-lg animate-bounce-slight">
                    <Rocket size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Ce vei învăța în acest curs?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CourseCard 
                title="Jocuri Interactive" 
                subtitle="Dezvoltare de jocuri"
                description="Creează jocuri captivante precum Clicker, Quiz, Catch the Object și multe altele!"
                icon={<Gamepad2 className="h-6 w-6" />}
                color="border-course-purple"
                bgcolor="bg-course-purple"
                link="/curriculum"
              />
              
              <CourseCard 
                title="Programare Vizuală" 
                subtitle="Concepte de bază"
                description="Învață concepte de programare utilizând blocuri vizuale în App Inventor."
                icon={<Laptop className="h-6 w-6" />}
                color="border-course-blue"
                bgcolor="bg-course-blue"
                link="/curriculum"
              />
              
              <CourseCard 
                title="Proiecte Practice" 
                subtitle="Aplicare practică"
                description="Aplică ce înveți prin proiecte distractive pe care le poți împărtăși cu prietenii."
                icon={<Trophy className="h-6 w-6" />}
                color="border-course-orange"
                bgcolor="bg-course-orange"
                link="/curriculum"
              />
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Pregătit să începi aventura în programare?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explorează cursul nostru, creează jocuri distractive și dezvoltă-ți abilitățile de programare!
            </p>
            <Button asChild size="lg" className="bg-course-purple hover:bg-course-blue">
              <Link to="/curriculum" className="flex items-center">
                <span>Vezi programul complet</span>
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

export default Index;
