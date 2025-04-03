
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample } from '@/components/CodeExample';

const Session1 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'ce-este', title: 'Ce este Frontend Development' },
    { id: 'de-ce-inveti', title: 'De ce să înveți Frontend' },
    { id: 'ce-vom-invata', title: 'Ce vom învăța' },
    { id: 'exercitii', title: 'Exerciții pentru acasă' },
  ];

  const resources = [
    { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/' },
    { title: 'W3Schools HTML Tutorial', url: 'https://www.w3schools.com/html/' },
    { title: 'CSS Tricks', url: 'https://css-tricks.com/' },
  ];

  return (
    <LessonLayout
      courseId="frontenddev"
      sessionId="1"
      title="Lecția 1: Introducere în Frontend Development"
      subtitle="Primii pași în dezvoltarea web modernă"
      heroColor="bg-gradient-to-r from-cyan-600 to-cyan-400"
      nextLesson={{
        title: "Lecția 2: HTML Basics",
        path: "/frontenddev/session2"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
    >
      <h2 className="text-2xl font-bold mb-6 text-cyan-700" id="introducere">Introducere</h2>
      <p className="mb-6 text-gray-700">
        Bine ai venit la primul modul din cursul nostru de Frontend Development! În această lecție vom 
        explora bazele dezvoltării web și vom înțelege ce înseamnă să fii un dezvoltator frontend.
      </p>

      <LearningOutcome items={[
        "Ce este Frontend Development și rolul său în lumea web",
        "Tehnologiile de bază folosite în dezvoltarea frontend (HTML, CSS, JavaScript)",
        "De ce este Frontend Development o abilitate valoroasă de învățat",
        "Un plan clar al subiectelor pe care le vom acoperi în acest curs"
      ]} />

      <h2 className="text-2xl font-bold mb-6 text-cyan-700" id="ce-este">Ce este Frontend Development?</h2>
      <p className="mb-6 text-gray-700">
        Frontend Development reprezintă partea de dezvoltare web care se ocupă cu ceea ce utilizatorii 
        văd și interacționează într-un site sau aplicație. Aceasta include design-ul, layout-ul, 
        navigarea și toate elementele interactive pe care utilizatorii le folosesc direct.
      </p>

      <ImageExample 
        src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png" 
        alt="Frontend Development" 
        caption="Frontend Development înseamnă crearea părții vizibile și interactive a unui website"
      />

      <h3 className="text-xl font-bold mb-4 mt-6">Tehnologii de bază în Frontend</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border rounded-lg p-4 bg-gradient-to-b from-orange-50 to-white">
          <h4 className="font-bold text-orange-600 mb-2">HTML</h4>
          <p>Structura și conținutul - scheletul oricărei pagini web.</p>
        </div>
        <div className="border rounded-lg p-4 bg-gradient-to-b from-blue-50 to-white">
          <h4 className="font-bold text-blue-600 mb-2">CSS</h4>
          <p>Stilul și design-ul - cum arată pagina web.</p>
        </div>
        <div className="border rounded-lg p-4 bg-gradient-to-b from-yellow-50 to-white">
          <h4 className="font-bold text-yellow-600 mb-2">JavaScript</h4>
          <p>Interactivitatea - cum funcționează pagina web.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-cyan-700" id="de-ce-inveti">De ce să înveți Frontend Development?</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>Cerere mare pe piața muncii pentru dezvoltatori frontend</li>
        <li>Combinație perfectă de creativitate și logică</li>
        <li>Vezi imediat rezultatele muncii tale</li>
        <li>Posibilitatea de a lucra ca freelancer sau remote</li>
        <li>Peisaj tehnologic în continuă evoluție și învățare</li>
      </ul>

      <InfoBox title="Știai că?" icon="star">
        <p>Conform studiilor recente, dezvoltatorii frontend sunt printre cei mai căutați profesioniști IT, 
        cu salarii competitive și oportunități de lucru flexibile.</p>
      </InfoBox>

      <h2 className="text-2xl font-bold mb-6 text-cyan-700" id="ce-vom-invata">Ce vom învăța în acest curs</h2>
      <p className="mb-6 text-gray-700">
        În acest curs, vom explora fundamentele dezvoltării web frontend, începând cu HTML, CSS și JavaScript. 
        Vom avansa spre tehnologii moderne precum React, vom învăța despre design responsive și 
        vom crea proiecte practice pentru a aplica cunoștințele dobândite.
      </p>

      <div className="mb-8 bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-100">
        <h3 className="text-xl font-bold mb-4 text-cyan-700">Planul cursului</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Introducere în Frontend Development</strong> (suntem aici)</li>
          <li><strong>HTML Fundamentals</strong> - structură, elemente, semantică</li>
          <li><strong>CSS Basics</strong> - selectori, proprietăți, layout</li>
          <li><strong>JavaScript Essentials</strong> - variabile, funcții, evenimente</li>
          <li><strong>Responsive Web Design</strong> - media queries, flexbox, grid</li>
          <li><strong>Frameworks și librării</strong> - introducere în React</li>
          <li><strong>Proiect final</strong> - crearea unui portfolio personal</li>
        </ol>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-cyan-700" id="exercitii">Exercițiu pentru acasă</h2>
      
      <StepItem number={1} title="Instalează un editor de cod">
        <p>Descarcă și instalează Visual Studio Code (VS Code), unul dintre cele mai populare editoare de cod:</p>
        <a 
          href="https://code.visualstudio.com/download" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-cyan-600 hover:underline inline-block mt-2"
        >
          Descarcă Visual Studio Code
        </a>
      </StepItem>
      
      <StepItem number={2} title="Creează prima ta pagină web">
        <p>Creează un fișier numit <code>index.html</code> și adaugă următorul cod:</p>
        
        <CodeExample title="index.html" language="html">
          {`<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prima mea pagină web</title>
</head>
<body>
    <h1>Bine ai venit pe prima mea pagină web!</h1>
    <p>Aceasta este prima mea experiență cu HTML.</p>
    <img src="https://via.placeholder.com/300" alt="Imagine placeholder">
</body>
</html>`}
        </CodeExample>
      </StepItem>
      
      <StepItem number={3} title="Deschide pagina în browser">
        <p>Salvează fișierul și deschide-l cu orice browser web (Chrome, Firefox, Safari, etc.).</p>
        <p className="mt-2">Felicitări! Tocmai ai creat prima ta pagină web.</p>
      </StepItem>

      <h3 className="text-xl font-bold mb-4 mt-8">Provocări suplimentare</h3>
      
      <Challenge title="Adaugă mai multe elemente HTML" difficulty="easy">
        <p>Încearcă să adaugi și alte elemente HTML în pagina ta, cum ar fi:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Un subtitlu (h2)</li>
          <li>O listă ordonată (ol) sau neordonată (ul)</li>
          <li>Un link (a) către site-ul tău preferat</li>
        </ul>
      </Challenge>
      
      <Challenge title="Personalizează pagina cu CSS inline" difficulty="medium">
        <p>Adaugă stiluri CSS folosind atributul style:</p>
        <CodeExample title="Exemplu CSS inline" language="html">
          {`<h1 style="color: blue; text-align: center;">Titlu colorat și centrat</h1>
<p style="font-family: Arial; font-size: 18px;">Text cu font și mărime personalizate</p>`}
        </CodeExample>
      </Challenge>

      <InfoBox title="Ce ai învățat" icon="success" variant="success">
        <ul className="list-disc list-inside space-y-1">
          <li>Ce este Frontend Development și ce tehnologii implică</li>
          <li>De ce este important să înveți dezvoltare web frontend</li>
          <li>Ce subiecte vom acoperi în acest curs</li>
          <li>Cum să creezi o pagină web HTML simplă</li>
        </ul>
      </InfoBox>
    </LessonLayout>
  );
};

export default Session1;
