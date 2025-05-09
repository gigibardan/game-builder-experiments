
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session5BeachBallBounce = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'personaje', title: 'Personaje' },
    { id: 'controlul-colacului', title: 'Controlul colacului' },
    { id: 'mingea', title: 'Programarea mingii' },
    { id: 'scoici', title: 'Adăugarea scoicilor' },
    { id: 'pufferfish', title: 'Adăugarea peștilor' },
    { id: 'conditii-final', title: 'Condiții de final' },
    { id: 'testare', title: 'Testare și îmbunătățiri' },
    { id: 'concluzii', title: 'Concluzii' },
  ];

  const resources = [
    { title: 'Proiect final', url: 'https://scratch.mit.edu/projects/1144457304' },
    { title: 'Proiect starter', url: 'https://scratch.mit.edu/projects/1144470436/editor/' },
    { title: 'Documentație Scratch', url: 'https://scratch.mit.edu/ideas' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>
          <p className="mb-4">
            Este o zi perfectă de vară pe o plajă însorită! În acest joc plin de distracție și provocări, 
            tu controlezi un colac de înot colorat care trebuie să mențină o minge de plajă în aer. 
            Scopul tău este să nu lași mingea să atingă nisipul și să obții cât mai multe puncte!
          </p>

          <p className="mb-6">
            Pe lângă provocarea principală, vei avea șansa să colectezi scoici marine care îți aduc puncte bonus. 
            Dar ai grijă la peștii pufferfish care apar din când în când - atingerea lor cu mingea îți va scădea din punctaj. 
            Acest joc distractiv combină reflexele rapide cu abilitățile de sincronizare și este perfect pentru a învăța 
            concepte importante de programare în Scratch.
          </p>

          <LearningOutcome items={[
            "Controlul obiectelor folosind mouse-ul",
            "Simularea fizicii și mișcării realiste a mingii",
            "Generarea de obiecte aleatorii cu comportamente diferite",
            "Detectarea coliziunilor între multiple personaje",
            "Implementarea unui sistem de scor cu recompense și penalizări"
          ]} />

          <div className="mt-6 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-lg mb-2">Proiect Starter</h3>
            <p className="mb-4">
              Pentru a crea acest joc mai ușor, am pregătit un proiect starter cu colacul de înot și 
              mesajele de victorie/înfrângere deja adăugate. Tot ce trebuie să faci este să adaugi 
              restul personajelor și să programezi comportamentul lor!
            </p>
            <a 
              href="https://scratch.mit.edu/projects/1144470436/editor/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Deschide proiectul starter
            </a>
            <p className="mt-3 text-sm text-blue-700">
              Sfat: Apasă butonul "Vezi în interior" pentru a putea edita proiectul, apoi "Remixează" pentru a salva propria versiune!
            </p>
          </div>
        </>
      )
    },
    {
      id: 'personaje',
      title: 'Personajele jocului',
      content: (
        <>
          <p className="mb-4">
            Proiectul starter conține deja colacul de înot și câteva elemente. 
            Va trebui să adăugăm mingea de plajă, scoicile și peștele puffer din biblioteca Scratch:
          </p>

          <ImageExample 
            src="https://cdn.pixabay.com/photo/2022/01/30/13/33/scratch-6980327_1280.jpg" 
            alt="Personajele jocului Beach Ball Bounce" 
            caption="Exemplu de personaje pentru jocul Beach Ball Bounce"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🏊</span>
                <h3 className="font-bold">Swim Ring (Colacul)</h3>
              </div>
              <p className="text-gray-700">Personajul principal pe care îl vei controla cu mouse-ul pentru a respinge mingea și a colecta obiecte.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🏐</span>
                <h3 className="font-bold">Beach Ball (Mingea de plajă)</h3>
              </div>
              <p className="text-gray-700">Obiectul principal care trebuie menținut în aer, căzând în mod natural și ricoșând când atinge colacul.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🐚</span>
                <h3 className="font-bold">Shell (Scoica)</h3>
              </div>
              <p className="text-gray-700">Obiect bonus care apare aleatoriu și aduce puncte suplimentare când este atins de minge.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🐡</span>
                <h3 className="font-bold">Pufferfish (Peștele balon)</h3>
              </div>
              <p className="text-gray-700">Obstacol care apare aleatoriu și scade punctajul când este atins de minge.</p>
            </div>
          </div>

          <h3 className="font-bold text-xl mt-6 mb-2">Adăugarea personajelor lipsă:</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-4">
            <li>Pentru a adăuga <strong>Mingea de plajă</strong>, apasă pe iconița "Alege un personaj" din colțul din dreapta jos</li>
            <li>Caută "beach ball" sau "volleyball" în biblioteca Scratch și alege o minge colorată</li>
            <li>Pentru <strong>Pufferfish</strong>, caută "pufferfish" și alege un model potrivit</li>
            <li>Pentru decor, caută "beach" și selectează un decor de plajă precum "Malibu Beach"</li>
          </ol>

          <InfoBox title="Sfat" icon="info" variant="primary">
            <p>
              Personajul "Shell" (scoica) are 3 costume diferite care vor fi folosite aleatoriu 
              pentru a adăuga diversitate în joc.
            </p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'controlul-colacului',
      title: 'Controlarea colacului cu mouse-ul',
      content: (
        <>
          <p className="mb-4">
            Primul pas este să facem colacul să urmărească mouse-ul pe axa orizontală. 
            Acesta va fi instrumentul principal pentru a menține mingea în aer. 
            Selectează personajul <strong>Swim Ring</strong> și adaugă următorul cod:
          </p>

          <BlockCodeExample 
            title="Codul pentru colac" 
            src="https://cdn.pixabay.com/photo/2022/01/30/13/33/scratch-6980327_1280.jpg" 
            alt="Codul pentru controlul colacului" 
            caption="Cod pentru controlarea colacului cu mouse-ul"
          />

          <h3 className="font-bold text-xl mt-6 mb-2">Cum funcționează:</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-4">
            <li><strong>La începerea jocului</strong> - colacul se poziționează în partea de jos a ecranului, se face vizibil, și se setează scorul inițial la 0.</li>
            <li><strong>Controlul mișcării</strong> - într-o buclă infinită, colacul își ajustează poziția orizontală (x) pentru a urma poziția mouse-ului (mouseX).
            </li>
            <li><strong>Limitarea mișcării</strong> - Ne asigurăm că colacul nu poate ieși din marginile ecranului.</li>
          </ol>

          <InfoBox title="Sfat" icon="info" variant="primary">
            <p>
              Valoarea y a colacului rămâne fixă (-140) pentru a-l menține în partea de jos a ecranului. 
              Poți ajusta această valoare dacă vrei să schimbi înălțimea la care se deplasează colacul.
            </p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'mingea',
      title: 'Programarea mingii de plajă',
      content: (
        <>
          <p className="mb-4">
            Acum vom programa comportamentul mingii de plajă, care este elementul central al jocului. 
            Mingea va cădea în mod natural, va ricoșa când atinge colacul și va adăuga puncte la scor. 
            Selectează personajul <strong>Beach Ball</strong> și adaugă următorul cod:
          </p>

          <BlockCodeExample 
            title="Codul pentru mingea de plajă" 
            src="https://cdn.pixabay.com/photo/2022/01/30/13/33/scratch-6980327_1280.jpg" 
            alt="Codul pentru mingea de plajă" 
            caption="Cod pentru simularea fizicii mingii de plajă"
          />

          <h3 className="font-bold text-xl mt-6 mb-2">Cum funcționează:</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-4">
            <li><strong>La început</strong> - mingea se poziționează în partea de sus a ecranului și primește o direcție inițială aleatoare.</li>
            <li><strong>Simularea gravitației</strong> - într-o buclă infinită:
              <ul className="list-disc pl-6 mt-1 mb-2">
                <li>Aplicăm o forță gravitațională constantă (modifică y cu un număr negativ)</li>
                <li>Verificăm dacă mingea atinge colacul - în acest caz, ricoșează și adaugă un punct</li>
                <li>Verificăm dacă mingea atinge linia de jos - în acest caz, jocul se termină</li>
              </ul>
            </li>
            <li><strong>Ricoșare</strong> - Când mingea atinge colacul, ii dăm o velocitate pozitivă (în sus) și o direcție ușor aleatoare pentru a face jocul mai interesant.</li>
          </ol>

          <InfoBox title="Sfat" icon="info" variant="primary">
            <p>
              Poți face jocul mai dificil sau mai ușor ajustând valorile de gravitație și ricoșare. 
              O valoare mai mare pentru gravitație va face mingea să cadă mai repede.
            </p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'scoici',
      title: 'Adăugarea scoicilor bonus',
      content: (
        <>
          <p className="mb-4">
            Pentru a face jocul mai interesant, vom adăuga scoici marine care apar aleatoriu pe ecran. 
            Când mingea atinge o scoică, jucătorul primește puncte bonus. 
            Selectează personajul <strong>Shell</strong> și adaugă următorul cod:
          </p>

          <BlockCodeExample 
            title="Codul pentru scoici" 
            src="https://cdn.pixabay.com/photo/2022/01/30/13/33/scratch-6980327_1280.jpg" 
            alt="Codul pentru scoici" 
            caption="Cod pentru generarea și comportamentul scoicilor bonus"
          />

          <h3 className="font-bold text-xl mt-6 mb-2">Cum funcționează:</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-4">
            <li><strong>La început</strong> - ascundem scoica originală și pregătim generarea de clone.</li>
            <li><strong>Generarea scoicilor</strong> - într-o buclă infinită:
              <ul className="list-disc pl-6 mt-1 mb-2">
                <li>Așteptăm un interval aleatoriu de timp (între 5 și 10 secunde)</li>
                <li>Creăm o nouă scoică (clonă)</li>
              </ul>
            </li>
            <li><strong>Comportamentul scoicilor</strong> - fiecare clonă:
              <ul className="list-disc pl-6 mt-1 mb-2">
                <li>Alege aleatoriu unul din cele 3 costume disponibile</li>
                <li>Apare la o poziție aleatoare pe ecran</li>
                <li>Se face vizibilă pentru 5 secunde</li>
                <li>Verifică constant dacă este atinsă de minge, caz în care adaugă 3 puncte la scor și dispare</li>
              </ul>
            </li>
          </ol>

          <InfoBox title="Sfat" icon="info" variant="primary">
            <p>
              Poți adăuga efecte sonore sau vizuale atunci când mingea colectează o scoică 
              pentru a face experiența mai satisfăcătoare.
            </p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'pufferfish',
      title: 'Adăugarea peștelui pufferfish',
      content: (
        <>
          <p className="mb-4">
            Pentru a crește dificultatea, vom adăuga un pește pufferfish care apare aleatoriu. 
            Dacă mingea atinge acest pește, jucătorul pierde puncte. 
            Selectează personajul <strong>Pufferfish</strong> și adaugă următorul cod:
          </p>

          <BlockCodeExample 
            title="Codul pentru pufferfish" 
            src="https://cdn.pixabay.com/photo/2022/01/30/13/33/scratch-6980327_1280.jpg" 
            alt="Codul pentru pufferfish" 
            caption="Cod pentru generarea și comportamentul peștelui pufferfish"
          />

          <h3 className="font-bold text-xl mt-6 mb-2">Cum funcționează:</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-4">
            <li><strong>La început</strong> - ascundem peștele original și pregătim generarea de clone.</li>
            <li><strong>Generarea peștilor</strong> - într-o buclă infinită:
              <ul className="list-disc pl-6 mt-1 mb-2">
                <li>Așteptăm un interval aleatoriu de timp (între 10 și 15 secunde)</li>
                <li>Creăm un nou pește (clonă)</li>
              </ul>
            </li>
            <li><strong>Comportamentul peștilor</strong> - fiecare clonă:
              <ul className="list-disc pl-6 mt-1 mb-2">
                <li>Apare la o poziție aleatoare pe ecran</li>
                <li>Se face vizibilă pentru 4 secunde</li>
                <li>Verifică constant dacă este atinsă de minge, caz în care scade 5 puncte din scor și dispare</li>
              </ul>
            </li>
          </ol>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-700 mb-2">Pentru scoici (bonus):</h4>
              <div className="bg-green-100 p-3 rounded text-green-800">
                <p>dacă atinge [Beach Ball] atunci</p>
                <p className="mt-1">modifică [Scor] cu [3]</p>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-700 mb-2">Pentru pufferfish (penalizare):</h4>
              <div className="bg-red-100 p-3 rounded text-red-800">
                <p>dacă atinge [Beach Ball] atunci</p>
                <p className="mt-1">modifică [Scor] cu [-5]</p>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'conditii-final',
      title: 'Condiții de victorie și înfrângere',
      content: (
        <>
          <p className="mb-4">
            În final, vom adăuga condiții pentru a determina când jocul se termină cu victorie sau înfrângere. 
            Vom folosi personajele "Win" și "Lose" care sunt deja în proiect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 mb-6">
            <div>
              <h4 className="font-bold text-xl mb-2">Pentru personajul "Win":</h4>
              <BlockCodeExample 
                title="Codul pentru victorie" 
                src="https://cdn.pixabay.com/photo/2022/01/30/13/33/scratch-6980327_1280.jpg" 
                alt="Codul pentru victorie" 
                caption="Cod pentru mesajul de victorie"
              />
              <p className="mt-2 text-gray-700">Când scorul atinge 50, jucătorul câștigă!</p>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-2">Pentru personajul "Lose":</h4>
              <BlockCodeExample 
                title="Codul pentru înfrângere" 
                src="https://cdn.pixabay.com/photo/2022/01/30/13/33/scratch-6980327_1280.jpg" 
                alt="Codul pentru înfrângere" 
                caption="Cod pentru mesajul de înfrângere"
              />
              <p className="mt-2 text-gray-700">Când mingea atinge pământul (linia de jos), jocul se termină!</p>
            </div>
          </div>

          <h3 className="font-bold text-xl mt-6 mb-2">Cum funcționează:</h3>
          <p className="mb-4">
            Ambele personaje sunt ascunse la început. Ele apar doar când sunt îndeplinite condițiile specifice:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Win</strong> - verifică constant dacă scorul a atins 50 de puncte și afișează un mesaj de felicitare când această condiție este îndeplinită.</li>
            <li><strong>Lose</strong> - ascultă pentru mesajul "game over" (care este trimis când mingea atinge linia de jos) și afișează un mesaj de înfrângere.</li>
          </ul>
          <p className="mb-4">
            Când apare oricare dintre aceste mesaje, jocul se oprește folosind blocul "stop [totul]".
          </p>

          <InfoBox title="Sfat" icon="info" variant="primary">
            <p>
              Poți personaliza mesajele de victorie și înfrângere sau poți adăuga efecte sonore 
              pentru a face finalul jocului mai interesant.
            </p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'testare',
      title: 'Testează și îmbunătățește',
      content: (
        <>
          <p className="mb-4">
            Acum că toate elementele jocului sunt implementate, este timpul să îl testezi! 
            Apasă steagul verde și încearcă să menții mingea în aer cât mai mult timp, 
            colectând scoici și evitând peștii pufferfish.
          </p>

          <h3 className="font-bold text-xl mt-6 mb-3">Provocări pentru îmbunătățirea jocului</h3>
          <p className="mb-4">
            După ce ai terminat jocul de bază, încearcă aceste îmbunătățiri:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Challenge title="Adaugă efecte sonore" difficulty="easy">
              <p>Adaugă sunete pentru ricoșarea mingii, colectarea scoicilor, lovirea peștelui pufferfish și pentru finalul jocului.</p>
            </Challenge>
            
            <Challenge title="Adaugă un cronometru" difficulty="medium">
              <p>Implementează un timer care să măsoare cât timp reușești să ții mingea în aer.</p>
            </Challenge>
            
            <Challenge title="Adaugă mai multe tipuri de obiecte" difficulty="medium">
              <p>Creează noi obiecte bonus sau obstacole, cum ar fi stele de mare, meduze sau valuri.</p>
            </Challenge>
            
            <Challenge title="Crește dificultatea progresiv" difficulty="hard">
              <p>Fă jocul să devină mai dificil pe măsură ce scorul crește, de exemplu mărind viteza de cădere a mingii.</p>
            </Challenge>
          </div>
        </>
      )
    },
    {
      id: 'concluzii',
      title: 'Concluzii',
      content: (
        <>
          <p className="mb-6">
            Ai creat un joc captivant de vară în care trebuie să menții o minge de plajă în aer! 
            Acest proiect ți-a permis să înveți despre controlul cu mouse-ul, simularea fizicii, 
            generarea de obiecte aleatorii și implementarea unui sistem de punctaj.
          </p>

          <InfoBox title="Ce ai învățat" icon="success" variant="success">
            <ul className="list-disc list-inside space-y-1">
              <li>Cum să controlezi un obiect folosind mouse-ul</li>
              <li>Cum să simulezi gravitația și ricoșarea pentru un comportament realist</li>
              <li>Cum să generezi obiecte aleatorii cu comportamente diferite</li>
              <li>Cum să detectezi coliziuni între multiple personaje</li>
              <li>Cum să implementezi un sistem de punctaj cu recompense și penalizări</li>
            </ul>
          </InfoBox>

          <div className="mt-6 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-lg font-semibold mb-2">Ce urmează?</h3>
            <p className="mb-4">
              Acum că ai învățat cum să creezi un joc bazat pe fizică și controlat cu mouse-ul, 
              poți încerca să creezi jocuri mai complexe cu mai multe niveluri sau cu mecanici de joc diferite.
            </p>
            <a 
              href="/courses/scratch" 
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Descoperă mai multe tutoriale Scratch
            </a>
          </div>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      title="Beach Ball Bounce"
      subtitle="Lecția 5 • Scratch Programming"
      courseId="scratch"
      sessionId="5"
      heroColor="bg-gradient-to-r from-cyan-500 to-blue-500"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Sesiunea 4: City Runner",
        path: "/scratch/session4cityrunner"
      }}
      nextLesson={{
        title: "Sesiunea 6: Stitch's Beach Adventure",
        path: "/scratch/session6stitchbeach"
      }}
      sections={sections}
    />
  );
};

export default Session5BeachBallBounce;
