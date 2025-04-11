import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { Image } from '@/components/ui/image';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { Card, CardContent } from '@/components/ui/card';
import { CodeBlock } from '@/components/CodeBlock';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info, Lightbulb, AlertTriangle, CircleCheck, Code, Boxes, Box } from 'lucide-react';

const Session4Geometry = () => {
  // Sidebar navigation items
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'concepte', title: 'Concepte de bază' },
    { id: 'pasul1', title: 'Pasul 1: Alegerea formelor' },
    { id: 'pasul2', title: 'Pasul 2: Aranjarea formelor' },
    { id: 'pasul3', title: 'Pasul 3: Animații de bază' },
    { id: 'pasul4', title: 'Pasul 4: Animații complexe' },
    { id: 'pasul5', title: 'Pasul 5: Interactivitate' },
    { id: 'provocari', title: 'Provocări' },
    { id: 'concluzii', title: 'Concluzii' },
  ];

  // Resources links
  const resources = [
    { title: 'Documentație Alice 3', url: 'https://www.alice.org/resources/how-tos/' },
    { title: 'Galerie de proiecte', url: 'https://www.alice.org/gallery/' },
    { title: 'Tutoriale video', url: 'https://www.youtube.com/c/AliceProject' },
  ];

  // Content sections
  const sections = [
    {
      id: 'introducere',
      title: 'Introducere în "Animații Geometrice"',
      content: (
        <>
          <p className="mb-4">
            În această lecție, vei crea animații fascinante folosind forme geometrice în Alice 3. Vei învăța cum să construiești și să animezi obiecte 3D pentru a crea efecte vizuale captivante. Acest proiect este perfect pentru cei care sunt interesați de arta digitală, designul 3D și matematică interactivă.
          </p>

          <div className="my-6">
            <Image
              src="https://images.unsplash.com/photo-1527576539890-dfa815648363"
              alt="Forme geometrice în spațiu 3D"
              className="w-full h-64 object-cover rounded-xl mb-3"
            />
            <p className="text-center text-sm text-gray-500">
              Exemple de structuri geometrice în spațiu tridimensional
            </p>
          </div>

          <LearningOutcome items={[
            "Cum să utilizezi formele de bază în Alice 3 pentru a crea structuri complexe",
            "Cum să creezi animații coordonate între mai multe obiecte",
            "Cum să utilizezi culori și efecte vizuale pentru a îmbunătăți animațiile",
            "Cum să aplici principii de matematică în crearea modelelor 3D",
            "Cum să creezi interactivitate folosind evenimente și butoane"
          ]} />

          <div className="my-6 bg-pink-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-pink-800 mb-2 flex items-center">
              <Boxes className="mr-2 h-5 w-5 text-pink-600" />
              Ce vei crea
            </h3>
            <p className="text-gray-700">
              Vei crea o expoziție geometrică interactivă în care diverse forme 3D vor executa animații coordonate, formând modele și structuri complexe. Formele vor interacționa între ele și cu utilizatorul, creând o experiență vizuală captivantă și educativă.
            </p>
          </div>
        </>
      )
    },
    {
      id: 'concepte',
      title: 'Concepte de bază pentru animații geometrice',
      content: (
        <>
          <p className="mb-4">
            Înainte de a începe proiectul, să ne familiarizăm cu câteva concepte esențiale pentru crearea animațiilor geometrice în Alice 3:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Forme primitive</h3>
                <p>
                  Alice 3 oferă o serie de forme primitive 3D precum cuburi, sfere, cilindri, conuri și piramide. Acestea sunt blocurile de construcție pentru creațiile tale geometrice.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Transformări</h3>
                <p>
                  Transformările includ deplasarea (translația), rotirea și scalarea obiectelor. Acestea sunt esențiale pentru crearea animațiilor dinamice.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Proprietăți vizuale</h3>
                <p>
                  Obiectele au proprietăți precum culoare, opacitate și textură care pot fi modificate pentru a crea efecte vizuale interesante.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Animații coordonate</h3>
                <p>
                  În Alice 3, putem crea animații sincronizate între mai multe obiecte, folosind blocurile "Do together" și "Do in order".
                </p>
              </CardContent>
            </Card>
          </div>

          <InfoBox title="Sistemul de coordonate în Alice 3" icon="info" variant="secondary">
            <p className="mb-2">
              Alice 3 folosește un sistem de coordonate 3D standard:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Axa X:</strong> se extinde în stânga și în dreapta (mișcare laterală)</li>
              <li><strong>Axa Y:</strong> se extinde în sus și în jos (mișcare verticală)</li>
              <li><strong>Axa Z:</strong> se extinde înainte și înapoi (mișcare în adâncime)</li>
            </ul>
            <p className="mt-2">
              Înțelegerea acestui sistem este esențială pentru poziționarea precisă a obiectelor în scenă.
            </p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'pasul1',
      title: 'Pasul 1: Alegerea și crearea formelor geometrice',
      content: (
        <>
          <p className="mb-4">
            În primul pas, vom crea scena și vom adăuga formele geometrice de bază care vor fi utilizate în animațiile noastre.
          </p>

          <StepItem number={1} title="Creează un proiect nou">
            <p>
              Deschide Alice 3 și selectează "Proiect nou". Pentru acest proiect, alege un fundal simplu, de preferință unul abstract sau o scenă de tip "Space" pentru a evidenția formele geometrice.
            </p>
          </StepItem>

          <StepItem number={2} title="Adaugă forme geometrice de bază">
            <p>
              După ce ai selectat scena, vom adăuga câteva forme geometrice de bază. Din meniul "Add Objects", navighează la categoria "Shapes" și adaugă următoarele:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Un cub (redenumește-l "cub1")</li>
              <li>O sferă (redenumește-o "sfera1")</li>
              <li>Un cilindru (redenumește-l "cilindru1")</li>
              <li>Un con (redenumește-l "con1")</li>
              <li>O piramidă (redenumește-o "piramida1")</li>
            </ul>
            <p className="mt-2">
              Poziționează formele în centrul scenei, distanțate între ele pentru a le vedea clar.
            </p>
          </StepItem>

          <div className="my-6">
            <Image
              src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
              alt="Aranjament de forme geometrice"
              className="w-full mt-3 rounded-lg border"
            />
            <p className="text-center text-sm text-gray-500 mt-2">
              Exemplu de aranjament pentru formele geometrice de bază
            </p>
          </div>

          <StepItem number={3} title="Personalizează formele">
            <p>
              Acum vom personaliza formele prin modificarea proprietăților lor vizuale:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>
                <strong>Cub:</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Schimbă culoarea la roșu</li>
                  <li>Setează dimensiunea la 0.4 x 0.4 x 0.4 metri</li>
                </ul>
              </li>
              <li>
                <strong>Sferă:</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Schimbă culoarea la albastru</li>
                  <li>Setează diametrul la 0.4 metri</li>
                </ul>
              </li>
              <li>
                <strong>Cilindru:</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Schimbă culoarea la verde</li>
                  <li>Setează înălțimea la 0.6 metri și diametrul la 0.3 metri</li>
                </ul>
              </li>
              <li>
                <strong>Con:</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Schimbă culoarea la galben</li>
                  <li>Setează înălțimea la 0.5 metri și diametrul bazei la 0.3 metri</li>
                </ul>
              </li>
              <li>
                <strong>Piramidă:</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Schimbă culoarea la violet</li>
                  <li>Setează dimensiunea bazei la 0.4 x 0.4 metri și înălțimea la 0.5 metri</li>
                </ul>
              </li>
            </ol>
          </StepItem>

          <StepItem number={4} title="Creează forme complexe (opțional)">
            <p>
              Pentru a adăuga mai multă varietate, poți crea forme complexe combinând formele de bază:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Adaugă un nou cub (redenumește-l "bazaMolecul")</li>
              <li>Adaugă mai multe sfere mici în jurul cubului, ca într-o structură moleculară</li>
              <li>Grupează aceste obiecte pentru a le manipula împreună (folosind opțiunea de grupare din Alice 3)</li>
            </ol>
          </StepItem>

          <Alert className="my-6 border-green-200 bg-green-50">
            <CircleCheck className="h-5 w-5 text-green-500" />
            <AlertTitle className="text-green-800">Verificare</AlertTitle>
            <AlertDescription className="text-green-700">
              În acest moment, ar trebui să ai:
              <ul className="list-disc list-inside mt-2">
                <li>O scenă cu fundal adecvat pentru formele geometrice</li>
                <li>Cel puțin 5 forme geometrice de bază, personalizate cu culori și dimensiuni diferite</li>
                <li>Formele ar trebui să fie vizibile și distribuite uniform în scenă</li>
              </ul>
            </AlertDescription>
          </Alert>
        </>
      )
    },
    {
      id: 'pasul2',
      title: 'Pasul 2: Aranjarea formelor în modele',
      content: (
        <>
          <p className="mb-4">
            În acest pas, vom aranja formele geometrice în modele interesante, care vor servi ca punct de plecare pentru animațiile noastre.
          </p>

          <StepItem number={1} title="Creează o formațiune circulară">
            <p>
              Vom începe prin a aranja toate formele într-un cerc:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Poziționează fiecare formă la aceeași înălțime (aceeași valoare Y)</li>
              <li>
                Calculează pozițiile X și Z pentru a forma un cerc:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>X = raza cercului * cos(unghi)</li>
                  <li>Z = raza cercului * sin(unghi)</li>
                  <li>Unde unghiul variază pentru fiecare formă (ex: 0°, 72°, 144°, 216°, 288° pentru 5 obiecte)</li>
                </ul>
              </li>
              <li>Asigură-te că toate formele sunt orientate spre centrul cercului</li>
            </ol>
          </StepItem>

          <div className="my-6">
            <CodeBlock language="plaintext">
{`// Exemplu de poziționare în cerc pentru 5 obiecte
// Raza cercului: 2 metri
// Înălțimea uniformă: 0 metri (nivelul "solului")

cub1.setPosition(2.0 * Math.cos(0), 0, 2.0 * Math.sin(0));         // 0 grade
sfera1.setPosition(2.0 * Math.cos(72), 0, 2.0 * Math.sin(72));     // 72 grade
cilindru1.setPosition(2.0 * Math.cos(144), 0, 2.0 * Math.sin(144)); // 144 grade
con1.setPosition(2.0 * Math.cos(216), 0, 2.0 * Math.sin(216));     // 216 grade
piramida1.setPosition(2.0 * Math.cos(288), 0, 2.0 * Math.sin(288)); // 288 grade`}
            </CodeBlock>
          </div>

          <StepItem number={2} title="Creează o formațiune verticală">
            <p>
              Acum vom crea o a doua formațiune, de data aceasta pe verticală:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Creează copii ale formelor originale (clonează-le)</li>
              <li>Stivuiește formele una peste alta, la intervale regulate</li>
              <li>Poți roti fiecare formă cu un unghi diferit pentru un efect vizual mai interesant</li>
            </ol>
          </StepItem>

          <StepItem number={3} title="Creează o structură de tip piramidă">
            <p>
              Pentru a treia formațiune, vom aranja câteva cuburi într-o structură de tip piramidă:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Creează 9 cuburi pentru baza piramidei (3x3)</li>
              <li>Adaugă un alt nivel cu 4 cuburi (2x2) deasupra</li>
              <li>Finalizează cu un singur cub în vârf</li>
            </ol>
            <p className="mt-2">
              Această structură va fi utilizată mai târziu pentru o animație de construcție/deconstrucție.
            </p>
          </StepItem>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-semibold text-pink-800 mb-2">Formațiunea circulară</h4>
              <p className="text-gray-700 text-sm">
                Formele sunt aranjate într-un cerc, toate orientate spre centru, creând o structură simetrică care va roti și va pulsa în animațiile noastre.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Formațiunea verticală</h4>
              <p className="text-gray-700 text-sm">
                Formele sunt stivuite pe verticală, creând un turn care se va putea extinde, contracta și roti în animațiile noastre.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Structura piramidală</h4>
              <p className="text-gray-700 text-sm">
                Cuburile formează o piramidă care se va putea construi și deconstrui, demonstrând concepte de structură și gravitație vizuală.
              </p>
            </div>
          </div>

          <InfoBox title="Sfat pentru organizare" icon="star" variant="primary">
            <p>
              Pentru a gestiona mai ușor formele multiple, folosește structura ierarhică a Alice 3. Grupează obiectele legate în clase sau structuri, astfel încât să le poți manipula împreună când este necesar.
            </p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'pasul3',
      title: 'Pasul 3: Crearea animațiilor de bază',
      content: (
        <>
          <p className="mb-4">
            În acest pas, vom crea animații de bază pentru formele noastre geometrice. Vom începe cu mișcări simple și vom progresa spre animații mai complexe.
          </p>

          <StepItem number={1} title="Animă formațiunea circulară">
            <p>
              Vom crea o animație în care formele din cerc se rotesc împreună:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Creează o nouă metodă numită "rotesteCercul" în clasa Scene</li>
              <li>
                În această metodă, adaugă un bloc "Do together" care conține:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Pentru fiecare formă din cerc, adaugă o instrucțiune de rotire (turnAroundScene)</li>
                  <li>Setează durata rotației la 5 secunde pentru o rotație completă</li>
                </ul>
              </li>
              <li>Adaugă un bloc "Loop" în jurul acestui cod pentru a face rotația continuă</li>
            </ol>
          </StepItem>

          <div className="my-6">
            <CodeBlock language="plaintext">
{`// Exemplu de metodă pentru rotirea formelor în cerc
public void rotesteCercul() {
    // Repetă la infinit
    while (true) {
        // Execută simultan pentru toate formele
        doTogether( 
            () -> cub1.turnAroundScene(TurnDirection.RIGHT, 1.0),
            () -> sfera1.turnAroundScene(TurnDirection.RIGHT, 1.0),
            () -> cilindru1.turnAroundScene(TurnDirection.RIGHT, 1.0),
            () -> con1.turnAroundScene(TurnDirection.RIGHT, 1.0),
            () -> piramida1.turnAroundScene(TurnDirection.RIGHT, 1.0)
        );
    }
}`}
            </CodeBlock>
          </div>

          <StepItem number={2} title="Animă formațiunea verticală">
            <p>
              Pentru turnul vertical, vom crea o animație de tip "piston":
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Creează o metodă numită "animaTurnul" în clasa Scene</li>
              <li>
                În această metodă, adaugă blocuri "Do in order" pentru a crea un efect de undă:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Prima formă se mișcă în sus</li>
                  <li>După o mică întârziere, a doua formă se mișcă în sus</li>
                  <li>Continuă acest pattern pentru toate formele</li>
                  <li>Apoi inversează mișcarea pentru a aduce formele înapoi</li>
                </ul>
              </li>
              <li>Adaugă un bloc "Loop" pentru a repeta această animație</li>
            </ol>
          </StepItem>

          <StepItem number={3} title="Animă construcția piramidei">
            <p>
              Pentru structura piramidală, vom crea o animație de construcție și deconstrucție:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Creează o metodă numită "construiestePiramida" în clasa Scene</li>
              <li>
                La început, toate cuburile din piramidă sunt ascunse sau poziționate departe de scenă
              </li>
              <li>
                Adaugă blocuri "Do in order" pentru a aduce fiecare cub în poziția sa din piramidă:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Începe cu cuburile din bază</li>
                  <li>Continuă cu nivelul median</li>
                  <li>Finalizează cu cubul din vârf</li>
                </ul>
              </li>
              <li>
                Adaugă o secvență similară pentru a deconstrui piramida, eliminând cuburile în ordine inversă
              </li>
            </ol>
          </StepItem>

          <Alert className="my-6 border-pink-200 bg-pink-50">
            <Lightbulb className="h-5 w-5 text-pink-500" />
            <AlertTitle className="text-pink-800">Sfat de animație</AlertTitle>
            <AlertDescription className="text-pink-700">
              Pentru animații mai fluide și natural, folosește funcția "Ease In" și "Ease Out" disponibilă în Alice 3. Aceasta face ca mișcările să accelereze și să decelereze natural, mai degrabă decât să înceapă și să se oprească brusc.
            </AlertDescription>
          </Alert>
        </>
      )
    },
    {
      id: 'pasul4',
      title: 'Pasul 4: Crearea animațiilor complexe și coordonate',
      content: (
        <>
          <p className="mb-4">
            Acum că avem animații de bază pentru fiecare formațiune, vom crea animații mai complexe și vom coordona mișcările între diferitele grupuri de forme.
          </p>

          <StepItem number={1} title="Creează transformări de formațiuni">
            <p>
              Vom implementa o animație în care formațiunea circulară se transformă în formațiunea verticală:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Creează o metodă numită "transformaCercInTurn"</li>
              <li>
                Folosește un bloc "Do together" pentru a mișca simultan toate formele din cerc:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Fiecare formă se mișcă din poziția sa în cerc către poziția sa corespunzătoare în turn</li>
                  <li>Adaugă și rotații pentru a orienta formele corect</li>
                </ul>
              </li>
              <li>
                Adaugă și metoda inversă, "transformaTurnInCerc"
              </li>
            </ol>
          </StepItem>

          <StepItem number={2} title="Creează o secvență de dans geometric">
            <p>
              Acum vom crea o animație coordonată între toate formele, similar unui dans:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Creează o metodă numită "dansGeometric"</li>
              <li>
                Programează o secvență de mișcări coordonate:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Formele din cerc se rotesc</li>
                  <li>Apoi se transformă în turn</li>
                  <li>Turnul execută animația de tip "piston"</li>
                  <li>Formele revin la configurația de cerc</li>
                  <li>În paralel, piramida se construiește și se deconstruiește</li>
                </ul>
              </li>
              <li>
                Adaugă efecte de culoare și opacitate pentru a îmbunătăți aspectul vizual
              </li>
            </ol>
          </StepItem>

          <div className="my-6">
            <Image
              src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
              alt="Animație geometrică complexă"
              className="w-full mt-3 rounded-lg border"
            />
            <p className="text-center text-sm text-gray-500 mt-2">
              Exemplu de animație geometrică coordonată cu multiple forme
            </p>
          </div>

          <StepItem number={3} title="Adaugă efecte de particule">
            <p>
              Pentru a îmbunătăți aspectul vizual al animațiilor, vom adăuga efecte de particule:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Creează mai multe sfere foarte mici (puncte)</li>
              <li>
                Programează-le să se miște pe traiectorii aleatorii în jurul formelor principale
              </li>
              <li>
                Adaugă efecte de strălucire și puls pentru aceste particule
              </li>
              <li>
                Sincronizează mișcarea particulelor cu animațiile principale
              </li>
            </ol>
          </StepItem>

          <div className="my-6">
            <CodeBlock language="plaintext">
{`// Exemplu de metodă pentru secvența de dans geometric
public void dansGeometric() {
    // Partea 1: Rotirea cercului
    rotesteCercul();
    Thread.sleep(5000);  // Durează 5 secunde
    
    // Partea 2: Transformarea cercului în turn
    transformaCercInTurn();
    Thread.sleep(2000);  // Durează 2 secunde
    
    // Partea 3: Animația turnului
    animaTurnul();
    Thread.sleep(5000);  // Durează 5 secunde
    
    // Partea 4: Transformarea turnului înapoi în cerc
    transformaTurnInCerc();
    Thread.sleep(2000);  // Durează 2 secunde
    
    // În paralel cu acestea, piramida se construiește și se deconstruiește
    doInBackground(() -> {
        construiestePiramida();
        Thread.sleep(3000);
        deconstruiestePiramida();
    });
}`}
            </CodeBlock>
          </div>

          <InfoBox title="Sincronizarea animațiilor complexe" icon="info" variant="secondary">
            <p className="mb-2">
              Pentru a sincroniza perfect animațiile complexe în Alice 3:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Folosește blocurile "Do together" pentru acțiuni simultane</li>
              <li>Folosește blocurile "Do in order" pentru secvențe</li>
              <li>Utilizează "Wait" pentru a sincroniza acțiunile</li>
              <li>Folosește "Do in background" pentru a rula anumite animații independent</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'pasul5',
      title: 'Pasul 5: Adăugarea interactivității',
      content: (
        <>
          <p className="mb-4">
            În ultima etapă, vom adăuga interactivitate proiectului nostru, permițând utilizatorului să controleze animațiile prin taste și click-uri.
          </p>

          <StepItem number={1} title="Adaugă controale cu tastatura">
            <p>
              Vom crea comenzi de tastatură pentru a controla animațiile:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>
                Adaugă un listener pentru tasta "C" care va porni/opri animația cercului:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Creează o proprietate booleană "cercAnimat" pentru a ține evidența stării</li>
                  <li>Când tasta "C" este apăsată, inversează valoarea proprietății și pornește/oprește animația</li>
                </ul>
              </li>
              <li>
                Similar, adaugă listeneri pentru tastele:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>"T" - pentru a controla animația turnului</li>
                  <li>"P" - pentru a controla construcția/deconstrucția piramidei</li>
                  <li>"D" - pentru a porni "dansul geometric" complet</li>
                </ul>
              </li>
            </ol>
          </StepItem>

          <StepItem number={2} title="Adaugă controale cu mouse-ul">
            <p>
              Vom permite utilizatorului să interacționeze direct cu formele:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>
                Adaugă un listener pentru click-uri pe cub:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Când utilizatorul face click pe cub, acesta își schimbă culoarea</li>
                  <li>La click-uri repetate, cubul trece prin diferite culori</li>
                </ul>
              </li>
              <li>
                Adaugă un listener pentru click-uri pe sferă:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Când utilizatorul face click pe sferă, aceasta crește și apoi revine la dimensiunea normală</li>
                </ul>
              </li>
              <li>
                Adaugă efecte similare pentru celelalte forme
              </li>
            </ol>
          </StepItem>

          <div className="my-6">
            <CodeBlock language="plaintext">
{`// Exemplu de listener pentru tasta "C"
addKeyPressListener(
    'c',
    new KeyPressListener() {
        public void keyPressed() {
            if (cercAnimat) {
                // Oprește animația cercului
                cercAnimat = false;
                // Cod pentru a opri animația...
            } else {
                // Pornește animația cercului
                cercAnimat = true;
                // Cod pentru a porni animația...
                animatieCerc();
            }
        }
    }
);

// Exemplu de listener pentru click pe cub
cub1.addObjectClickListener(
    new ObjectClickListener() {
        public void objectClicked(MouseClickEvent event) {
            // Schimbă culoarea cubului
            Color[] culori = {Color.RED, Color.BLUE, Color.GREEN, Color.YELLOW};
            int indexCuloareCurenta = obtineIndexCuloare(cub1.getColor());
            int indexCuloareNoua = (indexCuloareCurenta + 1) % culori.length;
            cub1.setColor(culori[indexCuloareNoua]);
        }
    }
);`}
            </CodeBlock>
          </div>

          <StepItem number={3} title="Adaugă instrucțiuni pentru utilizator">
            <p>
              Este important să comunici utilizatorului cum să interacționeze cu proiectul tău:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Creează un text 3D sau un panou cu instrucțiuni</li>
              <li>
                Include informații despre:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Tastele disponibile și funcțiile lor</li>
                  <li>Interacțiunile posibile cu mouse-ul</li>
                  <li>O scurtă explicație a proiectului</li>
                </ul>
              </li>
              <li>
                Poziționează acest text/panou într-un loc vizibil, dar care nu interferează cu animațiile
              </li>
            </ol>
          </StepItem>

          <Alert className="my-6 border-green-200 bg-green-50">
            <CircleCheck className="h-5 w-5 text-green-500" />
            <AlertTitle className="text-green-800">Verificare finală</AlertTitle>
            <AlertDescription className="text-green-700">
              La acest punct, ar trebui să ai:
              <ul className="list-disc list-inside mt-2">
                <li>Trei formațiuni geometrice (cerc, turn, piramidă)</li>
                <li>Animații de bază pentru fiecare formațiune</li>
                <li>O animație complexă coordonată ("dansul geometric")</li>
                <li>Controale interactive cu tastatura și mouse-ul</li>
                <li>Instrucțiuni pentru utilizator</li>
              </ul>
              Testează toate funcționalitățile înainte de a finaliza proiectul.
            </AlertDescription>
          </Alert>
        </>
      )
    },
    {
      id: 'provocari',
      title: 'Provocări pentru extinderea proiectului',
      content: (
        <>
          <p className="mb-4">
            Acum că ai creat un proiect de animații geometrice de bază, iată câteva provocări pentru a-l extinde și a-l face mai complex:
          </p>

          <div className="space-y-4 mb-6">
            <Challenge title="Adaugă efecte de sunet" difficulty="easy">
              <p>
                Integrează efecte sonore care se sincronizează cu animațiile tale. De exemplu, un sunet diferit pentru fiecare formă când este activată, sau o melodie de fundal care își schimbă ritmul în funcție de animația curentă.
              </p>
            </Challenge>
            
            <Challenge title="Creează o transformare morfologică" difficulty="medium">
              <p>
                Programează o animație în care o formă se transformă treptat în alta - de exemplu, un cub care se transformă într-o sferă. Aceasta este o provocare mai avansată care necesită manipularea verticilor obiectelor.
              </p>
            </Challenge>
            
            <Challenge title="Implementează un sistem de fizică" difficulty="hard">
              <p>
                Adaugă simulări fizice simple, cum ar fi gravitația și coliziunile între forme. Poți crea o scenă în care formele cad și se lovesc unele de altele, respectând legile fizicii.
              </p>
            </Challenge>
            
            <Challenge title="Creează fractal geometric" difficulty="medium">
              <p>
                Construiește un fractal simplu, cum ar fi triunghiul lui Sierpinski sau cubul Menger, folosind recursivitatea și formele geometrice de bază. Animează apoi procesul de construcție a fractalului.
              </p>
            </Challenge>
          </div>

          <div className="bg-pink-50 p-5 rounded-lg border border-pink-200 my-6">
            <h3 className="text-lg font-semibold text-pink-800 mb-3">Idei pentru teme matematice</h3>
            <p className="mb-3 text-pink-700">
              Proiectul tău de animații geometrice poate fi extins pentru a ilustra concepte matematice importante:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="bg-pink-100 text-pink-800 p-1 rounded mr-2 mt-1">📊</span>
                <span>Ilustrează transformări geometrice precum translație, rotație, reflexie și dilatare</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pink-100 text-pink-800 p-1 rounded mr-2 mt-1">📐</span>
                <span>Creează modele pentru a demonstra simetria și patternurile geometrice</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pink-100 text-pink-800 p-1 rounded mr-2 mt-1">🧮</span>
                <span>Vizualizează concepte de trigonometrie prin animarea mișcărilor bazate pe funcții sinusoidale</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pink-100 text-pink-800 p-1 rounded mr-2 mt-1">🔍</span>
                <span>Explorează poliedre regulate și proprietățile lor în spațiul 3D</span>
              </li>
            </ul>
          </div>
        </>
      )
    },
    {
      id: 'concluzii',
      title: 'Concluzii și resurse suplimentare',
      content: (
        <>
          <p className="mb-4">
            Felicitări! Ai creat un proiect complex de animații geometrice în Alice 3. Acest proiect ți-a permis să explorezi concepte de programare și geometrie într-un mod vizual și interactiv.
          </p>

          <div className="bg-pink-50 border-l-4 border-pink-500 p-4 my-6">
            <h3 className="text-lg font-semibold text-pink-800 mb-2">Ce ai învățat</h3>
            <ul className="list-disc list-inside space-y-1 text-pink-800">
              <li>Cum să creezi și să manipulezi forme geometrice 3D</li>
              <li>Cum să programezi animații coordonate între multiple obiecte</li>
              <li>Cum să implementezi interactivitate prin intermediul tastaturii și mouse-ului</li>
              <li>Cum să combini forme simple pentru a crea structuri complexe</li>
              <li>Principii de design vizual pentru a crea animații atrăgătoare</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">Resurse suplimentare</h3>
          <p className="mb-4">
            Dacă dorești să aprofundezi subiectul animațiilor geometrice și modelării 3D, iată câteva resurse utile:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold">Documentația Alice 3</h4>
                <p className="mt-2 text-sm">
                  Consultă documentația oficială pentru informații detaliate despre toate funcțiile disponibile în Alice 3.
                </p>
                <a href="https://www.alice.org/resources/how-tos/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline text-sm block mt-2">
                  www.alice.org/resources
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold">Tutoriale video</h4>
                <p className="mt-2 text-sm">
                  Explorează canalul YouTube al proiectului Alice pentru tutoriale video despre caracteristici avansate.
                </p>
                <a href="https://www.youtube.com/c/AliceProject" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline text-sm block mt-2">
                  YouTube: Alice Project
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold">Concepte de matematică 3D</h4>
                <p className="mt-2 text-sm">
                  Aprofundează înțelegerea matematicii din spatele graficilor 3D prin resurse educaționale online.
                </p>
                <a href="https://www.khanacademy.org/math/geometry" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline text-sm block mt-2">
                  Khan Academy: Geometry
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold">Comunitatea Alice</h4>
                <p className="mt-2 text-sm">
                  Conectează-te cu alți utilizatori Alice, împărtășește proiectele tale și găsește inspirație.
                </p>
                <a href="https://www.alice.org/community/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline text-sm block mt-2">
                  Comunitatea Alice
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 mb-4">
            <p className="italic text-gray-600">
              "Matematica este limba cu care Dumnezeu a scris universul." — Galileo Galilei
            </p>
          </div>

          <Alert className="my-6 border-blue-200 bg-blue-50">
            <Box className="h-5 w-5 text-blue-500" />
            <AlertTitle className="text-blue-800">Următorii pași</AlertTitle>
            <AlertDescription className="text-blue-700">
              După ce ai stăpânit animațiile geometrice în Alice 3, poți explora alte medii de programare grafică precum Processing, Three.js sau chiar motoare de jocuri precum Unity sau Unreal Engine, care oferă capacități mai avansate pentru grafica 3D și animații.
            </AlertDescription>
          </Alert>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="alice3"
      sessionId="4"
      title="Animații Geometrice"
      subtitle="Creează animații fascinante cu forme 3D, efecte vizuale și interactivitate"
      heroColor="bg-gradient-to-r from-pink-500 to-pink-400"
      previousLesson={{
        title: "Animalul Virtual",
        path: "/alice3/session3virtualpet"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "#"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session4Geometry;
