
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session2 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'planificare', title: 'Planificarea Aplicației' },
    { id: 'configurare', title: 'Configurarea Proiectului' },
    { id: 'interfata', title: 'Interfața Utilizator' },
    { id: 'logica', title: 'Logica Aplicației' },
    { id: 'testare', title: 'Testare și Depanare' },
    { id: 'exercitii', title: 'Exerciții pentru acasă' },
  ];

  const resources = [
    { title: 'Biblioteca MIT App Inventor', url: 'https://appinventor.mit.edu/explore/library' },
    { title: 'Tutoriale oficiale', url: 'https://appinventor.mit.edu/explore/ai2/tutorials' },
    { title: 'Forum de suport', url: 'https://community.appinventor.mit.edu/' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>
          <p className="mb-4">
            În această sesiune, vom crea o aplicație de quiz interactivă care testează cunoștințele utilizatorului 
            printr-o serie de întrebări cu răspunsuri multiple. Acest tip de aplicație este foarte popular și poate fi 
            personalizată pentru diverse subiecte educaționale sau de divertisment.
          </p>
          <p className="mb-4">
            Vom folosi componente de interfață utilizator precum butoane, etichete și imagini pentru a crea o experiență 
            plăcută și vom învăța cum să gestionăm logica din spatele aplicației pentru a urmări și verifica răspunsurile utilizatorului.
          </p>

          <LearningOutcome items={[
            "Cum să creezi un sistem de navigare între întrebări",
            "Cum să implementezi logica de verificare a răspunsurilor",
            "Cum să calculezi și să afișezi scorul final",
            "Cum să folosești liste pentru a stoca întrebările și răspunsurile",
            "Cum să adaugi feedback audio și vizual pentru răspunsurile utilizatorului"
          ]} />
        </>
      )
    },
    {
      id: 'planificare',
      title: 'Pasul 1: Planificarea Aplicației',
      content: (
        <>
          <p className="mb-4">
            Înainte de a începe codarea, este important să planificăm structura aplicației noastre de quiz:
          </p>

          <ol className="list-decimal list-inside space-y-4 mb-6">
            <li className="p-4 border rounded-md bg-gray-50">
              <strong>Ecrane necesare</strong>:
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>Ecran de start cu titlu și buton de începere</li>
                <li>Ecran de quiz cu întrebări și opțiuni de răspuns</li>
                <li>Ecran de rezultate cu scorul final și opțiune de reluare</li>
              </ul>
            </li>
            <li className="p-4 border rounded-md bg-gray-50">
              <strong>Date necesare</strong>:
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>Lista de întrebări</li>
                <li>Lista de răspunsuri pentru fiecare întrebare</li>
                <li>Răspunsurile corecte pentru fiecare întrebare</li>
                <li>Scorul curent al utilizatorului</li>
              </ul>
            </li>
            <li className="p-4 border rounded-md bg-gray-50">
              <strong>Funcționalități</strong>:
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>Navigarea între întrebări</li>
                <li>Verificarea răspunsurilor</li>
                <li>Calcularea scorului final</li>
                <li>Feedback pentru utilizator (corect/greșit)</li>
                <li>Opțiune de reluare a quiz-ului</li>
              </ul>
            </li>
          </ol>

          <ImageExample 
            src="https://appinventor.mit.edu/explore/sites/all/files/ai2tutorials/quizme/quizMeScreen1.png" 
            alt="Exemplu de aplicație Quiz în App Inventor" 
            caption="Exemplu de interfață pentru aplicația de quiz"
          />
        </>
      )
    },
    {
      id: 'configurare',
      title: 'Pasul 2: Configurarea Proiectului',
      content: (
        <>
          <p className="mb-4">
            Vom începe prin a crea un nou proiect în MIT App Inventor și configurarea componentelor necesare.
          </p>
          
          <StepItem number={1} title="Crearea unui nou proiect">
            <ol className="list-decimal list-inside space-y-2">
              <li>Deschide MIT App Inventor în browser</li>
              <li>Creează un proiect nou numit "QuizApp"</li>
              <li>Organizează proiectul folosind mai multe ecrane</li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Adăugarea componentelor necesare">
            <p>Pentru ecranul principal, vom avea nevoie de următoarele componente:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Label - pentru titlul aplicației</li>
              <li>Button - pentru butonul de start</li>
              <li>Image - pentru un logo sau imagine decorativă (opțional)</li>
            </ul>
          </StepItem>

          <StepItem number={3} title="Configurarea ecranului de quiz">
            <p>Pentru ecranul cu întrebări, vom avea nevoie de:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Label - pentru afișarea întrebării</li>
              <li>RadioButton sau CheckBox - pentru opțiunile de răspuns</li>
              <li>Button - pentru confirmarea răspunsului și trecerea la următoarea întrebare</li>
              <li>Label - pentru afișarea scorului curent</li>
            </ul>
          </StepItem>

          <InfoBox title="Sfat util" icon="star" variant="primary">
            <p>Organizează componentele într-un mod clar și estetic folosind containere precum VerticalArrangement și HorizontalArrangement.</p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'interfata',
      title: 'Pasul 3: Crearea Interfeței Utilizator',
      content: (
        <>
          <p className="mb-4">
            Acum vom construi interfața utilizator pentru aplicația noastră de quiz.
          </p>

          <StepItem number={1} title="Crearea ecranului de start">
            <p>Configurează ecranul de start cu următoarele elemente:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Un titlu atractiv (folosind un Label cu font mai mare)</li>
              <li>O scurtă descriere a quiz-ului (opțional)</li>
              <li>Un buton "Start Quiz" pentru a începe jocul</li>
            </ul>
            <BlockCodeExample 
              title="Design pentru ecranul de start" 
              src="https://appinventor.mit.edu/explore/sites/all/files/Teach/media/quizStartScreen.png" 
              alt="Ecran de start pentru Quiz" 
              caption="Exemplu de design pentru ecranul de start"
            />
          </StepItem>

          <StepItem number={2} title="Crearea ecranului de quiz">
            <p>Pentru ecranul cu întrebările quiz-ului:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Adaugă un Label pentru afișarea întrebării curente</li>
              <li>Adaugă 4 RadioButton pentru opțiunile de răspuns</li>
              <li>Adaugă un buton "Verifică" pentru a verifica răspunsul</li>
              <li>Adaugă un Label pentru a afișa feedback (corect/greșit)</li>
              <li>Adaugă un buton "Următoarea întrebare" pentru a trece la următoarea întrebare</li>
            </ul>
          </StepItem>

          <StepItem number={3} title="Crearea ecranului de rezultate">
            <p>Pentru ecranul final cu rezultatele:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Adaugă un Label pentru a afișa scorul final</li>
              <li>Adaugă un mesaj de felicitare sau încurajare</li>
              <li>Adaugă un buton "Joacă din nou" pentru a reporni quiz-ul</li>
            </ul>
          </StepItem>
        </>
      )
    },
    {
      id: 'logica',
      title: 'Pasul 4: Implementarea Logicii Aplicației',
      content: (
        <>
          <p className="mb-4">
            Acum vom implementa logica din spatele aplicației, folosind blocurile din App Inventor.
          </p>

          <StepItem number={1} title="Definirea listelor cu întrebări și răspunsuri">
            <p>Creăm listele pentru a stoca întrebările și răspunsurile:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>O listă pentru întrebări</li>
              <li>O listă pentru opțiunile de răspuns</li>
              <li>O listă pentru răspunsurile corecte</li>
            </ul>
            <BlockCodeExample 
              title="Definirea listelor în App Inventor" 
              src="https://appinventor.mit.edu/explore/sites/all/files/ai2tutorials/quizme/quizMeBlock1.png" 
              alt="Definirea listelor în App Inventor" 
              caption="Exemplu de definire a listelor pentru întrebări și răspunsuri"
            />
          </StepItem>

          <StepItem number={2} title="Implementarea verificării răspunsurilor">
            <p>Creăm blocuri pentru verificarea răspunsurilor selectate:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Verificăm care RadioButton este selectat</li>
              <li>Comparăm răspunsul selectat cu răspunsul corect</li>
              <li>Actualizăm scorul dacă răspunsul este corect</li>
              <li>Oferim feedback utilizatorului</li>
            </ol>
          </StepItem>

          <StepItem number={3} title="Implementarea navigării între întrebări">
            <p>Creăm blocuri pentru navigarea între întrebări:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Cream o variabilă pentru a ține evidența întrebării curente</li>
              <li>Actualizăm întrebarea și opțiunile când se apasă butonul "Următoarea întrebare"</li>
              <li>Verificăm dacă am ajuns la ultima întrebare pentru a afișa ecranul final</li>
            </ol>
            <BlockCodeExample 
              title="Navigarea între întrebări" 
              src="https://appinventor.mit.edu/explore/sites/all/files/ai2tutorials/quizme/quizMeBlock2.png" 
              alt="Blocuri pentru navigarea între întrebări" 
              caption="Exemplu de blocuri pentru navigarea între întrebările quiz-ului"
            />
          </StepItem>
        </>
      )
    },
    {
      id: 'testare',
      title: 'Pasul 5: Testarea și Depanarea Aplicației',
      content: (
        <>
          <p className="mb-4">
            Este important să testăm aplicația pentru a ne asigura că funcționează corect și să corectăm eventualele erori.
          </p>

          <StepItem number={1} title="Testarea în emulator">
            <p>Folosește emulatorul App Inventor pentru a testa aplicația:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Verifică dacă întrebările și opțiunile se afișează corect</li>
              <li>Verifică dacă verificarea răspunsurilor funcționează corect</li>
              <li>Verifică dacă scorul se actualizează corect</li>
              <li>Verifică dacă navigarea între întrebări funcționează</li>
            </ul>
          </StepItem>

          <StepItem number={2} title="Testarea pe dispozitiv">
            <p>Dacă este posibil, testează aplicația pe un dispozitiv Android:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Instalează aplicația MIT AI2 Companion pe dispozitiv</li>
              <li>Conectează dispozitivul la proiectul App Inventor</li>
              <li>Testează aplicația în condiții reale</li>
            </ol>
          </StepItem>

          <InfoBox title="Sfat pentru depanare" icon="info" variant="secondary">
            <p>Dacă întâmpini probleme, încearcă să adaugi blocuri pentru a afișa mesaje de depanare sau să verifici valorile variabilelor la fiecare pas.</p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'exercitii',
      title: 'Exerciții pentru acasă',
      content: (
        <>
          <Challenge title="Îmbunătățește aplicația de quiz" difficulty="medium">
            <p className="text-gray-700 mb-4">
              Extinde aplicația de quiz adăugând următoarele funcționalități:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-gray-700">Adaugă un cronometru pentru fiecare întrebare</li>
              <li className="text-gray-700">Implementează diferite niveluri de dificultate</li>
              <li className="text-gray-700">Adaugă imagini pentru întrebări sau răspunsuri</li>
              <li className="text-gray-700">Adaugă efecte sonore pentru răspunsuri corecte și greșite</li>
              <li className="text-gray-700">Implementează un sistem de salvare a scorurilor maxime</li>
            </ul>
          </Challenge>

          <Challenge title="Creează-ți propriul quiz tematic" difficulty="hard">
            <p className="text-gray-700 mb-4">
              Creează un quiz tematic complet pe un subiect la alegere:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-gray-700">Alege un subiect (geografie, istorie, filme, sport, etc.)</li>
              <li className="text-gray-700">Creează cel puțin 10 întrebări cu răspunsuri multiple</li>
              <li className="text-gray-700">Adaugă imagini și design personalizat pentru tema aleasă</li>
              <li className="text-gray-700">Implementează un sistem de feedback detaliat</li>
              <li className="text-gray-700">Adaugă un ecran de ajutor cu instrucțiuni</li>
            </ul>
          </Challenge>

          <InfoBox title="Nu uita!" icon="success" variant="success">
            <p>Salvează-ți proiectul frecvent și documentează codul pentru a putea reveni la el mai târziu. Împărtășește aplicația ta cu colegii și profesorul pentru feedback!</p>
          </InfoBox>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="appinventor"
      sessionId="2"
      title="Aplicația Quiz"
      subtitle="Dezvoltă o aplicație de quiz interactivă cu întrebări și răspunsuri multiple!"
      heroColor="bg-gradient-to-r from-course-purple to-course-blue"
      previousLesson={{
        title: "Sesiunea 1: Jocul Clicker",
        path: "/appinventor/session1"
      }}
      nextLesson={{
        title: "Sesiunea 3: Drawing App",
        path: "/appinventor/session3"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session2;
