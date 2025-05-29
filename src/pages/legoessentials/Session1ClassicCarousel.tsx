import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { Button } from '@/components/ui/button';
import { Lightbulb, Rocket, Check, Play, Forward, Star, PlugZap } from 'lucide-react';
import ImageModal from '@/components/ImageModal';


const Session1ClassicCarousel = () => {
  return (
    <LessonLayout
      title="Caruselul Clasic - Classic Carousel"
      subtitle="Lecția 1 • LEGO SPIKE Essentials"
      courseId="lego-spike-essentials"
      sessionId="1"
      heroColor="bg-orange-500"
      sidebarItems={[
        { id: 'intro', title: 'Introducere', isActive: true },
        { id: 'learn', title: 'Ce vei învăța' },
        { id: 'start', title: 'Construcția caruselului' },
        { id: 'step1', title: 'Programare: 3 rotații' },
        { id: 'step2', title: 'Programare: Mișcare continuă' },
        { id: 'step3', title: 'Programare: Cu oprire între ture' },
        { id: 'conclusion', title: 'Recapitulare și pasul următor' },
      ]}
      resources={[
        { title: 'Lecția oficială LEGO', url: 'https://spike.legoeducation.com/essential/models/bltf68215f21ac17e87' },
        { title: 'Lecția LEGO PDF', url: 'https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt27cf3aba3ebccf38/5f572f6c4b239959f43aa72a/U2L2.pdf?locale=en-us'}
      ]}
    >
      <section id="intro">
        <h2 className="text-2xl font-bold mb-4">Introducere</h2>
        <p className="mb-4">Aceasta este <strong>prima ta lecție</strong> în universul fascinant al <strong>roboticii educaționale</strong> și al <strong>seturilor LEGO SPIKE Essentials</strong>. Este un moment special care marchează începutul unei aventuri creative și tehnice în lumea roboților.</p>
        <p className="mb-4">Într-un parc de distracții vechi, caruselul clasic este pe cale să fie redeschis. Tu ești angajat ca inginer LEGO pentru a-l reconstrui și a-l face să funcționeze perfect.</p>
        <p>Este prima lecție din seria „Amazing Amusement Park” și te va ajuta să înveți elemente de bază din construcția robotică și programare.</p>
      </section>

      <section id="learn" className="mt-10">
        <h2 className="text-xl font-bold mb-3 flex items-center">
          <Star className="h-5 w-5 mr-2 text-orange-500" /> Ce vei învăța
        </h2>
        <p className="mb-4">Fiind primul tău pas în robotică, această lecție este gândită să fie ușor de înțeles, interactivă și captivantă. Vei construi, vei programa și vei înțelege cum gândesc roboții.</p>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Cum să construiești un carusel LEGO simplu</li>
          <li>Cum să conectezi motorul și să îl controlezi</li>
          <li>Cum să pornești și să oprești mișcarea</li>
          <li>Cum să folosești viteze și durate diferite</li>
          <li>Cum să personalizezi caruselul cu personaje și decorațiuni</li>
        </ul>
      </section>

      <section id="setuphub" className="mt-10">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <PlugZap className="h-5 w-5 text-orange-500 mr-2" /> Conectarea Hub-ului LEGO
      </h2>
      <p className="mb-4">
        Pentru ca roboțelul tău să prindă viață, trebuie mai întâi să conectezi hub-ul LEGO SPIKE Essentials la dispozitivul tău. Ai două opțiuni:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <ImageModal
            src="/assets/images/robotica/classiccarusel6.png"
            alt="Conectare USB la Hub"
          />
          <p className="text-sm mt-2 font-semibold">🔌 Conectare cu cablu USB</p>
          <ul className="text-sm list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Conectează cablul USB între Hub și laptop/calculator.</li>
            <li>Ține apăsat butonul de pe Hub până se aprinde.</li>
            <li>Aplicația va detecta automat dispozitivul.</li>
          </ul>
        </div>

        <div>
          <ImageModal
            src="/assets/images/robotica/classiccarusel5.png"
            alt="Pornirea Hub-ului pentru Bluetooth"
          />
          <p className="text-sm mt-2 font-semibold">📶 Conectare prin Bluetooth</p>
          <ul className="text-sm list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Asigură-te că Hub-ul este încărcat.</li>
            <li>Ține apăsat butonul mare până LED-ul clipește în alb.</li>
            <li>În aplicație, selectează „Conectare Bluetooth”.</li>
            <li>Urmează instrucțiunile pentru a asocia dispozitivul.</li>
          </ul>
        </div>
      </div>

      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 text-sm text-gray-700">
        <strong>Sfat:</strong> Dacă Hub-ul nu este detectat, încearcă ambele metode și asigură-te că ai închis alte aplicații LEGO deschise anterior.
      </div>
    </section>


      <section id="start" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Construcția caruselului</h2>
        <p>Ai nevoie de setul LEGO Spike Essentials și aplicația LEGO Education instalată.</p>
        <p>Urmează pașii de construcție din aplicație, apoi revino aici pentru programare și idei creative!</p>
        <div className="mt-4">
          <ImageModal
            src="/assets/images/robotica/clasiccarusel1.png"
            alt="Previzualizare Classic Carousel"
          />
          <div className="mt-4">
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <a href="https://spike.legoeducation.com/essential/models/bltf68215f21ac17e87" target="_blank">
                <Play className="h-4 w-4 mr-2" />
                Deschide lecția oficială LEGO
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="step1" className="mt-10">
        <h2 className="text-xl font-bold mb-3">1. Programare: 3 rotații</h2>
        <ImageModal
          src="/assets/images/robotica/clasiccarusel2.png"
          alt="Carusel 3 rotații"
        />
        <h4 className="mt-4 font-semibold">Explicație:</h4>
        <p className="mt-2">Acest program rotește motorul de 3 ori cu viteză de 75%, apoi se oprește automat. Este perfect pentru o primă testare.</p>
      </section>

      <section id="step2" className="mt-10">
        <h2 className="text-xl font-bold mb-3">2. Programare: Mișcare continuă</h2>
        <ImageModal
          src="/assets/images/robotica/clasiccarusel3.png"
          alt="Carusel continuu"
        />
        <h4 className="mt-4 font-semibold">Explicație:</h4>
        <p className="mt-2">În această versiune, motorul se rotește într-o buclă infinită. Caruselul nu se va opri până când programul nu este oprit manual.</p>
      </section>

      <section id="step3" className="mt-10">
        <h2 className="text-xl font-bold mb-3">3. Programare: Cu oprire între ture</h2>
        <ImageModal
          src="/assets/images/robotica/clasiccarusel4.png"
          alt="Carusel cu pauză"
        />
        <h4 className="mt-4 font-semibold">Explicație:</h4>
        <p className="mt-2">Acest program rotește caruselul timp de 2 ture, se oprește 2 secunde, apoi repetă comportamentul. Este o simulare realistă a pauzelor dintre curse.</p>
      </section>

      <section id="codscris" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">4. Versiunea cu cod scris (blocuri avansate)</h2>
        <p className="mb-4">
          Pentru elevii mai avansați sau cei curioși să exploreze comportamente ciclice și simetrice, această versiune adaugă o rotație alternativă în sens invers, simulând o mișcare de tip „du-te-vino”.
        </p>

        <div className="mb-6">
          <ImageModal
            src="/assets/images/robotica/classiccarusel7.png"
            alt="Cod scris cu mișcare alternativă"
            className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          />
        </div>

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h4 className="font-bold mb-2">Cum funcționează:</h4>
          <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
            <li>Se setează viteza motorului A la 75% de la începutul programului.</li>
            <li>Într-o buclă infinită, motorul se rotește 2 ture înainte, așteaptă 2 secunde, apoi 2 ture înapoi.</li>
            <li>Acest ciclu continuu creează o mișcare oscilatorie, excelentă pentru a exersa simetria și temporizarea.</li>
          </ul>
        </div>

        <div className="mt-4 text-sm text-orange-700">
          <strong>Provocare bonus:</strong> Modifică valorile de viteză și durată pentru a crea un carusel „dansator” cu ritm personalizat!
        </div>
      </section>


      <section id="conclusion" className="mt-10 bg-orange-50 p-6 rounded-lg border border-orange-200">
        <h2 className="text-xl font-bold mb-3">Recapitulare și pasul următor</h2>
        <p className="mb-4 font-medium">Ai învățat cum să construiești și să programezi un carusel LEGO complet funcțional. Bravo! Iată câteva idei pentru a continua:</p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Încearcă viteze și durate noi pentru o experiență variată</li>
          <li>Adaugă două scaune în plus pentru a transporta mai mulți pasageri LEGO</li>
          <li>Stabilește o bază mai solidă cu piese late pentru o rotație mai stabilă</li>
        </ul>
        <div className="mt-4">
          <h3 className="font-semibold mb-2 flex items-center">
            <Forward className="h-4 w-4 mr-2" /> Ce urmează?
          </h3>
          <p className="mb-4">
            În lecția următoare vom construi <strong>„Ferris Wheel”</strong> – o roată panoramică ce introduce componente avansate LEGO precum <strong>display-ul color</strong> și <strong>animații programate</strong>.
          </p>
          <Button asChild variant="secondary">
            <Link to="/courses/lego-spike-essentials">Înapoi la meniu</Link>
          </Button>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Session1ClassicCarousel;