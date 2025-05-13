import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeBlock } from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Play, Rocket, Lightbulb, Check, Star, Code, Flag, ArrowRight } from 'lucide-react';
import ImageModal from '@/components/ImageModal';
import { ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session11EggDropper = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'personaje', title: 'Personajele Jocului' },
    { id: 'eggdropper', title: 'Personajul EggDropper' },
    { id: 'decor', title: 'Fundalul și Decorul' },
    { id: 'bunny', title: 'Personajul Bunny' },
    { id: 'smoke', title: 'Efectul de Fum' },
    { id: 'egg', title: 'Personajul Egg' },
    { id: 'basket', title: 'Personajul Basket' },
    { id: 'cloud', title: 'Personajul Cloud' },
    { id: 'final', title: 'Finalizare și Testare' }
  ];

  const resources = [
    { title: 'Platforma Scratch', url: 'https://scratch.mit.edu/' },
    { title: 'Tutoriale Scratch Oficiale', url: 'https://scratch.mit.edu/projects/editor/?tutorial=getStarted' },
    { title: 'Comunitatea Scratch', url: 'https://scratch.mit.edu/explore/projects/all' }
  ];

  return (
    <LessonLayout
      title="Egg Dropper în Scratch"
      subtitle="Lecția 11 • Scratch Programming"
      courseId="scratch"
      sessionId="11"
      heroColor="bg-purple-500"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Lecția anterioară",
        path: "/scratch/session10flappyminecraftpart2"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/scratch/session12"
      }}
    >
      <div className="space-y-8">
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4">Povestea jocului</h2>
          <p className="mb-4">
            Bine ai venit la crearea jocului "Egg Dropper"! În acest proiect captivant, vom programa un 
            iepuraș care zboară cu ajutorul unui jetpack și aruncă ouă, încercând să țintească coșurile 
            ce se mișcă în partea de jos a ecranului.
          </p>
          <p className="mb-6">
            Este un joc de tip "infinite runner" (joc infinit), unde scopul este să aduni cât mai multe 
            puncte, aruncând ouă în coșuri. Pentru fiecare ou care nimerește într-un coș, vei primi un punct, 
            dar pentru fiecare ou care cade pe jos, vei pierde un punct. Jocul continuă la nesfârșit, 
            provocându-te să obții un scor cât mai mare!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <Check className="h-5 w-5 text-purple-600 mr-2" />
                Ce vei învăța
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                  <span>Crearea și controlul unui personaj cu jetpack</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                  <span>Implementarea unui sistem de lansare de proiectile (ouă)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                  <span>Crearea efectelor vizuale (fum de jetpack, efecte de mișcare)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                  <span>Utilizarea funcțiilor trigonometrice pentru mișcări fluide</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                  <span>Implementarea unui sistem de scor interactiv</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <ImageModal 
                src="/assets/images/scratch/previewEggD.png" 
                alt="Previzualizare joc Egg Dropper" 
                className="w-full"
              />
              <div className="p-4 flex flex-col items-center">
                <Button asChild className="w-full bg-purple-500 hover:bg-purple-600">
                  <a href="https://scratch.mit.edu/projects/1162443677" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    <span>Încearcă jocul final</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Să începem!</h2>
            <p className="mb-4">
              În acest proiect, vom crea un joc distractiv cu tematică de Paște, dar conceptul poate fi adaptat 
              și pentru alte teme, schimbând personajele și decorurile. Vom implementa mecanisme complexe precum 
              funcții trigonometrice pentru mișcare fluidă, efecte de paralax pentru adâncime vizuală și un sistem 
              de lansare de proiectile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-purple-500 hover:bg-purple-600">
                <a href="https://scratch.mit.edu/projects/1172493291/editor/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Rocket className="h-5 w-5 mr-2" />
                  <span>Deschide proiectul starter</span>
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm flex items-start">
              <Lightbulb className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
              <p>Sfat: Pentru a urma acest tutorial, poți crea un proiect nou în Scratch și adăuga personajele așa cum sunt descrise, sau poți folosi proiectul starter furnizat.</p>
            </div>
          </div>
        </section>

        <section id="personaje">
          <h2 className="text-2xl font-bold mb-4">1. Personajele jocului</h2>
          <p className="mb-4">
            Pentru jocul nostru "Egg Dropper", vom avea nevoie de mai multe personaje (sprite-uri), fiecare 
            cu un rol specific. Iată o prezentare generală a acestora:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="/assets/images/scratch/personajeEggD.png" 
              alt="Personajele jocului Egg Dropper" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🐰
              </div>
              <div>
                <h4 className="font-bold">Bunny</h4>
                <p className="text-sm text-gray-600">Personajul principal pe care îl controlezi, un iepuraș cu jetpack.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                💨
              </div>
              <div>
                <h4 className="font-bold">Smoke Effect</h4>
                <p className="text-sm text-gray-600">Creează efectul de fum pentru jetpack-ul iepurașului.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🥚
              </div>
              <div>
                <h4 className="font-bold">Egg</h4>
                <p className="text-sm text-gray-600">Ouăle pe care le arunci pentru a ține și urmări scorul.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🧺
              </div>
              <div>
                <h4 className="font-bold">Basket</h4>
                <p className="text-sm text-gray-600">Coșurile în care trebuie să arunci ouăle pentru a câștiga puncte.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                ☁️
              </div>
              <div>
                <h4 className="font-bold">Cloud</h4>
                <p className="text-sm text-gray-600">Norii decorativi care creează efectul de paralax în fundal.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🎮
              </div>
              <div>
                <h4 className="font-bold">Egg Dropper Card</h4>
                <p className="text-sm text-gray-600">Ecranul de start care se afișează înainte de începerea jocului.</p>
              </div>
            </div>
          </div>

          <InfoBox title="Important" icon="info" variant="info">
            <p>
              Fiecare personaj are un rol unic în joc. Unele, precum iepurașul și ouăle, sunt elemente interactive esențiale, 
              în timp ce altele, precum norii și efectele de fum, au roluri mai decorative, dar contribuie semnificativ la 
              experiența vizuală generală a jocului.
            </p>
          </InfoBox>
        </section>

        <section id="eggdropper">
          <h2 className="text-2xl font-bold mb-4">2. Programarea ecranului de start (Egg Dropper Card)</h2>
          <p className="mb-4">
            Vom începe cu programarea ecranului de start, care va fi primul lucru pe care jucătorii îl vor 
            vedea când deschid jocul. Acest personaj va afișa un buton de start și va gestiona începerea jocului.
          </p>

          <div className="mb-6">
            <ImageModal 
              src="/assets/images/scratch/cardEggD.png" 
              alt="Codul pentru Egg Dropper Card" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializarea ecranului de start</strong> - La apăsarea steagului verde:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Personajul Egg Dropper Card devine vizibil</li>
                </ul>
              </li>
              <li><strong>Detectarea începerii jocului</strong> - În alt script:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Când jucătorul face click pe acest personaj, difuzează mesajul "start" către toate celelalte personaje</li>
                  <li>Apoi personajul se ascunde, deoarece nu mai este necesar odată ce jocul a început</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Utilizarea unui ecran de start este o practică bună în designul jocurilor, deoarece oferă 
              jucătorilor un moment de pauză înainte de a se lansa în acțiune. De asemenea, ne permite 
              să pregătim toate elementele jocului înainte ca interacțiunea principală să înceapă.
            </p>
          </InfoBox>
        </section>

        <section id="decor">
          <h2 className="text-2xl font-bold mb-4">3. Configurarea fundalului și decorului</h2>
          <p className="mb-4">
            Pentru a crea un efect de mișcare continuă, vom configura fundalul să se schimbe rapid între 
            mai multe cadre similare, ușor deplasate. Aceasta va crea iluzia că iepurașul se deplasează 
            constant spre dreapta, în timp ce, de fapt, rămâne relativ în aceeași poziție pe ecran.
          </p>

          <div className="mb-6">
            <ImageModal 
              src="/assets/images/scratch/decorEggD.png" 
              alt="Codul pentru decor" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializarea decorului</strong> - Când primește mesajul "start":
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Într-o buclă infinită, schimbă fundalul la următorul costum</li>
                  <li>Așteaptă 0.1 secunde între schimbări</li>
                </ul>
              </li>
              <li><strong>Crearea efectului de mișcare</strong>:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Folosim 33 de decoruri similare, fiecare ușor deplasat spre stânga față de cel anterior</li>
                  <li>Schimbând rapid între aceste decoruri, creăm iluzia unei mișcări continue</li>
                  <li>Acest efect este cunoscut sub numele de "scrolling background" (fundal cu defilare)</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Tehnica Fundal cu Defilare" icon="info" variant="info">
            <p>
              Această tehnică de animație a fundalului este foarte eficientă pentru jocurile de tip "infinite runner". 
              În loc să mișcăm toate personajele, mișcăm doar fundalul, creând iluzia că personajul principal 
              avansează constant. Acest lucru simplifică gestionarea coliziunilor și a altor elemente de gameplay.
            </p>
          </InfoBox>
        </section>

        <section id="bunny">
          <h2 className="text-2xl font-bold mb-4">4. Programarea iepurașului (Bunny)</h2>
          <p className="mb-4">
            Acum vom programa personajul principal al jocului, iepurașul cu jetpack. Acest personaj va putea 
            fi controlat de jucător folosind tastele săgeți și va avea o mișcare fluidă cu un efect de plutire.
          </p>

          <div className="mb-6">
            <ImageModal 
              src="/assets/images/scratch/bunnyEggD.png" 
              alt="Codul pentru Bunny" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializarea iepurașului</strong> - La apăsarea steagului verde:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Iepurașul se ascunde, așteptând începerea jocului</li>
                </ul>
              </li>
              <li><strong>Pregătirea pentru începerea jocului</strong> - Când primește mesajul "start":
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Setează stilul de rotație la "stânga-dreapta"</li>
                  <li>Se poziționează la coordonatele inițiale (x: -100, y: 0)</li>
                  <li>Devine vizibil</li>
                  <li>Merge la stratul "în față" pentru a fi mereu deasupra fundalului</li>
                </ul>
              </li>
              <li><strong>Animația iepurașului</strong> - În buclă infinită:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Schimbă costumul la fiecare 0.2 secunde pentru a crea animația de zbor</li>
                </ul>
              </li>
              <li><strong>Controlul mișcării</strong> - În buclă infinită:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Modifică y cu 1 și apoi folosește o funcție trigonometrică (cos din y * 0.5) pentru a crea un efect de plutire naturală</li>
                  <li>Verifică dacă săgeata sus este apăsată - mișcă iepurașul în sus cu 5 pixeli</li>
                  <li>Verifică dacă săgeata jos este apăsată - mișcă iepurașul în jos cu 5 pixeli</li>
                  <li>Verifică dacă săgeata dreapta este apăsată - orientează iepurașul spre dreapta (90 grade) și mișcă-l cu 5 pixeli</li>
                  <li>Verifică dacă săgeata stânga este apăsată - orientează iepurașul spre stânga (-90 grade) și mișcă-l cu 5 pixeli</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Utilizarea funcției cosinus pentru mișcare" icon="info" variant="warning">
            <p>
              O parte interesantă a acestui cod este utilizarea funcției trigonometrice cosinus pentru a crea mișcarea 
              de plutire a iepurașului. Expresia <code>modifică y cu (cos din y * 0.5)</code> generează o mișcare 
              ondulatorie fluidă. Cosinusul variabilei y va oscila între -1 și 1, iar înmulțirea cu 0.5 reduce 
              amplitudinea acestei oscilații pentru o mișcare mai subtilă. Acest efect face ca iepurașul să plutească 
              ușor în sus și în jos, adăugând realism animației.
            </p>
          </InfoBox>
        </section>

        <section id="smoke">
          <h2 className="text-2xl font-bold mb-4">5. Adăugarea efectului de fum (Smoke Effect)</h2>
          <p className="mb-4">
            Pentru a îmbunătăți vizual jocul nostru, vom adăuga un efect de fum pentru jetpack-ul iepurașului. 
            Acest efect va crea iluzia că jetpack-ul propulsează iepurașul prin aer.
          </p>

          <div className="mb-6">
            <ImageModal 
              src="/assets/images/scratch/smokeEggD.png" 
              alt="Codul pentru Smoke Effect" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializarea efectului de fum</strong> - La apăsarea steagului verde:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Personajul Smoke Effect original se ascunde</li>
                  <li>Așteaptă 4 secunde pentru a permite încărcarea completă a jocului</li>
                </ul>
              </li>
              <li><strong>Crearea efectului de fum continuu</strong> - În buclă infinită:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Așteaptă 2 secunde</li>
                  <li>Creează o clonă a efectului de fum</li>
                </ul>
              </li>
              <li><strong>Comportamentul clonelor de fum</strong> - Când o clonă începe:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Merge la stratul "înapoi" pentru a fi în spatele iepurașului</li>
                  <li>Se poziționează la o coordonată aleatorie în jurul iepurașului (x: 240, y: aleator între 20 și 150)</li>
                  <li>Setează efectul "ghost" (fantomă) la o valoare aleatorie între 50 și 90 pentru transparență</li>
                  <li>Setează mărimea la o valoare aleatorie între 100% și 300%</li>
                  <li>Devine vizibilă</li>
                  <li>Într-o buclă, se deplasează spre stânga până când iese din ecran <code>(x &lt; -230)</code></li>
                  <li>Modifică x cu o valoare aleatorie între -2 și -3 pentru a varia viteza</li>
                  <li>La final, șterge clona</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="info">
            <p>
              Efectele vizuale precum fumul adaugă profunzime și dinamism jocului tău. Prin varierea 
              proprietăților clonelor (poziție, transparență, mărime), creăm un efect de fum mai natural 
              și mai organic, care îmbunătățește semnificativ aspectul vizual al jocului.
            </p>
          </InfoBox>
        </section>
     <section id="egg">
          <h2 className="text-2xl font-bold mb-4">6. Programarea ouălor (Egg)</h2>
          <p className="mb-4">
            Acum vom programa elementul central al gameplay-ului: ouăle pe care iepurașul le aruncă. 
            Acestea sunt proiectilele care trebuie să nimerească coșurile pentru a acumula puncte.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Prima parte a codului:</h3>
              <ImageModal 
                src="/assets/images/scratch/egg1EggD.png" 
                alt="Codul pentru Egg (Partea 1)" 
                className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              />
              <p className="mt-3 text-sm text-gray-600">
                Inițializarea variabilei Scor și configurarea lansării ouălor la apăsarea spațiului.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">A doua parte a codului:</h3>
              <ImageModal 
                src="/assets/images/scratch/egg2EggD.png" 
                alt="Codul pentru Egg (Partea 2)" 
                className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              />
              <p className="mt-3 text-sm text-gray-600">
                Comportamentul clonelor de ouă, inclusiv mișcare, rotație și detecția coliziunilor.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializarea variabilelor și ascunderea ouălor originale</strong> - La apăsarea steagului verde:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Setează variabila "Scor" la 0</li>
                  <li>Ascunde oul original (vom folosi doar clonele)</li>
                </ul>
              </li>
              <li><strong>Crearea ouălor la comandă</strong> - Când primește mesajul "start":
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Într-o buclă infinită, verifică dacă tasta spațiu este apăsată</li>
                  <li>Când spațiul este apăsat, creează o clonă a oului</li>
                  <li>Așteaptă o perioadă aleatorie între 0.05 secunde pentru a evita crearea prea multor clone simultan</li>
                </ul>
              </li>
              <li><strong>Comportamentul clonelor de ouă</strong> - Când o clonă începe:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Schimbă costumul la un număr aleatoriu între 1 și 8 (pentru variație vizuală)</li>
                  <li>Merge la personajul Bunny (iepuraș)</li>
                  <li>Devine vizibilă</li>
                  <li>Setează variabilele pentru mișcare: turn (rotație), presx (poziție x) și presy (poziție y)</li>
                  <li>Într-o buclă, verifică dacă oul atinge marginea sau un coș</li>
                </ul>
              </li>
              <li><strong>Gestionarea coliziunilor și a scorului</strong>:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Dacă oul atinge marginea, scade 1 punct din Scor și șterge clona</li>
                  <li>Dacă oul atinge un Basket (coș), adaugă 1 punct la Scor, redă un sunet și șterge clona</li>
                  <li>În timpul căderii, oul se rotește și se mișcă folosind variabilele turn, presx și presy pentru a crea o traiectorie realistă</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Variabilele de mișcare" icon="info" variant="warning">
            <p>
              Codul folosește trei variabile principale pentru a controla mișcarea ouălor:
              <br/><br/>
              <strong>turn</strong> - controlează rotația oului în timpul căderii<br/>
              <strong>presx</strong> - controlează deplasarea orizontală (x)<br/>
              <strong>presy</strong> - controlează deplasarea verticală (y)<br/>
              <br/>
              Aceste variabile lucrează împreună pentru a crea un efect realist de cădere, cu o ușoară 
              rotație și deplasare. Formula <code>rotatește-te (presy / turn) grade</code> face ca ouăle 
              să se rotească mai rapid pe măsură ce cad, adăugând realism mișcării.
            </p>
          </InfoBox>
        </section>

        <section id="basket">
          <h2 className="text-2xl font-bold mb-4">7. Programarea coșurilor (Basket)</h2>
          <p className="mb-4">
            Acum vom programa coșurile care se vor deplasa în partea de jos a ecranului. Jucătorul 
            va trebui să țintească aceste coșuri cu ouăle pentru a acumula puncte.
          </p>

          <div className="mb-6">
            <ImageModal 
              src="/assets/images/scratch/basketEggD.png" 
              alt="Codul pentru Basket" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializarea coșurilor</strong> - La apăsarea steagului verde:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Coșul original se ascunde (vom folosi doar clonele)</li>
                </ul>
              </li>
              <li><strong>Crearea coșurilor la intervale regulate</strong> - Când primește mesajul "start":
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Într-o buclă infinită, creează clone la intervale aleatorii între 1.5 și 3 secunde</li>
                </ul>
              </li>
              <li><strong>Comportamentul clonelor de coșuri</strong> - Când o clonă începe:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Merge la stratul "în față" pentru a fi vizibil peste fundal</li>
                  <li>Se poziționează în afara ecranului în dreapta (x: 300)</li>
                  <li>Selectează o poziție y aleatorie în partea de jos a ecranului (între -155 și -155)</li>
                  <li>Schimbă costumul la un număr aleatoriu între 1 și 6 pentru variație vizuală</li>
                  <li>Devine vizibilă</li>
                  <li>Într-o buclă, se deplasează spre stânga până când iese din ecran <code>(x &lt; -250)</code></li>
                  <li>Modifică x cu -2 pixeli în fiecare iterație pentru mișcare constantă</li>
                  <li>La final, șterge clona</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="info">
            <p>
              Variația costumelor coșurilor și a intervalelor de apariție adaugă un element de 
              imprevizibilitate jocului, făcându-l mai interesant și mai provocator. De asemenea, prin 
              plasarea coșurilor la înălțimi aleatorii în partea de jos a ecranului, jucătorul trebuie 
              să fie atent și să-și ajusteze constant poziția și momentul de lansare a ouălor.
            </p>
          </InfoBox>
        </section>

        <section id="cloud">
          <h2 className="text-2xl font-bold mb-4">8. Adăugarea norilor (Cloud)</h2>
          <p className="mb-4">
            Pentru a îmbunătăți vizual fundalul jocului, vom adăuga nori care se mișcă pentru a crea un efect de paralax. 
            Acest efect va adăuga profunzime scenei și va face să pară că iepurașul se deplasează prin aer.
          </p>

          <div className="mb-6">
            <ImageModal 
              src="/assets/images/scratch/cloudEggD.png" 
              alt="Codul pentru Cloud" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializarea norilor</strong> - La apăsarea steagului verde:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Norul original se ascunde (vom folosi doar clonele)</li>
                </ul>
              </li>
              <li><strong>Crearea norilor la începutul jocului</strong> - Când primește mesajul "start":
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Așteaptă 2 secunde pentru a permite încărcarea altor elemente</li>
                  <li>Creează o clonă</li>
                </ul>
              </li>
              <li><strong>Comportamentul clonelor de nori</strong> - Când o clonă începe:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Merge la stratul "înapoi" pentru a fi în spatele altor elemente</li>
                  <li>Se poziționează în afara ecranului în dreapta (x: 240)</li>
                  <li>Selectează o poziție y aleatorie (între 20 și 150)</li>
                  <li>Setează efectul de transparență "ghost" la o valoare aleatorie (între 50 și 90)</li>
                  <li>Setează mărimea la o valoare aleatorie (între 100% și 300%)</li>
                  <li>Devine vizibilă</li>
                  <li>Într-o buclă, se deplasează spre stânga până când iese din ecran <code>(x &lt; -230)</code></li>
                  <li>La final, șterge clona și creează o clonă nouă pentru a menține un flux constant de nori</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Efectul de Paralax" icon="info" variant="warning">
            <p>
              Paralaxul este o tehnică în care diferite elemente ale unei scene se mișcă cu viteze diferite, 
              creând iluzia de profunzime. În jocul nostru, norii se mișcă mai lent decât fundalul principal, 
              dar mai repede decât obiectele din prim-plan, ceea ce adaugă un sentiment de adâncime la scenă. 
              Acest efect, combinat cu variațiile de mărime și transparență, face ca mediul de joc să pară 
              mult mai dinamic și imersiv.
            </p>
          </InfoBox>
        </section>

        <section id="final">
          <h2 className="text-2xl font-bold mb-4">9. Adăugarea muzicii și finalizarea jocului</h2>
          <p className="mb-4">
            În ultimul pas, vom adăuga muzică de fundal pentru a îmbunătăți atmosfera jocului. 
            Am văzut deja cum sunetele individuale sunt redate pentru interacțiuni specifice (cum ar fi 
            când un ou nimerește un coș), dar acum vom adăuga muzică continuă.
          </p>

          <div className="mb-6">
            <ImageModal 
              src="/assets/images/scratch/musicEggD.png" 
              alt="Codul pentru Muzică" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Adăugarea muzicii:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Redarea muzicii de fundal</strong> - Când primește mesajul "start":
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Într-o buclă infinită, fundalul trece la următorul costum</li>
                  <li>Așteaptă 0.1 secunde pentru schimbarea fluidă a fundalului</li>
                </ul>
              </li>
              <li><strong>Redarea melodiei de fundal</strong> - Într-un al doilea script, când primește mesajul "start":
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Redă melodia "Little Drummer Boy" până la final</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <ImageModal 
                src="/assets/images/scratch/previewEggD.png" 
                alt="Previzualizare joc Egg Dropper" 
                className="w-full"
              />
              <div className="p-4 flex flex-col items-center">
                <Button asChild className="w-full bg-purple-500 hover:bg-purple-600">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    <span>Încearcă jocul final</span>
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">Puncte cheie de verificat:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                  <span>Iepurașul răspunde corect la comenzile tale (săgețile pentru mișcare)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                  <span>Apăsarea spațiului creează ouă care cad cu o mișcare naturală</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                  <span>Coșurile se mișcă uniform și pot fi țintite cu ouăle</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                  <span>Scorul crește când ouăle nimeresc coșuri și scade când cad pe jos</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                  <span>Efectele vizuale (fumul jetpack-ului, norii) creează un mediu dinamic</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                  <span>Sunetele și muzica îmbunătățesc experiența generală de joc</span>
                </li>
              </ul>
            </div>
          </div>

          <Challenge title="Provocări pentru îmbunătățirea jocului" difficulty="medium">
            <p>După ce ai finalizat versiunea de bază a jocului, poți încerca aceste îmbunătățiri avansate:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🎯
                </div>
                <div>
                  <h4 className="font-bold">Niveluri de dificultate</h4>
                  <p className="text-sm text-gray-600">Adaugă niveluri de dificultate care cresc pe măsură ce scorul se mărește, crescând viteza coșurilor și făcându-le mai mici.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🏆
                </div>
                <div>
                  <h4 className="font-bold">Sistem de record personal</h4>
                  <p className="text-sm text-gray-600">Implementează un sistem care să salveze și să afișeze recordul personal al jucătorului între sesiunile de joc.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  💥
                </div>
                <div>
                  <h4 className="font-bold">Efecte speciale</h4>
                  <p className="text-sm text-gray-600">Adaugă efecte speciale mai elaborate când ouăle lovesc coșurile, cum ar fi particule sau animații de celebrare.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🎨
                </div>
                <div>
                  <h4 className="font-bold">Teme alternative</h4>
                  <p className="text-sm text-gray-600">Creează teme alternative pentru joc, înlocuind iepurașul, ouăle și coșurile cu alte personaje și obiecte.</p>
                </div>
              </div>
            </div>
          </Challenge>

          <div className="mt-8 bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h3 className="text-xl font-bold mb-3">Felicitări!</h3>
            <p className="mb-4">
              Ai finalizat cu succes jocul "Egg Dropper"! Acest proiect ți-a permis să înveți și să pui în practică 
              numeroase concepte importante în programare, cum ar fi utilizarea clonelor, funcții trigonometrice pentru 
              mișcare fluidă, efecte vizuale avansate și un sistem de scor interactiv.
            </p>
            <p className="mb-4">
              Acum că stăpânești aceste concepte, poți crea propriile versiuni ale jocului, adăugând elemente noi sau 
              modificând cele existente pentru a crea o experiență unică. De asemenea, poți folosi aceste cunoștințe 
              pentru a dezvolta alte tipuri de jocuri în Scratch.
            </p>
            
            <div className="mt-6 flex justify-center">
              <Button asChild className="bg-purple-500 hover:bg-purple-600">
                <a href="https://scratch.mit.edu/projects/editor/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  <span>Creează propriul tău joc!</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Session11EggDropper;