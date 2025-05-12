
import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeBlock } from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Play, Rocket, Lightbulb, Check, Star } from 'lucide-react';
import ImageModal from '@/components/ImageModal';
import { ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session6StitchBeach = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'personaje', title: 'Personajele Jocului' },
    { id: 'stitch', title: 'Programarea lui Stitch' },
    { id: 'torturi', title: 'Programarea Torturilor' },
    { id: 'bombe', title: 'Programarea Bombelor' },
    { id: 'conditii', title: 'Condiții de Final' },
    { id: 'challenge', title: 'Provocări' }
  ];

  const resources = [
    { title: 'Platforma Scratch', url: 'https://scratch.mit.edu/' },
    { title: 'Tutoriale Scratch Oficiale', url: 'https://scratch.mit.edu/projects/editor/?tutorial=getStarted' },
    { title: 'Comunitatea Scratch', url: 'https://scratch.mit.edu/explore/projects/all' }
  ];

  return (
    <LessonLayout
      title="Stitch's Beach Adventure in Scratch"
      subtitle="Lecția 6 • Scratch Programming"
      courseId="scratch"
      sessionId="6"
      heroColor="bg-blue-500"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Lecția anterioară",
        path: "/scratch/session5beachballbounce"
      }}
       nextLesson={{
        title: "Lecția următoare",
        path: "/scratch/session7cakequest"
      }}
    >
      <div className="space-y-8">
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4">Povestea jocului</h2>
          <p className="mb-4">
            Stitch, simpaticul extraterestru albastru, s-a hotărât să petreacă o zi relaxantă la plajă. 
            Dar ce zi ar fi completă fără niște delicioase torturi? Din fericire pentru el, pe plajă apar
            torturi zburătoare pe care le poate colecta. Însă, nu totul e roz - printre torturi se ascund 
            și bombe periculoase care îi pot strica ziua!
          </p>
          <p className="mb-6">
            În acest joc captivant, vei controla personajul Stitch, mișcându-l stânga-dreapta pentru a colecta 
            cât mai multe torturi, evitând în același timp bombele. Fiecare tort îți aduce un punct, dar fiecare 
            bombă îți scade două puncte. Poți câștiga dacă aduni 50 de puncte, dar pierzi dacă scorul tău scade sub -5.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <Check className="h-5 w-5 text-blue-600 mr-2" />
                Ce vei învăța
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">✓</div>
                  <span>Controlul personajului cu tastele săgeți</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">✓</div>
                  <span>Animarea personajelor prin schimbarea costumelor</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">✓</div>
                  <span>Generarea de obiecte aleatorii folosind clone</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">✓</div>
                  <span>Detectarea coliziunilor între personaje</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">✓</div>
                  <span>Implementarea unui sistem de scor cu condiții de victorie și înfrângere</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <ImageModal 
                src="https://elearning.techminds-academy.ro/assets/images/scratchproiect7preview.png" 
                alt="Previzualizare joc Stitch's Beach Adventure" 
                className="w-full"
              />
              <div className="p-4 flex flex-col items-center">
                <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
                  <a href="https://scratch.mit.edu/projects/1144880196" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    <span>Încearcă jocul final</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Să începem!</h2>
            <p className="mb-4">
              Proiectul starter conține deja majoritatea personajelor și decorurile. Va trebui doar să adăugăm tortul din biblioteca Scratch și să programăm comportamentul personajelor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
                <a href="https://scratch.mit.edu/projects/1144904430/editor/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Rocket className="h-5 w-5 mr-2" />
                  <span>Deschide proiectul starter</span>
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm flex items-start">
              <Lightbulb className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <p>Sfat: Apasă butonul "Vezi în interior" pentru a putea edita proiectul, apoi "Remixează" pentru a salva propria versiune!</p>
            </div>
          </div>
        </section>

        <section id="personaje">
          <h2 className="text-2xl font-bold mb-4">1. Personajele jocului</h2>
          <p className="mb-4">
            Proiectul starter conține deja majoritatea personajelor necesare. Va trebui să adăugăm doar tortul din biblioteca Scratch:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect7personaje.png" 
              alt="Personajele jocului" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                👽
              </div>
              <div>
                <h4 className="font-bold">Stitch</h4>
                <p className="text-sm text-gray-600">Personajul principal pe care îl vei controla cu săgețile stânga-dreapta.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🍰
              </div>
              <div>
                <h4 className="font-bold">Cake (Tortul)</h4>
                <p className="text-sm text-gray-600">Obiectele pe care trebuie să le colectezi pentru a obține puncte (1 punct per tort).</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                💣
              </div>
              <div>
                <h4 className="font-bold">Bomb (Bomba)</h4>
                <p className="text-sm text-gray-600">Obstacolele care trebuie evitate (-2 puncte per bombă).</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                ➖
              </div>
              <div>
                <h4 className="font-bold">Linie</h4>
                <p className="text-sm text-gray-600">O linie invizibilă în partea stângă pentru a detecta ieșirea obiectelor din ecran.</p>
              </div>
            </div>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Stitch are 20 de costume disponibile care vor fi folosite pentru a crea o animație fluidă. 
              Poți vedea aceste costume selectând personajul și navigând la tab-ul "Costume".
            </p>
          </InfoBox>
          
          <div className="mb-6 mt-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Adăugarea tortului:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li>Apasă pe butonul "Alege un personaj" din colțul din dreapta jos</li>
              <li>Caută "cake" sau "tort" în biblioteca Scratch</li>
              <li>Selectează un tort care îți place și adaugă-l în proiect</li>
            </ol>
          </div>
        </section>

        <section id="stitch">
          <h2 className="text-2xl font-bold mb-4">2. Programarea lui Stitch</h2>
          <p className="mb-4">
            Primul pas este să facem personajul Stitch să se miște stânga-dreapta cu ajutorul tastelor săgeți 
            și să aibă o animație fluidă. Selectează personajul <strong>Stitch</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect7stitch.png" 
              alt="Codul pentru Stitch" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializare</strong> - La începerea jocului, Stitch:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Se poziționează la coordonatele de start (x = -190, y = 0)</li>
                  <li>Se orientează spre dreapta (90 de grade)</li>
                </ul>
              </li>
              <li><strong>Controlul mișcării</strong> - Într-o buclă infinită:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Verifică dacă săgeata stânga este apăsată - mută Stitch cu 5 pași la stânga și îl orientează în direcția corectă (-90 grade)</li>
                  <li>Verifică dacă săgeata dreapta este apăsată - mută Stitch cu 5 pași la dreapta și îl orientează în direcția corectă (90 grade)</li>
                  <li>Verifică dacă Stitch atinge marginea ecranului - în acest caz, ricoșează pentru a evita ieșirea din ecran</li>
                </ul>
              </li>
              <li><strong>Animația personajului</strong> - Într-o buclă separată și paralelă:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Schimbă costumul personajului la următorul disponibil</li>
                  <li>Așteaptă o scurtă perioadă pentru a crea efectul de animație</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Viteza de deplasare a lui Stitch poate fi ajustată modificând valoarea "5" din blocurile "modifică x cu". 
              O valoare mai mare va face personajul să se miște mai rapid.
            </p>
          </InfoBox>
        </section>

        <section id="torturi">
          <h2 className="text-2xl font-bold mb-4">3. Programarea torturilor</h2>
          <p className="mb-4">
            Acum vom programa torturile care vor apărea din partea dreaptă a ecranului și vor aduce puncte când Stitch le atinge. 
            Selectează personajul <strong>Cake</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect7cake.png" 
              alt="Codul pentru tort" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializare</strong> - La începutul jocului:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Ascundem tortul original (vom folosi clone)</li>
                  <li>Setăm scorul la 0</li>
                  <li>Într-o buclă infinită, creăm clone ale tortului la intervale aleatorii (între 2 și 3 secunde)</li>
                </ul>
              </li>
              <li><strong>Comportamentul clonelor</strong> - Când o clonă începe:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Se face vizibilă</li>
                  <li>Se poziționează la o înălțime aleatorie (y aleatoriu) și în afara ecranului în dreapta (x = 250)</li>
                  <li>Se deplasează continuu spre stânga cu o viteză de 4 pași per iterație</li>
                  <li>Verifică constant dacă atinge personajul Stitch - în acest caz adaugă 1 punct la scor și dispare</li>
                  <li>Verifică constant dacă atinge marginea din stânga (Linia) - în acest caz dispare fără a afecta scorul</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="info">
            <p>
              Poți ajusta frecvența de apariție a torturilor modificând intervalul de așteptare (2-3 secunde). 
              Un interval mai mic va face torturile să apară mai des, crescând atât dificultatea cât și șansele de a obține puncte.
            </p>
          </InfoBox>
        </section>

        <section id="bombe">
          <h2 className="text-2xl font-bold mb-4">4. Programarea bombelor</h2>
          <p className="mb-4">
            Similar cu torturile, vom programa bombele care vor apărea din partea dreaptă a ecranului și vor scădea puncte când 
            Stitch le atinge. Selectează personajul <strong>Bomb</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect7bomb.png" 
              alt="Codul pentru bombă" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializare</strong> - La începutul jocului:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Ascundem bomba originală (vom folosi clone)</li>
                  <li>Într-o buclă infinită, creăm clone ale bombei la intervale aleatorii (între 3 și 4 secunde)</li>
                </ul>
              </li>
              <li><strong>Comportamentul clonelor</strong> - Când o clonă începe:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Se face vizibilă</li>
                  <li>Se poziționează la o înălțime aleatorie (y aleatoriu) și în afara ecranului în dreapta (x = 250)</li>
                  <li>Se deplasează continuu spre stânga cu o viteză de 4 pași per iterație</li>
                  <li>Verifică constant dacă atinge personajul Stitch - în acest caz scade 2 puncte din scor și dispare</li>
                  <li>Verifică constant dacă atinge marginea din stânga (Linia) - în acest caz dispare fără a afecta scorul</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h5 className="font-semibold mb-2">Pentru tort (recompensă):</h5>
              <div className="bg-white p-2 rounded-md border border-green-300 text-sm">
                așteaptă [alege aleator între (2) și (3)] secunde
              </div>
              <div className="bg-white p-2 rounded-md border border-green-300 mt-2 text-sm">
                modifică [Scor] cu [1]
              </div>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h5 className="font-semibold mb-2">Pentru bombă (penalizare):</h5>
              <div className="bg-white p-2 rounded-md border border-red-300 text-sm">
                așteaptă [alege aleator între (3) și (4)] secunde
              </div>
              <div className="bg-white p-2 rounded-md border border-red-300 mt-2 text-sm">
                modifică [Scor] cu [-2]
              </div>
            </div>
          </div>
        </section>

        <section id="conditii">
          <h2 className="text-2xl font-bold mb-4">5. Configurarea decorului și condițiilor de final</h2>
          <p className="mb-4">
            În ultimul pas, vom configura decorul pentru a gestiona condițiile de victorie și înfrângere, și vom adăuga 
            muzică de fundal. Selectează <strong>Scena</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect7decor.png" 
              alt="Codul pentru decor" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializare</strong> - La începutul jocului:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Trecem la decorul "play" (plaja unde se desfășoară jocul)</li>
                  <li>Pornim muzica de fundal care va acompania jocul</li>
                </ul>
              </li>
              <li><strong>Condiții de final</strong> - Într-o buclă infinită, verificăm:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Dacă scorul depășește 49 - trecem la decorul "win" pentru a indica victoria</li>
                  <li>Dacă scorul scade sub -5 - trecem la decorul "lose" pentru a indica înfrângerea</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="info">
            <p>
              Decorul conține trei costume diferite: plaja principală ("play"), ecranul de victorie ("win") și ecranul de înfrângere ("lose"). 
              Poți personaliza aceste ecrane de final în tab-ul "Decoruri" pentru a face jocul mai atractiv.
            </p>
          </InfoBox>
        </section>

        <section id="challenge">
          <h2 className="text-2xl font-bold mb-4">6. Testează și îmbunătățește</h2>
          <p className="mb-4">
            Acum ai toate elementele necesare pentru a face jocul funcțional! Apasă steagul verde pentru a testa jocul și vezi cum funcționează.
          </p>

          <Challenge title="Provocări pentru îmbunătățirea jocului" difficulty="medium">
            <p>După ce ai terminat jocul de bază, încearcă aceste îmbunătățiri:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🔊
                </div>
                <div>
                  <h4 className="font-bold">Adaugă efecte sonore</h4>
                  <p className="text-sm text-gray-600">Adaugă sunete pentru colectarea torturilor, lovirea bombelor și pentru finalul jocului.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  ⏱️
                </div>
                <div>
                  <h4 className="font-bold">Adaugă un cronometru</h4>
                  <p className="text-sm text-gray-600">Implementează un timer pentru a limita durata jocului și a crește provocarea.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  📈
                </div>
                <div>
                  <h4 className="font-bold">Crește dificultatea progresiv</h4>
                  <p className="text-sm text-gray-600">Fă obiectele să se miște mai repede pe măsură ce scorul crește.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  ⭐
                </div>
                <div>
                  <h4 className="font-bold">Adaugă power-ups</h4>
                  <p className="text-sm text-gray-600">Creează obiecte speciale care oferă abilități temporare, cum ar fi imunitate la bombe sau puncte bonus.</p>
                </div>
              </div>
            </div>
          </Challenge>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-xl font-bold mb-3">Felicitări!</h2>
          <p className="mb-4">
            Ai creat un joc captivant cu Stitch care colectează torturi pe plajă! Acest proiect ți-a permis să înveți despre
            controlul personajelor, animație, generarea de obiecte aleatorii, detecția coliziunilor și implementarea condițiilor
            de victorie și înfrângere.
          </p>
          <p className="mb-4">
            Acum poți împărtăși jocul cu prietenii și familia, îl poți personaliza adăugând propriile tale idei și 
            îmbunătățiri, și poți folosi aceste concepte pentru a crea alte jocuri similare.
          </p>
          <Button asChild className="bg-cyan-500 hover:bg-cyan-600">
                      <Link to="/scratch/session7cakequest" className="flex items-center">
                        <span>Continuă cu următoarea lecție</span>
                      </Link>
                    </Button>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Session6StitchBeach;
