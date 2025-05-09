
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample } from '@/components/CodeExample';
import ImageModal from '@/components/ImageModal';

const LessonTemplate = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'sectiunea1', title: 'Secțiunea 1' },
    { id: 'sectiunea2', title: 'Secțiunea 2' },
    { id: 'sectiunea3', title: 'Secțiunea 3' },
    { id: 'provocari', title: 'Provocări' },
    { id: 'concluzii', title: 'Concluzii' },
  ];

  const resources = [
    { title: 'Documentație oficială', url: 'https://example.com/docs' },
    { title: 'Tutorial video', url: 'https://example.com/video' },
    { title: 'Materiale suplimentare', url: 'https://example.com/materials' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>
          <p className="mb-4">
            Acesta este un șablon de lecție standardizat. Fiecare lecție va urma acest format general,
            cu adaptări specifice pentru fiecare curs în parte. Acest șablon oferă o experiență
            de învățare coerentă și consistentă pentru toți utilizatorii.
          </p>

          <LearningOutcome items={[
            "Cum să utilizezi acest șablon",
            "Componentele disponibile pentru lecții",
            "Cum să structurezi conținutul",
            "Cum să adaugi resurse suplimentare"
          ]} />
        </>
      )
    },
    {
      id: 'sectiunea1',
      title: 'Secțiunea 1: Componente Disponibile',
      content: (
        <>
          <h3 className="text-xl font-bold mb-3">Casete Informative</h3>
          <p className="mb-4">
            Casetele informative sunt utile pentru a evidenția informații importante, 
            sfaturi sau avertismente:
          </p>

          <InfoBox title="Sfat util" icon="star" variant="primary">
            Acesta este un exemplu de casetă informativă care evidențiază un sfat important.
          </InfoBox>

          <InfoBox title="De reținut!" icon="info" variant="secondary">
            Informații importante pe care elevii ar trebui să le rețină.
          </InfoBox>

          <InfoBox title="Atenție!" icon="warning" variant="warning">
            Un avertisment despre posibile erori sau greșeli comune.
          </InfoBox>
        </>
      )
    },
    {
      id: 'sectiunea2',
      title: 'Secțiunea 2: Pași Structurați',
      content: (
        <>
          <p className="mb-4">
            Pentru instrucțiuni pas cu pas, utilizează componenta StepItem:
          </p>

          <StepItem number={1} title="Primul pas">
            <p>Descrierea primului pas. Poți include text, imagini și chiar exemple de cod.</p>
          </StepItem>

          <StepItem number={2} title="Al doilea pas">
            <p>Descrierea celui de-al doilea pas.</p>
            <p className="mt-2">Poți adăuga mai multe paragrafe dacă este necesar.</p>
          </StepItem>

          <StepItem number={3} title="Al treilea pas">
            <p>Finalizarea procesului cu ultimul pas.</p>
          </StepItem>
        </>
      )
    },
    {
      id: 'sectiunea3',
      title: 'Secțiunea 3: Exemple de Cod și Imagini',
      content: (
        <>
          <p className="mb-4">
            Pentru a afișa exemple de cod, utilizează componenta CodeExample:
          </p>

          <CodeExample title="Exemplu de cod JavaScript" language="javascript">
            {`function salutLume() {
  console.log("Salut, lume!");
}

salutLume(); // Afișează "Salut, lume!" în consolă`}
          </CodeExample>

          <p className="mb-4">
            Pentru a afișa imagini, utilizează componenta ImageModal:
          </p>

          <ImageModal 
            src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png" 
            alt="Exemplu de dezvoltare web" 
            caption="Un exemplu de imagine cu explicații în legendă"
          />

          <p className="mb-4">
            Pentru a afișa capturi de ecran cu cod block-based, utilizează aceeași componenta ImageModal 
            pentru imagini de cod:
          </p>

          <ImageModal 
            src="https://www.researchgate.net/profile/Wendy-Roldan/publication/333607893/figure/fig7/AS:768211096338432@1560179865328/Example-Scratch-code-for-the-jumping-mechanic.png" 
            alt="Exemplu de cod Scratch" 
            caption="Un exemplu de cod Scratch pentru mecanica de salt"
          />
        </>
      )
    },
    {
      id: 'provocari',
      title: 'Provocări',
      content: (
        <>
          <p className="mb-4">
            Oferă provocări opționale pentru a încuraja explorarea și practica suplimentară:
          </p>

          <Challenge title="Provocare 1: Prima ta provocare" difficulty="easy">
            <p>Descrierea unei provocări ușoare pentru începători.</p>
          </Challenge>

          <Challenge title="Provocare 2: O provocare mai avansată" difficulty="medium">
            <p>Descrierea unei provocări de dificultate medie.</p>
          </Challenge>

          <Challenge title="Provocare 3: Provocare pentru experți" difficulty="hard">
            <p>Descrierea unei provocări dificile pentru cei care doresc să se extindă.</p>
          </Challenge>
        </>
      )
    },
    {
      id: 'concluzii',
      title: 'Concluzii',
      content: (
        <>
          <p className="mb-4">
            Rezumatul celor învățate în această lecție și o previzualizare a ceea ce urmează.
          </p>

          <InfoBox title="Ce ai învățat" icon="success" variant="success">
            <ul className="list-disc list-inside space-y-1">
              <li>Cum să utilizezi șablonul standardizat pentru lecții</li>
              <li>Componentele disponibile pentru diferite tipuri de conținut</li>
              <li>Cum să structurezi informațiile într-un mod clar și organizat</li>
              <li>Cum să adaugi provocări și resurse suplimentare</li>
            </ul>
          </InfoBox>

          <div className="mt-6 bg-purple-50 p-4 rounded-lg border-l-4 border-course-purple">
            <h3 className="text-lg font-semibold mb-2">Pregătire pentru lecția următoare</h3>
            <p>În lecția următoare vom explora concepte mai avansate. Asigură-te că ai înțeles toate conceptele prezentate în această lecție înainte de a continua.</p>
          </div>
        </>
      )
    },
    {
      id: 'materiale',
      title: 'Materiale Suplimentare',
      content: (
        <>
          <h3 className="text-xl font-bold mb-3">Materiale Avansate</h3>
          <p className="mb-4">
            Această secțiune conține materiale avansate pentru cei care doresc să exploreze mai departe.
          </p>
          
          <CodeExample title="Exemplu de cod avansat" language="javascript">
            {`// Exemplu de cod mai avansat
class AnimatieComplexă {
  constructor(element) {
    this.element = element;
    this.configurare();
  }

  configurare() {
    // Cod de inițializare
  }

  anima(durată) {
    // Logica de animație
    return new Promise(resolve => {
      // Implementare animație
      setTimeout(resolve, durată);
    });
  }
}`}
          </CodeExample>
          
          <InfoBox title="Pentru profesioniști" icon="star" variant="primary">
            <p>Aceste concepte sunt destinate celor care au deja experiență și doresc să aprofundeze subiectul.</p>
          </InfoBox>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-bold mb-2">Tutorial Video</h3>
              <p className="text-gray-600 mb-2">Un tutorial video detaliat despre acest subiect.</p>
              <a href="#" className="text-course-blue hover:underline">Accesează resursa</a>
            </div>
            
            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-bold mb-2">Documentație</h3>
              <p className="text-gray-600 mb-2">Documentație oficială pentru referințe.</p>
              <a href="#" className="text-course-blue hover:underline">Accesează resursa</a>
            </div>
          </div>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="template"
      sessionId="1"
      title="Șablon de Lecție"
      subtitle="Un format standardizat pentru toate lecțiile din platforma de cursuri"
      heroColor="bg-gradient-to-r from-course-purple to-course-blue"
      previousLesson={{
        title: "Lecția anterioară",
        path: "#"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "#"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default LessonTemplate;
