import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { Button } from '@/components/ui/button';
import { Lightbulb, Rocket, Check, Play, Forward, Star, PlugZap, Sparkles } from 'lucide-react';
import ImageModal from '@/components/ImageModal';

const WalkerRobotPart1 = () => {
  return (
    <LessonLayout
      title="Walker Robot – Partea 1"
      subtitle="Ultimul proiect LEGO SPIKE Essentials – Baza robotului"
      courseId="lego-spike-essentials"
      sessionId="11.1"
      heroColor="bg-fuchsia-600"
      sidebarItems={[
        { id: 'intro', title: 'Povestea proiectului', isActive: true },
        { id: 'learn', title: 'Ce vei învăța' },
        { id: 'start', title: 'Construiește baza robotului' },
        { id: 'step1', title: 'Mișcarea robotului' },
        { id: 'step2', title: 'Balans pentru avansați' },
        { id: 'conclusion', title: 'Ce urmează' }
      ]}
      resources={[
        { title: 'PDF Instructiuni - Walker Robot (Partea 1)', url: '/assets/docs/WalkingRobotPart1.pdf' },
      ]}
    >

      <section id="intro">
        <h2 className="text-2xl font-bold mb-4">Povestea proiectului</h2>
        <p>Acesta este ultimul și cel mai avansat proiect din seria noastră LEGO Spike Essentials.</p>
        <p>Walker Robot marchează o etapă importantă în progresul tău. Vom construi împreună un robot care <strong>merge singur pe propriile picioare</strong>, folosind două motoare și o bază articulată.</p>
        <p>Imaginăm că acest robot face parte dintr-un laborator de testare a roboților umanoizi din orașul TechMinds. Poate fi un poștaș robot, un companion sau chiar un dansator LEGO!</p>

        <div className="mt-6">
          <ImageModal
            src="/assets/images/robotica/WalkingRobotPart1.png"
            alt="Robot LEGO care merge"
          />
        </div>

        <div className="mt-6 bg-fuchsia-50 border-l-4 border-fuchsia-400 p-4 text-sm">
          <strong>Atenție:</strong> Această lecție nu este o lecție LEGO oficială. Pot exista pași imperfecți în construcție sau programare. Este un exercițiu de gândire inginerească și curaj!
        </div>
      </section>

      <section id="learn" className="mt-10">
        <h2 className="text-xl font-bold mb-3 flex items-center">
          <Star className="h-5 w-5 mr-2 text-fuchsia-600" /> Ce vei învăța
        </h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Construirea unui mecanism de mers articulat</li>
          <li>Controlul a două motoare pentru mișcare sincronizată</li>
          <li>Aplicarea noțiunilor de balans și echilibru</li>
          <li>Testarea și reglarea poziției picioarelor robotului</li>
        </ul>
      </section>

      <section id="start" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Construiește baza robotului</h2>
        <p>Deschide PDF-ul cu instrucțiunile oficiale TechMinds și urmează pașii pentru a construi picioarele și partea de jos a robotului.</p>
        <div className="mt-4">
          <Button asChild className="bg-fuchsia-600 hover:bg-fuchsia-700">
            <a href="/assets/docs/WalkingRobotPart1.pdf" target="_blank">
              <Play className="h-4 w-4 mr-2" />
              Deschide instrucțiunile PDF
            </a>
          </Button>
        </div>
      </section>

      <section id="step1" className="mt-10">
        <h2 className="text-xl font-bold mb-3">1. Mișcarea robotului</h2>
        <p>Vom începe cu un cod de bază care setează poziția inițială a motoarelor și le pornește sincron pentru a simula mersul.</p>
        <ImageModal src="/assets/images/robotica/walker2.png" alt="Cod pentru mers înainte" />
        <h4 className="mt-4 font-semibold">Explicație:</h4>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Setăm viteza de mișcare la 50%</li>
          <li>Fiecare motor este adus în poziția de start (90°)</li>
          <li>Se pornește mișcarea cu comanda <code>start moving ↑</code> care animă picioarele în pași</li>
        </ul>
      </section>

      <section id="step2" className="mt-10">
        <h2 className="text-xl font-bold mb-3">2. Balans pentru elevi avansați</h2>
        <p>Dacă dorești, poți adăuga acest cod avansat care reglează echilibrul robotului printr-un calcul real de „yaw angle”.</p>
        <ImageModal src="/assets/images/robotica/walker3.png" alt="Cod balans robot - Yaw angle" />
        <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm">
          <strong>Ce este yaw?</strong> Yaw este un unghi care măsoară rotirea robotului în jurul propriei axe. Cu acest cod, robotul detectează dacă e înclinat și ajustează direcția pentru a nu cădea.
        </div>
        <p className="mt-3">Este un concept real de robotică transpus în LEGO. Dacă reușești să îl implementezi, înseamnă că ești pregătit pentru LEGO Spike Prime!</p>
      </section>

      <section id="conclusion" className="mt-10 bg-fuchsia-50 p-6 rounded-lg border border-fuchsia-200">
        <h2 className="text-xl font-bold mb-3">Ce urmează</h2>
        <p className="mb-4 font-medium">Felicitări! Ai construit partea de jos a robotului tău care merge. Dacă ți-a mai rămas timp, poți testa codul de mers deja și îți vei vedea robotul „pășind”!</p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Verifică dacă merge drept</li>
          <li>Experimentează cu viteze diferite</li>
          <li>Adaugă obstacole pentru testare</li>
        </ul>

        <div className="mt-4">
          <h3 className="font-semibold mb-2 flex items-center">
            <Forward className="h-4 w-4 mr-2" /> Partea a doua
          </h3>
          <p className="mb-4">
            În următoarea lecție construim partea de sus a robotului: capul, corpul și extensii creative!
          </p>
          <Button asChild variant="secondary">
            <Link to="/lego-spike-essentials/session12robotpart2">Continuă cu Partea 2</Link>
          </Button>
        </div>
      </section>

    </LessonLayout>
  );
};

export default WalkerRobotPart1;
