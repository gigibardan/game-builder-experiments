import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample } from '@/components/CodeExample';
import ImageModal from '@/components/ImageModal';

const RobloxLesson3 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'constructii', title: 'Ce sunt construcțiile?' },
    { id: 'organizare', title: 'Sfaturi pentru organizare' },
    { id: 'scripturi', title: 'Script-uri în Roblox Studio' },
    { id: 'exemple', title: 'Exemple de script-uri' },
    { id: 'exercitiu', title: 'Exercițiu practic' },
    { id: 'sfaturi', title: 'Sfaturi finale' },
  ];

  const resources = [
    { title: 'Documentație Roblox Studio', url: 'https://developer.roblox.com/en-us/api-reference' },
    { title: 'Lua Programming Guide', url: 'https://developer.roblox.com/en-us/articles/Lua-learning-resources' },
    { title: 'Roblox Toolbox', url: 'https://www.roblox.com/develop/library' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Construcții și Script-uri pentru Începători',
      content: (
        <>
          <p className="mb-4">
            În această lecție vei învăța să folosești <strong>Toolbox-ul din Roblox Studio</strong> pentru a adăuga modele gata făcute în jocul tău și să creezi primele tale script-uri interactive în limbajul Lua. Vei afla cum să organizezi elementele în scenă și cum să adaugi comportamente interactive folosind script-uri simple și eficiente.
          </p>

          <LearningOutcome items={[
            "Cum să folosești Toolbox-ul pentru modele prefabricate",
            "Cum să organizezi și grupezi elementele din scenă",
            "Structura de bază a unui script în Lua",
            "Cum să creezi comportamente interactive simple",
            "7 exemple practice de script-uri cu explicații detaliate"
          ]} />
        </>
      )
    },
    {
      id: 'constructii',
      title: 'Ce sunt „construcțiile" în Roblox Studio?',
      content: (
        <>
          <p className="mb-4">
            <strong>„Construcțiile"</strong> sunt modele gata făcute: case, copaci, drumuri și altele. Le folosim ca piese de LEGO pentru a crea jocul nostru.
          </p>

          <h3 className="text-xl font-bold mb-3">De unde luăm construcțiile?</h3>
          
          <StepItem number={1} title="Deschide Toolbox-ul">
            <p>Deschide Roblox Studio și intră în proiectul tău. În bara de sus, apasă pe TAB-ul <strong>Toolbox</strong> (în stânga).</p>
          </StepItem>

          <StepItem number={2} title="Alege categoria Models">
            <p>Alege categoria <strong>Models</strong> (Modele).</p>
          </StepItem>

          <StepItem number={3} title="Caută modelele dorite">
            <p>Folosește căsuța de căutare și tastează ce dorești (ex: "House", "Tree", "Road").</p>
          </StepItem>

          <StepItem number={4} title="Selectează modelul">
            <p>Răsfoiește rezultatele și alege ce îți place.</p>
          </StepItem>

          <ImageModal 
            src="/assets/images/roblox/RobloxL3.2.png" 
            alt="Toolbox din Roblox Studio" 
            caption="Interfața Toolbox din Roblox Studio pentru căutarea și adăugarea modelelor"
          />

          <h3 className="text-xl font-bold mb-3 mt-6">Ce modele să alegem și de ce?</h3>
          
          <InfoBox title="Sugestia noastră" icon="star" variant="primary">
            Este de a alege elemente simple și comune (ex. case, copaci, drumuri), însă puteți alege orice vă doriți pentru a maximiza experiența.
          </InfoBox>

          <InfoBox title="Important!" icon="warning" variant="warning">
            Pentru ca această lecție să își atingă scopul, indiferent de ce elemente ați adăuga din Toolbox, va trebui să adăugați 8 Part-uri care urmează a fi scriptate.
          </InfoBox>

          <h3 className="text-xl font-bold mb-3 mt-6">Cum adăugăm o construcție în joc?</h3>
          
          <StepItem number={1} title="Găsește modelul">
            <p>Din Toolbox, găsești modelul dorit.</p>
          </StepItem>

          <StepItem number={2} title="Adaugă în Workspace">
            <p>Dai dublu-click sau tragi modelul în <code>Explorer ▸ Workspace</code>.</p>
          </StepItem>

          <StepItem number={3} title="Ajustează poziția">
            <p>Vezi cum apare în scenă și poți muta, scala sau roti cu unelte din bara <strong>HOME</strong>.</p>
          </StepItem>
        </>
      )
    },
    {
      id: 'organizare',
      title: 'Sfaturi pentru organizare',
      content: (
        <>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">📝 Redenumire</h4>
              <p>Schimbă numele modelului în <strong>Explorer</strong> (ex: „Casa1", „Copac_Alee").</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">📦 Grupare</h4>
              <p>Grupează părțile cu butonul <strong>Group</strong> (<code>Ctrl + G</code>). Pentru a selecta mai multe elemente care urmează a fi grupate, apăsați <code>Ctrl</code> și butonul stânga al mouse-ului (<code>Ctrl + Mouse Left</code>).</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">💾 Salvare</h4>
              <p>Salvează frecvent (<code>File ▸ Save to Roblox As...</code>).</p>
            </div>
          </div>

          <ImageModal 
            src="/assets/images/roblox/RobloxL3.3.png" 
            alt="Organizarea modelelor" 
            caption="Exemplu de organizare a modelelor în Explorer cu nume descriptive și grupări"
          />

          <Challenge title="Exercițiu practic" difficulty="easy">
            <ul className="list-disc list-inside space-y-2">
              <li>Alege 3 modele diferite (o casă, un copac și un drum).</li>
              <li>Adaugă-le în Workspace și plasează-le cum îți place.</li>
              <li>Numește-le și grupează-le.</li>
            </ul>
          </Challenge>
        </>
      )
    },
    {
      id: 'scripturi',
      title: 'Script-uri în Roblox Studio',
      content: (
        <>
          <h3 className="text-xl font-bold mb-3">Ce este un script?</h3>
          
          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <p>Un <strong>script</strong> este un mic program scris în limbajul <strong>Lua</strong>.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <p>Servește pentru a adăuga comportamente interactive la elementele din joc (ex. schimbă culoarea, teleportare, scoruri).</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <p>În Roblox Studio, script-urile se atașează la obiecte din <strong>Explorer</strong> (Parts, Models etc.).</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3">Cum adăugăm un script într-un Part</h3>
          
          <ImageModal 
            src="/assets/images/roblox/RobloxL3.4.png" 
            alt="Adaugare part" 
            caption="Procesul de adăugare a unui Part în Roblox Studio"
          />
          
          <StepItem number={1} title="Selectează Part-ul">
            <p>În <strong>Explorer</strong>, selectează Part-ul (cub, plan sau altă piesă).</p>
          </StepItem>

          <StepItem number={2} title="Inserează Script-ul">
            <p>Click dreapta pe Part (din explorer) ► <strong>Insert Object</strong> ► <strong>Script</strong>.</p>
          </StepItem>

          <StepItem number={3} title="Verifică crearea">
            <p>Apare un nod Script sub Part.</p>
          </StepItem>

          <StepItem number={4} title="Deschide editorul">
            <p>Dublu-click pe script pentru a deschide editorul Lua.</p>
          </StepItem>

          <h3 className="text-xl font-bold mb-3 mt-6">Structura de bază a unui script</h3>
          
          <CodeExample title="Structura de bază" language="lua">
            {`local obiect = script.Parent -- referința la Part-ul care conține scriptul

obiect.Touched:Connect(function(hit)
    -- codul care se execută când cineva atinge obiectul
end)`}
          </CodeExample>

          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Explicația codului:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><code>local obiect = script.Parent</code>: salvăm Part-ul în variabila obiect.</li>
              <li><code>Touched</code>: eveniment care detectează coliziunea.</li>
              <li><code>Connect(function(hit) ...)</code>: atașează o funcție care primește parametrul hit (ce a intrat în contact).</li>
            </ul>
          </div>
        </>
      )
    },
    {
      id: 'exemple',
      title: 'Exemple de script-uri detaliate',
      content: (
        <>
          <p className="mb-6">Pentru fiecare cod, vom explica liniile importante și comportamentul final.</p>

          <h3 className="text-xl font-bold mb-3">Exemplul 1 și 2: Schimbare aleatorie a culorii la atingere</h3>
          
          <CodeExample title="Script pentru schimbarea culorii" language="lua">
            {`local alreadyTouched = false

script.Parent.Touched:Connect(function(hit)
    local character = hit.Parent
    if character:FindFirstChild("Humanoid") and not alreadyTouched then
        alreadyTouched = true
        script.Parent.BrickColor = BrickColor.Random()
    end
end)`}
          </CodeExample>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">Explicația codului:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>alreadyTouched</strong>: variabilă booleană care previne schimbarea repetată.</li>
              <li><strong>FindFirstChild("Humanoid")</strong>: verifică dacă ceea ce a atins obiectul este un jucător (personaj cu Humanoid).</li>
              <li><strong>BrickColor.Random()</strong>: generează o culoare aleatoare.</li>
              <li>După prima atingere de jucător, alreadyTouched devine true și scriptul nu mai schimbă din nou culoarea.</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">Exemplul 3: Crearea unui efect de fum la atingere</h3>
          
          <CodeExample title="Script pentru efect de fum" language="lua">
            {`script.Parent.Touched:Connect(function(hit)
    local character = hit.Parent
    if character:FindFirstChild("Humanoid") then
        local smoke = Instance.new("Smoke")
        smoke.Parent = script.Parent
        smoke.Color = Color3.fromRGB(255, 255, 255)
        smoke.Opacity = 0.5
    end
end)`}
          </CodeExample>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">Explicația codului:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Instance.new("Smoke")</strong>: creează un obiect de tip fum.</li>
              <li><strong>smoke.Parent = script.Parent</strong>: atașează fum la Part.</li>
              <li>Setăm culoarea (Color) și transparența (Opacity) pentru efect.</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">Exemplul 4: Aplicarea unei texturi la atingere</h3>
          
          <CodeExample title="Script pentru aplicarea texturilor" language="lua">
            {`script.Parent.Touched:Connect(function(hit)
    local character = hit.Parent
    if character:FindFirstChild("Humanoid") then
        script.Parent.TextureID = "rbxassetid://1234567890"
    end
end)`}
          </CodeExample>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">Explicația codului:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>TextureID</strong>: proprietate care afișează o imagine pe suprafața Part-ului.</li>
              <li>Trebuie să înlocuiești 1234567890 cu ID-ul asset-ului tău din Roblox.</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">Exemplul 5: Teleportare aleatorie a obiectului</h3>
          
          <CodeExample title="Script pentru teleportare aleatorie" language="lua">
            {`script.Parent.Touched:Connect(function(hit)
    local character = hit.Parent
    if character:FindFirstChild("Humanoid") then
        local randomPosition = Vector3.new(
            math.random(-50, 50),
            math.random(10, 50),
            math.random(-50, 50)
        )
        script.Parent.CFrame = CFrame.new(randomPosition)
    end
end)`}
          </CodeExample>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">Explicația codului:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>math.random(min, max)</strong>: alege un număr aleator între valorile date.</li>
              <li><strong>Vector3.new(x, y, z)</strong>: poziție în spațiul 3D.</li>
              <li><strong>CFrame.new(pos)</strong>: repoziționează Part-ul la pos.</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">Exemplul 6: Transparență temporară</h3>
          
          <CodeExample title="Script pentru transparență temporară" language="lua">
            {`script.Parent.Touched:Connect(function(hit)
    local character = hit.Parent
    if character:FindFirstChild("Humanoid") then
        script.Parent.Transparency = 0.5
        wait(1)
        script.Parent.Transparency = 0
    end
end)`}
          </CodeExample>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">Explicația codului:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Schimbăm Transparency la 0.5 (50% invizibil).</li>
              <li><strong>wait(1)</strong>: scriptul așteaptă 1 secundă.</li>
              <li>Resetăm transparența la 0 (complet vizibil).</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">Exemplul 7: Incrementare punctaj la atingere</h3>
          
          <CodeExample title="Script pentru sistem de punctaj" language="lua">
            {`script.Parent.Touched:Connect(function(hit)
    local character = hit.Parent
    if character:FindFirstChild("Humanoid") then
        local player = game.Players:GetPlayerFromCharacter(character)
        if player then
            if not player:FindFirstChild("leaderstats") then
                local leaderstats = Instance.new("Folder")
                leaderstats.Name = "leaderstats"
                leaderstats.Parent = player
            end
            
            local score = player.leaderstats:FindFirstChild("Score") 
                or Instance.new("IntValue", player.leaderstats)
            score.Name = "Score"
            score.Value = score.Value + 1
            print(player.Name .. " a câștigat un punct!")
        end
    end
end)`}
          </CodeExample>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">Explicația codului:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>GetPlayerFromCharacter</strong>: obține obiectul Player din caracter.</li>
              <li><strong>leaderstats</strong>: folder special folosit de Roblox pentru afișarea scorului.</li>
              <li><strong>IntValue</strong>: tip de valoare întreagă pentru stocarea numărului de puncte.</li>
              <li>Creăm sau actualizăm Score.Value și afișăm un mesaj în Output.</li>
            </ul>
          </div>
        </>
      )
    },
    {
      id: 'exercitiu',
      title: 'Pași pentru exercițiu practic cu script-uri',
      content: (
        <>
          <StepItem number={1} title="Adaugă un Part">
            <p>Adaugă un nou Part în scenă.</p>
          </StepItem>

          <StepItem number={2} title="Inserează Script-ul">
            <p>Inserează un <strong>Script</strong> sub acel Part.</p>
          </StepItem>

          <StepItem number={3} title="Copiază exemplul">
            <p>Copiază unul din exemplele de mai sus.</p>
          </StepItem>

          <StepItem number={4} title="Testează funcționalitatea">
            <p>Testează jocul (Play) și atinge Part-ul.</p>
          </StepItem>

          <StepItem number={5} title="Experimentează">
            <p>Observă comportamentul și modifică valorile (ex. culori, timp, poziții).</p>
          </StepItem>
        </>
      )
    },
    {
      id: 'sfaturi',
      title: 'Sfaturi finale',
      content: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoBox title="Comentează codul" icon="info" variant="primary">
              <p>Comentează-ți codul cu <code>--</code> pentru claritate</p>
            </InfoBox>

            <InfoBox title="Testează frecvent" icon="star" variant="secondary">
              <p>Testează frecvent în <strong>Play Mode</strong></p>
            </InfoBox>

            <InfoBox title="Experimentează" icon="star" variant="primary">
              <p>Experimentează schimbând parametrii și proprietățile</p>
            </InfoBox>

            <InfoBox title="Organizează" icon="info" variant="secondary">
              <p>Organizează-ți modelele cu nume descriptive</p>
            </InfoBox>

            <InfoBox title="Grupează" icon="star" variant="primary">
              <p>Grupează elementele pentru o mai bună organizare</p>
            </InfoBox>

            <InfoBox title="Salvează" icon="warning" variant="warning">
              <p>Salvează frecvent pentru a nu pierde progresul</p>
            </InfoBox>
          </div>

          <div className="mt-6 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <h3 className="text-lg font-semibold mb-2">Pregătire pentru lecția următoare</h3>
            <p>În lecția următoare vom explora tehnici mai avansate de scripting și vom învăța să creăm interacțiuni mai complexe. Asigură-te că ai înțeles toate conceptele prezentate în această lecție înainte de a continua.</p>
          </div>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="roblox"
      sessionId="3"
      title="Curs Roblox Studio - Lecția 3"
      subtitle="Construcții și Script-uri pentru Începători"
      heroColor="bg-gradient-to-r from-blue-600 to-purple-600"
      previousLesson={{
        title: "Lecția 2 - Editarea terenului",
        path: "/robloxlua/session2quizgame"
      }}
      nextLesson={{
        title: "Lecția 4 - Tehnici avansate",
        path: "/robloxlua/session4obby"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default RobloxLesson3;