
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
              
              {/* Sesiunea 1 - Lecție completă Alege Sănătos */}
              <SessionCard 
                number={1}
                title="Alege Sănătos" 
                description="Învață bazele Scratch cu un joc despre alimentația sănătoasă."
                skills={['Controlul personajelor', 'Detectarea coliziunilor', 'Sistem de punctaj']}
                link="/scratch/session1alegesanatos"
                isAvailable={true}
              />
              
              <SessionCardInDevelopment 
                number={2}
                title="Space Dodge" 
                description="Creează un joc de evitare a obstacolelor în spațiu."
                color="orange"
              />
              
              {/* Sesiunea 3 - Lecție completă Moto Racer */}
              <SessionCard 
                number={3}
                title="Moto Racer" 
                description="Construiește un joc de curse pe motocicletă cu obstacole."
                skills={['Generarea obstacolelor', 'Controlul avansatat', 'Punctaj și stele']}
                link="/scratch/session3motoracer"
                isAvailable={true}
              />
              
              <SessionCardInDevelopment 
                number={4}
                title="City Runner" 
                description="Creează un joc de tip runner prin oraș."
                color="orange"
              />
              
              {/* Sesiunea 5 - Lecție completă Beach Ball Bounce */}
              <SessionCard 
                number={5}
                title="Beach Ball Bounce" 
                description="Un joc pe plajă cu colectarea obiectelor în apă."
                skills={['Clone și obiecte', 'Mișcare în apă', 'Sisteme multiple']}
                link="/scratch/session5beachballbounce"
                isAvailable={true}
              />
              
              <SessionCardInDevelopment 
                number={6}
                title="Stitch Beach Adventure" 
                description="O aventură pe plajă cu personajul Stitch."
                color="orange"
              />
              
              {/* Sesiunea 7 - Lecție completă The Cake Quest */}
              <SessionCard 
                number={7}
                title="The Cake Quest" 
                description="Traversează strada pentru a ajunge la tort, evitând mașinile."
                skills={['Traversarea străzii', 'Clone multiple', 'Condiții complexe']}
                link="/scratch/session7cakequest"
                isAvailable={true}
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
              
              <SessionCardInDevelopment 
                number={13}
                title="Proiect Avansat" 
                description="Combină toate conceptele învățate într-un proiect complex."
                color="orange"
              />
              
              <SessionCardInDevelopment 
                number={14}
                title="Proiect Final" 
                description="Creează propriul tău joc unic și personalizat."
                color="orange"
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
              <Link to="/scratch/session1alegesanatos" className="flex items-center">
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
