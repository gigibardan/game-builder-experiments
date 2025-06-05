import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample } from '@/components/CodeExample';
import ImageModal from '@/components/ImageModal';

const RobloxLesson2 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'initiere-proiect', title: 'Inițiere proiect' },
    { id: 'platforma-principala', title: 'Platforma principală' },
    { id: 'constructia-barierelor', title: 'Construcția barierelor' },
    { id: 'interfata', title: 'Interfață' },
    { id: 'script', title: 'Script' },
    { id: 'concluzii', title: 'Concluzii' },
  ];

  const resources = [
    { title: 'Documentația oficială Roblox Studio', url: 'https://create.roblox.com/docs/studio' },
    { title: 'Tutorial Parts și Models', url: 'https://create.roblox.com/docs/building-and-visuals/modeling-with-parts' },
    { title: 'Ghid Scripting Lua', url: 'https://create.roblox.com/docs/scripting' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl mb-6">
            <p className="text-lg leading-relaxed">
              În această lecție vei învăța să construiești un <strong>Quiz Game</strong> interactiv în Roblox Studio. 
              Vei crea camere successive cu întrebări și uși de răspuns, unde jucătorii trebuie să aleagă răspunsul 
              corect pentru a avansa. Sistemul include penalizări pentru răspunsurile greșite și o interfață grafică 
              intuitivă pentru afișarea întrebărilor și opțiunilor.
            </p>
          </div>

          <LearningOutcome items={[
            "Cum să creezi și să configurezi un proiect Quiz Game",
            "Construirea platformei principale și a barierelor de Quiz",
            "Crearea și configurarea ușilor cu răspunsuri corecte și greșite",
            "Implementarea unei interfețe grafice cu SurfaceGUI și TextLabel",
            "Scrierea unui script Lua pentru penalizarea răspunsurilor greșite",
            "Organizarea și gruparea elementelor pentru o structură clară"
          ]} />
        </>
      )
    },
    {
      id: 'initiere-proiect',
      title: 'Inițiere proiect',
      content: (
        <>
          <p className="mb-4">
            Deschide un proiect nou în Roblox Studio. Lecția de astăzi te va învăța să faci un Quiz Game customizabil după preferințe.
          </p>

          <StepItem number={1} title="Lansarea unui proiect nou">
            <p>Deschide Roblox Studio și alege să creezi un proiect nou de tip <strong className="text-blue-600">Baseplate</strong>.</p>
          </StepItem>

          <ImageModal 
            src="/assets/images/roblox/RobloxL2.1.png" 
            alt="Prezentare generală Quiz Obby" 
            caption="Prezentare generală a proiectului Quiz Obby"
          />

          <InfoBox title="Tip de proiect recomandat" icon="info" variant="primary">
            Pentru acest tutorial vom folosi un template Baseplate care ne oferă o platformă de bază pe care să construim.
          </InfoBox>
        </>
      )
    },
    {
      id: 'platforma-principala',
      title: 'Platforma principală',
      content: (
        <>
          <p className="mb-4">
            Jocul se va desfășura pe o platformă micșorată în lungime (după cum se vede în imagine). Se poate customiza după preferințe.
          </p>

          <StepItem number={1} title="Deschide un proiect de tip Baseplate">
            <p>Începe cu un template standard Baseplate care îți oferă o fundație solidă.</p>
          </StepItem>

          <StepItem number={2} title="Ajustează dimensiunea Baseplate-ului">
            <p>Modifică dimensiunile platformei pentru a se potrivi designului tău de Quiz Game.</p>
          </StepItem>

          <StepItem number={3} title="Setează culoarea și materialul dorit">
            <p>Personalizează aspectul platformei principale alegând culoarea și materialul preferat.</p>
          </StepItem>

          <ImageModal 
            src="/assets/images/roblox/RobloxL2.9.png" 
            alt="Platforma principală configurată" 
            caption="Exemplu de platformă principală configurată pentru Quiz Game"
          />

          <InfoBox title="Personalizare" icon="star" variant="secondary">
            Platforma poate fi personalizată complet după preferințele tale - dimensiuni, culori, materiale.
          </InfoBox>
        </>
      )
    },
    {
      id: 'constructia-barierelor',
      title: 'Construcția barierelor de Quiz',
      content: (
        <>
          <InfoBox title="Important!" icon="warning" variant="warning">
            Această construcție trebuie să fie lată cât platforma pe care se desfășoară jocul.
          </InfoBox>

          <div className="bg-blue-50 p-6 rounded-lg mt-6 mb-6 border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-800 mb-3">Recomandare:</h4>
            <p className="text-blue-700">
              Design-ul acestor nivele se poate face oricum doriți, însă dacă doriți să mergeți după recomandarea 
              noastră urmăriți instrucțiunile de mai jos.
            </p>
          </div>

          <ImageModal 
            src="/assets/images/roblox/RobloxL2.2.png" 
            alt="Construcția barierelor de Quiz" 
            caption="Exemplu de construcție a barierelor pentru Quiz Game"
          />

          <h3 className="text-lg font-semibold mb-4 text-gray-800">Construcția formei T</h3>
          <StepItem number={1} title="Crearea structurii de bază">
            <p>Se va construi din <strong className="text-purple-600">2 Part-uri</strong> pentru a forma o structură în T.</p>
          </StepItem>

          <StepItem number={2} title="Personalizarea culorilor">
            <p>Se colorează după preferința fiecăruia pentru a se integra în designul general.</p>
          </StepItem>

          <h3 className="text-lg font-semibold mb-4 text-gray-800 mt-8">Construcția ușilor</h3>
          <StepItem number={1} title="Structura ușilor">
            <p>Fiecare ușă este formată din <strong className="text-green-600">trei Part-uri</strong>.</p>
          </StepItem>

          <StepItem number={2} title="Numărul de uși">
            <p>Vom construi <strong className="text-green-600">2 uși</strong> (una cu răspunsul corect și una cu răspuns greșit).</p>
          </StepItem>

          <StepItem number={3} title="Configurarea Part-ului interior">
            <p>În interiorul ușilor punem câte un Part pe care îl configurăm astfel:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Colorează cu <strong className="text-red-600">roșu</strong></li>
              <li>Modifică <code className="bg-gray-100 px-2 py-1 rounded">CanCollide = False</code></li>
              <li>Setează <code className="bg-gray-100 px-2 py-1 rounded">Anchored = True</code></li>
              <li>Ajustează <code className="bg-gray-100 px-2 py-1 rounded">Transparency = 0.4</code></li>
            </ul>
          </StepItem>

          <ImageModal 
            src="/assets/images/roblox/RobloxL2.4.png" 
            alt="Construcția ușilor" 
            caption="Configurarea ușilor cu Part-urile interioare"
          />
        </>
      )
    },
    {
      id: 'interfata',
      title: 'Interfață',
      content: (
        <>
          <p className="mb-4">
            Pentru o bună organizare grupăm T-ul și ușile. Selectează Part-urile și folosește combinația 
            <code className="bg-gray-100 px-2 py-1 rounded mx-2">Ctrl + G</code>.
          </p>

          <ImageModal 
            src="/assets/images/roblox/RobloxL2.5.png" 
            alt="Gruparea Part-urilor" 
            caption="Gruparea elementelor pentru organizare"
          />

          <h3 className="text-lg font-semibold mb-4 text-gray-800 mt-8">Configurarea întrebării</h3>

          <StepItem number={1} title="Selectarea Part-ului superior">
            <p>Selectați Part-ul superior din forma T unde va fi afișată întrebarea.</p>
          </StepItem>

          <StepItem number={2} title="Adăugarea SurfaceGUI">
            <p>Adăugați <strong className="text-blue-600">SurfaceGUI</strong> pentru a putea afișa textul pe suprafața Part-ului.</p>
          </StepItem>

          <StepItem number={3} title="Adăugarea TextLabel">
            <p>În SurfaceGui adăugați un <strong className="text-blue-600">TextLabel</strong> apăsând pe forma + din dreptul acestuia.</p>
          </StepItem>

          <ImageModal 
            src="/assets/images/roblox/RobloxL2.6.png" 
            alt="Configurarea SurfaceGUI" 
            caption="Adăugarea și configurarea SurfaceGUI pentru întrebări"
          />

          <p className="mb-4">
            În <strong className="text-blue-600">Properties</strong>, atribuie proprietății <code className="bg-gray-100 px-2 py-1 rounded">Text</code> 
            întrebarea pe care vrei să o pui în Quiz (ex. "În ce an a început primul război mondial?"). De asemenea setăm și 
            proprietățile <code className="bg-gray-100 px-2 py-1 rounded">Position</code> și <code className="bg-gray-100 px-2 py-1 rounded">Size</code> 
            precum se observă în imagine.
          </p>

          <ImageModal 
            src="/assets/images/roblox/RobloxL2.7.png" 
            alt="Proprietățile întrebării" 
            caption="Configurarea proprietăților pentru textul întrebării"
          />

          <h3 className="text-lg font-semibold mb-4 text-gray-800 mt-8">Configurarea răspunsurilor</h3>
          <p className="mb-4">
            Pentru răspunsurile la întrebări avem următoarea configurație, asemănătoare cu cea de la întrebări:
          </p>

          <StepItem number={1} title="Redenumirea Part-urilor">
            <p>Redenumiți Part-ul colorat roșu (<code className="bg-gray-100 px-2 py-1 rounded">Usa_corecta</code> și <code className="bg-gray-100 px-2 py-1 rounded">Usa_gresita</code>).</p>
          </StepItem>

          <StepItem number={2} title="Adăugarea SurfaceGui">
            <p>Adăugați <strong className="text-green-600">SurfaceGui</strong> (click pe + apoi căutați SurfaceGui).</p>
          </StepItem>

          <StepItem number={3} title="Adăugarea TextLabel">
            <p>În SurfaceGui adăugați un <strong className="text-green-600">TextLabel</strong> și redenumiți-l după caz (<code className="bg-gray-100 px-2 py-1 rounded">Corect</code> sau <code className="bg-gray-100 px-2 py-1 rounded">Greșit</code>).</p>
          </StepItem>

          <StepItem number={4} title="Configurarea textului răspunsului">
            <p>Din Properties setăm <code className="bg-gray-100 px-2 py-1 rounded">Text = 1914</code> sau <code className="bg-gray-100 px-2 py-1 rounded">1912</code> după caz, un răspuns corect și unul greșit.</p>
          </StepItem>

          <ImageModal 
            src="/assets/images/roblox/RobloxL2.8.png" 
            alt="Configurarea răspunsurilor" 
            caption="Configurarea textului pentru răspunsurile corecte și greșite"
          />
        </>
      )
    },
    {
      id: 'script',
      title: 'Script',
      content: (
        <>
          <p className="mb-4">
            În această lecție folosim script-uri doar la <strong className="text-red-600">Usa_gresita</strong>. 
            Script-ul care va fi folosit reduce viața personajului la 0, forțându-l să se respawneze și să reia 
            întrebările în cazul în care acesta răspunde greșit la una dintre întrebări.
          </p>

           <p> <code className="bg-gray-100 px-2 py-1 rounded">{`script.Parent.Touched:Connect(function(hit)
    local character = hit.Parent
    local humanoid = character:FindFirstChild("Humanoid")
    if humanoid then
        humanoid.Health = 0
    end
end)`}</code> </p> 


          <div className="bg-gray-50 p-6 rounded-lg mt-6">
            <h4 className="font-bold text-gray-800 mb-4">Explicația codului:</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <code className="bg-blue-100 px-2 py-1 rounded text-sm">script.Parent.Touched:Connect(function(hit)</code>
                <p className="text-gray-700 mt-1">Așteaptă ca orice obiect (hit) să atingă Part-ul pe care e scriptul.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <code className="bg-green-100 px-2 py-1 rounded text-sm">local character = hit.Parent</code>
                <p className="text-gray-700 mt-1">„Urcă" un nivel în ierarhia obiectelor: de la partea atinsă la modelul jucătorului.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <code className="bg-purple-100 px-2 py-1 rounded text-sm">local humanoid = character:FindFirstChild("Humanoid")</code>
                <p className="text-gray-700 mt-1">Caută în model un obiect numit <strong>Humanoid</strong> (gestionează viața și mișcarea).</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <code className="bg-orange-100 px-2 py-1 rounded text-sm">if humanoid then ... end</code>
                <p className="text-gray-700 mt-1">Verifică dacă acel model chiar e un jucător (are Humanoid).</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <code className="bg-red-100 px-2 py-1 rounded text-sm">humanoid.Health = 0</code>
                <p className="text-gray-700 mt-1">Setează viața la zero → jucătorul „moare" și reapare la ultimul checkpoint.</p>
              </div>
            </div>
          </div>

          <InfoBox title="Implementarea scriptului" icon="info" variant="primary">
            Adaugă acest script ca un Server Script în Part-ul roșu din interiorul ușii greșite pentru a funcționa corect.
          </InfoBox>
        </>
      )
    },
    {
      id: 'concluzii',
      title: 'Concluzii și bune practici',
      content: (
        <>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl mb-6">
            <h3 className="text-lg font-semibold mb-4">💡 Sfaturi și bune practici</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Testează mereu script-urile înainte de a le implementa definitiv
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Folosește nume descriptive pentru Part-uri (<code className="bg-white bg-opacity-20 px-2 py-1 rounded">Usa_corecta</code>, <code className="bg-white bg-opacity-20 px-2 py-1 rounded">Usa_gresita</code>)
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Grupează elementele pentru o organizare mai bună a workspace-ului
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Ajustează dimensiunile ușilor pentru a fi proporționale cu platforma
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Poți crea multiple nivele repetând procesul pentru fiecare întrebare
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Salvează frecvent (<code className="bg-white bg-opacity-20 px-2 py-1 rounded">Ctrl+S</code>) pentru a nu pierde progresul
              </li>
            </ul>
          </div>

          <InfoBox title="Ce ai învățat în această lecție" icon="success" variant="success">
            <ul className="list-disc list-inside space-y-2">
              <li>Crearea unui proiect Quiz Game în Roblox Studio</li>
              <li>Construirea și configurarea platformei principale</li>
              <li>Crearea structurilor în formă de T și a ușilor</li>
              <li>Implementarea interfețelor grafice cu SurfaceGUI și TextLabel</li>
              <li>Scrierea unui script Lua pentru penalizarea răspunsurilor greșite</li>
              <li>Organizarea și gruparea elementelor pentru o dezvoltare eficientă</li>
            </ul>
          </InfoBox>

          <div className="mt-6 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold mb-3 text-purple-800">Pregătire pentru lecția următoare</h3>
            <p className="text-purple-700">
              În lecția următoare vom explora concepte mai avansate de scripting și vom învăța să creăm sisteme 
              interactive mai complexe. Asigură-te că înțelegi bine conceptele de SurfaceGUI și scripting basic 
              înainte de a continua.
            </p>
          </div>

          <Challenge title="Provocare practică: Extinde Quiz-ul tău" difficulty="medium">
            <p className="mb-3">Pune în practică ceea ce ai învățat creând un Quiz Game extins care să includă:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Cel puțin 3 întrebări diferite pe nivele separate</li>
              <li>Întrebări cu 3 sau 4 opțiuni de răspuns în loc de 2</li>
              <li>Un sistem de checkpoint între întrebări</li>
              <li>Decorații și elemente vizuale pentru o experiență mai plăcută</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              Experimentează cu diferite tipuri de întrebări și vezi cum poți face jocul mai captivant.
            </p>
          </Challenge>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="roblox"
      sessionId="2"
      title="Quiz Obby Game"
      subtitle="Învață să creezi un joc interactiv de întrebări și răspunsuri cu penalizări pentru răspunsurile greșite"
      heroColor="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600"
      previousLesson={{
        title: "Lecția 1 - Terrain Editor",
        path: "/robloxlua/session1introducere"
      }}
      nextLesson={{
        title: "Lecția 3 - Concepte Avansate",
        path: "/robloxlua/session3constructiisctripturiincepatori"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default RobloxLesson2;