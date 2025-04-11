import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { Image } from '@/components/ui/image';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { Card, CardContent } from '@/components/ui/card';
import { CodeBlock } from '@/components/CodeBlock';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info, Lightbulb, AlertTriangle, Heart, CircleCheck, Code } from 'lucide-react';

const Session3VirtualPet = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'instalare', title: 'Instalare Alice 3' },
    { id: 'concepte', title: 'Concepte de bază' },
    { id: 'pasul1', title: 'Pasul 1: Scenă și animal' },
    { id: 'pasul2', title: 'Pasul 2: Mișcarea animalului' },
    { id: 'pasul3', title: 'Pasul 3: Stări și interacțiuni' },
    { id: 'pasul4', title: 'Pasul 4: Comenzi vocale' },
    { id: 'provocari', title: 'Provocări' },
    { id: 'concluzii', title: 'Concluzii' },
  ];

  const resources = [
    { title: 'Ghidul Alice 3', url: 'https://www.alice.org/resources/how-tos/' },
    { title: 'Biblioteca de modele', url: 'https://www.alice.org/gallery/' },
    { title: 'Forum Alice', url: 'https://www.alice.org/community/' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere în proiectul "Animal Virtual"',
      content: (
        <>
          <p className="mb-4">
            În această lecție vei crea un animal virtual interactiv în Alice 3. Animalul tău va putea să se miște, să răspundă la comenzi și să își exprime diferite stări, similar cu un animal de companie digital. Este un proiect perfect pentru începători, care te va învăța cum să creezi interacțiuni în lumea 3D.
          </p>

          <div className="my-6">
            <Image
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
              alt="Animal virtual în Alice 3"
              className="w-full h-64 object-cover rounded-xl mb-3"
            />
            <p className="text-center text-sm text-gray-500">
              Exemplu de scenă cu animale în Alice 3
            </p>
          </div>

          <LearningOutcome items={[
            "Cum să creezi și să poziționezi obiecte 3D în Alice 3",
            "Cum să programezi mișcări simple ale unui personaj",
            "Cum să creezi interacțiuni bazate pe evenimentele utilizatorului",
            "Cum să gestionezi stările unui personaj virtual",
            "Cum să implementezi comenzi vocale simple"
          ]} />

          <div className="my-6 bg-pink-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-pink-800 mb-2 flex items-center">
              <Info className="mr-2 h-5 w-5 text-pink-600" />
              Ce vei crea
            </h3>
            <p className="text-gray-700">
              Vei crea un animal virtual într-un mediu natural care poate executa comenzi precum "Stai", "Vino", "Rostogolește-te" și va reacționa când utilizatorul interacționează cu el. Animalul va avea stări diferite precum fericit, somnoros sau jucăuș, și își va schimba comportamentul în funcție de aceste stări.
            </p>
          </div>
        </>
      )
    },
    {
      id: 'instalare',
      title: 'Instalarea și configurarea Alice 3',
      content: (
        <>
          <p className="mb-4">
            Înainte de a începe proiectul, trebuie să te asiguri că ai instalat Alice 3 pe computerul tău. Alice 3 este un mediu de programare educațional gratuit, disponibil pentru Windows, Mac și Linux.
          </p>

          <StepItem number={1} title="Descarcă Alice 3">
            <p>
              Accesează site-ul oficial <a href="https://www.alice.org/get-alice/alice-3/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">alice.org</a> și descarcă versiunea corespunzătoare sistemului tău de operare.
            </p>
          </StepItem>

          <StepItem number={2} title="Instalează Alice 3">
            <p>
              Urmează instrucțiunile de instalare pentru sistemul tău de operare. Alice 3 poate necesita Java, deci este posibil să fie nevoie să instalezi și Java Runtime Environment.
            </p>
          </StepItem>

          <StepItem number={3} title="Lansează Alice 3">
            <p>
              După instalare, deschide aplicația Alice 3. Vei vedea un ecran de start cu opțiuni pentru a crea un proiect nou sau a deschide tutorialele.
            </p>
            <Image
              src="https://www.alice.org/wp-content/uploads/2017/01/Alice3-IDE-1024x635.png"
              alt="Interfața Alice 3"
              className="w-full mt-3 rounded-lg border"
            />
          </StepItem>

          <Alert className="my-6 border-pink-200 bg-pink-50">
            <AlertTriangle className="h-5 w-5 text-pink-500" />
            <AlertTitle className="text-pink-800">Notă importantă</AlertTitle>
            <AlertDescription className="text-pink-700">
              Alice 3 necesită un computer cu capacități grafice 3D rezonabile. Asigură-te că ai cel puțin 4GB RAM și o placă grafică compatibilă. Dacă întâmpini probleme, încearcă să reduci setările grafice din meniul de preferințe al Alice.
            </AlertDescription>
          </Alert>
        </>
      )
    },
    {
      id: 'concepte',
      title: 'Concepte de bază în Alice 3',
      content: (
        <>
          <p className="mb-4">
            Înainte de a începe crearea animalului virtual, să ne familiarizăm cu câteva concepte de bază din Alice 3:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Scene</h3>
                <p>
                  Scene sunt mediile 3D în care personajele și obiectele tale există. Alice 3 oferă o varietate de scene predefinite, de la păduri și plaje la spații intergalactice.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Obiecte</h3>
                <p>
                  Obiectele sunt elementele 3D care populează scena ta - de exemplu, personaje, mobilier, plante. Fiecare obiect are proprietăți și poate executa metode.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Metode</h3>
                <p>
                  Metodele sunt acțiunile pe care obiectele le pot executa, cum ar fi "move", "turn", sau "say". Poți crea metode personalizate pentru comportamente complexe.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Evenimente</h3>
                <p>
                  Evenimentele sunt acțiuni ale utilizatorului (cum ar fi click-urile de mouse sau apăsările de taste) care pot declanșa metode în Alice 3.
                </p>
              </CardContent>
            </Card>
          </div>

          <InfoBox title="Interfața Alice 3" icon="info" variant="secondary">
            <p className="mb-2">
              Interfața Alice 3 are trei zone principale:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Zona de editare:</strong> aici construiești scena și programezi comportamentele</li>
              <li><strong>Zona de metode:</strong> aici vezi și creezi metodele pentru obiecte</li>
              <li><strong>Zona de execuție:</strong> aici rulezi și testezi proiectul tău</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'pasul1',
      title: 'Pasul 1: Crearea scenei și a animalului virtual',
      content: (
        <>
          <p className="mb-4">
            În primul pas, vom crea scena de bază și vom adăuga animalul virtual. Vei învăța cum să selectezi un mediu potrivit și să poziționezi un animal în acesta.
          </p>

          <StepItem number={1} title="Creează un proiect nou">
            <p>
              Deschide Alice 3 și selectează "Proiect nou". Vei vedea o galerie de scene disponibile.
            </p>
          </StepItem>

          <StepItem number={2} title="Selectează o scenă de natură">
            <p>
              Pentru animalul nostru virtual, o scenă de pădure sau pajiște este ideală. Caută în categoria "Nature" și alege o scenă care îți place.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c"
              alt="Selectarea scenei în Alice 3"
              className="w-full mt-3 rounded-lg border"
            />
          </StepItem>

          <StepItem number={3} title="Adaugă animalul virtual">
            <p>
              După ce scena se încarcă, apasă pe butonul "Add Objects" din partea de sus a interfeței. În galeria de obiecte, navighează la categoria "Animals" și alege animalul pe care dorești să-l folosești (de exemplu, un iepure, o pisică sau un cățel).
            </p>
            <p className="mt-2">
              Click pe animal pentru a-l selecta, apoi click în scenă pentru a-l plasa. Poți ajusta poziția folosind săgețile care apar în jurul animalului.
            </p>
          </StepItem>

          <StepItem number={4} title="Poziționează animalul">
            <p>
              Este important ca animalul să fie poziționat corect pe suprafața scenei. Pentru aceasta:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Selectează animalul în scenă</li>
              <li>Folosește controalele de poziție (săgețile verzi) pentru a-l muta în locul dorit</li>
              <li>Folosește controalele de rotație (cercurile roșii) pentru a-l orienta corect</li>
              <li>Asigură-te că animalul "stă" pe pământ, nu plutește deasupra sau nu este parțial îngropat</li>
            </ol>
          </StepItem>

          <div className="my-6">
            <CodeBlock language="plaintext">
{`// Exemplu de cod Alice 3 generat pentru poziționarea animalului
this.scene.rabbit.setPositionRelativeToSceneMethod(0.0, 0.0, 0.0);
this.scene.rabbit.turn(TurnDirection.LEFT, 0.25);`}
            </CodeBlock>
            <p className="text-sm text-gray-500 mt-2">
              Notă: Alice 3 generează cod Java în fundal, dar tu vei programa vizual, folosind blocuri.
            </p>
          </div>

          <Alert className="my-6 border-green-200 bg-green-50">
            <CircleCheck className="h-5 w-5 text-green-500" />
            <AlertTitle className="text-green-800">Verificare</AlertTitle>
            <AlertDescription className="text-green-700">
              În acest moment, ar trebui să ai:
              <ul className="list-disc list-inside mt-2">
                <li>O scenă de natură încărcată</li>
                <li>Un animal adăugat în scenă</li>
                <li>Animalul poziționat corect pe suprafața scenei</li>
              </ul>
            </AlertDescription>
          </Alert>
        </>
      )
    },
    {
      id: 'pasul2',
      title: 'Pasul 2: Programarea mișcării animalului',
      content: (
        <>
          <p className="mb-4">
            Acum că avem animalul în scenă, vom programa mișcările sale de bază. Vom crea metode pentru a face animalul să meargă, să se rotească și să sară.
          </p>

          <StepItem number={1} title="Creează metoda 'merge'">
            <p>
              În zona de editare a codului (de obicei în partea dreaptă a ecranului), găsește animalul tău în lista de obiecte și fă click dreapta pe el. Selectează "Create new method" și numește-o "merge".
            </p>
            <p className="mt-2">
              În editorul de metode care se deschide, adaugă un bloc "Do in order" (pentru a executa comenzile în ordine), apoi adaugă următoarele acțiuni:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Move forward (1 meter)</li>
              <li>Wait (0.5 seconds)</li>
              <li>Move forward (1 meter)</li>
            </ol>
          </StepItem>

          <StepItem number={2} title="Creează metoda 'roteste'">
            <p>
              Similar, creează o nouă metodă numită "roteste" care va face animalul să se rotească la stânga sau la dreapta.
            </p>
            <p className="mt-2">
              Adaugă un bloc "Do in order" și apoi:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Turn left (0.25 rotations)</li>
              <li>Wait (0.5 seconds)</li>
              <li>Turn right (0.25 rotations)</li>
            </ol>
          </StepItem>

          <StepItem number={3} title="Creează metoda 'sare'">
            <p>
              Creează o a treia metodă numită "sare" pentru a adăuga o mișcare mai dinamică animalului tău.
            </p>
            <p className="mt-2">
              Adaugă un bloc "Do together" (pentru a executa comenzile simultan) și apoi:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Move up (0.5 meters)</li>
              <li>Move forward (0.3 meters)</li>
            </ol>
            <p className="mt-2">
              Apoi adaugă un bloc "Wait" (0.3 seconds) urmat de un alt bloc "Do together" cu:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Move down (0.5 meters)</li>
              <li>Move forward (0.2 meters)</li>
            </ol>
          </StepItem>

          <div className="my-6">
            <CodeBlock language="plaintext">
{`// Exemplu de metoda 'sare' în Alice 3
this.scene.rabbit.sare() {
    // Do together
    this.scene.rabbit.moveUp(0.5);
    this.scene.rabbit.moveForward(0.3);
    
    // Wait
    Thread.sleep(300);
    
    // Do together
    this.scene.rabbit.moveDown(0.5);
    this.scene.rabbit.moveForward(0.2);
}`}
            </CodeBlock>
          </div>

          <StepItem number={4} title="Testează mișcările">
            <p>
              Acum să testăm mișcările create. În zona My First Method (metoda principală), adaugă apeluri către metodele create:
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>this.rabbit.merge()</li>
              <li>this.rabbit.roteste()</li>
              <li>this.rabbit.sare()</li>
            </ol>
            <p className="mt-2">
              Apasă butonul Run pentru a vedea animalul executând mișcările programate.
            </p>
          </StepItem>

          <InfoBox title="Sfat util" icon="star" variant="primary">
            <p>
              Poți combina mișcările de bază pentru a crea comportamente mai complexe. De exemplu, poți crea o metodă "dance" care să combine rotirea și săritura într-o secvență distractivă.
            </p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'pasul3',
      title: 'Pasul 3: Adăugarea stărilor și interacțiunilor',
      content: (
        <>
          <p className="mb-4">
            În această etapă, vom adăuga stări animalului nostru virtual (fericit, somnoros, jucăuș) și vom crea interacțiuni bazate pe click-uri.
          </p>

          <StepItem number={1} title="Definește variabile pentru stări">
            <p>
              În Alice 3, putem folosi variabile pentru a ține evidența stării curente a animalului. Fă click dreapta pe animalul tău și selectează "Create new property". Creează o proprietate numită "stare" de tip "String" cu valoarea inițială "normal".
            </p>
          </StepItem>

          <StepItem number={2} title="Creează metode pentru fiecare stare">
            <p>
              Acum vom crea metode specifice pentru fiecare stare:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold">Metoda "fericit"</h4>
                  <p className="mt-2 text-sm">
                    - Rotește animalul de 2 ori<br />
                    - Fă-l să sară<br />
                    - Adaugă un text deasupra "Sunt fericit!"
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold">Metoda "somnoros"</h4>
                  <p className="mt-2 text-sm">
                    - Aplică efect de înclinare<br />
                    - Fă-l să se miște mai lent<br />
                    - Adaugă un text "Zzzzz..."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold">Metoda "jucăuș"</h4>
                  <p className="mt-2 text-sm">
                    - Fă-l să sară de mai multe ori<br />
                    - Rotește-l rapid<br />
                    - Adaugă un text "Hai să ne jucăm!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </StepItem>

          <StepItem number={3} title="Adaugă interacțiuni bazate pe click">
            <p>
              Pentru a face animalul interactiv, vom adăuga evenimente de click. În Alice 3, acestea sunt denumite "scene activation listeners".
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>În meniul de sus, selectează "Edit" apoi "Scene activation listeners"</li>
              <li>Adaugă un nou listener pentru "When scene is clicked on rabbit"</li>
              <li>
                În blocul de cod, adaugă o structură condițională (if/else):
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>if (rabbit.stare == "normal") → setează starea la "fericit" și apelează metoda fericit()</li>
                  <li>else if (rabbit.stare == "fericit") → setează starea la "jucăuș" și apelează metoda jucăuș()</li>
                  <li>else if (rabbit.stare == "jucăuș") → setează starea la "somnoros" și apelează metoda somnoros()</li>
                  <li>else → setează starea la "normal"</li>
                </ul>
              </li>
            </ol>
          </StepItem>

          <div className="my-6">
            <CodeBlock language="plaintext">
{`// Exemplu de cod pentru listener de click
addSceneActivationListener(
    new SceneActivationListener() {
        public void eventTriggered() {
            if (rabbit.stare.equals("normal")) {
                rabbit.stare = "fericit";
                rabbit.fericit();
            } else if (rabbit.stare.equals("fericit")) {
                rabbit.stare = "jucaus";
                rabbit.jucaus();
            } else if (rabbit.stare.equals("jucaus")) {
                rabbit.stare = "somnoros";
                rabbit.somnoros();
            } else {
                rabbit.stare = "normal";
            }
        }
    }
);`}
            </CodeBlock>
          </div>

          <Alert className="my-6 border-pink-200 bg-pink-50">
            <Heart className="h-5 w-5 text-pink-500" />
            <AlertTitle className="text-pink-800">Personalizează comportamentele</AlertTitle>
            <AlertDescription className="text-pink-700">
              Fii creativ cu comportamentele animalului tău! Poți adăuga sunete (folosind camera.playAudio), poți schimba culorile, poți face animalul să interacționeze cu alte obiecte din scenă sau poți adăuga efecte vizuale.
            </AlertDescription>
          </Alert>
        </>
      )
    },
    {
      id: 'pasul4',
      title: 'Pasul 4: Implementarea comenzilor vocale',
      content: (
        <>
          <p className="mb-4">
            În această etapă finală, vom adăuga posibilitatea de a controla animalul prin comenzi vocale simple. În Alice 3, aceasta se realizează prin intermediul tastaturii, simulând comenzile vocale.
          </p>

          <StepItem number={1} title="Creează listener-i pentru tastatură">
            <p>
              În meniul de sus, selectează "Edit" apoi "Scene keyboard listeners". Vom adăuga listener-i pentru diferite taste:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Tasta V (Vino):</strong> Când se apasă "V", animalul va veni spre cameră</li>
              <li><strong>Tasta S (Stai):</strong> Când se apasă "S", animalul va sta pe loc</li>
              <li><strong>Tasta R (Rostogolește):</strong> Când se apasă "R", animalul se va rostogolească</li>
              <li><strong>Tasta C (Culcă):</strong> Când se apasă "C", animalul se va culcă</li>
            </ul>
          </StepItem>

          <StepItem number={2} title="Programează comanda 'Vino'">
            <p>
              Adaugă un nou listener pentru tasta "V":
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Adaugă un mesaj text temporar "Vin imediat!"</li>
              <li>Fă animalul să se întoarcă spre cameră (turn To face camera)</li>
              <li>Fă animalul să se miște spre cameră (move toward camera, 3 meters)</li>
            </ol>
          </StepItem>

          <StepItem number={3} title="Programează comanda 'Stai'">
            <p>
              Adaugă un nou listener pentru tasta "S":
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Adaugă un mesaj text temporar "Stau cuminte!"</li>
              <li>Oprește orice mișcare în curs (adaugă un comentariu - Alice 3 nu permite oprirea directă a animațiilor)</li>
              <li>Resetează poziția animalului (opțional)</li>
            </ol>
          </StepItem>

          <StepItem number={4} title="Programează comanda 'Rostogolește'">
            <p>
              Adaugă un nou listener pentru tasta "R":
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Adaugă un mesaj text temporar "Mă rostogolesc!"</li>
              <li>Folosește funcția roll (1.0 rotations, left to right) pentru a face animalul să se rostogolească</li>
            </ol>
          </StepItem>

          <StepItem number={5} title="Programează comanda 'Culcă'">
            <p>
              Adaugă un nou listener pentru tasta "C":
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Adaugă un mesaj text temporar "Noapte bună!"</li>
              <li>Folosește orientarea (turn to face Down) pentru a simula că animalul se culcă</li>
              <li>Schimbă starea la "somnoros" și apelează metoda somnoros()</li>
            </ol>
          </StepItem>

          <div className="my-6">
            <CodeBlock language="plaintext">
{`// Exemplu de cod pentru comanda "Vino"
addKeyPressListener(
    'v', 
    new KeyPressListener() {
        public void keyPressed() {
            this.scene.createBillboardText("Vin imediat!", rabbit.getPosition(), 1.0);
            rabbit.turnToFace(this.scene.getCamera());
            rabbit.moveToward(this.scene.getCamera(), 3.0);
        }
    }
);`}
            </CodeBlock>
          </div>

          <Alert className="my-6 border-blue-200 bg-blue-50">
            <Code className="h-5 w-5 text-blue-500" />
            <AlertTitle className="text-blue-800">Despre comenzile vocale în Alice 3</AlertTitle>
            <AlertDescription className="text-blue-700">
              Alice 3 nu are recunoaștere vocală încorporată, dar simulează acest comportament prin comenzi de tastatură. Într-o aplicație reală, ai putea folosi API-uri de recunoaștere vocală precum Web Speech API sau servicii precum Google Speech-to-Text.
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
            Acum că ai creat un animal virtual de bază, iată câteva provocări pentru a extinde și a îmbunătăți proiectul:
          </p>

          <div className="space-y-4 mb-6">
            <Challenge title="Adaugă un sistem de hrănire" difficulty="easy">
              <p>
                Creează un obiect de mâncare în scenă și programează animalul să se miște către el când utilizatorul apasă tasta "F" (Feed/Hrănește). Adaugă și o variabilă "foame" care crește în timp și scade când animalul mănâncă.
              </p>
            </Challenge>
            
            <Challenge title="Implementează un sistem de zi și noapte" difficulty="medium">
              <p>
                Adaugă un ciclu de zi și noapte care schimbă iluminarea scenei și comportamentul animalului (activ ziua, doarme noaptea). Poți face acesta folosind setările de iluminare ale scenei și un timer.
              </p>
            </Challenge>
            
            <Challenge title="Adaugă mai multe animale" difficulty="hard">
              <p>
                Adaugă un al doilea animal în scenă și programează interacțiuni între ele. De exemplu, animalele pot să se joace împreună, să se urmărească unul pe celălalt sau să "vorbească" între ele.
              </p>
            </Challenge>
            
            <Challenge title="Creează un joc de dresaj" difficulty="medium">
              <p>
                Transformă proiectul într-un joc de dresaj unde utilizatorul învață animalul să facă trucuri noi. Adaugă un sistem de punctaj care crește când animalul execută corect un truc.
              </p>
            </Challenge>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border border-green-200 my-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">Idei suplimentare pentru extindere</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="bg-green-100 text-green-800 p-1 rounded mr-2 mt-1">🌍</span>
                <span>Creează un mediu mai complex, cu mai multe zone în care animalul poate explora</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-800 p-1 rounded mr-2 mt-1">🎮</span>
                <span>Adaugă mini-jocuri, cum ar fi să arunci o minge iar animalul să o aducă înapoi</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-800 p-1 rounded mr-2 mt-1">📱</span>
                <span>Creează o interfață cu butoane pentru comenzi, în loc să folosești doar tastatura</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-800 p-1 rounded mr-2 mt-1">🎵</span>
                <span>Adaugă sunete și muzică de fundal pentru a face experiența mai imersivă</span>
              </li>
            </ul>
          </div>
        </>
      )
    },
    {
      id: 'concluzii',
      title: 'Concluzii și pași următori',
      content: (
        <>
          <p className="mb-4">
            Felicitări! Ai creat un animal virtual interactiv în Alice 3, care poate răspunde la comenzi și își poate schimba comportamentul în funcție de starea sa. Acest proiect te-a ajutat să înveți concepte importante de programare, cum ar fi:
          </p>

          <div className="bg-pink-50 border-l-4 border-pink-500 p-4 my-6">
            <h3 className="text-lg font-semibold text-pink-800 mb-2">Ce ai învățat</h3>
            <ul className="list-disc list-inside space-y-1 text-pink-800">
              <li>Crearea și manipularea obiectelor 3D</li>
              <li>Programarea mișcărilor și animațiilor</li>
              <li>Gestionarea stărilor și comportamentelor</li>
              <li>Implementarea interacțiunilor bazate pe evenimente</li>
              <li>Simularea comenzilor vocale prin apăsări de taste</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">Unde poți merge de aici?</h3>
          <p className="mb-4">
            Programarea în Alice 3 este doar începutul călătoriei tale în lumea dezvoltării software și a animației 3D. Iată câteva direcții în care poți continua:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold">Exploră Alice 3 în profunzime</h4>
                <p className="mt-2 text-sm">
                  Alice 3 are mult mai multe capacități decât am explorat în acest tutorial. Încearcă să creezi povești interactive mai complexe sau jocuri simple.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold">Învață Java</h4>
                <p className="mt-2 text-sm">
                  Alice 3 generează cod Java. După ce te simți confortabil cu Alice, poți trece la programarea directă în Java pentru a crea aplicații mai complexe.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold">Explorează Blender sau Unity</h4>
                <p className="mt-2 text-sm">
                  Pentru modelarea și animația 3D mai avansată, poți învăța instrumente precum Blender (gratuit) sau motoare de jocuri precum Unity.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold">Partajează creația ta</h4>
                <p className="mt-2 text-sm">
                  Nu uita să partajezi proiectul tău în comunitatea Alice sau cu prietenii tăi. Poți exporta proiectul ca un fișier video pentru a-l împărtăși mai ușor.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 mb-4">
            <p className="italic text-gray-600">
              "Programarea este ca și cum ai spune o poveste. Cu fiecare linie de cod, adaugi un nou capitol la aventura ta digitală."
            </p>
          </div>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="alice3"
      sessionId="3"
      title="Animalul Virtual"
      subtitle="Creează un animal interactiv 3D care răspunde la comenzile tale"
      heroColor="bg-gradient-to-r from-pink-500 to-pink-400"
      previousLesson={{
        title: "Cursa Spațială",
        path: "/alice3/session2spacegame"
      }}
      nextLesson={{
        title: "Animații Geometrice",
        path: "/alice3/session4geometry"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session3VirtualPet;
