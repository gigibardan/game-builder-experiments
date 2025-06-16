import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { Button } from '@/components/ui/button';
import { Lightbulb, Rocket, Check, Play, Forward, Star, PlugZap, Sparkles } from 'lucide-react';
import ImageModal from '@/components/ImageModal';

const Session6HoveringHelicopter = () => {
  return (
    <LessonLayout
      title="Elicopterul Planor – Hovering Helicopter"
      subtitle="Lecția 6 • LEGO SPIKE Essentials"
      courseId="lego-spike-essentials"
      sessionId="6"
      heroColor="bg-yellow-500"
      sidebarItems={[
        { id: 'intro', title: 'Povestea lecției', isActive: true },
        { id: 'learn', title: 'Ce vei învăța' },
        { id: 'start', title: 'Construirea elicopterului' },
        { id: 'step1', title: 'Pornire cu senzor de culoare' },
        { id: 'step2', title: 'Accelerare la înclinare' },
        { id: 'improve', title: 'Provocare creativă' },
        { id: 'conclusion', title: 'Recapitulare și ce urmează' },
      ]}
      resources={[
        { title: 'Lecția oficială LEGO', url: 'https://spike.legoeducation.com/essential/models/blt2294907f87d63029' },
      ]}
    >

      <section id="intro">
        <h2 className="text-2xl font-bold mb-4">Povestea lecției</h2>
        <p>Parcul de distracții TechMinds tocmai a primit o misiune specială: un elicopter trebuie să livreze provizii și să transporte personaje LEGO între atracțiile din parc.</p> 
        <p className="mt-2">În această lecție, vei construi un elicopter LEGO care poate zbura pe loc și accelera la înclinare, folosind un senzor de culoare.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <ImageModal src="/assets/images/robotica/helicopter.webp" alt="Elicopter LEGO în zbor planor" />
          <ImageModal src="/assets/images/robotica/helicopter2.webp" alt="Elice acționată de motor" />
          <ImageModal src="/assets/images/robotica/senzorculoare.jpg" alt="Senzor de culoare activând zborul" />
        </div>
      </section>

      <section id="learn" className="mt-10">
        <h2 className="text-xl font-bold mb-3 flex items-center">
          <Star className="h-5 w-5 mr-2 text-yellow-500" /> Ce vei învăța
        </h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Construirea unui elicopter LEGO cu elice funcțională</li>
          <li>Controlul motorului pentru zbor pe loc (hover)</li>
          <li>Utilizarea senzorului de culoare pentru pornire</li>
          <li>Simularea accelerării prin înclinare</li>
          <li>Crearea unui program cu blocuri paralele și declanșatori</li>
        </ul>
      </section>

      <section id="step1" className="mt-10">
        <h2 className="text-xl font-bold mb-3">1. Pornirea elicopterului cu senzorul de culoare</h2>

         <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm mb-4">
            <strong>Notă pentru facilitator:</strong> în lecția oficială LEGO, senzorul de culoare nu este inclus. Îl folosim aici opțional, pentru a crește complexitatea și a exersa programarea pe declanșatori vizuali. Profesorii pot decide dacă includ această funcționalitate.
        </div>

        <ImageModal src="/assets/images/robotica/helicopter3.png" alt="Pornire elicopter cu senzor de culoare" />
        <h4 className="mt-4 font-semibold">Explicație:</h4>
        <p>Folosim senzorul de culoare pentru a detecta <strong>culoarea verde</strong> – semnalul că elicopterul este pregătit de zbor. La detectarea culorii:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Volumul sunetului este setat la 50%</li>
            <li>Motorul A pornește cu viteză de 50%</li>
            <li>Se transmite mesajul <code>PornireMotor</code> către sistemul de sunet</li>
        </ul>
        </section>

        <section id="step2" className="mt-10">
        <h2 className="text-xl font-bold mb-3">2. Sunet continuu de elicopter</h2>
        <ImageModal src="/assets/images/robotica/helicopter4.png" alt="Sunet continuu elicopter" />
        <h4 className="mt-4 font-semibold">Explicație:</h4>
        <p>La primirea mesajului <code>PornireMotor</code>, hub-ul rulează continuu efectul sonor „Helicopter” pentru a crea o atmosferă realistă de zbor.</p>
        </section>

        <section id="step3" className="mt-10">
        <h2 className="text-xl font-bold mb-3">3. Accelerare la înclinare („Tilt”)</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <ImageModal src="/assets/images/robotica/helicopter5.png" alt="Tilt - declanșare" />
            <ImageModal src="/assets/images/robotica/helicopter6.png" alt="Tilt - accelerare și efecte" />
        </div>

        <h4 className="mt-4 font-semibold">Explicație:</h4>
        <p>Când hub-ul este înclinat, trimite mesajul <code>GO</code>. La primirea acestui mesaj:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Motorul A este oprit pentru o resetare a vitezei</li>
            <li>Viteza este modificată la 100%</li>
            <li>Motorul repornește la viteză maximă</li>
            <li>Se rulează o animație sonoră cu 5 pași: modificări de <code>pitch</code> și <code>volum</code>, simulând un zbor din ce în ce mai intens</li>
        </ul>
        <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm">
            <strong>Notă importantă:</strong> viteza nu poate fi modificată direct în timpul funcționării – de aceea motorul este <em>oprit și repornit</em>.
        </div>
        </section>



      <section id="improve" className="mt-10 bg-yellow-50 border border-yellow-100 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-2 flex items-center"><Sparkles className="h-4 w-4 mr-2" /> Provocare creativă</h3>
        <p className="mb-2">Adaugă elemente noi pentru a face elicopterul mai realist:</p>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Folosește sunete pentru lansare</li>
          <li>Construiește o platformă de aterizare decorativă</li>
        </ul>
      </section>

      <section id="gallery" className="mt-12">
        <h2 className="text-xl font-bold mb-4">Galerie: Elicoptere construite în clasă</h2>
        <p className="mb-4">Iată câteva dintre proiectele realizate de elevi în cadrul lecției. Fiecare echipă a adăugat elemente creative proprii!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <ImageModal src="/assets/images/robotica/helicopter7.jpg" alt="Elicopter construit de echipa 1" />
            <ImageModal src="/assets/images/robotica/helicopter8.jpg" alt="Elicopter construit de echipa 2" />
            <ImageModal src="/assets/images/robotica/helicopter9.jpg" alt="Elicopter construit de echipa 3" />
        </div>
        </section>


      <section id="conclusion" className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h2 className="text-xl font-bold mb-3">Recapitulare și ce urmează</h2>
        <p className="mb-4 font-medium">Ai construit un elicopter care poate zbura pe loc și accelera la înclinare – foarte bine!</p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Explorează noi metode de pornire: buton, sunet, atingere</li>
            <li>Experimentează cu viteze și durate</li>
            <li>Adaugă personaje LEGO în cabina elicopterului</li>
        </ul>
        <div className="mt-4">
            <h3 className="font-semibold mb-2 flex items-center">
            <Forward className="h-4 w-4 mr-2" /> Ce urmează?
            </h3>
            <p className="mb-4">
            În lecția următoare vom construi <strong>„Taxi”</strong> – primul nostru autovehicul LEGO, care va simula deplasarea pe un traseu și va introduce concepte de direcție și oprire la semnal.
            </p>
            <Button asChild variant="secondary">
            <Link to="/courses/lego-spike-essentials">Înapoi la meniu</Link>
            </Button>
        </div>
        </section>


    </LessonLayout>
  );
};

export default Session6HoveringHelicopter;
