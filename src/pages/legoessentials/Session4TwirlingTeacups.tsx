import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { Button } from '@/components/ui/button';
import { Lightbulb, Rocket, Check, Play, Forward, Star, PlugZap, Sparkles, Users } from 'lucide-react';
import ImageModal from '@/components/ImageModal';

const Session4TwirlingTeacups = () => {
  return (
    <LessonLayout
      title="Twirling Teacups – Caruselul Ceștilor Învârtitoare"
      subtitle="Lecția 4 • LEGO SPIKE Essentials"
      courseId="lego-spike-essentials"
      sessionId="4"
      heroColor="bg-purple-500"
      sidebarItems={[
        { id: 'intro', title: 'Povestea lecției', isActive: true },
        { id: 'learn', title: 'Ce vei învăța' },
        { id: 'build', title: 'Construcția caruselului' },
        { id: 'motion', title: 'Mișcare dublă' },
        { id: 'motor1', title: 'Motorul bazei' },
        { id: 'motor2', title: 'Motorul ceștilor' },
        { id: 'sync', title: 'Sincronizare & testare' },
        { id: 'collab', title: 'Colaborare & decorare' },
        { id: 'conclusion', title: 'Recapitulare și ce urmează' },
      ]}
      resources={[
        { title: 'Lecția oficială LEGO', url: 'https://spike.legoeducation.com/essential/models/blt570d70185fdb89d5' }
      ]}
    >

      <section id="intro">
        <h2 className="text-2xl font-bold mb-4">Povestea lecției</h2>
        <p>Astăzi începem o nouă provocare: fiecare echipă va construi propriul carusel cu cești rotitoare – „Twirling Teacups”.</p>
        <p>Scopul este ca la finalul lecției să conectați toate caruselele colegilor într-un <strong>parc LEGO real</strong>!</p>
        <p className="mt-2">Colaborarea, sincronizarea motoarelor și decorul fac parte din această aventură robotică!</p>

        <div className="mt-6">
          <ImageModal src="/assets/images/robotica/teacups1.webp" alt="Previzualizare Twirling Teacups" />
        </div>
      </section>

      <section id="learn" className="mt-10">
        <h2 className="text-xl font-bold mb-3 flex items-center">
          <Star className="h-5 w-5 mr-2 text-purple-500" /> Ce vei învăța
        </h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Cum să controlezi două motoare simultan</li>
          <li>Cum să creezi mișcări circulare combinate</li>
          <li>Cum să colaborezi cu colegii într-o construcție comună</li>
          <li>Cum să decorezi un parc tematic LEGO</li>
        </ul>
      </section>

      <section id="build" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Construcția caruselului</h2>
        <p>Urmează instrucțiunile din aplicația LEGO pentru a construi caruselul cu cești rotitoare.</p>
        <div className="mt-4">
          <ImageModal src="/assets/images/robotica/teacups2.png" alt="Caruselul în construcție" />
          <div className="mt-4">
            <Button asChild className="bg-purple-500 hover:bg-purple-600">
              <a href="https://spike.legoeducation.com/essential/models/blt570d70185fdb89d5" target="_blank">
                <Play className="h-4 w-4 mr-2" />
                Deschide lecția oficială LEGO
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="motion" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Mișcare dublă și logică reală</h2>
        <p>Acest carusel este special: are două motoare care lucrează împreună.</p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li><strong>Motorul 1</strong>: rotește întreaga platformă</li>
          <li><strong>Motorul 2</strong>: rotește fiecare ceașcă în interior</li>
        </ul>
        <ImageModal src="/assets/images/robotica/teacups3.png" alt="Structura mișcării combinate" className="mt-4" />
      </section>

      <section id="motor1" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Controlul motorului bazei</h2>
        <p>Începem prin a seta viteza și direcția motorului A (baza caruselului).</p>
        <ImageModal src="/assets/images/robotica/teacups4.png" alt="Programare motor bază" className="mt-4" />
      </section>

      <section id="motor2" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Controlul ceștilor rotitoare</h2>
        <p>Adăugăm comenzi pentru motorul B – fiecare ceașcă se învârte în interiorul caruselului.</p>
        <ImageModal src="/assets/images/robotica/teacups5.png" alt="Programare motor cești" className="mt-4" />
      </section>

      <section id="messages" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Control paralel cu mesaje</h2>
        <p className="mb-4">
            Pentru a rula acțiuni în paralel (ex: pornirea muzicii în timp ce motoarele se rotesc), folosim <strong>blocuri de mesaje</strong>.
        </p>
        <p className="mb-4">
            Atunci când un bloc <strong>Send Message</strong> (plic închis) este declanșat, blocul <strong>Received Message</strong> (plic deschis) cu aceeași culoare pornește o acțiune separată.
        </p>
        <ImageModal
            src="/assets/images/robotica/teacups7.svg"
            alt="Blocuri mesaj și paralelism"
            className="mt-4"
        />
        <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm">
            <strong>Tips pentru codare:</strong> În această lecție, elevii vor folosi mesaje pentru a porni sunete, mișcare sau LED-uri în paralel cu motoarele. După prima provocare, ei vor primi și <strong>blocuri de inspirație</strong> pentru a-și modifica programele și a testa idei proprii.
        </div>
        </section>

      <section id="collab" className="mt-10 bg-purple-50 border border-purple-100 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-2 flex items-center"><Users className="h-5 w-5 mr-2" /> Activitate colaborativă & decorare</h3>
        <p className="mb-2">La final, oferim 10 minute pentru:</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Conectarea caruselelor colegilor într-un parc comun</li>
          <li>Decorarea zonei cu flori, semne, panouri, garduri LEGO</li>
          <li>Testarea parcului complet cu toți pasagerii LEGO</li>
        </ul>
        <ImageModal src="/assets/images/robotica/teacups6.jpg" alt="Parc LEGO decorat în echipă" className="mt-4" />
      </section>

      <section id="conclusion" className="mt-10 bg-purple-50 p-6 rounded-lg border border-purple-200">
        <h2 className="text-xl font-bold mb-3">Recapitulare și ce urmează</h2>
        <p className="mb-4 font-medium">Ai creat un carusel complex cu 2 motoare și ai lucrat în echipă – excelent!</p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Ai învățat despre mișcare simultană și logică combinată</li>
          <li>Ai lucrat colaborativ pentru un parc LEGO complet</li>
          <li>Ai pus creativitatea în mișcare prin decor și testare</li>
        </ul>
        <div className="mt-4">
          <h3 className="font-semibold mb-2 flex items-center">
            <Forward className="h-4 w-4 mr-2" /> Ce urmează?
          </h3>
          <p className="mb-4">
            În lecția următoare vom construi <strong>„Snack Stand”</strong> – un automat LEGO care livrează gustări pe baza culorilor!
          </p>
          <Button asChild variant="secondary">
            <Link to="/courses/lego-spike-essentials">Înapoi la meniu</Link>
          </Button>
        </div>
      </section>

    </LessonLayout>
  );
};

export default Session4TwirlingTeacups;
