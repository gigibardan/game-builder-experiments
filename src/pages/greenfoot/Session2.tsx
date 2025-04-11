
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { motion } from 'framer-motion';

const Session2 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ReadingProgressBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-400 py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Lecția 2: Clase și Obiecte în Java
              </h1>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Descoperă fundamentele programării orientate pe obiecte
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-orange-700">Principii fundamentale OOP</h2>
              <p className="mb-6 text-gray-700">
                Programarea orientată pe obiecte (OOP) este un paradigm de programare bazat pe conceptul de "obiecte" care 
                pot conține date și cod. În Java, totul este organizat în clase și obiecte, care sunt instanțe ale acelor 
                clase.
              </p>

              <div className="mb-8 rounded-lg overflow-hidden bg-gray-50 p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-700">Clase vs. Obiecte:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-orange-600 mb-2">Clasa</h4>
                    <p className="text-gray-700">Este un șablon sau o schiță care definește variabilele și comportamentele comune pentru un anumit tip de obiect.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-orange-600 mb-2">Obiect</h4>
                    <p className="text-gray-700">Este o instanță a unei clase, reprezentând o entitate reală cu stare și comportament.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-orange-700">Crearea claselor în Greenfoot</h2>
              <p className="mb-6 text-gray-700">
                În Greenfoot, clasele sunt reprezentate vizual în partea dreaptă a interfeței. Poți crea o nouă clasă 
                făcând clic dreapta pe panoul de clase și selectând "New Class". Greenfoot oferă câteva tipuri predefinite 
                de clase:
              </p>

              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li><strong>World</strong>: Clasa de bază pentru toate lumile (scenele) din Greenfoot</li>
                <li><strong>Actor</strong>: Clasa de bază pentru toate obiectele care pot fi plasate în lume</li>
              </ul>

              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4 text-orange-700">Exemplu de clasă în Java:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
{`public class Car extends Actor
{
    // Atribute (stare)
    private int speed;
    private String color;
    
    // Constructor
    public Car()
    {
        speed = 0;
        color = "red";
    }
    
    // Metode (comportament)
    public void accelerate()
    {
        speed = speed + 1;
    }
    
    public void brake()
    {
        if (speed > 0) {
            speed = speed - 1;
        }
    }
    
    // Metodă principală apelată în fiecare cadru
    public void act()
    {
        move(speed);
    }
}`}
                </pre>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-orange-700">Exercițiu practic</h2>
              <p className="mb-6 text-gray-700">
                În acest exercițiu, vom crea un scenariu simplu cu o mașină care poate fi controlată cu tastatura.
              </p>

              <ol className="list-decimal pl-6 mb-8 text-gray-700 space-y-3">
                <li>Deschide Greenfoot și creează un nou scenariu</li>
                <li>Creează o subclasă a clasei <code>World</code> numită <code>RoadWorld</code></li>
                <li>Creează o subclasă a clasei <code>Actor</code> numită <code>Car</code></li>
                <li>Implementează codul din exemplul de mai sus pentru clasa <code>Car</code></li>
                <li>Adaugă metodele pentru a răspunde la apăsarea tastelor (săgeți pentru direcție)</li>
                <li>Adaugă o mașină în lume și testează funcționalitatea</li>
              </ol>

              <div className="bg-orange-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-orange-700">Exercițiu pentru acasă</h3>
                <p className="text-gray-700 mb-4">
                  Extinde clasa <code>Car</code> adăugând următoarele funcționalități:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Un constructor cu parametri pentru a seta culoarea și viteza inițială</li>
                  <li>O metodă pentru a schimba culoarea mașinii</li>
                  <li>Un sistem de combustibil care scade în timp ce mașina se deplasează</li>
                  <li>Obiecte "Fuel" care pot fi colectate pentru a reîncărca rezervorul</li>
                </ul>
              </div>

              <div className="flex justify-between mt-12">
                <Button asChild variant="outline">
                  <Link to="/greenfoot/session1" className="flex items-center">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Lecția anterioară</span>
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/greenfoot/session3" className="flex items-center">
                    <span>Lecția următoare</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Session2;
