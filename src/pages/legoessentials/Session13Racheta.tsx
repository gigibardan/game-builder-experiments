import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { Button } from '@/components/ui/button';
import { Rocket, Timer, Check, Forward, PlugZap } from 'lucide-react';
import ImageModal from '@/components/ImageModal';

const SessionRocketLauncher = () => {
  return (
    <LessonLayout
      title="Lansatorul de Rachetă"
      subtitle="Lecție Alternativă • LEGO SPIKE Essentials"
      courseId="lego-spike-essentials"
      sessionId="ALT-01"
      heroColor="bg-red-600"
      sidebarItems={[
        { id: 'intro', title: 'Scurtă poveste', isActive: true },
        { id: 'build', title: 'Construcția lansatorului' },
        { id: 'code', title: 'Programul de lansare' },
        { id: 'challenge', title: 'Provocare creativă' },
      ]}
      resources={[
        { title: 'Instrucțiuni PDF - Lansator Rachetă', url: '/assets/docs/LegoRacheta.pdf' },
      ]}
    >
      <section id="intro">
        <h2 className="text-2xl font-bold mb-4">Scurtă poveste</h2>
        <p>La finalul vizitei din parcul TechMinds, copiii descoperă o nouă zonă: <strong>platforma de lansare</strong>! Aici vom învăța să simulăm o lansare reală de rachetă folosind motoare și programare LEGO.</p>
        <p>Vom construi un mic lansator cu un motor care, la finalul unui countdown 3-2-1, eliberează o piesă LEGO exact ca o rachetă ce decolează.</p>
        <ImageModal src="/assets/images/robotica/Racheta.png" alt="Previzualizare lansator de rachetă" />
      </section>

      <section id="build" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Construcția lansatorului</h2>
        <p>Construcția este simplă dar spectaculoasă: folosește un motor care, la activare, rotește o pârghie care „lansază” piesa-rachetă LEGO. Se folosește o rotiță dințată și o sfoară sau o bară mică pentru simulare.</p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Construiește o platformă stabilă cu motor atașat</li>
          <li>Asigură-te că „racheta” este fixată și poate fi eliberată la mișcarea motorului</li>
          <li>Pregătește-te pentru test!</li>
        </ul>
      </section>

      <section id="code" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Programul de lansare</h2>
        <p>Acest cod simplu folosește blocuri de afișare pentru countdown și apoi mișcă motorul exact 0.25 rotații pentru a lansa racheta:</p>

        <ImageModal src="/assets/images/robotica/racheta2.png" alt="Cod lansator rachetă LEGO" />

        <ul className="list-disc ml-6 mt-4 text-gray-700">
          <li>Afișează <strong>3, 2, 1</strong> cu pauze de 1 secundă</li>
          <li>După countdown, motorul activează lansarea</li>
          <li>Pentru mai mult efect, adaugă sunet de rachetă sau LED-uri!</li>
        </ul>
      </section>

      <section id="challenge" className="mt-10 bg-yellow-50 border border-yellow-100 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-2 flex items-center">
          <Rocket className="h-4 w-4 mr-2" /> Provocare creativă
        </h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Dă un nume rachetei tale și desenează un mic logo</li>
          <li>Construiește un suport de lansare mai mare, ca o platformă NASA</li>
          <li>Adaugă mai multe rachete și creează un sistem de lansări secvențiale</li>
          <li>Scrie o poveste: Unde merge racheta? Ce transportă?</li>
        </ul>
      </section>

      <section className="mt-10 bg-red-100 border border-red-300 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-3">Ce este o Lecție Alternativă?</h2>
        <p>Acest proiect nu face parte din traseul principal LEGO Essentials, dar oferă un mod distractiv și educativ de a explora programarea și mecanica.</p>
        <p>Profesorii pot alege să o folosească la final de curs, în ateliere speciale sau în tabere tematice.</p>
      </section>

      <div className="mt-6">
        <Button asChild variant="secondary">
          <Link to="/lego-spike-essentials">Înapoi la meniu</Link>
        </Button>
      </div>
    </LessonLayout>
  );
};

export default SessionRocketLauncher;
