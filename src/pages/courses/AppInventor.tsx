
import React from 'react';
import { Gamepad } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AppInventor = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">App Inventor - Atelierul de Aplicații Mobile</h1>
          <p className="text-lg text-gray-700 mb-6">
            Învață să creezi aplicații și jocuri pentru dispozitive mobile folosind o platformă vizuală de programare.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Despre acest curs</h2>
            <p className="mb-4">
              App Inventor este o platformă vizuală de programare dezvoltată de MIT, care permite 
              crearea de aplicații pentru telefoane și tablete Android fără a scrie cod tradițional.
              Prin intermediul unei interfețe de tip "drag-and-drop", vei învăța să creezi aplicații
              interactive și jocuri captivante.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Gamepad className="mr-2 h-5 w-5 text-blue-600" /> 
                  Ce vei învăța
                </h3>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Concepte de bază ale programării vizuale</li>
                  <li>Interfețe grafice pentru aplicații mobile</li>
                  <li>Utilizarea senzorilor dispozitivului (cameră, accelerometru, etc.)</li>
                  <li>Dezvoltarea de jocuri simple și aplicații interactive</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h3 className="font-semibold mb-2">Proiecte pe care le vei crea</h3>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Quiz App - aplicație de întrebări și răspunsuri</li>
                  <li>Drawing App - aplicație de desen</li>
                  <li>Weather App - aplicație meteo</li>
                  <li>Game - joc simplu cu obiecte în mișcare</li>
                  <li>Chat App - aplicație de mesagerie</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-6">Lecții disponibile</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Lecția 1: Introducere în App Inventor</h3>
                <p className="text-gray-600 mb-4">Primii pași în App Inventor, configurarea mediului și crearea primului proiect.</p>
                <Link to="/appinventor/session1">
                  <Button className="w-full">Accesează lecția</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Lecția 2: Quiz App</h3>
                <p className="text-gray-600 mb-4">Învață să creezi o aplicație de quiz cu întrebări și răspunsuri multiple.</p>
                <Link to="/appinventor/session2">
                  <Button className="w-full">Accesează lecția</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Lecția 3: Drawing App</h3>
                <p className="text-gray-600 mb-4">Creează o aplicație de desen care folosește gesturile tactile.</p>
                <Link to="/appinventor/session3">
                  <Button className="w-full">Accesează lecția</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Lecția 4: Weather App</h3>
                <p className="text-gray-600 mb-4">Dezvoltă o aplicație meteo care utilizează date din API-uri externe.</p>
                <Link to="/appinventor/session4">
                  <Button className="w-full">Accesează lecția</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Lecția 5: Joc Arcade</h3>
                <p className="text-gray-600 mb-4">Creează un joc arcade simplu cu obiecte în mișcare și coliziuni.</p>
                <Link to="/appinventor/session5">
                  <Button className="w-full">Accesează lecția</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Lecția 6: Aplicație de Chat</h3>
                <p className="text-gray-600 mb-4">Construiește o aplicație de mesagerie instant cu comunicare în timp real.</p>
                <Link to="/appinventor/session6">
                  <Button className="w-full">Accesează lecția</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AppInventor;
