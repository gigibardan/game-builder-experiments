
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session4CityRunner = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'personaje', title: 'Personaje' },
    { id: 'controlul-pisicii', title: 'Controlul pisicii' },
    { id: 'animarea-cladirilor', title: 'Animarea clădirilor' },
    { id: 'diamante', title: 'Crearea diamantelor' },
    { id: 'bombe', title: 'Crearea bombelor' },
    { id: 'linie-margine', title: 'Configurarea liniei' },
    { id: 'testare', title: 'Testare și îmbunătățiri' },
    { id: 'concluzii', title: 'Concluzii' },
  ];

  const resources = [
    { title: 'Proiect final', url: 'https://scratch.mit.edu/projects/1144450643' },
    { title: 'Proiect starter', url: 'https://scratch.mit.edu/projects/1144454974/editor/' },
    { title: 'Documentație Scratch', url: 'https://scratch.mit.edu/ideas' },
  ];

  return (
    <LessonLayout
      courseId="scratch"
      sessionId="4"
      title="Jocul City Runner"
      subtitle="Un joc captivant în care controlezi o pisică ce aleargă prin oraș, colectând diamante și evitând bombe"
      heroColor="bg-gradient-to-r from-amber-500 to-amber-600"
      previousLesson={{
        title: "Lecția anterioară",
        path: "/scratch/session3motoracer"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/scratch/session5stitchbeach"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
    >
      <div id="introducere">
        <h2 className="text-2xl font-bold mb-4">Introducere</h2>
        <p className="mb-4">
          Într-un oraș plin de aventuri, o pisică agilă se aventurează într-o cursă contra cronometru! 
          Personajul nostru principal trebuie să își demonstreze îndemânarea deplasându-se în sus și în jos 
          pentru a colecta diamantele prețioase care îi ies în cale, evitând totodată bombele periculoase.
        </p>

        <p className="mb-6">
          Jocul "City Runner" combină elemente de coordonare, reflexe rapide și strategie într-o experiență captivantă, 
          perfectă pentru a învăța concepte importante de programare în Scratch. Vei crea animații, vei controla personaje, 
          vei genera elemente aleatorii și vei gestiona un sistem de punctaj.
        </p>
        
        <ImageExample 
          src="https://elearning.techminds-academy.ro/assets/images/scratchproiect3preview.png" 
          alt="Preview City Runner" 
          caption="Previzualizare joc City Runner"
        />

        <LearningOutcome items={[
          "Controlul personajului cu tastele de navigare",
          "Animarea personajului prin schimbarea costumelor",
          "Generarea de elemente aleatorii care se mișcă",
          "Detectarea coliziunilor între personaje",
          "Gestionarea unui sistem de scor cu recompense și penalizări"
        ]} />

        <div className="mt-6 bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
          <h3 className="font-bold text-lg mb-2">Proiect Starter</h3>
          <p className="mb-4">
            Pentru a crea acest joc mai ușor, am pregătit un proiect starter cu personajul principal 
            și câteva elemente deja adăugate. Tot ce trebuie să faci este să adaugi codul și să completezi proiectul!
          </p>
          <a 
            href="https://scratch.mit.edu/projects/1144454974/editor/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition-colors"
          >
            Deschide proiectul starter
          </a>
          <p className="mt-3 text-sm text-amber-700">
            Sfat: Apasă butonul "Vezi în interior" pentru a putea edita proiectul, apoi "Remixează" pentru a salva propria versiune!
          </p>
        </div>
      </div>

      <div id="personaje" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Personajele jocului</h2>
        <p className="mb-4">
          Proiectul starter conține deja pisica principală și câteva elemente de decor. 
          Va trebui să adăugăm diamantele și bombele din biblioteca Scratch:
        </p>

        <ImageExample 
          src="https://elearning.techminds-academy.ro/assets/images/scratchproiect3personaje.png" 
          alt="Personajele jocului" 
          caption="Personajele principale din jocul City Runner"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">🐱</span>
              <h3 className="font-bold">Pisica</h3>
            </div>
            <p className="text-gray-700">Personajul principal pe care îl vei controla deplasându-l în sus și în jos pentru a colecta diamante și a evita bombe.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">💎</span>
              <h3 className="font-bold">Diamant</h3>
            </div>
            <p className="text-gray-700">Obiectul care trebuie colectat pentru a obține puncte (1 punct per diamant).</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">💣</span>
              <h3 className="font-bold">Bombă</h3>
            </div>
            <p className="text-gray-700">Obiectul periculos care trebuie evitat (-2 puncte per bombă).</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">🏢</span>
              <h3 className="font-bold">Clădiri</h3>
            </div>
            <p className="text-gray-700">Elemente de decor care se deplasează în fundal pentru a crea impresia de mișcare.</p>
          </div>
        </div>

        <h3 className="font-bold text-xl mt-6 mb-2">Adăugarea personajelor lipsă:</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li>Pentru a adăuga <strong>Diamantul</strong>, apasă pe iconița "Alege un personaj" din colțul din dreapta jos</li>
          <li>Caută "crystal" sau "diamond" în biblioteca Scratch și alege un diamant care îți place</li>
          <li>Pentru <strong>Bombă</strong>, caută "bomb" și alege o bombă potrivită</li>
          <li>Poți redimensiona personajele folosind instrumentul de redimensionare dacă sunt prea mari sau prea mici</li>
        </ol>

        <InfoBox title="Sfat" icon="info" variant="primary">
          <p>
            Pisica are 3 costume diferite: unul normal (idle), unul orientat în jos și unul orientat în sus. 
            Aceste costume vor fi folosite pentru a anima pisica atunci când se deplasează.
          </p>
        </InfoBox>
      </div>

      <div id="controlul-pisicii" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Controlarea pisicii</h2>
        <p className="mb-4">
          Primul pas este să facem pisica să se miște în sus și în jos folosind tastele săgeți. 
          Vom adăuga și animație prin schimbarea costumelor. Selectează personajul <strong>Pisica</strong> și adaugă următorul cod:
        </p>

        <BlockCodeExample 
          title="Codul pentru controlul pisicii" 
          src="https://elearning.techminds-academy.ro/assets/images/scratchproiect3pisica.png" 
          alt="Codul pentru controlul pisicii" 
          caption="Acest cod permite controlarea pisicii cu tastele săgeți sus și jos"
        />

        <h3 className="font-bold text-xl mt-6 mb-2">Cum funcționează:</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li><strong>La începerea jocului</strong> - pisica se poziționează în partea stângă a ecranului, se face vizibilă și își setează costumul inițial.</li>
          <li><strong>Controlul mișcării</strong> - într-o buclă infinită, verificăm dacă:
            <ul className="list-disc pl-6 mt-1 mb-2">
              <li>Săgeata sus este apăsată - deplasăm pisica în sus și schimbăm costumul la "up"</li>
              <li>Săgeata jos este apăsată - deplasăm pisica în jos și schimbăm costumul la "down"</li>
              <li>Nicio tastă nu este apăsată - revenim la costumul normal "idle"</li>
            </ul>
          </li>
          <li><strong>Limitarea mișcării</strong> - Ne asigurăm că pisica nu iese în afara ecranului, verificând poziția ei.</li>
        </ol>

        <InfoBox title="Sfat" icon="info" variant="primary">
          <p>
            Poți ajusta viteza de deplasare a pisicii modificând valoarea din blocurile "modifică y cu 10" și "modifică y cu -10". 
            Un număr mai mare face pisica să se miște mai rapid.
          </p>
        </InfoBox>
      </div>

      <div id="animarea-cladirilor" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Animarea clădirilor din fundal</h2>
        <p className="mb-4">
          Pentru a crea un efect de mișcare în joc, vom face clădirile din fundal să se deplaseze de la dreapta la stânga, 
          creând iluzia că pisica aleargă prin oraș. Selectează personajul <strong>Buildings</strong> și adaugă următorul cod:
        </p>

        <BlockCodeExample 
          title="Codul pentru clădiri" 
          src="https://elearning.techminds-academy.ro/assets/images/scratchproiect3buildings.png" 
          alt="Codul pentru clădiri" 
          caption="Cod pentru animarea clădirilor din fundal"
        />

        <h3 className="font-bold text-xl mt-6 mb-2">Cum funcționează:</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li><strong>La început</strong> - ascundem clădirea originală și pregătim un efect de infinit de clădiri care se vor mișca.</li>
          <li><strong>Generarea clădirilor</strong> - într-o buclă infinită:
            <ul className="list-disc pl-6 mt-1 mb-2">
              <li>Creăm clădiri noi la intervale regulate folosind clonarea</li>
              <li>Alegem aleatoriu unul din cele 10 costume disponibile pentru varietate</li>
              <li>Poziționăm clădirea în partea dreaptă a ecranului la o înălțime aleatoare</li>
            </ul>
          </li>
          <li><strong>Comportamentul clădirilor</strong> - fiecare clădire se deplasează de la dreapta la stânga și dispare când atinge marginea din stânga.</li>
        </ol>

        <InfoBox title="Sfat" icon="info" variant="primary">
          <p>
            Poți crea un efect de parallax (impresia de adâncime) făcând clădirile mai îndepărtate 
            să se miște mai lent, iar pe cele mai apropiate mai rapid.
          </p>
        </InfoBox>
      </div>

      <div id="diamante" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Crearea diamantelor</h2>
        <p className="mb-4">
          Acum vom adăuga diamantele care vor apărea din dreapta ecranului și pe care pisica trebuie 
          să le colecteze pentru a obține puncte. Selectează personajul <strong>Crystal</strong> și adaugă următorul cod:
        </p>

        <BlockCodeExample 
          title="Codul pentru diamante" 
          src="https://elearning.techminds-academy.ro/assets/images/scratchproiect3crystal.png" 
          alt="Codul pentru diamante" 
          caption="Cod pentru generarea și comportamentul diamantelor"
        />

        <h3 className="font-bold text-xl mt-6 mb-2">Cum funcționează:</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li><strong>La început</strong> - ascundem diamantul original și setăm scorul la 0.</li>
          <li><strong>Generarea diamantelor</strong> - într-o buclă infinită:
            <ul className="list-disc pl-6 mt-1 mb-2">
              <li>Creăm diamante noi la intervale aleatorii</li>
              <li>Poziționăm diamantul în partea dreaptă a ecranului la o înălțime aleatoare</li>
            </ul>
          </li>
          <li><strong>Comportamentul diamantelor</strong> - fiecare diamant:
            <ul className="list-disc pl-6 mt-1 mb-2">
              <li>Se deplasează de la dreapta la stânga</li>
              <li>Verifică dacă atinge pisica - în acest caz adaugă 1 punct la scor și dispare</li>
              <li>Dispare și dacă ajunge la marginea din stânga a ecranului</li>
            </ul>
          </li>
        </ol>

        <InfoBox title="Sfat" icon="info" variant="primary">
          <p>
            Poți face jocul mai interesant dacă adaugi animații sau efecte sonore când pisica colectează un diamant.
          </p>
        </InfoBox>
      </div>

      <div id="bombe" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Crearea bombelor</h2>
        <p className="mb-4">
          Similar cu diamantele, vom adăuga bombele pe care pisica trebuie să le evite. 
          Când pisica atinge o bombă, va pierde 2 puncte. Selectează personajul <strong>Bomb</strong> și adaugă următorul cod:
        </p>

        <BlockCodeExample 
          title="Codul pentru bombe" 
          src="https://elearning.techminds-academy.ro/assets/images/scratchproiect3bomb.png" 
          alt="Codul pentru bombe" 
          caption="Cod pentru generarea și comportamentul bombelor"
        />

        <h3 className="font-bold text-xl mt-6 mb-2">Cum funcționează:</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li><strong>La început</strong> - ascundem bomba originală.</li>
          <li><strong>Generarea bombelor</strong> - într-o buclă infinită:
            <ul className="list-disc pl-6 mt-1 mb-2">
              <li>Creăm bombe noi la intervale aleatorii</li>
              <li>Poziționăm bomba în partea dreaptă a ecranului la o înălțime aleatoare</li>
            </ul>
          </li>
          <li><strong>Comportamentul bombelor</strong> - fiecare bombă:
            <ul className="list-disc pl-6 mt-1 mb-2">
              <li>Se deplasează de la dreapta la stânga</li>
              <li>Verifică dacă atinge pisica - în acest caz scade 2 puncte din scor și dispare</li>
              <li>Dispare și dacă ajunge la marginea din stânga a ecranului</li>
            </ul>
          </li>
        </ol>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-700 mb-2">Pentru diamante:</h4>
            <div className="bg-green-100 p-3 rounded text-green-800">
              <p>dacă atinge [Pisica] atunci</p>
              <p className="mt-1">modifică [Scor] cu [1]</p>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-700 mb-2">Pentru bombe:</h4>
            <div className="bg-red-100 p-3 rounded text-red-800">
              <p>dacă atinge [Pisica] atunci</p>
              <p className="mt-1">modifică [Scor] cu [-2]</p>
            </div>
          </div>
        </div>
      </div>

      <div id="linie-margine" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Configurarea liniei pentru detecția marginii</h2>
        <p className="mb-4">
          Pentru a detecta când obiectele ies din ecran prin stânga, vom folosi o linie invizibilă. 
          Acest personaj simplu este deja în proiect, dar trebuie să îl configurăm corect. 
          Selectează personajul <strong>Linie</strong> și verifică următorul cod:
        </p>

        <BlockCodeExample 
          title="Codul pentru linia de margine" 
          src="https://elearning.techminds-academy.ro/assets/images/scratchproiect3linie.png" 
          alt="Codul pentru linia de margine" 
          caption="Cod pentru configurarea liniei de detecție a marginii"
        />

        <h3 className="font-bold text-xl mt-6 mb-2">Cum funcționează:</h3>
        <p className="mb-4">
          Linia este un personaj foarte simplu care are doar un script pentru a se poziționa corect la începutul jocului:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Se poziționează în partea stângă a ecranului</li>
          <li>Se întinde vertical pentru a acoperi toată înălțimea ecranului</li>
          <li>Este invizibilă pentru jucător</li>
        </ul>
        <p className="mb-4">
          Celelalte personaje (diamante, bombe, clădiri) folosesc această linie pentru a detecta 
          când au ajuns la marginea din stânga a ecranului și trebuie să dispară.
        </p>
      </div>

      <div id="testare" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Testează și îmbunătățește</h2>
        <p className="mb-4">
          Acum că toate elementele jocului sunt implementate, este timpul să îl testezi! 
          Apasă steagul verde și încearcă să colectezi cât mai multe diamante evitând în același timp bombele.
        </p>

        <h3 className="font-bold text-xl mt-6 mb-3">Provocări pentru îmbunătățirea jocului</h3>
        <p className="mb-4">
          După ce ai terminat jocul de bază, încearcă aceste îmbunătățiri:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Challenge title="Adaugă o condiție de victorie și înfrângere" difficulty="medium">
            <p>Creează un nou personaj care să apară când scorul ajunge la 20 (victorie) sau scade sub -10 (înfrângere).</p>
          </Challenge>
          
          <Challenge title="Adaugă efecte sonore" difficulty="easy">
            <p>Adaugă sunete pentru colectarea diamantelor, lovirea bombelor și pentru fundalul jocului.</p>
          </Challenge>
          
          <Challenge title="Adaugă un sistem de nivele" difficulty="hard">
            <p>Mărește viteza de deplasare a obiectelor pe măsură ce scorul crește, pentru a face jocul mai dificil.</p>
          </Challenge>
          
          <Challenge title="Adaugă un sistem de vieți" difficulty="medium">
            <p>În loc să scazi din scor când lovești o bombă, poți implementa un sistem cu 3 vieți.</p>
          </Challenge>
        </div>
      </div>

      <div id="concluzii" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Concluzii</h2>
        <p className="mb-6">
          Ai creat un joc captivant de tip "endless runner" în care pisica ta colectează diamante și evită bombe! 
          Acest proiect ți-a permis să înveți despre controlul personajelor, detectarea coliziunilor, generarea de obiecte aleatorii 
          și implementarea unui sistem de punctaj.
        </p>

        <InfoBox title="Ce ai învățat" icon="success" variant="success">
          <ul className="list-disc list-inside space-y-1">
            <li>Cum să controlezi un personaj cu tastele săgeți</li>
            <li>Cum să animezi un personaj schimbând costumele</li>
            <li>Cum să generezi obiecte aleatorii care se mișcă pe ecran</li>
            <li>Cum să detectezi coliziuni între personaje</li>
            <li>Cum să implementezi un sistem de scor cu recompense și penalizări</li>
          </ul>
        </InfoBox>

        <div className="mt-6 bg-purple-50 p-6 rounded-lg border-l-4 border-course-purple">
          <h3 className="text-lg font-semibold mb-2">Ce urmează?</h3>
          <p className="mb-4">
            Acum că stăpânești sistemele de mișcare și coliziune, poți încerca să creezi un joc mai complex 
            cu mai multe tipuri de obiecte, power-up-uri sau niveluri predefinite.
          </p>
          <a 
            href="/courses/scratch" 
            className="inline-flex items-center bg-course-purple text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            Descoperă mai multe tutoriale Scratch
          </a>
        </div>
      </div>
    </LessonLayout>
  );
};

export default Session4CityRunner;
