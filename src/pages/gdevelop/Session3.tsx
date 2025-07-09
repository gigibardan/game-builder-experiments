import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { Button } from '@/components/ui/button';
import { Play, Rocket, Lightbulb, Check, Star, Code, Flag, ArrowRight, Trophy } from 'lucide-react';
import ImageModal from '@/components/ImageModal';
import CodeBlock from '@/components/CodeBlock';

const GDevelopBumpyPlatformer = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'setup-project', title: 'Setup Proiect' },
    { id: 'personaje', title: 'Personajele Jocului' },
    { id: 'configurarea-robotului', title: 'Configurarea Robotului' },
    { id: 'configurarea-platformelor', title: 'Platformele și Obstacolele' },
    { id: 'configurarea-scorului', title: 'Sistemul de Scor și Colectare' },
    { id: 'inamici-si-coliziuni', title: 'Inamici și Coliziuni' },
    { id: 'instructiuni-joc', title: 'Instrucțiuni joc' },
    { id: 'testare', title: 'Testare și Îmbunătățiri' }
  ];

  const resources = [
    { title: 'Documentația oficială GDevelop', url: 'https://docs.gdevelop.io/' },
    { title: 'Tutoriale pentru Platformer', url: 'https://wiki.gdevelop.io/gdevelop5/tutorials/platformer' },
    { title: 'Assets gratuite pentru platformere', url: 'https://opengameart.org/' }
  ];

  return (
    <LessonLayout
      title="Bumpy Platformer - Aventură 2D în GDevelop"
      subtitle="Lecția 4 • GDevelop Programming"
      courseId="gdevelop"
      sessionId="4"
      heroColor="bg-gradient-to-r from-green-600 via-blue-600 to-purple-500"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Lecția anterioară",
        path: "/gdevelop/session2"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/gdevelop/session4"
      }}
    >
      <div className="space-y-8">

        {/* INTRODUCERE */}
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4">🤖 Povestea jocului Bumpy Platformer</h2>
          <p className="mb-4">
            În acest joc platformer 2D, îl vei ajuta pe <strong>BumpyTheRobot</strong> să navigheze printr-o lume plină de platforme,
            să adune obiecte speciale și să evite dronele periculoase. Obiectivul tău este să acumulezi cât mai multe puncte
            și să ajungi la sfârșitul nivelului fără să pierzi.
          </p>
          <p className="mb-6">
            Pe parcurs vei implementa animații complexe pentru Bumpy, logica de colectare a obiectelor, un sistem de scor
            dinamic, și vei învăța cum să creezi inamici care se mișcă automat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                Ce vei învăța
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Crearea unui joc platformer cu mișcare realistă și interacțiuni complexe</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Implementarea animațiilor pentru mers, săritură și cădere cu schimbare automată</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Adăugarea inamicilor cu comportamente automate și coliziuni logice</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Crearea unui sistem de scor și afișarea acestuia în timp real pe ecran</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Implementarea logicii de sfârșit și restart al jocului</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <ImageModal
                src="/assets/images/gdevelop/BumpyPlatformer/Preview.png"
                alt="Previzualizare joc Bumpy Platformer"
                className="w-full"
              />
              <div className="p-4 flex flex-col items-center">
                <p className="text-sm text-gray-500 text-center">Previzualizarea nivelului final din lecția noastră</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3 flex items-center">
              <Rocket className="h-6 w-6 mr-2" />
              Să începem aventura!
            </h2>
            <p className="mb-4">
              În acest tutorial, vei învăța să construiești un platformer complet în GDevelop. Vom parcurge împreună
              toți pașii necesari pentru a crea o experiență captivantă, exact ca în proiectele profesionale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                <a href="/assets/images/gdevelop/BumpyPlatformer/BumpyPlatformer-Assets.zip" download className="flex items-center">
                  <span>Descarcă assets-urile jocului</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600">
                <a href="/assets/proiecte-finale/Gdevelop/Bumpy-Platformer.json" download className="flex items-center">
                  <span>Descarcă proiectul final gata realizat</span>
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

        {/* SETUP PROIECT */}
        <section id="setup-project">
          <h2 className="text-2xl font-bold mb-4">🔧 Setup Proiect</h2>
          <StepItem number={1} title="Crează un proiect nou">
            <p>Deschide GDevelop și selectează <strong>„Creează un nou proiect”</strong>. Alege șablonul gol și setează un nume: <code>BumpyPlatformer</code>.</p>
          </StepItem>
          <StepItem number={2} title="Importă assets-urile">
            <p>Descarcă pachetul de assets și importă imaginile, sunetele și fonturile în proiectul tău. Asigură-te că toate fișierele sunt organizate în foldere separate (ex: <code>Images</code>, <code>Sounds</code>, <code>Fonts</code>).</p>
            
          </StepItem>
        </section>

        {/* PERSONAJE */}
        <section id="personaje">
          <h2 className="text-2xl font-bold mb-4">🦾 Personajele Jocului</h2>
          <StepItem number={3} title="Adaugă BumpyTheRobot ca obiect principal">
            <p>Importă sprite-ul <code>BumpyTheRobot.png</code> și creează un nou obiect de tip <strong>Sprite</strong>. Configurează punctul de origine la centrul bazei robotului pentru coliziuni precise.</p>
          </StepItem>
          <StepItem number={4} title="Adaugă colectabile și obstacole">
            <p>Importă sprite-urile pentru obiectele <code>Gear</code>, <code>Drone</code> și <code>GreenArrow</code> (punctul de final). Creează câte un obiect de tip <strong>Sprite</strong> pentru fiecare și setează dimensiunile corespunzătoare.</p>
            <div className="mt-4 mb-4 text-sm flex items-start">
              <Lightbulb className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Important:</strong> Pentru personajele pe ale căror costume nu se află în assets-urile jocului, importați costumul aferent urmărind următorul traseu:
              </p>
            </div>
            <p> Click pe <strong>+</strong> (adaugă obiect), caută <strong>Industrial</strong> și alege personajul dorit.</p>

            <div className="flex gap-2 mb-4">
            <ImageModal
              src="/assets/images/gdevelop/BumpyPlatformer/adaug-pers1.png"
              alt="Adăugarea personajelor și obiectelor în scenă"
            />
            <ImageModal
              src="/assets/images/gdevelop/BumpyPlatformer/adaug-pers2.png"
              alt="Adăugarea personajelor și obiectelor în scenă"
            />
            </div>
          </StepItem>
          <div className="flex gap-4 mb-4">
            <ImageModal
              src="/assets/images/gdevelop/BumpyPlatformer/Personaje1.png"
              alt="Adăugarea personajelor și obiectelor în scenă"
            />
            <ImageModal
              src="/assets/images/gdevelop/BumpyPlatformer/Personaje2.png"
              alt="Adăugarea personajelor și obiectelor în scenă"
            />
            <ImageModal
              src="/assets/images/gdevelop/BumpyPlatformer/Personaje3.png"
              alt="Adăugarea personajelor și obiectelor în scenă"
            />
            <ImageModal
              src="/assets/images/gdevelop/BumpyPlatformer/Personaje4.png"
              alt="Adăugarea personajelor și obiectelor în scenă"
            />
          </div>

          <StepItem number={4} title="Poziționarea personajelor">
            <p> După ce ați adăugat personajele, poziționați-le corespunzător imaginii de mai jos:</p>  
            <ImageModal
              src="/assets/images/gdevelop/BumpyPlatformer/game-preview.png"
              alt="Pozitionarea personajelor"
            />
          </StepItem>

        </section>

        {/* CONFIGURAREA ROBOTULUI */}
        <section id="configurarea-robotului">
          <h2 className="text-2xl font-bold mb-4">⚙️ Configurarea Robotului</h2>
          <StepItem number={5} title="Adaugă comportamente pentru BumpyTheRobot">
            <p>Deschide proprietățile obiectului <code>BumpyTheRobot</code> și adaugă comportamentul <strong>Platformer Character</strong>. Configurează valorile astfel:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Gravity:</strong> 1500 px/s²</li>
              <li><strong>Jump speed:</strong> 800 px/s</li>
              <li><strong>Max speed:</strong> 300 px/s</li>
              <li><strong>Acceleration:</strong> 1200 px/s²</li>
              <li><strong>Deceleration:</strong> 1500 px/s²</li>
              <li><strong>Allow double jump:</strong> Activat</li>
            </ul>

          <div className="flex gap-2 mt-4 mb-4">
            <ImageModal
              src="/assets/images/gdevelop/BumpyPlatformer/behavior_robot1.png"
              alt="Setări comportament pentru BumpyTheRobot"
            />
            <ImageModal
              src="/assets/images/gdevelop/BumpyPlatformer/behavior_robot2.png"
              alt="Setări comportament pentru BumpyTheRobot"
            />
            </div>
           </StepItem>
          
          <StepItem number={6} title="Configurează animațiile pentru robot">
            <p>Importă și setează animațiile pentru:</p>
            <ul className="list-disc ml-5">
              <li><strong>Idle</strong>: când stă pe loc</li>
              <li><strong>Running</strong>: când se deplasează pe platformă</li>
              <li><strong>Jumping</strong>: când sare</li>
              <li><strong>Falling</strong>: când cade</li>
            </ul>
            <p>Configurează Event Sheet pentru a comuta automat între animații în funcție de starea personajului.</p>
            
          <div className="flex gap-2 mt-4 mb-4">
            <ImageModal
              src="/assets/images/gdevelop/BumpyPlatformer/robot-animation1.png"
              alt="robot-animation"
            />
            <ImageModal
              src="/assets/images/gdevelop/BumpyPlatformer/robot-animation2.png"
              alt="robot-animation"
            />
            <ImageModal
              src="/assets/images/gdevelop/BumpyPlatformer/robot-animation3.png"
              alt="robot-animation"
            />
          </div>
          </StepItem>
        </section>

        {/* PLATFORMELE ȘI OBSTACOLELE */}
        <section id="configurarea-platformelor">
          <h2 className="text-2xl font-bold mb-4">🪜 Platformele și Obstacolele</h2>
          <StepItem number={7} title="Adaugă platformele pentru nivel">
            <p>Plasează obiectele <code>IndustrialPlatform</code> și <code>SmallPlatform</code> în scenă pentru a crea traseul pe care va merge Bumpy. Asigură-te că platformele au comportamentul <strong>Platform</strong> activat pentru coliziuni corecte.</p>
          </StepItem>
          <StepItem number={8} title="Adaugă obstacole decorative">
            <p>Plasează butoiul(<code>OrangeBarrel</code>) și scări (<code>IndustrialLadder</code>) pentru a face mediul mai interesant. Pentru OrangeBarrel adaugă comportamentele din imagine.</p>
            <ImageModal
              src="/assets/images/gdevelop/BumpyPlatformer/barrel-behaviors.png"
              alt="Configurarea platformelor și obstacolelor"
            />
          </StepItem>
        </section>

        {/* SISTEM DE SCOR ȘI COLECTARE */}
        <section id="configurarea-scorului">
          <h2 className="text-2xl font-bold mb-4">💎 Sistemul de Scor și Colectare</h2>
          <StepItem number={9} title="Creează variabila Score și textul aferent">
            <p>Adaugă o variabilă globală <code>Score</code> de tip <strong>Number</strong> și un obiect <code>Text</code>, denumit ScoreText, pentru a afișa scorul pe ecran.</p>
            <ImageModal
                src="/assets/images/gdevelop/BumpyPlatformer/score-text.png"
                alt="Score-text"
              />
              <p className="mt-4">
                Asemenea și pentru obiectul de tip text numit <strong>ScoreTextFinal</strong>.
              </p>
              <p className="mt-2">
                Pentru următoarele obiecte de tip text, modificați textul inițial astfel:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  <strong>Felicitari</strong> – Felicitari!
                </li>
                <li>
                  <strong>Provocare</strong> – Ai evadat, dar poți face 130 puncte?
                </li>
                <li>
                  <strong>Evadat</strong> – Ai evadat cu numărul maxim de puncte!
                </li>
                <li>
                  <strong>Retry</strong> – Retry
                </li>
              </ul>

          </StepItem>
          
        </section>

        {/* INAMICI ȘI COLIZIUNI */}
        <section id="inamici-si-coliziuni">
          <h2 className="text-2xl font-bold mb-4">🚨 Inamici și Coliziuni</h2>
          <StepItem number={11} title="Adaugă comportamentul pentru Drone">
            <p>Setează comportamentul <strong>RectangleMovement</strong> pentru ca dronele să patruleze automat și adaugă variabila <strong>Dead</strong> de tip Boolean. </p>
            
            <div className="flex gap-2 mt-4 mb-4">
              <ImageModal
              src="/assets/images/gdevelop/BumpyPlatformer/drone-behavior.png"
              alt="Layer-ul EndScreen cu scor final și buton Restart"
            />
            <ImageModal
              src="/assets/images/gdevelop/BumpyPlatformer/drone-variables.png"
              alt="Layer-ul EndScreen cu scor final și buton Restart"
            />
          </div>
          </StepItem>
          <StepItem number={12} title="Logica de coliziune între Bumpy și Drone">
            <p>Configurează Event Sheet pentru a verifica dacă Bumpy lovește drona de sus (elimină drona și crește scorul) sau de lateral (pierde viață / se respawn-ează). Setează animațiile.</p>
                <div className="flex gap-2 mt-4 mb-4">
              <ImageModal
              src="/assets/images/gdevelop/BumpyPlatformer/drona-animatie1.png"
              alt="Layer-ul EndScreen cu scor final și buton Restart"
            />
            <ImageModal
              src="/assets/images/gdevelop/BumpyPlatformer/drona-animatie2.png"
              alt="Layer-ul EndScreen cu scor final și buton Restart"
            />
          </div>
          </StepItem>
        </section>

        
    <section id="instructiuni-joc">
      <h2 className="text-2xl font-bold mb-4">🤖 BumpyTheRobot</h2>
      <p className="mb-4">
        Accesează tab-ul scenei <strong className="text-blue-600">„Joc"</strong> pentru a adăuga logica de mișcare a robotului.
      </p>

      <h3 className="text-lg font-semibold mb-4 text-gray-800">🤖 BumpyTheRobot is moving</h3>
      <p className="mb-4">
        Acest eveniment principal controlează comportamentul robotului în timp ce se mișcă și gestionează toate stările sale.
      </p>

      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <h4 className="font-semibold text-gray-800 mb-2">Animație robotului cu diferite stări:</h4>
        <p className="text-sm text-gray-600 mb-3">Animam robotul cu animație: alergare, săritură, cădere, staționar</p>
      </div>

      <h4 className="text-md font-semibold mb-3 text-gray-700">🟢 Când BumpyTheRobot este pe podea</h4>
      <div className="bg-green-50 p-4 rounded-lg mb-4">
        <h4 className="font-semibold text-green-800 mb-2">Starea de alergare:</h4>
        <div className="space-y-2">
          <div className="border-l-4 border-green-500 pl-3">
            <p><strong>Condiție:</strong> <code className="bg-green-100 px-2 py-1 rounded text-sm">🤖 BumpyTheRobot is on floor</code></p>
            <p><strong>Acțiuni:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the animation of <code className="bg-purple-100 px-1 py-0.5 rounded">🤖 BumpyTheRobot</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">"Running"</code></li>
            </ul>
          </div>
        </div>
      </div>

      <h4 className="text-md font-semibold mb-3 text-gray-700">🔄 Când BumpyTheRobot sare</h4>
      <div className="bg-blue-50 p-4 rounded-lg mb-4">
        <h4 className="font-semibold text-blue-800 mb-2">Starea de săritură:</h4>
        <div className="space-y-2">
          <div className="border-l-4 border-blue-500 pl-3">
            <p><strong>Condiție:</strong> <code className="bg-blue-100 px-2 py-1 rounded text-sm">🤖 BumpyTheRobot is jumping</code></p>
            <p><strong>Acțiuni:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the animation of <code className="bg-purple-100 px-1 py-0.5 rounded">🤖 BumpyTheRobot</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">"Jumping"</code></li>
            </ul>
          </div>
        </div>
      </div>

      <h4 className="text-md font-semibold mb-3 text-gray-700">🔴 Când BumpyTheRobot cade</h4>
      <div className="bg-red-50 p-4 rounded-lg mb-4">
        <h4 className="font-semibold text-red-800 mb-2">Starea de cădere:</h4>
        <div className="space-y-2">
          <div className="border-l-4 border-red-500 pl-3">
            <p><strong>Condiție:</strong> <code className="bg-red-100 px-2 py-1 rounded text-sm">🤖 BumpyTheRobot is falling</code></p>
            <p><strong>Acțiuni:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the animation of <code className="bg-purple-100 px-1 py-0.5 rounded">🤖 BumpyTheRobot</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">"Falling"</code></li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-4 text-gray-800">🎯 Eveniment de săritură</h3>
      <p className="mb-4">
        Acest eveniment redă sunetul de săritură când robotul sare, declanșat doar o dată per săritură.
      </p>

      <div className="bg-orange-50 p-4 rounded-lg mb-4">
        <h4 className="font-semibold text-orange-800 mb-2">🤖 BumpyTheRobot is jumping (trigger once):</h4>
        <div className="space-y-2 mb-4">
          <div className="border-l-4 border-orange-500 pl-3">
            <p><strong>Condiție:</strong> <code className="bg-orange-100 px-2 py-1 rounded text-sm">🤖 BumpyTheRobot is jumping</code></p>
            <p><strong>Declanșare:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">Trigger once</code></p>
            <p><strong>Acțiuni:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>🔊 Play the sound <code className="bg-gray-100 px-1 py-0.5 rounded">967f402902c27ddb085c4c29d5afcd7e0a418be091afd2db708c3b5da_Jump.oac</code>, volume: <code className="bg-gray-100 px-1 py-0.5 rounded">loop: no</code></li>
            </ul>
          </div>
        </div>


        <div className="border-l-4 border-gray-500 pl-3 mb-3">
            <p><strong>Condiție:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">🤖 BumpyTheRobot is moving</code></p>
            <p><strong>Sub-condiție:</strong> <code className="bg-red-100 px-2 py-1 rounded text-sm">The Y position of 🤖 BumpyTheRobot {'>'} 560</code></p>
            <p><strong>Declanșare:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">Trigger once</code></p>
            <p><strong>Acțiune:</strong>  Change the animation of <code className="bg-purple-100 px-1 py-0.5 rounded">🤖 BumpyTheRobot</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">"Idle"</code></p>
             
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-4 text-gray-800">💀 Eveniment de moarte</h3>
      <p className="mb-4">
        Acest eveniment gestionează logica morții robotului când cade sub o anumită înălțime.
      </p>

      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <h4 className="font-semibold text-gray-800 mb-2">Logica morții robotului:</h4>
        
        <div className="mb-4">
          <h5 className="font-semibold text-gray-700 mb-2">Condiția principală de moarte:</h5>
          

        <div className="mb-4">
          <h5 className="font-semibold text-gray-700 mb-2">Verificarea stării de moarte:</h5>
          <div className="border-l-4 border-cyan-500 pl-3 mb-3">
            <p><strong>Condiție:</strong> <code className="bg-cyan-100 px-2 py-1 rounded text-sm">The variable 💀 Dead of 🤖 BumpyTheRobot is true</code></p>
            <p><strong>Declanșare:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">Trigger once</code></p>
            <p><strong>Acțiune:</strong>  Change the variable <code className="bg-cyan-100 px-1 py-0.5 rounded">💀 Dead</code> of <code className="bg-purple-100 px-1 py-0.5 rounded">🤖 BumpyTheRobot</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">true</code></p>
          </div>
        </div>

        <div className="space-y-2">
          <h5 className="font-semibold text-gray-700 mb-2">Acțiuni când robotul moare:</h5>
          <div className="border-l-4 border-red-500 pl-3">
            <p><strong>Acțiuni:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the position of <code className="bg-purple-100 px-1 py-0.5 rounded">🤖 BumpyTheRobot</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">40 (x axis)</code>, set to <code className="bg-gray-100 px-1 py-0.5 rounded">340 (y axis)</code></li>
              <li>🔊 Play the sound <code className="bg-gray-100 px-1 py-0.5 rounded">95fe78eabd3e17dc027f4ed92eea83f672dcdda1cd163f7b8765a57911c_Death.oac</code>, volume: <code className="bg-gray-100 px-1 py-0.5 rounded">loop: no</code></li>
              <li>Change the variable <code className="bg-orange-100 px-1 py-0.5 rounded">🎯 Score</code>: subtract <code className="bg-gray-100 px-1 py-0.5 rounded">20</code></li>
              <li>Change the variable <code className="bg-cyan-100 px-1 py-0.5 rounded">💀 Dead</code> of <code className="bg-purple-100 px-1 py-0.5 rounded">🤖 BumpyTheRobot</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">false</code></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      
      <ImageModal
              src="/assets/images/gdevelop/BumpyPlatformer/cod-robot.png"
              alt="Cod robot"
              className="mb-4"
      />

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">📝 Explicația logicii</h4>
        <p className="text-sm text-blue-700 mb-2">
          Acest sistem de evenimente controlează comportamentul robotului <strong>BumpyTheRobot</strong> prin următoarele mecanisme:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-blue-700">
          <li><strong>Animații dinamice</strong> - Robotul își schimbă animația în funcție de stare (alergare, săritură, cădere, staționar)</li>
          <li><strong>Sistem de săritură</strong> - Când robotul sare, se redă un sunet specific, declanșat doar o dată per săritură</li>
          <li><strong>Logica morții</strong> - Când robotul cade sub o anumită înălțime (Y {'>'} 560), se activează secvența de moarte</li>
          <li><strong>Gestionarea stărilor</strong> - Sistemul folosește variabile booleene pentru a urmări stările robotului</li>
        </ul>
      </div>
    </section>
    <section id="scor-colectare">
  <h2 className="text-2xl font-bold mb-4">💰 Scor și Colectarea Banilor</h2>
  <p className="mb-4">
    Acest eveniment gestionează logica prin care <strong className="text-blue-600">🤖 BumpyTheRobot</strong> colectează obiectele de tip <strong>⚙️ Gear</strong> și își actualizează scorul.
  </p>

  <h3 className="text-lg font-semibold mb-4 text-gray-800">🟢 Când BumpyTheRobot colectează Gear</h3>
  <div className="bg-green-50 p-4 rounded-lg mb-4">
    <h4 className="font-semibold text-green-800 mb-2">Logica colectării:</h4>
    <div className="space-y-2">
      <div className="border-l-4 border-green-500 pl-3">
        <p><strong>Condiție:</strong> <code className="bg-green-100 px-2 py-1 rounded text-sm">🤖 BumpyTheRobot is in collision with ⚙️ Gear</code></p>
        <p><strong>Acțiuni:</strong></p>
        <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
          <li>❌ Delete <code className="bg-purple-100 px-1 py-0.5 rounded">⚙️ Gear</code></li>
          <li>🔊 Play the sound <code className="bg-gray-100 px-1 py-0.5 rounded">Coins 6.aac</code>, volume: <code className="bg-gray-100 px-1 py-0.5 rounded">default</code>, loop: <code className="bg-gray-100 px-1 py-0.5 rounded">no</code></li>
          <li>🔢 Change the variable <code className="bg-orange-100 px-1 py-0.5 rounded">Score</code>: add <code className="bg-gray-100 px-1 py-0.5 rounded">10</code></li>
          <li>📝 Change the text of <code className="bg-purple-100 px-1 py-0.5 rounded">ScoreText</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">"Score: " + VariableString(Score)</code></li>
        </ul>
      </div>
    </div>
  </div>

  <ImageModal
      src="/assets/images/gdevelop/BumpyPlatformer/cod-scor.png"
      alt="Cod robot"
      className="mb-4"
  />


  <div className="bg-blue-50 p-4 rounded-lg">
    <h4 className="font-semibold text-blue-800 mb-2">📝 Explicația logicii</h4>
    <p className="text-sm text-blue-700 mb-2">
      Când <strong>BumpyTheRobot</strong> se ciocnește cu obiectul <strong>⚙️ Gear</strong>, acesta este șters din scenă, se redă un efect sonor, variabila <code>Score</code> este crescută cu 10 puncte, iar textul <code>ScoreText</code> este actualizat pentru a reflecta scorul curent.
    </p>
  </div>
</section>
   
   <section id="coliziune-drona">
  <h2 className="text-2xl font-bold mb-4">🚁 Coliziune cu Drona</h2>
  <p className="mb-4">
    Acest set de evenimente gestionează interacțiunea dintre <strong className="text-blue-600">🤖 BumpyTheRobot</strong> și obiectul <strong>🚁 Drone</strong>.
  </p>

  <h3 className="text-lg font-semibold mb-4 text-gray-800">🟣 Când BumpyTheRobot se ciocnește cu Drone</h3>
  <div className="bg-purple-50 p-4 rounded-lg mb-4">
    <h4 className="font-semibold text-purple-800 mb-2">Logica coliziunii:</h4>
    <div className="border-l-4 border-purple-500 pl-3">
      <p><strong>Condiții:</strong></p>
      <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
        <li>🔄 The variable <code className="bg-purple-100 px-1 py-0.5 rounded">Dead</code> of <code className="bg-purple-100 px-1 py-0.5 rounded">🚁 Drone</code> = <code className="bg-gray-100 px-1 py-0.5 rounded">false</code></li>
        <li>🤖 <code className="bg-purple-100 px-1 py-0.5 rounded">BumpyTheRobot</code> is in collision with <code className="bg-purple-100 px-1 py-0.5 rounded">🚁 Drone</code></li>
        <li>🔁 <code className="bg-gray-100 px-1 py-0.5 rounded">Trigger once</code></li>
      </ul>
    </div>
  </div>

  <h4 className="text-md font-semibold mb-3 text-gray-700">💥 Distrugerea Dronei</h4>
  <div className="bg-red-50 p-4 rounded-lg mb-4">
    <h4 className="font-semibold text-red-800 mb-2">Dacă robotul cade peste dronă:</h4>
    <div className="border-l-4 border-red-500 pl-3">
      <p><strong>Condiție:</strong> <code className="bg-red-100 px-2 py-1 rounded text-sm">🤖 BumpyTheRobot is falling</code></p>
      <p><strong>Acțiuni:</strong></p>
      <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
        <li>🔄 Change the variable <code className="bg-orange-100 px-1 py-0.5 rounded">Dead</code> of <code className="bg-purple-100 px-1 py-0.5 rounded">🚁 Drone</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">true</code></li>
      </ul>
    </div>

    <h5 className="font-semibold text-red-700 mt-4 mb-2">↗️ Facem ca robotul să sară după ce distruge drona</h5>
    <div className="border-l-4 border-yellow-500 pl-3">
      <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
        <li>✅ Allow <code className="bg-purple-100 px-1 py-0.5 rounded">🤖 BumpyTheRobot</code> to jump again</li>
        <li>⌨️ Simulate pressing Jump key for <code className="bg-purple-100 px-1 py-0.5 rounded">🤖 BumpyTheRobot</code></li>
        <li>🔊 Play the sound <code className="bg-gray-100 px-1 py-0.5 rounded">Jump 6.aac</code>, volume: <code className="bg-gray-100 px-1 py-0.5 rounded">50</code>, loop: <code className="bg-gray-100 px-1 py-0.5 rounded">no</code></li>
      </ul>
    </div>

    <h5 className="font-semibold text-red-700 mt-4 mb-2">📈 Modificăm scorul</h5>
    <div className="border-l-4 border-green-500 pl-3">
      <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
        <li>🔢 Change the variable <code className="bg-orange-100 px-1 py-0.5 rounded">Score</code>: add <code className="bg-gray-100 px-1 py-0.5 rounded">30</code></li>
      </ul>
    </div>

    <h5 className="font-semibold text-red-700 mt-4 mb-2">💥 Distrugem drona</h5>
    <div className="border-l-4 border-red-500 pl-3">
      <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
        <li>🎞️ Change the animation of <code className="bg-purple-100 px-1 py-0.5 rounded">🚁 Drone</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">"Death Explosiont"</code></li>
        <li>⛔ Activate behavior <code className="bg-gray-100 px-1 py-0.5 rounded">RectangleMovement</code> of <code className="bg-purple-100 px-1 py-0.5 rounded">🚁 Drone</code>: <code className="bg-gray-100 px-1 py-0.5 rounded">no</code></li>
        <li>🔊 Play the sound <code className="bg-gray-100 px-1 py-0.5 rounded">Explosion 3.aac</code>, loop: <code className="bg-gray-100 px-1 py-0.5 rounded">no</code></li>
      </ul>
    </div>
  </div>

<h4 className="text-md font-semibold mb-3 text-gray-700">🔴 Drona distruge robotul</h4>
<div className="bg-red-50 p-4 rounded-lg mb-4">
  <div className="border-l-4 border-red-500 pl-3 mb-4">
    <p><strong>Condiție:</strong></p>
    <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
      <li>🤖 <code className="bg-purple-100 px-1 py-0.5 rounded">BumpyTheRobot</code> is falling</li>
    </ul>

    <p className="mt-3"><strong>Acțiune:</strong></p>
    <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
      <li>🔄 Change the variable <code className="bg-orange-100 px-1 py-0.5 rounded">Dead</code> of <code className="bg-purple-100 px-1 py-0.5 rounded">🤖 BumpyTheRobot</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">true</code></li>
    </ul>
  </div>

  <div className="border-l-4 border-red-500 pl-3">
     <p><strong>Condiție:</strong></p>
    <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
      <li>🎞️ The animation of <code className="bg-purple-100 px-1 py-0.5 rounded">🚁 Drone</code> = <code className="bg-gray-100 px-1 py-0.5 rounded">"Death Explosiont"</code></li>
      <li>✅ The animation of <code className="bg-purple-100 px-1 py-0.5 rounded">🚁 Drone</code> is finished</li>
    </ul>

    <p className="mt-3"><strong>Acțiune:</strong></p>
    <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
      <li>❌ Delete <code className="bg-purple-100 px-1 py-0.5 rounded">🚁 Drone</code></li>
    </ul>
  </div>

</div>

<ImageModal
      src="/assets/images/gdevelop/BumpyPlatformer/cod-drona.png"
      alt="Cod robot"
      className="mb-4"
  />

<div className="bg-blue-50 p-4 rounded-lg">
  <h4 className="font-semibold text-blue-800 mb-2">📝 Explicația logicii</h4>
  <p className="text-sm text-blue-700 mb-2">
    Acest set de condiții și acțiuni gestionează situația în care <strong>🚁 Drone</strong> distruge <strong>🤖 BumpyTheRobot</strong>. 
    Atunci când robotul cade peste dronă și animația dronei este <code className="bg-gray-100 px-1 py-0.5 rounded">"Death Explosiont"</code>, iar animația s-a încheiat:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-blue-700">
    <li>Variabila <code className="bg-orange-100 px-1 py-0.5 rounded">Dead</code> a robotului este setată la <code className="bg-gray-100 px-1 py-0.5 rounded">true</code>.</li>
    <li>Drona este ștearsă din scenă cu acțiunea <code className="bg-gray-100 px-1 py-0.5 rounded">Delete</code>.</li>
  </ul>
  <p className="text-sm text-blue-700 mt-2">
    Această logică asigură că drona finalizează animația de explozie înainte de a fi eliminată și marchează starea robotului ca „mort”.
  </p>
</div>


</section>
<section>
  <h2 className="text-2xl font-bold mb-4">🏁 Logica de Sfârșit</h2>
  <p className="mb-4">
    Acest set de evenimente gestionează finalizarea jocului atunci când <strong className="text-blue-600">🤖 BumpyTheRobot</strong> ajunge la obiectul <strong>🟢 GreenArrow</strong>.
  </p>

  <h3 className="text-lg font-semibold mb-4 text-gray-800">🟢 Când BumpyTheRobot se ciocnește cu GreenArrow</h3>
  <div className="bg-green-50 p-4 rounded-lg mb-4">
    <div className="border-l-4 border-green-500 pl-3">
      <p><strong>Condiție:</strong> <code className="bg-green-100 px-2 py-1 rounded text-sm">🤖 BumpyTheRobot is in collision with 🟢 GreenArrow</code></p>
      <p><strong>Acțiuni:</strong></p>
      <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
        <li>🌫️ Change the opacity of <code className="bg-purple-100 px-1 py-0.5 rounded">🖼️ NewTiledSprite2</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">80</code></li>
        <li>🎯 Show layer <code className="bg-gray-100 px-1 py-0.5 rounded">"End"</code></li>
        <li>⛔ Activate behavior <code className="bg-gray-100 px-1 py-0.5 rounded">PlatformerObject</code> of <code className="bg-purple-100 px-1 py-0.5 rounded">🤖 BumpyTheRobot</code>: <code className="bg-gray-100 px-1 py-0.5 rounded">no</code></li>
      </ul>
    </div>
  </div>

  <h4 className="text-md font-semibold mb-3 text-gray-700">✏️ Modificarea textului</h4>
<div className="bg-yellow-50 p-4 rounded-lg mb-4 space-y-4">

  {/* Bloc principal - Trigger once */}
  <div className="border-l-4 border-yellow-500 pl-3 space-y-2">
    <p>
      <strong>Condiție:</strong>
      <code className="bg-gray-100 px-2 py-1 rounded text-sm ml-1">Trigger once</code>
    </p>

    <h5 className="font-semibold text-yellow-700">📝 Afișăm textul corespunzător:</h5>
    <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
      <li>
        📖 Change the text of 
        <code className="bg-purple-100 px-1 py-0.5 rounded ml-1">ScoreTextFinal</code>: 
        set to 
        <code className="bg-gray-100 px-1 py-0.5 rounded ml-1">"Scor: " + VariableString(Score)</code>
      </li>
      <li>
        ↔️ Change the width of 
        <code className="bg-purple-100 px-1 py-0.5 rounded ml-1">🖼️ NewTiledSprite2</code>: 
        set to 
        <code className="bg-gray-100 px-1 py-0.5 rounded ml-1">CameraWidth("End", 0)</code>
      </li>
    </ul>
  </div>

  {/* Bloc Score >= 130 */}
  <div className="border-l-4 border-yellow-500 pl-3 space-y-1">
    <p>
      <strong>Condiție:</strong>
      <code className="bg-gray-100 px-2 py-1 rounded text-sm ml-1">The variable Score ≥ 130</code>
    </p>
    <p>
      <strong>Acțiune:</strong> 🙈 Hide 
      <code className="bg-purple-100 px-1 py-0.5 rounded ml-1">Provocare</code>
    </p>
  </div>

  {/* Bloc Score < 130 */}
  <div className="border-l-4 border-yellow-500 pl-3 space-y-1">
    <p>
      <strong>Condiție:</strong>
      <code className="bg-gray-100 px-2 py-1 rounded text-sm ml-1">The variable Score {'<'} 130</code>
    </p>
    <p>
      <strong>Acțiune:</strong> 🙈 Hide 
      <code className="bg-purple-100 px-1 py-0.5 rounded ml-1">Evadat</code>
    </p>
  </div>

</div>


  <h4 className="text-md font-semibold mb-3 text-gray-700">🔄 Restart</h4>
  <div className="bg-orange-50 p-4 rounded-lg mb-4">
    <div className="border-l-4 border-orange-500 pl-3">
      <p><strong>Condiție:</strong></p>
      <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
        <li>🖱️ The cursor/touch is on <code className="bg-purple-100 px-1 py-0.5 rounded">Retry</code></li>
        <li>🖱️ Touch or <code className="bg-gray-100 px-1 py-0.5 rounded">"Left"</code> mouse button is released</li>
      </ul>

      <p className="mt-2"><strong>Acțiune:</strong></p>
      <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
        <li>➡️ Change to scene <code className="bg-gray-100 px-1 py-0.5 rounded">"Scena Platformer"</code></li>
      </ul>
    </div>
  </div>
</section>


<ImageModal
      src="/assets/images/gdevelop/BumpyPlatformer/cod-sfarsit.png"
      alt="Cod robot"
      className="mb-4"
  />

<div className="bg-blue-50 p-4 rounded-lg">
  <h4 className="font-semibold text-blue-800 mb-2">📝 Explicația logicii</h4>
  <p className="text-sm text-blue-700 mb-2">
    Acest bloc gestionează afișarea și actualizarea elementelor de final atunci când jocul se încheie:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-blue-700">
    <li>
      ✅ Când evenimentul <code className="bg-gray-100 px-1 py-0.5 rounded">Trigger once</code> este declanșat, textul <code className="bg-purple-100 px-1 py-0.5 rounded">ScoreTextFinal</code> este actualizat pentru a arăta scorul final al jucătorului.
    </li>
    <li>
      ↔️ Lățimea elementului <code className="bg-purple-100 px-1 py-0.5 rounded">🖼️ NewTiledSprite2</code> este ajustată pentru a se potrivi cu dimensiunea camerei.
    </li>
    <li>
      📊 Dacă <code className="bg-purple-100 px-1 py-0.5 rounded">Score ≥ 130</code>, este ascuns elementul <code className="bg-purple-100 px-1 py-0.5 rounded">Provocare</code>.
    </li>
    <li>
      📉 Dacă <code className="bg-purple-100 px-1 py-0.5 rounded">Score {'<'} 130</code>, este ascuns elementul <code className="bg-purple-100 px-1 py-0.5 rounded">Evadat</code>.
    </li>
  </ul>
  <p className="text-sm text-blue-700 mt-2">
    În acest fel, la sfârșitul jocului sunt afișate doar elementele relevante în funcție de performanța jucătorului.
  </p>
</div>


        {/* TESTARE ȘI ÎMBUNĂTĂȚIRI */}
        <section id="testare">
          <h2 className="text-2xl font-bold mb-4">🧪 Testare și Îmbunătățiri</h2>
          <StepItem number={15} title="Testează jocul">
            <p>
              Rulează jocul și verifică următoarele aspecte:
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Animațiile se schimbă corect pentru mers, săritură și cădere.</li>
              <li>Scorul se actualizează corect la colectarea obiectelor.</li>
              <li>Dronele patrulează și reacționează la coliziune.</li>
              <li>Layer-ul <code>EndScreen</code> apare la finalul nivelului.</li>
            </ul>
          </StepItem>
          <StepItem number={16} title="Îmbunătățiri suplimentare">
            <p>
              Adaugă efecte sonore suplimentare, tranziții între niveluri și un cronometru pentru a face jocul mai captivant.
            </p>
          </StepItem>
        </section>

        <Challenge title="🎯 Provocare Finală" difficulty="medium">
          <p>
            Creează un nivel nou în care jucătorul trebuie să colecteze o <strong>cheie</strong> pentru a debloca o <strong>ușă</strong> înainte de a ajunge la punctul de final. Adaugă un nou tip de inamic care se deplasează vertical pentru a crește dificultatea.
          </p>
        </Challenge>

        {/* SINTEZĂ */}
        <section className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-3">✅ Sinteză și Pași Următori</h2>
          <p className="mb-4">
            Felicitări! Ai construit un joc platformer 2D complet în GDevelop, cu mișcare fluidă, animații realiste,
            colectabile, inamici și un sistem de scor dinamic. Acum știi cum să implementezi logica de bază pentru
            un joc și cum să gestionezi interacțiunile dintre obiecte.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
};

export default GDevelopBumpyPlatformer;
