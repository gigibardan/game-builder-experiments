import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { Button } from '@/components/ui/button';
import { Star, Play, Forward } from 'lucide-react';
import ImageModal from '@/components/ImageModal';

const Session8JuniorPaintball = () => {
  return (
    <LessonLayout
      title="Junior Paintball – Mașina de Distracție"
      subtitle="Lecția 8 • LEGO SPIKE Essentials"
      courseId="lego-spike-essentials"
      sessionId="8"
      heroColor="bg-purple-600"
      sidebarItems={[
        { id: 'intro', title: 'Povestea lecției', isActive: true },
        { id: 'pinball', title: 'Ce este un Pinball?' },
        { id: 'learn', title: 'Ce vei învăța' },
        { id: 'start', title: 'Construcția jocului' },
        { id: 'step1', title: 'Programare: Mișcare continuă' },
        { id: 'conclusion', title: 'Recapitulare și ce urmează' },
      ]}
      resources={[
        {
          title: 'Lecția oficială LEGO',
          url: 'https://spike.legoeducation.com/essential/models/bltcbf6944632927b21',
        },
      ]}
    >
      <section id="intro">
        <h2 className="text-2xl font-bold mb-4">Povestea lecției</h2>
        <p>În parcul TechMinds, distracția atinge un nou nivel! De această dată construim o mini-mașină de tip <strong>Pinball</strong> – jocul în care reflexele și precizia sunt cheia.</p>
        <p>Scopul este simplu: împiedică bila să ajungă în poartă! Un ciocănel rotativ va respinge mingea înapoi de fiecare dată când se apropie periculos.</p>
      </section>

      <section id="pinball" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Ce este un joc Pinball?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ImageModal src="/assets/images/robotica/pinball1.jpg" alt="Pinball clasic real" />
          <div>
            <p>Pinball este un joc mecanic clasic din sălile de jocuri. Jucătorii lansează o bilă de metal și încearcă să o mențină în joc cât mai mult, acumulând puncte.</p>
            <p>În versiunea noastră LEGO, vom construi un mecanism care imită acest principiu printr-un ciocănel controlat de motor.</p>
          </div>
        </div>
      </section>

      <section id="learn" className="mt-10">
        <h2 className="text-xl font-bold mb-3 flex items-center">
          <Star className="h-5 w-5 mr-2 text-purple-600" /> Ce vei învăța
        </h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Cum funcționează un mecanism de tip „flipper”</li>
          <li>Cum să programezi mișcare continuă cu un motor</li>
          <li>Cum să construiești un joc de acțiune cu elemente mecanice</li>
        </ul>
      </section>

      <section id="start" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Construcția jocului</h2>
        <p>Deschide aplicația LEGO SPIKE Essentials și urmează pașii din lecția „Junior Paintball”. Vei construi o bază pe care mingea poate cădea și un braț rotativ care respinge mingea automat.</p>
        <div className="mt-4">
          <ImageModal src="/assets/images/robotica/pinball2.png" alt="Construcție aparat Junior Paintball" />
          <div className="mt-4">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <a href="https://spike.legoeducation.com/essential/models/bltcbf6944632927b21" target="_blank">
                <Play className="h-4 w-4 mr-2" />
                Deschide lecția oficială LEGO
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="step1" className="mt-10">
        <h2 className="text-xl font-bold mb-3">1. Programare: Poziție aleatorie pentru ciocan</h2>
        <ImageModal src="/assets/images/robotica/pinball3.png" alt="Cod aleator Paintball" />
        <h4 className="mt-4 font-semibold">Explicație:</h4>
        <p>
            De această dată, ciocănelul nu se rotește continuu, ci pornește cu o mișcare aleatoare într-un interval între <code>-180°</code> și <code>180°</code>. Acest lucru creează un comportament surprinzător și face jocul mai amuzant!
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Se setează viteza motorului la 25%</li>
            <li>Motorul se mișcă către o poziție aleasă aleator între -180 și 180</li>
            <li>Mișcarea este calculată pe drumul cel mai scurt</li>
        </ul>
        <div className="mt-4 bg-purple-50 border-l-4 border-purple-400 p-4 text-sm">
            <strong>Bonus inginereasc:</strong> Construcția acestui ciocănel folosește <strong>elastice reale</strong> pentru a tensiona și stabiliza mișcarea. Este o soluție excelentă de prototipare, exact cum folosesc inginerii în viața reală!
        </div>
        </section>


      <section id="conclusion" className="mt-10 bg-purple-50 p-6 rounded-lg border border-purple-200">
        <h2 className="text-xl font-bold mb-3">Recapitulare și ce urmează</h2>
        <p className="mb-4 font-medium">Felicitări! Ai creat un mini-joc de tip Pinball și ai înțeles cum putem construi sisteme LEGO care reacționează rapid și automat.</p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Modifică viteza ciocănelului</li>
          <li>Adaugă un sunet la fiecare rotire</li>
          <li>Simulează un sistem de punctaj</li>
        </ul>
        <div className="mt-4">
          <h3 className="font-semibold mb-2 flex items-center">
            <Forward className="h-4 w-4 mr-2" /> Ce urmează?
          </h3>
          <p className="mb-4">
            În lecția următoare vom construi <strong>„Train Tunnel”</strong> – un trenuleț care se deplasează automat și reacționează la obstacole!
          </p>
          <Button asChild variant="secondary">
            <Link to="/lego-spike-essentials/traintunnel">Înapoi la meniu</Link>
          </Button>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Session8JuniorPaintball;
