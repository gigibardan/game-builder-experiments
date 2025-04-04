
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';

const Session3 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'variabile', title: 'Variabile în Scratch' },
    { id: 'conditii', title: 'Condiții și blocuri IF' },
    { id: 'proiect', title: 'Proiectul nostru' },
    { id: 'exercitiu', title: 'Exercițiu pentru acasă' },
  ];

  const resources = [
    { title: 'Documentație Scratch - Variabile', url: 'https://en.scratch-wiki.info/wiki/Variables_Tutorial' },
    { title: 'Documentație Scratch - Condiții', url: 'https://en.scratch-wiki.info/wiki/If_()_Then_(block)' },
    { title: 'Tutorial video - Jocuri în Scratch', url: 'https://scratch.mit.edu/studios/3160275/' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>
          <LearningOutcome items={[
            "Înțelegerea conceptului de variabile și utilizarea lor în Scratch",
            "Utilizarea condițiilor și a blocurilor IF pentru luarea deciziilor",
            "Crearea unui joc simplu folosind variabile și condiții",
            "Implementarea unui sistem de scor și condiții de victorie"
          ]} />
          
          <p className="mt-4 text-gray-700">
            În această lecție vom învăța despre două concepte fundamentale în programare: 
            <strong> variabilele</strong> și <strong>condițiile</strong>. Vom crea un joc simplu 
            de prindere a obiectelor în care vom folosi aceste concepte pentru a ține scorul 
            și a verifica coliziunea între personaje.
          </p>
        </>
      )
    },
    {
      id: 'variabile',
      title: 'Variabile în Scratch',
      content: (
        <>
          <p className="mb-6 text-gray-700">
            Variabilele sunt ca niște cutii în care putem păstra informații. În Scratch, putem crea variabile
            pentru a stoca numere, text sau alte tipuri de date pe care le putem folosi și modifica pe parcursul
            programului nostru.
          </p>

          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src="https://en.scratch-wiki.info/w/images/Variableblock.png" 
              alt="Scratch Variables" 
              className="w-full"
            />
          </div>
          
          <InfoBox title="Cum creăm o variabilă?" variant="primary">
            <p>Pentru a crea o variabilă în Scratch, urmează acești pași:</p>
            <ol className="list-decimal pl-5 space-y-2 mt-2">
              <li>Mergi la secțiunea "Variabile" din paleta de blocuri</li>
              <li>Click pe butonul "Creează o variabilă"</li>
              <li>Dă un nume variabilei (de exemplu "scor" sau "vieti")</li>
              <li>Alege dacă variabila este pentru toate sprite-urile sau doar pentru un anumit sprite</li>
            </ol>
          </InfoBox>

          <p className="mt-6 text-gray-700">
            În jocul nostru, vom folosi variabile pentru a ține evidența scorului și a vieților jucătorului.
            Acest lucru ne va permite să oferim feedback jucătorului și să implementăm condiții pentru terminarea jocului.
          </p>
        </>
      )
    },
    {
      id: 'conditii',
      title: 'Condiții și Blocuri IF',
      content: (
        <>
          <p className="mb-6 text-gray-700">
            Condițiile ne permit să executăm anumite blocuri de cod doar dacă o anumită condiție este îndeplinită.
            În Scratch, folosim blocurile "dacă" (if) pentru a implementa structuri de decizie.
          </p>

          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src="https://en.scratch-wiki.info/w/images/If_Then.png" 
              alt="Scratch If-Then Blocks" 
              className="w-full"
            />
          </div>

          <InfoBox title="Tipuri de blocuri condiționale" variant="secondary">
            <p>În Scratch avem mai multe tipuri de blocuri condiționale:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Dacă... atunci</strong> - execută codul doar dacă condiția este adevărată</li>
              <li><strong>Dacă... atunci... altfel</strong> - execută un cod dacă condiția e adevărată și alt cod dacă e falsă</li>
              <li><strong>Așteaptă până când</strong> - oprește execuția până când condiția devine adevărată</li>
              <li><strong>Repetă până când</strong> - repetă un bloc de cod până când condiția devine adevărată</li>
            </ul>
          </InfoBox>

          <p className="mt-6 text-gray-700">
            În jocul nostru, vom folosi blocuri condiționale pentru a verifica dacă jucătorul a prins obiectul
            sau dacă a atins un obstacol. Acest lucru ne va permite să actualizăm scorul și să gestionăm viețile jucătorului.
          </p>
        </>
      )
    },
    {
      id: 'proiect',
      title: 'Proiectul nostru: Jocul de Prindere',
      content: (
        <>
          <p className="mb-6 text-gray-700">
            În această lecție, vom crea un joc simplu în care vom folosi variabile pentru a ține scorul și condiții 
            pentru a verifica când jucătorul prinde obiectul.
          </p>

          <StepItem number={1} title="Setarea scenei și a personajelor">
            <p>Pentru a începe, trebuie să configurăm scena și personajele jocului nostru:</p>
            <ol className="list-decimal pl-5 space-y-2 mt-2">
              <li>Adaugă sprite-ul pentru jucător (poate fi pisica implicită sau un alt personaj)</li>
              <li>Adaugă un sprite pentru obiectul care va cădea (poate fi un măr, o minge, etc.)</li>
              <li>Opțional, schimbă fundalul pentru a se potrivi cu tema jocului</li>
            </ol>
          </StepItem>

          <StepItem number={2} title="Crearea variabilelor necesare">
            <p>Pentru jocul nostru, vom avea nevoie de următoarele variabile:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>scor</strong> - pentru a ține evidența punctelor acumulate</li>
              <li><strong>vieți</strong> - pentru a ține evidența vieților rămase (opțional pentru exercițiu)</li>
            </ul>
            <p className="mt-2">Creează aceste variabile din secțiunea "Variabile" a paletei de blocuri.</p>
          </StepItem>

          <StepItem number={3} title="Programarea jucătorului">
            <p>Jucătorul trebuie să poată fi controlat de la tastatură:</p>
            <ol className="list-decimal pl-5 space-y-2 mt-2">
              <li>Adaugă un bloc "când se apasă steagul verde" pentru a începe programul</li>
              <li>Adaugă blocuri pentru a mișca personajul stânga-dreapta cu săgețile</li>
              <li>Limitează mișcarea personajului pentru a rămâne în limitele ecranului</li>
            </ol>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                când se apasă steagul verde<br/>
                pentru totdeauna<br/>
                &nbsp;&nbsp;dacă tasta săgeată dreapta este apăsată atunci<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;modifică x cu 10<br/>
                &nbsp;&nbsp;end<br/>
                &nbsp;&nbsp;dacă tasta săgeată stânga este apăsată atunci<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;modifică x cu -10<br/>
                &nbsp;&nbsp;end<br/>
                &nbsp;&nbsp;dacă x &gt; 230 atunci<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;setează x la 230<br/>
                &nbsp;&nbsp;end<br/>
                &nbsp;&nbsp;dacă x &lt; -230 atunci<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;setează x la -230<br/>
                &nbsp;&nbsp;end<br/>
                end
              </p>
            </div>
          </StepItem>

          <StepItem number={4} title="Programarea obiectului care cade">
            <p>Obiectul care cade trebuie să apară în partea de sus a ecranului și să cadă:</p>
            <ol className="list-decimal pl-5 space-y-2 mt-2">
              <li>Adaugă un bloc "când se apasă steagul verde" pentru a începe programul</li>
              <li>Setează poziția inițială a obiectului (sus, cu o poziție x aleatorie)</li>
              <li>Creează o buclă pentru a face obiectul să cadă</li>
              <li>Verifică dacă obiectul atinge jucătorul sau cade jos de tot</li>
              <li>Actualizează scorul și resetează poziția obiectului</li>
            </ol>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                când se apasă steagul verde<br/>
                setează scor la 0<br/>
                pentru totdeauna<br/>
                &nbsp;&nbsp;mergi la x: (număr aleatoriu între -230 și 230) y: 180<br/>
                &nbsp;&nbsp;repetă până când (atinge jucătorul? sau y &lt; -170)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;modifică y cu -5<br/>
                &nbsp;&nbsp;end<br/>
                &nbsp;&nbsp;dacă atinge jucătorul? atunci<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;modifică scor cu 1<br/>
                &nbsp;&nbsp;end<br/>
                end
              </p>
            </div>
          </StepItem>

          <InfoBox title="Sfat important" variant="warning">
            <p>Nu uita să verifici dacă obiectul atinge marginea de jos sau jucătorul. Folosește blocul "dacă atinge..." pentru a verifica acest lucru.</p>
            <p className="mt-2">De asemenea, asigură-te că resetezi poziția obiectului după ce a fost prins sau a căzut jos de tot.</p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'exercitiu',
      title: 'Exercițiu pentru acasă',
      content: (
        <>
          <Challenge title="Extinde jocul cu următoarele funcționalități" difficulty="medium">
            <p className="text-gray-700 mb-4">
              Extinde jocul creat în timpul lecției adăugând:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-700">O variabilă pentru vieți (jucătorul începe cu 3 vieți)</li>
              <li className="text-gray-700">Un alt sprite "obstacol" care trebuie evitat</li>
              <li className="text-gray-700">Folosește blocuri "dacă" pentru a verifica ciocnirea cu obstacolul</li>
              <li className="text-gray-700">Dacă jucătorul atinge obstacolul, scade o viață</li>
              <li className="text-gray-700">Când viețile ajung la 0, jocul se termină</li>
              <li className="text-gray-700">Adaugă un fundal și efecte sonore pentru a face jocul mai interesant</li>
            </ul>
          </Challenge>

          <InfoBox title="Nu uita!" variant="success">
            <p>Încarcă proiectul tău pe Scratch și împărtășește-l cu colegii și profesorul tău. Poți primi feedback valoros și idei pentru îmbunătățirea jocului.</p>
          </InfoBox>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="scratch"
      sessionId="3"
      title="Variabile și Condiții"
      subtitle="Învățăm să folosim variabile și structuri de decizie în Scratch"
      heroColor="bg-gradient-to-r from-yellow-500 to-amber-500"
      previousLesson={{
        title: "Lecția anterioară",
        path: "/scratch/session2"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/scratch/session4"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session3;
