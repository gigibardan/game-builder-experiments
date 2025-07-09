import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { Button } from '@/components/ui/button';
import { Play, Rocket, Lightbulb, Check, Star, Code, Flag, ArrowRight, Zap, Timer, Gamepad } from 'lucide-react';
import ImageModal from '@/components/ImageModal';

const GDevelopKittyRunner = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'setup-proiect', title: 'Setup Proiect' },
    { id: 'extensii-necesare', title: 'Extensiile Necesare' },
    { id: 'structura-scene', title: 'Structura Scenelor' },
    { id: 'scena-intro', title: 'Scena Intro' },
    { id: 'configurare-personaje-intro', title: 'Personajele din Intro' },
    { id: 'evenimente-intro', title: 'Evenimente Intro' },
    { id: 'scena-game', title: 'Scena Game' },
    { id: 'configurare-cat', title: 'Configurarea Pisicii' },
    { id: 'configurare-platforme', title: 'Platformele și Background' },
    { id: 'configurare-obstacole', title: 'Obstacolele și Bonus-urile' },
    { id: 'configurare-particle', title: 'Particle System' },
    { id: 'evenimente-initiale', title: 'Evenimente Inițiale' },
    { id: 'game-states', title: 'Sistemul Game States' },
    { id: 'scroll-infinit', title: 'Scroll-ul Infinit' },
    { id: 'control-pisica', title: 'Controlul Pisicii' },
    { id: 'sistem-scor', title: 'Sistemul de Scor' },
    { id: 'spawn-obstacole', title: 'Spawn-ul Obstacolelor' },
    { id: 'game-over', title: 'Game Over și Restart' },
    { id: 'testare', title: 'Testare și Optimizări' }
  ];

  const resources = [
    { title: 'Documentația oficială GDevelop', url: 'https://docs.gdevelop.io/' },
    { title: 'Tutorial Platformer Games', url: 'https://wiki.gdevelop.io/gdevelop5/tutorials/platformer' },
    { title: 'Ghid Endless Runner Games', url: 'https://wiki.gdevelop.io/gdevelop5/tutorials/endless-runner' },
    { title: 'TimeDelta() și Game Logic', url: 'https://wiki.gdevelop.io/gdevelop5/all-features/common-features/mathematical-tools' }
  ];

  return (
       <LessonLayout
      title="Kitty Runner - Aventura Infinită"
      subtitle="Lecția 7 • GDevelop Programming"
      courseId="gdevelop"
      sessionId="7"
      heroColor="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Lecția anterioară",
        path: "/gdevelop/session6"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/gdevelop/session8"
      }}
    >
      <div className="space-y-8">
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4">🐱 Povestea jocului Kitty Runner</h2>
          <p className="mb-4">
            Micuța pisică Whiskers a descoperit o aventură infinită prin peisajele magice ale naturii!
            Aleargă neîncetat prin câmpii verzi, sare peste obstacole de piatră și colectează comori
            strălucitoare pe insulițe plutitoare. Dar atenție - cu fiecare secundă care trece,
            lumea devine mai rapidă și mai provocatoare!
          </p>
          <p className="mb-6">
            În acest joc de tip <strong>endless runner</strong> inspirat de celebrul Dino Run, tu controlezi
            o pisică adorabilă care trebuie să evite obstacolele și să colecteze cât mai multe puncte.
            Jocul devine progresiv mai dificil - obstacolele apar mai des și se mișcă mai repede,
            testându-ți reflexele la maximum! 🏃‍♀️💨
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
                  <span>Crearea jocurilor endless runner</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Platformer behavior pentru personaje</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Scroll infinit și iluzii de mișcare</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Sisteme complexe de spawn cu dificultate progresivă</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Game states și logică de joc avansată</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>TimeDelta() și sincronizarea frame-rate independent</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <ImageModal
                src="/assets/images/gdevelop/CatRun/imaginejoc.png"
                alt="Previzualizare joc Kitty Runner"
                className="w-full"
              />
              
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3 flex items-center">
              <Zap className="h-6 w-6 mr-2" />
              Primul tău endless runner adevărat!
            </h2>
            <p className="mb-4">
              În acest tutorial, vei învăța să creezi un joc cu mecanici complexe de endless runner.
              Vom implementa scroll infinit, spawn dinamic de obstacole, dificultate progresivă și
              multe alte concepte avansate folosite în jocurile comerciale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                <a href="/assets/images/gdevelop/CatRun/CatRun.zip" download className="flex items-center">
                  <span>Descarcă assets-urile</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600">
                <a href="/assets/proiecte finale/Gdevelop/Car run.json" download className="flex items-center">
                  <span>Descarcă proiectul final</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm flex items-start">
              <Lightbulb className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Important:</strong> Acest joc folosește concepte avansate de game development
                precum TimeDelta(), game states și spawn algorithms. Urmează cu atenție explicațiile!
              </p>
            </div>
          </div>
        </section>

        <section id="setup-proiect">
          <h2 className="text-2xl font-bold mb-4">🛠️ Setup-ul proiectului</h2>
          <p className="mb-4">
            Să începem prin a crea un proiect nou pentru endless runner-ul nostru și să importăm
            toate assets-urile necesare.
          </p>

          <StepItem number={1} title="Creează un proiect nou">
            <p>Deschide GDevelop și selectează <strong className="text-green-600">Create a new project</strong>.</p>
            <p className="mt-2">Alege opțiunea <strong className="text-green-600">Empty Game</strong> și salvează-l cu numele <code className="bg-gray-100 px-2 py-1 rounded">KittyRunner</code>.</p>
          </StepItem>

          <StepItem number={2} title="Importă assets-urile">
            <p>Extrage arhiva CatRun.zip în folderul proiectului tău. Vei avea nevoie de următoarele categorii:</p>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="bg-green-50 p-2 rounded border">🐱 Cat (5 animații)</div>
              <div className="bg-brown-50 p-2 rounded border">🪨 StoneObstacle</div>
              <div className="bg-blue-50 p-2 rounded border">🏝️ IslandObstacle</div>
              <div className="bg-yellow-50 p-2 rounded border">💎 BonusObject</div>
              <div className="bg-orange-50 p-2 rounded border">🌿 Cactus/Grass</div>
              <div className="bg-purple-50 p-2 rounded border">✨ Particles</div>
              <div className="bg-gray-50 p-2 rounded border">🎵 Sunete (Jump, Skid, Bonus, Death)</div>
              <div className="bg-pink-50 p-2 rounded border">🎨 UI (Sign, Background)</div>
            </div>
          </StepItem>

          <InfoBox title="Assets-uri pentru endless runner" icon="info" variant="primary">
            Endless runner-ele au nevoie de multe assets-uri pentru varietate: obstacole multiple,
            animații fluide pentru personaj, efecte vizuale și sunete pentru feedback constant.
          </InfoBox>
        </section>

        <section id="extensii-necesare">
          <h2 className="text-2xl font-bold mb-4">🔧 Instalarea extensiilor necesare</h2>
          <p className="mb-4">
            Pentru acest joc complex, avem nevoie de 5 extensii specializate care ne vor oferi
            funcționalități avansate pentru mișcare și efecte.
          </p>

          <div className="mb-6">
            <ImageModal
              src="/assets/images/gdevelop/CatRun/scenesiextensii.png"
              alt="Extensiile necesare"
              caption="Lista completă a extensiilor pentru Kitty Runner"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <StepItem number={1} title="Instalează toate extensiile">
            <p>În secțiunea <strong className="text-blue-600">Extensions</strong>, instalează următoarele extensii:</p>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">📏 LinearMovement</h5>
                <p className="text-sm">Pentru mișcarea liniară a obstacolelor și bonus-urilor</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🔄 ScreenWrap</h5>
                <p className="text-sm">Pentru gestionarea obiectelor care ies din ecran</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🎛️ PanelSpriteButton</h5>
                <p className="text-sm">Pentru butoanele interactive din meniu</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">〰️ SineMovement</h5>
                <p className="text-sm">Pentru animația plăcuței cu instrucțiuni</p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">👁️ IsOnScreen</h5>
                <p className="text-sm">Pentru detectarea obiectelor vizibile pe ecran</p>
              </div>
            </div>
          </StepItem>

          <InfoBox title="De ce aceste extensii?" icon="star" variant="secondary">
            Fiecare extensie are un rol specific: LinearMovement pentru scroll-ul fluid,
            SineMovement pentru efecte elegante, iar IsOnScreen pentru optimizarea performanței.
          </InfoBox>
        </section>

        <section id="structura-scene">
          <h2 className="text-2xl font-bold mb-4">🎬 Structura scenelor</h2>
          <p className="mb-4">
            Jocul nostru va avea o structură simplă dar eficientă cu 2 scene principale.
          </p>

          <StepItem number={1} title="Creează scenele">
            <p>Creează următoarele scene în proiectul tău:</p>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold mb-2">🏠 Intro</h5>
                <p className="text-sm">Ecranul de start cu pisica și instrucțiuni</p>
                <ul className="text-xs mt-2 space-y-1">
                  <li>• Pisica în animația "idle"</li>
                  <li>• Sign cu instrucțiuni</li>
                  <li>• Afișarea scorului anterior</li>
                  <li>• Touch/click pentru start</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h5 className="font-semibold mb-2">🎮 Game</h5>
                <p className="text-sm">Scena principală de gameplay</p>
                <ul className="text-xs mt-2 space-y-1">
                  <li>• Pisica cu toate animațiile</li>
                  <li>• Platforme și obstacole</li>
                  <li>• Sistem de scor</li>
                  <li>• Spawn dinamic</li>
                </ul>
              </div>
            </div>
          </StepItem>

          <StepItem number={2} title="Setează scena de start">
            <p>Setează <strong>Intro</strong> ca scenă principală în proprietățile jocului.</p>
          </StepItem>

          <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 mb-2">🔄 Fluxul jocului:</h4>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="bg-white px-3 py-1 rounded border">Intro</div>
              <ArrowRight className="h-4 w-4" />
              <div className="bg-white px-3 py-1 rounded border">Game</div>
              <ArrowRight className="h-4 w-4" />
              <div className="bg-white px-3 py-1 rounded border">Game Over</div>
              <ArrowRight className="h-4 w-4" />
              <div className="bg-white px-3 py-1 rounded border">Intro</div>
            </div>
          </div>
        </section>

        <section id="scena-intro">
          <h2 className="text-2xl font-bold mb-4">🏠 Configurarea scenei Intro</h2>
          <p className="mb-4">
            Să creăm un ecran de start simplu dar atractiv care afișează instrucțiunile și
            scorul anterior obținut.
          </p>

          <div className="mb-6">
            <ImageModal
              src="/assets/images/gdevelop/CatRun/personajeintro.png"
              alt="Personajele din Intro"
              caption="Obiectele globale și de scenă pentru ecranul Intro"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <StepItem number={1} title="Configurează obiectele globale">
            <p>În secțiunea <strong>Global Objects</strong>, adaugă următoarele obiecte care vor fi disponibile în toate scenele:</p>
            <div className="mt-3 bg-blue-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Platform</strong> - Sprite cu comportamentul Platform</li>
                <li><strong>Cat</strong> - Sprite cu toate animațiile pisicii</li>
                <li><strong>ScoreText</strong> - Text pentru afișarea scorului</li>
                <li><strong>Background</strong> - Sprite cu imaginea de fundal</li>
              </ul>
            </div>
          </StepItem>

          <StepItem number={2} title="Configurează obiectele de scenă">
            <p>În scena <strong>Intro</strong>, adaugă obiectele specifice acestei scene:</p>
            <div className="mt-3 bg-green-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Sign</strong> - Sprite cu plăcuța de instrucțiuni</li>
                <li><strong>scorFinal2</strong> - Text pentru "Scor Final:"</li>
                <li><strong>Start</strong> - Text cu "Start" sau instrucțiuni</li>
              </ul>
            </div>
          </StepItem>

          <InfoBox title="Obiectele globale vs scene objects" icon="info" variant="info">
            Obiectele globale (Platform, Cat, etc.) pot fi folosite în toate scenele,
            în timp ce obiectele de scenă sunt specifice unei anumite scene.
          </InfoBox>
        </section>

        <section id="configurare-personaje-intro">
          <h2 className="text-2xl font-bold mb-4">🐱 Configurarea personajelor din Intro</h2>
          <p className="mb-4">
            Să configurăm pisica și elementele UI pentru ecranul de start.
          </p>

          <StepItem number={1} title="Configurează pisica pentru Intro">
            <p>Fă dublu-click pe obiectul <strong>Cat</strong> și configurează:</p>
            <div className="mt-3 bg-green-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Animația inițială:</strong> "Idle" (pisica stând nemișcată)</li>
                <li><strong>Poziție:</strong> În partea de jos a ecranului, centrat</li>
                <li><strong>Scale:</strong> Dimensiune potrivită pentru a fi vizibilă dar nu prea mare</li>
              </ul>
            </div>
          </StepItem>

          <StepItem number={2} title="Configurează Sign cu SineMovement">
            <p>Pentru plăcuța cu instrucțiuni, adaugă comportamentul SineMovement:</p>
            <div className="mt-3 bg-orange-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Amplitude:</strong> 5-10 pixeli (mișcare subtilă)</li>
                <li><strong>Period:</strong> 2-3 secunde</li>
                <li><strong>Axis:</strong> Y (mișcare verticală)</li>
                <li>Aceasta va face plăcuța să "plutească" elegant</li>
              </ul>
            </div>
          </StepItem>

          <StepItem number={3} title="Configurează textele">
            <p>Pentru elementele de text:</p>
            <div className="mt-3 space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">📊 scorFinal2:</h5>
                <ul className="text-sm space-y-1">
                  <li><strong>Text:</strong> "Scor Final:"</li>
                  <li><strong>Size:</strong> 24-30</li>
                  <li><strong>Color:</strong> Contrast bun cu background-ul</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🎮 Start:</h5>
                <ul className="text-sm space-y-1">
                  <li><strong>Text:</strong> "Apasă SPACE pentru a începe!"</li>
                  <li><strong>Size:</strong> 20-24</li>
                  <li><strong>Position:</strong> Vizibil și ușor de citit</li>
                </ul>
              </div>
            </div>
          </StepItem>
        </section>

        <section id="evenimente-intro">
          <h2 className="text-2xl font-bold mb-4">🎯 Evenimente pentru scena Intro</h2>
          <p className="mb-4">
            Să implementăm logica pentru ecranul de start: afișarea scorului anterior și
            pornirea jocului la apăsarea unei taste sau touch.
          </p>

          <div className="mb-6">
            <ImageModal
              src="/assets/images/gdevelop/CatRun/evenimente-intro.png"
              alt="Evenimente Intro"
              caption="Logica pentru ecranul de start și tranziția către joc"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <StepItem number={1} title="Eveniment: At the beginning of the scene">
            <p>Creează primul eveniment pentru inițializarea ecranului Intro:</p>
            <div className="mt-3 bg-blue-50 p-4 rounded-lg">
              <p><strong>Condiție:</strong> At the beginning of the scene</p>
              <p><strong>Acțiuni:</strong></p>
              <ul className="text-sm ml-4 space-y-1">
                <li>Change the animation of Cat: set to "Idle"</li>
                <li>Change the variable scorFinal: set to Score</li>
                <li>Change the text of scorFinal2: set to "Scor Final: " + scorFinal</li>
              </ul>
            </div>
          </StepItem>

          <StepItem number={2} title="Eveniment: Start game">
            <p>Adaugă evenimentul pentru pornirea jocului:</p>
            <div className="mt-3 bg-green-50 p-4 rounded-lg">
              <p><strong>Condiție:</strong> Touch or "Left" mouse button is released</p>
              <p><strong>Sub-condiție:</strong> The cursor/touch is on Sign</p>
              <p><strong>Acțiune:</strong> Change to scene "Game"</p>
            </div>
          </StepItem>

          <InfoBox title="Variabila scorFinal" icon="info" variant="warning">
            Variabila scorFinal păstrează ultimul scor obținut în joc și îl afișează în
            ecranul Intro. Aceasta creează continuitate între sesiunile de joc.
          </InfoBox>
        </section>

        <section id="scena-game">
          <h2 className="text-2xl font-bold mb-4">🎮 Configurarea scenei Game</h2>
          <p className="mb-4">
            Acum să configurăm scena principală unde se desfășoară toată acțiunea jocului.
          </p>

          <div className="mb-6">
            <ImageModal
              src="/assets/images/gdevelop/CatRun/personajegame.png"
              alt="Personajele din Game"
              caption="Lista completă a obiectelor pentru gameplay"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <StepItem number={1} title="Adaugă obiectele de gameplay">
            <p>În scena <strong>Game</strong>, adaugă următoarele obiecte de scenă:</p>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              <div className="bg-brown-50 p-2 rounded border">🪨 StoneObstacle</div>
              <div className="bg-blue-50 p-2 rounded border">🏝️ IslandObstacle</div>
              <div className="bg-yellow-50 p-2 rounded border">💎 BonusObject</div>
              <div className="bg-purple-50 p-2 rounded border">✨ BonusParticle</div>
              <div className="bg-orange-50 p-2 rounded border">📋 Intro (plăcuța)</div>
            </div>
          </StepItem>

          <StepItem number={2} title="Poziționează obiectele globale">
            <p>Aranjează obiectele globale în scena Game:</p>
            <div className="mt-3 bg-gray-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Platform:</strong> În partea de jos, ca podea pentru pisică</li>
                <li><strong>Cat:</strong> Pe platformă, în partea stângă a ecranului</li>
                <li><strong>Background:</strong> Acoperă întreaga scenă</li>
                <li><strong>ScoreText:</strong> În colțul din stânga sus</li>
              </ul>
            </div>
          </StepItem>

          <InfoBox title="Layout pentru endless runner" icon="star" variant="info">
            În endless runner-e, personajul rămâne de obicei în partea stângă, iar obstacolele
            vin din dreapta. Platformele oferă baza pentru sistemul de sărituri.
          </InfoBox>
        </section>

        <section id="configurare-cat">
          <h2 className="text-2xl font-bold mb-4">🐱 Configurarea pisicii (personajul principal)</h2>
          <p className="mb-4">
            Pisica este inima jocului nostru - să o configurăm cu toate animațiile și
            comportamentul de platformer.
          </p>

          <div className="mb-6">
            <ImageModal
              src="/assets/images/gdevelop/CatRun/cat.png"
              alt="Configurarea pisicii"
              caption="Cele 5 animații ale pisicii: Run, Idle, Jump, Duck, Dead"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <StepItem number={1} title="Configurează animațiile pisicii">
            <p>Fă dublu-click pe obiectul <strong>Cat</strong> și configurează toate cele 5 animații:</p>
            <div className="mt-3 space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🏃 Animation 0: "Run"</h5>
                <ul className="text-sm space-y-1">
                  <li>Adaugă toate frame-urile pentru alergare</li>
                  <li><strong>Time between frames:</strong> 0.08 secunde</li>
                  <li><strong>Loop:</strong> ✅ (animație continuă)</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">😴 Animation 1: "Idle"</h5>
                <ul className="text-sm space-y-1">
                  <li>Adaugă frame-urile pentru starea de repaus</li>
                  <li><strong>Time between frames:</strong> 0.1 secunde</li>
                  <li><strong>Loop:</strong> ✅</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🦘 Animation 2: "Jump"</h5>
                <ul className="text-sm space-y-1">
                  <li>Adaugă frame-urile pentru săritură</li>
                  <li><strong>Time between frames:</strong> 0.1 secunde</li>
                  <li><strong>Loop:</strong> ❌ (se joacă o dată)</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🦆 Animation 3: "Duck"</h5>
                <ul className="text-sm space-y-1">
                  <li>Adaugă frame-urile pentru ghemuit</li>
                  <li><strong>Time between frames:</strong> 0.08 secunde</li>
                  <li><strong>Loop:</strong> ❌</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">💀 Animation 4: "Dead"</h5>
                <ul className="text-sm space-y-1">
                  <li>Adaugă frame-urile pentru moarte</li>
                  <li><strong>Time between frames:</strong> 0.1 secunde</li>
                  <li><strong>Loop:</strong> ❌</li>
                </ul>
              </div>
            </div>
          </StepItem>

          <StepItem number={2} title="Adaugă comportamentul PlatformerObject">
            <p>În tab-ul <strong className="text-green-600">Behaviors</strong>, adaugă comportamentul pentru personajele de platformer:</p>
            <div className="mt-3 bg-green-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Behavior:</strong> Platformer object</li>
                <li><strong>Jump speed:</strong> 700-800 (viteza sărituri)</li>
                <li><strong>Max speed:</strong> 0 (pisica nu se mișcă orizontal)</li>
                <li><strong>Acceleration:</strong> 0</li>
                <li><strong>Gravity:</strong> 1000-1500 (gravitația naturală)</li>
              </ul>
            </div>
          </StepItem>

          <InfoBox title="De ce Max speed = 0?" icon="info" variant="warning">
            În endless runner, personajul rămâne fix pe axa X. Iluzia de mișcare se creează
            prin deplasarea background-ului și a obstacolelor, nu a personajului!
          </InfoBox>
        </section>

        <section id="configurare-platforme">
          <h2 className="text-2xl font-bold mb-4">🏗️ Configurarea platformelor și background-ului</h2>
          <p className="mb-4">
            Să configurăm elementele de bază care creează lumea jocului: platforma pe care
            aleargă pisica și background-ul care se mișcă.
          </p>

          <StepItem number={1} title="Configurează Platform">
            <p>Fă dublu-click pe obiectul <strong>Platform</strong> și configurează:</p>
            <div className="mt-3 bg-brown-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Behavior:</strong> Platform (pentru personajele platformer)</li>
                <li><strong>Dimensiune:</strong> Suficient de lungă pentru întreaga lățime a ecranului</li>
                <li><strong>Poziție:</strong> În partea de jos a ecranului</li>
                <li><strong>Tip:</strong> Platform (permite săritura prin ea dacă e necesar)</li>
              </ul>
            </div>
          </StepItem>

          <StepItem number={2} title="Configurează Background pentru scroll">
            <p>Background-ul trebuie să se miște pentru a crea iluzia deplasării:</p>
            <div className="mt-3 bg-blue-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Dimensiune:</strong> Ceva mai larg decât ecranul pentru scroll</li>
                <li><strong>Tiling:</strong> Dacă imaginea se repetă, asigură-te că se conectează frumos</li>
                <li><strong>Layer:</strong> Background layer (sub toate celelalte obiecte)</li>
              </ul>
            </div>
          </StepItem>

          <InfoBox title="Scroll infinit - conceptul" icon="star" variant="secondary">
            Pentru scroll infinit, background-ul și platforma se mișcă continuu spre stânga.
            Când ies din ecran, le resetăm poziția pentru a continua ciclul infinit.
          </InfoBox>
        </section>

        <section id="configurare-obstacole">
          <h2 className="text-2xl font-bold mb-4">🪨 Configurarea obstacolelor și bonus-urilor</h2>
          <p className="mb-4">
            Să configurăm toate tipurile de obstacole și obiectele colectabile care vor
            apărea în joc.
          </p>

          <StepItem number={1} title="Configurează StoneObstacle">
            <p>Pentru obstacolele de piatră peste care trebuie să sărim:</p>
            <div className="mt-3 bg-gray-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Sprite:</strong> Imaginea cu piatra/cactusul</li>
                <li><strong>Behavior:</strong> DestroyWhenOutside</li>
                <li><strong>Collision mask:</strong> Ajustează pentru coliziune precisă</li>
                <li><strong>Origin point:</strong> Centrat pentru poziționare ușoară</li>
              </ul>
            </div>
          </StepItem>

          <StepItem number={2} title="Configurează IslandObstacle">
            <p>Pentru insulițele plutitoare cu bonus-uri:</p>
            <div className="mt-3 bg-blue-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Behavior:</strong> Platform (pisica poate sări pe ele)</li>
                <li><strong>Behavior:</strong> DestroyWhenOutside</li>
                <li><strong>Înălțime:</strong> Suficient de înaltă pentru a necesita săritura</li>
                <li><strong>Variabilă:</strong> Reward (0, 1, 2 pentru tipul de recompensă)</li>
              </ul>
            </div>
          </StepItem>

          <StepItem number={3} title="Configurează BonusObject">
            <p>Pentru obiectele colectabile (diamante, monede):</p>
            <div className="mt-3 bg-yellow-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Sprite:</strong> Obiect strălucitor și atractiv</li>
                <li><strong>Behavior:</strong> DestroyWhenOutside</li>
                <li><strong>Animație:</strong> Dacă are frame-uri multiple, fă-le să se rotească</li>
                <li><strong>Valoare:</strong> 500 puncte pentru fiecare bonus colectat</li>
              </ul>
            </div>
          </StepItem>

          <div className="mt-6">
            <ImageModal
              src="/assets/images/gdevelop/CatRun/bonusparticle.png"
              alt="Configurarea BonusParticle"
              caption="Setările particle emitter pentru efectele de bonus"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <InfoBox title="Sistemul de reward pentru insule" icon="star" variant="info">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>Reward = 0:</strong> Bonus la baza insulei</li>
              <li><strong>Reward = 1:</strong> Bonus deasupra insulei</li>
              <li><strong>Reward = 2:</strong> Fără bonus (doar obstacol)</li>
            </ul>
          </InfoBox>
        </section>

        <section id="configurare-particle">
          <h2 className="text-2xl font-bold mb-4">✨ Configurarea Particle System</h2>
          <p className="mb-4">
            Să configurăm efectul spectaculos de particule care apare când colectăm bonus-uri.
          </p>

          <StepItem number={1} title="Configurează BonusParticle">
            <p>Creează un obiect <strong>Particle Emitter</strong> numit BonusParticle cu următoarele setări:</p>
            <div className="mt-3 space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🎨 Tipul particulelor:</h5>
                <ul className="text-sm space-y-1">
                  <li><strong>Particle type:</strong> Circle</li>
                  <li><strong>Size:</strong> 3</li>
                  <li><strong>Start color:</strong> 74;173;226 (albastru strălucitor)</li>
                  <li><strong>End color:</strong> 172;239;255 (albastru deschis)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">⚙️ Setări emitere:</h5>
                <ul className="text-sm space-y-1">
                  <li><strong>Max particles displayed:</strong> 10</li>
                  <li><strong>Particles in tank:</strong> 10</li>
                  <li><strong>Flow:</strong> 20 particles/second</li>
                  <li><strong>Delete when out of particles:</strong> ✅</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🚀 Fizica particulelor:</h5>
                <ul className="text-sm space-y-1">
                  <li><strong>Min/Max emitter force:</strong> 45-85</li>
                  <li><strong>Spray cone angle:</strong> 90° (în sus)</li>
                  <li><strong>Emitter radius:</strong> 32</li>
                  <li><strong>Gravity X/Y:</strong> 0/0 (fără gravitație)</li>
                  <li><strong>Lifetime:</strong> 0.5-1.5 secunde</li>
                </ul>
              </div>
            </div>
          </StepItem>

          <InfoBox title="Emisia la -90 grade" icon="info" variant="warning">
            În evenimente, vom seta emission angle la -90 grade pentru ca particulele să
            zboare în sus când colectăm un bonus, creând un efect vizual plăcut.
          </InfoBox>
        </section>

        <section id="evenimente-initiale">
          <h2 className="text-2xl font-bold mb-4">🎯 Evenimente inițiale pentru Game</h2>
          <p className="mb-4">
            Să implementăm logica de inițializare pentru scena de joc.
          </p>

          <div className="mb-6">
            <ImageModal
              src="/assets/images/gdevelop/CatRun/atabeginingofthescene.png"
              alt="Evenimente inițiale"
              caption="Inițializarea jocului: animație, scor și poziții"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <StepItem number={1} title="Eveniment: At the beginning of the scene">
            <p>Creează primul eveniment pentru inițializarea scenei Game:</p>
            <div className="mt-3 bg-blue-50 p-4 rounded-lg">
              <p><strong>Condiție:</strong> At the beginning of the scene</p>
              <p><strong>Acțiuni:</strong></p>
              <ul className="text-sm ml-4 space-y-1">
                <li>Change the animation of Cat: set to "Idle"</li>
                <li>Change the variable Score: set to 0</li>
                <li>Change the variable InitialX of Cat: set to Cat.X()</li>
                <li>Hide ScoreText</li>
              </ul>
            </div>
          </StepItem>

          <InfoBox title="Variabila InitialX" icon="help" variant="info">
            <strong>InitialX</strong> păstrează poziția originală a pisicii pe axa X.
            Aceasta este esențială pentru a menține pisica în aceeași poziție orizontală
            pe parcursul întregului joc, în timp ce lumea se mișcă în jurul ei.
          </InfoBox>
        </section>

        <section id="game-states">
          <h2 className="text-2xl font-bold mb-4">🎮 Sistemul Game States</h2>
          <p className="mb-4">
            Să implementăm sistemul de stări care controlează fluxul jocului: pregătire,
            joc activ și game over.
          </p>

          <div className="mb-6">
            <ImageModal
              src="/assets/images/gdevelop/CatRun/gamestates.png"
              alt="Game States"
              caption="Sistemul de stări: Preparing → Playing"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <StepItem number={1} title="Grup: Game states">
            <p>Creează un grup de evenimente numit "Game states" cu următoarele sub-evenimente:</p>

            <div className="mt-3 space-y-4">
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🔄 Preparing to start:</h5>
                <p className="text-sm mb-2"><strong>Condiție principală:</strong> The variable GameStatus = "Preparing"</p>
                <p className="text-sm mb-2"><strong>Sub-eveniment:</strong></p>
                <ul className="text-sm ml-4 space-y-1">
                  <li><strong>Condiție:</strong> "Space" key is pressed</li>
                  <li><strong>Acțiuni:</strong></li>
                  <ul className="text-xs ml-6 space-y-1">
                    <li>Change the variable GameStatus: set to "Playing"</li>
                    <li>Start (or reset) the timer "obstacle_spawn"</li>
                    <li>Change the animation of Cat: set to "Run"</li>
                  </ul>
                </ul>
              </div>
            </div>
          </StepItem>

          <InfoBox title="Ce este GameStatus?" icon="star" variant="secondary">
            <strong>GameStatus</strong> este o variabilă text care controlează comportamentul jocului:
            <ul className="list-disc list-inside space-y-1 text-sm mt-2">
              <li><strong>"Preparing":</strong> Jocul așteaptă să înceapă</li>
              <li><strong>"Playing":</strong> Jocul este activ</li>
              <li><strong>"Dead":</strong> Game over, pisica a murit</li>
            </ul>
          </InfoBox>
        </section>

        <section id="scroll-infinit">
          <h2 className="text-2xl font-bold mb-4">🌊 Implementarea scroll-ului infinit</h2>
          <p className="mb-4">
            Să creăm iluzia de mișcare continuă prin deplasarea background-ului și platformei.
          </p>

          <div className="mb-6">
            <ImageModal
              src="/assets/images/gdevelop/CatRun/playngthegame.png"
              alt="Playing the game"
              caption="Logica principală de joc: UI update și scroll infinit"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <StepItem number={1} title="Grup: Playing the game">
            <p>Sub grupul "Game states", creează un sub-grup "Playing the game":</p>

            <div className="mt-3 space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🎮 Condiția principală:</h5>
                <p className="text-sm"><strong>The variable GameStatus = "Playing"</strong></p>
                <p className="text-sm mt-2"><strong>Acțiuni (fără sub-condiții):</strong></p>
                <ul className="text-sm ml-4 space-y-1">
                  <li>Change the text of ScoreText: set to "Score: " + Score</li>
                  <li>Hide Intro</li>
                  <li>Show ScoreText</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🌊 Scroll infinit:</h5>
                <p className="text-sm mb-2"><strong>Comentariu:</strong> Create the illusion that Cat is moving by moving the background and platform images</p>
                <p className="text-sm"><strong>Acțiuni (fără condiții):</strong></p>
                <ul className="text-sm ml-4 space-y-1">
                  <li>Change the X offset of Platform: add ObstacleSpeed * TimeDelta()</li>
                  <li>Change the X offset of Background: add ObstacleSpeed / 500 * 60 * TimeDelta()</li>
                </ul>
              </div>
            </div>
          </StepItem>

          <InfoBox title="Ce este TimeDelta()?" icon="warning" variant="warning">
            <strong>TimeDelta()</strong> returnează timpul în secunde care a trecut de la ultimul frame.
            Este esențial pentru:
            <ul className="list-disc list-inside space-y-1 text-sm mt-2">
              <li><strong>Frame-rate independence:</strong> Jocul rulează la aceeași viteză pe orice dispozitiv</li>
              <li><strong>Smooth movement:</strong> Mișcări fluide indiferent de FPS</li>
              <li><strong>Consistent timing:</strong> Logica de timp funcționează corect</li>
            </ul>
          </InfoBox>
        </section>

        <section id="control-pisica">
          <h2 className="text-2xl font-bold mb-4">🎮 Controlul pisicii și animațiile</h2>
          <p className="mb-4">
            Să implementăm sistemul de control pentru pisică și logica animațiilor.
          </p>

          <div className="mb-6">
            <ImageModal
              src="/assets/images/gdevelop/CatRun/catmovments+control.png"
              alt="Cat movements și control"
              caption="Sistemul complet de control și animații pentru pisică"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <StepItem number={1} title="Grup: Cat movements">
            <p>Sub "Playing the game", creează grupul "Cat movements":</p>

            <div className="mt-3 space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">📍 Avoid the cat to stick on platforms:</h5>
                <p className="text-sm mb-2"><strong>Comentariu:</strong> Evită ca pisica să rămână "lipită" de platformă</p>
                <p className="text-sm"><strong>Acțiune (fără condiții):</strong></p>
                <ul className="text-sm ml-4 space-y-1">
                  <li>Change the X position of Cat: set to Cat.InitialX</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🏃 Animația de alergare:</h5>
                <ul className="text-sm space-y-1">
                  <li><strong>Condiție:</strong> Cat is on floor</li>
                  <li><strong>Sub-condiție:</strong> The animation of Cat is finished</li>
                  <li><strong>Acțiune:</strong> Change the animation of Cat: set to "Run"</li>
                </ul>
              </div>
            </div>
          </StepItem>

          <StepItem number={2} title="Sub-grup: Sounds">
            <p>Adaugă sistemul de sunete pentru acțiunile pisicii:</p>

            <div className="mt-3 space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🦘 Sunetul de săritură:</h5>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-2">Primul eveniment:</p>
                    <ul className="text-sm space-y-1">
                      <li><strong>Condiție:</strong> Cat is jumping</li>
                      <li><strong>Trigger once:</strong> ✅</li>
                      <li><strong>Acțiuni:</strong></li>
                    </ul>
                    <ul className="text-xs ml-4 space-y-1 mt-1">
                      <li>Play the sound Jump.mp3, vol: 100, loop: no</li>
                      <li>Change the animation of Cat: set to "Jump"</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold mb-2">Al doilea eveniment:</p>
                    <ul className="text-sm space-y-1">
                      <li><strong>Condiție:</strong> The animation of Cat = "Duck"</li>
                      <li><strong>Trigger once:</strong> ✅</li>
                      <li><strong>Acțiune:</strong> Play the sound Skid.mp3, vol: 30, loop: no</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </StepItem>

          <StepItem number={3} title="Sub-grup: Controls">
            <p>Implementează sistemul de control cu taste:</p>

            <div className="mt-3 space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">⬆️ Control săritură:</h5>
                <ul className="text-sm space-y-1">
                  <li><strong>Condiție:</strong> "Up" key is pressed</li>
                  <li><strong>Acțiune:</strong> Simulate pressing Jump key for Cat</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">⬇️ Control ghemuit:</h5>
                <ul className="text-sm space-y-1">
                  <li><strong>Condiție:</strong> "Down" key is pressed</li>
                  <li><strong>Sub-condiție:</strong> Cat is on floor</li>
                  <li><strong>Trigger once:</strong> ✅</li>
                  <li><strong>Acțiune:</strong> Change the animation of Cat: set to "Duck"</li>
                </ul>
              </div>
            </div>
          </StepItem>

          <InfoBox title="De ce Cat.InitialX?" icon="info" variant="info">
            În fiecare frame, resetăm poziția X a pisicii la valoarea inițială. Aceasta previne
            "drift-ul" care poate apărea din cauza interacțiunilor cu platformele în mișcare.
          </InfoBox>
        </section>

        <section id="sistem-scor">
          <h2 className="text-2xl font-bold mb-4">🏆 Sistemul de scor și bonus-uri</h2>
          <p className="mb-4">
            Să implementăm sistemul de punctaj care crește automat în timp și
            reward-urile pentru colectarea obiectelor.
          </p>

          <div className="mb-6">
            <ImageModal
              src="/assets/images/gdevelop/CatRun/score.png"
              alt="Sistemul de scor"
              caption="Scorul automat și bonus-urile cu particle effects"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <StepItem number={1} title="Grup: Score">
            <p>Creează grupul "Score" cu următoarele evenimente:</p>

            <div className="mt-3 space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">⏱️ Scor automat:</h5>
                <p className="text-sm"><strong>Acțiune (fără condiții):</strong></p>
                <ul className="text-sm ml-4 space-y-1">
                  <li>Change the variable Score: add round(TimeDelta() * 100)</li>
                </ul>
                <p className="text-xs mt-2 text-gray-600">Adaugă aproximativ 100 puncte pe secundă</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">💎 Bonus pentru colectarea obiectelor:</h5>
                <p className="text-sm"><strong>Condiție:</strong> Cat is in collision with BonusObject</p>
                <p className="text-sm"><strong>Acțiuni:</strong></p>
                <ul className="text-sm ml-4 space-y-1">
                  <li>Change the variable Score: add 500</li>
                  <li>Create object BonusParticle at position Cat.CenterX();Cat.CenterY()</li>
                  <li>Change the emission angle of BonusParticle: set to -90</li>
                  <li>Delete BonusObject</li>
                  <li>Play the sound Bonus.mp3, vol: 100, loop: no</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">✨ Urmărirea particulelor:</h5>
                <p className="text-sm"><strong>Acțiune (fără condiții):</strong></p>
                <ul className="text-sm ml-4 space-y-1">
                  <li>Change the position of the center of BonusParticle: set to Cat.CenterX() (x axis), set to Cat.CenterY() (y axis)</li>
                </ul>
                <p className="text-xs mt-2 text-gray-600">Particulele urmăresc pisica pentru efect vizual mai bun</p>
              </div>
            </div>
          </StepItem>

          <InfoBox title="Formula scorului automat" icon="warning" variant="secondary">
            <strong>round(TimeDelta() * 100)</strong> înseamnă:
            <ul className="list-disc list-inside space-y-1 text-sm mt-2">
              <li>TimeDelta() = timpul unui frame (ex: 0.016s la 60 FPS)</li>
              <li>* 100 = înmulțire pentru puncte mai multe</li>
              <li>round() = rotunjire pentru numere întregi frumoase</li>
              <li>Rezultat: ~100 puncte pe secundă, indiferent de FPS</li>
            </ul>
          </InfoBox>
        </section>

        <section id="spawn-obstacole">
          <h2 className="text-2xl font-bold mb-4">🎲 Sistemul complex de spawn obstacole</h2>
          <p className="mb-4">
            Să implementăm sistemul avansat de generare a obstacolelor cu dificultate progresivă
            și tipuri multiple de provocări.
          </p>

          <div className="mb-6">
            <ImageModal
              src="/assets/images/gdevelop/CatRun/obstaclespawn.png"
              alt="Obstacle spawn system"
              caption="Sistemul complex de spawn cu dificultate progresivă"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <StepItem number={1} title="Grup: Obstacle spawn">
            <p>Creează grupul "Obstacle spawn" cu sistemul de dificultate progresivă:</p>

            <div className="mt-3 space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">⚡ Increase difficulty with score:</h5>
                <p className="text-sm mb-2"><strong>Comentariu:</strong> Increase difficulty with score by reducing the spawn delay (min. 0.7 second) and increasing obstacle speed (max. 2000)</p>
                <ul className="text-sm space-y-2">
                  <li><strong>Condiție 1:</strong> The variable ObstacleSpeed &lt; 2000</li>
                  <li><strong>Acțiune:</strong> Change the variable ObstacleSpeed: add TimeDelta()*8</li>
                  <li><strong>Condiție 2:</strong> The variable ObstacleSpawnDelay &gt; 0.7</li>
                  <li><strong>Acțiune:</strong> Change the variable ObstacleSpawnDelay: subtract TimeDelta()/30</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🎯 Spawn trigger:</h5>
                <ul className="text-sm space-y-1">
                  <li><strong>Condiție:</strong> The timer "obstacle_spawn" &gt; ObstacleSpawnDelay seconds</li>
                  <li><strong>Acțiuni:</strong></li>
                  <ul className="text-xs ml-4 space-y-1">
                    <li>Change the variable ObstacleType: set to RandomInRange(0,2)</li>
                    <li>Start (or reset) the timer "obstacle_spawn"</li>
                  </ul>
                </ul>
              </div>
            </div>
          </StepItem>

          <StepItem number={2} title="Tipurile de obstacole">
            <p>Sub evenimentul de spawn, adaugă sub-evenimente pentru fiecare tip:</p>

            <div className="mt-3 space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🪨 ObstacleType = 0 (StoneObstacle):</h5>
                <ul className="text-sm space-y-1">
                  <li><strong>Condiție:</strong> The variable ObstacleType = 0</li>
                  <li><strong>Acțiuni:</strong></li>
                  <ul className="text-xs ml-4 space-y-1">
                    <li>Create object StoneObstacle at position RandomInRange(75, 125) + SceneWindowWidth();Platform.BoundingBoxTop() (layer: Base layer)</li>
                    <li>Add to StoneObstacle a permanent force, angle: 180 degrees and length: ObstacleSpeed pixels</li>
                  </ul>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🏝️ ObstacleType = 1 (IslandObstacle):</h5>
                <p className="text-sm mb-2"><strong>Comentariu:</strong> Create an island with a reward (0: reward on bottom, 1: reward on top, 2: no reward)</p>
                <ul className="text-sm space-y-1">
                  <li><strong>Condiție:</strong> The variable ObstacleType = 1</li>
                  <li><strong>Acțiuni:</strong></li>
                  <ul className="text-xs ml-4 space-y-1">
                    <li>Create object IslandObstacle at position RandomInRange(75, 125) + SceneWindowWidth();Platform.BoundingBoxTop() - 64</li>
                    <li>Change the variable Reward of IslandObstacle: set to RandomInRange(0, 2)</li>
                    <li>Add to IslandObstacle a permanent force, angle: 180 degrees and length: ObstacleSpeed pixels</li>
                  </ul>
                </ul>

                <div className="mt-3 bg-white p-3 rounded border">
                  <p className="text-xs font-semibold mb-1">Sub-evenimente pentru rewards:</p>
                  <ul className="text-xs space-y-1">
                    <li><strong>Dacă Reward = 0:</strong> Create BonusObject at IslandObstacle.PointX("RewardUp");IslandObstacle.PointY("RewardUp")</li>
                    <li><strong>Dacă Reward = 1:</strong> Create BonusObject at IslandObstacle.PointX("RewardDown");IslandObstacle.PointY("RewardDown")</li>
                    <li>Pentru ambele: Add to BonusObject a permanent force, angle: 180 degrees and length: ObstacleSpeed pixels</li>
                  </ul>
                </div>
              </div>
            </div>
          </StepItem>

          <StepItem number={3} title="Cactus Field System">
            <p>Implementează sistemul complex de câmp de cactusi:</p>

            <div className="mt-3 space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🌵 ObstacleType = 2 (Cactus Field):</h5>
                <p className="text-sm mb-2"><strong>Comentariu:</strong> Spawn a cactus field of length scaling with score (max 4)</p>
                <ul className="text-sm space-y-1">
                  <li><strong>Condiție:</strong> The variable ObstacleType = 2</li>
                  <li><strong>Acțiune:</strong> Change the variable CactusInField: set to RandomInRange(1, 1 + round(clamp(Score / 3000, 0, 4)))</li>
                </ul>

                <div className="mt-3 bg-white p-3 rounded border">
                  <p className="text-xs font-semibold mb-1">Loop pentru generarea cactusilor:</p>
                  <ul className="text-xs space-y-1">
                    <li><strong>While these conditions are true:</strong></li>
                    <li><strong>Condiție:</strong> The variable SpawnedCactusInField &lt; CactusInField</li>
                    <li><strong>Repeat these:</strong></li>
                    <ul className="text-xs ml-4 space-y-1">
                      <li>Create object StoneObstacle at position 100 + SceneWindowWidth() + SpawnedCactusInField * 70;Platform.BoundingBoxTop() + 5</li>
                      <li>Add to StoneObstacle a permanent force, angle: 180 degrees and length: ObstacleSpeed pixels</li>
                      <li>Change the variable SpawnedCactusInField: add 1</li>
                    </ul>
                    <li><strong>După loop:</strong> Change the variable SpawnedCactusInField: set to 0</li>
                  </ul>
                </div>
              </div>
            </div>
          </StepItem>

          <InfoBox title="Sistemul Cactus Field explicat" icon="star" variant="warning">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>CactusInField:</strong> Numărul de cactusi care se vor genera (1-5)</li>
              <li><strong>Formula Score/3000:</strong> Cu cât scorul e mai mare, cu atât mai mulți cactusi</li>
              <li><strong>clamp(0, 4):</strong> Limitează la maximum 4 cactusi</li>
              <li><strong>SpawnedCactusInField * 70:</strong> Distanța de 70 pixeli între cactusi</li>
              <li><strong>Rezultat:</strong> Provocare crescândă - câmpuri mai lungi la scoruri mari!</li>
            </ul>
          </InfoBox>
        </section>

        <section id="game-over">
          <h2 className="text-2xl font-bold mb-4">💀 Sistemul Game Over</h2>
          <p className="mb-4">
            Să implementăm logica de detectare a coliziunilor și game over cu efecte dramatice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Sistemul Game Over:</h3>
              <ImageModal
                src="/assets/images/gdevelop/CatRun/gameover.png"
                alt="Game Over system"
                caption="Detectarea coliziunilor și game over logic"
                className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Game Lost transition:</h3>
              <ImageModal
                src="/assets/images/gdevelop/CatRun/gamelost.png"
                alt="Game Lost"
                caption="Tranziția înapoi la ecranul Intro"
                className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              />
            </div>
          </div>

          <StepItem number={1} title="Grup: Game Over">
            <p>Creează grupul "Game Over" cu detectarea coliziunilor mortale:</p>

            <div className="mt-3 space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">💥 Coliziuni mortale:</h5>
                <p className="text-sm mb-2"><strong>Comentariu:</strong> Player loses when either of these conditions is checked:</p>
                <p className="text-sm mb-2">- cat collided with a Cactus</p>
                <p className="text-sm mb-2">- cat collided with an Island and is under it (= the played did not duck)</p>

                <div className="mt-3 bg-white p-3 rounded border">
                  <p className="text-xs font-semibold mb-1">If one of these conditions is true:</p>
                  <ul className="text-xs space-y-1">
                    <li><strong>Condiție 1:</strong> Cat is in collision with StoneObstacle</li>
                    <li><strong>Condiție 2 (AND):</strong> Cat is in collision with IslandObstacle</li>
                    <li><strong>Sub-condiție:</strong> The bounding box bottom position of Cat &gt; IslandObstacle.BoundingBoxCenterY()</li>
                  </ul>

                  <p className="text-xs font-semibold mt-2 mb-1">Acțiuni:</p>
                  <ul className="text-xs space-y-1">
                    <li>Abort the current jump of Cat</li>
                    <li>Change the animation of Cat: set to "Dead"</li>
                    <li>Change the variable GameStatus: set to "Dead"</li>
                    <li>Pause timer "obstacle_spawn"</li>
                    <li>Pick all instances of MovingObjects</li>
                    <li>Stop MovingObjects (remove all forces)</li>
                    <li>Play the sound Death.mp3, vol: 30, loop: no</li>
                  </ul>
                </div>
              </div>
            </div>
          </StepItem>

          <StepItem number={2} title="Grup: Game lost">
            <p>Implementează tranziția către ecranul Intro după moarte:</p>

            <div className="mt-3 bg-gray-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">🔄 Restart după animația de moarte:</h5>
              <ul className="text-sm space-y-1">
                <li><strong>Condiție:</strong> The variable GameStatus = "Dead"</li>
                <li><strong>Sub-condiții:</strong></li>
                <ul className="text-xs ml-4 space-y-1">
                  <li>The animation of Cat = "Dead"</li>
                  <li>The animation of Cat is finished</li>
                </ul>
                <li><strong>Acțiune:</strong> Change to scene "Intro"</li>
              </ul>
            </div>
          </StepItem>

          <InfoBox title="Logica coliziunii cu insula" icon="info" variant="warning">
            Pentru IslandObstacle, verificăm dacă pisica este <strong>sub</strong> insulă:
            <ul className="list-disc list-inside space-y-1 text-sm mt-2">
              <li><strong>Cat.BoundingBoxBottom {'>'} Island.BoundingBoxCenterY()</strong></li>
              <li>Dacă pisica a făcut "duck", trece pe sub insulă = OK</li>
              <li>Dacă nu a făcut "duck", se lovește de insulă = Game Over</li>
            </ul>
          </InfoBox>
        </section>

        <section id="testare">
          <h2 className="text-2xl font-bold mb-4">🎮 Testarea și optimizările finale</h2>
          <p className="mb-4">
            Acum că ai implementat întregul sistem, să testezi jocul și să faci ultimele ajustări
            pentru o experiență perfectă de endless runner!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <ImageModal
                src="/assets/images/gdevelop/CatRun/imaginejoc.png"
                alt="Jocul Kitty Runner finalizat"
                className="w-full"
              />
              <div className="p-4">
                <h4 className="font-bold mb-2">Kitty Runner - aventura ta infinită!</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Aleargă cu pisica prin peisaje infinite și evită obstacolele!
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Play className="h-4 w-4 mr-2" />
                  <span>Testează jocul</span>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">🎯 Lista de verificare:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Scroll-ul infinit funcționează fluid</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Pisica sare și se ghemuiește corect</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Animațiile se schimbă în contextul potrivit</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Obstacolele apar aleatoriu și variabil</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Cactus fields creează provocări progresive</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Bonus-urile generează particle effects</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Dificultatea crește progresiv cu scorul</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Game Over funcționează pentru toate coliziunile</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Sunetele se redau la momentele potrivite</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Scorul se salvează și se afișează în Intro</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <h3 className="text-lg font-semibold">📸 Codul complet al jocului:</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <ImageModal
                  src="/assets/images/gdevelop/CatRun/totcodul1.png"
                  alt="Codul complet partea 1"
                  caption="Prima parte a codului: Game states și control"
                  className="w-full cursor-pointer hover:opacity-90 transition-opacity"
                />
                <div className="p-2 text-center text-sm text-gray-600">
                  Partea 1: Setup și control
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <ImageModal
                  src="/assets/images/gdevelop/CatRun/totcodul2.png"
                  alt="Codul complet partea 2"
                  caption="A doua parte a codului: Scor și spawn obstacole"
                  className="w-full cursor-pointer hover:opacity-90 transition-opacity"
                />
                <div className="p-2 text-center text-sm text-gray-600">
                  Partea 2: Scor și spawn
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <ImageModal
                  src="/assets/images/gdevelop/CatRun/totcodul3.png"
                  alt="Codul complet partea 3"
                  caption="A treia parte a codului: Game Over și restart"
                  className="w-full cursor-pointer hover:opacity-90 transition-opacity"
                />
                <div className="p-2 text-center text-sm text-gray-600">
                  Partea 3: Game Over
                </div>
              </div>
            </div>
          </div>

          <Challenge title="🚀 Provocări pentru îmbunătățirea jocului" difficulty="hard">
            <p>După ce ai masterizat mecanica de bază, încearcă aceste extensii avansate:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🏃
                </div>
                <div>
                  <h4 className="font-bold">Personaje multiple</h4>
                  <p className="text-sm text-gray-600">Adaugă mai multe personaje jucabile cu abilități diferite (viteză, săritură mai înaltă, etc.)</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🌍
                </div>
                <div>
                  <h4 className="font-bold">Medii variate</h4>
                  <p className="text-sm text-gray-600">Creează diferite biome-uri (pădure, deșert, oraș) cu obstacole și efecte specifice.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  ⚡
                </div>
                <div>
                  <h4 className="font-bold">Power-ups temporare</h4>
                  <p className="text-sm text-gray-600">Magnetism pentru bonus-uri, invincibilitate temporară, super săritură.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-yellow-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🏆
                </div>
                <div>
                  <h4 className="font-bold">Achievement system</h4>
                  <p className="text-sm text-gray-600">Realizări pentru distanțe parcurse, bonus-uri colectate, sărituri perfecte.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🎵
                </div>
                <div>
                  <h4 className="font-bold">Muzică dinamică</h4>
                  <p className="text-sm text-gray-600">Muzică de fundal care se accelerează cu dificultatea și efecte sonore îmbunătățite.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  📱
                </div>
                <div>
                  <h4 className="font-bold">Mobile optimization</h4>
                  <p className="text-sm text-gray-600">Control touch optimizat, UI adaptat pentru telefoane și export pentru Android/iOS.</p>
                </div>
              </div>
            </div>
          </Challenge>

          <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-bold mb-3">⚡ Optimizări pentru performanță</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">🚀 Gestionarea obiectelor:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Folosește DestroyWhenOutside pentru curățenie automată</li>
                  <li>Limitează numărul maxim de obstacole active</li>
                  <li>Optimizează detectarea coliziunilor</li>
                  <li>Folosește object pooling pentru obiecte frecvente</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">⏱️ TimeDelta() best practices:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Folosește TimeDelta() pentru toate mișcările</li>
                  <li>Evită hardcodat frame rates</li>
                  <li>Testează pe dispozitive cu FPS diferit</li>
                  <li>Limitează update-urile intensive la câteva frames</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-2xl font-bold mb-3">🏆 Felicitări pentru primul tău endless runner!</h2>
          <p className="mb-4">
            Ai creat cu succes "Kitty Runner" - un endless runner complet cu toate mecanicile unui joc comercial!
            Acest proiect complex ți-a permis să înveți concepte avansate de game development:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-2 flex items-center">
                <Timer className="h-5 w-5 text-green-600 mr-2" />
                Frame-Rate Independence
              </h4>
              <ul className="text-sm space-y-1">
                <li>• TimeDelta() pentru mișcări fluide</li>
                <li>• Logică consistentă pe orice FPS</li>
                <li>• Optimizare pentru toate dispozitivele</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-2 flex items-center">
                <Zap className="h-5 w-5 text-blue-600 mr-2" />
                Sisteme Complexe
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Spawn dinamic cu dificultate progresivă</li>
                <li>• Game states pentru flow control</li>
                <li>• Scroll infinit și iluzii de mișcare</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-2 flex items-center">
                <Gamepad className="h-5 w-5 text-purple-600 mr-2" />
                Mecanici Avansate
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Platformer behavior integration</li>
                <li>• Algoritmi complexi de spawn</li>
                <li>• Sisteme de particule și efecte</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg mb-4">
            <h4 className="font-bold mb-2">🚀 Următorii pași în dezvoltarea de jocuri:</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li><strong>Publică și testează</strong> - Distribuie jocul pentru feedback de la jucători reali</li>
              <li><strong>Studiază metrici</strong> - Analizează cum joacă oamenii pentru îmbunătățiri</li>
              <li><strong>Învață algoritmi noi</strong> - Explorează AI, procedural generation, physics</li>
              <li><strong>Colaborează</strong> - Lucrează cu artiști, muzicieni, designeri pentru jocuri complete</li>
              <li><strong>Experimentează genuri</strong> - Aplică conceptele învățate la puzzle games, RPG-uri, etc.</li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a href="/gdevelop/session8" className="flex items-center">
                <ArrowRight className="h-5 w-5 mr-2" />
                <span>Continuă cu următoarea lecție</span>
              </a>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <a href="/courses/gdevelop" className="flex items-center">
                <Star className="h-5 w-5 mr-2" />
                <span>Vezi toate lecțiile GDevelop</span>
              </a>
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              🎮 Ai învățat să creezi jocuri cu sisteme complexe și mecanici avansate!
              Acum poți aborda orice tip de joc cu încredere și cunoștințe solide!
            </p>
          </div>
        </section>
      </div>
    </LessonLayout>
  );
};
export default GDevelopKittyRunner;