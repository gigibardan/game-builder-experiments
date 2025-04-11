
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { motion } from 'framer-motion';

const Session3 = () => {
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
                Lecția 3: Moștenire și Polimorfism
              </h1>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Concepte avansate în programarea orientată pe obiecte
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-orange-700">Moștenirea în Java</h2>
              <p className="mb-6 text-gray-700">
                Moștenirea este un mecanism prin care o clasă poate deriva proprietăți (metode și atribute) 
                dintr-o altă clasă. Acest concept permite reutilizarea codului și stabilirea unei relații 
                ierarhice între clase.
              </p>

              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src="https://www.greenfoot.org/images/home/greenfoot_environment.png" 
                  alt="Greenfoot Environment" 
                  className="w-full"
                />
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4 text-orange-700">Exemplu de moștenire:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
{`// Clasa părinte
public class Vehicle extends Actor
{
    protected int speed;
    protected int fuel;
    
    public Vehicle()
    {
        speed = 0;
        fuel = 100;
    }
    
    public void move()
    {
        if (fuel > 0) {
            setLocation(getX() + speed, getY());
            fuel--;
        }
    }
    
    public void refuel(int amount)
    {
        fuel += amount;
    }
}

// Clasa copil
public class Car extends Vehicle
{
    private boolean hasRoof;
    
    public Car()
    {
        super(); // Apelează constructorul clasei părinte
        hasRoof = true;
        setImage("car.png");
    }
    
    // Suprascrierea metodei din clasa părinte
    @Override
    public void move()
    {
        super.move(); // Apelează metoda din clasa părinte
        // Comportament specific mașinii
        if (speed > 5) {
            getWorld().showText("Driving fast!", 100, 100);
        }
    }
    
    public void honk()
    {
        // Comportament specific doar mașinii
        Greenfoot.playSound("honk.wav");
    }
}`}
                </pre>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-orange-700">Polimorfismul în Java</h2>
              <p className="mb-6 text-gray-700">
                Polimorfismul permite obiectelor de diferite tipuri să răspundă diferit la aceeași metodă. 
                În Java, polimorfismul este realizat prin suprascrierea metodelor și permite tratarea obiectelor 
                derivate ca și cum ar fi de tipul clasei de bază.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-orange-700">Utilizarea polimorfismului:</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4">
{`// În clasa World putem avea:
public void createVehicles()
{
    // Creăm un array de Vehicle care conține obiecte Car, Motorcycle, Truck
    Vehicle[] vehicles = new Vehicle[3];
    vehicles[0] = new Car();
    vehicles[1] = new Motorcycle();
    vehicles[2] = new Truck();
    
    // Putem apela metoda move() pe toate vehiculele
    // Fiecare va răspunde conform implementării specifice
    for (Vehicle v : vehicles) {
        addObject(v, Greenfoot.getRandomNumber(600), Greenfoot.getRandomNumber(400));
        v.move(); // Polimorfism - fiecare vehicul se mișcă diferit
    }
}`}
                </pre>
                <p className="text-gray-700">
                  Prin polimorfism, putem trata toate tipurile de vehicule într-un mod uniform, 
                  dar fiecare va avea comportamentul său specific definit în clasa proprie.
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-orange-700">Proiect practic: Simulator de trafic</h2>
              <p className="mb-6 text-gray-700">
                În acest proiect, vom crea un simulator de trafic simplu cu diferite tipuri de vehicule.
              </p>

              <ol className="list-decimal pl-6 mb-8 text-gray-700 space-y-3">
                <li>Creează o clasă de bază <code>Vehicle</code> care extinde <code>Actor</code></li>
                <li>Implementează clasele derivate: <code>Car</code>, <code>Motorcycle</code>, și <code>Truck</code></li>
                <li>Adaugă atribute și metode specifice pentru fiecare tip de vehicul</li>
                <li>Creează o lume <code>TrafficWorld</code> cu drumuri și semafoare</li>
                <li>Adaugă diversele vehicule în lume și observă comportamentul lor</li>
              </ol>

              <div className="bg-orange-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-orange-700">Exercițiu pentru acasă</h3>
                <p className="text-gray-700 mb-4">
                  Extinde simulatorul de trafic adăugând:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Clase pentru semafoare care pot schimba starea (verde, galben, roșu)</li>
                  <li>Vehicule care respectă semnalele semafoarelor</li>
                  <li>Pietonii care traversează strada la trecerile de pietoni</li>
                  <li>Un sistem de scor care penalizează vehiculele care nu respectă regulile de circulație</li>
                </ul>
              </div>

              <div className="flex justify-between mt-12">
                <Button asChild variant="outline">
                  <Link to="/greenfoot/session2" className="flex items-center">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Lecția anterioară</span>
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/greenfoot" className="flex items-center">
                    <span>Înapoi la curs</span>
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

export default Session3;
