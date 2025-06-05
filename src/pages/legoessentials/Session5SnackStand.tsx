import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { Button } from '@/components/ui/button';
import { Lightbulb, Rocket, Check, Play, Forward, Star, PlugZap, Sparkles } from 'lucide-react';
import ImageModal from '@/components/ImageModal';

const Session5SnackStand = () => {
  return (
    <LessonLayout
      title="Snack Stand - Standul de Gustări Inteligent"
      subtitle="Lecția 5 • LEGO SPIKE Essentials"
      courseId="lego-spike-essentials"
      sessionId="5"
      heroColor="bg-yellow-500"
      sidebarItems={[
        { id: 'intro', title: 'Povestea lecției', isActive: true },
        { id: 'learn', title: 'Ce vei învăța' },
        { id: 'start', title: 'Construcția standului' },
        { id: 'menu', title: 'Meniul și livrarea' },
        { id: 'step1', title: 'Burger - roșu' },
        { id: 'step2', title: 'Salată - verde' },
        { id: 'step3', title: 'Desert - albastru' },
        { id: 'challenge', title: 'Provocare extra' },
        { id: 'advanced', title: 'Variantă avansată' },
        { id: 'conclusion', title: 'Recapitulare și ce urmează' },
      ]}
      resources={[
        {
          title: 'Lecția oficială LEGO',
          url: 'https://education.lego.com/en-us/lessons/spikeessential-amazing-amusement-park/spikeessential-snack-stand/',
        },
      ]}
    >
      <section id="intro">
        <h2 className="text-2xl font-bold mb-4">Povestea lecției</h2>
       <p>
        După ce ai construit roata panoramică și caruselul ceșcuțelor, astăzi adăugăm o nouă atracție în parcul TechMinds: un stand inteligent de gustări care oferă produse delicioase clienților pe baza biletelor colorate.
        </p>
        <p>
          Tu vei construi un sistem care recunoaște culoarea biletului și livrează gustarea potrivită într-un mod unic!
        </p>
        <p className="mt-2">
          Este lecția perfectă pentru a învăța despre senzori, programare condițională și livrare automată.
        </p>
      </section>

      <section id="learn" className="mt-10">
        <h2 className="text-xl font-bold mb-3 flex items-center">
          <Star className="h-5 w-5 mr-2 text-yellow-500" /> Ce vei învăța
        </h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Construcția unui stand de livrare automat</li>
          <li>Utilizarea senzorului de culoare</li>
          <li>Controlul motorului în funcție de culoare</li>
          <li>Personalizarea vitezei și logicii de servire</li>
          <li>Utilizarea variabilelor pentru a număra comenzile</li>
        </ul>
      </section>

      <section id="start" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Construcția standului</h2>
        <p>
          Urmează pașii din aplicația SPIKE pentru a construi standul. Apoi revino aici pentru programare și testare!
        </p>
        <div className="mt-4">
          <ImageModal src="/assets/images/robotica/snackstand1.webp" alt="Previzualizare Snack Stand" />
          <div className="mt-4">
            <Button asChild className="bg-yellow-500 hover:bg-yellow-600">
              <a
                href="https://education.lego.com/en-us/lessons/spikeessential-amazing-amusement-park/spikeessential-snack-stand/"
                target="_blank"
              >
                <Play className="h-4 w-4 mr-2" />
                Deschide lecția oficială LEGO
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="menu" className="mt-10">
        <h2 className="text-xl font-bold mb-3">0. Povestea meniului și livrarea</h2>
        <ImageModal src="/assets/images/robotica/MeniuSnackStand.png" alt="Fișa meniu Snack Stand" />
        <p className="mt-4">Fiecare gustare este asociată unei culori:</p>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Roșu – Burger:</strong> motorul se rotește rapid</li>
          <li><strong>Verde – Salată:</strong> rotație lentă, protejează conținutul</li>
          <li><strong>Albastru – Desert:</strong> 2 rotații separate, cu pauză</li>
        </ul>
        <p className="mt-2">
          Se folosesc și variabile pentru a număra comenzile – un bun exercițiu de logică și matematică aplicată!
        </p>
      </section>

      <section id="step1" className="mt-10">
        <h2 className="text-xl font-bold mb-3">1. Livrarea burgerului (Roșu)</h2>
        <ImageModal src="/assets/images/robotica/snackstand2.png" alt="Livrare burger - viteză mare" />
        <p className="mt-2">
          Senzorul detectează culoarea roșie și pornește motorul la viteză maximă.
        </p>
      </section>

      <section id="step2" className="mt-10">
        <h2 className="text-xl font-bold mb-3">2. Livrarea salatei (Verde)</h2>
        <ImageModal src="/assets/images/robotica/snackstand3.png" alt="Livrare salată - viteză mică" />
        <p className="mt-2">
          Pentru verde, motorul se rotește mai lent pentru a evita deteriorarea conținutului.
        </p>
      </section>

      <section id="step3" className="mt-10">
        <h2 className="text-xl font-bold mb-3">3. Desertul în două etape (Albastru)</h2>
        <ImageModal src="/assets/images/robotica/snackstand4.png" alt="Desert - 2 pași" />
        <p className="mt-2">
          Motorul execută 2 rotații cu o pauză de 5 secunde între ele. Ideal pentru servirea porționată.
        </p>
      </section>

      <section id="challenge" className="mt-10">
        <h2 className="text-xl font-bold mb-3">4. Provocare extra</h2>
        <p>
          Adaugă un nou aliment (ex: pizza, suc, prăjitură), alege o culoare nouă și scrie logica pentru livrare.
        </p>
      </section>

      <section id="advanced" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Variantă avansată: cod cu IF</h2>
        <ImageModal src="/assets/images/robotica/snackstandcode.png" alt="Structură IF livrare pe culoare" />
        <p className="mt-2">
          Structura condițională detectează culoarea și declanșează acțiunea potrivită pentru motor.
        </p>
      </section>

      <section id="conclusion" className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h2 className="text-xl font-bold mb-3">Recapitulare și ce urmează</h2>
        <p className="mb-4 font-medium">
          Ai construit și programat un sistem de livrare automatizat cu LEGO Spike!
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Experimentează cu alte produse LEGO</li>
          <li>Schimbă viteza, sensul sau durata mișcărilor</li>
          <li>Folosește IF-uri pentru a adăuga produse noi</li>
        </ul>
        <div className="mt-4">
          <h3 className="font-semibold mb-2 flex items-center">
            <Forward className="h-4 w-4 mr-2" /> Ce urmează?
          </h3>
          <p className="mb-4">
            În lecția următoare vei învăța cum să creezi un sistem de selecție cu buton sau distanță.
          </p>
          <Button asChild variant="secondary">
            <Link to="/courses/lego-spike-essentials">Înapoi la meniu</Link>
          </Button>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Session5SnackStand;
