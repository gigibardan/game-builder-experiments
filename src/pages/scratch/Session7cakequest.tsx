
import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeBlock } from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Play, Rocket, Lightbulb, Check, Star } from 'lucide-react';
import ImageModal from '@/components/ImageModal';
import { ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session7CakeQuest = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'personaje', title: 'Personajele Jocului' },
    { id: 'masini', title: 'Programarea Mașinilor' },
    { id: 'roadster', title: 'Programarea lui Roadster' },
    { id: 'tort', title: 'Programarea Tortului' },
    { id: 'decor', title: 'Configurarea Decorului' },
    { id: 'challenge', title: 'Provocări' }
  ];

  const resources = [
    { title: 'Platforma Scratch', url: 'https://scratch.mit.edu/' },
    { title: 'Tutoriale Scratch Oficiale', url: 'https://scratch.mit.edu/projects/editor/?tutorial=getStarted' },
    { title: 'Comunitatea Scratch', url: 'https://scratch.mit.edu/explore/projects/all' }
  ];

  return (
    <LessonLayout
      title="The Cake Quest in Scratch"
      subtitle="Lecția 7 • Scratch Programming"
      courseId="scratch"
      sessionId="7"
      heroColor="bg-rose-500"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Lecția anterioară",
        path: "/scratch/session6stitchbeach"
      }}
      nextLesson={null}
    >
      <div className="space-y-8">
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4">Povestea jocului</h2>
          <p className="mb-4">
            În acest joc captivant, îl vei controla pe Roadster, un personaj curajos care trebuie să traverseze 
            strada aglomerată pentru a ajunge la un tort delicios. Misiunea ta este să-l ghidezi cu atenție, 
            evitând mașinile care circulă în ambele sensuri.
          </p>
          <p className="mb-6">
            Fii atent! Dacă Roadster este lovit de o mașină, jocul se termină. Traversează cu grijă toate 
            benzile de circulație și ajută-l să ajungă la tortul mult dorit pentru a câștiga!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <Check className="h-5 w-5 text-rose-600 mr-2" />
                Ce vei învăța
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-rose-600 mr-2 flex-shrink-0">✓</div>
                  <span>Controlul personajului cu tastele săgeți</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-rose-600 mr-2 flex-shrink-0">✓</div>
                  <span>Crearea și mișcarea obstacolelor (mașini) folosind clone</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-rose-600 mr-2 flex-shrink-0">✓</div>
                  <span>Detectarea coliziunilor între personaje</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-rose-600 mr-2 flex-shrink-0">✓</div>
                  <span>Implementarea condițiilor de victorie și înfrângere</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-rose-600 mr-2 flex-shrink-0">✓</div>
                  <span>Gestionarea evenimentelor și a mesajelor între personaje</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <ImageModal 
                src="../../assets/images/scratchproiect8preview.png" 
                alt="Previzualizare joc The Cake Quest" 
                className="w-full"
              />
              <div className="p-4 flex flex-col items-center">
                <Button asChild className="w-full bg-rose-500 hover:bg-rose-600">
                  <a href="https://scratch.mit.edu/projects/1146072238" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    <span>Încearcă jocul final</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-rose-100 to-pink-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Să începem!</h2>
            <p className="mb-4">
              Pentru a crea acest joc mai ușor, am pregătit un proiect starter cu mașinile și strada deja adăugate. 
              Tu va trebui să adaugi personajul principal (Roadster), tortul și să programezi interacțiunile!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-rose-500 hover:bg-rose-600">
                <a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Rocket className="h-5 w-5 mr-2" />
                  <span>Deschide proiectul starter</span>
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm flex items-start">
              <Lightbulb className="h-4 w-4 text-rose-600 mr-2 flex-shrink-0 mt-0.5" />
              <p>Sfat: Apasă butonul "Vezi în interior" pentru a putea edita proiectul, apoi "Remixează" pentru a salva propria versiune!</p>
            </div>
          </div>
        </section>

        <section id="personaje">
          <h2 className="text-2xl font-bold mb-4">1. Personajele jocului</h2>
          <p className="mb-4">
            Proiectul starter conține deja mașinile, dar trebuie să adaugi personajul principal și tortul:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="../../assets/images/scratchproiect8personaje.png" 
              alt="Personajele jocului" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🚗
              </div>
              <div>
                <h4 className="font-bold">Car 1, Car 2, Car 3, Car 4</h4>
                <p className="text-sm text-gray-600">Mașinile care se deplasează pe stradă și reprezintă obstacolele. Car 1 și Car 2 se deplasează de la stânga la dreapta, iar Car 3 și Car 4 se deplasează de la dreapta la stânga.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-yellow-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🏎️
              </div>
              <div>
                <h4 className="font-bold">Roadster (trebuie adăugat)</h4>
                <p className="text-sm text-gray-600">Personajul principal, controlat de jucător. Va trebui să-l adaugi din biblioteca Scratch.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🎂
              </div>
              <div>
                <h4 className="font-bold">Cake (trebuie adăugat)</h4>
                <p className="text-sm text-gray-600">Obiectivul jocului, care trebuie atins pentru a câștiga. Va trebui să-l adaugi din biblioteca Scratch.</p>
              </div>
            </div>
          </div>

          <div className="mb-6 mt-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum să adaugi personajele lipsă:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li>Click pe butonul "Alege un personaj" din colțul din dreapta jos al interfeței Scratch.</li>
              <li>Caută "Roadster" și "Cake" în biblioteca de personaje și adaugă-le în proiect.</li>
              <li>Redimensionează personajele după cum e necesar (Roadster la 30% din mărimea originală).</li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Personajul Roadster are mai multe costume care vor permite animația atunci când se deplasează. 
              Asigură-te că toate costumele sunt disponibile pentru a obține un efect vizual plăcut.
            </p>
          </InfoBox>
        </section>

        <section id="masini">
          <h2 className="text-2xl font-bold mb-4">2. Programarea mașinilor</h2>
          <p className="mb-4">
            Mașinile reprezintă obstacolele principale din joc. Ele se vor mișca automat pe drumuri și vor crea 
            un mediu dinamic pe care jucătorul trebuie să-l traverseze. Vom programa fiecare mașină să se deplaseze și să se cloneze:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="../../assets/images/scratchproiect8car.png" 
              alt="Codul pentru o mașină" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <p>Codul de mai sus este pentru o mașină care se deplasează de la stânga la dreapta (Car 1). Iată cum funcționează:</p>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializare</strong> - La începutul jocului, mașina:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Se ascunde (nu va fi vizibilă direct)</li>
                  <li>Se poziționează la coordonatele de start (X -260, Y -90)</li>
                  <li>Creează clone de sine care vor apărea pe drum</li>
                </ul>
              </li>
              <li><strong>Comportamentul clonelor</strong> - Când o clonă este creată:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Se face vizibilă</li>
                  <li>Se deplasează continuu spre dreapta</li>
                  <li>Verifică dacă a ajuns la marginea din dreapta (X &gt; 260). Dacă da, se șterge</li>
                  <li>Verifică dacă atinge personajul principal (Roadster). Dacă da, trimite mesajul "hit" pentru a anunța coliziunea</li>
                </ul>
              </li>
              <li><strong>Crearea continuă de clone</strong> - După ce creează o clonă, mașina așteaptă între 1 și 2 secunde și apoi creează o nouă clonă, creând astfel un flux continuu de mașini pe drum</li>
            </ol>
          </div>

          <div className="mt-6 mb-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Setările pentru toate mașinile:</h4>
            <ul className="space-y-4">
              <li><strong>Car 1:</strong> Se deplasează de la stânga la dreapta
                <ul className="list-disc ml-5 mt-1">
                  <li>Poziție start: X = -260, Y = -90</li>
                  <li>Dispare la: X &gt; 260</li>
                  <li>Interval de clonare: 1-2 secunde</li>
                </ul>
              </li>
              <li><strong>Car 2:</strong> Se deplasează de la stânga la dreapta
                <ul className="list-disc ml-5 mt-1">
                  <li>Poziție start: X = -260, Y = -45</li>
                  <li>Dispare la: X &gt; 260</li>
                  <li>Interval de clonare: 2-4 secunde</li>
                </ul>
              </li>
              <li><strong>Car 3:</strong> Se deplasează de la dreapta la stânga
                <ul className="list-disc ml-5 mt-1">
                  <li>Poziție start: X = 250, Y = 90</li>
                  <li>Dispare la: X &lt; -250</li>
                  <li>Interval de clonare: 3-6 secunde</li>
                </ul>
              </li>
              <li><strong>Car 4:</strong> Se deplasează de la dreapta la stânga
                <ul className="list-disc ml-5 mt-1">
                  <li>Poziție start: X = 250, Y = 45</li>
                  <li>Dispare la: X &lt; -250</li>
                  <li>Interval de clonare: 2-5 secunde</li>
                </ul>
              </li>
            </ul>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Poți ajusta viteza și frecvența de apariție a mașinilor pentru a crea niveluri de dificultate diferite. 
              Mai multe mașini și o viteză mai mare vor face jocul mai dificil, în timp ce mai puține mașini și 
              o viteză mai mică vor face jocul mai ușor.
            </p>
          </InfoBox>
        </section>

        <section id="roadster">
          <h2 className="text-2xl font-bold mb-4">3. Programarea personajului principal (Roadster)</h2>
          <p className="mb-4">
            Acum vom programa personajul principal, Roadster, pe care jucătorul îl va controla cu ajutorul tastelor săgeți. 
            Selectează personajul <strong>Roadster</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="../../assets/images/scratchproiect8roadster.png" 
              alt="Codul pentru Roadster" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializare</strong> - La începutul jocului, personajul:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Se face vizibil</li>
                  <li>Se poziționează la coordonatele de start (X -13, Y -158)</li>
                  <li>Își setează dimensiunea la 30% din mărimea originală</li>
                </ul>
              </li>
              <li><strong>Controlul mișcării</strong> - Într-o buclă infinită:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Verifică tastele săgeți:
                    <ul className="list-disc ml-5 mt-1">
                      <li>Săgeata sus: se orientează în sus (0 grade) și se deplasează 5 pași</li>
                      <li>Săgeata jos: se orientează în jos (180 grade) și se deplasează 5 pași</li>
                      <li>Săgeata dreapta: se orientează spre dreapta (90 grade) și se deplasează 5 pași</li>
                      <li>Săgeata stânga: se orientează spre stânga (-90 grade) și se deplasează 5 pași</li>
                    </ul>
                  </li>
                  <li>Animație: Dacă o tastă săgeată este apăsată, schimbă la următorul costum pentru a crea animația de mișcare și așteaptă 0.2 secunde, altfel schimbă la un costum static.</li>
                </ul>
              </li>
              <li><strong>Gestionarea înfrângerii</strong> - Când primește mesajul "hit" de la o mașină, declanșează înfrângerea:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Schimbă decorul la "oops" pentru a indica sfârșitul jocului</li>
                  <li>Oprește toate scripturile pentru a finaliza jocul</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Poți ajusta viteza personajului modificând numărul de pași (5) din blocurile de mișcare. 
              Un număr mai mare îl va face să se miște mai repede, ceea ce poate face jocul mai ușor sau mai dificil, 
              în funcție de preferințele tale.
            </p>
          </InfoBox>
        </section>

        <section id="tort">
          <h2 className="text-2xl font-bold mb-4">4. Programarea tortului (obiectivul jocului)</h2>
          <p className="mb-4">
            Tortul reprezintă obiectivul jocului. Când personajul principal (Roadster) ajunge la tort, jocul este câștigat. 
            Selectează personajul <strong>Cake</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="../../assets/images/scratchproiect8cake.png" 
              alt="Codul pentru tort" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializare</strong> - La începutul jocului, tortul:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Se face vizibil</li>
                  <li>Se poziționează la coordonatele inițiale</li>
                </ul>
              </li>
              <li><strong>Schimbare periodică de poziție</strong> - La fiecare 5 secunde, tortul își schimbă poziția. Acest lucru face jocul mai dinamic și interesant, oferind mai multe provocări pentru jucător.</li>
              <li><strong>Condiția de victorie</strong> - Într-o buclă infinită:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Verifică dacă personajul principal (Roadster) atinge tortul</li>
                  <li>Dacă da, schimbă decorul la "welldone" pentru a indica victoria și oprește toate scripturile</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="info">
            <p>
              Poți modifica intervalul de 5 secunde dintre schimbările de poziție ale tortului pentru a face jocul 
              mai ușor sau mai dificil. Un interval mai scurt va face ca tortul să se miște mai des, crescând 
              dificultatea jocului.
            </p>
          </InfoBox>
        </section>

        <section id="decor">
          <h2 className="text-2xl font-bold mb-4">5. Configurarea decorului</h2>
          <p className="mb-4">
            În ultimul pas, vom configura decorul pentru a gestiona condițiile de victorie și înfrângere. 
            Selectează <strong>Scena</strong> și asigură-te că ai toate cele trei decoruri:
          </p>

          <div className="mb-6 mt-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Decorurile necesare:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Roads</strong> - Decorul principal al jocului, care afișează strada pe care personajul trebuie să o traverseze.</li>
              <li><strong>Welldone</strong> - Decorul care apare când jucătorul câștigă (atinge tortul).</li>
              <li><strong>Oops</strong> - Decorul care apare când jucătorul pierde (este lovit de o mașină).</li>
            </ol>
          </div>

          <div className="mb-6">
            <p className="mb-2">Adaugă următorul cod pentru scenă:</p>
            <ImageModal 
              src="../../assets/images/scratchproiect8scena.png" 
              alt="Codul pentru scena jocului" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează codul pentru scenă:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializare</strong> - La începutul jocului, scena trece la decorul "roads".</li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="info">
            <p>
              Poți personaliza decorurile de final pentru a face mesajele de victorie și înfrângere mai atractive 
              și mai personalizate. De exemplu, poți adăuga un text care să felicite jucătorul sau să-l încurajeze 
              să încerce din nou.
            </p>
          </InfoBox>
        </section>

        <section id="challenge">
          <h2 className="text-2xl font-bold mb-4">6. Testează și îmbunătățește</h2>
          <p className="mb-4">
            Acum că toate elementele jocului sunt implementate, este timpul să îl testezi! Apasă steagul verde și încearcă să ghidezi 
            personajul Roadster până la tort, evitând mașinile care se deplasează pe stradă.
          </p>

          <Challenge title="Provocări pentru îmbunătățirea jocului" difficulty="medium">
            <p>După ce ai terminat jocul de bază, încearcă aceste îmbunătățiri:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🎵
                </div>
                <div>
                  <h4 className="font-bold">Adaugă efecte sonore și muzică</h4>
                  <p className="text-sm text-gray-600">Adaugă sunete pentru mișcarea personajului, coliziuni, victorie și înfrângere.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  ⏱️
                </div>
                <div>
                  <h4 className="font-bold">Adaugă un cronometru</h4>
                  <p className="text-sm text-gray-600">Implementează un timer care să limiteze timpul disponibil pentru a ajunge la tort.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🏆
                </div>
                <div>
                  <h4 className="font-bold">Adaugă un sistem de scor</h4>
                  <p className="text-sm text-gray-600">Crește scorul pe măsură ce personajul traversează cu succes fiecare bandă de circulație.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🚦
                </div>
                <div>
                  <h4 className="font-bold">Adaugă semafoare</h4>
                  <p className="text-sm text-gray-600">Implementează semafoare care să oprească temporar mașinile, facilitând traversarea.</p>
                </div>
              </div>
            </div>
          </Challenge>
        </section>

        <section className="bg-rose-50 p-6 rounded-lg border border-rose-200">
          <h2 className="text-xl font-bold mb-3">Felicitări!</h2>
          <p className="mb-4">
            Ai creat un joc captivant de traversare a străzii în care trebuie să ghidezi un personaj pentru a ajunge 
            la un tort delicios! Acest proiect ți-a permis să înveți despre controlul personajelor, clonarea obiectelor, 
            detecția coliziunilor și crearea condițiilor de victorie și înfrângere.
          </p>
          <p className="mb-4">
            Acum poți împărtăși jocul cu prietenii și familia, îl poți personaliza adăugând propriile tale idei și 
            îmbunătățiri, și poți folosi aceste concepte pentru a crea alte jocuri similare.
          </p>
          <Button asChild className="bg-rose-500 hover:bg-rose-600">
            <Link to="/scratch" className="flex items-center">
              <span>Înapoi la cursul Scratch</span>
            </Link>
          </Button>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Session7CakeQuest;
