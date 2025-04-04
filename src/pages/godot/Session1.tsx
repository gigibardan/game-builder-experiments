
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session1 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'ce-este-godot', title: 'Ce este Godot Engine?' },
    { id: 'instalare', title: 'Instalarea Godot' },
    { id: 'interfata', title: 'Interfața Godot' },
    { id: 'primul-proiect', title: 'Primul proiect' },
    { id: 'scene-nodes', title: 'Scene și Noduri' },
    { id: 'exercitii', title: 'Exerciții' },
  ];

  const resources = [
    { title: 'Documentația oficială Godot', url: 'https://docs.godotengine.org/en/stable/' },
    { title: 'Site-ul oficial Godot', url: 'https://godotengine.org/' },
    { title: 'Godot Asset Library', url: 'https://godotengine.org/asset-library/asset' },
    { title: 'Comunitatea Godot pe Discord', url: 'https://discord.gg/4JBkykG' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>
          <p className="mb-4">
            Bine ai venit la prima lecție de dezvoltare de jocuri cu Godot Engine! În această sesiune, vom descoperi 
            ce este Godot, vom învăța cum să îl instalăm, vom explora interfața și vom crea primul nostru proiect simplu.
          </p>
          
          <p className="mb-6">
            Godot este un motor de jocuri gratuit și open-source care îți permite să creezi jocuri 2D și 3D 
            pentru multiple platforme. Este perfect atât pentru începători, cât și pentru dezvoltatorii 
            experimentați datorită simplității sale și a puterii remarcabile.
          </p>
          
          <LearningOutcome items={[
            "Ce este Godot Engine și de ce să îl folosești",
            "Cum să instalezi Godot pe calculatorul tău",
            "Să înțelegi interfața Godot și componentele sale principale",
            "Conceptele fundamentale: scene și noduri în Godot",
            "Cum să creezi și să salvezi primul tău proiect Godot"
          ]} />
        </>
      )
    },
    {
      id: 'ce-este-godot',
      title: 'Ce este Godot Engine?',
      content: (
        <>
          <p className="mb-4">
            Godot Engine este un motor de jocuri cross-platform, open-source, creat pentru a fi accesibil 
            dezvoltatorilor de toate nivelurile. De la hobby la profesionist, Godot oferă unelte pentru a crea 
            jocuri 2D și 3D cu ușurință.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">Avantaje Godot</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Complet gratuit și open-source</li>
                <li>Ușor de învățat și utilizat</li>
                <li>Dimensiune mică a executabilului (~40MB)</li>
                <li>Suport excelent pentru 2D și 3D</li>
                <li>Editor intuitiv cu multe unelte încorporate</li>
                <li>GDScript - limbaj simplu, similar cu Python</li>
                <li>Suport pentru alte limbaje (C#, C++, Visual Scripting)</li>
                <li>Exportă jocuri pentru multiple platforme</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">Jocuri notabile create cu Godot</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Sonic Colors: Ultimate</li>
                <li>Ex Zodiac</li>
                <li>The Interactive Adventures of Dog Mendonça & Pizzaboy</li>
                <li>Kingdoms of the Dump</li>
                <li>Cassette Beasts</li>
                <li>HAAK</li>
                <li>Resolutiion</li>
                <li>TailQuest: Defense</li>
              </ul>
            </div>
          </div>
          
          <ImageExample 
            src="https://godotengine.org/assets/press/logo_large_color_dark.png" 
            alt="Logo-ul Godot Engine" 
            caption="Godot Engine - un motor de jocuri open-source puternic"
          />
        </>
      )
    },
    {
      id: 'instalare',
      title: 'Instalarea Godot',
      content: (
        <>
          <p className="mb-4">
            Godot este ușor de instalat și nu necesită o configurare complicată. Urmează acești pași simpli pentru 
            a instala Godot pe sistemul tău:
          </p>
          
          <StepItem number={1} title="Descarcă Godot">
            <p>Accesează site-ul oficial Godot la adresa <a href="https://godotengine.org/download" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">godotengine.org/download</a> și alege versiunea potrivită pentru sistemul tău:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Godot 4.x (cea mai recentă versiune, recomandată)</li>
              <li>Alege între Standard sau .NET (dacă dorești să folosești C#)</li>
              <li>Selectează sistemul de operare: Windows, macOS, sau Linux</li>
            </ul>
          </StepItem>
          
          <StepItem number={2} title="Instalare pe Windows">
            <p>Pe Windows, Godot nu necesită instalare:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1 ml-4">
              <li>Descarcă fișierul ZIP și dezarhivează-l într-un folder la alegere</li>
              <li>Deschide folderul și localizează fișierul executabil (Godot_v4.x.x.exe)</li>
              <li>Dublu-click pe executabil pentru a lansa Godot</li>
              <li>Opțional: Creează o scurtătură pe desktop pentru acces rapid</li>
            </ol>
          </StepItem>
          
          <StepItem number={3} title="Instalare pe macOS">
            <ol className="list-decimal list-inside mt-2 space-y-1 ml-4">
              <li>Descarcă fișierul .dmg sau .zip</li>
              <li>Dacă ai descărcat .dmg, montează-l și trage aplicația Godot în folderul Applications</li>
              <li>Dacă ai descărcat .zip, dezarhivează-l și mută aplicația Godot în folderul Applications</li>
              <li>La prima rulare, ține apăsat Control și fă click pe icon pentru a permite executarea</li>
            </ol>
          </StepItem>
          
          <StepItem number={4} title="Instalare pe Linux">
            <ol className="list-decimal list-inside mt-2 space-y-1 ml-4">
              <li>Descarcă fișierul .tar.xz pentru Linux</li>
              <li>Dezarhivează fișierul folosind un manager de arhive sau comanda: <code>tar -xJf Godot_v4.x.x.tar.xz</code></li>
              <li>Fă fișierul executabil cu comanda: <code>chmod +x Godot_v4.x.x</code></li>
              <li>Rulează Godot cu: <code>./Godot_v4.x.x</code></li>
            </ol>
          </StepItem>
          
          <InfoBox title="Notă importantă" icon="info" variant="primary">
            <p>Este recomandat să folosești versiunea standard Godot 4.x pentru începători, deoarece este mai stabilă și conține toate funcționalitățile necesare pentru a învăța dezvoltarea de jocuri.</p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'interfata',
      title: 'Interfața Godot',
      content: (
        <>
          <p className="mb-4">
            La prima lansare a Godot, vei vedea Managerul de Proiecte. După ce creezi sau deschizi un proiect, 
            vei fi întâmpinat de editorul principal, care conține mai multe zone importante:
          </p>
          
          <ImageExample 
            src="https://docs.godotengine.org/en/stable/_images/editor_ui_intro_editor_interface_overview.webp" 
            alt="Interfața principală Godot" 
            caption="Interfața principală a editorului Godot"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-2">1. Managerul de Scene</h3>
              <p>Afișează structura ierarhică a scenei curente. Aici poți adăuga, șterge și organiza nodurile care compun scena ta.</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-2">2. Vizualizarea 3D/2D</h3>
              <p>Zona principală de editare unde poți vizualiza și manipula direct elementele din scenă. Aceasta se schimbă în funcție de tipul de proiect (2D sau 3D).</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-2">3. Panoul de Setări</h3>
              <p>Afișează și permite editarea proprietăților nodului selectat. Este împărțit în categorii pentru o navigare mai ușoară.</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-2">4. Sistemul de Fișiere</h3>
              <p>Arată toate fișierele și resursele din proiectul tău. De aici poți gestiona scene, scripturi, imagini, sunete și alte resurse.</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-2">5. Bara de Instrumente</h3>
              <p>Conține unelte pentru a manipula scena și elementele vizuale. Instrumentele disponibile variază în funcție de tipul de editare (2D/3D).</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-2">6. Panoul de Jos</h3>
              <p>Conține consola pentru debugging, lista de erori, și alte funcții utile în timpul dezvoltării.</p>
            </div>
          </div>
          
          <InfoBox title="Sfat" icon="star" variant="secondary">
            <p>Poți personaliza layout-ul interfeței Godot prin tragerea și redimensionarea panourilor după preferințele tale. Dacă vreodată pierzi aranjamentul original, poți reseta layout-ul din meniul Editor &gt; Editor Layout &gt; Default.</p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'primul-proiect',
      title: 'Primul proiect Godot',
      content: (
        <>
          <p className="mb-4">
            Acum că am explorat interfața Godot, să creăm primul nostru proiect! Vom crea un proiect simplu 2D 
            pentru a ne familiariza cu fluxul de lucru de bază.
          </p>
          
          <StepItem number={1} title="Crearea unui nou proiect">
            <ol className="list-decimal list-inside mt-2 space-y-2 ml-4">
              <li>Deschide Godot și vei vedea Managerul de Proiecte</li>
              <li>Apasă pe butonul "Nou Proiect" din dreapta</li>
              <li>Alege un nume pentru proiect (ex: "PrimulMeuJoc")</li>
              <li>Selectează o locație pe disc pentru a salva proiectul</li>
              <li>Alege Renderizatorul: "Compatibilitate" este bun pentru începători</li>
              <li>Selectează "2D" ca tip de proiect</li>
              <li>Apasă pe "Creează Folder" și apoi pe "Creează Proiect"</li>
            </ol>
          </StepItem>
          
          <ImageExample 
            src="https://docs.godotengine.org/en/stable/_images/project_manager_01.webp" 
            alt="Managerul de proiecte Godot" 
            caption="Managerul de proiecte Godot - aici poți crea proiecte noi sau deschide proiecte existente"
          />
          
          <StepItem number={2} title="Crearea primei scene">
            <p>După ce proiectul s-a deschis, vei vedea un ecran gol. Vom crea prima noastră scenă:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2 ml-4">
              <li>Apasă pe butonul "2D Scene" din colțul din stânga sus (sau mergi la Scene &gt; New Scene)</li>
              <li>Vei observa că un nod "Node2D" a fost adăugat în ierarhia de scene din stânga</li>
              <li>Fă click dreapta pe acest nod și selectează "Rename"</li>
              <li>Redenumește-l "Joc" sau "Main" pentru claritate</li>
            </ol>
          </StepItem>
          
          <StepItem number={3} title="Adăugarea elementelor în scenă">
            <p>Acum vom adăuga primul nostru element vizibil în scenă:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2 ml-4">
              <li>Fă click dreapta pe nodul principal și selectează "Add Child Node"</li>
              <li>Caută "Sprite2D" și selectează-l</li>
              <li>Observă că a fost adăugat un Sprite2D ca și copil al nodului principal</li>
              <li>În panoul din dreapta (Inspector), vei vedea proprietățile Sprite2D</li>
              <li>Apasă pe "Texture" și apoi pe butonul "Empty" pentru a adăuga o textură</li>
              <li>Selectează "Load" și alege imaginea icon.svg care vine cu Godot</li>
              <li>Vei vedea acum o imagine cu robotul Godot în centrul scenei</li>
            </ol>
          </StepItem>
          
          <StepItem number={4} title="Salvarea scenei">
            <p>După ce am adăugat elementele de bază, trebuie să salvăm scena:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2 ml-4">
              <li>Apasă Ctrl+S (sau Cmd+S pe Mac) sau mergi la Scene &gt; Save Scene</li>
              <li>Alege un nume pentru scenă (ex: "main.tscn") și o locație în proiect</li>
              <li>Apasă pe "Salvează"</li>
            </ol>
          </StepItem>
          
          <StepItem number={5} title="Setarea scenei principale">
            <p>Pentru ca jocul să știe cu ce scenă să înceapă, trebuie să setăm scena noastră ca scenă principală:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2 ml-4">
              <li>Mergi la Project &gt; Project Settings</li>
              <li>În fereastra care se deschide, selectează tab-ul "General"</li>
              <li>Mergi la Application &gt; Run &gt; Main Scene</li>
              <li>Apasă pe butonul din dreapta și selectează scena ta (main.tscn)</li>
              <li>Apasă "OK" pentru a închide fereastra de setări</li>
            </ol>
          </StepItem>
          
          <StepItem number={6} title="Rularea proiectului">
            <p>Acum putem rula proiectul pentru a vedea rezultatul:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2 ml-4">
              <li>Apasă butonul "Play" din colțul din dreapta sus</li>
              <li>Sau apasă F5 pe tastatură</li>
              <li>Vei vedea o fereastră nouă cu jocul tău rulând</li>
              <li>În acest moment, vei vedea doar sprite-ul robotului Godot pe ecran</li>
            </ol>
          </StepItem>
          
          <InfoBox title="Felicitări!" icon="success" variant="success">
            <p>Tocmai ai creat primul tău proiect Godot! Deși este simplu, acesta conține toate elementele de bază ale unui joc: o scenă, un nod vizual și structura necesară pentru a rula.</p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'scene-nodes',
      title: 'Scene și Noduri în Godot',
      content: (
        <>
          <p className="mb-4">
            Înainte de a continua, este important să înțelegem două concepte fundamentale în Godot: 
            scenele și nodurile. Aceste concepte stau la baza întregii arhitecturi a motorului.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">Ce sunt Nodurile?</h3>
              <p className="mb-3">
                Nodurile sunt blocurile de construcție elementare în Godot. Fiecare nod are un scop specific și poate 
                face anumite lucruri. Exemple de noduri:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Sprite2D - afișează o imagine</li>
                <li>Label - afișează text</li>
                <li>Button - un buton pe care jucătorul poate apăsa</li>
                <li>AudioStreamPlayer - redă sunete</li>
                <li>Camera2D - definește ce vede jucătorul</li>
                <li>CollisionShape2D - definește forma pentru detectarea coliziunilor</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">Ce sunt Scenele?</h3>
              <p className="mb-3">
                Scenele sunt colecții de noduri organizate într-o structură ierarhică (arbore). O scenă are întotdeauna 
                un nod rădăcină și apoi noduri copil.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Scenele pot fi salvate ca fișiere .tscn</li>
                <li>Scenele pot fi instanțiate de mai multe ori</li>
                <li>O scenă poate fi inclusă în alte scene (sub-scene)</li>
                <li>Exemplu de scene: nivel, personaj, inamici, meniu, etc.</li>
                <li>Scenele încurajează reutilizarea și modularitatea</li>
              </ul>
            </div>
          </div>
          
          <p className="mb-4">
            Gândește-te la noduri ca la piese LEGO individuale, fiecare cu rolul său specific. Scenele sunt 
            construcțiile mai mari pe care le asamblezi folosind aceste piese.
          </p>
          
          <ImageExample 
            src="https://docs.godotengine.org/en/stable/_images/scene_tree_example.webp" 
            alt="Exemplu de ierarhie de noduri în Godot" 
            caption="Exemplu de ierarhie de noduri într-o scenă Godot"
          />
          
          <InfoBox title="Exemplu practic" icon="book" variant="primary">
            <p className="mb-2">Pentru a înțelege mai bine, gândește-te la un joc de platformă:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Scena Nivel:</strong> Un nod rădăcină Node2D care conține tot nivelul</li>
              <li><strong>Scena Personaj:</strong> Un nod CharacterBody2D cu sprite-uri, animații, coliziuni</li>
              <li><strong>Scena Inamici:</strong> Similar cu personajul, dar cu comportament diferit</li>
              <li><strong>Scena UI:</strong> Un nod Control cu etichete, butoane, scoruri</li>
            </ul>
            <p className="mt-2">Fiecare dintre aceste scene poate fi dezvoltată independent și apoi combinată în jocul final.</p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'exercitii',
      title: 'Exerciții',
      content: (
        <>
          <p className="mb-4">
            Hai să punem în practică ceea ce am învățat cu câteva exerciții simple:
          </p>
          
          <Challenge title="Modifică sprite-ul" difficulty="easy">
            <p className="mb-3">Schimbă robotul Godot cu o altă imagine:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Descarcă o imagine simplă (PNG, JPG) de pe internet sau creează una tu</li>
              <li>În Godot, fă click dreapta în panoul FileSystem și selectează "Import..."</li>
              <li>Navighează și selectează imaginea descărcată</li>
              <li>Selectează Sprite2D-ul din scena ta</li>
              <li>În Inspector, schimbă Texture cu imaginea importată</li>
              <li>Ajustează Position și Scale pentru a poziționa corect imaginea</li>
            </ol>
          </Challenge>
          
          <Challenge title="Adaugă text pe ecran" difficulty="medium">
            <p className="mb-3">Adaugă un text care să afișeze "Primul meu joc Godot!":</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Fă click dreapta pe nodul principal și selectează "Add Child Node"</li>
              <li>Caută și adaugă un nod "Label"</li>
              <li>În Inspector, găsește proprietatea "Text" și schimb-o în "Primul meu joc Godot!"</li>
              <li>Ajustează Position pentru a-l poziționa în partea de sus a ecranului</li>
              <li>Experimentează cu proprietățile Font, FontSize și color pentru a personaliza textul</li>
            </ol>
          </Challenge>
          
          <Challenge title="Adaugă un fundal colorat" difficulty="medium">
            <p className="mb-3">Schimbă fundalul implicit (gri) cu o culoare veselă:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Fă click dreapta pe nodul principal și selectează "Add Child Node"</li>
              <li>Caută și adaugă un nod "ColorRect"</li>
              <li>În Inspector, setează proprietatea "Layout/Anchors" la "Full Rect" pentru a umple tot ecranul</li>
              <li>Asigură-te că nodul ColorRect este primul copil (trage-l în partea de sus a ierarhiei)</li>
              <li>În Inspector, găsește "Color" și schimbă culoarea după preferință</li>
              <li>Rulează jocul pentru a vedea rezultatul</li>
            </ol>
          </Challenge>
          
          <InfoBox title="Sfat pentru exerciții" icon="info" variant="secondary">
            <p>Nu te descuraja dacă nu reușești din prima încercare. Experimentarea și greșelile sunt parte din procesul de învățare. Godot oferă undo (Ctrl+Z) și multe alte funcții pentru a te ajuta. Obiectivul principal este să te familiarizezi cu interfața și conceptele de bază.</p>
          </InfoBox>
          
          <div className="mt-8 bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg border border-indigo-200">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">Concluzie</h3>
            <p className="mb-3">
              Felicitări! Ai parcurs cu succes prima lecție despre Godot Engine. Acum ai o bază solidă pentru 
              a continua explorarea acestui motor de jocuri incredibil.
            </p>
            <p className="mb-3">
              În următoarea lecție, vom învăța despre GDScript, limbajul de programare folosit în Godot, 
              și vom începe să adăugăm interactivitate jocurilor noastre.
            </p>
            <p>
              Nu uita să experimentezi pe cont propriu și să încerci toate exercițiile propuse pentru a-ți 
              consolida cunoștințele.
            </p>
          </div>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="godot"
      sessionId="1"
      title="Introducere în Godot Engine"
      subtitle="Primii pași în dezvoltarea de jocuri cu Godot și înțelegerea interfeței"
      heroColor="bg-gradient-to-r from-indigo-700 to-indigo-500"
      nextLesson={{
        title: "Sesiunea 2: Concepte de bază în GDScript",
        path: "/godot/session2"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session1;
