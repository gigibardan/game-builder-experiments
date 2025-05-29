import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { Button } from '@/components/ui/button';
import { Lightbulb, Rocket, Check, Play, Forward, Star, PlugZap, Sparkles } from 'lucide-react';
import ImageModal from '@/components/ImageModal';

const Session2FerrisWheel = () => {
  return (
    <LessonLayout
      title="Roata Panoramică - The Spinning Ferris Wheel"
      subtitle="Lecția 2 • LEGO SPIKE Essentials"
      courseId="lego-spike-essentials"
      sessionId="2"
      heroColor="bg-red-500"
      sidebarItems={[
        { id: 'intro', title: 'Povestea lecției', isActive: true },
        { id: 'learn', title: 'Ce vei învăța' },
        { id: 'start', title: 'Construcția roții' },
        { id: 'improve', title: 'Provocare de inginer LEGO' },
        { id: 'step1', title: 'Rotație simplă' },
        { id: 'step2', title: 'Semnalizare LED verde' },
        { id: 'step3', title: 'LED roșu + mișcare' },
        { id: 'step4', title: 'Automatizare completă' },
        { id: 'step5', title: 'Animație LED' },
        { id: 'conclusion', title: 'Recapitulare și ce urmează' },
      ]}
      resources={[
        { title: 'Lecția oficială LEGO', url: 'https://spike.legoeducation.com/essential/models/blt75300f4c272f0511' },
        { title: 'Lecția LEGO PDF', url: 'https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt0d2abaf129110763/5f572fa927a6ca5b5b1a6e45/U2L6.pdf?locale=en-us' },
      ]}
    >

      <section id="intro">
        <h2 className="text-2xl font-bold mb-4">Povestea lecției</h2>
        <p>Parcul de distracții TechMinds își deschide cea mai înaltă atracție: roata panoramică!</p>
        <p>Pentru siguranța pasagerilor LEGO, trebuie să implementăm semnale de culoare:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li><strong>Verde</strong> – urcare și coborâre</li>
            <li><strong>Roșu</strong> – roata este în mișcare</li>
        </ul>
        <p className="mt-2">Tu vei construi roata, vei programa LED-urile și vei controla motorul pentru o experiență sigură și realistă!</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <ImageModal
            src="/assets/images/robotica/ferriswheel7.png"
            alt="Display LED verde"
            />
            <ImageModal
            src="/assets/images/robotica/ferriswheel8.png"
            alt="Display LED roșu"
            />
            <ImageModal
            src="/assets/images/robotica/displayled.png"
            alt="Modul display LED"
            />
        </div>
        </section>

      <section id="learn" className="mt-10">
        <h2 className="text-xl font-bold mb-3 flex items-center">
          <Star className="h-5 w-5 mr-2 text-red-500" /> Ce vei învăța
        </h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Construcția unei roți panoramice simple</li>
          <li>Controlul mișcării cu motorul A</li>
          <li>Controlul afișajului LED</li>
          <li>Alternarea semnalelor roșu-verde</li>
          <li>Crearea unei secvențe automate</li>
        </ul>
      </section>

      <section id="start" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Construcția roții</h2>
        <p>Deschide lecția oficială din aplicația LEGO SPIKE și urmează pașii de construcție pentru roata panoramică.</p>
        <div className="mt-4">
          <ImageModal
            src="/assets/images/robotica/ferriswheel1.png"
            alt="Previzualizare Ferris Wheel"
          />
          <div className="mt-4">
            <Button asChild className="bg-red-500 hover:bg-red-600">
              <a href="https://spike.legoeducation.com/essential/models/blt75300f4c272f0511" target="_blank">
                <Play className="h-4 w-4 mr-2" />
                Deschide lecția oficială LEGO
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="improve" className="mt-10 bg-red-50 border border-red-100 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-2 flex items-center"><Sparkles className="h-4 w-4 mr-2" /> Provocare de inginer LEGO</h3>
        <p className="mb-2">Încearcă să îmbunătățești construcția:</p>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Adaugă mai multe locuri pentru pasageri</li>
          <li>Transformă roata într-un model inversat (axa orizontală)</li>
          <li>Testează rotația inversă</li>
          <li>Adaugă o scară LEGO sau covor rulant</li>
        </ul>
      </section>

      <section id="step1" className="mt-10">
        <h2 className="text-xl font-bold mb-3">1. Rotație simplă a roții</h2>
        <ImageModal src="/assets/images/robotica/ferriswheel2.png" alt="Rotație Ferris Wheel" />
        <h4 className="mt-4 font-semibold">Explicație:</h4>
        <p>Motorul pornește și rotește roata timp de 2 ture. Testăm funcționalitatea de bază a mișcării circulare.</p>
      </section>

      <section id="step2" className="mt-10">
        <h2 className="text-xl font-bold mb-3">2. Semnalizare LED verde</h2>
        <ImageModal src="/assets/images/robotica/ferriswheel3.png" alt="LED verde" />
        <h4 className="mt-4 font-semibold">Explicație:</h4>
        <p>LED-ul verde semnalizează urcarea pasagerilor. Motorul se oprește timp de 3 secunde.</p>
      </section>

      <section id="step3" className="mt-10">
        <h2 className="text-xl font-bold mb-3">3. LED roșu + mișcare</h2>
        <ImageModal src="/assets/images/robotica/ferriswheel4.png" alt="LED roșu + rotație" />
        <h4 className="mt-4 font-semibold">Explicație:</h4>
        <p>După LED-ul verde, se aprinde roșu și roata pornește din nou. Pasagerii trebuie să stea jos.</p>
      </section>

      <section id="step4" className="mt-10">
        <h2 className="text-xl font-bold mb-3">4. Automatizare completă</h2>
        <ImageModal src="/assets/images/robotica/ferriswheel5.png" alt="Buclă automată" />
        <h4 className="mt-4 font-semibold">Explicație:</h4>
        <p>Combini toate etapele într-o buclă infinită:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>LED verde + pauză</li>
          <li>LED roșu + rotație</li>
          <li>Repetare continuă</li>
        </ul>
      </section>

      <section id="step5" className="mt-10">
        <h2 className="text-xl font-bold mb-3">5. Activitate extra: Animație LED</h2>
        <ImageModal src="/assets/images/robotica/ferriswheel6.png" alt="LED animation" />
        <h4 className="mt-4 font-semibold">Explicație:</h4>
        <p>Folosim display-ul LED pentru a crea o animație de semafor:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Afișează matrice LED verde → așteaptă 0.5s</li>
          <li>Repetă 3 modele diferite</li>
          <li>Finalizează cu roșu + pornește motorul</li>
        </ul>

        <div className="mt-4 bg-orange-50 border-l-4 border-orange-400 p-4 text-sm">
          <strong>Sfat creativ:</strong> Înlocuiește imaginile LED cu desene proprii – inimioare, stele, săgeți!
        </div>
      </section>

      <section id="conclusion" className="mt-10 bg-red-50 p-6 rounded-lg border border-red-200">
        <h2 className="text-xl font-bold mb-3">Recapitulare și ce urmează</h2>
        <p className="mb-4 font-medium">Ai creat o roată panoramică funcțională cu semnalizare LED – bravo!</p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Experimentează cu durate și viteze diferite</li>
          <li>Adaugă sunete sau animații speciale</li>
          <li>Testează ce se întâmplă dacă schimbi ordinea pașilor</li>
        </ul>
        <div className="mt-4">
          <h3 className="font-semibold mb-2 flex items-center">
            <Forward className="h-4 w-4 mr-2" /> Ce urmează?
          </h3>
          <p className="mb-4">
            În lecția următoare ne ocupăm de <strong>„Snack Stand”</strong> – un stand automat care livrează gustări pe baza biletelor colorate!
          </p>
          <Button asChild variant="secondary">
            <Link to="/courses/lego-spike-essentials">Înapoi la meniu</Link>
          </Button>
        </div>
      </section>

    </LessonLayout>
  );
};

export default Session2FerrisWheel;
