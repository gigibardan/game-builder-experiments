import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeBlock } from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Play, Rocket, Lightbulb, Check, Star } from 'lucide-react';

const Session2SpaceDodge = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'personaje', title: 'Personajele Jocului' },
    { id: 'controlship', title: 'Controlarea Navei' },
    { id: 'meteoriti', title: 'Crearea Meteoriților' },
    { id: 'elements', title: 'Elemente Decorative' },
    { id: 'scor', title: 'Sistemul de Scor' },
    { id: 'final', title: 'Condiții de Final' },
    { id: 'challenge', title: 'Provocări' }
  ];

  const resources = [
    { title: 'Platforma Scratch', url: 'https://scratch.mit.edu/' },
    { title: 'Tutoriale Scratch Oficiale', url: 'https://scratch.mit.edu/projects/editor/?tutorial=getStarted' },
    { title: 'Comunitatea Scratch', url: 'https://scratch.mit.edu/explore/projects/all' }
  ];

  return (
    <LessonLayout
      title="Jocul Space Dodge in Scratch"
      subtitle="Lecția 2 • Scratch Programming"
      courseId="scratch"
      sessionId="2"
      heroColor="bg-yellow-500"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Lecția anterioară",
        path: "/scratch/session1alegesanatos"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/scratch/session3"
      }}
    >
      <div className="space-y-8">
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4">Povestea jocului</h2>
          <p className="mb-4">
            Într-o galaxie îndepărtată, o navă spațială curajoasă navighează printr-un câmp de meteoriți periculoși. 
            În rolul pilotului, misiunea ta este să manevrezi nava cu îndemânare pentru a evita impactul cu meteoriții 
            care se apropie din toate direcțiile.
          </p>
          <p className="mb-6">
            Jocul "Space Dodge" combină reflexele rapide cu o strategie simplă, într-un mediu cosmic captivant. 
            Pe măsură ce evitezi meteoriții, scorul tău crește, dar și viteza jocului! 
            Cât timp poți supraviețui în adâncimile spațiului?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <Check className="h-5 w-5 text-yellow-600 mr-2" />
                Ce vei învăța
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0">✓</div>
                  <span>Controlul personajelor cu tastele de navigare</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0">✓</div>
                  <span>Animarea personajelor prin schimbarea costumelor</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0">✓</div>
                  <span>Generarea de obstacole care apar aleatoriu</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0">✓</div>
                  <span>Detectarea coliziunilor între personaje</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0">✓</div>
                  <span>Crearea unui efect de parallax pentru elemente de fundal</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <img 
                src="https://elearning.techminds-academy.ro/assets/images/scratchproiect5preview.png" 
                alt="Previzualizare joc Space Dodge" 
                className="w-full object-cover h-48"
              />
              <div className="p-4 flex flex-col items-center">
                <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700">
                  <a href="https://scratch.mit.edu/projects/1144705984" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    <span>Încearcă jocul final</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-yellow-100 to-pink-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Să începem!</h2>
            <p className="mb-4">
              Pentru a crea acest joc mai ușor, am pregătit un proiect starter cu personajele și decorul 
              deja adăugate. Tot ce trebuie să faci este să adaugi codul pentru a le aduce la viață!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600">
                <a href="https://scratch.mit.edu/projects/1144760132/editor/" target="_blank" rel="noopener noreferrer" className="flex items-center">
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
            Proiectul starter conține deja toate personajele de care ai nevoie pentru a crea jocul:
          </p>

          <div className="mb-6 bg-white border rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect5personaje.png" 
              alt="Personajele jocului" 
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🚀
              </div>
              <div>
                <h4 className="font-bold">Ship (Nava)</h4>
                <p className="text-sm text-gray-600">Personajul principal controlat de jucător, care trebuie să evite meteoriții.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                ☄️
              </div>
              <div>
                <h4 className="font-bold">Meteorit</h4>
                <p className="text-sm text-gray-600">Obstacolele principale care urmăresc nava și trebuie evitate.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                ☄️
              </div>
              <div>
                <h4 className="font-bold">Meteorit2</h4>
                <p className="text-sm text-gray-600">Un duplicat al meteoritului, cu același cod dar comportament ușor diferit datorită elementelor aleatorii.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🪐
              </div>
              <div>
                <h4 className="font-bold">Space elements</h4>
                <p className="text-sm text-gray-600">Elemente decorative (planete, stele) care se deplasează în fundal și ricoșează de marginile ecranului.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                ➖
              </div>
              <div>
                <h4 className="font-bold">Linie</h4>
                <p className="text-sm text-gray-600">O linie invizibilă la baza ecranului folosită pentru a detecta când meteoriții ajung la partea inferioară.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Despre personaje:</h4>
            <ul className="list-disc ml-5 space-y-2">
              <li>Nava spațială are 3 costume diferite pentru a crea o animație de propulsie când se deplasează.</li>
              <li>Meteoriții au 2 costume fiecare pentru a adăuga varietate vizuală.</li>
              <li>Elementele spațiale au 4 costume diferite (planete și o navă extraterestră) care apar aleatoriu în fundal.</li>
            </ul>
          </div>

          <InfoBox title="Sfat" icon="info" variant="info">
            <p>
              Poți examina costumele fiecărui personaj accesând tab-ul "Costume" după ce selectezi personajul respectiv în lista de sprite-uri.
            </p>
          </InfoBox>
        </section>

        <section id="controlship">
          <h2 className="text-2xl font-bold mb-4">2. Controlarea navei spațiale</h2>
          <p className="mb-4">
            Primul pas este să facem nava să se miște stânga-dreapta folosind tastele săgeți. 
            Vom adăuga și o animație pentru a face nava să pară că își folosește propulsoarele. 
            Selectează personajul <strong>Ship</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6 bg-white border rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect5ship.png" 
              alt="Codul pentru nava spațială" 
              className="w-full"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializare</strong> - La începutul jocului, nava:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Se face vizibilă</li>
                  <li>Se poziționează în partea de jos a ecranului</li>
                  <li>Se orientează în direcția corectă (în sus)</li>
                  <li>Resetează scorul la 0</li>
                </ul>
              </li>
              <li><strong>Controlul mișcării</strong> - Într-o buclă infinită, verificăm:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Dacă săgeata dreapta este apăsată - deplasăm nava la dreapta (+10)</li>
                  <li>Dacă săgeata stânga este apăsată - deplasăm nava la stânga (-10)</li>
                </ul>
              </li>
              <li><strong>Animația propulsoarelor</strong> - Într-o buclă separată, schimbăm costumul navei la fiecare 0.3 secunde pentru a crea efectul de flacără la propulsoare.</li>
            </ol>
          </div>

          <InfoBox title="Sfat pentru ajustare" icon="info" variant="warning">
            <p>
              Poți ajusta viteza navei modificând valorile "10" și "-10" din blocurile "modifică x cu". 
              O valoare mai mare va face nava să se miște mai rapid, iar o valoare mai mică o va face să se miște mai lent.
            </p>
          </InfoBox>
        </section>

        <section id="meteoriti">
          <h2 className="text-2xl font-bold mb-4">3. Crearea meteoriților</h2>
          <p className="mb-4">
            Acum vom adăuga meteoriții care vor cădea din partea de sus a ecranului. 
            Jucătorul va trebui să îi evite pentru a supraviețui. 
            Selectează personajul <strong>Meteorit</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6 bg-white border rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect5meteorit.png" 
              alt="Codul pentru meteorit" 
              className="w-full"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>La începutul jocului</strong>:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Meteoritul se face vizibil</li>
                  <li>Se setează scorul la 0</li>
                </ul>
              </li>
              <li><strong>Bucla infinită</strong>:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Schimbă costumul la aleatoriu între 1 și 2 pentru varietate vizuală</li>
                  <li>Adaugă 1 punct la scor pentru a măsura progresul jucătorului</li>
                  <li>Se mută meteoriții la o poziție aleatorie în partea de sus a ecranului (y=180)</li>
                  <li>Se setează stilul de rotație stânga-dreapta pentru a menține orientarea corectă</li>
                  <li>Se orientează spre nava jucătorului pentru a crea un efect de urmărire</li>
                </ul>
              </li>
              <li><strong>Mișcare și verificare coliziuni</strong>:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Meteoriții se mișcă 10 pași în direcția stabilită</li>
                  <li>Dacă meteoritul atinge nava, se redă un sunet "Oops" și jocul se termină</li>
                  <li>Dacă atinge linia de jos, revine la partea de sus pentru a începe din nou</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat pentru dificultate" icon="info" variant="info">
            <p>
              Poți duplica personajul Meteorit pentru a avea mai mulți meteoriți pe ecran. 
              Acest lucru va crește dificultatea jocului. În proiectul final, sunt folosiți doi meteoriți 
              cu același cod, dar care vor avea mișcări diferite datorită elementelor aleatorii.
            </p>
          </InfoBox>
        </section>

        <section id="elements">
          <h2 className="text-2xl font-bold mb-4">4. Adăugarea elementelor decorative din spațiu</h2>
          <p className="mb-4">
            Pentru a face jocul mai interesant din punct de vedere vizual, vom adăuga elemente decorative 
            (planete, nave extraterestre) care se vor deplasa în fundal. 
            Selectează personajul <strong>Space elements</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6 bg-white border rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect5elements.png" 
              alt="Codul pentru elementele spațiale" 
              className="w-full"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializare</strong>:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>La începutul jocului, elementul se ascunde</li>
                  <li>Se repetă un ciclu de 4 ori pentru a crea 4 clone diferite</li>
                </ul>
              </li>
              <li><strong>Generarea clonelor</strong>:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Pentru fiecare repetiție, se creează o clonă</li>
                  <li>După fiecare clonă, se trece la costumul următor, astfel încât fiecare clonă să aibă un aspect diferit</li>
                  <li>Clonele se mută la o poziție aleatorie</li>
                </ul>
              </li>
              <li><strong>Comportamentul clonelor</strong>:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Când o clonă începe, se face vizibilă</li>
                  <li>Se orientează într-o direcție aleatorie (1-360 grade)</li>
                  <li>Într-o buclă infinită, elementul se mișcă cu 1 pas în direcția aleasă</li>
                  <li>Dacă atinge marginea ecranului, ricoșează, creând o mișcare continuă și naturală</li>
                </ul>
              </li>
            </ol>
          </div>
        </section>

        <section id="scor">
          <h2 className="text-2xl font-bold mb-4">5. Implementarea sistemului de scor</h2>
          <p className="mb-4">
            În acest pas, vom adăuga un sistem de scor care va crește pe măsură ce jocul continuă. 
            Acest lucru va motiva jucătorul să reziste cât mai mult posibil. 
            Vei adăuga codul pentru scor la personajul <strong>Ship</strong>.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Adaugă aceste blocuri la codul navei:</h4>
            <ol className="list-decimal ml-5 space-y-3">
              <li>Creează o variabilă numită "Scor" din secțiunea "Variabile"</li>
              <li>Adaugă un nou bloc "când se dă click pe steagul verde" cu următorul cod:
                <div className="bg-white mt-2 p-4 rounded-md border border-gray-300">
                  <div className="pl-0">când se dă click pe [steagul verde]</div>
                  <div className="pl-4">setează [Scor] la [0]</div>
                  <div className="pl-4">la infinit</div>
                  <div className="pl-8">așteaptă [1] secunde</div>
                  <div className="pl-8">modifică [Scor] cu [1]</div>
                </div>
              </li>
            </ol>
            
            <p className="mt-4">Acest cod va adăuga câte un punct la scor în fiecare secundă cât timp jocul continuă. Cu cât jucătorul rezistă mai mult, cu atât scorul va fi mai mare!</p>
          </div>

          <InfoBox title="Sfat pentru evoluția dificultății" icon="info" variant="warning">
            <p>
              Poți face jocul mai interesant adăugând logică prin care viteza meteoriților crește pe măsură ce 
              scorul crește, făcând jocul progresiv mai dificil.
            </p>
          </InfoBox>
        </section>

        <section id="final">
          <h2 className="text-2xl font-bold mb-4">6. Implementarea condițiilor de sfârșit de joc</h2>
          <p className="mb-4">
            Ultimul pas este să adăugăm condiții pentru terminarea jocului atunci când nava lovește un meteorit. 
            Vom lucra cu codul existent din personajul <strong>Meteorit</strong>.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Codul pentru sfârșitul jocului:</h4>
            <p className="mb-3">În codul meteoritului, blocul "dacă atinge [Ship]" deja include logica pentru sfârșitul jocului. Când un meteorit atinge nava, se întâmplă următoarele:</p>
            
            <div className="bg-red-50 p-4 rounded-md border border-red-200">
              <div className="pl-0">dacă atinge [Ship] atunci</div>
              <div className="pl-4">spune [Game Over!] pentru [2] secunde</div>
              <div className="pl-4">stop [toate]</div>
            </div>
            
            <p className="mt-3">Acest cod afișează mesajul "Game Over!" și oprește întregul program când nava este lovită de un meteorit.</p>
            
            <h4 className="font-bold mt-4 mb-2">Îmbunătățiri opționale:</h4>
            <ol className="list-decimal ml-5 space-y-1">
              <li>Adaugă efecte sonore pentru coliziune</li>
              <li>Adaugă un efect de explozie pentru navă</li>
              <li>Creează un personaj separat pentru ecranul de Game Over cu un scor final</li>
            </ol>
          </div>
        </section>

        <section id="challenge">
          <h2 className="text-2xl font-bold mb-4">7. Testează și îmbunătățește</h2>
          <p className="mb-4">
            Acum că toate elementele jocului sunt implementate, este timpul să îl testezi! 
            Apasă steagul verde și încearcă să manevrezi nava pentru a evita meteoriții cât mai mult timp posibil.
          </p>

          <Challenge title="Provocări pentru îmbunătățirea jocului" difficulty="medium">
            <p>După ce ai terminat jocul de bază, încearcă aceste îmbunătățiri:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🎮
                </div>
                <div>
                  <h4 className="font-bold">Adaugă niveluri de dificultate</h4>
                  <p className="text-sm text-gray-600">Făcă meteoriții să cadă mai repede și mai des pe măsură ce scorul crește.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🔊
                </div>
                <div>
                  <h4 className="font-bold">Adaugă efecte sonore</h4>
                  <p className="text-sm text-gray-600">Adaugă sunete pentru propulsoare, coliziuni și muzică de fundal potrivită pentru o aventură spațială.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-yellow-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  ⭐
                </div>
                <div>
                  <h4 className="font-bold">Adaugă power-ups</h4>
                  <p className="text-sm text-gray-600">Creează obiecte speciale care pot fi colectate pentru a obține scuturi temporare sau puncte bonus.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  💥
                </div>
                <div>
                  <h4 className="font-bold">Adaugă animații de explozie</h4>
                  <p className="text-sm text-gray-600">Creează efecte vizuale spectaculoase pentru coliziuni și sfârșitul jocului.</p>
                </div>
              </div>
            </div>
          </Challenge>
        </section>

        <section className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
          <h2 className="text-xl font-bold mb-3">Felicitări!</h2>
          <p className="mb-4">
            Ai creat un joc spațial captivant în care trebuie să eviți meteoriți periculoși! 
            Acest proiect ți-a permis să înveți despre controlul personajelor, generarea de obstacole, 
            detecția coliziunilor și crearea efectelor vizuale în Scratch. Acum poți:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <Star className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
              <span><strong>Împărtăși jocul</strong> cu prietenii și familia</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
              <span><strong>Personaliza-l</strong> adăugând propriile tale idei și îmbunătățiri</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
              <span><strong>Folosi</strong> aceste concepte pentru a crea alte jocuri similare</span>
            </li>
          </ul>
          <Button asChild className="bg-indigo-500 hover:bg-indigo-600">
            <Link to="/scratch/session3" className="flex items-center">
              <span>Continuă cu următoarea lecție</span>
            </Link>
          </Button>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Session2SpaceDodge;
