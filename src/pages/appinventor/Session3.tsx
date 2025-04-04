
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

          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Desenare pe ecran folosind gesturi tactile</li>
            <li>Selectarea culorii pentru desen</li>
            <li>Ajustarea grosimii liniei</li>
            <li>Ștergerea întregului desen</li>
            <li>Salvarea desenului în galeria dispozitivului</li>
          </ul>

          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src="https://appinventor.mit.edu/explore/sites/all/files/ai2tutorials/paintPot2/figure1.png" 
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
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Canvas</strong> - suprafața pe care vom desena</li>
              <li><strong>Button</strong> - butoane pentru selecția culorilor și alte funcții</li>
              <li><strong>Slider</strong> - pentru a ajusta grosimea liniei</li>
              <li><strong>Label</strong> - pentru a afișa grosimea curentă a liniei</li>
              <li><strong>HorizontalArrangement</strong> și <strong>VerticalArrangement</strong> - pentru organizarea componentelor</li>
              <li><strong>Canvas.DrawingCanvas</strong> - pentru a accesa evenimentele de desenare</li>
            </ul>
          </InfoBox>

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
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-700">Un buton pentru umplerea întregului Canvas cu o culoare selectată</li>
              <li className="text-gray-700">Un buton pentru a desena forme predefinite (cerc, pătrat, linie dreaptă)</li>
              <li className="text-gray-700">Implementarea unei funcții de "undo" (anulare) pentru ultima acțiune</li>
              <li className="text-gray-700">Un buton pentru a schimba culoarea de fundal a Canvas-ului</li>
              <li className="text-gray-700">Posibilitatea de a adăuga text pe desen</li>
              <li className="text-gray-700">Un efect de "erase" (radieră) care desenează cu culoarea de fundal</li>
            </ul>
          </Challenge>

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
