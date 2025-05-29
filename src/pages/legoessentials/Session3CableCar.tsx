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
      heroColor="bg-yellow-600"
      sidebarItems={[
        { id: 'intro', title: 'Povestea lecției', isActive: true },
        { id: 'learn', title: 'Ce vei învăța' },
        { id: 'start', title: 'Construcția telecabinei' },
        { id: 'step1', title: 'Programare: LED verde + pauză' },
        { id: 'step2', title: 'Motor dus + LED roșu' },
        { id: 'step3', title: 'Pauză și întoarcere' },
        { id: 'step4', title: 'Buclă completă' },
        { id: 'creativ', title: 'Activitate creativă' },
        { id: 'bonus', title: 'Provocare bonus' },
        { id: 'conclusion', title: 'Recapitulare și observații' },
      ]}
      resources={[
        { title: 'Model oficial LEGO Cable Car', url: 'https://spike.legoeducation.com/essential/models/blt123456789' }
      ]}
    >

      <section id="intro">
        <h2 className="text-2xl font-bold mb-4">Povestea lecției</h2>
        <p>Țineți minte roata cu semafoare? Astăzi, pasagerii LEGO pornesc într-o nouă aventură – o <strong>telecabină</strong> care îi duce spre cabana din vârf!</p>
        <p>Elevii vor construi un mecanism care simulează o telecabină pe sfoară și vor învăța cum să controleze logic mișcarea și semnalele vizuale.</p>
      </section>

      <section id="learn" className="mt-10">
        <h2 className="text-xl font-bold mb-3 flex items-center">
          <Star className="h-5 w-5 mr-2 text-yellow-600" /> Ce vei învăța
        </h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Controlul direcției de rotație a motorului (dus/întors)</li>
          <li>Folosirea LED-ului colorat pentru semnalizare</li>
          <li>Folosirea pauzelor între acțiuni</li>
          <li>Crearea unei secvențe automate cu sens logic</li>
          <li>Testarea și ajustarea prototipurilor inginerești</li>
        </ul>
      </section>

      <section id="start" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Construcția telecabinei</h2>
        <p>Folosește setul LEGO SPIKE Essentials și o axă sau sfoară întinsă. Creează o telecabină simplă care se poate deplasa între două „stații”.</p>
        <p>Elevii pot urma un model oficial sau își pot imagina propriul design, cu scopul de a simula o mișcare de tip dus-întors.</p>
      </section>

      <section id="step1" className="mt-10">
        <h2 className="text-xl font-bold mb-3">1. LED verde + pauză</h2>
        <p>La începutul programului, LED-ul se aprinde verde pentru a indica stație liberă. Telecabina așteaptă 3 secunde pentru urcare.</p>
      </section>

      <section id="step2" className="mt-10">
        <h2 className="text-xl font-bold mb-3">2. LED roșu + plecare</h2>
        <p>LED-ul se schimbă în roșu, iar motorul pornește 2 ture într-o direcție – simulând plecarea spre cabană. Pasagerii trebuie să stea jos!</p>
      </section>

      <section id="step3" className="mt-10">
        <h2 className="text-xl font-bold mb-3">3. Pauză și întoarcere</h2>
        <p>După sosirea la cabană, telecabina face o pauză de 2 secunde. Apoi motorul inversează direcția și se întoarce la stația de plecare.</p>
      </section>

      <section id="step4" className="mt-10">
        <h2 className="text-xl font-bold mb-3">4. Buclă completă</h2>
        <p>Toate etapele de mai sus sunt introduse într-o buclă infinită:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>LED verde + pauză 3s</li>
          <li>LED roșu + motor dus</li>
          <li>Pauză 2s</li>
          <li>LED verde + pauză 3s</li>
          <li>LED roșu + motor întors</li>
        </ul>
      </section>

      <section id="creativ" className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-lg font-bold mb-2 flex items-center"><Sparkles className="h-4 w-4 mr-2" /> Activitate creativă</h3>
        <p className="mb-2">Decorează stațiile cu LEGO și inventează o poveste:</p>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Unde merge telecabina?</li>
          <li>Cine urcă și de ce?</li>
          <li>Ce se întâmplă în cabană?</li>
        </ul>
      </section>

      <section id="bonus" className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-bold mb-2 flex items-center"><Lightbulb className="h-4 w-4 mr-2" /> Provocare bonus</h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Înlocuiește LED-ul roșu cu o <strong>animație pe display</strong> (ex: un „X” sau o săgeată)</li>
          <li>Simulează un mod VIP: telecabina pleacă doar când <strong>apasă un buton</strong> pe hub</li>
        </ul>
      </section>

      <section id="conclusion" className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h2 className="text-xl font-bold mb-3">Recapitulare și observații</h2>
        <p className="mb-4 font-medium">Ai construit și programat o telecabină completă – cu semnalizare, logică și mișcare direcționată!</p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Ai folosit LED-urile ca semnale vizuale clare</li>
          <li>Ai înțeles direcția motorului și cum o controlezi</li>
          <li>Ai aplicat conceptele din lecția trecută într-un context nou</li>
        </ul>
        <div className="mt-4">
          <h3 className="font-semibold mb-2 flex items-center">
            <Forward className="h-4 w-4 mr-2" /> Ce urmează?
          </h3>
          <p className="mb-4">
            În lecția următoare vom construi un „Snack Stand” – un sistem automatizat care livrează gustări pe baza biletelor colorate!
          </p>
          <Button asChild variant="secondary">
            <Link to="/courses/lego-spike-essentials">Înapoi la meniu</Link>
          </Button>
        </div>
      </section>

    </LessonLayout>
  );
};

export default Session3CableCar;
