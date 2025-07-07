import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { Button } from '@/components/ui/button';
import { Play, Rocket, Lightbulb, Check, Star, Code, Flag, ArrowRight, Target, Zap, Shield } from 'lucide-react';
import ImageModal from '@/components/ImageModal';

const GDevelopTanksBattle = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'setup-proiect', title: 'Setup Proiect' },
    { id: 'personaje', title: 'Personajele Jocului' },
    { id: 'configurarea-player', title: 'Configurarea Player-ului' },
    { id: 'configurarea-bullet', title: 'Configurarea Proiectilelor' },
    { id: 'configurarea-enemy', title: 'Configurarea Inamicilor' },
    { id: 'configurarea-efecte', title: 'Configurarea Efectelor' },
    { id: 'configurarea-ui', title: 'Configurarea UI' },
    { id: 'extensia-panel', title: 'Extensia PanelSpriteButton' },
    { id: 'codul-jocului', title: 'Codul Jocului' },
    { id: 'evenimente-initiale', title: 'Evenimente Inițiale' },
    { id: 'sistemul-tragere', title: 'Sistemul de Tragere' },
    { id: 'spawn-inamici', title: 'Spawn-ul Inamicilor' },
    { id: 'coliziuni-scor', title: 'Coliziuni și Scor' },
    { id: 'game-over', title: 'Game Over și Restart' },
    { id: 'testare', title: 'Testare și Îmbunătățiri' }
  ];

  const resources = [
    { title: 'Documentația oficială GDevelop', url: 'https://docs.gdevelop.io/' },
    { title: 'Tutorial Objects și Events', url: 'https://wiki.gdevelop.io/gdevelop5/tutorials' },
    { title: 'Ghid Extensii GDevelop', url: 'https://wiki.gdevelop.io/gdevelop5/extensions' },
    { title: 'Assets Gratuite pentru Jocuri', url: 'https://opengameart.org/' }
  ];
return (
    <LessonLayout
      title="Tanks Battle - Bătălia Supremă"
      subtitle="Lecția 5 • GDevelop Programming"
      courseId="gdevelop"
      sessionId="5"
      heroColor="bg-gradient-to-r from-gray-600 via-orange-600 to-red-600"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Lecția anterioară",
        path: "/gdevelop/session4"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/gdevelop/session6"
      }}
    >
      <div className="space-y-8">
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4">🚀 Povestea jocului Tanks Battle</h2>
          <p className="mb-4">
            Pe câmpul de bătălie digital, comandantul Alex își pregătește tancul pentru cea mai intensă 
            confruntare din cariera sa militară! Inamicii vin din toate direcțiile, iar singura șansă 
            de supraviețuire este să țintească precis și să tragă rapid.
          </p>
          <p className="mb-6">
            În acest joc de tip <strong>tower defense meets shooter</strong>, tu ești tankul static din centrul 
            hărții care trebuie să apere poziția! Urmărește inamicii cu tunul, trage continuu și vezi cât timp 
            poți rezista în această bătălie epică. Fiecare inamic eliminat îți aduce puncte, dar atenție - 
            o singură atingere și totul se termină! 💥
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <Check className="h-5 w-5 text-orange-600 mr-2" />
                Ce vei învăța
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0">✓</div>
                  <span>Crearea unui joc de tip tower defense static</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0">✓</div>
                  <span>Rotația automată a player-ului către mouse</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0">✓</div>
                  <span>Sistem de tragere automată cu timere</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0">✓</div>
                  <span>AI simplu pentru inamici care urmăresc player-ul</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0">✓</div>
                  <span>Animații complexe cu multe frame-uri</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0">✓</div>
                  <span>Extensii externe pentru funcționalități avansate</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <ImageModal 
                src="/assets/images/gdevelop/TanksBattle/imagine-din-joc.png" 
                alt="Previzualizare joc Tanks Battle" 
                className="w-full"
              />
              <div className="p-4 flex flex-col items-center">
                
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-gray-100 to-orange-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3 flex items-center">
              <Target className="h-6 w-6 mr-2" />
              Pregătește-te pentru bătălie!
            </h2>
            <p className="mb-4">
              În acest tutorial, vei învăța să creezi un joc de acțiune intens cu mecanici avansate. 
              Vom implementa totul pas cu pas, de la rotația precisă a tancului până la spawn-ul 
              aleatoriu al inamicilor și sistemul spectaculos de explozii.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <a href="/assets/images/gdevelop/TanksBattle/Tanks-Battle-Assets.zip" download className="flex items-center">
                  <span>Descarcă assets-urile</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-orange-600 text-orange-600">
                <a href="/assets/proiecte finale/Gdevelop/tanks-battle.json" download className="flex items-center">
                  <span>Descarcă proiectul final</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm flex items-start">
              <Lightbulb className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Important:</strong> Pentru acest tutorial vei avea nevoie de assets-urile grafice și 
                o extensie specială. Descarcă arhiva de mai sus și urmează pașii pentru instalarea extensiei.
              </p>
            </div>
          </div>
        </section>
        <section id="setup-proiect">
         <h2 className="text-2xl font-bold mb-4">🛠️ Setup-ul proiectului</h2>
         <p className="mb-4">
           Să începem prin a crea un proiect nou în GDevelop și să configurăm totul pentru 
           bătălia noastră de tancuri.
         </p>

         <StepItem number={1} title="Creează un proiect nou">
           <p>Deschide GDevelop și selectează <strong className="text-orange-600">Create a new project</strong>.</p>
           <p className="mt-2">Alege opțiunea <strong className="text-orange-600">Empty Game</strong> și salvează-l cu numele <code className="bg-gray-100 px-2 py-1 rounded">TanksBattle</code>.</p>
         </StepItem>

         <StepItem number={2} title="Importă assets-urile">
           <p>Extrage arhiva cu imaginile în folderul proiectului tău. Vei avea nevoie de următoarele fișiere:</p>
           <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
             <div className="bg-green-50 p-2 rounded border">🟢 player.png (4 frame-uri)</div>
             <div className="bg-yellow-50 p-2 rounded border">🟡 bullet.png</div>
             <div className="bg-red-50 p-2 rounded border">🔴 enemy.png (13 frame-uri)</div>
             <div className="bg-orange-50 p-2 rounded border">💥 explosion.png (27 frame-uri)</div>
             <div className="bg-blue-50 p-2 rounded border">📝 scor.png</div>
             <div className="bg-red-50 p-2 rounded border">❌ gameover.png</div>
             <div className="bg-green-50 p-2 rounded border">🔄 restart.png</div>
             <div className="bg-gray-50 p-2 rounded border">🌍 background.png</div>
           </div>
         </StepItem>

         <InfoBox title="Animații complexe" icon="star" variant="secondary">
           Acest joc folosește animații mult mai complexe decât precedentele: player-ul are 4 frame-uri, 
           inamicii 13 frame-uri fiecare, iar explozia are 27 de frame-uri pentru un efect spectaculos!
         </InfoBox>
       </section>

       <section id="personaje">
         <h2 className="text-2xl font-bold mb-4">🎯 Personajele jocului</h2>
         <p className="mb-4">
           Să vedem toate obiectele de care avem nevoie pentru această bătălie intensă. 
           Fiecare obiect are un rol crucial în gameplay.
         </p>

         <div className="mb-6">
           <ImageModal 
             src="/assets/images/gdevelop/TanksBattle/personaje.png" 
             alt="Lista personajelor din joc" 
             caption="Toate obiectele necesare pentru jocul Tanks Battle"
             className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
           />
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
           <div className="bg-white rounded-lg border p-4 flex items-start">
             <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mr-3 shrink-0">
               🚂
             </div>
             <div>
               <h4 className="font-bold">player</h4>
               <p className="text-sm text-gray-600">Tankul jucătorului - static în centru, se rotește către mouse. Animație 4 frame-uri în loop.</p>
             </div>
           </div>

           <div className="bg-white rounded-lg border p-4 flex items-start">
             <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mr-3 shrink-0">
               🟡
             </div>
             <div>
               <h4 className="font-bold">bullet</h4>
               <p className="text-sm text-gray-600">Proiectilele tancului. Behavior DestroyOutside pentru curățenie automată.</p>
             </div>
           </div>

           <div className="bg-white rounded-lg border p-4 flex items-start">
             <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mr-3 shrink-0">
               🚗
             </div>
             <div>
               <h4 className="font-bold">enemy</h4>
               <p className="text-sm text-gray-600">Tancurile inamice. 2 tipuri aleatorii, fiecare cu 13 frame-uri animație. Se mișcă spre player.</p>
             </div>
           </div>

           <div className="bg-white rounded-lg border p-4 flex items-start">
             <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mr-3 shrink-0">
               💥
             </div>
             <div>
               <h4 className="font-bold">explosion</h4>
               <p className="text-sm text-gray-600">Animația de explozie cu 27 frame-uri pentru efecte spectaculoase.</p>
             </div>
           </div>

           <div className="bg-white rounded-lg border p-4 flex items-start">
             <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mr-3 shrink-0">
               📊
             </div>
             <div>
               <h4 className="font-bold">Scor</h4>
               <p className="text-sm text-gray-600">Obiect text care afișează scorul current în timp real.</p>
             </div>
           </div>

           <div className="bg-white rounded-lg border p-4 flex items-start">
             <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mr-3 shrink-0">
               ❌
             </div>
             <div>
               <h4 className="font-bold">GameOver</h4>
               <p className="text-sm text-gray-600">Textul "Game Over" care apare când jucătorul pierde.</p>
             </div>
           </div>

           <div className="bg-white rounded-lg border p-4 flex items-start">
             <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mr-3 shrink-0">
               🌍
             </div>
             <div>
               <h4 className="font-bold">background</h4>
               <p className="text-sm text-gray-600">Fundalul static al câmpului de bătălie.</p>
             </div>
           </div>

           <div className="bg-white rounded-lg border p-4 flex items-start">
             <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mr-3 shrink-0">
               🔄
             </div>
             <div>
               <h4 className="font-bold">restart</h4>
               <p className="text-sm text-gray-600">Butonul de restart care apare la Game Over. Folosește extensia PanelSpriteButton.</p>
             </div>
           </div>
         </div>

         <InfoBox title="Sistemul de gameplay" icon="info" variant="primary">
           <p className="mb-2">Mecanica principală a jocului:</p>
           <ul className="list-disc list-inside space-y-1 text-sm">
             <li><strong>Player static:</strong> Nu se mișcă, doar se rotește către mouse</li>
             <li><strong>Tragere automată:</strong> La fiecare 0.25 secunde când mouse-ul e apăsat</li>
             <li><strong>Inamici activi:</strong> Spawn la 0.5s, se mișcă spre player cu forța 150</li>
             <li><strong>Survival challenge:</strong> Rezistă cât mai mult timp!</li>
           </ul>
         </InfoBox>
       </section>

       <section id="configurarea-player">
         <h2 className="text-2xl font-bold mb-4">🚂 Configurarea Player-ului</h2>
         <p className="mb-4">
           Să configurăm tankul jucătorului - personajul nostru principal care va sta în centrul 
           hărții și se va apăra de invazia de tancuri inamice.
         </p>

         <div className="mb-6">
           <ImageModal 
             src="/assets/images/gdevelop/TanksBattle/player.png" 
             alt="Configurarea animației player-ului" 
             caption="Cele 4 frame-uri ale animației player-ului"
             className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
           />
         </div>

         <StepItem number={1} title="Adaugă obiectul Player">
           <p>În panoul <strong>Scene Objects</strong> din dreapta, apasă butonul <strong className="text-orange-600">+</strong> pentru a adăuga un obiect nou.</p>
           <p className="mt-2">Selectează <strong>Sprite</strong> și denumește-l <code className="bg-green-100 px-2 py-1 rounded">player</code>.</p>
         </StepItem>

         <StepItem number={2} title="Configurează animația player-ului">
           <p>Fă dublu-click pe obiectul <strong>player</strong> pentru a-l edita.</p>
           <p className="mt-2">În tab-ul <strong className="text-orange-600">Properties</strong>:</p>
           <div className="mt-3 bg-green-50 p-4 rounded-lg">
             <ol className="list-decimal list-inside space-y-2">
               <li>Adaugă toate cele <strong>4 frame-uri</strong> ale player-ului în ordinea corectă</li>
               <li>Setează <strong>Time between frames:</strong> 0.08 secunde pentru o animație fluidă</li>
               <li>Activează <strong>Loop</strong> - animația să se repete continuu</li>
               <li>Centrează <strong>Origin point</strong> în mijlocul tancului pentru rotație corectă</li>
             </ol>
           </div>
         </StepItem>

         <StepItem number={3} title="Poziționarea inițială">
           <p>Plasează player-ul în <strong>centrul scenei</strong> - acesta va fi poziția sa fixă pe toată durata jocului.</p>
           <p className="mt-2">Tancul nu se va mișca niciodată din această poziție, doar se va roti către mouse.</p>
         </StepItem>

         <InfoBox title="De ce player static?" icon="info" variant="warning">
           Această mecanică creează un gameplay unic de tip "last stand" - în loc să fugi de inamici, 
           trebuie să-i înfrunți din poziția ta fixă, făcând jocul mai intens și provocator.
         </InfoBox>
       </section>

       <section id="configurarea-bullet">
         <h2 className="text-2xl font-bold mb-4">🟡 Configurarea proiectilelor</h2>
         <p className="mb-4">
           Să configurăm gloanțele cu care tankul nostru va trage în inamici.
         </p>

         <StepItem number={1} title="Adaugă obiectul Bullet">
           <p>Creează un obiect <strong>Sprite</strong> și denumește-l <code className="bg-yellow-100 px-2 py-1 rounded">bullet</code>.</p>
           <p className="mt-2">Adaugă imaginea <code>bullet.png</code> ca sprite pentru acest obiect.</p>
         </StepItem>

         <StepItem number={2} title="Adaugă comportamentul DestroyOutside">
           <div className="mb-4">
             <ImageModal 
               src="/assets/images/gdevelop/TanksBattle/bullet.png" 
               alt="Configurarea comportamentului DestroyOutside" 
               caption="Adăugarea comportamentului pentru curățenie automată"
               className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
             />
           </div>
           <p>În tab-ul <strong className="text-orange-600">Behaviors</strong>:</p>
           <div className="mt-3 bg-yellow-50 p-4 rounded-lg">
             <ol className="list-decimal list-inside space-y-2">
               <li>Apasă <strong>Add a behavior</strong></li>
               <li>Selectează <strong className="text-blue-600">DestroyOutside</strong></li>
               <li>Setează <strong>Deletion margin:</strong> 0 pixeli</li>
               <li>Acest behavior va șterge automat gloanțele care ies din ecran</li>
             </ol>
           </div>
         </StepItem>

         <InfoBox title="Importanța curățeniei" icon="info" variant="info">
           Comportamentul DestroyOutside este esențial pentru performanță - fără el, gloanțele ar continua 
           să existe în afara ecranului, consumând resurse inutil și încetinind jocul.
         </InfoBox>
       </section>

       <section id="configurarea-enemy">
         <h2 className="text-2xl font-bold mb-4">🚗 Configurarea inamicilor</h2>
         <p className="mb-4">
           Să configurăm tancurile inamice care vor încerca să ne atace. Acestea vor avea animații 
           complexe și vor fi generate aleatoriu.
         </p>

         <StepItem number={1} title="Adaugă obiectul Enemy">
           <p>Creează un obiect <strong>Sprite</strong> și denumește-l <code className="bg-red-100 px-2 py-1 rounded">enemy</code>.</p>
         </StepItem>

         <StepItem number={2} title="Configurează animațiile enemy">
           <p>Fă dublu-click pe obiectul <strong>enemy</strong> pentru a-l edita.</p>
           <p className="mt-2">În tab-ul <strong className="text-orange-600">Properties</strong>:</p>
           <div className="mt-3 bg-red-50 p-4 rounded-lg">
             <h5 className="font-semibold mb-2">Pentru fiecare tip de inamic:</h5>
             <ol className="list-decimal list-inside space-y-2">
               <li>Creează o animație separată pentru fiecare tip (Animation 0, Animation 1)</li>
               <li>Pentru fiecare animație, adaugă toate cele <strong>13 frame-uri</strong></li>
               <li>Setează <strong>Time between frames:</strong> 0.08 secunde</li>
               <li>Activează <strong>Loop</strong> pentru animație continuă</li>
               <li>Centrează <strong>Origin point</strong> pentru rotație corectă</li>
             </ol>
           </div>
         </StepItem>

         <InfoBox title="2 tipuri de inamici" icon="star" variant="secondary">
           Vom avea 2 tipuri diferite de tancuri inamice, fiecare cu propria animație de 13 frame-uri. 
           Codul va alege aleatoriu între Animation 0 și Animation 1 la spawn.
         </InfoBox>
       </section>

       <section id="configurarea-efecte">
         <h2 className="text-2xl font-bold mb-4">💥 Configurarea efectelor</h2>
         <p className="mb-4">
           Să configurăm efectul spectaculos de explozie care va apărea când distrugem inamicii.
         </p>

         <StepItem number={1} title="Adaugă obiectul Explosion">
           <p>Creează un obiect <strong>Sprite</strong> și denumește-l <code className="bg-orange-100 px-2 py-1 rounded">explosion</code>.</p>
         </StepItem>

         <StepItem number={2} title="Configurează animația exploziei">
           <p>În tab-ul <strong className="text-orange-600">Properties</strong>:</p>
           <div className="mt-3 bg-orange-50 p-4 rounded-lg">
             <ol className="list-decimal list-inside space-y-2">
               <li>Adaugă toate cele <strong>27 frame-uri</strong> ale exploziei în ordinea corectă</li>
               <li>Setează <strong>Time between frames:</strong> 0.03 secunde pentru efect rapid</li>
               <li>Debifează <strong>Loop</strong> - explozia să se joace o singură dată</li>
               <li>Centrează <strong>Origin point</strong> în mijlocul exploziei</li>
             </ol>
           </div>
         </StepItem>

         <InfoBox title="Explozie spectaculoasă" icon="warning" variant="warning">
           Cu 27 de frame-uri și o viteză de 0.03 secunde între frame-uri, explozia va fi 
           extrem de fluidă și impresionantă, durând aproximativ 0.8 secunde.
         </InfoBox>
       </section>

       <section id="configurarea-ui">
         <h2 className="text-2xl font-bold mb-4">📱 Configurarea interfeței utilizator</h2>
         <p className="mb-4">
           Să configurăm elementele de interfață: scorul, ecranul Game Over și fundalul.
         </p>

         <StepItem number={1} title="Configurează Background">
           <p>Creează un obiect <strong>Sprite</strong> și denumește-l <code className="bg-gray-100 px-2 py-1 rounded">background</code>.</p>
           <p className="mt-2">Adaugă imaginea <code>background.png</code> și extinde-l să acopere întreaga scenă.</p>
         </StepItem>

         <StepItem number={2} title="Configurează Scor">
           <p>Creează un obiect <strong>Text</strong> și denumește-l <code className="bg-blue-100 px-2 py-1 rounded">Scor</code>.</p>
           <div className="mt-3 bg-blue-50 p-4 rounded-lg">
             <ul className="space-y-2">
               <li><strong>Size:</strong> 40 (mărimea fontului)</li>
               <li><strong>Color:</strong> Alb sau o culoare vizibilă pe fundal</li>
               <li><strong>Bold:</strong> ✅ pentru vizibilitate mai bună</li>
               <li><strong>Initial text to display:</strong> <code>Scor: 0</code></li>
             </ul>
           </div>
         </StepItem>

         <StepItem number={3} title="Configurează GameOver">
           <p>Creează un obiect <strong>Text</strong> și denumește-l <code className="bg-red-100 px-2 py-1 rounded">GameOver</code>.</p>
           <div className="mt-3 bg-red-50 p-4 rounded-lg">
             <ul className="space-y-2">
               <li><strong>Size:</strong> 80 (mare pentru impact)</li>
               <li><strong>Color:</strong> Roșu</li>
               <li><strong>Bold:</strong> ✅</li>
               <li><strong>Initial text to display:</strong> <code>Game Over</code></li>
               <li>Centrează-l pe ecran</li>
             </ul>
           </div>
         </StepItem>

         <StepItem number={4} title="Adaugă butonul Restart">
           <p>Creează un obiect <strong>Sprite</strong> și denumește-l <code className="bg-green-100 px-2 py-1 rounded">restart</code>.</p>
           <p className="mt-2">Adaugă imaginea <code>restart.png</code> și poziționează-l sub textul Game Over.</p>
         </StepItem>
       </section>

       <section id="extensia-panel">
         <h2 className="text-2xl font-bold mb-4">🔧 Extensia PanelSpriteButton</h2>
         <p className="mb-4">
           Pentru ca butonul de restart să funcționeze corect, avem nevoie de o extensie specială 
           care ne permite să detectăm click-urile pe sprite-uri.
         </p>

         <div className="mb-6">
           <ImageModal 
             src="/assets/images/gdevelop/TanksBattle/extensia.png" 
             alt="Instalarea extensiei PanelSpriteButton" 
             caption="Extensia PanelSpriteButton pentru butoane interactive"
             className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
           />
         </div>

         <StepItem number={1} title="Deschide managerul de extensii">
           <p>În panoul din stânga, navighează la secțiunea <strong className="text-blue-600">Extensions</strong>.</p>
           <p className="mt-2">Apasă pe butonul <strong>+</strong> pentru a adăuga o extensie nouă.</p>
         </StepItem>

         <StepItem number={2} title="Caută și instalează extensia">
           <div className="mt-3 bg-blue-50 p-4 rounded-lg">
             <ol className="list-decimal list-inside space-y-2">
               <li>În bara de căutare, scrie <strong>"PanelSpriteButton"</strong></li>
               <li>Selectează extensia din lista de rezultate</li>
               <li>Apasă <strong>Install in project</strong></li>
               <li>Așteaptă confirmarea instalării</li>
             </ol>
           </div>
         </StepItem>

         <StepItem number={3} title="Adaugă comportamentul la restart">
           <p>Fă dublu-click pe obiectul <strong>restart</strong> pentru a-l edita.</p>
           <p className="mt-2">În tab-ul <strong className="text-orange-600">Behaviors</strong>:</p>
           <div className="mt-3 bg-green-50 p-4 rounded-lg">
             <ol className="list-decimal list-inside space-y-2">
               <li>Apasă <strong>Add a behavior</strong></li>
               <li>Selectează <strong className="text-green-600">Panel Sprite Button</strong></li>
               <li>Lasă setările implicite - comportamentul va detecta automat click-urile</li>
             </ol>
           </div>
         </StepItem>

         <InfoBox title="Ce face această extensie?" icon="info" variant="primary">
           PanelSpriteButton transformă orice sprite într-un buton interactiv, permițându-ne să 
           detectăm click-urile mouse-ului direct pe imagine, fără să programăm manual detectarea pozițiilor.
         </InfoBox>
       </section>

       <section id="codul-jocului">
         <h2 className="text-2xl font-bold mb-4">🧠 Codul jocului - Logica principală</h2>
         <p className="mb-4">
           Acum că avem toate obiectele configurate, să implementăm logica jocului pas cu pas. 
           Vom împărți codul în 6 secțiuni logice, exact ca în imaginile tale.
         </p>

         <div className="bg-gradient-to-r from-gray-100 to-orange-100 p-6 rounded-lg mb-6">
           <h3 className="text-lg font-bold mb-3">📋 Planul de implementare</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
               <h4 className="font-semibold mb-2">🎯 Partea 1-3 - Baza jocului:</h4>
               <ul className="list-disc list-inside space-y-1 text-sm">
                 <li>Evenimente inițiale și setup</li>
                 <li>Rotația player-ului către mouse</li>
                 <li>Sistemul de tragere cu timere</li>
                 <li>Spawn-ul și AI-ul inamicilor</li>
               </ul>
             </div>
             <div>
               <h4 className="font-semibold mb-2">💥 Partea 4-6 - Interacțiunile:</h4>
               <ul className="list-disc list-inside space-y-1 text-sm">
                 <li>Coliziuni bullet-enemy</li>
                 <li>Sistem de scor și explozii</li>
                 <li>Game Over și restart</li>
               </ul>
             </div>
           </div>
         </div>

         <InfoBox title="Organizarea codului" icon="star" variant="secondary">
           În GDevelop, vom organiza codul în <strong>Events</strong> (evenimente). Fiecare eveniment 
           are condiții și acțiuni. Vom grupa evenimentele pe funcționalități pentru claritate maximă.
         </InfoBox>
       </section>

       <section id="evenimente-initiale">
         <h2 className="text-2xl font-bold mb-4">🚀 Partea 1: Evenimente inițiale</h2>
         <p className="mb-4">
           Să începem cu configurarea inițială a jocului: ascunderea elementelor UI și pornirea timerelor.
         </p>

         <div className="mb-6">
           <ImageModal 
             src="/assets/images/gdevelop/TanksBattle/events1.png" 
             alt="Evenimente inițiale" 
             caption="Configurarea inițială: ascundere UI, timere și scalare player"
             className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
           />
         </div>

         <StepItem number={1} title="Eveniment: At the beginning of the scene">
           <p>Creează primul eveniment cu condiția <strong className="text-blue-600">At the beginning of the scene</strong>.</p>
           <p className="mt-2">Adaugă următoarele acțiuni:</p>
           <div className="mt-3 bg-blue-50 p-4 rounded-lg">
             <ul className="space-y-2">
               <li><strong>Hide GameOver</strong> - ascunde textul Game Over</li>
               <li><strong>Hide restart</strong> - ascunde butonul restart</li>
               <li><strong>Change the variable scor: set to 0</strong> - resetează scorul</li>
               <li><strong>Start (or reset) the timer "firerate"</strong> - pentru tragere</li>
               <li><strong>Start (or reset) the timer "EnemyCreation"</strong> - pentru spawn inamici</li>
               <li><strong>Change the scale of player: set to 0.5</strong> - redimensionează player-ul</li>
             </ul>
           </div>
         </StepItem>

         <StepItem number={2} title="Eveniment: Rotația player-ului">
           <p>Adaugă un eveniment <strong>fără condiții</strong> (se execută permanent):</p>
           <div className="mt-3 bg-orange-50 p-4 rounded-lg">
             <p><strong>Acțiune:</strong> Rotate player towards MouseX();MouseY() at speed 0 deg/second</p>
             <p className="text-sm mt-2">Viteza 0 înseamnă rotație instantanee - player-ul va urmări întotdeauna exact poziția mouse-ului.</p>
           </div>
         </StepItem>

         <InfoBox title="De ce aceste setări?" icon="info" variant="info">
           <ul className="list-disc list-inside space-y-1 text-sm">
             <li><strong>Ascunderea UI:</strong> Game Over și Restart apar doar când jucătorul pierde</li>
             <li><strong>Timerele:</strong> Controlează ritmul de tragere (0.25s) și spawn inamici (0.5s)</li>
             <li><strong>Scala 0.5:</strong> Face player-ul mai mic pentru gameplay mai echilibrat</li>
             <li><strong>Rotația instantanee:</strong> Oferă control precis pentru țintire</li>
           </ul>
         </InfoBox>
       </section>

       <section id="sistemul-tragere">
         <h2 className="text-2xl font-bold mb-4">🎯 Partea 2: Sistemul de tragere</h2>
         <p className="mb-4">
           Să implementăm sistemul de tragere automată care va crea proiectile la intervale regulate.
         </p>

         <div className="mb-6">
           <ImageModal 
             src="/assets/images/gdevelop/TanksBattle/events2.png" 
             alt="Sistemul de tragere" 
             caption="Crearea proiectilelor și aplicarea forței de mișcare"
             className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
           />
         </div>

         <StepItem number={1} title="Eveniment: Shoot bullets">
           <p>Creează un eveniment cu următoarele condiții:</p>
           <div className="mt-2 bg-yellow-50 p-4 rounded-lg">
             <p><strong>Condiție 1:</strong> Touch or "Left" mouse button is down</p>
             <p><strong>Condiție 2:</strong> The timer "firerate" &gt;= 0.25 seconds</p>
           </div>
           <p className="mt-2">Adaugă următoarele acțiuni:</p>
           <div className="mt-3 bg-yellow-50 p-4 rounded-lg">
             <ul className="space-y-2">
               <li><strong>Create object bullet</strong> at position player.PointX("Canon");player.PointY("Canon") (layer: Base layer)</li>
               <li><strong>Add to bullet a permanent force,</strong> angle: player.Direction() degrees and length: 400 pixels</li>
               <li><strong>Start (or reset) the timer "firerate"</strong></li>
             </ul>
           </div>
         </StepItem>

         <InfoBox title="Sistemul de tragere explicat" icon="info" variant="warning">
           <ul className="list-disc list-inside space-y-1 text-sm">
             <li><strong>Condiții combinate:</strong> Trebuie să ții apăsat mouse-ul ȘI să fi trecut timpul necesar</li>
             <li><strong>Punctul "Canon":</strong> Creează gloanțele la vârful tunului player-ului</li>
             <li><strong>Direcția player-ului:</strong> Gloanțele vor merge în aceeași direcție ca tancul</li>
             <li><strong>Forța 400:</strong> Viteza rapidă pentru a ajunge la inamici</li>
           </ul>
         </InfoBox>
       </section>

       <section id="spawn-inamici">
         <h2 className="text-2xl font-bold mb-4">🚗 Partea 3: Spawn-ul și AI-ul inamicilor</h2>
         <p className="mb-4">
           Să implementăm sistemul care creează inamici și îi face să ne urmărească.
         </p>

         <div className="mb-6">
           <ImageModal 
             src="/assets/images/gdevelop/TanksBattle/events3.png" 
             alt="Spawn și AI inamici" 
             caption="Crearea inamicilor cu AI simplu de urmărire"
             className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
           />
         </div>

         <StepItem number={1} title="Eveniment: Create enemies every 0.5 second in a random position">
           <p>Creează un eveniment cu condiția:</p>
           <div className="mt-2 bg-red-50 p-4 rounded-lg">
             <p><strong>Condiție:</strong> The timer "EnemyCreation" &gt;= 0.5 seconds</p>
           </div>
           <p className="mt-2">Adaugă următoarele acțiuni:</p>
           <div className="mt-3 bg-red-50 p-4 rounded-lg">
             <ul className="space-y-2">
               <li><strong>Create object enemy</strong> at position Random(800);-50 (layer: Base layer)</li>
               <li><strong>Start (or reset) the timer "EnemyCreation"</strong></li>
               <li><strong>Change the number of the animation of enemy: set to Random(2)</strong></li>
               <li><strong>Change the scale of enemy: set to 0.5</strong></li>
             </ul>
           </div>
         </StepItem>

         <StepItem number={2} title="Eveniment: AI simplu pentru inamici">
           <p>Adaugă un eveniment <strong>fără condiții</strong> pentru AI-ul permanent:</p>
           <div className="mt-3 bg-red-50 p-4 rounded-lg">
             <ul className="space-y-2">
               <li><strong>Move enemy toward player</strong> with an instant force of 150 pixels</li>
               <li><strong>Rotate enemy towards</strong> player.PointX("Centre");player.PointY("Centre") at speed 0 deg/second</li>
             </ul>
           </div>
         </StepItem>

         <InfoBox title="AI-ul inamicilor" icon="info" variant="secondary">
           <ul className="list-disc list-inside space-y-1 text-sm">
             <li><strong>Spawn aleatoriu:</strong> Random(800) pe axa X, -50 pe Y (deasupra ecranului)</li>
             <li><strong>2 tipuri aleatorii:</strong> Random(2) alege între Animation 0 și Animation 1</li>
             <li><strong>Urmărire directă:</strong> Se mișcă direct spre player cu forța 150</li>
             <li><strong>Rotație către țintă:</strong> Se orientează spre player pentru aspect realist</li>
           </ul>
         </InfoBox>
       </section>

       <section id="coliziuni-scor">
         <h2 className="text-2xl font-bold mb-4">💥 Partea 4: Coliziuni și scor</h2>
         <p className="mb-4">
           Să implementăm sistemul de coliziuni între gloanțe și inamici, cu explozii spectaculoase.
         </p>

         <div className="mb-6">
           <ImageModal 
             src="/assets/images/gdevelop/TanksBattle/events4.png" 
             alt="Coliziuni și explozii" 
             caption="Distrugerea inamicilor cu explozii și actualizare scor"
             className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
           />
         </div>

         <StepItem number={1} title="Eveniment: Destroy enemies on collision with bullet">
           <p>Creează un eveniment cu condiția:</p>
           <div className="mt-2 bg-orange-50 p-4 rounded-lg">
             <p><strong>Condiție:</strong> bullet is in collision with enemy</p>
           </div>
           <p className="mt-2">Adaugă următoarele acțiuni:</p>
           <div className="mt-3 bg-orange-50 p-4 rounded-lg">
             <ul className="space-y-2">
               <li><strong>Create object explosion</strong> at position enemy.PointX("Centre");enemy.PointY("Centre") (layer: Base layer)</li>
               <li><strong>Delete enemy</strong></li>
               <li><strong>Delete bullet</strong></li>
               <li><strong>Change the variable scor: add 1</strong></li>
               <li><strong>Play the sound assets\Explosion 9.aac, vol: , loop: no</strong></li>
               <li><strong>Change the text of Scor: set to "Scor: " + scor</strong></li>
             </ul>
           </div>
         </StepItem>

         <StepItem number={2} title="Sub-eveniment: Curățarea exploziei">
           <p>Sub evenimentul de mai sus, adaugă un <strong>sub-eveniment</strong>:</p>
           <div className="mt-3 bg-orange-50 p-4 rounded-lg">
             <p><strong>Condiție:</strong> The animation of explosion is finished</p>
             <p><strong>Acțiune:</strong> Delete explosion</p>
           </div>
         </StepItem>

         <InfoBox title="Feedback-ul vizual și sonor" icon="warning" variant="warning">
           <ul className="list-disc list-inside space-y-1 text-sm">
             <li><strong>Explozia instantanee:</strong> Apare exact la poziția inamicului</li>
             <li><strong>Curățenie automată:</strong> Explozia se șterge când animația se termină</li>
             <li><strong>Sunet de impact:</strong> Adaugă feedback audio pentru satisfacție</li>
             <li><strong>Scor în timp real:</strong> Se actualizează imediat cu "Scor: X"</li>
           </ul>
         </InfoBox>
       </section>

       <section id="game-over">
         <h2 className="text-2xl font-bold mb-4">💀 Partea 5-6: Game Over și Restart</h2>
         <p className="mb-4">
           Să implementăm sfârșitul jocului când player-ul e atins și sistemul de restart.
         </p>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
           <div>
             <h3 className="text-lg font-semibold mb-3">Coliziunea player-inamic:</h3>
             <ImageModal 
               src="/assets/images/gdevelop/TanksBattle/events5.png" 
               alt="Coliziunea player-inamic" 
               caption="Detectarea coliziunii și declanșarea Game Over"
               className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
             />
           </div>
           
           <div>
             <h3 className="text-lg font-semibold mb-3">Game Over și Restart:</h3>
             <ImageModal 
               src="/assets/images/gdevelop/TanksBattle/events6.png" 
               alt="Game Over și Restart" 
               caption="Afișarea Game Over și funcționalitatea de restart"
               className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
             />
           </div>
         </div>

         <StepItem number={1} title="Eveniment: Destroy tank on collision with enemy">
           <p>Creează un eveniment cu condiția:</p>
           <div className="mt-2 bg-red-50 p-4 rounded-lg">
             <p><strong>Condiție:</strong> player is in collision with enemy</p>
           </div>
           <p className="mt-2">Adaugă următoarele acțiuni:</p>
           <div className="mt-3 bg-red-50 p-4 rounded-lg">
             <ul className="space-y-2">
               <li><strong>Create object explosion</strong> at position player.PointX("Centre");player.PointY("Centre") (layer: Base layer)</li>
               <li><strong>Delete player</strong></li>
             </ul>
           </div>
         </StepItem>

         <StepItem number={2} title="Sub-eveniment: Afișarea Game Over">
           <p>Sub evenimentul de mai sus, adaugă un <strong>sub-eveniment</strong>:</p>
           <div className="mt-3 bg-red-50 p-4 rounded-lg">
             <p><strong>Condiție:</strong> The animation of explosion is finished</p>
             <p><strong>Acțiuni:</strong></p>
             <ul className="list-disc list-inside ml-4 space-y-1">
               <li>Delete explosion</li>
               <li>Show GameOver</li>
               <li>Show restart</li>
             </ul>
           </div>
         </StepItem>

         <StepItem number={3} title="Eveniment: Restart cu extensia">
           <p>Creează un eveniment separat pentru restart:</p>
           <div className="mt-3 bg-green-50 p-4 rounded-lg">
             <p><strong>Condiție:</strong> restart is clicked (din extensia PanelSpriteButton)</p>
             <p><strong>Acțiune:</strong> Change the scene: "Game" (sau numele scenei tale)</p>
           </div>
         </StepItem>

         <InfoBox title="Fluxul Game Over" icon="info" variant="primary">
           <ol className="list-decimal list-inside space-y-1 text-sm">
             <li><strong>Coliziune:</strong> Player-ul e atins de inamic</li>
             <li><strong>Explozie:</strong> Animația de distrugere a player-ului</li>
             <li><strong>UI:</strong> Apare Game Over și butonul Restart</li>
             <li><strong>Restart:</strong> Butonul resetează scena complet</li>
           </ol>
         </InfoBox>
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
               src="/assets/images/gdevelop/TanksBattle/imagine-din-joc.png" 
               alt="Jocul Tanks Battle finalizat" 
               className="w-full"
             />
             <div className="p-4">
               <h4 className="font-bold mb-2">Bătălia ta de tancuri!</h4>
               <p className="text-sm text-gray-600 mb-3">
                 Apără-te de invazia de tancuri și supraviețuiește cât mai mult timp!
               </p>
               <Button className="w-full bg-orange-600 hover:bg-orange-700">
                 <Play className="h-4 w-4 mr-2" />
                 <span>Testează jocul</span>
               </Button>
             </div>
           </div>

           <div>
             <h3 className="font-bold text-lg mb-3">🎯 Puncte cheie de testare:</h3>
             <ul className="space-y-2">
               <li className="flex items-start">
                 <div className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0">✓</div>
                 <span>Player-ul se rotește fluent după mouse</span>
               </li>
               <li className="flex items-start">
                 <div className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0">✓</div>
                 <span>Tragerea automată funcționează la click menținut</span>
               </li>
               <li className="flex items-start">
                 <div className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0">✓</div>
                 <span>Inamicii apar aleatoriu și se mișcă spre player</span>
               </li>
               <li className="flex items-start">
                 <div className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0">✓</div>
                 <span>Coliziunile creează explozii spectaculoase</span>
               </li>
               <li className="flex items-start">
                 <div className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0">✓</div>
                 <span>Scorul crește la fiecare inamic eliminat</span>
               </li>
               <li className="flex items-start">
                 <div className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0">✓</div>
                 <span>Game Over și restart funcționează perfect</span>
               </li>
             </ul>
           </div>
         </div>

         <Challenge title="🚀 Provocări pentru îmbunătățirea jocului" difficulty="medium">
           <p>După ce ai terminat jocul de bază, încearcă aceste îmbunătățiri pentru a-l face și mai captivant:</p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
             <div className="bg-white rounded-lg border p-4 flex items-start">
               <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                 ⚡
               </div>
               <div>
                 <h4 className="font-bold">Power-ups și bonusuri</h4>
                 <p className="text-sm text-gray-600">Adaugă power-ups care apar aleatoriu: tragere rapidă, gloanțe mai mari, sau puncte bonus.</p>
               </div>
             </div>
             
             <div className="bg-white rounded-lg border p-4 flex items-start">
               <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                 🏆
               </div>
               <div>
                 <h4 className="font-bold">Sisteme de dificultate</h4>
                 <p className="text-sm text-gray-600">Fă ca inamicii să apară mai des și să se miște mai repede pe măsură ce scorul crește.</p>
               </div>
             </div>
             
             <div className="bg-white rounded-lg border p-4 flex items-start">
               <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                 🎵
               </div>
               <div>
                 <h4 className="font-bold">Muzică și efecte sonore</h4>
                 <p className="text-sm text-gray-600">Adaugă muzică de fundal și mai multe efecte sonore pentru tragere și mișcarea inamicilor.</p>
               </div>
             </div>
             
             <div className="bg-white rounded-lg border p-4 flex items-start">
               <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                 🛡️
               </div>
               <div>
                 <h4 className="font-bold">Sistem de vieți</h4>
                 <p className="text-sm text-gray-600">În loc de Game Over instant, dă player-ului 3 vieți și o bară de sănătate.</p>
               </div>
             </div>

             <div className="bg-white rounded-lg border p-4 flex items-start">
               <div className="bg-yellow-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                 🎯
               </div>
               <div>
                 <h4 className="font-bold">Tipuri diferite de inamici</h4>
                 <p className="text-sm text-gray-600">Creează inamici mai rapizi, mai rezistenți, sau care schimbă direcția aleatoriu.</p>
               </div>
             </div>
             
             <div className="bg-white rounded-lg border p-4 flex items-start">
               <div className="bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                 📊
               </div>
               <div>
                 <h4 className="font-bold">Statistici detaliate</h4>
                 <p className="text-sm text-gray-600">Afișează statistici precum "Inamici eliminați", "Timp supraviețuire", "Precizie".</p>
               </div>
             </div>
           </div>
         </Challenge>

         <div className="mt-8 bg-orange-50 p-6 rounded-lg border border-orange-200">
           <h3 className="text-xl font-bold mb-3">🎯 Sfaturi pentru optimizare</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
               <h4 className="font-semibold mb-2">⚡ Performanță:</h4>
               <ul className="list-disc list-inside space-y-1 text-sm">
                 <li>Limitează numărul maxim de inamici pe ecran</li>
                 <li>Folosește DestroyOutside pentru toate obiectele mobile</li>
                 <li>Optimizează animațiile pentru frameuri mai puține dacă e necesar</li>
               </ul>
             </div>
             <div>
               <h4 className="font-semibold mb-2">🎮 Gameplay:</h4>
               <ul className="list-disc list-inside space-y-1 text-sm">
                 <li>Testează echilibrul dificultății cu mai mulți jucători</li>
                 <li>Adaugă feedback vizual pentru toate acțiunile</li>
                 <li>Implementează un tutorial rapid pentru controale</li>
               </ul>
             </div>
           </div>
         </div>
       </section>

       <section className="bg-gradient-to-r from-gray-50 to-orange-50 p-6 rounded-lg border border-orange-200">
         <h2 className="text-2xl font-bold mb-3">🏆 Felicitări pentru victoria ta!</h2>
         <p className="mb-4">
           Ai creat cu succes jocul "Tanks Battle" - un shooter intens de tip tower defense! 
           Acest proiect ți-a permis să înveți și să aplici concepte avansate de dezvoltare de jocuri în GDevelop:
         </p>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
           <div className="bg-white p-4 rounded-lg">
             <h4 className="font-bold mb-2 flex items-center">
               <Target className="h-5 w-5 text-orange-600 mr-2" />
               Mecanici avansate
             </h4>
             <ul className="text-sm space-y-1">
               <li>• Rotație automată către mouse</li>
               <li>• Timere pentru gameplay</li>
               <li>• AI simplu pentru inamici</li>
             </ul>
           </div>
           
           <div className="bg-white p-4 rounded-lg">
             <h4 className="font-bold mb-2 flex items-center">
               <Zap className="h-5 w-5 text-blue-600 mr-2" />
               Sisteme complexe
             </h4>
             <ul className="text-sm space-y-1">
               <li>• Spawn aleatoriu de inamici</li>
               <li>• Coliziuni și explozii</li>
               <li>• Game Over și restart</li>
             </ul>
           </div>
           
           <div className="bg-white p-4 rounded-lg">
             <h4 className="font-bold mb-2 flex items-center">
               <Shield className="h-5 w-5 text-green-600 mr-2" />
               Extensii și UI
             </h4>
             <ul className="text-sm space-y-1">
               <li>• Extensii externe (PanelSpriteButton)</li>
               <li>• Interfață dinamică</li>
               <li>• Animații cu multe frame-uri</li>
             </ul>
           </div>
         </div>

         <div className="bg-white p-4 rounded-lg mb-4">
           <h4 className="font-bold mb-2">🚀 Următorii pași:</h4>
           <ol className="list-decimal list-inside space-y-1 text-sm">
             <li><strong>Experimentează</strong> cu provocările sugerate pentru a-ți dezvolta abilitățile</li>
             <li><strong>Publică jocul</strong> pe platforme precum itch.io pentru feedback de la comunitate</li>
             <li><strong>Creează variante</strong> - folosește aceleași concepte pentru alte tipuri de shootere</li>
             <li><strong>Explorează extensii</strong> - descoperă alte extensii GDevelop pentru funcționalități noi</li>
           </ol>
         </div>

         <div className="flex flex-col sm:flex-row gap-4">
           <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
             <a href="/gdevelop/session6" className="flex items-center">
               <ArrowRight className="h-5 w-5 mr-2" />
               <span>Continuă cu următoarea lecție</span>
             </a>
           </Button>
           
           <Button asChild size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
             <a href="/courses/gdevelop" className="flex items-center">
               <Star className="h-5 w-5 mr-2" />
               <span>Vezi toate lecțiile GDevelop</span>
             </a>
           </Button>
         </div>

         <div className="mt-6 text-center">
           <p className="text-sm text-gray-600">
             🎯 Ai învățat să creezi jocuri cu AI, extensii și mecanici complexe! 
             Acum ești pregătit pentru provocări și mai mari în dezvoltarea de jocuri!
           </p>
         </div>
       </section>
     </div>
   </LessonLayout>
 );
};

export default GDevelopTanksBattle;