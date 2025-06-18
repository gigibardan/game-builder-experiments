import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { Button } from '@/components/ui/button';
import { Lightbulb, Rocket, Check, Play, Forward, Star, PlugZap, Sparkles } from 'lucide-react';
import ImageModal from '@/components/ImageModal';
const SessionWalkerRobot2 = () => {
  return (
    <LessonLayout
      title="Walker Robot – Partea 2"
      subtitle="Lecția finală • LEGO SPIKE Essentials"
      courseId="lego-spike-essentials"
      sessionId="11.2"
      heroColor="bg-neutral-600"
      sidebarItems={[
        { id: 'intro', title: 'Povestea lecției', isActive: true },
        { id: 'recap', title: 'Recapitulare mers robot' },
        { id: 'build', title: 'Construiește capul și corpul' },
        { id: 'creative', title: 'Activitate creativă: Personalizare' },
        { id: 'review', title: 'Testare și îmbunătățire' },
        { id: 'finish', title: 'Final de curs' },
      ]}
      resources={[
        { title: 'Instrucțiuni Walker – Partea 2 (PDF)', url: '/assets/docs/WalkingRobotPart2.pdf' },
      ]}
    >

      <section id="intro">
        <h2 className="text-2xl font-bold mb-4">Povestea lecției</h2>
        <p>Robotul nostru care merge a fost testat cu succes! Acum este momentul să-l completăm cu o construcție realistă a capului și a corpului.</p>
        <p>Îi vom da personalitate, stabilitate și un aspect final care îl face pregătit pentru o prezentare reală – ca într-un concurs de robotică!</p>
        <ImageModal src="/assets/images/robotica/WalkingRobotPart2.png" alt="Previzualizare robot complet" />
      </section>

      <section id="recap" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Recapitulare mers robot</h2>
        <p>În lecția anterioară, am construit baza robotului și am învățat cum să-l facem să meargă folosind două motoare.</p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Am setat viteza și direcția motoarelor pentru deplasare</li>
          <li>Am explorat și o variantă avansată cu balans</li>
        </ul>
        <p>Acum suntem gata pentru partea estetică și funcțională superioară!</p>
      </section>

      <section id="build" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Construiește capul și corpul robotului</h2>
        <p>Urmează instrucțiunile din PDF pentru a completa robotul cu o construcție stabilă și atractivă:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Adaugă capul robotului – poți personaliza ochii și forma</li>
          <li>Construiește un trunchi solid care susține echilibrul</li>
          <li>Testează dacă robotul poate merge în continuare după ce adaugi greutate</li>
        </ul>
        <div className="mt-4">
          <Button asChild className="bg-neutral-600 hover:bg-neutral-700">
            <a href="/assets/docs/WalkingRobotPart2.pdf" target="_blank">
              Instrucțiuni PDF – Partea 2
            </a>
          </Button>
        </div>
      </section>

      <section id="creative" className="mt-10 bg-yellow-50 border border-yellow-100 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-2 flex items-center">
          <Sparkles className="h-4 w-4 mr-2" /> Activitate creativă: Personalizare și prezentare
        </h3>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Adaugă un nume robotului tău</li>
          <li>Construiește o scenă – de exemplu, un drum LEGO, obstacole sau o rampă</li>
          <li>Scrie o scurtă poveste: unde merge robotul? Ce misiune are?</li>
          <li>Colaborează cu colegii și prezentați-vă creațiile ca într-o mică expoziție de final de curs</li>
        </ul>
      </section>

      <section id="review" className="mt-10">
        <h2 className="text-xl font-bold mb-3">Testare și îmbunătățire</h2>
        <p>Este momentul să testăm cum se comportă robotul complet:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Se poate deplasa în linie dreaptă cu noua greutate?</li>
          <li>Se dezechilibrează? Poți ajusta designul pentru mai multă stabilitate?</li>
          <li>Picioarele se mișcă sincron? Se blochează?</li>
        </ul>
        <p>Aceste teste ne ajută să înțelegem mai bine principiile de echilibru, greutate și direcție.</p>
      </section>

      <section id="finish" className="mt-10 bg-neutral-50 border border-neutral-200 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-3">Final de curs: Bravo, ești un mic inginer!</h2>
        <p className="mb-4 font-medium">Aceasta a fost ultima lecție din parcursul tău LEGO Spike Essentials – felicitări!</p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Ai învățat cum să controlezi motoare, senzori, lumini și mișcare</li>
          <li>Ai participat la proiecte creative și lecții colaborative</li>
          <li>Ai construit roboți funcționali și i-ai programat singur</li>
        </ul>
        <p>Ține minte: fiecare idee mare începe de la o construcție mică.</p>
        <div className="mt-4">
          <Button asChild variant="secondary">
            <Link to="/lego-spike-essentials">Înapoi la meniu</Link>
          </Button>
        </div>
      </section>

    </LessonLayout>
  );
};

export default SessionWalkerRobot2;
