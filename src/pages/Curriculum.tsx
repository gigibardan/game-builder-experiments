
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SessionCard from '@/components/SessionCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Curriculum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-course-purple to-course-blue text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Curriculum Curs</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Descoperă cele 12 sesiuni de învățare și creează jocuri uimitoare cu App Inventor!
            </p>
          </div>
        </section>

        {/* Sessions Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SessionCard 
                number={1}
                title="Introducere și Joc Clicker" 
                description="Descoperă App Inventor și creează primul tău joc simplu de tipul clicker."
                skills={['Butoane', 'Etichete', 'Evenimente']}
                link="/session1"
                isAvailable={true}
              />
              
              <SessionCard 
                number={2}
                title="Joc de Quiz" 
                description="Dezvoltă un joc quiz interactiv cu sistem de urmărire a scorului."
                skills={['Liste', 'Variabile', 'Scor']}
                link="/session2"
                isAvailable={false}
              />
              
              <SessionCard 
                number={3}
                title="Jocul Prinde Obiectul" 
                description="Creează un joc în care trebuie să prinzi obiecte care cad."
                skills={['Timer', 'Poziționare aleatorie', 'Imagini']}
                link="/session3"
                isAvailable={false}
              />
              
              <SessionCard 
                number={4}
                title="Animal Virtual (Partea 1)" 
                description="Începe să construiești o aplicație cu un animal virtual pe care îl poți îngriji."
                skills={['Stări', 'Efecte Sonore']}
                link="/session4"
                isAvailable={false}
              />
              
              <SessionCard 
                number={5}
                title="Animal Virtual (Partea 2)" 
                description="Adaugă funcționalități avansate animalului tău virtual."
                skills={['Animații', 'Salvare Date']}
                link="/session5"
                isAvailable={false}
              />
              
              <SessionCard 
                number={6}
                title="Aplicație de Desen" 
                description="Dezvoltă o aplicație care îți permite să desenezi folosind gesturi."
                skills={['Gesturi tactile', 'Canvas']}
                link="/session6"
                isAvailable={false}
              />
              
              <SessionCard 
                number={7}
                title="Jocul Labirint" 
                description="Creează un joc în care controlezi un personaj printr-un labirint."
                skills={['Accelerometru', 'Detectarea coliziunilor']}
                link="/session7"
                isAvailable={false}
              />
              
              <SessionCard 
                number={8}
                title="Test de Reacție" 
                description="Dezvoltă un joc care testează viteza de reacție a jucătorului."
                skills={['Timere', 'Provocări aleatorii']}
                link="/session8"
                isAvailable={false}
              />
              
              <SessionCard 
                number={9}
                title="X și 0 Multiplayer (Partea 1)" 
                description="Începe să construiești un joc de X și 0 pentru mai mulți jucători."
                skills={['Bază de date Cloud', 'Interacțiune']}
                link="/session9"
                isAvailable={false}
              />
              
              <SessionCard 
                number={10}
                title="X și 0 Multiplayer (Partea 2)" 
                description="Completează jocul X și 0 cu funcționalități avansate."
                skills={['Autentificare', 'Scoruri online']}
                link="/session10"
                isAvailable={false}
              />
              
              <SessionCard 
                number={11}
                title="Space Shooter" 
                description="Creează un joc de tip Space Shooter cu inamici și proiectile."
                skills={['Controale tactile', 'Mișcarea proiectilelor']}
                link="/session11"
                isAvailable={false}
              />
              
              <SessionCard 
                number={12}
                title="Proiect Final" 
                description="Modifică și creează propriul tău joc folosind toate conceptele învățate."
                skills={['Creativitate', 'Proiect personal']}
                link="/session12"
                isAvailable={false}
              />
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ești pregătit să începi?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Începe cu prima sesiune și construiește-ți primul joc!
            </p>
            <Button asChild className="bg-course-purple hover:bg-course-blue">
              <Link to="/session1" className="flex items-center">
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

export default Curriculum;
