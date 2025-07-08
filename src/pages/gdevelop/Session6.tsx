import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { Button } from '@/components/ui/button';
import { Play, Rocket, Lightbulb, Check, Star, Code, Flag, ArrowRight, Smartphone, Zap, Layers } from 'lucide-react';
import ImageModal from '@/components/ImageModal';

const GDevelopGeometryMonster = () => {
 const sidebarItems = [
   { id: 'intro', title: 'Introducere', isActive: true },
   { id: 'setup-proiect', title: 'Setup Proiect' },
   { id: 'rezolutie-mobil', title: 'Rezoluție Mobilă' },
   { id: 'extensii', title: 'Extensiile Necesare' },
   { id: 'structura-scene', title: 'Structura Scenelor' },
   { id: 'scena-mainmenu', title: 'Scena MainMenu' },
   { id: 'configurare-logo', title: 'Logo Animat cu EllipseMovement' },
   { id: 'butoane-menu', title: 'Butoanele de Navigare' },
   { id: 'scena-level1', title: 'Scena Level1' },
   { id: 'configurare-monster', title: 'Configurarea Monster-ului' },
   { id: 'configurare-forme', title: 'Configurarea Formelor' },
   { id: 'configurare-particle', title: 'Particle Emitters' },
   { id: 'configurare-ui', title: 'UI și Layers' },
   { id: 'evenimente-control', title: 'Controlul Monster-ului' },
   { id: 'evenimente-spawn', title: 'Spawn-ul Obiectelor' },
   { id: 'evenimente-coliziuni', title: 'Coliziuni și Efecte' },
   { id: 'evenimente-health', title: 'Sistemul de Vieți' },
   { id: 'scena-restart', title: 'Scena Restart' },
   { id: 'testare', title: 'Testare și Optimizări' }
 ];

 const resources = [
   { title: 'Documentația oficială GDevelop', url: 'https://docs.gdevelop.io/' },
   { title: 'Ghid Extensii GDevelop', url: 'https://wiki.gdevelop.io/gdevelop5/extensions' },
   { title: 'Tutorial Particle Systems', url: 'https://wiki.gdevelop.io/gdevelop5/objects/particles_emitter' },
   { title: 'Mobile Game Development', url: 'https://docs.gdevelop.io/gdevelop5/publishing/android_and_ios' }
 ];

 return (
   <LessonLayout
     title="Geometry Monster - Aventura Mobilă"
     subtitle="Lecția 6 • GDevelop Programming"
     courseId="gdevelop"
     sessionId="6"
     heroColor="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600"
     sidebarItems={sidebarItems}
     resources={resources}
     previousLesson={{
       title: "Lecția anterioară",
       path: "/gdevelop/session5"
     }}
     nextLesson={{
       title: "Lecția următoare",
       path: "/gdevelop/session7"
     }}
   >
     <div className="space-y-8">
       <section id="intro">
         <h2 className="text-2xl font-bold mb-4">👾 Povestea jocului Geometry Monster</h2>
         <p className="mb-4">
           Într-o dimensiune geometrică colorată, micul nostru monster violet a descoperit o ploaie 
           magică de forme geometrice! Triangluri roz, stele galbene, pentagoane și hexagoane cad 
           din cer, fiecare aducând putere magică. Dar atenție - printre aceste comori se ascund 
           bombe periculoase care îi pot face rău!
         </p>
         <p className="mb-6">
           În acest joc de tip <strong>mobile survival</strong>, tu îl controlezi pe Monster-ul nostru 
           drăguț pentru a colecta cât mai multe forme geometrice și a evita bombele mortale. Cu fiecare 
           formă colectată, jocul devine mai rapid și mai provocator. Ai doar 3 vieți - folosește-le 
           cu înțelepciune! 💜✨
         </p>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
           <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
             <h3 className="font-bold text-lg mb-3 flex items-center">
               <Check className="h-5 w-5 text-purple-600 mr-2" />
               Ce vei învăța
             </h3>
             <ul className="space-y-2">
               <li className="flex items-start">
                 <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                 <span>Crearea jocurilor optimizate pentru mobil</span>
               </li>
               <li className="flex items-start">
                 <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                 <span>Gestionarea mai multor scene și navigare între ele</span>
               </li>
               <li className="flex items-start">
                 <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                 <span>Folosirea extensiilor avansate (Health, Flash, Particles)</span>
               </li>
               <li className="flex items-start">
                 <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                 <span>Control touch pentru dispozitive mobile</span>
               </li>
               <li className="flex items-start">
                 <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                 <span>Particle systems pentru efecte vizuale spectaculoase</span>
               </li>
               <li className="flex items-start">
                 <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                 <span>Sistem de dificultate progresivă și management layers</span>
               </li>
             </ul>
           </div>

           <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
             <ImageModal 
               src="/assets/images/gdevelop/GeometryMonster/geometry-monster-joc.png" 
               alt="Previzualizare joc Geometry Monster" 
               className="w-full"
             />
             
           </div>
         </div>

         <div className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
           <h2 className="text-xl font-bold mb-3 flex items-center">
             <Smartphone className="h-6 w-6 mr-2" />
             Primul tău joc mobil adevărat!
           </h2>
           <p className="mb-4">
             În acest tutorial, vei învăța să creezi un joc complet optimizat pentru dispozitive mobile. 
             Vom implementa tot ce înseamnă dezvoltarea modernă de jocuri: scene multiple, extensii avansate, 
             particle systems și control touch intuitiv.
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
             <Button asChild size="lg" className="bg-purple-500 hover:bg-purple-600">
               <a href="/assets/images/gdevelop/GeometryMonster/geometry-monster.zip" download className="flex items-center">
                 <span>Descarcă assets-urile</span>
                 <ArrowRight className="h-5 w-5 ml-2" />
               </a>
             </Button>
             <Button asChild size="lg" variant="outline" className="border-purple-600 text-purple-600">
               <a href="/assets/proiecte finale/Gdevelop/geometry-monster.json" download className="flex items-center">
                 <span>Descarcă proiectul final</span>
                 <ArrowRight className="h-5 w-5 ml-2" />
               </a>
             </Button>
           </div>
           <div className="mt-4 text-sm flex items-start">
             <Lightbulb className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
             <p>
               <strong>Important:</strong> Acest joc folosește multiple extensii avansate și o rezoluție 
               specială pentru mobil. Urmează cu atenție toate pașii pentru configurarea corectă.
             </p>
           </div>
         </div>
       </section>

       <section id="setup-proiect">
         <h2 className="text-2xl font-bold mb-4">🛠️ Setup-ul proiectului</h2>
         <p className="mb-4">
           Să începem prin a crea un proiect nou optimizat pentru dispozitive mobile și să configurăm 
           toate elementele necesare pentru Geometry Monster.
         </p>

         <StepItem number={1} title="Creează un proiect nou">
           <p>Deschide GDevelop și selectează <strong className="text-purple-600">Create a new project</strong>.</p>
           <p className="mt-2">Alege opțiunea <strong className="text-purple-600">Empty Game</strong> și salvează-l cu numele <code className="bg-gray-100 px-2 py-1 rounded">GeometryMonster</code>.</p>
         </StepItem>

         <StepItem number={2} title="Importă assets-urile">
           <p>Extrage arhiva cu imaginile în folderul proiectului tău. Vei avea nevoie de următoarele categorii de fișiere:</p>
           <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
             <div className="bg-purple-50 p-2 rounded border">👾 Monster (34 frame-uri)</div>
             <div className="bg-pink-50 p-2 rounded border">🔺 Triangle.png</div>
             <div className="bg-yellow-50 p-2 rounded border">⭐ Star.png</div>
             <div className="bg-orange-50 p-2 rounded border">🔷 Pentagon.png</div>
             <div className="bg-blue-50 p-2 rounded border">⬡ Hexagon.png</div>
             <div className="bg-red-50 p-2 rounded border">💣 Bombs (bomb1.png, bomb2.png)</div>
             <div className="bg-green-50 p-2 rounded border">🎵 Sunete (monster.wav, killed.wav)</div>
             <div className="bg-gray-50 p-2 rounded border">🎨 UI (butoane, text, background)</div>
           </div>
         </StepItem>

         <InfoBox title="Organizarea assets-urilor" icon="info" variant="primary">
           Acest joc folosește foarte multe assets-uri (peste 40 de imagini!) organizate în categorii 
           clare. Asigură-te că ai toate fișierele înainte de a continua.
         </InfoBox>
       </section>

       <section id="rezolutie-mobil">
         <h2 className="text-2xl font-bold mb-4">📱 Configurarea rezoluției mobile</h2>
         <p className="mb-4">
           Primul pas important este să configurăm jocul pentru dispozitive mobile cu o rezoluție 
           optimizată în format portret.
         </p>

         <div className="mb-6">
           <ImageModal 
             src="/assets/images/gdevelop/GeometryMonster/rezolutie.png" 
             alt="Configurarea rezoluției mobile" 
             caption="Setarea rezoluției 640x960 pentru optimizare mobilă"
             className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
           />
         </div>

         <StepItem number={1} title="Accesează proprietățile jocului">
           <p>În panoul din stânga, navighează la <strong className="text-purple-600">Game settings</strong>.</p>
           <p className="mt-2">Apoi accesează <strong className="text-purple-600">Properties & icons</strong>.</p>
         </StepItem>

         <StepItem number={2} title="Configurează rezoluția">
           <p>În secțiunea <strong>Resolution and rendering</strong>, modifică următoarele setări:</p>
           <div className="mt-3 bg-blue-50 p-4 rounded-lg">
             <ul className="space-y-2">
               <li><strong>Game resolution width:</strong> 640</li>
               <li><strong>Game resolution height:</strong> 960</li>
               <li><strong>Game resolution resize mode:</strong> No changes to the game size</li>
             </ul>
           </div>
         </StepItem>

         <InfoBox title="De ce această rezoluție?" icon="warning" variant="secondary">
           <ul className="list-disc list-inside space-y-1 text-sm">
             <li><strong>640x960:</strong> Rezoluție clasică pentru telefoane în modul portret</li>
             <li><strong>Aspect ratio 2:3:</strong> Perfect pentru jocuri mobile de tip arcade</li>
             <li><strong>No resize:</strong> Menține controlul exact asupra layout-ului</li>
             <li><strong>Touch-friendly:</strong> Suficient spațiu pentru controale touch</li>
           </ul>
         </InfoBox>
       </section>

       <section id="extensii">
         <h2 className="text-2xl font-bold mb-4">🔧 Instalarea extensiilor necesare</h2>
         <p className="mb-4">
           Pentru acest joc avansat, avem nevoie de mai multe extensii care ne vor oferi 
           funcționalități suplimentare pentru efecte și interacțiuni.
         </p>

         <div className="mb-6">
           <ImageModal 
             src="/assets/images/gdevelop/GeometryMonster/scenaSiExtensii.png" 
             alt="Extensiile necesare pentru joc" 
             caption="Lista completă a extensiilor pe care le vom instala"
             className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
           />
         </div>

         <StepItem number={1} title="Deschide managerul de extensii">
           <p>În panoul din stânga, navighează la secțiunea <strong className="text-blue-600">Extensions</strong>.</p>
           <p className="mt-2">Apasă pe butonul <strong>+</strong> pentru a adăuga extensii noi.</p>
         </StepItem>

         <StepItem number={2} title="Instalează toate extensiile necesare">
           <p>Caută și instalează următoarele extensii una câte una:</p>
           <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-purple-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">🔄 EllipseMovement</h5>
               <p className="text-sm">Pentru animația logo-ului în meniu - mișcare pe traiectorie eliptică</p>
             </div>
             
             <div className="bg-blue-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">🎛️ PanelSpriteButton</h5>
               <p className="text-sm">Pentru butoanele interactive din meniuri</p>
             </div>
             
             <div className="bg-red-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">❤️ Health</h5>
               <p className="text-sm">Pentru sistemul de vieți al monster-ului</p>
             </div>
             
             <div className="bg-yellow-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">⚡ Flash</h5>
               <p className="text-sm">Pentru efectul de clipire când monster-ul e lovit</p>
             </div>
           </div>
         </StepItem>

         <InfoBox title="Extensii vs Behaviors built-in" icon="info" variant="info">
           Extensiile sunt funcționalități suplimentare create de comunitatea GDevelop. 
           Spre deosebire de behavior-urile built-in, acestea trebuie instalate separat 
           dar oferă funcționalități foarte utile și specializate.
         </InfoBox>
       </section>

       <section id="structura-scene">
         <h2 className="text-2xl font-bold mb-4">🎬 Structura scenelor</h2>
         <p className="mb-4">
           Jocul nostru va avea 3 scene distincte, fiecare cu un rol specific în fluxul de joc.
         </p>

         <StepItem number={1} title="Creează scenele necesare">
           <p>În secțiunea <strong>Scenes</strong> din panoul stâng, creează următoarele scene:</p>
           <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="bg-green-50 p-4 rounded-lg border border-green-200">
               <h5 className="font-semibold mb-2">🏠 MainMenu</h5>
               <p className="text-sm">Ecranul principal cu logo și butonul de start</p>
               <ul className="text-xs mt-2 space-y-1">
                 <li>• Logo animat</li>
                 <li>• Buton Play</li>
                 <li>• Design atractiv</li>
               </ul>
             </div>
             
             <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
               <h5 className="font-semibold mb-2">🎮 Level1</h5>
               <p className="text-sm">Scena principală de gameplay</p>
               <ul className="text-xs mt-2 space-y-1">
                 <li>• Monster controlabil</li>
                 <li>• Forme + bombe</li>
                 <li>• UI de joc</li>
               </ul>
             </div>
             
             <div className="bg-red-50 p-4 rounded-lg border border-red-200">
               <h5 className="font-semibold mb-2">💀 Restart</h5>
               <p className="text-sm">Ecranul Game Over</p>
               <ul className="text-xs mt-2 space-y-1">
                 <li>• Scor final</li>
                 <li>• Buton Restart</li>
                 <li>• Buton Home</li>
               </ul>
             </div>
           </div>
         </StepItem>

         <StepItem number={2} title="Setează scena principală">
           <p>Setează <strong>MainMenu</strong> ca scenă de start în proprietățile jocului.</p>
           <p className="mt-2">Aceasta va fi prima scenă care se încarcă când jocul pornește.</p>
         </StepItem>

         <div className="mt-6 bg-purple-50 p-4 rounded-lg border border-purple-200">
           <h4 className="font-bold text-purple-800 mb-2">🔄 Fluxul de navigare:</h4>
           <div className="flex items-center justify-center space-x-4 text-sm">
             <div className="bg-white px-3 py-1 rounded border">MainMenu</div>
             <ArrowRight className="h-4 w-4" />
             <div className="bg-white px-3 py-1 rounded border">Level1</div>
             <ArrowRight className="h-4 w-4" />
             <div className="bg-white px-3 py-1 rounded border">Restart</div>
             <ArrowRight className="h-4 w-4" />
             <div className="bg-white px-3 py-1 rounded border">MainMenu/Level1</div>
           </div>
         </div>
       </section>

       <section id="scena-mainmenu">
         <h2 className="text-2xl font-bold mb-4">🏠 Configurarea scenei MainMenu</h2>
         <p className="mb-4">
           Să creăm un meniu principal atractiv cu logo animat și buton de start.
         </p>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
           <div>
             <h3 className="text-lg font-semibold mb-3">Personajele din MainMenu:</h3>
             <ImageModal 
               src="/assets/images/gdevelop/GeometryMonster/personaje-mainmeniu.png" 
               alt="Personajele din MainMenu" 
               caption="Lista obiectelor pentru scena MainMenu"
               className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
             />
           </div>
           
           <div>
             <h3 className="text-lg font-semibold mb-3">Layout-ul scenei:</h3>
             <ImageModal 
               src="/assets/images/gdevelop/GeometryMonster/imaginescenamainmeniu.png" 
               alt="Layout MainMenu" 
               caption="Aranjarea obiectelor în scena MainMenu"
               className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
             />
           </div>
         </div>

         <StepItem number={1} title="Adaugă obiectele în MainMenu">
           <p>În scena <strong>MainMenu</strong>, adaugă următoarele obiecte:</p>
           <div className="mt-3 bg-green-50 p-4 rounded-lg">
             <ul className="space-y-2">
               <li><strong>GameTitle</strong> - Sprite cu logo-ul jocului</li>
               <li><strong>StartButton</strong> - Sprite cu butonul "Play" sau "Start"</li>
             </ul>
           </div>
         </StepItem>

         <StepItem number={2} title="Poziționează obiectele">
           <p>Aranjează obiectele pe scenă conform layout-ului:</p>
           <div className="mt-3 bg-blue-50 p-4 rounded-lg">
             <ul className="space-y-2">
               <li><strong>GameTitle:</strong> În partea de sus a ecranului, centrat</li>
               <li><strong>StartButton:</strong> În partea de jos, centrat și ușor accesibil pentru touch</li>
             </ul>
           </div>
         </StepItem>

         <InfoBox title="Design pentru mobil" icon="warning" variant="warning">
           Când creezi UI pentru mobil, asigură-te că butoanele sunt destul de mari (minimum 44x44 pixeli) 
           și poziționate în zone ușor accesibile cu degetul.
         </InfoBox>
       </section>

       <section id="configurare-logo">
         <h2 className="text-2xl font-bold mb-4">🔄 Configurarea logo-ului animat</h2>
         <p className="mb-4">
           Să facem logo-ul să se miște elegant pe o traiectorie eliptică folosind extensia EllipseMovement.
         </p>

         <div className="mb-6">
           <ImageModal 
             src="/assets/images/gdevelop/GeometryMonster/mainmeniuelipsemovment.png" 
             alt="Configurarea EllipseMovement" 
             caption="Setările pentru mișcarea eliptică a logo-ului"
             className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
           />
         </div>

         <StepItem number={1} title="Adaugă comportamentul EllipseMovement">
           <p>Fă dublu-click pe obiectul <strong>GameTitle</strong> pentru a-l edita.</p>
           <p className="mt-2">În tab-ul <strong className="text-purple-600">Behaviors</strong>:</p>
           <div className="mt-3 bg-purple-50 p-4 rounded-lg">
             <ol className="list-decimal list-inside space-y-2">
               <li>Apasă <strong>Add a behavior</strong></li>
               <li>Selectează <strong className="text-blue-600">EllipseMovement</strong></li>
               <li>Configurează parametrii din imaginea de mai sus</li>
             </ol>
           </div>
         </StepItem>

         <StepItem number={2} title="Configurează parametrii elipsei">
           <p>Setează următoarele valori pentru o mișcare elegantă:</p>
           <div className="mt-3 bg-blue-50 p-4 rounded-lg">
             <ul className="space-y-2">
               <li><strong>Radius X axis:</strong> 20 px (mișcare orizontală subtilă)</li>
               <li><strong>Radius Y axis:</strong> 10 px (mișcare verticală mai mică)</li>
               <li><strong>Rotation offset:</strong> 0 deg</li>
               <li><strong>Initial direction:</strong> 0 deg</li>
               <li><strong>Loop duration:</strong> 6 s (o rotație completă în 6 secunde)</li>
             </ul>
           </div>
         </StepItem>

         <InfoBox title="Efectul EllipseMovement" icon="star" variant="secondary">
           Această extensie creează o mișcare foarte elegantă și hipnotizantă pentru logo. 
           Logo-ul va "pluti" ușor în forma unei elipse, dând viață meniului principal.
         </InfoBox>
       </section>

       <section id="butoane-menu">
         <h2 className="text-2xl font-bold mb-4">🎛️ Configurarea butonului de start</h2>
         <p className="mb-4">
           Să configurăm butonul Start cu extensia PanelSpriteButton și să adăugăm logica de navigare.
         </p>

         <StepItem number={1} title="Adaugă comportamentul PanelSpriteButton">
           <p>Fă dublu-click pe obiectul <strong>StartButton</strong> pentru a-l edita.</p>
           <p className="mt-2">În tab-ul <strong className="text-purple-600">Behaviors</strong>:</p>
           <div className="mt-3 bg-green-50 p-4 rounded-lg">
             <ol className="list-decimal list-inside space-y-2">
               <li>Apasă <strong>Add a behavior</strong></li>
               <li>Selectează <strong className="text-green-600">Panel Sprite Button</strong></li>
               <li>Lasă setările implicite</li>
             </ol>
           </div>
         </StepItem>

         <StepItem number={2} title="Adaugă evenimentul de navigare">
           <div className="mb-4">
             <ImageModal 
               src="/assets/images/gdevelop/GeometryMonster/eventMainmeniu.png" 
               alt="Eveniment navigare MainMenu" 
               caption="Codul pentru navigarea din MainMenu către Level1"
               className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
             />
           </div>
           <p>În tab-ul <strong>Events</strong> al scenei MainMenu, adaugă următorul eveniment:</p>
           <div className="mt-3 bg-green-50 p-4 rounded-lg">
             <p><strong>Condiție:</strong> StartButton is clicked</p>
             <p><strong>Acțiune:</strong> Change to scene "Level1"</p>
           </div>
         </StepItem>

         <InfoBox title="PanelSpriteButton vs Click detection" icon="info" variant="info">
           Extensia PanelSpriteButton este mult mai eficientă decât detectarea manuală a click-urilor 
           prin poziție, mai ales pe dispozitive mobile cu touch input.
         </InfoBox>
       </section>

       <section id="scena-level1">
         <h2 className="text-2xl font-bold mb-4">🎮 Configurarea scenei Level1</h2>
         <p className="mb-4">
           Acum să creăm scena principală de gameplay cu toate elementele necesare pentru joc.
         </p>

         <div className="mb-6">
           <ImageModal 
             src="/assets/images/gdevelop/GeometryMonster/personaje-joc.png" 
             alt="Personajele din Level1" 
             caption="Lista completă a obiectelor pentru gameplay"
             className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
           />
         </div>

         <StepItem number={1} title="Adaugă toate obiectele în Level1">
           <p>În scena <strong>Level1</strong>, adaugă următoarele obiecte:</p>
           <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
             <div className="bg-purple-50 p-2 rounded border">👾 Monster</div>
             <div className="bg-pink-50 p-2 rounded border">🔺 Shape1 (Triangle)</div>
             <div className="bg-yellow-50 p-2 rounded border">⭐ Shape2 (Star)</div>
             <div className="bg-orange-50 p-2 rounded border">🔷 Shape3 (Pentagon)</div>
             <div className="bg-blue-50 p-2 rounded border">⬡ Shape4 (Hexagon)</div>
             <div className="bg-red-50 p-2 rounded border">💣 Obstacle (Bomb)</div>
             <div className="bg-green-50 p-2 rounded border">📊 ScoreLabel</div>
             <div className="bg-cyan-50 p-2 rounded border">❤️ Life</div>
             <div className="bg-gray-50 p-2 rounded border">💥 Shape1Explosion</div>
             <div className="bg-gray-50 p-2 rounded border">💥 Shape2Explosion</div>
             <div className="bg-gray-50 p-2 rounded border">💥 Shape3Explosion</div>
             <div className="bg-gray-50 p-2 rounded border">💥 Shape4Explosion</div>
           </div>
         </StepItem>

         <InfoBox title="Mulțimea de obiecte" icon="info" variant="warning">
           Acest joc are multe obiecte (12+ tipuri diferite), dar fiecare are un rol specific. 
           Organizarea clară este esențială pentru a nu te pierde în complexitate.
         </InfoBox>
       </section>

       <section id="configurare-monster">
         <h2 className="text-2xl font-bold mb-4">👾 Configurarea Monster-ului</h2>
         <p className="mb-4">
           Monster-ul este personajul principal - să îl configurăm cu toate animațiile și comportamentele necesare.
         </p>

         <div className="mb-6">
           <ImageModal 
             src="/assets/images/gdevelop/GeometryMonster/monster.png" 
             alt="Configurarea Monster-ului" 
             caption="Animațiile Monster-ului: principală cu 34 frame-uri și MonsterDead"
             className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
           />
         </div>

         <StepItem number={1} title="Configurează animațiile Monster-ului">
           <p>Fă dublu-click pe obiectul <strong>Monster</strong> pentru a-l edita.</p>
           <p className="mt-2">În tab-ul <strong className="text-purple-600">Properties</strong>:</p>
           <div className="mt-3 bg-purple-50 p-4 rounded-lg">
             <ol className="list-decimal list-inside space-y-2">
               <li><strong>Animation 0 "Monster":</strong> Adaugă toate cele 34 frame-uri în ordinea corectă</li>
               <li>Setează <strong>Time between frames:</strong> 0.08 secunde</li>
               <li>Activează <strong>Loop</strong> pentru animație continuă</li>
               <li><strong>Animation 1 "MonsterDead":</strong> Adaugă frame-ul pentru moarte</li>
               <li>Pentru MonsterDead, debifează <strong>Loop</strong></li>
             </ol>
           </div>
         </StepItem>

         <StepItem number={2} title="Adaugă comportamentele Monster-ului">
           <div className="mb-4">
             <ImageModal 
               src="/assets/images/gdevelop/GeometryMonster/monster-topdownmovment.png" 
               alt="TopDownMovement pentru Monster" 
               caption="Configurarea TopDownMovement cu disable default controls"
               className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
             />
           </div>
           <p>În tab-ul <strong className="text-purple-600">Behaviors</strong>, adaugă următoarele:</p>
           <div className="mt-3 space-y-4">
             <div className="bg-blue-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">🎮 TopDownMovement</h5>
               <ul className="text-sm space-y-1">
                 <li>• <strong>Disable default keyboard controls:</strong> ✅ (vom controla manual)</li>
                 <li>• <strong>Allow diagonals:</strong> ❌ (doar stânga-dreapta)</li>
                 <li>• <strong>Max speed:</strong> 450 px/s</li>
               </ul>
             </div>
           </div>
         </StepItem>

         <StepItem number={3} title="Adaugă extensiile pentru Monster">
           <div className="mb-4">
             <ImageModal 
               src="/assets/images/gdevelop/GeometryMonster/flash-and-stayonscreen.png" 
               alt="Flash și StayOnScreen" 
               caption="Configurarea Flash și StayOnScreen pentru Monster"
               className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
             />
           </div>
           <p>Continuă să adaugi comportamentele:</p>
           <div className="mt-3 space-y-4">
             <div className="bg-yellow-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">⚡ Flash</h5>
               <ul className="text-sm space-y-1">
                 <li>• <strong>Half period:</strong> 0.1 s (rapid flash)</li>
                 <li>• Pentru efectul de clipire când e lovit</li>
               </ul>
             </div>
             
             <div className="bg-red-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">❤️ Health</h5>
               <ul className="text-sm space-y-1">
                 <li>• <strong>Starting health:</strong> 3</li>
                 <li>• <strong>Maximum health:</strong> 3</li>
                 <li>• <strong>Damage cooldown:</strong> 0.8 s</li>
               </ul>
             </div>
             
             <div className="bg-gray-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">🛡️ StayOnScreen</h5>
               <ul className="text-sm space-y-1">
                 <li>• Toate marginile la 0 (nu iese din ecran)</li>
               </ul>
             </div>
           </div>
         </StepItem>

         <InfoBox title="Combinația de comportamente" icon="star" variant="secondary">
           Această combinație de comportamente creează un personaj complet: mișcare controlată, 
           efecte vizuale când e lovit, sistem de vieți și limitare la ecran.
         </InfoBox>
       </section>

       <section id="configurare-forme">
         <h2 className="text-2xl font-bold mb-4">🔺 Configurarea formelor geometrice</h2>
         <p className="mb-4">
           Să configurăm toate formele geometrice (Triangle, Star, Pentagon, Hexagon) și bomba.
         </p>

         <StepItem number={1} title="Configurează fiecare formă geometrică">
           <p>Pentru fiecare formă (Shape1, Shape2, Shape3, Shape4), repetă acești pași:</p>
           <div className="mt-3 bg-pink-50 p-4 rounded-lg">
             <ol className="list-decimal list-inside space-y-2">
               <li>Creează obiectul <strong>Sprite</strong> cu numele corespunzător</li>
               <li>Adaugă imaginea formei (triangle.png, star.png, pentagon.png, hexagon.png)</li>
               <li>Centrează <strong>Origin point</strong> pentru rotație corectă</li>
               <li>Nu adăuga comportamente - acestea vor fi controlate prin cod</li>
             </ol>
           </div>
         </StepItem>

         <StepItem number={2} title="Configurează Obstacle (Bomba)">
           <p>Pentru obiectul <strong>Obstacle</strong>:</p>
           <div className="mt-3 bg-red-50 p-4 rounded-lg">
             <ol className="list-decimal list-inside space-y-2">
               <li>Creează obiectul <strong>Sprite</strong> numit "Obstacle"</li>
               <li>Adaugă imaginile bomb1.png și bomb2.png ca animație</li>
               <li>Setează <strong>Time between frames:</strong> 0.3 secunde</li>
               <li>Activează <strong>Loop</strong> pentru animație continuă</li>
               <li>Centrează <strong>Origin point</strong></li>
             </ol>
           </div>
         </StepItem>

         <InfoBox title="De ce fără comportamente?" icon="info" variant="info">
           Formele vor fi controlate complet prin evenimente - viteza, rotația și mișcarea 
           vor fi gestionate dinamic pentru a crea un gameplay variabil și interesant.
         </InfoBox>
       </section>

       <section id="configurare-particle">
         <h2 className="text-2xl font-bold mb-4">✨ Configurarea Particle Emitters</h2>
         <p className="mb-4">
           Să creăm efectele spectaculoase de particule care vor apărea când colectăm formele geometrice.
         </p>

         <div className="mb-6">
           <ImageModal 
             src="/assets/images/gdevelop/GeometryMonster/particleemitter.png" 
             alt="Configurarea Particle Emitter" 
             caption="Parametrii detaliați pentru efectele de particule"
             className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
           />
         </div>

         <StepItem number={1} title="Creează Particle Emitters pentru fiecare formă">
           <p>Pentru fiecare formă geometrică, creează un <strong>Particle Emitter</strong>:</p>
           <div className="mt-3 bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg">
             <ul className="space-y-2">
               <li><strong>Shape1Explosion</strong> - pentru Triangle</li>
               <li><strong>Shape2Explosion</strong> - pentru Star</li>
               <li><strong>Shape3Explosion</strong> - pentru Pentagon</li>
               <li><strong>Shape4Explosion</strong> - pentru Hexagon</li>
             </ul>
           </div>
         </StepItem>

         <StepItem number={2} title="Configurează parametrii particle emitter">
           <p>Pentru fiecare particle emitter, folosește acești parametri din imaginea de mai sus:</p>
           <div className="mt-3 space-y-4">
             <div className="bg-white p-4 rounded-lg border border-gray-200">
               <h5 className="font-semibold mb-2">🎨 Particle Type: Image</h5>
               <p className="text-sm">Selectează imaginea formei corespunzătoare (triangle.png, star.png, etc.)</p>
             </div>
             
             <div className="bg-blue-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">📏 Dimensiuni și culori:</h5>
               <ul className="text-sm space-y-1">
                 <li>• <strong>Start width/height:</strong> 20px</li>
                 <li>• <strong>Start color:</strong> 255;255;255 (alb)</li>
                 <li>• <strong>End color:</strong> 255;255;255 (alb)</li>
                 <li>• <strong>Start opacity:</strong> 255 (opac)</li>
                 <li>• <strong>End opacity:</strong> 0 (transparent)</li>
               </ul>
             </div>
             
             <div className="bg-green-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">⚙️ Setări generale:</h5>
               <ul className="text-sm space-y-1">
                 <li>• <strong>Delete when out of particles:</strong> ✅</li>
                 <li>• <strong>Maximum particles displayed:</strong> 10</li>
                 <li>• <strong>Particles in tank:</strong> 5</li>
                 <li>• <strong>Flow:</strong> 45 particles/second</li>
               </ul>
             </div>
             
             <div className="bg-purple-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">🚀 Forțe și mișcare:</h5>
               <ul className="text-sm space-y-1">
                 <li>• <strong>Min/Max emitter force:</strong> 45-85</li>
                 <li>• <strong>Spray cone angle:</strong> 360° (în toate direcțiile)</li>
                 <li>• <strong>Emitter radius:</strong> 10</li>
                 <li>• <strong>Gravity X:</strong> 0, <strong>Y:</strong> 30</li>
               </ul>
             </div>
             
             <div className="bg-orange-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">⏱️ Viața particulelor:</h5>
               <ul className="text-sm space-y-1">
                 <li>• <strong>Min lifetime:</strong> 0.5 secunde</li>
                 <li>• <strong>Max lifetime:</strong> 1.5 secunde</li>
                 <li>• <strong>Start size:</strong> 100%</li>
                 <li>• <strong>End size:</strong> 80%</li>
                 <li>• <strong>Rotation speed:</strong> 0-40 deg/sec</li>
               </ul>
             </div>
           </div>
         </StepItem>

         <InfoBox title="Efectul particle systems" icon="warning" variant="warning">
           Aceste setări creează un efect spectaculos: particulele în forma geometrică se răspândesc 
           în toate direcțiile, se micșorează ușor și dispar treptat, creând o "explozie" colorată 
           când colectezi o formă.
         </InfoBox>
       </section>

       <section id="configurare-ui">
         <h2 className="text-2xl font-bold mb-4">🎨 Configurarea UI și Layers</h2>
         <p className="mb-4">
           Să configurăm interfața utilizator și sistemul de layers pentru o organizare optimă.
         </p>

         <div className="mb-6">
           <ImageModal 
             src="/assets/images/gdevelop/GeometryMonster/layers.png" 
             alt="Configurarea Layers" 
             caption="Structura layers: Monster (1), ScoreLabel (2), Life (3)"
             className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
           />
         </div>

         <StepItem number={1} title="Configurează ScoreLabel">
           <p>Creează un obiect <strong>Text</strong> numit <code className="bg-blue-100 px-2 py-1 rounded">ScoreLabel</code>:</p>
           <div className="mt-3 bg-blue-50 p-4 rounded-lg">
             <ul className="space-y-2">
               <li><strong>Size:</strong> 40 (mărimea fontului)</li>
               <li><strong>Color:</strong> Alb sau o culoare contrastantă</li>
               <li><strong>Bold:</strong> ✅</li>
               <li><strong>Initial text:</strong> "Score: 0"</li>
               <li><strong>Poziție:</strong> Colțul din stânga sus</li>
             </ul>
           </div>
         </StepItem>

         <StepItem number={2} title="Configurează Life (Health Bar)">
           <div className="mb-4">
             <ImageModal 
               src="/assets/images/gdevelop/GeometryMonster/life.png" 
               alt="Configurarea Health Bar" 
               caption="Setările pentru bara de viață cu 3 inimi"
               className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
             />
           </div>
           <p>Creează un obiect <strong>Panel Sprite</strong> numit <code className="bg-red-100 px-2 py-1 rounded">Life</code>:</p>
           <div className="mt-3 bg-red-50 p-4 rounded-lg">
             <ul className="space-y-2">
               <li><strong>Initial value:</strong> 3</li>
               <li><strong>Maximum value:</strong> 3</li>
               <li><strong>Unit width:</strong> 41 (lățimea unei inimi)</li>
               <li><strong>FillBar image:</strong> life-3.png (inima plină)</li>
               <li><strong>Bar image:</strong> life-0.png (inima goală)</li>
               <li><strong>Poziție:</strong> Colțul din dreapta sus</li>
             </ul>
           </div>
         </StepItem>

         <StepItem number={3} title="Configurează Layers">
           <p>În editorul de scenă Level1, configurează layers-urile:</p>
           <div className="mt-3 bg-gray-50 p-4 rounded-lg">
             <ol className="list-decimal list-inside space-y-2">
               <li><strong>Layer 1 "Monster":</strong> Monster-ul și toate obiectele de gameplay</li>
               <li><strong>Layer 2 "ScoreLabel":</strong> Textul scorului</li>
               <li><strong>Layer 3 "Life":</strong> Bara de viață (cel mai în față)</li>
             </ol>
           </div>
         </StepItem>

         <InfoBox title="Importanța layers-urilor" icon="info" variant="info">
           Layers-urile asigură că UI-ul rămâne mereu vizibil deasupra gameplay-ului, 
           indiferent de câte obiecte sunt pe ecran sau cât de intense sunt efectele.
         </InfoBox>
       </section>

       <section id="evenimente-control">
         <h2 className="text-2xl font-bold mb-4">🎮 Controlul Monster-ului</h2>
         <p className="mb-4">
           Să implementăm sistemul de control optimizat pentru dispozitive mobile cu touch input.
         </p>

         <div className="mb-6">
           <ImageModal 
             src="/assets/images/gdevelop/GeometryMonster/controlmonstru.png" 
             alt="Controlul Monster-ului" 
             caption="Sistemul complet de control: inițializare, keyboard și touch"
             className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
           />
         </div>

         <StepItem number={1} title="Eveniment: At the beginning of the scene">
           <p>Creează primul eveniment pentru inițializarea jocului:</p>
           <div className="mt-3 bg-blue-50 p-4 rounded-lg">
             <p><strong>Condiție:</strong> At the beginning of the scene</p>
             <p><strong>Acțiune:</strong> Change the variable Score: set to 0</p>
           </div>
         </StepItem>

         <StepItem number={2} title="Grup: Controls - Keyboard și Touch">
           <p>Creează un grup de evenimente numit "Controls" cu următoarele sub-evenimente:</p>
           
           <div className="mt-3 space-y-4">
             <div className="bg-green-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">⌨️ Control cu tastatura:</h5>
               <ul className="text-sm space-y-1">
                 <li><strong>Condiție:</strong> "Left" key is pressed</li>
                 <li><strong>Acțiune:</strong> Simulate pressing Left for Monster</li>
               </ul>
               <ul className="text-sm space-y-1 mt-2">
                 <li><strong>Condiție:</strong> "Right" key is pressed</li>
                 <li><strong>Acțiune:</strong> Simulate pressing Right for Monster</li>
               </ul>
             </div>
             
             <div className="bg-purple-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">📱 Control cu touch-ul:</h5>
               <p className="text-sm mb-2"><strong>Condiție principală:</strong> Touch or "Left" mouse button is down</p>
               <p className="text-sm mb-2"><strong>Sub-evenimente:</strong></p>
               <ul className="text-sm space-y-1 ml-4">
                 <li><strong>Dacă:</strong> X position of center of Monster &gt; MouseX() + 5</li>
                 <li><strong>Atunci:</strong> Simulate pressing Left for Monster</li>
               </ul>
               <ul className="text-sm space-y-1 ml-4 mt-2">
                 <li><strong>Dacă:</strong> X position of center of Monster &lt; MouseX() - 5</li>
                 <li><strong>Atunci:</strong> Simulate pressing Right for Monster</li>
               </ul>
             </div>
           </div>
         </StepItem>

         <InfoBox title="Logica touch control" icon="warning" variant="warning">
           Sistemul de touch este foarte inteligent: comparăm poziția Monster-ului cu poziția mouse-ului/touch-ului. 
           Zona moartă de ±5 pixeli previne oscilația când degetul este aproape de Monster.
         </InfoBox>
       </section>

       <section id="evenimente-spawn">
         <h2 className="text-2xl font-bold mb-4">🎲 Spawn-ul obiectelor</h2>
         <p className="mb-4">
           Să implementăm sistemul care generează forme și bombe la intervale regulate, cu dificultate crescândă.
         </p>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
           <div>
             <h3 className="text-lg font-semibold mb-3">Spawn obiecte la început:</h3>
             <ImageModal 
               src="/assets/images/gdevelop/GeometryMonster/spawnobjects.png" 
               alt="Spawn objects" 
               caption="Sistemul de spawn pentru forme și bombe"
               className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
             />
           </div>
           
           <div>
             <h3 className="text-lg font-semibold mb-3">Mișcarea obiectelor:</h3>
             <ImageModal 
               src="/assets/images/gdevelop/GeometryMonster/moveobjectsdown.png" 
               alt="Move objects down" 
               caption="Mișcarea obiectelor cu viteza GameSpeed"
               className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
             />
           </div>
         </div>

         <StepItem number={1} title="Grup: Spawn objects on top">
           <p>Creează un grup "Spawn objects on top" cu următoarele evenimente:</p>
           
           <div className="mt-3 space-y-4">
             <div className="bg-blue-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">⏰ Inițializare timere:</h5>
               <ul className="text-sm space-y-1">
                 <li><strong>Condiție:</strong> At the beginning of the scene</li>
                 <li><strong>Acțiune:</strong> Start (or reset) the timer "ShapeCreation"</li>
               </ul>
             </div>
             
             <div className="bg-green-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">🔺 Spawn forme geometrice:</h5>
               <ul className="text-sm space-y-1">
                 <li><strong>Condiție:</strong> The timer "ShapeCreation" &gt; 1.3 seconds</li>
                 <li><strong>Acțiuni:</strong></li>
                 <ul className="text-xs ml-4 space-y-1">
                   <li>Among objects Shapes, create object named "Shape" + ToString(RandomInRange(1, 4))</li>
                   <li>at position RandomInRange(80, 640 - 80);-100 (layer: Base layer)</li>
                   <li>Change the angle of Shapes: set to RandomInRange(0, 360)</li>
                   <li>Change the scale of Shapes: set to RandomFloatInRange(0.8, 1.6)</li>
                   <li>Start (or reset) the timer "ShapeCreation"</li>
                 </ul>
               </ul>
             </div>
             
             <div className="bg-red-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">💣 Spawn bombe:</h5>
               <ul className="text-sm space-y-1">
                 <li><strong>Condiție principală:</strong> At the beginning of the scene</li>
                 <li><strong>Acțiune:</strong> Start (or reset) the timer "ObstacleCreation"</li>
               </ul>
               <ul className="text-sm space-y-1 mt-2">
                 <li><strong>Condiție:</strong> The timer "ObstacleCreation" &gt; 5 seconds</li>
                 <li><strong>Acțiuni:</strong></li>
                 <ul className="text-xs ml-4 space-y-1">
                   <li>Create object Obstacle at position RandomInRange(80, 640 - 80);-100</li>
                   <li>Change the z-order of Obstacle: set to 4</li>
                   <li>Start (or reset) the timer "ObstacleCreation"</li>
                 </ul>
               </ul>
             </div>
           </div>
         </StepItem>

         <StepItem number={2} title="Grup: Move objects down">
           <p>Creează un grup "Move objects down" pentru mișcarea obiectelor:</p>
           
           <div className="mt-3 space-y-4">
             <div className="bg-yellow-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">🏃 Move shape according to the game speed:</h5>
               <ul className="text-sm space-y-1">
                 <li><strong>Acțiuni (fără condiții):</strong></li>
                 <li>Add to Shapes an instant force of 0 p/s on X axis and GameSpeed p/s on Y axis</li>
                 <li>Rotate Shapes at speed 90 deg/second</li>
               </ul>
             </div>
             
             <div className="bg-orange-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">💣 Move obstacle according to the game speed:</h5>
               <ul className="text-sm space-y-1">
                 <li><strong>Acțiune (fără condiții):</strong></li>
                 <li>Add to Obstacle an instant force, angle: 90 degrees and length: 1.5 * GameSpeed pixels</li>
               </ul>
             </div>
             
             <div className="bg-purple-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">⚡ Progressively increase game speed:</h5>
               <ul className="text-sm space-y-1">
                 <li><strong>Acțiune (fără condiții):</strong></li>
                 <li>Change the variable GameSpeed: add 7 * TimeDelta()</li>
               </ul>
             </div>
           </div>
         </StepItem>

         <InfoBox title="Sistemul GameSpeed" icon="warning" variant="secondary">
           <ul className="list-disc list-inside space-y-1 text-sm">
             <li><strong>GameSpeed inițial:</strong> 100 (setat automat)</li>
             <li><strong>Creștere:</strong> 7 * TimeDelta() în fiecare frame</li>
             <li><strong>Forme:</strong> Viteza exactă GameSpeed</li>
             <li><strong>Bombe:</strong> Viteza 1.5 * GameSpeed (mai rapide!)</li>
             <li><strong>Rezultat:</strong> Jocul devine progresiv mai dificil</li>
           </ul>
         </InfoBox>
       </section>

       <section id="evenimente-coliziuni">
         <h2 className="text-2xl font-bold mb-4">💥 Coliziuni și efecte</h2>
         <p className="mb-4">
           Să implementăm sistemul de coliziuni cu efecte spectaculoase pentru forme și bombe.
         </p>

         <div className="mb-6">
           <ImageModal 
             src="/assets/images/gdevelop/GeometryMonster/collisionspng.png" 
             alt="Sistemul de coliziuni" 
             caption="Logica completă pentru coliziuni cu forme și bombe"
             className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
           />
         </div>

         <StepItem number={1} title="Grup: Collision - Forme geometrice">
           <p>Creează un grup "Collision" cu evenimente pentru fiecare tip de formă:</p>
           
           <div className="mt-3 space-y-4">
             <div className="bg-pink-50 p-4 rounded-lg">
               <h5 className="font-semibold mb-2">🔺 Pentru fiecare formă (Shape1, Shape2, Shape3, Shape4):</h5>
               <p className="text-sm mb-2"><strong>Condiție principală:</strong> Repeat for each instance of Shapes:</p>
               <p className="text-sm mb-2"><strong>Sub-condiție:</strong> Shapes is in collision with Monster</p>
              <p className="text-sm mb-2"><strong>Comentariu:</strong> CREATE PARTICLES - Create the proper one according to the shape that is colliding with the Monster. Give them a proper size too.</p>
              <ul className="text-sm space-y-2 ml-4">
                <li><strong>Pentru Shape1:</strong> The number of Shape1 currently picked = 0</li>
                <li className="ml-8">Create object Shape1Explosion at position Shape1.CenterX();Shape1.CenterY()</li>
                <li className="ml-8">Change the start size of Shape1Explosion: set to Shape1.Width()</li>
                <li><strong>Pentru Shape2:</strong> The number of Shape2 currently picked = 0</li>
                <li className="ml-8">Create object Shape2Explosion at position Shape2.CenterX();Shape2.CenterY()</li>
                <li className="ml-8">Change the start size of Shape2Explosion: set to Shape2.Width()</li>
                <li><strong>Pentru Shape3:</strong> The number of Shape3 currently picked = 0</li>
                <li className="ml-8">Create object Shape3Explosion at position Shape3.CenterX();Shape3.CenterY()</li>
                <li className="ml-8">Change the start size of Shape3Explosion: set to Shape3.Width()</li>
                <li><strong>Pentru Shape4:</strong> The number of Shape4 currently picked = 0</li>
                <li className="ml-8">Create object Shape4Explosion at position Shape4.CenterX();Shape4.CenterY()</li>
                <li className="ml-8">Change the start size of Shape4Explosion: set to Shape4.Width()</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">🎯 Acțiuni pentru toate formele:</h5>
              <p className="text-sm mb-2"><strong>Comentariu:</strong> Delete the shape that was eaten and update the score</p>
              <ul className="text-sm space-y-1">
                <li>Delete Shapes</li>
                <li>Play the sound monster.wav, vol: 100, loop: no</li>
                <li>Change the variable Score: add 1</li>
                <li>Change the text of ScoreLabel: set to "Score: " + Score</li>
              </ul>
            </div>
          </div>
        </StepItem>

        <StepItem number={2} title="Coliziuni cu bombe">
          <p>În același grup "Collision", adaugă evenimentul pentru bombe:</p>
          
          <div className="mt-3 bg-red-50 p-4 rounded-lg">
            <h5 className="font-semibold mb-2">💣 Obstacle collision:</h5>
            <ul className="text-sm space-y-1">
              <li><strong>Condiție:</strong> Repeat for each instance of Obstacle:</li>
              <li><strong>Sub-condiție:</strong> Obstacle is in collision with Monster</li>
              <li><strong>Acțiuni:</strong></li>
              <ul className="text-xs ml-4 space-y-1">
                <li>Delete Obstacle</li>
                <li>Apply 1 points of damage to Monster (Damage can be reduced by Shield: no, Armor: no)</li>
                <li>Play the sound killed.wav, vol: , loop: no</li>
              </ul>
            </ul>
          </div>
        </StepItem>

        <InfoBox title="Efectele particle systems" icon="star" variant="secondary">
          Când Monster-ul colectează o formă, se creează un particle emitter exact la poziția formei, 
          cu mărimea adaptată la scala formei. Efectul este spectaculos - formele "explodează" 
          într-o ploaie de particule colorate!
        </InfoBox>
      </section>

      <section id="evenimente-health">
        <h2 className="text-2xl font-bold mb-4">❤️ Sistemul de vieți și Game Over</h2>
        <p className="mb-4">
          Să implementăm logica pentru gestionarea vieților Monster-ului și tranziția către Game Over.
        </p>

        <div className="mb-6">
          <ImageModal 
            src="/assets/images/gdevelop/GeometryMonster/healthandgameover.png" 
            alt="Health și Game Over" 
            caption="Sistemul complet de health management și game over logic"
            className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          />
        </div>

        <StepItem number={1} title="Grup: Health - Actualizare viață">
          <p>Creează un grup "Health" cu următorul eveniment:</p>
          
          <div className="mt-3 bg-red-50 p-4 rounded-lg">
            <h5 className="font-semibold mb-2">💗 Health has just been damaged on Monster:</h5>
            <ul className="text-sm space-y-1">
              <li><strong>Condiție:</strong> Health has just been damaged on Monster</li>
              <li><strong>Acțiuni:</strong></li>
              <ul className="text-xs ml-4 space-y-1">
                <li>Change the value of Life: set to Monster.Health::Health()</li>
                <li>Make Monster flash (blink) for 1.5 seconds</li>
              </ul>
            </ul>
          </div>
        </StepItem>

        <StepItem number={2} title="Eveniment: Game Over">
          <p>Sub evenimentul de mai sus, adaugă logica pentru Game Over:</p>
          
          <div className="mt-3 space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">💀 Game over condition:</h5>
              <ul className="text-sm space-y-1">
                <li><strong>Comentariu:</strong> Game over</li>
                <li><strong>Condiție:</strong> Monster is dead</li>
                <li><strong>Sub-condiție:</strong> Trigger once</li>
                <li><strong>Acțiuni:</strong></li>
                <ul className="text-xs ml-4 space-y-1">
                  <li>Change the animation of Monster: set to "MonsterDead"</li>
                  <li>Set the time scale of the scene to 0.25</li>
                  <li>Wait 0.5 seconds</li>
                  <li>Change to scene "Restart"</li>
                </ul>
              </ul>
            </div>
          </div>
        </StepItem>

        <InfoBox title="Efectul dramatic al Game Over" icon="warning" variant="warning">
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Flash effect:</strong> Monster-ul clipește 1.5 secunde când e lovit</li>
            <li><strong>Time scale 0.25:</strong> Jocul se încetinește dramatic la moarte</li>
            <li><strong>MonsterDead animation:</strong> Schimbă la sprite-ul cu X pe ochi</li>
            <li><strong>Wait 0.5s:</strong> Moment de suspans înainte de Game Over</li>
          </ul>
        </InfoBox>
      </section>

      <section id="scena-restart">
        <h2 className="text-2xl font-bold mb-4">💀 Configurarea scenei Restart</h2>
        <p className="mb-4">
          Să creăm ecranul Game Over cu afișarea scorului și opțiunile de restart sau întoarcere la meniu.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Ecranul Game Over:</h3>
            <ImageModal 
              src="/assets/images/gdevelop/GeometryMonster/ecrangameover.png" 
              alt="Ecranul Game Over" 
              caption="Designul ecranului de restart cu Monster mort și opțiuni"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Personajele scenei:</h3>
            <ImageModal 
              src="/assets/images/gdevelop/GeometryMonster/personajescenagameover.png" 
              alt="Personajele Game Over" 
              caption="Lista obiectelor pentru scena Restart"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>
        </div>

        <StepItem number={1} title="Adaugă obiectele în scena Restart">
          <p>În scena <strong>Restart</strong>, adaugă următoarele obiecte:</p>
          <div className="mt-3 bg-gray-50 p-4 rounded-lg">
            <ul className="space-y-2">
              <li><strong>Monster</strong> - Sprite cu animația MonsterDead activă</li>
              <li><strong>ScoreText</strong> - Text pentru afișarea scorului final</li>
              <li><strong>GameOver</strong> - Text cu "GAME OVER"</li>
              <li><strong>RestartButton</strong> - Buton pentru a juca din nou</li>
              <li><strong>HomeButton</strong> - Buton pentru întoarcerea la meniu</li>
            </ul>
          </div>
        </StepItem>

        <StepItem number={2} title="Configurează textele">
          <p>Pentru elementele de text:</p>
          <div className="mt-3 space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">📊 ScoreText:</h5>
              <ul className="text-sm space-y-1">
                <li><strong>Size:</strong> 30</li>
                <li><strong>Color:</strong> Albastru sau alb</li>
                <li><strong>Initial text:</strong> "Score: 0"</li>
                <li><strong>Poziție:</strong> Sub Monster-ul mort</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">💀 GameOver:</h5>
              <ul className="text-sm space-y-1">
                <li><strong>Size:</strong> 60</li>
                <li><strong>Color:</strong> Roșu sau albastru intens</li>
                <li><strong>Bold:</strong> ✅</li>
                <li><strong>Text:</strong> "GAME OVER"</li>
                <li><strong>Poziție:</strong> Centrat, în partea de sus</li>
              </ul>
            </div>
          </div>
        </StepItem>

        <StepItem number={3} title="Configurează butoanele">
          <p>Pentru ambele butoane, adaugă comportamentul <strong>PanelSpriteButton</strong>:</p>
          <div className="mt-3 space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">🔄 RestartButton:</h5>
              <ul className="text-sm space-y-1">
                <li>Adaugă imaginea restart-button.png</li>
                <li>Adaugă comportamentul Panel Sprite Button</li>
                <li>Poziționează în partea de jos, stânga</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">🏠 HomeButton:</h5>
              <ul className="text-sm space-y-1">
                <li>Adaugă imaginea home-button.png</li>
                <li>Adaugă comportamentul Panel Sprite Button</li>
                <li>Poziționează în partea de jos, dreapta</li>
              </ul>
            </div>
          </div>
        </StepItem>

        <StepItem number={4} title="Adaugă evenimentele de navigare">
          <div className="mb-4">
            <ImageModal 
              src="/assets/images/gdevelop/GeometryMonster/evenimenterestart.png" 
              alt="Evenimente Restart" 
              caption="Logica pentru afișarea scorului și navigare"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>
          <p>În tab-ul <strong>Events</strong> al scenei Restart, adaugă următoarele evenimente:</p>
          
          <div className="mt-3 space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">📊 Afișarea scorului:</h5>
              <ul className="text-sm space-y-1">
                <li><strong>Condiție:</strong> At the beginning of the scene</li>
                <li><strong>Acțiune:</strong> Change the text of ScoreText: set to "Score: " + Score</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">🔄 Restart game:</h5>
              <ul className="text-sm space-y-1">
                <li><strong>Condiție:</strong> RestartButton is clicked</li>
                <li><strong>Acțiune:</strong> Change to scene "Level1"</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">🏠 Back to menu:</h5>
              <ul className="text-sm space-y-1">
                <li><strong>Condiție:</strong> HomeButton is clicked</li>
                <li><strong>Acțiune:</strong> Change to scene "MainMenu"</li>
              </ul>
            </div>
          </div>
        </StepItem>

        <InfoBox title="Fluxul complet al jocului" icon="info" variant="primary">
          Acum ai implementat întregul ciclu: MainMenu → Level1 → Restart → (Level1 sau MainMenu). 
          Scorul se păstrează între scene și se afișează la final pentru feedback complet.
        </InfoBox>
      </section>

      <section id="testare">
        <h2 className="text-2xl font-bold mb-4">🎮 Testarea și optimizările finale</h2>
        <p className="mb-4">
          Acum că ai implementat tot jocul, să testezi toate funcționalitățile și să faci ultimele ajustări!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
            <ImageModal 
              src="/assets/images/gdevelop/GeometryMonster/geometry-monster-joc.png" 
              alt="Jocul Geometry Monster finalizat" 
              className="w-full"
            />
            <div className="p-4">
              <h4 className="font-bold mb-2">Jocul tău Geometry Monster!</h4>
              <p className="text-sm text-gray-600 mb-3">
                Colectează forme geometrice și evită bombele în această aventură mobilă!
              </p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                <Play className="h-4 w-4 mr-2" />
                <span>Testează jocul</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">🎯 Lista de verificare:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                <span>Logo-ul se mișcă elegant în MainMenu</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                <span>Butonul Play navigă corect către Level1</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                <span>Monster-ul se controlează cu touch și keyboard</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                <span>Formele apar aleatoriu și se rotesc frumos</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                <span>Particle effects explodează la colectare</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                <span>Bombele scad vieți și fac Monster-ul să clipească</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                <span>GameSpeed crește progresiv dificultatea</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                <span>Health bar se actualizează corect</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                <span>Game Over funcționează cu efecte dramatice</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">✓</div>
                <span>Restart și Home funcționează perfect</span>
              </li>
            </ul>
          </div>
        </div>

        <Challenge title="🚀 Provocări pentru îmbunătățirea jocului" difficulty="hard">
          <p>După ce ai masterizat jocul de bază, încearcă aceste îmbunătățiri avansate:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🌟
              </div>
              <div>
                <h4 className="font-bold">Power-ups speciale</h4>
                <p className="text-sm text-gray-600">Adaugă power-ups care încetinesc timpul, măresc Monster-ul sau oferă puncte bonus.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🏆
              </div>
              <div>
                <h4 className="font-bold">Sistem de high score</h4>
                <p className="text-sm text-gray-600">Salvează și afișează cel mai bun scor cu variabile globale sau local storage.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🎵
              </div>
              <div>
                <h4 className="font-bold">Muzică și efecte sonore</h4>
                <p className="text-sm text-gray-600">Adaugă muzică de fundal, sunete pentru particle effects și ambient sounds.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-yellow-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                📱
              </div>
              <div>
                <h4 className="font-bold">Vibrations pe mobil</h4>
                <p className="text-sm text-gray-600">Folosește extensia Vibration pentru feedback haptic când Monster-ul e lovit.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🌊
              </div>
              <div>
                <h4 className="font-bold">Waves de inamici</h4>
                <p className="text-sm text-gray-600">Creează wave-uri cu tipuri diferite de bombe și provocări speciale.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🎨
              </div>
              <div>
                <h4 className="font-bold">Teme vizuale</h4>
                <p className="text-sm text-gray-600">Adaugă teme diferite (spațiu, ocean, pădure) cu backgrounds și efecte adaptate.</p>
              </div>
            </div>
          </div>
        </Challenge>

        <div className="mt-8 bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-xl font-bold mb-3">📱 Sfaturi pentru publicarea pe mobil</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">🚀 Export și publicare:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Exportă ca <strong>Android APK</strong> pentru telefoane</li>
                <li>Testează pe dispozitive reale pentru touch response</li>
                <li>Optimizează imaginile pentru loading rapid</li>
                <li>Consideră publicarea pe Google Play Store</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">⚡ Optimizări de performanță:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Limitează numărul de particle systems active</li>
                <li>Folosește object pooling pentru forme și bombe</li>
                <li>Optimizează mărimea sprite-urilor pentru mobil</li>
                <li>Testează pe telefoane mai slabe pentru compatibilitate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
        <h2 className="text-2xl font-bold mb-3">🏆 Felicitări pentru primul tău joc mobil!</h2>
        <p className="mb-4">
          Ai creat cu succes "Geometry Monster" - un joc mobil complet cu tehnologii avansate! 
          Acest proiect ți-a permis să înveți concepte esențiale pentru dezvoltarea modernă de jocuri:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold mb-2 flex items-center">
              <Smartphone className="h-5 w-5 text-purple-600 mr-2" />
              Mobile-First Design
            </h4>
            <ul className="text-sm space-y-1">
              <li>• Rezoluție optimizată 640x960</li>
              <li>• Control touch intuitiv</li>
              <li>• UI adaptat pentru degete</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold mb-2 flex items-center">
              <Zap className="h-5 w-5 text-blue-600 mr-2" />
              Extensii Avansate
            </h4>
            <ul className="text-sm space-y-1">
              <li>• EllipseMovement pentru animații</li>
              <li>• Health system complex</li>
              <li>• Particle systems spectaculoase</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold mb-2 flex items-center">
              <Layers className="h-5 w-5 text-green-600 mr-2" />
              Arhitectură Complexă
            </h4>
            <ul className="text-sm space-y-1">
              <li>• 3 scene cu navigare fluidă</li>
              <li>• Layer management profesional</li>
              <li>• Progressive difficulty system</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg mb-4">
          <h4 className="font-bold mb-2">🚀 Următorii pași în dezvoltarea de jocuri:</h4>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li><strong>Publică jocul</strong> - Exportă pentru Android și împărtășește cu prietenii</li>
            <li><strong>Colectează feedback</strong> - Testează cu alți jucători pentru îmbunătățiri</li>
            <li><strong>Explorează alte platforme</strong> - Adaptează pentru iOS sau web</li>
            <li><strong>Învață tehnologii noi</strong> - Experimentează cu alte extensii GDevelop</li>
            <li><strong>Creează variante</strong> - Folosește aceleași concepte pentru alte genuri</li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
            <a href="/gdevelop/session7" className="flex items-center">
              <ArrowRight className="h-5 w-5 mr-2" />
              <span>Continuă cu următoarea lecție</span>
            </a>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
            <a href="/courses/gdevelop" className="flex items-center">
              <Star className="h-5 w-5 mr-2" />
              <span>Vezi toate lecțiile GDevelop</span>
            </a>
          </Button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            📱 Ai învățat să creezi jocuri pentru mobil cu extensii avansate și tehnologii moderne! 
            Acum ești pregătit să publici propriile tale jocuri pe store-uri!
          </p>
        </div>
      </section>
    </div>
  </LessonLayout>
);
};

export default GDevelopGeometryMonster;