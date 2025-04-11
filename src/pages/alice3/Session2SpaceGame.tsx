
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { Image } from '@/components/ui/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { CodeBlock } from '@/components/CodeBlock';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info, Lightbulb, AlertTriangle } from 'lucide-react';

const Session2SpaceGame = () => {
  // Sidebar navigation items
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'interfata', title: 'Configurare proiect' },
    { id: 'scena-spatiala', title: 'Crearea scenei spațiale' },
    { id: 'nava-spatiala', title: 'Nava spațială' },
    { id: 'elemente-joc', title: 'Elemente de joc' },
    { id: 'control-tastatura', title: 'Controlul cu tastatura' },
    { id: 'coliziuni', title: 'Implementarea coliziunilor' },
    { id: 'punctaj', title: 'Sistem de scor' },
    { id: 'provocari', title: 'Provocări și idei' },
  ];

  // External resources 
  const resources = [
    { title: 'Descarcă Alice 3', url: 'https://www.alice.org/get-alice/alice-3/' },
    { title: 'Tutoriale video pentru Alice 3', url: 'https://www.youtube.com/c/AliceProject' },
    { title: 'Biblioteca de modele 3D', url: 'https://www.alice.org/resources/alice-3-x-library/' },
    { title: 'Forum Alice', url: 'https://www.alice.org/forums/' },
  ];

  // Lesson sections content
  const sections = [
    {
      id: 'introducere',
      title: 'Introducere în proiect',
      content: (
        <>
          <p className="mb-4">
            În această lecție, vom crea un joc spațial simplu, dar captivant, în Alice 3. Vei învăța să controlezi 
            o navă spațială, să colectezi stele și să eviți asteroizi, toate într-un mediu 3D interactiv.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Ce vei învăța</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Să creezi o scenă spațială 3D</li>
                <li>Să programezi controlul obiectelor cu tastatura</li>
                <li>Să implementezi un sistem de coliziuni</li>
                <li>Să creezi obiecte care se mișcă automat</li>
                <li>Să adaugi un sistem de scor</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Concepte cheie</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Evenimente și gestionarea intrărilor de la tastatură</li>
                <li>Programarea mișcării orientate pe obiecte</li>
                <li>Detectarea coliziunilor în 3D</li>
                <li>Variabile pentru urmărirea scorului</li>
                <li>Programare concurentă (mai multe acțiuni simultan)</li>
              </ul>
            </div>
          </div>
          
          <Alert className="mb-6">
            <Info className="h-5 w-5" />
            <AlertTitle>Înainte să începi</AlertTitle>
            <AlertDescription>
              Trebuie să ai Alice 3 instalat pe calculator. Acest proiect este potrivit pentru începători, 
              dar este recomandat să parcurgi prima lecție (Aventură în Pădure) înainte de a începe acest proiect.
            </AlertDescription>
          </Alert>
          
          <div className="rounded-lg overflow-hidden mb-6">
            <img 
              src="https://www.alice.org/wp-content/uploads/2018/03/19-1024x628.png" 
              alt="Alice 3 Space Game Preview" 
              className="w-full h-auto"
            />
            <p className="text-center text-sm text-gray-500 mt-2">
              Exemplu de joc spațial creat în Alice 3
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'interfata',
      title: 'Configurarea proiectului',
      content: (
        <>
          <p className="mb-4">
            Înainte de a începe să construim jocul propriu-zis, trebuie să configurăm proiectul și să ne familiarizăm 
            cu interfața Alice 3 pentru dezvoltarea jocurilor.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Pașii pentru configurarea proiectului:</h3>
          
          <div className="space-y-6 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 1: Crearea unui proiect nou</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Deschide Alice 3 și selectează "Proiect nou"</li>
                <li>Alege template-ul "Space" din galeria de template-uri</li>
                <li>Numește proiectul tău (ex: "Cursa Spațială") și apasă "OK"</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 2: Familiarizarea cu interfața de dezvoltare a jocurilor</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Scena 3D - zona centrală unde vezi lumea 3D</li>
                <li>Panoul de obiecte - lista tuturor obiectelor din scenă</li>
                <li>Editorul de proprietăți - ajustează proprietățile obiectelor selectate</li>
                <li>Editorul de metode - unde scrii codul pentru comportamentul obiectelor</li>
                <li>Editorul de evenimente - pentru a configura răspunsurile la tastatură și mouse</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 3: Planificarea jocului</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Obiectivul jocului:</strong> Controlează o navă spațială pentru a colecta stele și a evita asteroizi</li>
                <li><strong>Mecanici de bază:</strong> Mișcare, coliziuni, colectare de obiecte</li>
                <li><strong>Elemente de joc:</strong> Navă spațială, stele, asteroizi, scor</li>
                <li><strong>Condiții de final:</strong> Acumularea unui anumit scor sau pierderea tuturor viețile</li>
              </ul>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden mb-6">
            <img 
              src="https://www.alice.org/wp-content/uploads/2017/05/getting-started-hero.png" 
              alt="Alice 3 Interface" 
              className="w-full h-auto border"
            />
            <p className="text-center text-sm text-gray-500 mt-2">
              Interfața Alice 3 pentru dezvoltarea jocurilor
            </p>
          </div>
          
          <Alert className="mb-6 bg-amber-50 border-amber-200">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            <AlertTitle className="text-amber-700">Sfat util</AlertTitle>
            <AlertDescription className="text-amber-700">
              Înainte de a începe să codezi, petrece câteva minute explorând interfața și familiarizându-te cu controalele. 
              Poți roti, face zoom și muta camera pentru a vedea scena din diferite unghiuri, ceea ce te va ajuta când 
              vei poziționa obiectele.
            </AlertDescription>
          </Alert>
          
          <p>
            Acum că ai configurat proiectul și ai un plan clar pentru jocul tău, putem trece la crearea 
            elementelor individuale, începând cu scena spațială.
          </p>
        </>
      ),
    },
    {
      id: 'scena-spatiala',
      title: 'Crearea scenei spațiale',
      content: (
        <>
          <p className="mb-4">
            Primul pas în dezvoltarea jocului nostru este să creăm o scenă spațială captivantă, care va servi 
            drept fundal pentru aventura navei spațiale.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Pașii pentru crearea scenei spațiale:</h3>
          
          <div className="space-y-6 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 1: Configurarea cerului spațial</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Selectează obiectul "skybox" sau "sky" din panoul de obiecte</li>
                <li>În editorul de proprietăți, ajustează textura pentru a avea un aspect cosmic (ex: stele, galaxii)</li>
                <li>Poți experimenta cu diferite texturi pentru a obține aspectul dorit</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 2: Adăugarea planetelor și sateliților</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Apasă pe butonul "Add Objects" din partea de sus a interfeței</li>
                <li>În galeria de obiecte, caută în categoria "Space" și adaugă planete, sateliți sau alte corpuri cerești</li>
                <li>Poziționează-le la distanțe diferite în scenă pentru a crea impresia de adâncime</li>
                <li>Redimensionează și rotește obiectele pentru a obține aspectul dorit</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 3: Adăugarea nebuloaselor și efectelor spațiale</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Adaugă nebuloase sau nori cosmici pentru un aspect mai realist</li>
                <li>Poți folosi obiecte semitransparente pentru a crea efecte de ceață spațială</li>
                <li>Ajustează culorile obiectelor pentru a obține o paletă vizuală atrăgătoare</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 4: Configurarea luminii</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Selectează sursele de lumină din scenă</li>
                <li>Ajustează intensitatea, culoarea și direcția luminii pentru a simula iluminarea cosmică</li>
                <li>Adaugă mai multe surse de lumină dacă este necesar pentru a ilumina diferite zone ale scenei</li>
              </ul>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden mb-6">
            <img 
              src="https://www.alice.org/wp-content/uploads/2018/03/1-1.png" 
              alt="Alice 3 Space Scene Setup" 
              className="w-full h-auto"
            />
            <p className="text-center text-sm text-gray-500 mt-2">
              Exemplu de scenă spațială configurată în Alice 3
            </p>
          </div>
          
          <Alert className="mb-6">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <AlertTitle>Atenție</AlertTitle>
            <AlertDescription>
              Deși este tentant să adaugi multe elemente decorative, păstrează scena relativ simplă. 
              Prea multe obiecte pot afecta performanța jocului și pot distrage atenția de la elementele 
              principale ale gameplay-ului.
            </AlertDescription>
          </Alert>
          
          <p>
            Felicitări! Ai creat un fundal spațial impresionant pentru jocul tău. Acesta oferă contextul 
            perfect pentru aventura spațială pe care o vom dezvolta. În următoarea secțiune, vom adăuga 
            nava spațială pe care jucătorul o va controla.
          </p>
        </>
      ),
    },
    {
      id: 'nava-spatiala',
      title: 'Crearea și configurarea navei spațiale',
      content: (
        <>
          <p className="mb-4">
            Nava spațială este elementul central al jocului nostru, pe care jucătorul îl va controla. 
            Să creăm și să configurăm nava astfel încât să fie pregătită pentru gameplay.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Pașii pentru crearea navei spațiale:</h3>
          
          <div className="space-y-6 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 1: Adăugarea modelului de navă</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Apasă pe butonul "Add Objects" și navighează la categoria "Transportation" sau "Space"</li>
                <li>Alege un model de navă spațială care îți place (există mai multe opțiuni disponibile)</li>
                <li>Plasează nava în partea de jos a ecranului, centrată pe orizontală</li>
                <li>Redenumește obiectul la "NavaSpaciala" pentru a-l identifica mai ușor în cod</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 2: Ajustarea dimensiunii și orientării</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Selectează nava și ajustează dimensiunea acesteia folosind controalele de redimensionare</li>
                <li>Asigură-te că nava este orientată corect, cu partea din față îndreptată în sus (sau în direcția pe care o consideri "înainte")</li>
                <li>Folosește controalele de rotație pentru a orienta nava corect dacă este necesar</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 3: Configurarea camerei de joc</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Selectează camera din panoul de obiecte</li>
                <li>Poziționează camera astfel încât să ofere o vedere bună asupra scenei și a navei</li>
                <li>Poți alege între o vedere de sus (pentru un joc tip "top-down") sau o vedere din spate a navei</li>
                <li>Salvează această poziție a camerei ca poziția implicită pentru joc</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 4: Adăugarea efectelor vizuale</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Opțional, poți adăuga un efect de propulsie pentru navă (ex: o flacără sau un efect luminos)</li>
                <li>Poți crea acest efect folosind un obiect simplu pe care îl atașezi la partea din spate a navei</li>
                <li>Setează culoarea și dimensiunea efectului de propulsie pentru un aspect vizual atractiv</li>
              </ul>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden mb-6">
            <img 
              src="https://www.alice.org/wp-content/uploads/2018/03/4-4.png" 
              alt="Alice 3 Spacecraft Configuration" 
              className="w-full h-auto"
            />
            <p className="text-center text-sm text-gray-500 mt-2">
              Exemplu de navă spațială configurată pentru joc
            </p>
          </div>
          
          <Alert className="mb-6 bg-amber-50 border-amber-200">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            <AlertTitle className="text-amber-700">Sfat util</AlertTitle>
            <AlertDescription className="text-amber-700">
              Asigură-te că nava spațială nu este prea mare sau prea mică în raport cu restul elementelor din joc. 
              O dimensiune potrivită face jocul mai echilibrat și mai ușor de jucat.
            </AlertDescription>
          </Alert>
          
          <p>
            Excelent! Acum ai creat și configurat nava spațială care va fi protagonistul jocului tău. 
            În următoarea secțiune, vom adăuga elementele interactive: stele pentru a colecta și asteroizi de evitat.
          </p>
        </>
      ),
    },
    {
      id: 'elemente-joc',
      title: 'Adăugarea elementelor de joc: stele și asteroizi',
      content: (
        <>
          <p className="mb-4">
            Pentru a crea un joc captivant, avem nevoie de elemente interactive: stele pe care jucătorul 
            le va colecta pentru a obține puncte și asteroizi pe care va trebui să îi evite.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Adăugarea stelelor și asteroizilor:</h3>
          
          <div className="space-y-6 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 1: Crearea stelelor de colectat</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Apasă pe butonul "Add Objects" și caută obiecte precum stele, cristale sau alte elemente strălucitoare</li>
                <li>Alege un model de stea care să fie ușor vizibil pe fundalul spațial</li>
                <li>Adaugă o stea și poziționeaz-o în partea de sus a ecranului</li>
                <li>Redenumește obiectul la "SteaModel" - acesta va fi modelul pe care îl vom duplica în timpul jocului</li>
                <li>Fă steaua nevizibilă inițial (dezactivează proprietatea "isShowing")</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 2: Crearea asteroizilor</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Adaugă un model de asteroid din galeria de obiecte (caută în categoriile "Space" sau "Nature")</li>
                <li>Poziționează-l în partea de sus a ecranului, diferit față de poziția stelei</li>
                <li>Redenumește obiectul la "AsteroidModel"</li>
                <li>Fă asteroidul nevizibil inițial</li>
                <li>Opțional, poți adăuga mai multe tipuri de asteroizi cu dimensiuni diferite pentru varietate</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 3: Crearea funcțiilor pentru generarea de obiecte</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>În editorul de cod, creează o nouă metodă numită "generareSteaSiAsteroid"</li>
                <li>Această metodă va crea copii ale modelelor noastre și le va poziționa aleatoriu pe ecran</li>
                <li>Vom adăuga logica pentru a face aceste obiecte să se miște în jos spre navă</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 4: Programarea mișcării obiectelor</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Creează o metodă "miscareSteaSiAsteroid" care va controla mișcarea obiectelor generate</li>
                <li>Fă obiectele să se miște de sus în jos cu o viteză constantă</li>
                <li>Adaugă variație în viteza și direcția exactă a obiectelor pentru a face jocul mai interesant</li>
              </ul>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-gray-200 mb-6">
            <Tabs defaultValue="code1">
              <TabsList className="bg-gray-100 p-0">
                <TabsTrigger value="code1" className="data-[state=active]:bg-white">Exemplu de cod - Generare obiecte</TabsTrigger>
                <TabsTrigger value="code2" className="data-[state=active]:bg-white">Exemplu de cod - Mișcare obiecte</TabsTrigger>
              </TabsList>
              <TabsContent value="code1" className="m-0">
                <CodeBlock code={`// Metodă pentru generarea unei stele la o poziție aleatorie
Scene.generareStea() {
    // Creăm o copie a modelului de stea
    StelaCopie = SteaModel.createCopy()
    
    // Poziționăm steaua la o poziție aleatorie pe axa x, în partea de sus a ecranului
    StelaCopie.setPositionX(Math.random() * 10 - 5)  // Valoare între -5 și 5
    StelaCopie.setPositionY(5)  // Partea de sus a ecranului
    
    // Facem steaua vizibilă
    StelaCopie.setIsShowing(true)
    
    // Începem mișcarea stelei
    Scene.miscareStea(StelaCopie)
}

// Metodă similară pentru asteroizi
Scene.generareAsteroid() {
    // Similar cu generarea stelei, dar pentru asteroid
    AsteroidCopie = AsteroidModel.createCopy()
    AsteroidCopie.setPositionX(Math.random() * 10 - 5)
    AsteroidCopie.setPositionY(5)
    AsteroidCopie.setIsShowing(true)
    
    // Începem mișcarea asteroidului
    Scene.miscareAsteroid(AsteroidCopie)
}`} language="java" />
              </TabsContent>
              <TabsContent value="code2" className="m-0">
                <CodeBlock code={`// Metodă pentru mișcarea unei stele în jos
Scene.miscareStea(StelaCopie) {
    // Facem steaua să se rotească ușor pentru efect vizual
    StelaCopie.turn(UP, 0.2)
    
    // Mișcăm steaua în jos cu o viteză constantă
    StelaCopie.moveToward(DOWN, 0.5)
    
    // Verificăm dacă steaua a ieșit din ecran
    if (StelaCopie.getPositionY() < -5) {
        // Dacă a ieșit din ecran, o ștergem
        StelaCopie.removeFromScene()
    } else {
        // Altfel, continuăm mișcarea
        Scene.miscareStea(StelaCopie)
    }
}

// Metodă similară pentru mișcarea asteroidului
Scene.miscareAsteroid(AsteroidCopie) {
    // Rotim asteroidul pentru realism
    AsteroidCopie.roll(LEFT, 0.1)
    
    // Mișcăm asteroidul în jos, puțin mai repede decât stelele
    AsteroidCopie.moveToward(DOWN, 0.7)
    
    // Verificăm ieșirea din ecran
    if (AsteroidCopie.getPositionY() < -5) {
        AsteroidCopie.removeFromScene()
    } else {
        Scene.miscareAsteroid(AsteroidCopie)
    }
}`} language="java" />
              </TabsContent>
            </Tabs>
          </div>
          
          <Alert className="mb-6">
            <Info className="h-5 w-5" />
            <AlertTitle>Despre generarea obiectelor</AlertTitle>
            <AlertDescription>
              <p className="mb-2">Pentru ca jocul să fie dinamic, vom genera stele și asteroizi la intervale regulate:</p>
              <ul className="list-disc pl-5">
                <li>Folosește un timer sau o buclă pentru a apela metodele de generare la intervale aleatorii</li>
                <li>Poți crește frecvența generării obiectelor pe măsură ce jocul avansează pentru a crește dificultatea</li>
                <li>Asigură-te că ștergi obiectele care ies din ecran pentru a elibera memoria și a menține performanța</li>
              </ul>
            </AlertDescription>
          </Alert>
          
          <p>
            Excelent! Ai creat elementele interactive ale jocului tău: stele de colectat și asteroizi de evitat. 
            În următoarea secțiune, vom implementa controlul navei prin tastatură, permițând jucătorului să interacționeze 
            cu aceste elemente.
          </p>
        </>
      ),
    },
    {
      id: 'control-tastatura',
      title: 'Implementarea controlului cu tastatura',
      content: (
        <>
          <p className="mb-4">
            Pentru a face jocul interactiv, trebuie să implementăm controlul navei spațiale cu ajutorul tastaturii. 
            Acest lucru permite jucătorului să manevreze nava pentru a colecta stele și a evita asteroizi.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Controlul navei spațiale cu tastatura:</h3>
          
          <div className="space-y-6 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 1: Configurarea evenimentelor de tastatură</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Selectează tab-ul "Events" din partea de jos a interfeței</li>
                <li>Apasă pe "Add new event" pentru a crea un nou eveniment</li>
                <li>Alege "When a key is pressed" din meniul drop-down</li>
                <li>Selectează tastele pe care dorești să le folosești pentru control (ex: săgețile sau WASD)</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 2: Crearea metodelor pentru mișcare</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Creează metode separate pentru fiecare direcție de mișcare:
                  <ul>
                    <li>moveLeft() - pentru mișcare la stânga</li>
                    <li>moveRight() - pentru mișcare la dreapta</li>
                    <li>moveUp() - pentru mișcare în sus</li>
                    <li>moveDown() - pentru mișcare în jos</li>
                  </ul>
                </li>
                <li>În fiecare metodă, programează nava să se miște în direcția corespunzătoare</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 3: Asocierea evenimentelor cu metodele</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>În editorul de evenimente, asociază fiecare tastă cu metoda corespunzătoare:</li>
                <ul>
                  <li>Săgeata stânga / tasta A → moveLeft()</li>
                  <li>Săgeata dreapta / tasta D → moveRight()</li>
                  <li>Săgeata sus / tasta W → moveUp()</li>
                  <li>Săgeata jos / tasta S → moveDown()</li>
                </ul>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 4: Adăugarea limitelor de mișcare</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Modifică metodele de mișcare pentru a verifica limitele ecranului</li>
                <li>Adaugă verificări pentru a te asigura că nava nu iese din ecran</li>
                <li>Implementează o mișcare fluidă și responsivă</li>
              </ul>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-gray-200 mb-6">
            <Tabs defaultValue="code1">
              <TabsList className="bg-gray-100 p-0">
                <TabsTrigger value="code1" className="data-[state=active]:bg-white">Exemplu de cod - Configurare evenimente</TabsTrigger>
                <TabsTrigger value="code2" className="data-[state=active]:bg-white">Exemplu de cod - Metode de mișcare</TabsTrigger>
              </TabsList>
              <TabsContent value="code1" className="m-0">
                <CodeBlock code={`// Configurarea evenimentelor de tastatură

// Pentru săgeata stânga / tasta A
Events.addKeyPressEventListener(Key.LEFT, () -> {
    Scene.moveLeft();
});

// Pentru săgeata dreapta / tasta D
Events.addKeyPressEventListener(Key.RIGHT, () -> {
    Scene.moveRight();
});

// Pentru săgeata sus / tasta W
Events.addKeyPressEventListener(Key.UP, () -> {
    Scene.moveUp();
});

// Pentru săgeata jos / tasta S
Events.addKeyPressEventListener(Key.DOWN, () -> {
    Scene.moveDown();
});`} language="java" />
              </TabsContent>
              <TabsContent value="code2" className="m-0">
                <CodeBlock code={`// Metode pentru mișcarea navei cu verificarea limitelor

Scene.moveLeft() {
    // Verificăm dacă nava nu a ajuns la marginea din stânga
    if (NavaSpaciala.getPositionX() > -4) {
        // Mișcăm nava la stânga cu o distanță fixă
        NavaSpaciala.moveToward(LEFT, 0.5);
        
        // Opțional: adăugăm o mică înclinare pentru efect vizual
        NavaSpaciala.roll(LEFT, 0.1);
    }
}

Scene.moveRight() {
    // Verificăm dacă nava nu a ajuns la marginea din dreapta
    if (NavaSpaciala.getPositionX() < 4) {
        // Mișcăm nava la dreapta
        NavaSpaciala.moveToward(RIGHT, 0.5);
        
        // Înclinare pentru efect vizual
        NavaSpaciala.roll(RIGHT, 0.1);
    }
}

Scene.moveUp() {
    // Verificăm limita superioară
    if (NavaSpaciala.getPositionY() < 3) {
        NavaSpaciala.moveToward(UP, 0.5);
    }
}

Scene.moveDown() {
    // Verificăm limita inferioară
    if (NavaSpaciala.getPositionY() > -4) {
        NavaSpaciala.moveToward(DOWN, 0.5);
    }
}`} language="java" />
              </TabsContent>
            </Tabs>
          </div>
          
          <Alert className="mb-6 bg-green-50 border-green-200">
            <Info className="h-5 w-5 text-green-500" />
            <AlertTitle className="text-green-700">Testarea controlului</AlertTitle>
            <AlertDescription className="text-green-700">
              După implementarea controalelor, rulează jocul și testează mișcarea navei în toate direcțiile. 
              Verifică dacă nava se oprește la marginile ecranului și dacă mișcarea este fluidă și responsivă. 
              Ajustează valorile de viteză și limitele dacă este necesar pentru a obține o experiență de joc optimă.
            </AlertDescription>
          </Alert>
          
          <p>
            Excelent! Acum nava ta spațială poate fi controlată de jucător folosind tastatura. 
            Acest control va permite jucătorului să navigheze prin spațiu, colectând stele și evitând asteroizi. 
            În următoarea secțiune, vom implementa sistemul de coliziuni pentru a detecta când nava interacționează 
            cu alte obiecte din joc.
          </p>
        </>
      ),
    },
    {
      id: 'coliziuni',
      title: 'Implementarea sistemului de coliziuni',
      content: (
        <>
          <p className="mb-4">
            Un aspect crucial al jocului nostru este detectarea coliziunilor între navă și celelalte 
            obiecte din spațiu: stele pe care trebuie să le colectăm și asteroizi pe care trebuie să îi evităm.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Implementarea sistemului de coliziuni:</h3>
          
          <div className="space-y-6 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 1: Crearea metodei de verificare a coliziunilor</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Creează o metodă numită "verificaColiziuni" în editorul de cod</li>
                <li>Această metodă va verifica coliziunile dintre navă și toate celelalte obiecte active din scenă</li>
                <li>Metoda trebuie apelată frecvent pentru a detecta coliziunile în timp real</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 2: Detectarea coliziunilor cu stelele</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>În metoda de mișcare a stelei, adaugă o verificare pentru a determina dacă steaua atinge nava</li>
                <li>Folosește metoda "getDistanceTo" sau "isCollidingWith" pentru a verifica proximitatea</li>
                <li>Când se detectează o coliziune, crește scorul și elimină steaua din scenă</li>
                <li>Adaugă un efect vizual sau sonor pentru a marca colectarea stelei</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 3: Detectarea coliziunilor cu asteroizii</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Similar cu stelele, verifică coliziunile dintre navă și asteroizi</li>
                <li>Când nava lovește un asteroid, scade viața jucătorului sau termină jocul</li>
                <li>Adaugă un efect de explozie sau vibrație pentru a marca impactul</li>
                <li>Opțional, poți implementa un sistem de vieți multiple înainte de game over</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 4: Implementarea efectelor vizuale pentru coliziuni</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Creează efecte vizuale pentru coliziuni pozitive (colectare stele) și negative (lovire asteroizi)</li>
                <li>Poți folosi animații simple, schimbări de culoare sau particule</li>
                <li>Adaugă și efecte sonore corespunzătoare pentru a îmbunătăți experiența</li>
              </ul>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-gray-200 mb-6">
            <Tabs defaultValue="code1">
              <TabsList className="bg-gray-100 p-0">
                <TabsTrigger value="code1" className="data-[state=active]:bg-white">Exemplu de cod - Coliziuni cu stele</TabsTrigger>
                <TabsTrigger value="code2" className="data-[state=active]:bg-white">Exemplu de cod - Coliziuni cu asteroizi</TabsTrigger>
              </TabsList>
              <TabsContent value="code1" className="m-0">
                <CodeBlock code={`// În metoda de mișcare a stelei, adăugăm verificarea coliziunii
Scene.miscareStea(StelaCopie) {
    // Mișcăm steaua în jos
    StelaCopie.moveToward(DOWN, 0.5)
    
    // Verificăm coliziunea cu nava
    if (StelaCopie.getDistanceTo(NavaSpaciala) < 1.0) {
        // Coliziune detectată! Jucătorul a colectat steaua
        
        // Creștem scorul
        Scene.incrementScore(10)
        
        // Adăugăm un efect vizual
        StelaCopie.resize(1.5)  // Mărim steaua temporar
        StelaCopie.setOpacity(0.5)  // Facem steaua semitransparentă
        
        // Sunet de colectare (dacă ai adăugat un sunet)
        Scene.playStelaSunet()
        
        // Eliminăm steaua din scenă
        StelaCopie.removeFromScene()
        
        return  // Ieșim din metodă
    }
    
    // Verificăm dacă steaua a ieșit din ecran
    if (StelaCopie.getPositionY() < -5) {
        StelaCopie.removeFromScene()
    } else {
        // Continuăm mișcarea
        Scene.miscareStea(StelaCopie)
    }
}`} language="java" />
              </TabsContent>
              <TabsContent value="code2" className="m-0">
                <CodeBlock code={`// În metoda de mișcare a asteroidului, verificăm coliziunea
Scene.miscareAsteroid(AsteroidCopie) {
    // Mișcăm asteroidul în jos
    AsteroidCopie.moveToward(DOWN, 0.7)
    
    // Verificăm coliziunea cu nava
    if (AsteroidCopie.getDistanceTo(NavaSpaciala) < 1.2) {
        // Coliziune cu asteroid! Jucătorul este lovit
        
        // Scădem viața sau terminăm jocul
        Scene.decrementLives()
        
        // Verificăm dacă jucătorul mai are vieți
        if (Scene.getLives() <= 0) {
            // Game over
            Scene.gameOver()
        } else {
            // Jucătorul mai are vieți, continuăm jocul
            
            // Efect de impact pentru navă
            NavaSpaciala.shake(0.5, 0.5, 0.5)  // Facem nava să vibreze
            NavaSpaciala.setOpacity(0.5)  // Facem nava temporar semitransparentă
            
            // După o scurtă perioadă, revenim la normal
            Scene.schedule(() -> {
                NavaSpaciala.setOpacity(1.0)
            }, 0.5)
        }
        
        // Efect de explozie pentru asteroid
        AsteroidCopie.resize(2.0)
        AsteroidCopie.setOpacity(0.3)
        
        // Sunet de impact
        Scene.playImpactSunet()
        
        // Eliminăm asteroidul
        AsteroidCopie.removeFromScene()
        
        return
    }
    
    // Verificăm dacă asteroidul a ieșit din ecran
    if (AsteroidCopie.getPositionY() < -5) {
        AsteroidCopie.removeFromScene()
    } else {
        // Continuăm mișcarea
        Scene.miscareAsteroid(AsteroidCopie)
    }
}`} language="java" />
              </TabsContent>
            </Tabs>
          </div>
          
          <Alert className="mb-6">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <AlertTitle>Atenție la performanță</AlertTitle>
            <AlertDescription>
              Verificarea coliziunilor poate fi intensivă din punct de vedere computațional, mai ales dacă 
              ai multe obiecte în scenă. Optimizează codul verificând doar obiectele care sunt aproape de 
              navă sau folosind tehnici precum "bounding box" pentru a reduce complexitatea calculelor.
            </AlertDescription>
          </Alert>
          
          <p>
            Felicitări! Ai implementat un sistem de coliziuni funcțional care detectează interacțiunile dintre 
            nava spațială și celelalte obiecte din joc. Acest sistem este esențial pentru gameplay-ul jocului, 
            permițând jucătorului să colecteze stele și să evite asteroizi. În următoarea secțiune, vom implementa 
            un sistem de scor pentru a ține evidența progresului jucătorului.
          </p>
        </>
      ),
    },
    {
      id: 'punctaj',
      title: 'Implementarea sistemului de scor',
      content: (
        <>
          <p className="mb-4">
            Pentru a da jucătorului un obiectiv clar și pentru a măsura progresul, vom implementa un sistem 
            de scor și, opțional, un sistem de vieți.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Implementarea sistemului de scor și vieți:</h3>
          
          <div className="space-y-6 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 1: Crearea variabilelor pentru scor și vieți</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>În editorul de cod, definește variabile globale pentru scor și vieți</li>
                <li>Inițializează scorul cu 0 și vieți cu un număr adecvat (ex: 3)</li>
                <li>Creează metode pentru a incrementa și decrementa aceste valori</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 2: Afișarea scorului și vieților pe ecran</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Adaugă un text 3D în colțul ecranului pentru a afișa scorul curent</li>
                <li>Actualizează acest text ori de câte ori se schimbă scorul</li>
                <li>Pentru vieți, poți afișa un număr sau simboluri grafice (ex: nave mici)</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 3: Implementarea condițiilor de victorie</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Definește un scor țintă pentru victorie (ex: 100 de puncte)</li>
                <li>Verifică constant dacă scorul a atins acest prag</li>
                <li>Când se atinge scorul țintă, declanșează secvența de victorie</li>
                <li>Afișează un mesaj de felicitare și oprește jocul sau treci la nivelul următor</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2">Pasul 4: Implementarea condițiilor de înfrângere</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Verifică când numărul de vieți ajunge la 0</li>
                <li>Afișează un mesaj de game over</li>
                <li>Oferă opțiunea de a reporni jocul</li>
                <li>Opțional, afișează scorul final și un mesaj de încurajare</li>
              </ul>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-gray-200 mb-6">
            <Tabs defaultValue="code1">
              <TabsList className="bg-gray-100 p-0">
                <TabsTrigger value="code1" className="data-[state=active]:bg-white">Exemplu de cod - Variabile și metode</TabsTrigger>
                <TabsTrigger value="code2" className="data-[state=active]:bg-white">Exemplu de cod - Condiții de final</TabsTrigger>
              </TabsList>
              <TabsContent value="code1" className="m-0">
                <CodeBlock code={`// Definirea variabilelor pentru scor și vieți
Scene.initialize {
    // Inițializăm variabilele la începutul jocului
    Scene.score = 0
    Scene.lives = 3
    
    // Actualizăm textul scorului
    ScoreText.setValue("SCOR: 0")
    
    // Configurăm indicatorul de vieți
    Scene.updateLivesDisplay()
}

// Metoda pentru incrementarea scorului
Scene.incrementScore(points) {
    // Adăugăm punctele la scor
    Scene.score = Scene.score + points
    
    // Actualizăm afișajul
    ScoreText.setValue("SCOR: " + Scene.score)
    
    // Verificăm condiția de victorie
    if (Scene.score >= 100) {
        Scene.victory()
    }
}

// Metoda pentru decrementarea vieților
Scene.decrementLives() {
    // Scădem o viață
    Scene.lives = Scene.lives - 1
    
    // Actualizăm afișajul
    Scene.updateLivesDisplay()
    
    // Verificăm condiția de înfrângere
    if (Scene.lives <= 0) {
        Scene.gameOver()
    }
}

// Metoda pentru actualizarea afișajului de vieți
Scene.updateLivesDisplay() {
    // Actualizăm textul sau simbolurile pentru vieți
    LivesText.setValue("VIEȚI: " + Scene.lives)
}`} language="java" />
              </TabsContent>
              <TabsContent value="code2" className="m-0">
                <CodeBlock code={`// Implementarea condițiilor de final

// Victoria - când jucătorul atinge scorul țintă
Scene.victory() {
    // Oprim generarea de noi obiecte
    Scene.stopAllGeneration()
    
    // Afișăm mesajul de victorie
    VictoryMessage.setIsShowing(true)
    VictoryMessage.setValue("FELICITĂRI! AI CÂȘTIGAT!")
    
    // Adăugăm efecte vizuale de victorie
    Scene.playVictoryEffects()
    
    // Opțional: afișăm scorul final
    FinalScoreText.setValue("Scor final: " + Scene.score)
    FinalScoreText.setIsShowing(true)
    
    // Adăugăm un buton pentru a reporni jocul
    RestartButton.setIsShowing(true)
}

// Înfrângerea - când jucătorul pierde toate viețile
Scene.gameOver() {
    // Oprim generarea de noi obiecte
    Scene.stopAllGeneration()
    
    // Afișăm mesajul de game over
    GameOverMessage.setIsShowing(true)
    GameOverMessage.setValue("GAME OVER")
    
    // Adăugăm efecte vizuale de înfrângere
    Scene.playDefeatEffects()
    
    // Afișăm scorul final
    FinalScoreText.setValue("Scor final: " + Scene.score)
    FinalScoreText.setIsShowing(true)
    
    // Adăugăm un buton pentru a reporni jocul
    RestartButton.setIsShowing(true)
}

// Metoda pentru repornirea jocului
Scene.restartGame() {
    // Resetăm variabilele
    Scene.score = 0
    Scene.lives = 3
    
    // Actualizăm afișajele
    ScoreText.setValue("SCOR: 0")
    Scene.updateLivesDisplay()
    
    // Ascundem mesajele de final
    VictoryMessage.setIsShowing(false)
    GameOverMessage.setIsShowing(false)
    FinalScoreText.setIsShowing(false)
    RestartButton.setIsShowing(false)
    
    // Repornim generarea de obiecte
    Scene.startAllGeneration()
}`} language="java" />
              </TabsContent>
            </Tabs>
          </div>
          
          <Alert className="mb-6 bg-amber-50 border-amber-200">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            <AlertTitle className="text-amber-700">Sfat util</AlertTitle>
            <AlertDescription className="text-amber-700">
              Pentru un joc mai interesant, poți implementa un sistem de dificultate crescătoare. 
              Pe măsură ce scorul crește, poți mări viteza de mișcare a asteroizilor, poți reduce 
              intervalul de generare a obiectelor sau poți introduce noi tipuri de obstacole.
            </AlertDescription>
          </Alert>
          
          <p>
            Excelent! Ai implementat un sistem complet de scor și vieți pentru jocul tău spațial. 
            Acesta oferă jucătorului un obiectiv clar și feedback despre progresul său. În ultima secțiune, 
            vom explora câteva idei și provocări suplimentare pentru a îmbunătăți și extinde jocul.
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
            Felicitări pentru finalizarea jocului spațial de bază! Acum ai un joc funcțional în care jucătorul 
            controlează o navă spațială, colectează stele și evită asteroizi. Pentru a dezvolta jocul mai departe 
            și a-ți extinde abilitățile în Alice 3, iată câteva provocări și idei suplimentare.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Idei pentru a îmbunătăți jocul:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold text-pink-700 mb-2">1. Adaugă power-ups</h4>
                <p>Creează obiecte speciale care oferă avantaje temporare când sunt colectate: invincibilitate, viteza dublă, magnet pentru stele, sau tir pentru distrugerea asteroizilor.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold text-pink-700 mb-2">2. Implementează niveluri</h4>
                <p>Creează mai multe niveluri cu dificultate crescătoare. Fiecare nivel poate avea un aspect vizual diferit și noi provocări, cum ar fi tipuri de asteroizi mai rapizi sau labirinturi.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold text-pink-700 mb-2">3. Adaugă inamici</h4>
                <p>Introduce nave inamice care urmăresc jucătorul sau trag cu proiectile. Acest lucru adaugă o nouă dimensiune strategică jocului.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold text-pink-700 mb-2">4. Creează un meniu principal</h4>
                <p>Adaugă un ecran de start cu opțiuni pentru a începe jocul, a vedea instrucțiunile sau a modifica setările, cum ar fi dificultatea.</p>
              </CardContent>
            </Card>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">Provocări avansate:</h3>
          
          <div className="space-y-4 mb-6">
            <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
              <h4 className="font-semibold text-pink-700 mb-2">Implementează un sistem de upgrade</h4>
              <p>Permite jucătorului să-și îmbunătățească nava spațială folosind punctele colectate. Upgrade-urile pot include viteza crescută, scuturi, sau abilități speciale.</p>
            </div>
            
            <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
              <h4 className="font-semibold text-pink-700 mb-2">Creează efecte vizuale avansate</h4>
              <p>Adaugă efecte speciale precum urme de particule în spatele navei, explozii spectaculoase pentru asteroizi, sau efecte de lumină pentru colectarea stelelor.</p>
            </div>
            
            <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
              <h4 className="font-semibold text-pink-700 mb-2">Adaugă un boss final</h4>
              <p>Creează un asteroid uriaș sau o navă inamică puternică care apare la finalul nivelului și care necesită o strategie specială pentru a fi învins.</p>
            </div>
            
            <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
              <h4 className="font-semibold text-pink-700 mb-2">Implementează o poveste</h4>
              <p>Adaugă o narațiune care se desfășoară pe măsură ce jucătorul avansează. Poți include secvențe cinematice scurte între niveluri pentru a dezvolta povestea.</p>
            </div>
          </div>
          
          <Alert className="mb-6">
            <Info className="h-5 w-5" />
            <AlertTitle>Partajarea jocului</AlertTitle>
            <AlertDescription>
              După ce ai finalizat jocul, poți să îl salvezi și să îl distribui prietenilor și 
              familiei. Proiectele Alice 3 pot fi exportate ca fișiere .a3p, care pot fi deschise 
              de oricine are Alice 3 instalat. Poți de asemenea să înregistrezi un video al jocului tău 
              pentru a-l împărtăși online.
            </AlertDescription>
          </Alert>
          
          <h3 className="text-xl font-semibold mb-3">Sfaturi pentru optimizarea performanței:</h3>
          
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-6">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Limitează numărul de obiecte active</strong> - Șterge obiectele care ies din ecran pentru a elibera memorie.</li>
              <li><strong>Simplifică verificarea coliziunilor</strong> - Verifică doar obiectele care sunt aproape de navă.</li>
              <li><strong>Utilizează eficient resursele</strong> - Refolosește obiectele în loc să creezi altele noi (object pooling).</li>
              <li><strong>Testează pe diferite calculatoare</strong> - Asigură-te că jocul rulează fluid pe diverse configurații hardware.</li>
            </ul>
          </div>
          
          <p>
            Acestea sunt doar câteva idei pentru a-ți extinde și îmbunătăți jocul spațial. Fii creativ și 
            experimentează cu diferite funcționalități ale Alice 3. Fiecare provocare pe care o abordezi te va 
            ajuta să-ți dezvolți abilitățile de programare și gândire computațională.
          </p>
          
          <div className="text-center mt-8">
            <h3 className="text-xl font-bold text-pink-700 mb-2">Felicitări pentru crearea primului tău joc în Alice 3!</h3>
            <p>
              Ai învățat să creezi un joc spațial interactiv, implementând controale, coliziuni, și un sistem de scor. 
              Aceste concepte fundamentale te vor ajuta să creezi jocuri și mai complexe și captivante în viitor.
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <LessonLayout
      courseId="alice3"
      sessionId="2"
      title="Cursa Spațială"
      subtitle="Dezvoltă un joc simplu în care controlezi o navă spațială într-un mediu 3D captivant."
      heroColor="bg-gradient-to-r from-pink-500 to-pink-400"
      previousLesson={{
        title: "Lecția 1: Aventură în Pădure",
        path: "/alice3/session1adventure"
      }}
      nextLesson={undefined}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session2SpaceGame;
