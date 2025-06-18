import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { Button } from '@/components/ui/button';
import { Lightbulb, Rocket, Check, Play, Forward, Star, PlugZap, Sparkles } from 'lucide-react';
import ImageModal from '@/components/ImageModal';

const Session10BigBus = () => {
  return (
    <LessonLayout
      title="Big Bus - Autobuzul Inteligent"
      subtitle="Lecția 10 • LEGO SPIKE Essentials"
      courseId="lego-spike-essentials"
      sessionId="10"
      heroColor="bg-blue-600"
      sidebarItems={[
        { id: 'intro', title: 'Povestea lecției', isActive: true },
        { id: 'learn', title: 'Ce vei învăța' },
        { id: 'start', title: 'Pregătire și construire' },
        { id: 'step1', title: 'Control motor fără extensie' },
        { id: 'step2', title: 'Pornire la culoarea albastru' },
        { id: 'step3', title: 'Oprire și repornire la stație' },
        { id: 'step4', title: 'Provocare: traseu infinit' },
        { id: 'step5', title: 'Stații creative' },
        { id: 'code', title: 'Cod avansat cu IF' },
        { id: 'conclusion', title: 'Recapitulare și ce urmează' },
      ]}
      resources={[
        {
          title: 'Lecția oficială LEGO',
          url: 'https://spike.legoeducation.com/essential/models/blt04ae1f8b70284e58',
        },
      ]}
    >
      <section id="intro">
  <h2 className="text-2xl font-bold mb-4">Povestea lecției</h2>
  <p>
    După o zi plină de aventuri în parcul de distracții TechMinds, pasagerii LEGO trebuie să ajungă acasă.
    Dar orașul TechMinds e modern – aici nu mai există șoferi! Pentru a ajunge în centrul orașului,
    trebuie să iei un autobuz autonom care oprește singur în stații, folosind doar <strong>culorile</strong>.
  </p>
  <p className="mt-2">
    Tu vei construi acest autobuz inteligent – <strong>Big Bus</strong> – care pornește când detectează <span className="text-blue-600 font-semibold">albastru </span>
    și se oprește când vede <span className="text-green-600 font-semibold">verde</span>.
    Este o lecție captivantă în care repetam conceptele învațate despre <strong>senzori de culoare</strong>, <strong>logică condițională</strong> și <strong>mișcare autonomă</strong>.
  </p>
</section>


      <section id="learn" className="mt-10">
        <h2 className="text-xl font-bold mb-3 flex items-center">
          <Star className="h-5 w-5 mr-2 text-blue-600" /> Ce vei învăța
        </h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Construcția unui autobuz cu senzor de culoare</li>
          <li>Controlul motorului fără extensie Movement</li>
          <li>Reacții condiționate la culori (roșu, verde, albastru)</li>
          <li>Rută logică cu opriri și porniri</li>
          <li>Personalizarea cu stații LEGO</li>
        </ul>
      </section>

      <section id="start" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Pregătire și construire</h2>
        <ImageModal
          src="/assets/images/robotica/bigbus1.webp"
          alt="Previzualizare Big Bus"
        />
        <p className="mt-4">
          Urmează instrucțiunile din lecția LEGO oficială pentru a construi autobuzul.
        </p>
        <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700">
          <a
            href="https://spike.legoeducation.com/essential/models/blt04ae1f8b70284e58"
            target="_blank"
          >
            <Play className="h-4 w-4 mr-2" />
            Deschide lecția oficială LEGO
          </a>
        </Button>
      </section>

      <section id="step1" className="mt-10">
        <h2 className="text-xl font-bold mb-3">1. Controlul motorului fără extensii</h2>
        <ImageModal src="/assets/images/robotica/bigbus2.png" alt="Start fără Movement" />
        <p className="mt-2">
          Pornim motorul fără să adăugăm extensia Movement, doar cu blocuri simple și senzorul activ.
        </p>
      </section>

      <section id="step2" className="mt-10">
        <h2 className="text-xl font-bold mb-3">2. Pornirea la culoarea albastru</h2>
        <ImageModal src="/assets/images/robotica/bigbus3.png" alt="Pornește la albastru" />
        <p>Când senzorul vede albastru, autobuzul merge 10 rotații – simulând plecarea din stație.</p>
      </section>

      <section id="step3" className="mt-10">
        <h2 className="text-xl font-bold mb-3">3. Oprirea la verde și reluarea</h2>
        <ImageModal src="/assets/images/robotica/bigbus4.png" alt="Oprire și plecare" />
        <p>Autobuzul oprește la stația verde, așteaptă 5 secunde, apoi pornește spre următoarea.</p>
      </section>

      <section id="step4" className="mt-10">
        <h2 className="text-xl font-bold mb-3">4. Provocare: traseu infinit</h2>
        <ImageModal src="/assets/images/robotica/bigbus5.png" alt="Buclă infinită" />
        <p>
          Creează o buclă infinită în care autobuzul circulă între două stații, oprindu-se automat și continuând călătoria.
        </p>
      </section>

      <section id="step5" className="mt-10 bg-blue-50 border border-blue-100 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-2 flex items-center">
          <Sparkles className="h-4 w-4 mr-2" /> Provocare creativă: Stații LEGO
        </h3>
        <p>Adaugă detalii precum acoperișuri, semne sau pasageri LEGO. Poți folosi și un semafor funcțional!</p>
      </section>

      <section id="code" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Cod avansat cu IF</h2>
        <ImageModal src="/assets/images/robotica/bigbuscode.png" alt="Cod IF/ELSE autobuz" />
        <p>Folosim o structură condițională pentru a adapta comportamentul în funcție de culoarea detectată.</p>
      </section>

      <section id="conclusion" className="mt-10 bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h2 className="text-xl font-bold mb-3">Recapitulare și ce urmează</h2>
        <p className="mb-4 font-medium">
          Ai construit un autobuz inteligent care se oprește în stații folosind culori. Bravo!
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Experimentează cu alte culori și viteze</li>
          <li>Adaugă un semafor care controlează autobuzul</li>
          <li>Extinde traseul cu mai multe stații</li>
        </ul>
        <div className="mt-4">
          <h3 className="font-semibold mb-2 flex items-center">
            <Forward className="h-4 w-4 mr-2" /> Ce urmează?
          </h3>
          <p className="mb-4">
            În următoarea lecție vei învăța cum să folosești senzorul de distanță pentru a evita obstacole!
          </p>
          <Button asChild variant="secondary">
            <Link to="/lego-spike-essentials/distance-obstacle">Înapoi la meniu</Link>
          </Button>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Session10BigBus;
