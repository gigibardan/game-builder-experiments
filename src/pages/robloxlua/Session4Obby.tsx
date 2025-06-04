import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample } from '@/components/CodeExample';
import ImageModal from '@/components/ImageModal';

const RobloxLesson4 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'provocarea-platformelor', title: 'Provocarea platformelor' },
    { id: 'platforme-cazatoare', title: 'Platforme căzătoare' },
    { id: 'platforme-mobile', title: 'Platforme mobile' },
    { id: 'concluzie', title: 'Concluzie și sfaturi finale' },
  ];

  const resources = [
    { title: 'Documentație Roblox Studio', url: 'https://developer.roblox.com/en-us/' },
    { title: 'Roblox Scripting Tutorial', url: 'https://developer.roblox.com/en-us/learn-roblox/coding-scripts' },
    { title: 'Exemple de Obby', url: 'https://www.roblox.com/games/genre/obby' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-2xl mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400 rounded-full opacity-30 -translate-y-6 translate-x-6"></div>
            <h2 className="text-2xl font-bold mb-4">Obby - Construire în 3 pași</h2>
            <p className="text-lg text-blue-50">
              În lecția de astăzi vom construi un Obby, simplu, în 3 pași. Un Obby este un parcurs cu obstacole în care jucătorul trebuie să navigheze prin diferite provocări pentru a ajunge la final, evitând capcanele și demonstrându-și abilitățile de sărituri și timing.
            </p>
          </div>

          <LearningOutcome items={[
            "Cum să creezi part-capcane care omoară jucătorul",
            "Cum să construiești platforme de sărit cu distanțe precise",
            "Cum să faci platforme căzătoare cu script-uri",
            "Cum să creezi platforme mobile cu mișcare ciclică",
            "Cum să folosești RunService pentru animații",
            "Cum să testezi și optimizezi un Obby"
          ]} />
        </>
      )
    },
    {
      id: 'provocarea-platformelor',
      title: 'Provocarea platformelor',
      content: (
        <>
          <div className="bg-gray-50 p-6 rounded-xl border border-blue-200 mb-6">
            <p className="mb-2"><strong>Scop:</strong> Să ajungi la următorul checkpoint sărind dintr-o platformă în alta.</p>
            <p className="mb-2"><strong>Aranjament:</strong> Platformele sunt distanțate astfel încât doar o săritură precisă te duce mai departe.</p>
            <p><strong>Consecință:</strong> Dacă ratezi săritura, cazi pe un Part-capcană care îți setează viața la 0.</p>
          </div>

          <ImageModal 
            src="/assets/images/roblox/RobloxL4.1.png" 
            alt="Exemplu de platforme de sărit în Roblox Studio" 
            caption="Aranjamentul platformelor pentru provocarea de sărituri"
          />

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-blue-600">1.1 Part-capcană</h3>
            
            <h4 className="font-semibold mb-3">Așezare & design:</h4>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>În fața spawn-ului</li>
              <li>Proprietate „Anchored" = True</li>
              <li>Culoare roșie (din Properties) pentru avertisment</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <ImageModal 
                src="/assets/images/roblox/RobloxL4.2.png" 
                alt="Part-capcană roșie în Roblox Studio" 
                caption="Part-capcană cu culoare roșie de avertisment"
              />
              <ImageModal 
                src="/assets/images/roblox/RobloxL4.3.png" 
                alt="Panoul Properties în Roblox Studio" 
                caption="Setarea proprietăților pentru part-capcană"
              />
            </div>

            <h4 className="font-semibold mb-3">Script:</h4>
            <CodeExample title="Script pentru part-capcană" language="lua">
{`script.Parent.Touched:Connect(function(hit)
    local character = hit.Parent
    local humanoid = character:FindFirstChild("Humanoid")
    if humanoid then
        humanoid.Health = 0
    end
end)`}
            </CodeExample>

            <p className="mb-4">
              Când jucătorul atinge Part-ul „otrăvitor", script-ul îl identifică, găsește obiectul „Humanoid" şi îi ia toată viaţa, „omorându-l".
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h4 className="font-semibold mb-3">Explicația script-ului:</h4>
              <ul className="space-y-3">
                <li><strong>„script.Parent.Touched"</strong> - Înseamnă „când ceva (orice) atinge obiectul la care este atașat acest script".</li>
                <li><strong>„:Connect(function(hit) ... end)"</strong> - Conectează o „funcție" (un set de pași) care se va porni fix în momentul atingerii. „hit" este o variabilă ce ţine minte exact ce a atins obiectul.</li>
                <li><strong>„local character = hit.Parent"</strong> - Ne uităm la „părintele" obiectului care a atins (de obicei un model de jucător). Îl numim „character" (personajul).</li>
                <li><strong>„local humanoid = character:FindFirstChild(\"Humanoid\")"</strong> - Căutăm în acel model un obiect numit „Humanoid" (responsabil cu viaţa şi mișcarea). Dacă există, îl salvăm în variabila „humanoid".</li>
                <li><strong>„if humanoid then ... end"</strong> - Verificăm: „Dacă chiar am găsit un Humanoid..." Astfel ne asigurăm că am atins un jucător, nu un simplu bloc.</li>
                <li><strong>„humanoid.Health = 0"</strong> - Setăm viaţa personajului la zero. În joc, asta înseamnă că jucătorul „moare" şi va respawna la ultimul checkpoint.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-blue-600">1.2 Platforme negre</h3>
            
            <h4 className="font-semibold mb-3">Așezare & dimensiuni:</h4>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Fiecare platformă: Size = Vector3.new(6, 1, 6) (6×6 studs suprafață, 1 stud înălţime)</li>
              <li>Proprietăţi: Anchored = true, CanCollide = true, Material = SmoothPlastic, Color = Black</li>
            </ul>

            <h4 className="font-semibold mb-3">Spaţiere:</h4>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Distanţa între marginile platformelor: 8–10 stud pentru început (distanţă săritorului standard)</li>
              <li>Pe măsură ce avansează, poţi mări la 12–15 stud pentru un plus de dificultate</li>
            </ul>

            <h4 className="font-semibold mb-3">Aliniere:</h4>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Centrele platformelor pe aceeaşi axă (de exemplu, X), ca să sară într-o linie dreaptă</li>
              <li>Poţi varia puţin poziţia pe axa Z (±2 stud) pentru un test de precizie</li>
            </ul>

            <h4 className="font-semibold mb-3">Nivelul vertical:</h4>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Toate la acelaşi Y (înălţime) pentru etapă simplă</li>
              <li>Pentru avansaţi, ridică fiecare platformă cu +1–2 stud</li>
            </ul>

            <InfoBox title="Notă importantă" icon="info" variant="primary">
              Între nivele vom pune un checkpoint din Toolbox.
            </InfoBox>
          </div>
        </>
      )
    },
    {
      id: 'platforme-cazatoare',
      title: 'Platforme căzătoare',
      content: (
        <>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-blue-600">2.1 Setare și comportament</h3>
            
            <h4 className="font-semibold mb-3">Aranjament:</h4>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Creează un rând de platforme identice (ex. Size = 6×1×6, Anchored = true, Material = SmoothPlastic)</li>
              <li>Plasează-le la distanțe mici (4–6 stud) pentru o săritură sigură</li>
              <li>Colorează-le la fel, astfel încât jucătorul să nu știe care e part-ul care cade</li>
              <li>Pe fiecare rând amplasează câte o platformă care cade</li>
            </ul>

            <h4 className="font-semibold mb-3">Parturi care cad:</h4>
            <p className="mb-4">Pentru fiecare platformă „capcană", atașează un <strong>Script</strong> care dezactivează ancora la atingere, apoi cade.</p>

            <h4 className="font-semibold mb-3">Script pentru platformă căzătoare:</h4>
            <CodeExample title="Script pentru platformă căzătoare" language="lua">
{`local part = script.Parent

part.Touched:Connect(function(hit)
    local humanoid = hit.Parent:FindFirstChild("Humanoid")
    if humanoid then
        wait(0.3) -- mică întârziere ca jucătorul să simtă că „alunecă"
        part.Anchored = false -- platforma începe să cadă
    end
end)`}
            </CodeExample>

            <ImageModal 
              src="/assets/images/roblox/RobloxL4.4.png" 
              alt="Configurația platformelor căzătoare în Roblox Studio" 
              caption="Aranjamentul platformelor căzătoare cu scripturi atașate"
            />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-blue-600">2.2 Part-capcană invizibilă</h3>
            
            <h4 className="font-semibold mb-3">Așezare & proprietăți:</h4>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Plasează un Part invizibil (Transparency = 1) chiar sub linia de platforme, la Y-1 stud</li>
              <li>Setează Anchored = true, CanCollide = true</li>
            </ul>

            <h4 className="font-semibold mb-3">Scop:</h4>
            <p>Dacă jucătorul cade de pe orice platformă căzătoare, pășește pe acest Part și „moare".</p>
          </div>
        </>
      )
    },
    {
      id: 'platforme-mobile',
      title: 'Platforme mobile',
      content: (
        <>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-blue-600">3.1 Configurare şi design</h3>
            
            <p className="mb-3"><strong>Dimensiuni:</strong> Size = Vector3.new(6, 1, 6)</p>
            
            <h4 className="font-semibold mb-3">Proprietăţi:</h4>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Anchored = true</strong> (rămân la înălţimea dorită)</li>
              <li><strong>CanCollide = true</strong></li>
              <li><strong>Color = Bright blue</strong> (ca să le recunoşti uşor)</li>
            </ul>

            <h4 className="font-semibold mb-3">Aşezare:</h4>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Aliniaţi-le la aceeaşi înălţime (Y) în linie, distanţate ~8 stud între centre</li>
              <li>Sub ele, la Y-1, puneţi un Part invizibil (Transparency = 1, Anchored = true) care omoară jucătorul dacă cade</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-blue-600">3.2 Script de mișcare</h3>
            
            <p className="mb-4">Fiecare platformă are acest script, care o mişcă înainte-înapoi:</p>

            <CodeExample title="Script pentru platformă mobilă" language="lua">
{`local platform = script.Parent
local startPos = platform.Position
local amplitude = 10 -- cât se mișcă de la stânga la dreapta
local speed = 1 -- cât de repede se mișcă

game:GetService("RunService").Heartbeat:Connect(function(dt)
    local t = tick() * speed
    local offset = math.sin(t) * amplitude
    platform.Position = Vector3.new(
        startPos.X + offset,
        startPos.Y,
        startPos.Z
    )
end)`}
            </CodeExample>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
              <h4 className="font-semibold mb-3">Explicația script-ului:</h4>
              <ul className="space-y-2">
                <li><strong>local platform = script.Parent</strong> - Script-ul este pe platformă, așa că platform înseamnă platforma noastră</li>
                <li><strong>local startPos = platform.Position</strong> - Salvăm poziția inițială (unde stă la început)</li>
              </ul>
            </div>

            <h4 className="font-semibold mb-3">Parametri de mișcare:</h4>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>amplitude = 10 → distanța maximă (în studs) față de poziția inițială</li>
              <li>speed = 1 → cât de repede schimbă poziția</li>
            </ul>

            <p className="mb-4"><strong>RunService.Heartbeat</strong> - E ca un „ceas" care bate de foarte multe ori pe secundă. La fiecare „bătăi" (frame), pornim funcția.</p>

            <p className="mb-4"><strong>tick()</strong> - Ne dă timpul curent în secunde. Înmulțit cu speed, devine mai rapid sau mai lent.</p>

            <p className="mb-4"><strong>math.sin(t) * amplitude</strong> - math.sin(t) variază între -1 și +1, creând mișcarea înainte-înapoi. Înmulțit cu amplitude, obținem „offset-ul" corespunzător.</p>

            <h4 className="font-semibold mb-3">Actualizarea poziției:</h4>
            <CodeExample title="Actualizarea poziției platformei" language="lua">
{`platform.Position = Vector3.new(
    startPos.X + offset, -- mutăm pe X
    startPos.Y, -- înălțimea rămâne la fel
    startPos.Z -- adâncimea rămâne la fel
)`}
            </CodeExample>

            <ImageModal 
              src="/assets/images/roblox/RobloxL4.5.png" 
              alt="Demonstrație platforme mobile în Roblox Studio" 
              caption="Platformele mobile în acțiune cu mișcare ciclică"
            />
          </div>
        </>
      )
    },
    {
      id: 'concluzie',
      title: 'Concluzie și sfaturi finale',
      content: (
        <>
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-2xl mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-400 rounded-full opacity-30 -translate-y-6 translate-x-6"></div>
            <h2 className="text-2xl font-bold mb-4">🎉 Felicitări!</h2>
            <p className="text-lg text-green-50">
              Ai terminat cu succes lecția Obby! Acum știi să construiești un parcurs cu obstacole complet funcțional, cu platforme de sărit, capcane care cad și platforme mobile. Aceste elemente formează baza majorității jocurilor de tipul Obby din Roblox.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-green-600">🔑 Ce ai învățat</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Scripting pentru evenimente</strong> - cum să folosești .Touched pentru a detecta când jucătorul atinge un obiect</li>
              <li><strong>Gestionarea vieții jucătorului</strong> - setarea Health la 0 pentru a-l face să respawneze</li>
              <li><strong>Platforme cu comportament dinamic</strong> - căzătoare și mobile</li>
              <li><strong>Folosirea funcțiilor matematice</strong> - math.sin() pentru mișcare ciclică</li>
              <li><strong>RunService</strong> - pentru actualizări continue ale poziției</li>
              <li><strong>Designul nivelurilor</strong> - cum să creezi provocări echilibrate</li>
            </ul>
          </div>

          <div className="bg-blue-500 text-white p-6 rounded-2xl mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400 rounded-full opacity-30 -translate-y-4 translate-x-4"></div>
            <h3 className="text-xl font-bold mb-4">💡 Sfaturi pentru perfecționare</h3>
            <ul className="space-y-2 text-blue-50">
              <li><strong>Testează frecvent:</strong> După fiecare platformă adăugată, testează să vezi dacă săritul funcționează corect</li>
              <li><strong>Variază dificultatea:</strong> Începe cu distanțe mici între platforme, apoi crește treptat</li>
              <li><strong>Adaugă efecte vizuale:</strong> Folosește ParticleEffects pentru a face capcanele mai vizibile</li>
              <li><strong>Creează teme:</strong> Platformele pot avea texturi diferite (lemn, metal, gheață)</li>
              <li><strong>Simetria nu e obligatorie:</strong> Platformele în zigzag sunt mai interesante</li>
              <li><strong>Checkpoint-uri frecvente:</strong> Nu frustra jucătorul cu distanțe prea mari între punctele de salvare</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-purple-600">🚀 Provocări suplimentare</h3>
            <p className="mb-4">Dacă vrei să-ți testezi cunoștințele, încearcă următoarele:</p>
            
            <div className="space-y-4">
              <StepItem number={1} title="Platforme cu timer">
                <p>Creează platforme care dispar după 3 secunde de la atingere</p>
              </StepItem>

              <StepItem number={2} title="Platforme care se rotesc">
                <p>Folosește CFrame pentru rotație continuă</p>
              </StepItem>

              <StepItem number={3} title="Ziduri mobile">
                <p>Obstacole care se mișcă sus-jos și împing jucătorul</p>
              </StepItem>

              <StepItem number={4} title="Trambuline">
                <p>Platforme care dau jucătorului un boost de săritură</p>
              </StepItem>

              <StepItem number={5} title="Sistem de punctaj">
                <p>Acordă puncte pentru fiecare obstacle trecută</p>
              </StepItem>

              <StepItem number={6} title="Power-ups">
                <p>Obiecte care dau abilități temporare (săritură dublă, viteză)</p>
              </StepItem>
            </div>
          </div>

          <InfoBox title="Atenție la performanță" icon="warning" variant="warning">
            Dacă adaugi multe platforme mobile, jocul poate să devină lent. Folosește mai puține script-uri RunService sau optimizează codul pentru a grupa mișcările.
          </InfoBox>

          <Challenge title="Provocare finală: Obby complet" difficulty="hard">
            <p>Construiește un Obby complet cu toate tipurile de platforme învățate: normale, căzătoare, mobile, plus două dintre provocările suplimentare. Testează-l cu prietenii și ajustează dificultatea pe baza feedback-ului lor!</p>
          </Challenge>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="roblox"
      sessionId="4"
      title="Lecția Obby"
      subtitle="Construirea unui parcurs cu obstacole în Roblox Studio"
      heroColor="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
      previousLesson={{
        title: "Lecția anterioară",
        path: "/robloxlua/session3constuctiiscripturiincepatori"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/robloxlua/session5npccreator"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default RobloxLesson4;