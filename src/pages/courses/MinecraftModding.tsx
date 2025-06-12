
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SessionCardInDevelopment from '@/components/SessionCardInDevelopment';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MinecraftModding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Minecraft Modding</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Transformă jocul tău preferat prin crearea propriilor modificări și extensii!
            </p>
          </div>
        </section>

        {/* Sessions Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Add placeholder cards for sessions in development */}
              {Array.from({ length: 12 }, (_, index) => (
                <SessionCardInDevelopment 
                  key={index + 1}
                  number={index + 1}
                  title={`Lecția ${index + 1}`} 
                  description="Această lecție este în curs de dezvoltare și va fi disponibilă în curând."
                  color="green"
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
            <Button asChild className="bg-green-600 hover:bg-green-700">
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

export default MinecraftModding;
