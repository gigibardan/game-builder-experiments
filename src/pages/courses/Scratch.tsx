
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SessionCard from '@/components/SessionCard';
import SessionCardInDevelopment from '@/components/SessionCardInDevelopment';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Scratch = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Scratch Programming</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Învață programare vizuală cu Scratch! Creează jocuri și animații într-un mod distractiv și intuitiv.
            </p>
          </div>
        </section>

        {/* Sessions Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SessionCardInDevelopment 
                number={1}
                title="Introducere în Scratch" 
                description="Primii pași în programarea vizuală cu Scratch."
                color="orange"
              />
              
              <SessionCardInDevelopment 
                number={2}
                title="Animații și Efecte" 
                description="Creează animații și efecte vizuale captivante."
                color="orange"
              />
              
              <SessionCardInDevelopment 
                number={3}
                title="Sunetele și Muzica" 
                description="Adaugă sunete și muzică în proiectele tale."
                color="orange"
              />
              
              <SessionCardInDevelopment 
                number={4}
                title="City Runner" 
                description="Creează un joc de tip runner prin oraș."
                color="orange"
              />
              
              <SessionCardInDevelopment 
                number={5}
                title="Platformer Game" 
                description="Construiește un joc de tip platformer."
                color="orange"
              />
              
              <SessionCardInDevelopment 
                number={6}
                title="Stitch Beach Adventure" 
                description="O aventură pe plajă cu personajul Stitch."
                color="orange"
              />
              
              <SessionCardInDevelopment 
                number={7}
                title="Maze Game" 
                description="Creează un joc de labirint interactiv."
                color="orange"
              />
              
              <SessionCardInDevelopment 
                number={8}
                title="Wizards Quest" 
                description="O aventură magică cu vrăjitori și farmece."
                color="orange"
              />
              
              <SessionCardInDevelopment 
                number={9}
                title="Robot Football" 
                description="Un joc de fotbal cu roboți."
                color="orange"
              />
              
              <SessionCardInDevelopment 
                number={10}
                title="Space Shooter" 
                description="Un joc de împușcături în spațiu."
                color="orange"
              />
              
              <SessionCardInDevelopment 
                number={11}
                title="Puzzle Master" 
                description="Creează un joc de puzzle-uri."
                color="orange"
              />
              
              <SessionCardInDevelopment 
                number={12}
                title="Racing Game" 
                description="Un joc de curse plin de adrenalină."
                color="orange"
              />
              
              <SessionCard 
                number={13}
                title="Proiect Avansat" 
                description="Combină toate conceptele învățate într-un proiect complex."
                skills={['Integrare', 'Complexitate', 'Creativitate']}
                link="/scratch/session13"
                isAvailable={true}
              />
              
              <SessionCard 
                number={14}
                title="Proiect Final" 
                description="Creează propriul tău joc unic și personalizat."
                skills={['Proiect personal', 'Prezentare', 'Portfolio']}
                link="/scratch/session14"
                isAvailable={true}
              />
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ești pregătit să începi?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Începe cu prima sesiune și descoperă lumea programării vizuale!
            </p>
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link to="/scratch/session1" className="flex items-center">
                <span>Începe Sesiunea 1</span>
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

export default Scratch;
