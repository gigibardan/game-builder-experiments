
import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeBlock } from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Play, Rocket, Lightbulb, Check, Star } from 'lucide-react';
import ImageModal from '@/components/ImageModal';
import { ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session8WizardsQuest = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'personaje', title: 'Personajele Jocului' },
    { id: 'vrajitor', title: 'Programarea Vrăjitorului' },
    { id: 'lilieci', title: 'Programarea Liliecilor' },
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
      title="Wizard's Quest in Scratch"
      subtitle="Lecția 8 • Scratch Programming"
      courseId="scratch"
      sessionId="8"
      heroColor="bg-purple-500"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Lecția anterioară",
        path: "/scratch/session7cakequest"
      }}
      nextLesson={null}
    >
      <div className="space-y-8">
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4">Povestea jocului</h2>
          <p className="mb-4">
            Într-o noapte întunecată, un vrăjitor broscoi și-a pierdut bagheta magică într-un labirint misterios. 
            Fără ea, nu-și poate folosi puterile! Pentru a complica lucrurile, un grup de lilieci periculoși 
            patrulează coridoarele labirintului.
          </p>
          <p className="mb-6">
            În acest joc captivant, vei controla vrăjitorul broscoi prin labirint, încercând să ajungi la bagheta 
            magică înainte ca liliecii să te prindă. Trebuie să te miști cu atenție - atingerea pereților te va 
            trimite înapoi la început, iar întâlnirea cu un liliac va însemna sfârșitul aventurii!
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
                  <span>Controlul personajelor cu tastele săgeți</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                  <span>Detectarea coliziunilor cu pereții folosind culori</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                  <span>Programarea mișcării autonome a inamicilor</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                  <span>Implementarea algoritmului simplu de evitare a obstacolelor</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                  <span>Crearea condițiilor de victorie și înfrângere</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <ImageModal 
                src="../../assets/images/scratchproiect6preview.png" 
                alt="Previzualizare joc Wizard's Quest" 
                className="w-full"
              />
              <div className="p-4 flex flex-col items-center">
                <Button asChild className="w-full bg-purple-500 hover:bg-purple-600">
                  <a href="https://scratch.mit.edu/projects/1144799172" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    <span>Încearcă jocul final</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Să începem!</h2>
            <p className="mb-4">
              Pentru a crea acest joc mai ușor, am pregătit un proiect starter cu personajele și labirintul deja adăugate. 
              Tot ce trebuie să faci este să adaugi codul pentru a le aduce la viață!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-purple-500 hover:bg-purple-600">
                <a href="https://scratch.mit.edu/projects/1144842415/editor/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Rocket className="h-5 w-5 mr-2" />
                  <span>Deschide proiectul starter</span>
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm flex items-start">
              <Lightbulb className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
              <p>Sfat: Apasă butonul "Vezi în interior" pentru a putea edita proiectul, apoi "Remixează" pentru a salva propria versiune!</p>
            </div>
          </div>
        </section>

        <section id="personaje">
          <h2 className="text-2xl font-bold mb-4">1. Personajele jocului</h2>
          <p className="mb-4">
            Proiectul starter conține deja toate personajele de care ai nevoie pentru a crea jocul:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="../../assets/images/scratchproiect6personaje.png" 
              alt="Personajele jocului" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🧙
              </div>
              <div>
                <h4 className="font-bold">Wizard-Toad (Vrăjitorul broscoi)</h4>
                <p className="text-sm text-gray-600">Personajul principal controlat de jucător, care trebuie să traverseze labirintul pentru a ajunge la baghetă.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🦇
              </div>
              <div>
                <h4 className="font-bold">Bat (Liliacul)</h4>
                <p className="text-sm text-gray-600">Inamicii care patrulează labirintul. Sunt trei exemplare cu același cod, dar care pornesc din poziții diferite.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-yellow-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🪄
              </div>
              <div>
                <h4 className="font-bold">Wand (Bagheta)</h4>
                <p className="text-sm text-gray-600">Obiectivul jocului, plasat în centrul labirintului. Când vrăjitorul atinge bagheta, jocul este câștigat.</p>
              </div>
            </div>
          </div>

          <div className="mb-6 mt-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Despre personaje:</h4>
            <ul className="list-disc ml-5 space-y-2">
              <li>Vrăjitorul broscoi este redimensionat la 15% din mărimea sa originală pentru a putea naviga prin labirint.</li>
              <li>Liliacul este redimensionat la 13% din mărimea sa originală pentru a putea naviga prin labirint.</li>
              <li>Liliecii au animație încorporată (bătaie din aripi) și se mișcă autonom prin labirint.</li>
              <li>Bagheta nu are cod și funcționează doar ca obiect static cu care vrăjitorul va interacționa.</li>
            </ul>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Este important ca personajele să aibă dimensiunea potrivită pentru a naviga prin labirint. 
              Un personaj prea mare ar putea bloca jucătorul pe holurile mai înguste.
            </p>
          </InfoBox>
        </section>

        <section id="vrajitor">
          <h2 className="text-2xl font-bold mb-4">2. Programarea vrăjitorului</h2>
          <p className="mb-4">
            Primul pas este să facem vrăjitorul să se miște cu ajutorul tastelor săgeți și să implementăm coliziunea cu 
            pereții labirintului. Selectează personajul <strong>Wizard-Toad</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="../../assets/images/scratchproiect6wizard-toad.png" 
              alt="Codul pentru vrăjitor" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializare</strong> - La începutul jocului, vrăjitorul:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Se face vizibil</li>
                  <li>Se poziționează la coordonatele de start (X 205, Y 157)</li>
                  <li>Se orientează spre dreapta (90 de grade)</li>
                </ul>
              </li>
              <li><strong>Controlul mișcării</strong> - Într-o buclă infinită:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Verifică dacă vrăjitorul atinge culoarea pereților labirintului. Dacă da, îl repoziționează la punctul de start.</li>
                  <li>Verifică dacă vrăjitorul atinge bagheta (Wand). Dacă da, trimite mesajul "win" pentru a anunța victoria.</li>
                  <li>Pentru deplasare, verifică tastele săgeți:
                    <ul className="list-disc ml-5 mt-1">
                      <li>Săgeata sus: se orientează în sus (0 grade) și se deplasează 2 pași</li>
                      <li>Săgeata jos: se orientează în jos (180 grade) și se deplasează 2 pași</li>
                      <li>Săgeata dreapta: se orientează spre dreapta (90 grade) și se deplasează 2 pași</li>
                      <li>Săgeata stânga: se orientează spre stânga (-90 grade) și se deplasează 2 pași</li>
                    </ul>
                  </li>
                  <li>După fiecare deplasare, schimbă la următorul costum pentru a crea animația de mers.</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Poți ajusta viteza vrăjitorului modificând numărul de pași (2) din blocurile de mișcare. 
              Un număr mai mare îl va face să se miște mai repede, dar va crește și riscul de a atinge pereții.
            </p>
          </InfoBox>
        </section>

        <section id="lilieci">
          <h2 className="text-2xl font-bold mb-4">3. Programarea liliecilor</h2>
          <p className="mb-4">
            Acum vom programa liliecii care patrulează labirintul. Ei se vor mișca autonom și vor trebui să evite pereții. 
            Selectează personajul <strong>Bat</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="../../assets/images/scratchproiect6bat.png" 
              alt="Codul pentru liliac" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializare</strong> - La începutul jocului, liliacul:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Se face vizibil</li>
                  <li>Se poziționează la coordonatele specifice (diferite pentru fiecare liliac)</li>
                  <li>Își setează dimensiunea la 13% din mărimea originală</li>
                </ul>
              </li>
              <li><strong>Algoritm de mișcare și evitare a obstacolelor</strong> - Într-o buclă infinită:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Verifică dacă atinge vrăjitorul. Dacă da, trimite mesajul "lose" pentru a anunța înfrângerea.</li>
                  <li>Se deplasează 1 pas înainte</li>
                  <li>Verifică dacă atinge culoarea pereților labirintului. Dacă da:
                    <ul className="list-disc ml-5 mt-1">
                      <li>Se deplasează 1 pas înapoi (pentru a ieși din coliziune)</li>
                      <li>Generează un număr aleatoriu între 1 și 2</li>
                      <li>În funcție de acest număr, se rotește 45 de grade la stânga sau la dreapta pentru a găsi o nouă direcție</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat pentru algoritmul de evitare a obstacolelor" icon="info" variant="info">
            <p>
              Algoritmul folosit pentru evitarea pereților este simplu dar eficient: când liliacul atinge un perete, 
              face un pas înapoi și apoi se rotește aleatoriu la stânga sau la dreapta. Acest comportament îl face să 
              "exploreze" diferite direcții până găsește un drum liber.
            </p>
          </InfoBox>

          <div className="mt-6 mb-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Duplicarea liliecilor:</h4>
            <p>Pentru a avea mai mulți lilieci, poți duplica personajul Bat și modifica doar poziția inițială pentru fiecare copie:</p>
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Bat 1:</strong> x = -154, y = 27</li>
              <li><strong>Bat 2:</strong> x = 181, y = -129</li>
              <li><strong>Bat 3:</strong> x = -182, y = -153</li>
            </ul>
            <p>Restul codului rămâne identic pentru toți liliecii.</p>
          </div>
        </section>

        <section id="decor">
          <h2 className="text-2xl font-bold mb-4">4. Configurarea decorului și condițiilor de final</h2>
          <p className="mb-4">
            În ultimul pas, vom configura decorul pentru a gestiona condițiile de victorie și înfrângere. 
            Selectează <strong>Scena</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="../../assets/images/scratchproiect6scena.png" 
              alt="Codul pentru scena jocului" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializare</strong> - La începutul jocului, scena trece la primul decor (labirintul).</li>
              <li><strong>Condiții de final</strong> - Scena ascultă două mesaje diferite:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Când primește mesajul "win" (de la vrăjitor când atinge bagheta), trece la decorul de victorie.</li>
                  <li>Când primește mesajul "lose" (de la lilieci când ating vrăjitorul), trece la decorul de înfrângere.</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="info">
            <p>
              Decorul conține trei costume diferite: labirintul principal, ecranul de victorie și ecranul de înfrângere. 
              Poți personaliza aceste ecrane de final în tab-ul "Decoruri" pentru a face jocul mai atractiv.
            </p>
          </InfoBox>
        </section>

        <section id="challenge">
          <h2 className="text-2xl font-bold mb-4">5. Testează și îmbunătățește</h2>
          <p className="mb-4">
            Acum că toate elementele jocului sunt implementate, este timpul să îl testezi! Apasă steagul verde și încearcă să 
            ghidezi vrăjitorul până la baghetă, evitând pereții și liliecii.
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
                  <p className="text-sm text-gray-600">Adaugă sunete pentru mișcarea vrăjitorului, coliziunea cu pereții și muzică de fundal potrivită.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  ⏱️
                </div>
                <div>
                  <h4 className="font-bold">Adaugă un cronometru</h4>
                  <p className="text-sm text-gray-600">Implementează un timer care să limiteze timpul disponibil pentru a găsi bagheta.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  💎
                </div>
                <div>
                  <h4 className="font-bold">Adaugă obiecte colectabile</h4>
                  <p className="text-sm text-gray-600">Plasează monede sau cristale magice în labirint pentru a obține puncte bonus.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🏆
                </div>
                <div>
                  <h4 className="font-bold">Creează niveluri multiple</h4>
                  <p className="text-sm text-gray-600">Adaugă mai multe labirinturi cu dificultate crescândă pentru a extinde jocul.</p>
                </div>
              </div>
            </div>
          </Challenge>
        </section>

        <section className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h2 className="text-xl font-bold mb-3">Felicitări!</h2>
          <p className="mb-4">
            Ai creat un joc captivant de tip labirint în care trebuie să ghidezi un vrăjitor pentru a găsi bagheta magică! 
            Acest proiect ți-a permis să înveți despre controlul personajelor, detecția coliziunilor bazată pe culori, 
            mișcarea autonomă a inamicilor și crearea condițiilor de victorie și înfrângere.
          </p>
          <p className="mb-4">
            Acum poți împărtăși jocul cu prietenii și familia, îl poți personaliza adăugând propriile tale idei și 
            îmbunătățiri, și poți folosi aceste concepte pentru a crea alte jocuri similare.
          </p>
          <Button asChild className="bg-purple-500 hover:bg-purple-600">
            <Link to="/scratch" className="flex items-center">
              <span>Înapoi la cursul Scratch</span>
            </Link>
          </Button>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Session8WizardsQuest;
