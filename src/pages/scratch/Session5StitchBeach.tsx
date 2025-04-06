
import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session5StitchBeach = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'personaje', title: 'Personajele jocului' },
    { id: 'stitch', title: 'Programarea lui Stitch' },
    { id: 'torturi', title: 'Programarea torturilor' },
    { id: 'bombe', title: 'Programarea bombelor' },
    { id: 'conditii', title: 'Condiții de final' },
    { id: 'provocari', title: 'Provocări și îmbunătățiri' }
  ];

  const resources = [
    { title: 'Proiect starter', url: 'https://scratch.mit.edu/projects/1144904430/editor/' },
    { title: 'Proiect final', url: 'https://scratch.mit.edu/projects/1144880196' },
    { title: 'Ghid animație în Scratch', url: 'https://en.scratch-wiki.info/wiki/Animation' },
    { title: 'Tutoriale Scratch oficiale', url: 'https://scratch.mit.edu/projects/editor/?tutorial=all' }
  ];

  return (
    <LessonLayout
      title="Stitch's Beach Adventure in Scratch"
      subtitle="Lecția 5 • Scratch Programming"
      courseId="scratch"
      sessionId="5"
      heroColor="bg-gradient-to-r from-blue-500 to-purple-500"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Sesiunea 4: Bucle și Evenimente",
        path: "/scratch/session4"
      }}
      nextLesson={null}
    >
      <div id="introducere">
        <h2 className="text-2xl font-bold mb-4">Povestea jocului</h2>
        <p className="mb-4">
          Stitch, simpaticul extraterestru albastru, s-a hotărât să petreacă o zi relaxantă la plajă. 
          Dar ce zi ar fi completă fără niște delicioase torturi? Din fericire pentru el, pe plajă apar
          torturi zburătoare pe care le poate colecta. Însă, nu totul e roz - printre torturi se ascund 
          și bombe periculoase care îi pot strica ziua!
        </p>
        <p className="mb-6">
          În acest joc captivant, vei controla personajul Stitch, mișcându-l stânga-dreapta pentru a colecta 
          cât mai multe torturi, evitând în același timp bombele. Fiecare tort îți aduce un punct, dar fiecare 
          bombă îți scade două puncte. Poți câștiga dacă aduni 50 de puncte, dar pierzi dacă scorul tău scade sub -5.
        </p>

        <LearningOutcome items={[
          "Controlul personajului cu tastele săgeți",
          "Animarea personajelor prin schimbarea costumelor",
          "Generarea de obiecte aleatorii folosind clone",
          "Detectarea coliziunilor între personaje",
          "Implementarea unui sistem de scor cu condiții de victorie și înfrângere"
        ]} />

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
          <h3 className="text-xl font-bold mb-3 text-blue-700">Să începem!</h3>
          <p className="mb-4">
            Pentru a crea acest joc mai ușor, am pregătit un proiect starter cu personajele și decorurile deja adăugate. 
            Tot ce trebuie să faci este să adaugi codul și tortul din biblioteca Scratch!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://scratch.mit.edu/projects/1144904430/editor/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
            >
              <span>Deschide proiectul starter</span>
            </a>
            <a 
              href="https://scratch.mit.edu/projects/1144880196" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
            >
              <span>Vezi jocul final</span>
            </a>
          </div>
          <p className="mt-4 text-blue-700 italic">
            <span className="font-bold">Sfat:</span> Apasă butonul "Vezi în interior" pentru a putea edita proiectul, apoi "Remixează" pentru a salva propria versiune!
          </p>
        </div>
      </div>

      <div id="personaje" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Personajele jocului</h2>
        <p className="mb-4">
          Proiectul starter conține deja majoritatea personajelor necesare. Va trebui să adăugăm doar tortul din biblioteca Scratch:
        </p>

        <ImageExample 
          src="https://appinventor.mit.edu/explore/sites/all/files/ai2tutorials/picture/DoItNowAppPreview.png" 
          alt="Personajele jocului Stitch's Beach Adventure" 
          caption="Personajele principale din jocul Stitch's Beach Adventure"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 border rounded-md p-4">
            <h4 className="font-bold text-gray-700">👽 Stitch</h4>
            <p>Personajul principal controlat de jucător, care trebuie să colecteze torturi și să evite bombe.</p>
          </div>
          
          <div className="bg-gray-50 border rounded-md p-4">
            <h4 className="font-bold text-gray-700">🍰 Cake (Tortul)</h4>
            <p>Obiectele pe care trebuie să le colectezi pentru a obține puncte (1 punct per tort).</p>
          </div>
          
          <div className="bg-gray-50 border rounded-md p-4">
            <h4 className="font-bold text-gray-700">💣 Bomb (Bomba)</h4>
            <p>Obstacolele care trebuie evitate (-2 puncte per bombă).</p>
          </div>
          
          <div className="bg-gray-50 border rounded-md p-4">
            <h4 className="font-bold text-gray-700">➖ Linie</h4>
            <p>O linie invizibilă plasată în partea stângă a ecranului pentru a detecta când obiectele ies din scenă.</p>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="font-bold mb-2">Adăugarea tortului:</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li>Apasă pe butonul "Alege un personaj" din colțul din dreapta jos</li>
            <li>Caută "cake" sau "tort" în biblioteca Scratch</li>
            <li>Selectează un tort care îți place și adaugă-l în proiect</li>
          </ol>
        </div>

        <InfoBox title="Sfat" icon="info" variant="info">
          <p>
            Stitch are 20 de costume disponibile care vor fi folosite pentru a crea o animație fluidă. 
            Poți vedea aceste costume selectând personajul și navigând la tab-ul "Costume".
          </p>
        </InfoBox>
      </div>

      <div id="stitch" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Programarea lui Stitch</h2>
        <p className="mb-4">
          Primul pas este să facem personajul Stitch să se miște stânga-dreapta cu ajutorul tastelor săgeți 
          și să aibă o animație fluidă. Selectează personajul <strong>Stitch</strong> și adaugă următorul cod:
        </p>

        <BlockCodeExample 
          title="Codul pentru Stitch" 
          src="https://appinventor.mit.edu/explore/sites/all/files/tutorials/stockMarketPortfolio/blocks/URL_request.png" 
          alt="Codul pentru Stitch" 
          caption="Controlul și animația personajului Stitch"
        />

        <div className="mb-6">
          <h4 className="font-bold mb-2">Cum funcționează:</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Inițializare</strong> - La începerea jocului, Stitch:
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Se poziționează la coordonatele de start (x = -190, y = 0)</li>
                <li>Se orientează spre dreapta (90 de grade)</li>
              </ul>
            </li>
            <li><strong>Controlul mișcării</strong> - Într-o buclă infinită:
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Verifică dacă săgeata stânga este apăsată - mută Stitch cu 5 pași la stânga și îl orientează în direcția corectă (-90 grade)</li>
                <li>Verifică dacă săgeata dreapta este apăsată - mută Stitch cu 5 pași la dreapta și îl orientează în direcția corectă (90 grade)</li>
                <li>Verifică dacă Stitch atinge marginea ecranului - în acest caz, ricoșează pentru a evita ieșirea din ecran</li>
              </ul>
            </li>
            <li><strong>Animația personajului</strong> - Într-o buclă separată și paralelă:
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Schimbă costumul personajului la următorul disponibil</li>
                <li>Așteaptă o scurtă perioadă pentru a crea efectul de animație</li>
              </ul>
            </li>
          </ol>
        </div>

        <InfoBox title="Sfat" icon="info" variant="info">
          <p>
            Viteza de deplasare a lui Stitch poate fi ajustată modificând valoarea "5" din blocurile "modifică x cu". 
            O valoare mai mare va face personajul să se miște mai rapid.
          </p>
        </InfoBox>
      </div>

      <div id="torturi" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Programarea tortului</h2>
        <p className="mb-4">
          Acum vom programa torturile care vor apărea din partea dreaptă a ecranului și vor aduce puncte când Stitch le atinge. 
          Selectează personajul <strong>Cake</strong> și adaugă următorul cod:
        </p>

        <BlockCodeExample 
          title="Codul pentru tort" 
          src="https://appinventor.mit.edu/explore/sites/all/files/tutorials/stockMarketPortfolio/blocks/URL_request.png" 
          alt="Codul pentru tort" 
          caption="Generarea și controlul torturilor cu ajutorul clonelor"
        />

        <div className="mb-6">
          <h4 className="font-bold mb-2">Cum funcționează:</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Inițializare</strong> - La începutul jocului:
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Ascundem tortul original (vom folosi clone)</li>
                <li>Setăm scorul la 0</li>
                <li>Într-o buclă infinită, creăm clone ale tortului la intervale aleatorii (între 2 și 3 secunde)</li>
              </ul>
            </li>
            <li><strong>Comportamentul clonelor</strong> - Când o clonă începe:
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Se face vizibilă</li>
                <li>Se poziționează la o înălțime aleatorie (y aleatoriu) și în afara ecranului în dreapta (x = 250)</li>
                <li>Se deplasează continuu spre stânga cu o viteză de 4 pași per iterație</li>
                <li>Verifică constant dacă atinge personajul Stitch - în acest caz adaugă 1 punct la scor și dispare</li>
                <li>Verifică constant dacă atinge marginea din stânga (Linia) - în acest caz dispare fără a afecta scorul</li>
              </ul>
            </li>
          </ol>
        </div>

        <InfoBox title="Sfat" icon="info" variant="info">
          <p>
            Poți ajusta frecvența de apariție a torturilor modificând intervalul de așteptare (2-3 secunde). 
            Un interval mai mic va face torturile să apară mai des, crescând atât dificultatea cât și șansele de a obține puncte.
          </p>
        </InfoBox>
      </div>

      <div id="bombe" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Programarea bombelor</h2>
        <p className="mb-4">
          Similar cu torturile, vom programa bombele care vor apărea din partea dreaptă a ecranului și vor scădea puncte când 
          Stitch le atinge. Selectează personajul <strong>Bomb</strong> și adaugă următorul cod:
        </p>

        <BlockCodeExample 
          title="Codul pentru bombă" 
          src="https://appinventor.mit.edu/explore/sites/all/files/tutorials/stockMarketPortfolio/blocks/URL_request.png" 
          alt="Codul pentru bombă" 
          caption="Generarea și controlul bombelor cu ajutorul clonelor"
        />

        <div className="mb-6">
          <h4 className="font-bold mb-2">Cum funcționează:</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Inițializare</strong> - La începutul jocului:
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Ascundem bomba originală (vom folosi clone)</li>
                <li>Într-o buclă infinită, creăm clone ale bombei la intervale aleatorii (între 3 și 4 secunde)</li>
              </ul>
            </li>
            <li><strong>Comportamentul clonelor</strong> - Când o clonă începe:
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Se face vizibilă</li>
                <li>Se poziționează la o înălțime aleatorie (y aleatoriu) și în afara ecranului în dreapta (x = 250)</li>
                <li>Se deplasează continuu spre stânga cu o viteză de 4 pași per iterație</li>
                <li>Verifică constant dacă atinge personajul Stitch - în acest caz scade 2 puncte din scor și dispare</li>
                <li>Verifică constant dacă atinge marginea din stânga (Linia) - în acest caz dispare fără a afecta scorul</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-green-200 rounded-md p-4 bg-green-50">
            <h5 className="font-bold mb-2">Pentru tort (recompensă):</h5>
            <div className="bg-green-100 p-2 rounded">
              <p className="font-mono">așteaptă [alege aleator între (2) și (3)] secunde</p>
            </div>
            <div className="bg-green-100 p-2 rounded mt-1">
              <p className="font-mono">modifică [Scor] cu [1]</p>
            </div>
          </div>
          
          <div className="border border-red-200 rounded-md p-4 bg-red-50">
            <h5 className="font-bold mb-2">Pentru bombă (penalizare):</h5>
            <div className="bg-red-100 p-2 rounded">
              <p className="font-mono">așteaptă [alege aleator între (3) și (4)] secunde</p>
            </div>
            <div className="bg-red-100 p-2 rounded mt-1">
              <p className="font-mono">modifică [Scor] cu [-2]</p>
            </div>
          </div>
        </div>

        <InfoBox title="Sfat" icon="info" variant="info">
          <p>
            Observă că bombele apar mai rar decât torturile (3-4 secunde în loc de 2-3 secunde), oferind astfel un echilibru 
            între recompense și penalizări. De asemenea, penalizarea pentru o bombă (-2 puncte) este mai mare decât recompensa 
            pentru un tort (+1 punct), ceea ce face jocul provocator.
          </p>
        </InfoBox>
      </div>

      <div id="conditii" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Configurarea decorului și condițiilor de final</h2>
        <p className="mb-4">
          În ultimul pas, vom configura decorul pentru a gestiona condițiile de victorie și înfrângere, și vom adăuga 
          muzică de fundal. Selectează <strong>Scena</strong> și adaugă următorul cod:
        </p>

        <BlockCodeExample 
          title="Codul pentru decor" 
          src="https://appinventor.mit.edu/explore/sites/all/files/tutorials/stockMarketPortfolio/blocks/URL_request.png" 
          alt="Codul pentru decor" 
          caption="Configurarea decorului și condițiilor de final"
        />

        <div className="mb-6">
          <h4 className="font-bold mb-2">Cum funcționează:</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Inițializare</strong> - La începutul jocului:
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Trecem la decorul "play" (plaja unde se desfășoară jocul)</li>
                <li>Pornim muzica de fundal care va acompania jocul</li>
              </ul>
            </li>
            <li><strong>Condiții de final</strong> - Într-o buclă infinită, verificăm:
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Dacă scorul depășește 49 - trecem la decorul "win" pentru a indica victoria</li>
                <li>Dacă scorul scade sub -5 - trecem la decorul "lose" pentru a indica înfrângerea</li>
              </ul>
            </li>
          </ol>
        </div>

        <InfoBox title="Sfat" icon="info" variant="info">
          <p>
            Decorul conține trei costume diferite: plaja principală ("play"), ecranul de victorie ("win") și ecranul de înfrângere ("lose"). 
            Poți personaliza aceste ecrane de final în tab-ul "Decoruri" pentru a face jocul mai atractiv.
          </p>
        </InfoBox>
      </div>

      <div id="provocari" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Testează și îmbunătățește</h2>
        <p className="mb-4">
          Acum că toate elementele jocului sunt implementate, este timpul să îl testezi! 
          Apasă steagul verde și încearcă să controlezi pe Stitch pentru a colecta torturi și a evita bombe.
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <span className="text-purple-500 mr-2">★</span> Provocări pentru îmbunătățirea jocului
          </h3>
          <p className="mb-4">După ce ai terminat jocul de bază, încearcă aceste îmbunătățiri:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Challenge title="Adaugă efecte sonore" difficulty="easy">
              <p>Adaugă sunete pentru colectarea torturilor, lovirea bombelor și pentru finalul jocului.</p>
            </Challenge>
            
            <Challenge title="Adaugă un cronometru" difficulty="medium">
              <p>Implementează un timer pentru a limita durata jocului și a crește provocarea.</p>
            </Challenge>
            
            <Challenge title="Crește dificultatea progresiv" difficulty="medium">
              <p>Fă obiectele să se miște mai repede pe măsură ce scorul crește.</p>
            </Challenge>
            
            <Challenge title="Adaugă power-ups" difficulty="hard">
              <p>Creează obiecte speciale care oferă abilități temporare, cum ar fi imunitate la bombe sau puncte bonus.</p>
            </Challenge>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <h3 className="text-lg font-semibold text-green-700 mb-2">Felicitări!</h3>
          <p className="mb-4">
            Ai creat un joc captivant cu Stitch care colectează torturi pe plajă! Acest proiect ți-a permis să înveți despre
            controlul personajelor, animație, generarea de obiecte aleatorii, detecția coliziunilor și implementarea condițiilor
            de victorie și înfrângere.
          </p>
          <p>
            Acum poți împărtăși jocul cu prietenii și familia, îl poți personaliza adăugând propriile tale idei și 
            îmbunătățiri, și poți folosi aceste concepte pentru a crea alte jocuri similare.
          </p>
        </div>
      </div>
    </LessonLayout>
  );
};

export default Session5StitchBeach;
