
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { Image } from '@/components/ui/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { CodeBlock } from '@/components/CodeBlock';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info, Lightbulb, AlertTriangle } from 'lucide-react';

const Session1Adventure = () => {
  // Sidebar navigation items
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'interfata', title: 'Interfața Alice 3' },
    { id: 'creare-scena', title: 'Crearea scenei' },
    { id: 'adaugare-personaje', title: 'Adăugarea personajelor' },
    { id: 'programare-miscare', title: 'Programarea mișcării' },
    { id: 'interactiune', title: 'Adăugarea interacțiunii' },
    { id: 'provocari', title: 'Provocări și idei' },
  ];

  // External resources 
  const resources = [
    { title: 'Descarcă Alice 3', url: 'https://www.alice.org/get-alice/alice-3/' },
    { title: 'Tutoriale oficiale Alice', url: 'https://www.alice.org/resources/how-tos/' },
    { title: 'Ghid de început rapid', url: 'https://www.alice.org/wp-content/uploads/2017/05/Alice3QuickStartUnix.pdf' },
    { title: 'Comunitatea Alice', url: 'https://www.alice.org/community/' },
  ];

  // Lesson sections content
  const sections = [
    {
      id: 'introducere',
      title: 'Introducere în proiect',
      content: (
        <>
          <p className="mb-4">
            În această lecție, vom crea o poveste 3D interactivă în Alice 3 numită "Aventură în Pădure". 
            Vom construi o scenă de pădure fermecată, vom adăuga personaje care interacționează, 
            și vom programa mișcări și dialoguri.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Ce vei învăța</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Să folosești interfața Alice 3</li>
                <li>Să creezi o scenă 3D cu elemente de pădure</li>
                <li>Să adaugi și să poziționezi personaje</li>
                <li>Să programezi mișcări și animații de bază</li>
                <li>Să implementezi interacțiuni simple</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Concepte cheie</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Camera și perspectiva 3D</li>
                <li>Proceduri și metode</li>
                <li>Secvențe și blocuri de cod</li>
                <li>Transformări 3D (rotație, mișcare, redimensionare)</li>
                <li>Evenimente de interacțiune</li>
              </ul>
            </div>
          </div>
          
          <Alert className="mb-6">
            <Info className="h-5 w-5" />
            <AlertTitle>Înainte să începi</AlertTitle>
            <AlertDescription>
              Trebuie să ai Alice 3 instalat pe calculator. Dacă nu l-ai instalat încă, 
              poți să îl descarci gratuit de pe <a href="https://www.alice.org/get-alice/alice-3/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">site-ul oficial Alice</a>.
            </AlertDescription>
          </Alert>
          
          <div className="rounded-lg overflow-hidden mb-6">
            <img 
              src="https://www.alice.org/wp-content/uploads/2017/04/3D_hero.png" 
              alt="Alice 3 Forest Scene Preview" 
              className="w-full h-auto"
            />
            <p className="text-center text-sm text-gray-500 mt-2">
              Exemplu de poveste 3D interactivă creată în Alice 3
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'interfata',
      title: 'Interfața Alice 3',
      content: (
        <>
          <p className="mb-4">
            Înainte de a începe proiectul, să ne familiarizăm cu interfața Alice 3. Când deschizi 
            programul, vei vedea un ecran de start care îți permite să creezi un proiect nou 
            sau să deschizi unul existent.
          </p>
          
          <div className="rounded-lg overflow-hidden mb-6">
            <img 
              src="https://www.alice.org/wp-content/uploads/2017/05/welcome-to-alice-3.png" 
              alt="Alice 3 Welcome Screen" 
              className="w-full h-auto border"
            />
            <p className="text-center text-sm text-gray-500 mt-2">
              Ecranul de start Alice 3
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">Elementele principale ale interfeței:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold text-pink-700 mb-2">1. Scena 3D</h4>
                <p>Zona principală unde vei vedea lumea 3D și toate obiectele. Aici poți vizualiza în timp real schimbările pe care le faci.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold text-pink-700 mb-2">2. Panoul de obiecte</h4>
                <p>Afișează toate obiectele din scenă, organizate ierarhic. De aici poți selecta obiecte pentru a le modifica sau programa.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold text-pink-700 mb-2">3. Editorul de proprietăți</h4>
                <p>Permite ajustarea proprietăților pentru obiectul selectat, cum ar fi culoarea, dimensiunea sau poziția.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold text-pink-700 mb-2">4. Editorul de metode</h4>
                <p>Aici vei crea "proceduri" și vei scrie codul pentru a controla comportamentul obiectelor din scenă.</p>
              </CardContent>
            </Card>
          </div>
          
          <Alert className="mb-6 bg-amber-50 border-amber-200">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            <AlertTitle className="text-amber-700">Sfat util</AlertTitle>
            <AlertDescription className="text-amber-700">
              Poți roti camera în scena 3D ținând apăsat butonul din dreapta al mouse-ului și trăgând. 
              Pentru a face zoom, folosește rotița mouse-ului.
            </AlertDescription>
          </Alert>
          
          <p>
            Acum că ne-am familiarizat cu interfața, hai să începem să creăm povestea noastră 3D!
          </p>
        </>
      ),
    },
    {
      id: 'creare-scena',
      title: 'Crearea scenei de pădure',
      content: (
        <>
          <p className="mb-4">
            Primul pas în crearea poveștii noastre este să alegem o scenă potrivită și să o 
            configurăm pentru a reprezenta o pădure fermecată.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Pașii pentru crearea scenei:</h3>
          
          <div className="space-y-6 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 1: Crearea unui proiect nou</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Deschide Alice 3 și apasă pe "Proiect nou"</li>
                <li>Alege template-ul "Grass" sau un alt peisaj potrivit pentru o pădure</li>
                <li>Dă un nume proiectului tău (ex: "Aventură în Pădure") și apasă "OK"</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 2: Configurarea terenului</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Selectează obiectul "ground" din panoul de obiecte</li>
                <li>În editorul de proprietăți, poți ajusta culoarea terenului pentru a arăta mai natural</li>
                <li>Poți mări dimensiunea terenului dacă este necesar pentru a avea mai mult spațiu</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 3: Adăugarea elementelor de pădure</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Apasă pe butonul "Add Objects" din partea de sus a interfeței</li>
                <li>În galeria de obiecte, caută și adaugă copaci (în categoria "Nature")</li>
                <li>Adaugă mai mulți copaci, de diferite tipuri și dimensiuni</li>
                <li>Adaugă și alte elemente specifice pădurii: pietre, flori, ciuperci</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 4: Aranjarea elementelor</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Selectează fiecare obiect adăugat și poziționează-l în scenă trăgând de săgețile roșu, verde și albastru (care reprezintă axele X, Y, Z)</li>
                <li>Rotește și redimensionează obiectele după cum este necesar pentru a crea o scenă naturală</li>
                <li>Creează un grup de copaci mai desiș în fundal și un spațiu deschis în centru pentru personaje</li>
              </ul>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden mb-6">
            <img 
              src="https://www.alice.org/wp-content/uploads/2018/03/2-1024x631.png" 
              alt="Alice 3 Forest Scene Setup" 
              className="w-full h-auto"
            />
            <p className="text-center text-sm text-gray-500 mt-2">
              Exemplu de scenă de pădure configurată în Alice 3
            </p>
          </div>
          
          <Alert className="mb-6">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <AlertTitle>Atenție</AlertTitle>
            <AlertDescription>
              Nu adăuga prea multe obiecte în scenă, deoarece acest lucru poate încetini performanța programului. 
              Începe cu câteva elemente esențiale și adaugă mai multe doar dacă este necesar.
            </AlertDescription>
          </Alert>
          
          <p>
            Felicitări! Ai creat scena de bază pentru povestea ta. Acum scena ta arată ca o pădure, 
            dar este încă lipsită de viață. În următoarea secțiune, vom adăuga personaje care vor 
            aduce povestea la viață.
          </p>
        </>
      ),
    },
    {
      id: 'adaugare-personaje',
      title: 'Adăugarea personajelor',
      content: (
        <>
          <p className="mb-4">
            Acum că avem scena de pădure pregătită, este timpul să adăugăm personajele care vor 
            participa la povestea noastră. Vom avea un personaj principal și câteva animale din pădure.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Adăugarea și configurarea personajelor:</h3>
          
          <div className="space-y-6 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 1: Adăugarea personajului principal</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Apasă pe butonul "Add Objects"</li>
                <li>Navighează la categoria "People" și alege un personaj (băiat sau fată)</li>
                <li>Plasează personajul în centrul scenei, pe pământ</li>
                <li>Redenumește obiectul (ex: "Explorator") în panoul de obiecte pentru a-l identifica mai ușor</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 2: Adăugarea animalelor din pădure</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Din galeria de obiecte, navighează la categoria "Animals"</li>
                <li>Adaugă un iepure și plasează-l lângă un copac sau un tufiș</li>
                <li>Adaugă o veveriță și poziționeaz-o pe o ramură de copac sau pe pământ</li>
                <li>Opțional, poți adăuga și alte animale de pădure (căprioară, vulpe, etc.)</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 3: Adăugarea obiectului special</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Adaugă un obiect care va fi "comoara" din povestea noastră (ex: o cutie de comoară, o piatră strălucitoare, etc.)</li>
                <li>Ascunde acest obiect undeva în pădure, parțial vizibil</li>
                <li>Acest obiect va fi ținta căutării personajului principal</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 4: Ajustarea camerelor</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Alice 3 are mai multe camere predefinite pe care le poți folosi</li>
                <li>Selectează "camera" din panoul de obiecte</li>
                <li>Poți crea o vedere generală a scenei și apoi camere care se concentrează pe personaje specifice</li>
                <li>Salvează pozițiile camerelor pentru a le folosi în poveste</li>
              </ul>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden mb-6">
            <img 
              src="https://www.alice.org/wp-content/uploads/2018/03/7.png" 
              alt="Alice 3 Character Placement" 
              className="w-full h-auto"
            />
            <p className="text-center text-sm text-gray-500 mt-2">
              Exemplu de personaje plasate în scena de pădure
            </p>
          </div>
          
          <Alert className="mb-6 bg-amber-50 border-amber-200">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            <AlertTitle className="text-amber-700">Sfat util</AlertTitle>
            <AlertDescription className="text-amber-700">
              Poți modifica proprietățile personajelor (cum ar fi culoarea hainelor sau dimensiunea) 
              din editorul de proprietăți. Acest lucru te ajută să personalizezi personajele 
              pentru a se potrivi cu viziunea ta.
            </AlertDescription>
          </Alert>
          
          <p>
            Excelent! Acum scena ta este populată cu personaje interesante. În următoarea secțiune, 
            vom da viață acestor personaje programând mișcările lor.
          </p>
        </>
      ),
    },
    {
      id: 'programare-miscare',
      title: 'Programarea mișcării personajelor',
      content: (
        <>
          <p className="mb-4">
            Acum vom programa mișcările personajelor pentru a crea o animație fluidă. În Alice 3, 
            programarea se face prin adăugarea de "proceduri" și utilizarea blocurilor de cod 
            vizuale.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Programarea mișcărilor de bază:</h3>
          
          <div className="space-y-6 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 1: Crearea metodei principale</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>În partea de jos a interfeței, găsește tab-ul "Code Editor" și deschide-l</li>
                <li>Vei vedea metoda "myFirstMethod" care se execută când pornești programul</li>
                <li>Această metodă va conține secvența principală de evenimente pentru povestea noastră</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 2: Programarea personajului principal</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Selectează personajul principal din panoul de obiecte</li>
                <li>În editorul de cod, drag-and-drop personajul în metoda myFirstMethod</li>
                <li>Din meniul care apare, alege "Explorator move"</li>
                <li>Setează direcția și distanța de mișcare</li>
                <li>Adaugă mai multe comenzi de mișcare pentru a crea un traseu prin pădure</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 3: Adăugarea animațiilor</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Între mișcări, poți adăuga animații precum "turn", "roll" sau "say"</li>
                <li>Pentru a face personajul să vorbească, folosește metoda "say" și introdu textul dorit</li>
                <li>Adaugă pauze între acțiuni folosind "wait" pentru a crea un ritm natural</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 4: Animarea animalelor</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Selectează iepurele și adaugă-i mișcări (ex: sări, aleargă)</li>
                <li>Programează veverița să coboare din copac când personajul principal se apropie</li>
                <li>Sincronizează mișcările animalelor cu cele ale personajului principal folosind blocuri Do Together</li>
              </ul>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-gray-200 mb-6">
            <Tabs defaultValue="code1">
              <TabsList className="bg-gray-100 p-0">
                <TabsTrigger value="code1" className="data-[state=active]:bg-white">Exemplu de cod - Mișcare</TabsTrigger>
                <TabsTrigger value="code2" className="data-[state=active]:bg-white">Exemplu de cod - Dialog</TabsTrigger>
              </TabsList>
              <TabsContent value="code1" className="m-0">
                <CodeBlock code={`// Exemplu de cod pentru mișcarea personajului principal
Scene.myFirstMethod {
    // Personajul se uită în jur
    Explorator.turn(LEFT, 0.25)
    Explorator.turn(RIGHT, 0.5)
    Explorator.turn(LEFT, 0.25)
    
    // Personajul începe să se miște prin pădure
    Explorator.say("Hmm, ce pădure frumoasă!")
    Explorator.move(FORWARD, 1.0)
    
    // Iepurele reacționează când personajul se apropie
    doTogether {
        Explorator.move(FORWARD, 0.5)
        Iepure.jump()
    }
    
    // Personajul se întoarce spre iepure
    Explorator.turnToFace(Iepure)
}`} language="java" />
              </TabsContent>
              <TabsContent value="code2" className="m-0">
                <CodeBlock code={`// Exemplu de cod pentru dialog și interacțiune
Scene.myFirstMethod {
    // Dialog între personaj și veveriță
    Explorator.say("Bună, micuță veveriță!")
    Explorator.wait(1.0)
    Veverita.say("Salut! Cauți comoara ascunsă?")
    Explorator.wait(1.0)
    
    // Personajul reacționează
    Explorator.say("O comoară? Unde?")
    Explorator.wait(1.0)
    
    // Veverița dă indicii
    doTogether {
        Veverita.say("Urmează poteca spre copacul cel mare!")
        Veverita.pointAt(CopacelMare)
    }
}`} language="java" />
              </TabsContent>
            </Tabs>
          </div>
          
          <Alert className="mb-6">
            <Info className="h-5 w-5" />
            <AlertTitle>Despre blocurile de control</AlertTitle>
            <AlertDescription>
              <p className="mb-2">În Alice 3, poți folosi mai multe blocuri de control pentru a organiza acțiunile:</p>
              <ul className="list-disc pl-5">
                <li><strong>Do in order</strong> - Execută acțiunile în ordine, una după alta</li>
                <li><strong>Do together</strong> - Execută mai multe acțiuni simultan</li>
                <li><strong>Loop</strong> - Repetă acțiunile de un anumit număr de ori</li>
                <li><strong>If/Else</strong> - Execută acțiuni diferite în funcție de o condiție</li>
              </ul>
            </AlertDescription>
          </Alert>
          
          <p>
            Felicitări! Ai programat mișcările de bază ale personajelor. Acum povestea ta începe 
            să prindă viață, cu personaje care se deplasează și interacționează. În următoarea secțiune, 
            vom adăuga interactivitate pentru a face povestea și mai captivantă.
          </p>
        </>
      ),
    },
    {
      id: 'interactiune',
      title: 'Adăugarea interacțiunii',
      content: (
        <>
          <p className="mb-4">
            Pentru a face povestea noastră cu adevărat interactivă, vom adăuga elemente care răspund 
            la acțiunile utilizatorului. În Alice 3, putem crea evenimente care se declanșează când 
            utilizatorul interacționează cu scena.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Implementarea interacțiunii:</h3>
          
          <div className="space-y-6 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 1: Crearea metodelor pentru interacțiune</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>În partea de jos a interfeței, creează noi metode pentru fiecare tip de interacțiune</li>
                <li>Apasă pe "create new method" și dă-i un nume sugestiv (ex: "interacțiuneCuIepure")</li>
                <li>Adaugă în această metodă acțiunile care se vor întâmpla când utilizatorul interacționează cu iepurele</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 2: Configurarea evenimentelor de mouse</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Selectează tab-ul "Events" din partea de jos a interfeței</li>
                <li>Creează un nou eveniment cu "Add new event"</li>
                <li>Alege "When the mouse is clicked on" și selectează iepurele</li>
                <li>Setează metoda care va fi apelată (interacțiuneCuIepure)</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 3: Adăugarea dialogurilor interactive</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>În metoda de interacțiune, adaugă dialoguri între personajul principal și animal</li>
                <li>Folosește blocul "ask user" pentru a afișa o întrebare cu opțiuni pentru utilizator</li>
                <li>Folosește blocuri "if/else" pentru a ramifica povestea în funcție de răspunsul utilizatorului</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 4: Adăugarea interacțiunii cu comoara</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Creează un eveniment pentru când utilizatorul face clic pe comoară</li>
                <li>Programează o secvență specială care se declanșează când comoara este descoperită</li>
                <li>Adaugă efecte speciale (lumini, sunete) pentru a marca descoperirea comorii</li>
              </ul>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-gray-200 mb-6">
            <Tabs defaultValue="code1">
              <TabsList className="bg-gray-100 p-0">
                <TabsTrigger value="code1" className="data-[state=active]:bg-white">Exemplu de cod - Eveniment de mouse</TabsTrigger>
                <TabsTrigger value="code2" className="data-[state=active]:bg-white">Exemplu de cod - Dialog interactiv</TabsTrigger>
              </TabsList>
              <TabsContent value="code1" className="m-0">
                <CodeBlock code={`// Eveniment: Când utilizatorul face clic pe iepure
Events.addMouseClickOnObjectEvent(Iepure) {
    Scene.interactiuneCuIepure()
}

// Metoda care se declanșează la interacțiunea cu iepurele
Scene.interactiuneCuIepure {
    // Iepurele sare când este făcut clic pe el
    Iepure.jump()
    Iepure.say("Salut! Mă bucur că ai venit în pădure!")
    Explorator.turnToFace(Iepure)
    Explorator.say("Bună! Poți să mă ajuți să găsesc ceva special în această pădure?")
    Iepure.say("Sigur! Caută lângă copacul mare din centru.")
}`} language="java" />
              </TabsContent>
              <TabsContent value="code2" className="m-0">
                <CodeBlock code={`// Dialog interactiv cu utilizatorul
Scene.interactiuneCuVeverita {
    Veverita.say("Bună! Vrei să afli un secret despre această pădure?")
    
    // Întreabă utilizatorul și așteaptă un răspuns
    String raspuns = Dialog.askForChoice("Ce vrei să faci?", Arrays.asList("Da, vreau să aflu secretul", "Nu, mulțumesc"))
    
    // Acțiuni diferite în funcție de răspunsul utilizatorului
    if (raspuns == "Da, vreau să aflu secretul") {
        Veverita.say("În spatele cascadei se află o peșteră secretă!")
        Explorator.say("Mulțumesc pentru sfat! Voi căuta acolo.")
        // Declanșează secvența de căutare a peșterii
        Scene.cautaPestera()
    } else {
        Veverita.say("În regulă, poate altă dată.")
        Explorator.say("Mulțumesc oricum!")
    }
}`} language="java" />
              </TabsContent>
            </Tabs>
          </div>
          
          <Alert className="mb-6 bg-green-50 border-green-200">
            <Info className="h-5 w-5 text-green-500" />
            <AlertTitle className="text-green-700">Testarea interactivității</AlertTitle>
            <AlertDescription className="text-green-700">
              După ce ai adăugat elementele interactive, asigură-te că testezi aplicația frecvent. 
              Rulează programul și verifică dacă evenimentele se declanșează corect când faci clic 
              pe diferite obiecte. Ajustează codul dacă este necesar.
            </AlertDescription>
          </Alert>
          
          <p>
            Excelent! Ai adăugat interactivitate poveștii tale, permițând utilizatorilor să 
            influențeze desfășurarea narațiunii prin alegerile lor. Acest lucru face povestea 
            mai captivantă și personală pentru fiecare utilizator.
          </p>
        </>
      ),
    },
    {
      id: 'provocari',
      title: 'Provocări și idei de extindere',
      content: (
        <>
          <p className="mb-4">
            Felicitări pentru finalizarea proiectului de bază! Acum ai o poveste 3D interactivă 
            despre o aventură în pădure. Pentru a-ți extinde proiectul și a-ți dezvolta abilitățile 
            în Alice 3, încearcă aceste provocări suplimentare.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Idei pentru a îmbunătăți proiectul:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold text-pink-700 mb-2">1. Adaugă efecte sonore</h4>
                <p>Încorporează sunete ambientale de pădure, pași, dialoguri vocale și efecte sonore pentru acțiunile personajelor. Alice 3 permite importarea de fișiere audio.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold text-pink-700 mb-2">2. Creează un sistem de punctaj</h4>
                <p>Transformă povestea într-un joc cu un sistem de punctaj. Utilizatorul poate câștiga puncte pentru descoperirea obiectelor ascunse sau pentru alegerea anumitor căi în poveste.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold text-pink-700 mb-2">3. Adaugă fenomene meteorologice</h4>
                <p>Implementează efecte de ploaie, ceață sau schimbări de lumină pentru a crea atmosferă. Poți programa tranziții între diferite momente ale zilei.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold text-pink-700 mb-2">4. Creează multiple finaluri</h4>
                <p>Dezvoltă mai multe căi narative care duc la finaluri diferite, în funcție de alegerile utilizatorului. Acest lucru încurajează rejucarea poveștii.</p>
              </CardContent>
            </Card>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">Provocări avansate:</h3>
          
          <div className="space-y-4 mb-6">
            <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
              <h4 className="font-semibold text-pink-700 mb-2">Implementează un inventar</h4>
              <p>Creează un sistem simplu de inventar care permite personajului principal să colecteze obiecte pe parcursul aventurii și să le folosească mai târziu.</p>
            </div>
            
            <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
              <h4 className="font-semibold text-pink-700 mb-2">Adaugă un mini-joc</h4>
              <p>Integrează un mini-joc simplu în poveste, cum ar fi un puzzle care trebuie rezolvat pentru a descoperi comoara sau pentru a trece un obstacol.</p>
            </div>
            
            <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
              <h4 className="font-semibold text-pink-700 mb-2">Creează un personaj antagonist</h4>
              <p>Adaugă un personaj antagonist (cum ar fi un lup sau un vrăjitor) care încearcă să împiedice personajul principal să găsească comoara.</p>
            </div>
            
            <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
              <h4 className="font-semibold text-pink-700 mb-2">Programează animale care urmăresc personajul</h4>
              <p>Folosește funcțiile avansate de programare pentru a face animalele să urmărească personajul principal sau să reacționeze la apropierea acestuia.</p>
            </div>
          </div>
          
          <Alert className="mb-6">
            <Info className="h-5 w-5" />
            <AlertTitle>Partajarea proiectului</AlertTitle>
            <AlertDescription>
              După ce ai finalizat proiectul, poți să îl salvezi și să îl distribui prietenilor și 
              familiei. Proiectele Alice 3 pot fi exportate ca fișiere .a3p, care pot fi deschise 
              de oricine are Alice 3 instalat. De asemenea, poți înregistra un video al poveștii tale 
              folosind funcția de înregistrare a ecranului din Alice 3.
            </AlertDescription>
          </Alert>
          
          <p>
            Acestea sunt doar câteva idei pentru a-ți extinde proiectul. Fii creativ și experimentează 
            cu diferite funcționalități ale Alice 3. Fiecare provocare pe care o abordezi te va ajuta 
            să-ți dezvolți abilitățile de programare și de gândire computațională.
          </p>
          
          <div className="text-center mt-8">
            <h3 className="text-xl font-bold text-pink-700 mb-2">Felicitări pentru finalizarea primului tău proiect în Alice 3!</h3>
            <p>
              Ai învățat elementele de bază ale programării vizuale 3D și ai creat o poveste interactivă captivantă. 
              Continuă să explorezi și să creezi noi proiecte pentru a-ți dezvolta abilitățile!
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <LessonLayout
      courseId="alice3"
      sessionId="1"
      title="Aventură în Pădure"
      subtitle="Creează o poveste 3D interactivă într-un mediu vizual de programare."
      heroColor="bg-gradient-to-r from-pink-500 to-pink-400"
      previousLesson={undefined}
      nextLesson={{
        title: "Lecția 2: Cursa Spațială",
        path: "/alice3/session2spacegame"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session1Adventure;
