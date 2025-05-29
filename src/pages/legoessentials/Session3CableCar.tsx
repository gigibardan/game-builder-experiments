import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { Button } from '@/components/ui/button';
import { Lightbulb, Rocket, Check, Play, Forward, Star, PlugZap, Sparkles } from 'lucide-react';
import ImageModal from '@/components/ImageModal';

const Session3CableCar = () => {
  return (
    <LessonLayout
      title="Telecabina Aventurașilor – Cable Car"
      subtitle="Lecția 3 • LEGO SPIKE Essentials"
      courseId="lego-spike-essentials"
      sessionId="3"
      heroColor="bg-yellow-500"
      sidebarItems={[
        { id: 'intro', title: 'Povestea lecției', isActive: true },
        { id: 'learn', title: 'Ce vei învăța' },
        { id: 'build', title: 'Construiește telecabina' },
        { id: 'logic', title: 'Programare logică' },
        { id: 'engineer', title: 'Provocare de inginer LEGO' },
        { id: 'test', title: 'Testare și ajustare' },
        { id: 'bonus', title: 'Activitate bonus' },
        { id: 'conclusion', title: 'Recapitulare și ce urmează' },
      ]}
      resources={[
        { title: 'Lecția oficială LEGO', url: 'https://spike.legoeducation.com/essential/models/blt0000000000000001' },
        { title: 'Plan lecție PDF', url: 'https://techminds.ro/pdf/cablecar-plan.pdf' },
      ]}
    >

      <section id="intro">
        <h2 className="text-2xl font-bold mb-4">Povestea lecției</h2>
        <p>Țineți minte roata cu semafoare? Acum ne mutăm în munți, unde pasagerii LEGO trebuie să ajungă la o cabană cu ajutorul unei telecabine!</p>
        <p>Trebuie să programăm telecabina să oprească pentru pasageri, să semnalizeze vizual și să pornească înapoi.</p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li><strong>Verde</strong> – stația este liberă</li>
          <li><strong>Roșu</strong> – telecabina este în mișcare</li>
        </ul>
        <p className="mt-2">Tu vei construi sistemul și vei controla motorul, LED-ul și logica de mișcare.</p>

        <div className="flex gap-4 mt-6">
          <ImageModal src="/assets/images/robotica/cablecar2.png" alt="Telecabina așteaptă în stație" />
          <ImageModal src="/assets/images/robotica/cablecar1.png" alt="LED verde activ" />
          <ImageModal src="/assets/images/robotica/cablecar3.png" alt="LED roșu și plecare" />
          <ImageModal src="/assets/images/robotica/cablecar4.png" alt="Întoarcere telecabină" />
        </div>
      </section>

      <section id="learn" className="mt-10">
        <h2 className="text-xl font-bold mb-3 flex items-center">
          <Star className="h-5 w-5 mr-2 text-yellow-500" /> Ce vei învăța
        </h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Să construiești o telecabină pe sfoară</li>
          <li>Să controlezi motorul în ambele direcții</li>
          <li>Să folosești LED-ul color ca semnal</li>
          <li>Să creezi o secvență logică: urcare + plecare + întoarcere</li>
          <li>Să recapitulezi semnalele din lecțiile anterioare</li>
        </ul>
      </section>

      <section id="build" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Construiește telecabina</h2>
        <p>Deschide lecția oficială LEGO (sau creează un model propriu) și construiește un sistem simplu cu o cutie mobilă pe o axă/sfoară.</p>
        <div className="mt-4">
          <ImageModal src="/assets/images/robotica/cablecar5.png" alt="Construcția telecabinei" />
          <div className="mt-4">
            <Button asChild className="bg-yellow-500 hover:bg-yellow-600">
              <a href="https://spike.legoeducation.com/essential/models/blt204d046dc10d23c4" target="_blank">
                <Play className="h-4 w-4 mr-2" />
                Deschide lecția oficială LEGO
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="logic" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Programare logică</h2>
        <p>Secvența recomandată pentru telecabină este următoarea:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>LED verde → așteaptă 3 secunde (pasagerii urcă)</li>
          <li>LED roșu → motor pornește înainte (dus)</li>
          <li>Pauză → LED verde → iar pauză</li>
          <li>Motor merge înapoi (întors)</li>
        </ul>
        <ImageModal src="/assets/images/robotica/cablecar6.png" alt="Secvență programare Cable Car" className="mt-4" />
      </section>

      <section id="engineer" className="mt-10 bg-yellow-50 border border-yellow-100 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-2 flex items-center"><Sparkles className="h-4 w-4 mr-2" /> Provocare de inginer LEGO</h3>
        <p className="mb-2">Cum poți face modelul mai bun?</p>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Adaugă decorațiuni pentru stații: gări, copaci, semne</li>
          <li>Testează viteză mai mică sau mai mare</li>
          <li>Verifică stabilitatea cablului și roților</li>
          <li>Construiește o telecabină cu două locuri</li>
        </ul>
      </section>

      <section id="test" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Testare și ajustare</h2>
        <p>Rulează programul complet și observă:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Funcționează LED-urile logic?</li>
          <li>Motorul schimbă corect direcția?</li>
          <li>Telecabina e stabilă?</li>
        </ul>
        <ImageModal src="/assets/images/robotica/cablecar7.png" alt="Testare și ajustare cablu" className="mt-4" />
      </section>

      <section id="bonus" className="mt-10 bg-orange-50 border-l-4 border-orange-400 p-6 text-sm rounded-lg">
        <h3 className="text-lg font-bold mb-2 flex items-center"><PlugZap className="h-4 w-4 mr-2" /> Activitate bonus</h3>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Înlocuiește LED roșu cu o animație (ex: X roșu pe display)</li>
          <li>Adaugă un buton: cabina pleacă doar dacă apăsăm</li>
          <li>Simulează urcarea unui VIP cu semnal special</li>
        </ul>
      </section>

      <section id="conclusion" className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h2 className="text-xl font-bold mb-3">Recapitulare și ce urmează</h2>
        <p className="mb-4 font-medium">Ai programat o telecabină funcțională, cu semnale și direcție controlată!</p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Ai revizuit sensul de rotație și semnalizarea LED</li>
          <li>Ai aplicat cunoștințele din lecțiile anterioare</li>
          <li>Ai testat și îmbunătățit un model funcțional</li>
        </ul>
        <p className="mb-4">
      În lecția următoare vom construi <strong>„Twirling Teacups”</strong> – un carusel cu cești rotitoare unde vei învăța să controlezi <strong>două motoare simultan</strong> pentru o mișcare complexă și spectaculoasă!
    </p>
    <Button asChild variant="secondary">
            <Link to="/courses/lego-spike-essentials">Înapoi la meniu</Link>
    </Button>
      </section>

    </LessonLayout>
  );
};

export default Session3CableCar;
