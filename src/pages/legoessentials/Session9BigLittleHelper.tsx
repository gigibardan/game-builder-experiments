import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { Button } from '@/components/ui/button';
import { Lightbulb, Rocket, Check, Play, Forward, Star, PlugZap, Sparkles } from 'lucide-react';
import ImageModal from '@/components/ImageModal';

const Session9BigLittleHelper = () => {
  return (
    <LessonLayout
      title="Big Little Helper – Robotul-ghid personal"
      subtitle="Lecția 9 • LEGO SPIKE Essentials"
      courseId="lego-spike-essentials"
      sessionId="9"
      heroColor="bg-amber-600"
      sidebarItems={[
        { id: 'intro', title: 'Povestea lecției', isActive: true },
        { id: 'learn', title: 'Ce vei învăța' },
        { id: 'start', title: 'Construcția robotului' },
        { id: 'movement', title: 'Activarea extensiei Movement' },
        { id: 'step1', title: 'Setează viteza' },
        { id: 'step2', title: 'Deplasare înainte' },
        { id: 'step3', title: 'Viraj dreapta' },
        { id: 'step4', title: 'Traseu complet' },
        { id: 'step5', title: 'Provocare: Braț colector' },
        { id: 'code', title: 'Variantă cu blocuri scrise' },
        { id: 'conclusion', title: 'Recapitulare și ce urmează' },
      ]}
      resources={[
        { title: 'Lecția oficială LEGO', url: 'https://spike.legoeducation.com/essential/models/blt216777ff81279a8a' }
      ]}
    >

      <section id="intro">
        <h2 className="text-2xl font-bold mb-4">Povestea lecției</h2>
        <p>Ne aflăm într-un viitor apropiat, într-un parc de distracții în care copiii învață cum roboții pot deveni parte din viața noastră de zi cu zi.</p>
        <p>Imaginează-ți că peste 50 de ani fiecare copil are un robot personal care îl conduce acasă, îi poartă ghiozdanul, îl protejează în trafic sau îi aduce cumpărăturile. Astăzi, tu vei construi un astfel de <strong>robot-ghid</strong>.</p>
        <p>Vei crea un traseu logic, îl vei programa pas cu pas și vei adăuga o provocare inginerească opțională: un braț care adună mingi de pe drum.</p>
      </section>

      <section id="learn" className="mt-10">
        <h2 className="text-xl font-bold mb-3 flex items-center">
          <Star className="h-5 w-5 mr-2 text-amber-600" /> Ce vei învăța
        </h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Să construiești un robot simplu pe roți</li>
          <li>Să setezi viteza motorului și să controlezi mișcarea</li>
          <li>Să creezi un traseu logic (față, rotiri, stop)</li>
          <li>Să testezi secvența de mișcare și să o ajustezi</li>
          <li>Să adaugi o extensie creativă cu braț colector</li>
        </ul>
      </section>

      <section id="start" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Construcția robotului</h2>
        <p>Urmează instrucțiunile din aplicația LEGO SPIKE pentru a construi robotul Big Little Helper. Este o construcție pe două roți, cu un corp central pentru echilibru.</p>
        <div className="mt-4">
          <ImageModal src="/assets/images/robotica/littlebighelper2.png" alt="Previzualizare Big Little Helper" />
          <div className="mt-4">
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <a href="https://spike.legoeducation.com/essential/models/blt216777ff81279a8a" target="_blank">
                <Play className="h-4 w-4 mr-2" />
                Deschide lecția oficială LEGO
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-10 bg-gradient-to-r from-yellow-100 to-yellow-50 border-l-4 border-amber-400 p-6 rounded-lg">
        <div className="flex flex-col sm:flex-row items-center gap-4">
            <ImageModal
            src="/assets/images/robotica/littlebighelper1.png"
            alt="Big Little Helper în acțiune"
            />
            <div>
            <h3 className="text-xl font-bold mb-2 flex items-center">
                <Star className="h-5 w-5 mr-2 text-amber-600" /> Imaginea vedetă a lecției
            </h3>
            </div>
        </div>
        </section>


      <section id="movement" className="mt-10 bg-yellow-50 p-6 border border-yellow-200 rounded-lg">
        <h2 className="text-xl font-bold mb-3">Activarea extensiei Movement</h2>
        <p>Aplicația Spike are nevoie de extensia <strong>Movement</strong> pentru a putea controla direcția și rotațiile.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <ImageModal src="/assets/images/robotica/taxi4.png" alt="Buton show extensions" />
          <ImageModal src="/assets/images/robotica/taxi5.png" alt="Selectează Movement" />
        </div>
      </section>

      <section id="step1" className="mt-10">
        <h2 className="text-xl font-bold mb-3">1. Setează viteza robotului</h2>
        <ImageModal src="/assets/images/robotica/littlebighelper4.png" alt="Setare viteză robot" />
        <p className="mt-2">Alege viteza cu care se va deplasa robotul pe parcursul întregului traseu. Nu pornește încă, dar este pregătit.</p>
      </section>

      <section id="step2" className="mt-10">
        <h2 className="text-xl font-bold mb-3">2. Deplasare înainte</h2>
        <ImageModal src="/assets/images/robotica/littlebighelper5.png" alt="Deplasare în față" />
        <p className="mt-2">Acest bloc pornește motorul pentru a duce robotul înainte o rotație – o distanță ideală pentru primele teste.</p>
      </section>

      <section id="step3" className="mt-10">
        <h2 className="text-xl font-bold mb-3">3. Viraj dreapta</h2>
        <ImageModal src="/assets/images/robotica/littlebighelper6.png" alt="Viraj dreapta" />
        <p className="mt-2">Pentru a ocoli obstacole, adăugăm o rotire spre dreapta la sfârșitul fiecărei secțiuni de drum drept.</p>
      </section>

      <section id="step4" className="mt-10">
        <h2 className="text-xl font-bold mb-3">4. Traseul complet</h2>
        <ImageModal src="/assets/images/robotica/littlebighelper7.png" alt="Traseu final robot" />
        <p className="mt-2">Secvența completă combină mișcări înainte, rotiri și opriri. Robotul ajunge cu succes la destinație!</p>
      </section>

      <section id="step5" className="mt-10">
        <h2 className="text-xl font-bold mb-3">5. Provocare: Braț colector</h2>
        <ImageModal src="/assets/images/robotica/littlebighelper8.png" alt="Braț robot pentru mingi" />
        <p className="mt-2">Creează o extensie care să colecteze mingi roșii de pe drum. Poți folosi un motor suplimentar sau un sistem pasiv cu gheară.</p>
      </section>

      <section id="code" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Variantă cu blocuri scrise</h2>
        <ImageModal src="/assets/images/robotica/littlebighelpercode.png" alt="Cod scris robot" />
        <p className="mt-2">Dacă ești familiarizat cu blocurile textuale, poți scrie programul complet în modul avansat.</p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Viteză 50%</li>
          <li>Merge înainte 1 rotație</li>
          <li>Rotire dreapta</li>
          <li>Merge 3 rotații, apoi încă 10 după o altă rotire</li>
          <li>Se oprește</li>
        </ul>
      </section>

      <section id="conclusion" className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h2 className="text-xl font-bold mb-3">Recapitulare și ce urmează</h2>
        <p className="mb-4 font-medium">Ai construit un robot autonom care urmează un traseu și chiar colectează obiecte – ești pe drumul cel bun!</p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Experimentează trasee și viteze noi</li>
          <li>Adaugă decoruri: treceri de pietoni, obstacole, semafoare</li>
          <li>Gândește-te: cum ar arăta robotul tău peste 50 de ani?</li>
        </ul>
        <div className="mt-4">
          <h3 className="font-semibold mb-2 flex items-center">
            <Forward className="h-4 w-4 mr-2" /> Ce urmează?
          </h3>
          <p className="mb-4">
            În lecția următoare învățăm despre senzori de distanță și reacții inteligente – <strong>detectarea obstacolelor în timp real</strong>!
          </p>
          <Button asChild variant="secondary">
            <Link to="/lego-spike-essentials/nextlesson">Înapoi la meniu</Link>
          </Button>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Session9BigLittleHelper;
