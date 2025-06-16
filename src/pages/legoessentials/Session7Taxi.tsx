import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { Button } from '@/components/ui/button';
import { Lightbulb, Rocket, Check, Play, Forward, Star, PlugZap, Sparkles } from 'lucide-react';
import ImageModal from '@/components/ImageModal';

const Session7Taxi = () => {
  return (
    <LessonLayout
      title="Taxi-ul LEGO – Prima noastră mașină inteligentă"
      subtitle="Lecția 7 • LEGO SPIKE Essentials"
      courseId="lego-spike-essentials"
      sessionId="7"
      heroColor="bg-yellow-500"
      sidebarItems={[
        { id: 'intro', title: 'Povestea lecției', isActive: true },
        { id: 'learn', title: 'Ce vei învăța' },
        { id: 'start', title: 'Construirea taxiului' },
        { id: 'step1', title: 'Deplasare înainte/înapoi' },
        { id: 'step2', title: 'Viraje la stânga și dreapta' },
        { id: 'challenge', title: 'Provocare: Evitarea obstacolelor' },
        { id: 'extras', title: 'Activități extra și personalizare' },
        { id: 'conclusion', title: 'Recapitulare și ce urmează' },
      ]}
      resources={[
        { title: 'Lecția oficială LEGO', url: 'https://spike.legoeducation.com/essential/models/blt6eb22e7183320242' }
      ]}
    >

      <section id="intro">
        <h2 className="text-2xl font-bold mb-4">Povestea lecției</h2>
        <p>După ce am construit carusele și elicoptere, a venit momentul să pășim într-o lume cu adevărat fascinantă: <strong>automobilele!</strong></p>
        <p>Astăzi vom construi primul nostru <strong>taxi LEGO</strong>, pe care îl vom programa să se deplaseze, să vireze și să evite obstacole. Vom testa direcții, vom calcula traiectorii și ne vom bucura de o primă experiență care simulează condusul!</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <ImageModal src="/assets/images/robotica/taxi.webp" alt="Construcția taxiului" />
          <ImageModal src="/assets/images/robotica/taxi2.png" alt="Pornire înainte" />
          <ImageModal src="/assets/images/robotica/taxi3.jpg" alt="Viraj stânga" />
        </div>
      </section>

      <section id="learn" className="mt-10">
        <h2 className="text-xl font-bold mb-3 flex items-center">
          <Star className="h-5 w-5 mr-2 text-yellow-500" /> Ce vei învăța
        </h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Construirea unui autovehicul simplu</li>
          <li>Programarea mișcării înainte și înapoi</li>
          <li>Realizarea virajelor</li>
          <li>Crearea unei secvențe de navigare</li>
          <li>Testare și adaptare la obstacole</li>
        </ul>
      </section>

      <section id="extensions" className="mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-3">🔧 Activarea extensiei „Movement”</h2>
        <p className="mb-4">
            Pentru a programa corect mișcarea taxiului LEGO, trebuie să activezi extensia <strong>Movement</strong> în aplicația LEGO SPIKE:
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Apasă pe butonul <strong>Show block extensions</strong> (dreapta sus în aplicație)</li>
            <li>Selectează extensia <strong>Movement</strong> – aceasta adaugă blocuri speciale pentru mișcarea cu 2 roți</li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <ImageModal src="/assets/images/robotica/taxi4.png" alt="Show block extensions" />
            <ImageModal src="/assets/images/robotica/taxi5.png" alt="Selectează extensia Movement" />
        </div>
        </section>


      <section id="start" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Construirea taxiului</h2>
        <p>Urmează pașii din lecția oficială LEGO pentru a construi modelul de taxi.</p>
        <div className="mt-4">
          <ImageModal src="/assets/images/robotica/taxi.webp" alt="Taxi LEGO construit" />
          <div className="mt-4">
            <Button asChild className="bg-yellow-500 hover:bg-yellow-600">
              <a href="https://spike.legoeducation.com/essential/models/blt6eb22e7183320242" target="_blank">
                <Play className="h-4 w-4 mr-2" />
                Deschide lecția oficială LEGO
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="step1" className="mt-10">
        <h2 className="text-xl font-bold mb-3">1. Deplasare înainte și înapoi</h2>
        <ImageModal src="/assets/images/robotica/taxi6.png" alt="Mișcare înainte și înapoi" />
        <h4 className="mt-4 font-semibold">Explicație:</h4>
        <p>Folosim două motoare pentru roțile din spate. Când ambele motoare merg în aceeași direcție, taxiul se deplasează în linie dreaptă. Inversarea direcției duce la mers înapoi.</p>
      </section>

      <section id="step2" className="mt-10">
        <h2 className="text-xl font-bold mb-3">2. Viraje la stânga și dreapta</h2>
        <ImageModal src="/assets/images/robotica/taxi7.png" alt="Viraj dreapta" />
        <h4 className="mt-4 font-semibold">Explicație:</h4>
        <p>Pentru a vira:</p>
        <ul className="list-disc ml-6 text-gray-700 mt-2">
          <li>Motorul din stânga merge, cel din dreapta se oprește → viraj dreapta</li>
          <li>Motorul din dreapta merge, cel din stânga se oprește → viraj stânga</li>
        </ul>
        <p className="mt-2">Poți experimenta și cu diferențe de viteză în loc să oprești complet un motor.</p>
      </section>

      <section id="challenge" className="mt-10 bg-yellow-50 border border-yellow-100 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-2 flex items-center">
          <Sparkles className="h-4 w-4 mr-2" /> Provocare de navigare
        </h3>
        <p className="mb-2">Profesorul plasează câteva obstacole (pahare, cărămizi LEGO, cutii). Elevii primesc o misiune:</p>
        <p><strong>Ajungeți cu taxiul vostru din punctul A în punctul B evitând obstacolele!</strong></p>
        <ul className="list-disc ml-6 text-gray-700 mt-2">
          <li>Scrie o secvență de mișcări: înainte, viraj, înainte...</li>
          <li>Testează după fiecare comandă</li>
          <li>Corectează și optimizează traseul</li>
        </ul>
      </section>

      <section id="extras" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Activități extra și personalizare</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Adaugă faruri LED care se aprind la pornire</li>
          <li>Simulează o oprire la semafor: LED roșu → pauză → LED verde → plecare</li>
          <li>Adaugă un claxon sonor</li>
          <li>Construiește o stație de taxi LEGO și un pasager care urcă</li>
        </ul>
      </section>

      <section id="conclusion" className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h2 className="text-xl font-bold mb-3">Recapitulare și ce urmează</h2>
        <p className="mb-4 font-medium">Ai construit primul tău vehicul inteligent – felicitări!</p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Explorează trasee mai lungi și mai dificile</li>
          <li>Testează controlul prin senzori (opțional)</li>
          <li>Proiectează un oraș LEGO cu mai multe taxiuri</li>
        </ul>
        <div className="mt-4">
          <h3 className="font-semibold mb-2 flex items-center">
            <Forward className="h-4 w-4 mr-2" /> Ce urmează?
          </h3>
          <p className="mb-4">
            În lecția următoare vei construi <strong>„Lansatorul de Rachete”</strong> – unde controlul presiunii și al lansării rapide sunt esențiale!
          </p>
          <Button asChild variant="secondary">
            <Link to="/lego-spike-essentials/rocketlauncher">Înapoi la meniu</Link>
          </Button>
        </div>
      </section>

    </LessonLayout>
  );
};

export default Session7Taxi;
