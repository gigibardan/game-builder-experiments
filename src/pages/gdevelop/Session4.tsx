import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { Button } from '@/components/ui/button';
import { Play, Rocket, Lightbulb, Check, Star, Code, Flag, ArrowRight, Car, Trophy } from 'lucide-react';
import ImageModal from '@/components/ImageModal';

const GDevelopRoadRider = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'setup-proiect', title: 'Setup Proiect' },
    { id: 'personaje', title: 'Personajele Jocului' },
    { id: 'configurarea-player', title: 'Configurarea Player-ului' },
    { id: 'configurarea-masini', title: 'Configurarea Mașinilor' },
    { id: 'configurarea-decor', title: 'Configurarea Decorului' },
    { id: 'configurarea-scor', title: 'Configurarea Scorului' },
    { id: 'configurarea-explosie', title: 'Configurarea Exploziei' },
    { id: 'codul-jocului', title: 'Codul Jocului' },
    { id: 'timere-camera', title: 'Timere și Camera' },
    { id: 'controlul-player', title: 'Controlul Player-ului' },
    { id: 'sistemul-trafic', title: 'Sistemul de Trafic' },
    { id: 'copacii-decorativi', title: 'Copacii Decorativi' },
    { id: 'limite-coliziuni', title: 'Limite și Coliziuni' },
    { id: 'scorul-final', title: 'Scorul și Finalizare' },
    { id: 'testare', title: 'Testare și Îmbunătățiri' }
  ];

  const resources = [
    { title: 'Documentația oficială GDevelop', url: 'https://docs.gdevelop.io/' },
    { title: 'Tutorial Objects și Events', url: 'https://wiki.gdevelop.io/gdevelop5/tutorials' },
    { title: 'Ghid Sprites și Animații', url: 'https://wiki.gdevelop.io/gdevelop5/objects/sprite' },
    { title: 'Assets Gratuite pentru Jocuri', url: 'https://opengameart.org/' }
  ];

  return (
    <LessonLayout
      title="Road Rider - Aventura pe Autostradă"
      subtitle="Lecția 4 • GDevelop Programming"
      courseId="gdevelop"
      sessionId="4"
      heroColor="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-500"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Lecția anterioară",
        path: "/gdevelop/session3"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/gdevelop/session5"
      }}
    >
      <div className="space-y-8">
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4">🚗 Povestea jocului Road Rider</h2>
          <p className="mb-4">
            Într-o dimineață însorită, Alex își pornește mașina roșie favorită pentru o aventură pe cea mai aglomerată
            autostradă din oraș. Drumul este plin de provocări - mașini care vin din față cu viteză mare, alte vehicule
            care merg mai încet și pe care trebuie să le depășești, și copaci care trec fulgerător pe margine.
          </p>
          <p className="mb-6">
            Misiunea ta este să îl ajuți pe Alex să navigheze prin acest trafic intens! Folosește-ți reflexele rapide
            pentru a schimba benzile și a evita coliziunile. Cu cât rezişti mai mult timp pe drum, cu atât scorul tău
            va fi mai mare. Dar atenție - o singură greșeală și... BOOM! 💥
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <Check className="h-5 w-5 text-blue-600 mr-2" />
                Ce vei învăța
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">✓</div>
                  <span>Crearea unui joc infinite runner cu vedere top-down</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">✓</div>
                  <span>Implementarea controlului cu săgețile pentru schimbarea benzilor</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">✓</div>
                  <span>Crearea unui sistem complex de trafic cu 4 tipuri de mașini</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">✓</div>
                  <span>Folosirea timerelor pentru spawn-uri aleatorii</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">✓</div>
                  <span>Detectarea coliziunilor și efecte de explozie</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">✓</div>
                  <span>Crearea efectelor decorative pentru imersiune</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <ImageModal
                src="/assets/images/gdevelop/RoadRider/Imagine-din-joc.png"
                alt="Previzualizare joc Road Rider"
                className="w-full"
              />
              <div className="p-4 flex flex-col items-center">
               
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3 flex items-center">
              <Rocket className="h-6 w-6 mr-2" />
              Să începem aventura!
            </h2>
            <p className="mb-4">
              În acest tutorial, vei învăța să creezi un joc complet de curse auto cu mecanici avansate.
              Vom construi totul pas cu pas, de la configurarea personajelor până la implementarea
              sistemului complex de trafic și efectele vizuale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
                <a href="\assets\images\gdevelop\RoadRider\Road-Rider-Assets.zip" download className="flex items-center">
                  <span>Descarcă assets-urile</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600">
                <a href="\assets\proiecte finale\Gdevelop\Road-Rider.json" download className="flex items-center">
                  <span>Descarcă proiectul final</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm flex items-start">
              <Lightbulb className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Important:</strong> Pentru acest tutorial vei avea nevoie de assets-urile grafice.
                Descarcă arhiva de mai sus și extrage-o în folderul proiectului tău GDevelop.
              </p>
            </div>
          </div>
        </section>

        <section id="setup-proiect">
          <h2 className="text-2xl font-bold mb-4">🛠️ Setup-ul proiectului</h2>
          <p className="mb-4">
            Să începem prin a crea un proiect nou în GDevelop și să configurăm structura de bază
            pentru jocul nostru Road Rider.
          </p>

          <StepItem number={1} title="Creează un proiect nou">
            <p>Deschide GDevelop și selectează <strong className="text-blue-600">Create a new project</strong>.</p>
            <p className="mt-2">Alege opțiunea <strong className="text-blue-600">Empty Game</strong> și salvează-l cu numele <code className="bg-gray-100 px-2 py-1 rounded">RoadRider</code>.</p>
          </StepItem>

          <StepItem number={2} title="Importă assets-urile">
            <p>Extrage arhiva cu imaginile în folderul proiectului tău. Vei avea nevoie de următoarele fișiere:</p>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="bg-red-50 p-2 rounded border">🔴 Player.png</div>
              <div className="bg-blue-50 p-2 rounded border">🔵 BlueCar.png</div>
              <div className="bg-pink-50 p-2 rounded border">🌸 PinkCar.png</div>
              <div className="bg-green-50 p-2 rounded border">🟢 GreenCar.png</div>
              <div className="bg-gray-50 p-2 rounded border">⚫ GrayCar.png</div>
              <div className="bg-green-50 p-2 rounded border">🌳 Tree.png</div>
              <div className="bg-gray-50 p-2 rounded border">🛣️ Highway.png</div>
              <div className="bg-orange-50 p-2 rounded border">💥 Explosion frames</div>
            </div>
          </StepItem>

          <InfoBox title="Organizarea assets-urilor" icon="info" variant="primary">
            Asigură-te că toate imaginile sunt în folderul proiectului pentru a putea fi accesate ușor
            când vei adăuga obiectele în scenă.
          </InfoBox>
        </section>

        <section id="personaje">
          <h2 className="text-2xl font-bold mb-4">🎮 Personajele jocului</h2>
          <p className="mb-4">
            Să vedem toate obiectele de care avem nevoie pentru jocul nostru. Fiecare are un rol specific
            în crearea experienței complete de joc.
          </p>

          <div className="mb-6">
            <ImageModal
              src="/assets/images/gdevelop/RoadRider/sceneObjscts-personajele.png"
              alt="Lista personajelor din joc"
              caption="Lista completă a obiectelor din jocul Road Rider"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mr-3 shrink-0">
                🚗
              </div>
              <div>
                <h4 className="font-bold">Player</h4>
                <p className="text-sm text-gray-600">Mașina roșie controlată de jucător. Se poate mișca stânga-dreapta între benzile autostrazii.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mr-3 shrink-0">
                🚙
              </div>
              <div>
                <h4 className="font-bold">BlueCar</h4>
                <p className="text-sm text-gray-600">Mașină din LeftGroup - vine cu spatele (o ajungem din urmă), viteza 150 px/s.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mr-3 shrink-0">
                🚗
              </div>
              <div>
                <h4 className="font-bold">PinkCar</h4>
                <p className="text-sm text-gray-600">Mașină din RightGroup - vine cu fața spre noi, viteza 400 px/s.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mr-3 shrink-0">
                🚐
              </div>
              <div>
                <h4 className="font-bold">GreenCar</h4>
                <p className="text-sm text-gray-600">Mașină din RightGroup - vine cu fața spre noi, viteza 400 px/s.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mr-3 shrink-0">
                🚙
              </div>
              <div>
                <h4 className="font-bold">GrayCar</h4>
                <p className="text-sm text-gray-600">Mașină din LeftGroup - vine cu spatele (o ajungem din urmă), viteza 150 px/s.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mr-3 shrink-0">
                📊
              </div>
              <div>
                <h4 className="font-bold">scor</h4>
                <p className="text-sm text-gray-600">Obiect text care afișează scorul current al jucătorului.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mr-3 shrink-0">
                🌳
              </div>
              <div>
                <h4 className="font-bold">Tree</h4>
                <p className="text-sm text-gray-600">Copaci decorativi care se mișcă pe laterale pentru efectul de viteză.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mr-3 shrink-0">
                💥
              </div>
              <div>
                <h4 className="font-bold">Explosion</h4>
                <p className="text-sm text-gray-600">Animația de explozie care apare când Player lovește o altă mașină.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mr-3 shrink-0">
                🛣️
              </div>
              <div>
                <h4 className="font-bold">Highway</h4>
                <p className="text-sm text-gray-600">Fundalul autostrazii cu 4 benzi de circulație delimitate cu linii.</p>
              </div>
            </div>
          </div>

          <InfoBox title="Grupurile de mașini" icon="star" variant="secondary">
            <p className="mb-2">Mașinile sunt împărțite în două grupe principale:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>LeftGroup (BlueCar, GrayCar):</strong> Vin cu spatele, viteza 150 px/s - le ajungem din urmă</li>
              <li><strong>RightGroup (PinkCar, GreenCar):</strong> Vin cu fața spre noi, viteza 400 px/s - trebuie evitate rapid</li>
            </ul>
          </InfoBox>
        </section>

        <section id="configurarea-player">
          <h2 className="text-2xl font-bold mb-4">🚗 Configurarea Player-ului</h2>
          <p className="mb-4">
            Să începem cu configurarea mașinii jucătorului. Aceasta va fi mașina roșie pe care o controlezi
            pentru a evita traficul.
          </p>

          <StepItem number={1} title="Adaugă obiectul Player">
            <p>În panoul <strong>Scene Objects</strong> din dreapta, apasă butonul <strong className="text-blue-600">+</strong> pentru a adăuga un obiect nou.</p>
            <p className="mt-2">Selectează <strong>Sprite</strong> și denumește-l <code className="bg-red-100 px-2 py-1 rounded">Player</code>.</p>
            <p className="mt-2">Adaugă imaginea <code>Player.png</code> ca sprite pentru acest obiect.</p>
          </StepItem>

          <StepItem number={2} title="Adaugă comportamentul TopDownMovement">
            <p>Fă dublu-click pe obiectul <strong>Player</strong> pentru a-l edita.</p>
            <p className="mt-2">Navighează la tab-ul <strong className="text-blue-600">Behaviors</strong>.</p>
            <p className="mt-2">Apasă <strong>Add a behavior</strong> și selectează <strong className="text-green-600">TopDownMovement (4 or 8 directions)</strong>.</p>
          </StepItem>

          <div className="mb-6">
            <ImageModal
              src="/assets/images/gdevelop/RoadRider/behavior-cars.png"
              alt="Configurarea comportamentului TopDownMovement"
              caption="Adăugarea comportamentului TopDownMovement pentru Player"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <StepItem number={3} title="Configurează setările de mișcare">
            <p>În setările comportamentului TopDownMovement, configurează următoarele valori:</p>
            <div className="mt-3 bg-blue-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Acceleration:</strong> 400 px·s⁻²</li>
                <li><strong>Deceleration:</strong> 400 px·s⁻²</li>
                <li><strong>Max. speed:</strong> 200 px·s⁻¹</li>
                <li><strong>Allow diagonals:</strong> ❌ (Debifat - doar stânga/dreapta)</li>
                <li><strong>Rotate object:</strong> ❌ (Debifat - mașina rămâne cu fața în sus)</li>
              </ul>
            </div>
          </StepItem>

          <InfoBox title="De ce aceste setări?" icon="info" variant="warning">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>Fără diagonale:</strong> Jucătorul se poate mișca doar stânga-dreapta între benzi</li>
              <li><strong>Fără rotație:</strong> Mașina rămâne întotdeauna orientată către partea de sus a ecranului</li>
              <li><strong>Viteză moderată:</strong> Permite control precis pentru evitarea obstacolelor</li>
            </ul>
          </InfoBox>
        </section>

        <section id="configurarea-masini">
          <h2 className="text-2xl font-bold mb-4">🚙 Configurarea mașinilor de trafic</h2>
          <p className="mb-4">
            Acum să adăugăm cele 4 tipuri de mașini care vor forma traficul pe autostradă.
            Fiecare va avea același comportament de bază, dar viteze diferite.
          </p>

          <StepItem number={1} title="Adaugă toate mașinile">
            <p>Pentru fiecare mașină, repetă procesul:</p>
            <div className="mt-3 bg-gray-50 p-4 rounded-lg">
              <ol className="list-decimal list-inside space-y-2">
                <li>Apasă <strong>+</strong> în Scene Objects</li>
                <li>Selectează <strong>Sprite</strong></li>
                <li>Denumește obiectul (<code>BlueCar</code>, <code>PinkCar</code>, <code>GreenCar</code>, <code>GrayCar</code>)</li>
                <li>Adaugă imaginea corespunzătoare</li>
              </ol>
            </div>
          </StepItem>

          <StepItem number={2} title="Adaugă comportamentul TopDownMovement la toate">
            <p>Pentru <strong>fiecare</strong> mașină, adaugă comportamentul <strong>TopDownMovement</strong> cu aceleași setări ca la Player:</p>
            <div className="mt-3 bg-yellow-50 p-4 rounded-lg">
              <ul className="space-y-1">
                <li><strong>Acceleration:</strong> 400 px·s⁻²</li>
                <li><strong>Deceleration:</strong> 400 px·s⁻²</li>
                <li><strong>Max. speed:</strong> 200 px·s⁻¹</li>
                <li><strong>Allow diagonals:</strong> ❌</li>
                <li><strong>Rotate object:</strong> ❌</li>
              </ul>
            </div>
          </StepItem>

          <InfoBox title="De ce același comportament?" icon="info" variant="info">
            Toate mașinile au același comportament de bază, dar vitezele lor vor fi controlate prin cod.
            Vom folosi forțe pentru a le mișca cu viteze diferite pe axa Y.
          </InfoBox>

          <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 mb-2">📝 Recap: Mașinile adăugate</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <strong>LeftGroup (mai lente):</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>BlueCar 🔵</li>
                  <li>GrayCar ⚫</li>
                </ul>
              </div>
              <div>
                <strong>RightGroup (mai rapide):</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>PinkCar 🌸</li>
                  <li>GreenCar 🟢</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="configurarea-decor">
          <h2 className="text-2xl font-bold mb-4">🌳 Configurarea decorului</h2>
          <p className="mb-4">
            Să adăugăm elementele decorative care vor face jocul să pară mai realist și dinamic.
          </p>

          <StepItem number={1} title="Adaugă Highway (autostrada)">
            <p>Creează un obiect <strong>Tiled Sprite</strong> și denumește-l <code className="bg-gray-100 px-2 py-1 rounded">Highway</code>.</p>
            <p className="mt-2">Adaugă imaginea <code>Highway.png</code> - aceasta va fi fundalul cu benzile autostrazii.</p>
            <p className="mt-2">Extinde-l să acopere întreaga scenă verticală pentru a crea drumul continuu.</p>
          </StepItem>

          <StepItem number={2} title="Adaugă Tree (copacii)">
            <p>Creează un obiect <strong>Sprite</strong> și denumește-l <code className="bg-green-100 px-2 py-1 rounded">Tree</code>.</p>
            <p className="mt-2">Adaugă imaginea <code>Tree.png</code> - aceștia vor fi copacii decorativi de pe marginile drumului.</p>
            <p className="mt-2">Poziționează un exemplu pe marginea stângă și unul pe marginea dreaptă a scenei.</p>
          </StepItem>

          <StepItem number={3} title="Configurează straturile (Z-order)">
            <p>Pentru ca obiectele să apară în ordinea corectă:</p>
            <div className="mt-3 bg-blue-50 p-4 rounded-lg">
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>Highway</strong> - cel mai din spate (fundalul)</li>
                <li><strong>Tree</strong> - în mijloc (decorativ)</li>
                <li><strong>Mașinile</strong> - în față (gameplay principal)</li>
                <li><strong>scor</strong> - cel mai în față (interfața)</li>
              </ol>
            </div>
          </StepItem>

          <InfoBox title="Rolul copacilor" icon="star" variant="secondary">
            Copacii nu sunt doar decorativi! Prin mișcarea lor de sus în jos, ei creează iluzia de viteză
            și ajută jucătorul să simtă că se deplasează rapid pe autostradă.
          </InfoBox>
        </section>

        <section id="configurarea-scor">
          <h2 className="text-2xl font-bold mb-4">📊 Configurarea scorului</h2>
          <p className="mb-4">
            Să adăugăm sistemul de scor care va urmări performanța jucătorului pe parcursul jocului.
          </p>

          <StepItem number={1} title="Adaugă obiectul text pentru scor">
            <p>Creează un obiect <strong>Text</strong> și denumește-l <code className="bg-blue-100 px-2 py-1 rounded">scor</code>.</p>
          </StepItem>

          <StepItem number={2} title="Configurează aspectul textului">
            <div className="mb-4">
              <ImageModal
                src="/assets/images/gdevelop/RoadRider/scor-text.png"
                alt="Configurarea obiectului text pentru scor"
                caption="Setările pentru obiectul text care afișează scorul"
                className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              />
            </div>
            <p>În tab-ul <strong>Properties</strong> al obiectului scor, configurează:</p>
            <div className="mt-3 bg-green-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Size:</strong> 40 (mărimea fontului)</li>
                <li><strong>Color:</strong> Verde (sau o culoare vizibilă pe fundal)</li>
                <li><strong>Bold:</strong> ✅ (pentru vizibilitate mai bună)</li>
                <li><strong>Initial text to display:</strong> <code>Scor: 0</code></li>
              </ul>
            </div>
          </StepItem>

          <StepItem number={3} title="Poziționează scorul pe scenă">
            <p>Plasează obiectul scor în colțul din stânga sus al scenei, unde va fi ușor vizibil în timpul jocului.</p>
            <p className="mt-2">Asigură-te că este poziționat într-un loc care nu interferează cu gameplay-ul.</p>
          </StepItem>

          <InfoBox title="Design UI" icon="info" variant="primary">
            Scorul trebuie să fie vizibil permanent dar să nu distragă atenția de la gameplay.
            O poziție în colțul din stânga sus sau dreapta sus este ideală.
          </InfoBox>
        </section>

        <section id="configurarea-explosie">
          <h2 className="text-2xl font-bold mb-4">💥 Configurarea exploziei</h2>
          <p className="mb-4">
            Să creăm efectul spectacular de explozie care va apărea când mașina jucătorului
            lovește o altă mașină din trafic.
          </p>

          <StepItem number={1} title="Adaugă obiectul Explosion">
            <p>Creează un obiect <strong>Sprite</strong> și denumește-l <code className="bg-orange-100 px-2 py-1 rounded">Explosion</code>.</p>
          </StepItem>

          <StepItem number={2} title="Configurează animația exploziei">
            <div className="mb-4">
              <ImageModal
                src="/assets/images/gdevelop/RoadRider/explosion.png"
                alt="Configurarea animației de explozie"
                caption="Cele 7 frame-uri ale animației de explozie"
                className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              />
            </div>
            <p>În tab-ul <strong>Properties</strong> al obiectului Explosion:</p>
            <div className="mt-3 bg-orange-50 p-4 rounded-lg">
              <ol className="list-decimal list-inside space-y-2">
                <li>Adaugă toate cele <strong>7 frame-uri</strong> ale exploziei în ordinea corectă</li>
                <li>Setează <strong>Time between frames:</strong> 0.1 secunde pentru o animație rapidă</li>
                <li>Debifează <strong>Loop</strong> - animația să se joace o singură dată</li>
                <li>Setează <strong>Speed scale:</strong> 1.0 pentru viteză normală</li>
              </ol>
            </div>
          </StepItem>

          <StepItem number={3} title="Poziționare inițială">
            <p>Plasează obiectul Explosion undeva pe scenă, dar în afara zonei de joc.</p>
            <p className="mt-2">Acesta va fi creat dinamic prin cod când se produce o coliziune.</p>
          </StepItem>

          <InfoBox title="Animația exploziei" icon="star" variant="warning">
            Explozia va fi creată automat la poziția coliziunii și va dispărea după ce
            animația se termină. Acest efect adaugă impact vizual momentului pierderii.
          </InfoBox>
        </section>

        <section id="codul-jocului">
          <h2 className="text-2xl font-bold mb-4">🧠 Codul jocului - Logica principală</h2>
          <p className="mb-4">
            Acum că avem toate obiectele configurate, să implementăm logica jocului pas cu pas.
            Vom împărți codul în secțiuni logice pentru o înțelegere mai bună.
          </p>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold mb-3">📋 Planul de implementare</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">🚀 Partea 1 - Baza jocului:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Timere și camera</li>
                  <li>Controlul player-ului</li>
                  <li>Limitele autostrazii</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🚗 Partea 2 - Traficul:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Sistemul de spawn al mașinilor</li>
                  <li>Mișcarea în grupe</li>
                  <li>Coliziunile și Game Over</li>
                </ul>
              </div>
            </div>
          </div>

          <InfoBox title="Organizarea codului" icon="star" variant="secondary">
            În GDevelop, vom organiza codul în <strong>Events</strong> (evenimente). Fiecare eveniment
            are condiții și acțiuni. Vom grupa evenimentele pe funcționalități pentru claritate.
          </InfoBox>
        </section>

        <section id="timere-camera">
          <h2 className="text-2xl font-bold mb-4">⏰ Partea 1: Timere și camera</h2>
          <p className="mb-4">
            Să începem cu configurarea inițială: timerele pentru spawn-uri și centrarea camerei.
          </p>

          <div className="mb-6">
            <ImageModal
              src="/assets/images/gdevelop/RoadRider/part1.png"
              alt="Codul pentru timere și camera"
              caption="Configurarea inițială: timere, camera și controlul player-ului"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <StepItem number={1} title="Eveniment: At the beginning of the scene">
            <p>Creează primul eveniment cu condiția <strong className="text-blue-600">At the beginning of the scene</strong>.</p>
            <p className="mt-2">Adaugă următoarele acțiuni:</p>
            <div className="mt-3 bg-blue-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Start (or reset) the timer "TreeTimer"</strong> - pentru spawn-ul copacilor</li>
                <li><strong>Start (or reset) the timer "TrafficTimer"</strong> - pentru spawn-ul mașinilor</li>
                <li><strong>Center camera on Highway</strong> (layer: Base layer) - centrează camera pe autostradă</li>
              </ul>
            </div>
          </StepItem>

          <InfoBox title="Rolul timerelor" icon="info" variant="info">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>TreeTimer:</strong> Controlează la ce interval apar copacii decorativi</li>
              <li><strong>TrafficTimer:</strong> Controlează la ce interval apar mașinile de trafic</li>
              <li><strong>Camera:</strong> Rămâne centrată pe autostradă pentru o vedere optimă</li>
            </ul>
          </InfoBox>
        </section>

        <section id="controlul-player">
          <h2 className="text-2xl font-bold mb-4">🎮 Partea 2: Controlul Player-ului</h2>
          <p className="mb-4">
            Să implementăm sistemul de control pentru mașina jucătorului - mișcarea stânga/dreapta și rotația.
          </p>

          <StepItem number={1} title="Eveniment: 'Left' key is pressed">
            <p>Creează un eveniment cu condiția <strong className="text-green-600">"Left" key is pressed</strong>.</p>
            <p className="mt-2">Adaugă acțiunile:</p>
            <div className="mt-3 bg-green-50 p-4 rounded-lg">
              <ul className="space-y-1">
                <li><strong>Simulate pressing Left for Player</strong> - activează mișcarea la stânga</li>
                <li><strong>Rotate Player towards -30 at speed 60 deg/second</strong> - rotație ușoară</li>
              </ul>
            </div>
          </StepItem>

          <StepItem number={2} title="Eveniment: 'Right' key is pressed">
            <p>Creează un eveniment cu condiția <strong className="text-green-600">"Right" key is pressed</strong>.</p>
            <p className="mt-2">Adaugă acțiunile:</p>
            <div className="mt-3 bg-green-50 p-4 rounded-lg">
              <ul className="space-y-1">
                <li><strong>Rotate Player towards 30 at speed 60 deg/second</strong> - rotație ușoară dreapta</li>
                <li><strong>Simulate pressing Right for Player</strong> - activează mișcarea la dreapta</li>
              </ul>
            </div>
          </StepItem>

          <StepItem number={3} title="Sub-eveniment: Ambele taste apăsate">
            <p>Sub evenimentul "Right", adaugă un <strong>sub-eveniment</strong> cu condiția:</p>
            <div className="mt-2 bg-yellow-50 p-3 rounded-lg">
              <p><strong>"Right" key is pressed</strong> AND <strong>"Left" key is pressed</strong></p>
            </div>
            <p className="mt-2">Acțiune: <strong>Rotate Player towards 0 at speed 90 deg/second</strong> - revine la poziția centrală</p>
          </StepItem>

          <InfoBox title="De ce rotația?" icon="star" variant="warning">
            Rotația ușoară a mașinii când se mișcă stânga/dreapta face controlul să pară mai natural,
            ca și cum mașina chiar schimbă benzile pe o autostradă reală.
          </InfoBox>
        </section>

        <section id="sistemul-trafic">
          <h2 className="text-2xl font-bold mb-4">🚗 Partea 3: Sistemul de trafic</h2>
          <p className="mb-4">
            Acum implementăm partea cea mai complexă - sistemul care generează mașinile de trafic
            în cele două grupe cu viteze diferite.
          </p>

          <div className="mb-6">
            <ImageModal
              src="/assets/images/gdevelop/RoadRider/part2.png"
              alt="Codul pentru sistemul de trafic"
              caption="Logica complexă de spawn pentru cele 4 tipuri de mașini"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <StepItem number={1} title="Eveniment: Timer TrafficTimer ≥ 3 seconds">
            <p>Creează evenimentul principal pentru spawn-ul traficului:</p>
            <div className="mt-2 bg-blue-50 p-4 rounded-lg">
              <p><strong>Condiție:</strong> The timer "TrafficTimer" ≥ 3 seconds</p>
              <p><strong>Acțiuni:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Change the variable CarLeft: set to RandomInRange(1, 2)</li>
                <li>Change the variable CarRight: set to RandomInRange(1, 2)</li>
                <li>Start (or reset) the timer "TrafficTimer"</li>
              </ul>
            </div>
          </StepItem>

          <StepItem number={2} title="Sub-evenimente pentru LeftGroup (CarLeft)">
            <p>Adaugă 2 sub-evenimente pentru spawn-ul mașinilor lente:</p>

            <div className="mt-3 space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">CarLeft = 1 → BlueCar</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Condiție:</strong> The variable CarLeft = 1</li>
                  <li><strong>Acțiune:</strong> Create object BlueCar at position 405;-500 (layer: Base layer)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">CarLeft = 2 → GrayCar</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Condiție:</strong> The variable CarLeft = 2</li>
                  <li><strong>Acțiune:</strong> Create object GrayCar at position 535;-500 (layer: Base layer)</li>
                </ul>
              </div>
            </div>
          </StepItem>

          <StepItem number={3} title="Sub-evenimente pentru RightGroup (CarRight)">
            <p>Adaugă 2 sub-evenimente pentru spawn-ul mașinilor rapide:</p>

            <div className="mt-3 space-y-4">
              <div className="bg-pink-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">CarRight = 1 → GreenCar</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Condiție:</strong> The variable CarRight = 1</li>
                  <li><strong>Acțiune:</strong> Create object GreenCar at position 660;-500 (layer: Base layer)</li>
                </ul>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">CarRight = 2 → PinkCar</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Condiție:</strong> The variable CarRight = 2</li>
                  <li><strong>Acțiune:</strong> Create object PinkCar at position 795;-500 (layer: Base layer)</li>
                </ul>
              </div>
            </div>
          </StepItem>

          <InfoBox title="Logica spawn-ului" icon="star" variant="secondary">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>La fiecare 3 secunde</strong> se generează aleatoriu câte o mașină din fiecare grupă</li>
              <li><strong>Pozițiile X</strong> corespund celor 4 benzi ale autostrazii</li>
              <li><strong>Poziția Y -500</strong> înseamnă că apar deasupra ecranului și coboară</li>
              <li><strong>RandomInRange(1,2)</strong> alege aleatoriu între cele 2 mașini din fiecare grupă</li>
            </ul>
          </InfoBox>
        </section>

        <section id="copacii-decorativi">
          <h2 className="text-2xl font-bold mb-4">🌳 Partea 4: Copacii decorativi</h2>
          <p className="mb-4">
            Să adăugăm copacii care creează efectul de viteză pe marginile autostrazii.
          </p>

          <div className="mb-6">
            <ImageModal
              src="/assets/images/gdevelop/RoadRider/part3.png"
              alt="Codul pentru copacii decorativi"
              caption="Sistemul de spawn și mișcare pentru copacii decorativi"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <StepItem number={1} title="Eveniment: Timer TreeTimer ≥ 1.5 seconds">
            <p>Creează evenimentul pentru spawn-ul copacilor:</p>
            <div className="mt-2 bg-green-50 p-4 rounded-lg">
              <p><strong>Condiție:</strong> The timer "TreeTimer" ≥ 1.5 seconds</p>
              <p><strong>Acțiuni:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Create object Tree at position 65;-500 (stânga)</li>
                <li>Create object Tree at position 1055;-300 (dreapta)</li>
                <li>Start (or reset) the timer "TreeTimer"</li>
              </ul>
            </div>
          </StepItem>

          <StepItem number={2} title="Eveniment: Mișcarea copacilor">
            <p>Adaugă logica pentru mișcarea copacilor în jos:</p>
            <div className="mt-2 bg-green-50 p-4 rounded-lg">
              <p><strong>Acțiuni permanente (fără condiții):</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Add to Tree an instant force of 0 p/s on X axis and 300 p/s on Y axis</li>
                <li>Add to LeftGroup an instant force of 0 p/s on X axis and 150 p/s on Y axis</li>
                <li>Add to RightGroup an instant force of 0 p/s on X axis and 400 p/s on Y axis</li>
                <li>Change the z-order of Traffic: set to 2</li>
              </ul>
            </div>
          </StepItem>

          <InfoBox title="Vitezele diferite" icon="info" variant="info">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>Tree (300 p/s):</strong> Viteza moderată pentru efectul de fundal</li>
              <li><strong>LeftGroup (150 p/s):</strong> Mașini lente pe care le ajungem din urmă</li>
              <li><strong>RightGroup (400 p/s):</strong> Mașini rapide care vin spre noi</li>
              <li><strong>Z-order 2:</strong> Asigură că mașinile sunt deasupra copacilor</li>
            </ul>
          </InfoBox>
        </section>

        <section id="limite-coliziuni">
          <h2 className="text-2xl font-bold mb-4">🚧 Partea 5: Limite și coliziuni</h2>
          <p className="mb-4">
            Să implementăm limitele autostrazii și sistemul de coliziuni cu Game Over.
          </p>

          <div className="mb-6">
            <ImageModal
              src="/assets/images/gdevelop/RoadRider/part4.png"
              alt="Codul pentru limite și coliziuni"
              caption="Limitele player-ului și detectarea coliziunilor pentru Game Over"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <StepItem number={1} title="Limitele autostrazii">
            <p>Adaugă evenimente pentru a împiedica Player-ul să iasă de pe autostradă:</p>

            <div className="mt-3 space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Limita stângă</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Condiție:</strong> The X position of Player &lt; 330</li>
                  <li><strong>Acțiune:</strong> Add to Player an instant force of 200 p/s on X axis and 0 p/s on Y axis</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Limita dreaptă</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Condiție:</strong> The X position of Player &gt; 870</li>
                  <li><strong>Acțiune:</strong> Add to Player an instant force of -200 p/s on X axis and 0 p/s on Y axis</li>
                </ul>
              </div>
            </div>
          </StepItem>

          <StepItem number={2} title="Detectarea coliziunilor">
            <p>Adaugă evenimentul pentru coliziunea cu mașinile de trafic:</p>
            <div className="mt-2 bg-orange-50 p-4 rounded-lg">
              <p><strong>Condiție:</strong> Player is in collision with Traffic</p>
              <p><strong>Acțiuni:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Create object Explosion at position Player.X();Player.Y() (layer: Base layer)</li>
                <li>Delete Player</li>
                <li>Pause the scene and start "Game"</li>
              </ul>
            </div>
          </StepItem>

          <InfoBox title="Logica limitelor" icon="warning" variant="warning">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>Forțele de 200 p/s</strong> împing Player-ul înapoi pe autostradă</li>
              <li><strong>Coliziunea</strong> creează explozia exact la poziția Player-ului</li>
              <li><strong>Delete Player</strong> îl face să dispară pentru efectul de distrugere</li>
              <li><strong>Pause and start "Game"</strong> resetează jocul (sau duce la ecranul Game Over)</li>
            </ul>
          </InfoBox>
        </section>

        <section id="scorul-final">
          <h2 className="text-2xl font-bold mb-4">🏆 Partea 6: Scorul și curățenia</h2>
          <p className="mb-4">
            Să finalizăm cu sistemul de scor și curățarea obiectelor care ies din ecran.
          </p>

          <div className="mb-6">
            <ImageModal
              src="/assets/images/gdevelop/RoadRider/part5.png"
              alt="Codul pentru scor și curățenie"
              caption="Sistemul de punctaj și ștergerea obiectelor care ies din ecran"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <StepItem number={1} title="Curățarea obiectelor Traffic">
            <p>Adaugă un eveniment <strong>Repeat for each instance of Traffic</strong>:</p>
            <div className="mt-2 bg-blue-50 p-4 rounded-lg">
              <p><strong>Condiție:</strong> The Y position of Traffic {'>'} 700</p>
              <p><strong>Acțiuni:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Change the variable scor2: add 10</li>
                <li>Delete Traffic</li>
                <li>Change the text of scor: set to "Scor: "+scor2</li>
              </ul>
            </div>
          </StepItem>

          <StepItem number={2} title="Curățarea copacilor">
            <p>Adaugă un eveniment <strong>Repeat for each instance of Tree</strong>:</p>
            <div className="mt-2 bg-green-50 p-4 rounded-lg">
              <p><strong>Condiție:</strong> The Y position of Traffic {'>'} 720</p>
              <p><strong>Acțiune:</strong> Delete Tree</p>
            </div>
          </StepItem>

          <InfoBox title="De ce curățarea este importantă?" icon="star" variant="secondary">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>Performanță:</strong> Obiectele invizibile consumă resurse inutil</li>
              <li><strong>Punctaj:</strong> Fiecare mașină evitată cu succes adaugă 10 puncte</li>
              <li><strong>Poziția Y {'>'} 700/720:</strong> Înseamnă că obiectul a ieșit din partea de jos a ecranului</li>
              <li><strong>Actualizarea textului:</strong> Scorul se afișează în timp real</li>
            </ul>
          </InfoBox>

          <div className="mt-6 bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-lg font-bold mb-3 text-green-800">🎉 Felicitări! Ai terminat codul!</h3>
            <p className="text-green-700 mb-3">
              Ai implementat cu succes toate sistemele jocului Road Rider:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <ul className="space-y-1">
                <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Controlul player-ului</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Sistemul de trafic</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Efecte decorative</li>
              </ul>
              <ul className="space-y-1">
                <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Coliziuni și Game Over</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Sistem de punctaj</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Optimizări de performanță</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="testare">
          <h2 className="text-2xl font-bold mb-4">🎮 Testarea și îmbunătățirile jocului</h2>
          <p className="mb-4">
            Acum că ai implementat tot codul, să testezi jocul și să vezi cum funcționează!
            Apasă butonul de Preview în GDevelop pentru a rula jocul.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <ImageModal
                src="/assets/images/gdevelop/RoadRider/Imagine-din-joc.png"
                alt="Jocul Road Rider finalizat"
                className="w-full"
              />
              <div className="p-4">
                <h4 className="font-bold mb-2">Jocul tău finalizat!</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Evită mașinile de trafic și acumulează cât mai multe puncte!
                </p>
                
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">🎯 Puncte cheie de testare:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Player-ul se controlează fluent cu săgețile stânga/dreapta</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Mașinile apar aleatoriu pe cele 4 benzi</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Vitezele sunt diferite pentru cele două grupe</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Coliziunea creează explozi și resetează jocul</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Scorul crește când eviți cu succes mașinile</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Copacii creează efectul de viteză pe laterale</span>
                </li>
              </ul>
            </div>
          </div>

          <Challenge title="🚀 Provocări pentru îmbunătățirea jocului" difficulty="medium">
            <p>După ce ai terminat jocul de bază, încearcă aceste îmbunătățiri pentru a-l face și mai captivant:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🎵
                </div>
                <div>
                  <h4 className="font-bold">Adaugă sunete și muzică</h4>
                  <p className="text-sm text-gray-600">Importă sunete pentru motor, frânare, explozie și muzică de fundal energizantă.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  ⚡
                </div>
                <div>
                  <h4 className="font-bold">Sistem de dificultate crescândă</h4>
                  <p className="text-sm text-gray-600">Fă ca viteza și frecvența mașinilor să crească pe măsură ce scorul se mărește.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-yellow-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🏆
                </div>
                <div>
                  <h4 className="font-bold">High Score și medalii</h4>
                  <p className="text-sm text-gray-600">Salvează cel mai bun scor și adaugă medalii pentru diferite realizări.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🎁
                </div>
                <div>
                  <h4 className="font-bold">Power-ups</h4>
                  <p className="text-sm text-gray-600">Adaugă obiecte colectabile: scuturi temporare, puncte bonus, sau încetinirea timpului.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🌙
                </div>
                <div>
                  <h4 className="font-bold">Moduri de joc diferite</h4>
                  <p className="text-sm text-gray-600">Creează moduri noapte/zi, vreme rea, sau benzi de circulație diferite.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🚗
                </div>
                <div>
                  <h4 className="font-bold">Mașini personalizabile</h4>
                  <p className="text-sm text-gray-600">Permite jucătorilor să aleagă diferite mașini cu caracteristici unice.</p>
                </div>
              </div>
            </div>
          </Challenge>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-bold mb-3">🎯 Sfaturi pentru optimizare</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">⚡ Performanță:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Limitează numărul maxim de mașini pe ecran</li>
                  <li>Folosește object pooling pentru obiectele frecvent create</li>
                  <li>Optimizează mărimea imaginilor pentru web</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🎮 Gameplay:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Testează echilibrul dificultății cu prietenii</li>
                  <li>Adaugă feedback vizual pentru acțiunile jucătorului</li>
                  <li>Implementează un sistem de pauză</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-2xl font-bold mb-3">🏁 Felicitări pentru finalizare!</h2>
          <p className="mb-4">
            Ai creat cu succes jocul "Road Rider" - un infinite runner captivant cu mecanici complexe!
            Acest proiect ți-a permis să înveți și să aplici concepte avansate de dezvoltare de jocuri în GDevelop:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-2 flex items-center">
                <Code className="h-5 w-5 text-blue-600 mr-2" />
                Programare
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Timere și variabile</li>
                <li>• Logică condițională complexă</li>
                <li>• Sisteme de spawn aleatorii</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-2 flex items-center">
                <Car className="h-5 w-5 text-green-600 mr-2" />
                Game Design
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Controlul jucătorului</li>
                <li>• Detectarea coliziunilor</li>
                <li>• Sisteme de punctaj</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-2 flex items-center">
                <Star className="h-5 w-5 text-purple-600 mr-2" />
                Efecte Vizuale
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Animații și rotații</li>
                <li>• Efecte de explozie</li>
                <li>• Design de interfață</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg mb-4">
            <h4 className="font-bold mb-2">🚀 Pașii următori:</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li><strong>Publică jocul</strong> pe platforma GDevelop.io pentru a-l împărtăși cu prietenii</li>
              <li><strong>Experimentează</strong> cu provocările sugerate pentru a-ți îmbunătăți abilitățile</li>
              <li><strong>Creează variante</strong> - folosește aceleași concepte pentru alte tipuri de jocuri</li>
              <li><strong>Învață mai mult</strong> - explorează alte tutorial-uri GDevelop pentru concepte noi</li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a href="/gdevelop/session5" className="flex items-center">
                <ArrowRight className="h-5 w-5 mr-2" />
                <span>Continuă cu următoarea lecție</span>
              </a>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <a href="/courses/gdevelop" className="flex items-center">
                <Trophy className="h-5 w-5 mr-2" />
                <span>Vezi toate lecțiile GDevelop</span>
              </a>
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              🎊 Ești pe drumul cel bun pentru a deveni un developer de jocuri adevărat!
              Continuă să practici și să experimentezi!
            </p>
          </div>
        </section>
      </div>
    </LessonLayout>
  );
};

export default GDevelopRoadRider;