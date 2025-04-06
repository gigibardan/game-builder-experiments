
import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session3MotoRacer = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'personaje', title: 'Personajele jocului' },
    { id: 'decor', title: 'Animarea decorului' },
    { id: 'controlul-moto', title: 'Controlul motocicletei' },
    { id: 'obstacole', title: 'Crearea obstacolelor' },
    { id: 'recompense', title: 'Adăugarea recompenselor' },
    { id: 'conditii', title: 'Condiții de final' },
    { id: 'provocari', title: 'Provocări și îmbunătățiri' }
  ];

  const resources = [
    { title: 'Proiect starter', url: 'https://scratch.mit.edu/projects/1144402513/editor/' },
    { title: 'Proiect final', url: 'https://scratch.mit.edu/projects/1144381802' },
    { title: 'Ghid Clone în Scratch', url: 'https://en.scratch-wiki.info/wiki/Cloning' },
    { title: 'Tutoriale Scratch oficiale', url: 'https://scratch.mit.edu/projects/editor/?tutorial=all' }
  ];

  return (
    <LessonLayout
      title="Jocul Moto Racer in Scratch"
      subtitle="Lecția 3 • Scratch Programming"
      courseId="scratch"
      sessionId="3"
      heroColor="bg-gradient-to-r from-amber-500 to-orange-500"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Sesiunea 2: Space Dodge",
        path: "/scratch/session2spacedodge"
      }}
      nextLesson={{
        title: "Sesiunea 4: Bucle și Evenimente",
        path: "/scratch/session4"
      }}
    >
      <div id="introducere">
        <h2 className="text-2xl font-bold mb-4">Povestea jocului</h2>
        <p className="mb-4">
          Imaginează-ți că ești un motociclist talentat care își testează abilitățile pe un drum plin de obstacole. 
          În acest joc palpitant, vei controla o motocicletă care trebuie să evite pietrele periculoase de pe drum, 
          în timp ce colectezi stele strălucitoare pentru a-ți crește scorul.
        </p>
        <p className="mb-6">
          Jocul "Moto Racer" combină reflexele rapide cu o strategie simplă și este perfect pentru cei care vor 
          să învețe conceptele de bază ale programării în Scratch. Vei crea mișcări controlate cu tastatura, 
          vei genera obstacole și recompense aleatorii, și vei adăuga condiții de victorie și înfrângere.
        </p>

        <LearningOutcome items={[
          "Controlul personajului cu săgețile stânga-dreapta",
          "Generarea de obstacole și recompense aleatorii",
          "Utilizarea clonelor pentru a crea multiple obiecte",
          "Detectarea coliziunilor între personaje",
          "Implementarea sistemului de scor și a condițiilor de final"
        ]} />

        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-8">
          <h3 className="text-xl font-bold mb-3 text-amber-700">Să începem!</h3>
          <p className="mb-4">
            Pentru a crea acest joc mai ușor, am pregătit un proiect starter cu personajele principale și 
            decorul deja adăugate. Tot ce trebuie să faci este să adaugi codul pentru a le aduce la viață!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://scratch.mit.edu/projects/1144402513/editor/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
            >
              <span>Deschide proiectul starter</span>
            </a>
            <a 
              href="https://scratch.mit.edu/projects/1144381802" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
            >
              <span>Vezi jocul final</span>
            </a>
          </div>
          <p className="mt-4 text-amber-700 italic">
            <span className="font-bold">Sfat:</span> Apasă butonul "Vezi în interior" pentru a putea edita proiectul, apoi "Remixează" pentru a salva propria versiune!
          </p>
        </div>
      </div>

      <div id="personaje" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Personajele jocului</h2>
        <p className="mb-4">
          Proiectul starter conține deja personajele principale. Mai trebuie să adăugăm doar pietrele și 
          stelele din biblioteca Scratch:
        </p>

        <ImageExample 
          src="https://appinventor.mit.edu/explore/sites/all/files/ai2tutorials/picture/DoItNowAppPreview.png" 
          alt="Personajele jocului Moto Racer" 
          caption="Personajele principale din jocul Moto Racer"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 border rounded-md p-4">
            <h4 className="font-bold text-gray-700">🏍️ Moto (Motocicleta)</h4>
            <p>Personajul principal pe care îl vei controla cu săgețile stânga-dreapta.</p>
          </div>
          
          <div className="bg-gray-50 border rounded-md p-4">
            <h4 className="font-bold text-gray-700">⭐ Star (Steaua)</h4>
            <p>Obiectul pe care trebuie să-l colectezi pentru a obține puncte.</p>
          </div>
          
          <div className="bg-gray-50 border rounded-md p-4">
            <h4 className="font-bold text-gray-700">🪨 Rocks (Pietrele)</h4>
            <p>Obstacolele pe care trebuie să le eviți pentru a nu pierde jocul.</p>
          </div>
          
          <div className="bg-gray-50 border rounded-md p-4">
            <h4 className="font-bold text-gray-700">🏆 Win (Victorie)</h4>
            <p>Mesajul care apare când jucătorul atinge scorul țintă.</p>
          </div>
          
          <div className="bg-gray-50 border rounded-md p-4">
            <h4 className="font-bold text-gray-700">❌ Lost (Înfrângere)</h4>
            <p>Mesajul care apare când jucătorul lovește o piatră.</p>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="font-bold mb-2">Adăugarea personajelor lipsă:</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li>Pentru a adăuga <strong>Stelele</strong>, apasă pe iconița "Alege un personaj" din colțul din dreapta jos</li>
            <li>Caută "star" în biblioteca Scratch și alege o stea care îți place</li>
            <li>Pentru <strong>Pietre</strong>, caută "rock" sau "stone" și alege o piatră potrivită</li>
            <li>Poți redimensiona personajele folosind instrumentul de redimensionare dacă sunt prea mari sau prea mici</li>
          </ol>
        </div>

        <InfoBox title="Sfat" icon="info" variant="info">
          <p>
            Motocicleta are 5 costume diferite pe care le poți schimba. Poți examina costumele fiecărui personaj 
            accesând tab-ul "Costume" după ce selectezi personajul respectiv în lista de sprite-uri.
          </p>
        </InfoBox>
      </div>

      <div id="decor" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Animarea decorului pentru efect de mișcare</h2>
        <p className="mb-4">
          Pentru a crea iluzia că motocicleta se deplasează pe drum, vom anima decorul schimbând rapid între mai multe 
          costume ușor decalate. Această tehnică creează un efect vizual de mișcare continuă.
        </p>

        <BlockCodeExample 
          title="Codul pentru animarea decorului" 
          src="https://appinventor.mit.edu/explore/sites/all/files/tutorials/stockMarketPortfolio/blocks/URL_request.png" 
          alt="Codul pentru animarea decorului" 
          caption="Animarea decorului pentru efectul de mișcare pe drum"
        />

        <div className="mb-6">
          <h4 className="font-bold mb-2">Cum funcționează:</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>La începerea jocului</strong> - selectăm primul costum al decorului.</li>
            <li><strong>Bucla infinită</strong> - într-o buclă care rulează continuu:
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Schimbăm la următorul costum din cele 12 disponibile</li>
                <li>Așteptăm 0.2 secunde pentru a crea o animație fluidă</li>
              </ul>
            </li>
          </ol>
        </div>

        <p className="mb-4">
          Decorul conține 12 costume aproape identice, cu mici diferențe între liniile de pe șosea. Când le schimbăm 
          rapid, se creează iluzia că drumul se mișcă în jos, dând impresia că motocicleta înaintează.
        </p>

        <InfoBox title="Sfat" icon="info" variant="secondary">
          <p>
            Poți ajusta viteza animației modificând timpul din blocul "așteaptă 0.2 secunde". O valoare mai mică 
            înseamnă o animație mai rapidă, iar o valoare mai mare înseamnă o animație mai lentă.
          </p>
        </InfoBox>
      </div>

      <div id="controlul-moto" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Controlarea motocicletei</h2>
        <p className="mb-4">
          Primul pas este să facem motocicleta să se miște stânga-dreapta folosind săgețile de pe tastatură. 
          Selectează personajul <strong>Moto</strong> și adaugă următorul cod:
        </p>

        <BlockCodeExample 
          title="Codul pentru controlul motocicletei" 
          src="https://appinventor.mit.edu/explore/sites/all/files/tutorials/stockMarketPortfolio/blocks/Response.png" 
          alt="Codul pentru controlul motocicletei" 
          caption="Controlul motocicletei cu săgețile stânga-dreapta"
        />

        <div className="mb-6">
          <h4 className="font-bold mb-2">Cum funcționează:</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>La începerea jocului</strong> - motocicleta se poziționează în partea de jos a ecranului și se face vizibilă.</li>
            <li><strong>Controlul mișcării</strong> - verificăm continuu dacă săgețile stânga sau dreapta sunt apăsate și mișcăm motocicleta cu 10 pași în direcția corespunzătoare.</li>
          </ol>
        </div>

        <InfoBox title="Sfat" icon="info" variant="info">
          <p>
            Poți ajusta viteza de deplasare modificând numărul din blocurile "modifică x cu 10" și "modifică x cu -10". 
            Un număr mai mare înseamnă o mișcare mai rapidă.
          </p>
        </InfoBox>
      </div>

      <div id="obstacole" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Crearea pietrelor (obstacole)</h2>
        <p className="mb-4">
          Acum vom face pietrele să apară din partea de sus a ecranului și să coboare pe drum. 
          Selectează personajul <strong>Rocks</strong> și adaugă următorul cod:
        </p>

        <BlockCodeExample 
          title="Codul pentru pietre" 
          src="https://appinventor.mit.edu/explore/sites/all/files/tutorials/stockMarketPortfolio/blocks/URL_request.png" 
          alt="Codul pentru pietre" 
          caption="Generarea și controlul pietrelor cu ajutorul clonelor"
        />

        <div className="mb-6">
          <h4 className="font-bold mb-2">Cum funcționează:</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>La începutul jocului</strong> - ascundem piatra originală, deoarece vom folosi clone pentru a genera multiple pietre.</li>
            <li><strong>Generarea continuă</strong> - într-o buclă infinită, creăm clone ale pietrei la intervale de 1 secundă.</li>
            <li><strong>Comportamentul clonelor</strong> - când o clonă este creată:
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Apare în partea de sus a ecranului la o poziție x aleatoare (pe una dintre benzi)</li>
                <li>Se face vizibilă și începe să coboare pe drum</li>
                <li>Verifică constant dacă atinge motocicleta (declanșând pierderea jocului) sau dacă ajunge în afara ecranului (caz în care dispare)</li>
              </ul>
            </li>
          </ol>
        </div>

        <InfoBox title="Sfat" icon="info" variant="info">
          <p>
            Pentru a face jocul mai dificil, poți reduce timpul de așteptare între generarea pietrelor sau poți 
            mări viteza de coborâre modificând valoarea din blocul "modifică y cu -5".
          </p>
        </InfoBox>
      </div>

      <div id="recompense" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Crearea stelelor (puncte)</h2>
        <p className="mb-4">
          Similar cu pietrele, vom face ca stelele să apară și să coboare pe drum. Când motocicleta atinge o stea, 
          jucătorul câștigă un punct. Selectează personajul <strong>Star</strong> și adaugă următorul cod:
        </p>

        <BlockCodeExample 
          title="Codul pentru stele" 
          src="https://appinventor.mit.edu/explore/sites/all/files/tutorials/stockMarketPortfolio/blocks/Response.png" 
          alt="Codul pentru stele" 
          caption="Generarea și controlul stelelor cu ajutorul clonelor"
        />

        <div className="mb-6">
          <h4 className="font-bold mb-2">Cum funcționează:</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>La început</strong> - ascundem steaua originală și setăm scorul la 0.</li>
            <li><strong>Generarea continuă</strong> - la fiecare secundă, creăm o clonă a stelei.</li>
            <li><strong>Comportamentul clonelor</strong> - când o clonă este creată:
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Apare în partea de sus a ecranului la o poziție x aleatoare</li>
                <li>Se face vizibilă și începe să coboare pe drum</li>
                <li>Verifică constant dacă atinge motocicleta (adăugând un punct) sau dacă ajunge în afara ecranului</li>
                <li>Dispare după ce este colectată sau iese din ecran</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-red-200 rounded-md p-4 bg-red-50">
            <h5 className="font-bold mb-2">Pentru pietre:</h5>
            <div className="bg-red-100 p-2 rounded">
              <p className="font-mono">dacă atinge [Moto] atunci</p>
            </div>
            <div className="bg-red-100 p-2 rounded mt-1">
              <p className="font-mono">difuzează [lost]</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-md p-4 bg-green-50">
            <h5 className="font-bold mb-2">Pentru stele:</h5>
            <div className="bg-green-100 p-2 rounded">
              <p className="font-mono">dacă atinge [Moto] atunci</p>
            </div>
            <div className="bg-green-100 p-2 rounded mt-1">
              <p className="font-mono">modifică [Scor] cu [1]</p>
            </div>
          </div>
        </div>
      </div>

      <div id="conditii" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Condiții de victorie și înfrângere</h2>
        <p className="mb-4">
          În final, trebuie să adăugăm condiții pentru a ști când jucătorul câștigă sau pierde. 
          Vom folosi personajele "Win" și "Lost" pentru a afișa mesajele corespunzătoare.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">Pentru personajul "Win":</h4>
            <BlockCodeExample 
              src="https://appinventor.mit.edu/explore/sites/all/files/tutorials/stockMarketPortfolio/blocks/URL_request.png" 
              alt="Codul pentru victorie" 
              caption="Când scorul depășește 49, jucătorul câștigă!"
            />
          </div>
          
          <div>
            <h4 className="font-bold mb-2">Pentru personajul "Lost":</h4>
            <BlockCodeExample 
              src="https://appinventor.mit.edu/explore/sites/all/files/tutorials/stockMarketPortfolio/blocks/URL_request.png" 
              alt="Codul pentru înfrângere" 
              caption="Când jucătorul primește mesajul 'lost', jocul se termină!"
            />
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-bold mb-2">Cum funcționează:</h4>
          <p className="mb-2">Ambele personaje sunt ascunse la început. Ele apar doar când sunt îndeplinite condițiile specifice:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Win</strong> - verifică constant dacă scorul a atins 50 de puncte și afișează un mesaj de felicitare când această condiție este îndeplinită.</li>
            <li><strong>Lost</strong> - ascultă mesajul "lost" care este trimis când motocicleta atinge o piatră și afișează un mesaj de înfrângere.</li>
          </ul>
          <p className="mt-2">Când apare oricare dintre aceste mesaje, jocul se oprește folosind blocul "stop [totul]".</p>
        </div>

        <InfoBox title="Sfat" icon="info" variant="warning">
          <p>
            Poți modifica scorul necesar pentru victorie schimbând valoarea din blocul "dacă Scor {'>'}{'>'} 49". 
            De exemplu, pentru un joc mai lung, poți seta scorul necesar la 100.
          </p>
        </InfoBox>
      </div>

      <div id="provocari" className="mt-12 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Testează și îmbunătățește</h2>
        <p className="mb-4">
          Acum că toate elementele jocului sunt implementate, este timpul să îl testezi! 
          Apasă steagul verde și încearcă să eviți pietrele în timp ce colectezi cât mai multe stele.
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <span className="text-amber-500 mr-2">★</span> Provocări pentru îmbunătățirea jocului
          </h3>
          <p className="mb-4">După ce ai terminat jocul de bază, încearcă aceste îmbunătățiri:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Challenge title="Adaugă efecte sonore" difficulty="easy">
              <p>Adaugă sunete pentru colectarea stelelor, lovirea pietrelor și câștigarea jocului.</p>
            </Challenge>
            
            <Challenge title="Crește dificultatea treptat" difficulty="medium">
              <p>Fă jocul să devină mai dificil pe măsură ce scorul crește, mărind viteza pietrelor sau frecvența lor.</p>
            </Challenge>
            
            <Challenge title="Adaugă mai multe tipuri de obstacole" difficulty="hard">
              <p>Creează obstacole noi, cum ar fi cactuși sau alte vehicule, fiecare cu comportamente diferite.</p>
            </Challenge>
            
            <Challenge title="Adaugă un ecran de start" difficulty="medium">
              <p>Creează un ecran de titlu cu instrucțiuni și un buton de start pentru joc.</p>
            </Challenge>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <h3 className="text-lg font-semibold text-green-700 mb-2">Felicitări!</h3>
          <p className="mb-4">
            Ai creat un joc captivant de curse de motocicletă! Acest proiect ți-a permis să înveți despre
            detectarea coliziunilor, generarea de obiecte aleatorii și utilizarea clonelor în Scratch.
          </p>
          <p>
            Acum poți împărtăși jocul cu prietenii și familia, îl poți personaliza adăugând propriile tale
            idei și îmbunătățiri, și poți folosi aceste concepte pentru a crea alte jocuri similare.
          </p>
        </div>
      </div>
    </LessonLayout>
  );
};

export default Session3MotoRacer;
