import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeBlock } from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Play, Rocket, Lightbulb, Check, Star } from 'lucide-react';
import ImageModal from '@/components/ImageModal';
import { ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session4CityRunner = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'personaje', title: 'Personajele Jocului' },
    { id: 'controlul-pisicii', title: 'Controlul pisicii' },
    { id: 'animarea-cladirilor', title: 'Animarea clădirilor' },
    { id: 'diamante', title: 'Programarea diamantelor' },
    { id: 'bombe', title: 'Programarea bombelor' },
    { id: 'linie-margine', title: 'Configurarea liniei' },
    { id: 'challenge', title: 'Provocări' }
  ];

  const resources = [
    { title: 'Platforma Scratch', url: 'https://scratch.mit.edu/' },
    { title: 'Tutoriale Scratch Oficiale', url: 'https://scratch.mit.edu/projects/editor/?tutorial=getStarted' },
    { title: 'Comunitatea Scratch', url: 'https://scratch.mit.edu/explore/projects/all' }
  ];

  return (
    <LessonLayout
      title="Jocul City Runner in Scratch"
      subtitle="Lecția 4 • Scratch Programming"
      courseId="scratch"
      sessionId="4"
      heroColor="bg-amber-500"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Lecția anterioară",
        path: "/scratch/session3motoracer"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/scratch/session5beachballbounce"
      }}
    >
      <div className="space-y-8">
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4">Povestea jocului</h2>
          <p className="mb-4">
            Într-un oraș plin de aventuri, o pisică agilă se aventurează într-o cursă contra cronometru! 
            Personajul nostru principal trebuie să își demonstreze îndemânarea deplasându-se în sus și în jos 
            pentru a colecta diamantele prețioase care îi ies în cale, evitând totodată bombele periculoase.
          </p>
          <p className="mb-6">
            Jocul "City Runner" combină elemente de coordonare, reflexe rapide și strategie într-o experiență captivantă, 
            perfectă pentru a învăța concepte importante de programare în Scratch. Vei crea animații, vei controla personaje, 
            vei genera elemente aleatorii și vei gestiona un sistem de punctaj.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                Ce vei învăța
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Controlul personajului cu tastele de navigare</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Animarea personajului prin schimbarea costumelor</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Generarea de elemente aleatorii care se mișcă</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Detectarea coliziunilor între personaje</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Gestionarea unui sistem de scor cu recompense și penalizări</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <ImageModal 
                src="https://elearning.techminds-academy.ro/assets/images/scratchproiect3preview.png" 
                alt="Previzualizare joc City Runner" 
                className="w-full"
              />
              <div className="p-4 flex flex-col items-center">
                <Button asChild className="w-full bg-amber-500 hover:bg-amber-600">
                  <a href="https://scratch.mit.edu/projects/1144450643" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    <span>Încearcă jocul final</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Să începem!</h2>
            <p className="mb-4">
              Proiectul starter conține deja pisica principală și câteva elemente de decor. 
              Va trebui să adăugăm diamantele și bombele din biblioteca Scratch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600">
                <a href="https://scratch.mit.edu/projects/1144454974/editor/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Rocket className="h-5 w-5 mr-2" />
                  <span>Deschide proiectul starter</span>
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm flex items-start">
              <Lightbulb className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
              <p>Sfat: Apasă butonul "Vezi în interior" pentru a putea edita proiectul, apoi "Remixează" pentru a salva propria versiune!</p>
            </div>
          </div>
        </section>

        <section id="personaje">
          <h2 className="text-2xl font-bold mb-4">1. Personajele jocului</h2>
          <p className="mb-4">
            Proiectul starter conține deja personajele de care ai nevoie:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect3personaje.png" 
              alt="Personajele jocului" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🐱
              </div>
              <div>
                <h4 className="font-bold">Pisica</h4>
                <p className="text-sm text-gray-600">Personajul principal pe care îl vei controla deplasându-l în sus și în jos.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                💎
              </div>
              <div>
                <h4 className="font-bold">Diamant</h4>
                <p className="text-sm text-gray-600">Obiectul care trebuie colectat pentru a obține puncte (1 punct per diamant).</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                💣
              </div>
              <div>
                <h4 className="font-bold">Bombă</h4>
                <p className="text-sm text-gray-600">Obiectul periculos care trebuie evitat (-2 puncte per bombă).</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🏢
              </div>
              <div>
                <h4 className="font-bold">Clădiri</h4>
                <p className="text-sm text-gray-600">Elemente de decor care se deplasează în fundal pentru a crea impresia de mișcare.</p>
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
              Pisica are 3 costume diferite: unul normal (idle), unul orientat în jos și unul orientat în sus. 
              Aceste costume vor fi folosite pentru a anima pisica atunci când se deplasează.
            </p>
          </InfoBox>
        </section>

        <section id="controlul-pisicii">
          <h2 className="text-2xl font-bold mb-4">2. Controlul pisicii</h2>
          <p className="mb-4">
            Primul pas este să facem pisica să se miște în sus și în jos folosind tastele săgeți. 
            Vom adăuga și animație prin schimbarea costumelor. Selectează personajul <strong>Pisica</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect3pisica.png" 
              alt="Codul pentru controlul pisicii" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>La începerea jocului</strong> - pisica se poziționează în partea stângă a ecranului, se face vizibilă și își setează costumul inițial.</li>
              <li><strong>Controlul mișcării</strong> - într-o buclă infinită, verificăm dacă:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Săgeata sus este apăsată - deplasăm pisica în sus și schimbăm costumul la "up"</li>
                  <li>Săgeata jos este apăsată - deplasăm pisica în jos și schimbăm costumul la "down"</li>
                  <li>Nicio tastă nu este apăsată - revenim la costumul normal "idle"</li>
                </ul>
              </li>
              <li><strong>Limitarea mișcării</strong> - ne asigurăm că pisica nu iese din marginile ecranului, verificând poziția ei.</li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Poți ajusta viteza de deplasare a pisicii modificând valoarea din blocurile "modifică y cu 10" și "modifică y cu -10". 
              Un număr mai mare face pisica să se miște mai rapid.
            </p>
          </InfoBox>
        </section>

        <section id="animarea-cladirilor">
          <h2 className="text-2xl font-bold mb-4">3. Animarea clădirilor din fundal</h2>
          <p className="mb-4">
            Pentru a crea un efect de mișcare în joc, vom face clădirile din fundal să se deplaseze de la dreapta la stânga, 
            creând iluzia că pisica aleargă prin oraș. Selectează personajul <strong>Buildings</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect3buildings.png" 
              alt="Codul pentru clădiri" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>La început</strong> - ascundem clădirea originală și pregătim un efect de infinit de clădiri care se vor mișca.</li>
              <li><strong>Generarea clădirilor</strong> - într-o buclă infinită:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Creăm clădiri noi la intervale regulate folosind clonarea</li>
                  <li>Alegem aleatoriu unul din cele 10 costume disponibile pentru varietate</li>
                  <li>Poziționăm clădirea în partea dreaptă a ecranului la o înălțime aleatoare</li>
                </ul>
              </li>
              <li><strong>Comportamentul clădirilor</strong> - fiecare clădire se deplasează de la dreapta la stânga și dispare când atinge marginea din stânga.</li>
            </ol>
          </div>
        </section>

        <section id="diamante">
          <h2 className="text-2xl font-bold mb-4">4. Programarea diamantelor</h2>
          <p className="mb-4">
            Acum vom adăuga diamantele care vor apărea din dreapta ecranului și pe care pisica trebuie 
            să le colecteze pentru a obține puncte. Selectează personajul <strong>Crystal</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect3crystal.png" 
              alt="Codul pentru diamante" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>La început</strong> - ascundem diamantul original și setăm scorul la 0.</li>
              <li><strong>Generarea diamantelor</strong> - într-o buclă infinită:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Creăm diamante noi la intervale aleatorii</li>
                  <li>Poziționăm diamantul în partea dreaptă a ecranului la o înălțime aleatoare</li>
                </ul>
              </li>
              <li><strong>Comportamentul diamantelor</strong> - fiecare diamant:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Se deplasează de la dreapta la stânga</li>
                  <li>Verifică dacă atinge pisica - în acest caz adaugă 1 punct la scor și dispare</li>
                  <li>Dispare și dacă ajunge la marginea din stânga a ecranului</li>
                </ul>
              </li>
            </ol>
          </div>
        </section>

        <section id="bombe">
          <h2 className="text-2xl font-bold mb-4">5. Programarea bombelor</h2>
          <p className="mb-4">
            Similar cu diamantele, vom adăuga bombele pe care pisica trebuie să le evite. 
            Când pisica atinge o bombă, va pierde 2 puncte. Selectează personajul <strong>Bomb</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect3bomb.png" 
              alt="Codul pentru bombe" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>La început</strong> - ascundem bomba originală.</li>
              <li><strong>Generarea bombelor</strong> - într-o buclă infinită:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Creăm bombe noi la intervale aleatorii</li>
                  <li>Poziționăm bomba în partea dreaptă a ecranului la o înălțime aleatoare</li>
                </ul>
              </li>
              <li><strong>Comportamentul bombelor</strong> - fiecare bombă:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Se deplasează de la dreapta la stânga</li>
                  <li>Verifică dacă atinge pisica - în acest caz scade 2 puncte din scor și dispare</li>
                  <li>Dispare și dacă ajunge la marginea din stânga a ecranului</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h5 className="font-semibold mb-2">Pentru diamante:</h5>
              <div className="bg-white p-2 rounded-md border border-green-300 text-sm">
                modifică [Scor] cu [1]
              </div>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h5 className="font-semibold mb-2">Pentru bombe:</h5>
              <div className="bg-white p-2 rounded-md border border-red-300 text-sm">
                modifică [Scor] cu [-2]
              </div>
            </div>
          </div>
        </section>

        <section id="linie-margine">
          <h2 className="text-2xl font-bold mb-4">6. Configurarea liniei pentru detecția marginii</h2>
          <p className="mb-4">
            Pentru a detecta când obiectele ies din ecran prin stânga, vom folosi o linie invizibilă. 
            Acest personaj simplu este deja în proiect, dar trebuie să îl configurăm corect. 
            Selectează personajul <strong>Linie</strong> și verifică următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect3linie.png" 
              alt="Codul pentru linia de margine" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <InfoBox title="Sfat" icon="info" variant="info">
            <p>
              Linia este un personaj foarte simplu care are doar un script pentru a se poziționa corect la începutul jocului.
              Celelalte personaje (diamante, bombe, clădiri) folosesc această linie pentru a detecta 
              când au ajuns la marginea din stânga a ecranului și trebuie să dispară.
            </p>
          </InfoBox>
        </section>

        <section id="challenge">
          <h2 className="text-2xl font-bold mb-4">7. Testează și îmbunătățește</h2>
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
                  <p className="text-sm text-gray-600">Adaugă sunete pentru colectarea diamantelor, lovirea bombelor și pentru fundalul jocului.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🎯
                </div>
                <div>
                  <h4 className="font-bold">Adaugă un sistem de nivele</h4>
                  <p className="text-sm text-gray-600">Mărește viteza de deplasare a obiectelor pe măsură ce scorul crește, pentru a face jocul mai dificil.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🏆
                </div>
                <div>
                  <h4 className="font-bold">Adaugă o condiție de victorie</h4>
                  <p className="text-sm text-gray-600">Creează un nou personaj care să apară când scorul ajunge la 20 (victorie) sau scade sub -10 (înfrângere).</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  ❤️
                </div>
                <div>
                  <h4 className="font-bold">Adaugă un sistem de vieți</h4>
                  <p className="text-sm text-gray-600">În loc să scazi din scor când lovești o bombă, poți implementa un sistem cu 3 vieți.</p>
                </div>
              </div>
            </div>
          </Challenge>
        </section>

        <section className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h2 className="text-xl font-bold mb-3">Felicitări!</h2>
          <p className="mb-4">
            Ai creat un joc captivant de tip "endless runner" în care pisica ta colectează diamante și evită bombe! 
            Acest proiect ți-a permis să înveți despre controlul personajelor, detectarea coliziunilor, generarea de obiecte aleatorii 
            și implementarea unui sistem de punctaj.
          </p>
          <Button asChild className="bg-amber-500 hover:bg-amber-600">
            <Link to="/scratch/session5beachballbounce" className="flex items-center">
              <span>Continuă cu următoarea lecție</span>
            </Link>
          </Button>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Session4CityRunner;
