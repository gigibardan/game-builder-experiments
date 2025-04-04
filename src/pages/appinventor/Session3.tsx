
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';

const Session3 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'drawing-app', title: 'Drawing App' },
    { id: 'interfata', title: 'Interfața aplicației' },
    { id: 'componente', title: 'Componente necesare' },
    { id: 'implementare', title: 'Implementarea funcționalităților' },
    { id: 'exercitiu', title: 'Exercițiu pentru acasă' },
  ];

  const resources = [
    { title: 'Documentație App Inventor - Canvas', url: 'https://appinventor.mit.edu/explore/ai2/canvas' },
    { title: 'Documentație App Inventor - Events', url: 'https://appinventor.mit.edu/explore/ai2/events' },
    { title: 'Tutorial video - Drawing App', url: 'https://www.youtube.com/watch?v=6JLZRfVE4es' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>
          <LearningOutcome items={[
            "Înțelegerea componentei Canvas din App Inventor",
            "Utilizarea evenimentelor de atingere pentru desenare",
            "Implementarea unui selector de culori și setarea grosimii liniei",
            "Realizarea unei aplicații de desen complete cu funcționalități de salvare"
          ]} />
          
          <p className="mt-4 text-gray-700">
            În această lecție vom învăța să creăm o aplicație de desen care permite utilizatorului 
            să deseneze folosind gesturile tactile pe ecranul dispozitivului. Vom folosi componenta 
            Canvas din App Inventor și vom implementa funcționalități precum schimbarea culorilor, 
            a grosimii liniei și ștergerea desenului.
          </p>
        </>
      )
    },
    {
      id: 'drawing-app',
      title: 'Drawing App',
      content: (
        <>
          <p className="mb-6 text-gray-700">
            Drawing App este o aplicație care permite utilizatorului să deseneze pe ecranul dispozitivului 
            folosind degetul sau un stylus. Aplicația include următoarele funcționalități:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-xl shadow-sm">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold text-purple-700">Desenare Tactilă</h3>
              </div>
              <p className="text-gray-700 pl-10">Desenare pe ecran folosind gesturi tactile</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-xl shadow-sm">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold text-purple-700">Selecție Culori</h3>
              </div>
              <p className="text-gray-700 pl-10">Alegerea culorilor pentru desen</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-xl shadow-sm">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold text-purple-700">Grosime Linie</h3>
              </div>
              <p className="text-gray-700 pl-10">Ajustarea grosimii liniei de desen</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-xl shadow-sm">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-purple-600 font-bold">4</span>
                </div>
                <h3 className="font-semibold text-purple-700">Salvare și Ștergere</h3>
              </div>
              <p className="text-gray-700 pl-10">Salvarea desenului și ștergerea ecranului</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-6 rounded-xl text-white shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-3">Ce vei învăța să creezi</h3>
            <p className="mb-4">
              În această lecție vei crea o aplicație completă de desenat cu următoarele caracteristici:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-bold mb-2">Interfața</h4>
                <ul className="space-y-1 list-disc pl-5 text-white/90">
                  <li>Canvas pentru desen</li>
                  <li>Butoane pentru selectarea culorilor</li>
                  <li>Slider pentru grosimea liniei</li>
                </ul>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-bold mb-2">Funcționalități</h4>
                <ul className="space-y-1 list-disc pl-5 text-white/90">
                  <li>Desenare linie continuă</li>
                  <li>Schimbare culori</li>
                  <li>Salvare și ștergere desen</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://appinventor.mit.edu/explore/sites/all/files/ai2tutorials/paintPot2/PaintPotStepDraw1.png" 
              alt="Drawing App Example" 
              className="w-full"
            />
          </div>
        </>
      )
    },
    {
      id: 'interfata',
      title: 'Interfața aplicației',
      content: (
        <>
          <p className="mb-6 text-gray-700">
            Interfața aplicației noastre va consta într-un Canvas (suprafața de desen) și 
            mai multe butoane pentru a controla diferitele funcționalități.
          </p>

          <InfoBox title="Structura interfeței" variant="primary">
            <p>Interfața aplicației va fi organizată astfel:</p>
            <ol className="list-decimal pl-5 space-y-2 mt-2">
              <li>Un Canvas (suprafață de desen) ocupând cea mai mare parte a ecranului</li>
              <li>Butoane pentru selectarea culorilor (roșu, verde, albastru, negru)</li>
              <li>Un cursor (slider) pentru ajustarea grosimii liniei</li>
              <li>Buton pentru ștergerea desenului</li>
              <li>Buton pentru salvarea desenului în galerie</li>
            </ol>
          </InfoBox>

          <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 mt-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Design-ul aplicației</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="mb-3">Interfața trebuie să fie intuitivă și ușor de folosit. Toate controalele 
                trebuie să fie ușor de accesat cu degetul mare în timp ce utilizatorul ține dispozitivul.</p>
                <p>Vom folosi un VerticalArrangement pentru organizarea generală, cu Canvas-ul în partea de sus și 
                controalele în partea de jos, grupate în HorizontalArrangements pentru o organizare mai bună.</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <img 
                  src="https://appinventor.mit.edu/explore/sites/all/files/ai2tutorials/paintPot2/PaintPotComponentVIewer.png" 
                  alt="Drawing App Interface Components" 
                  className="w-full rounded"
                />
                <p className="text-sm text-gray-600 mt-2 text-center">Organizarea componentelor în Designer</p>
              </div>
            </div>
          </div>

          <StepItem number={1} title="Configurarea Designer-ului">
            <p>Pentru a crea interfața aplicației, vom folosi următoarea structură în Designer:</p>
            <ol className="list-decimal pl-5 space-y-2 mt-2">
              <li>Un VerticalArrangement pentru întregul ecran</li>
              <li>Un Canvas în partea de sus pentru zona de desen</li>
              <li>Un HorizontalArrangement pentru butoanele de culori</li>
              <li>Un HorizontalArrangement pentru slider și etichetă</li>
              <li>Un HorizontalArrangement pentru butoanele de control (ștergere, salvare)</li>
            </ol>
          </StepItem>
        </>
      )
    },
    {
      id: 'componente',
      title: 'Componente necesare',
      content: (
        <>
          <p className="mb-6 text-gray-700">
            Pentru a implementa aplicația de desen, vom avea nevoie de următoarele componente:
          </p>

          <InfoBox title="Componente necesare" variant="secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <h4 className="font-bold mb-2">Componente vizibile:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Canvas</strong> - suprafața pe care vom desena</li>
                  <li><strong>Button</strong> - butoane pentru selecția culorilor și alte funcții</li>
                  <li><strong>Slider</strong> - pentru a ajusta grosimea liniei</li>
                  <li><strong>Label</strong> - pentru a afișa grosimea curentă a liniei</li>
                  <li><strong>HorizontalArrangement</strong> și <strong>VerticalArrangement</strong> - pentru organizarea componentelor</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Componente invizibile:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Clock</strong> - pentru a genera nume unice pentru desenele salvate</li>
                  <li><strong>Canvas.DrawingCanvas</strong> - pentru a accesa evenimentele de desenare</li>
                </ul>
              </div>
            </div>
          </InfoBox>

          <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100 mt-6 mb-6">
            <h3 className="text-xl font-bold mb-3 text-indigo-800">Proprietățile principale</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Canvas:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li><span className="font-medium">Width:</span> Fill parent</li>
                  <li><span className="font-medium">Height:</span> 300 pixeli</li>
                  <li><span className="font-medium">BackgroundColor:</span> White</li>
                  <li><span className="font-medium">PaintColor:</span> Black (inițial)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Slider:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li><span className="font-medium">MinValue:</span> 1</li>
                  <li><span className="font-medium">MaxValue:</span> 20</li>
                  <li><span className="font-medium">Width:</span> Fill parent</li>
                  <li><span className="font-medium">ThumbPosition:</span> 2 (inițial)</li>
                </ul>
              </div>
            </div>
          </div>

          <StepItem number={2} title="Adăugarea componentelor în interfață">
            <p>Vom adăuga componentele în interfață în ordinea următoare:</p>
            <ol className="list-decimal pl-5 space-y-2 mt-2">
              <li>Adaugă un VerticalArrangement care va ocupa întregul ecran</li>
              <li>Adaugă un Canvas în VerticalArrangement și setează-i Width la Fill parent și Height la 300 pixels</li>
              <li>Adaugă un HorizontalArrangement sub Canvas pentru butoanele de culori</li>
              <li>Adaugă 4 butoane în HorizontalArrangement pentru culorile roșu, verde, albastru și negru</li>
              <li>Adaugă un alt HorizontalArrangement pentru slider și etichetă</li>
              <li>Adaugă un Slider și o Label în acest HorizontalArrangement</li>
              <li>Adaugă un ultim HorizontalArrangement pentru butoanele de control</li>
              <li>Adaugă butoane pentru ștergere și salvare în acest HorizontalArrangement</li>
            </ol>
            
            <div className="mt-6 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <img 
                src="https://appinventor.mit.edu/explore/sites/all/files/ai2tutorials/paintPot2/PaintPotDesignerComplete.png" 
                alt="Drawing App Designer View" 
                className="w-full rounded"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">Aspectul final al aplicației în Designer</p>
            </div>
          </StepItem>
        </>
      )
    },
    {
      id: 'implementare',
      title: 'Implementarea funcționalităților',
      content: (
        <>
          <p className="mb-6 text-gray-700">
            Acum vom implementa funcționalitățile aplicației noastre folosind blocurile din Blocks Editor.
          </p>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-purple-100 mb-8">
            <h3 className="text-xl font-bold mb-4 text-purple-800">Cum funcționează Canvas</h3>
            <p className="mb-4">Componenta Canvas din App Inventor este o zonă pe care utilizatorul poate desena folosind degetul. Aceasta oferă evenimente pentru:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-purple-700 mb-2">Evenimente de atingere:</h4>
                <ul className="space-y-1 text-gray-700 list-disc pl-5">
                  <li><strong>TouchDown</strong> - când utilizatorul atinge ecranul</li>
                  <li><strong>TouchUp</strong> - când utilizatorul ridică degetul</li>
                  <li><strong>Dragged</strong> - când utilizatorul trage degetul pe ecran</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-purple-700 mb-2">Metode de desenare:</h4>
                <ul className="space-y-1 text-gray-700 list-disc pl-5">
                  <li><strong>DrawLine</strong> - desenează o linie</li>
                  <li><strong>DrawCircle</strong> - desenează un cerc</li>
                  <li><strong>Clear</strong> - șterge tot conținutul</li>
                  <li><strong>SaveAs</strong> - salvează imaginea</li>
                </ul>
              </div>
            </div>
          </div>

          <StepItem number={1} title="Inițializarea aplicației">
            <p>La inițializarea aplicației, trebuie să setăm valorile implicite:</p>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                when Screen1.Initialize<br/>
                &nbsp;&nbsp;set Canvas1.PaintColor to Black<br/>
                &nbsp;&nbsp;set Canvas1.LineWidth to 2<br/>
                &nbsp;&nbsp;set Slider1.Value to 2<br/>
                &nbsp;&nbsp;set Label1.Text to "Line Width: 2"<br/>
              </p>
            </div>
          </StepItem>

          <StepItem number={2} title="Implementarea desenării">
            <p>Pentru a implementa desenarea, vom folosi evenimentele Canvas1.Dragged și Canvas1.TouchDown:</p>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                when Canvas1.Dragged<br/>
                &nbsp;&nbsp;call Canvas1.DrawLine<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;x1 → prevX<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;y1 → prevY<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;x2 → currentX<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;y2 → currentY<br/>
                &nbsp;&nbsp;set global prevX to currentX<br/>
                &nbsp;&nbsp;set global prevY to currentY<br/>
                <br/>
                when Canvas1.TouchDown<br/>
                &nbsp;&nbsp;set global prevX to TouchedX<br/>
                &nbsp;&nbsp;set global prevY to TouchedY<br/>
              </p>
            </div>
            
            <div className="mt-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <img 
                src="https://appinventor.mit.edu/explore/sites/all/files/ai2tutorials/paintPot2/DrawLineBlocks.png" 
                alt="Drawing Implementation Blocks" 
                className="w-full rounded"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">Implementarea desenării cu blocuri</p>
            </div>
          </StepItem>

          <StepItem number={3} title="Implementarea selectării culorilor">
            <p>Pentru fiecare buton de culoare, vom adăuga un eveniment pentru schimbarea culorii de desen:</p>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                when RedButton.Click<br/>
                &nbsp;&nbsp;set Canvas1.PaintColor to Red<br/>
                <br/>
                when GreenButton.Click<br/>
                &nbsp;&nbsp;set Canvas1.PaintColor to Green<br/>
                <br/>
                when BlueButton.Click<br/>
                &nbsp;&nbsp;set Canvas1.PaintColor to Blue<br/>
                <br/>
                when BlackButton.Click<br/>
                &nbsp;&nbsp;set Canvas1.PaintColor to Black<br/>
              </p>
            </div>
          </StepItem>

          <StepItem number={4} title="Implementarea ajustării grosimii liniei">
            <p>Pentru ajustarea grosimii liniei, vom folosi evenimentul Slider1.PositionChanged:</p>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                when Slider1.PositionChanged<br/>
                &nbsp;&nbsp;set Canvas1.LineWidth to Slider1.ThumbPosition<br/>
                &nbsp;&nbsp;set Label1.Text to join "Line Width: " Slider1.ThumbPosition<br/>
              </p>
            </div>
          </StepItem>

          <StepItem number={5} title="Implementarea ștergerii și salvării">
            <p>Pentru ștergerea desenului și salvarea acestuia, vom adăuga evenimente pentru butoanele respective:</p>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                when ClearButton.Click<br/>
                &nbsp;&nbsp;call Canvas1.Clear<br/>
                <br/>
                when SaveButton.Click<br/>
                &nbsp;&nbsp;set global imageName to join "Drawing_" Clock1.Now<br/>
                &nbsp;&nbsp;call Canvas1.SaveAs imageName<br/>
              </p>
            </div>
            
            <div className="mt-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <img 
                src="https://appinventu.com/wp-content/uploads/2020/01/Screenshot-1103.png" 
                alt="Save and Clear Implementation" 
                className="w-full rounded"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">Implementarea funcțiilor de salvare și ștergere</p>
            </div>
          </StepItem>

          <InfoBox title="Sfat important" variant="warning">
            <p>Nu uita să adaugi componenta Clock din categoria Sensors pentru a genera nume unice pentru desenele salvate.</p>
            <p className="mt-2">De asemenea, asigură-te că aplicația ta cere permisiunile necesare pentru a salva în galeria dispozitivului.</p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'exercitiu',
      title: 'Exercițiu pentru acasă',
      content: (
        <>
          <Challenge title="Extinde aplicația de desen cu următoarele funcționalități" difficulty="medium">
            <p className="text-gray-700 mb-4">
              Extinde aplicația de desen creată în timpul lecției adăugând:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2">Funcționalități noi:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Un buton pentru a umple întregul Canvas cu o culoare selectată</li>
                  <li>Un buton pentru a desena forme predefinite (cerc, pătrat, linie dreaptă)</li>
                  <li>Implementarea unei funcții de "undo" (anulare) pentru ultima acțiune</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2">Funcționalități avansate:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Un buton pentru a schimba culoarea de fundal a Canvas-ului</li>
                  <li>Posibilitatea de a adăuga text pe desen</li>
                  <li>Un efect de "erase" (radieră) care desenează cu culoarea de fundal</li>
                </ul>
              </div>
            </div>
          </Challenge>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-xl mt-6 text-white shadow-lg">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Cum să îți prezinți proiectul
            </h3>
            <p className="mb-4">
              După ce ai terminat aplicația, pregătește-te să o prezinți colegilor și profesorului tău:
            </p>
            <ul className="space-y-2 pl-6 list-disc">
              <li>Arată funcționalitățile principale ale aplicației</li>
              <li>Explică cum ai implementat desenarea și selectarea culorilor</li>
              <li>Prezintă funcționalitățile suplimentare pe care le-ai adăugat</li>
              <li>Împărtășește orice dificultate pe care ai întâmpinat-o și cum ai rezolvat-o</li>
              <li>Primește feedback și sugestii pentru îmbunătățiri viitoare</li>
            </ul>
          </div>

          <InfoBox title="Nu uita!" variant="success">
            <p>Încarcă aplicația pe dispozitivul tău Android pentru a o testa. Împărtășește creația ta cu colegii și profesorul.</p>
          </InfoBox>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="appinventor"
      sessionId="3"
      title="Drawing App - Aplicație de Desen"
      subtitle="Învățăm să creăm o aplicație de desen cu App Inventor"
      heroColor="bg-gradient-to-r from-course-purple to-course-blue"
      previousLesson={{
        title: "Lecția anterioară",
        path: "/appinventor/session2"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/appinventor/session4"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session3;
