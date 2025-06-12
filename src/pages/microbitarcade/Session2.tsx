
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample } from '@/components/CodeExample';
import ImageModal from '@/components/ImageModal';

const Session2 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'senzori', title: 'Senzori și Input' },
    { id: 'jocuri', title: 'Jocuri Avansate' },
    { id: 'provocari', title: 'Provocări' },
    { id: 'concluzii', title: 'Concluzii' },
  ];

  const resources = [
    { title: 'MakeCode Arcade', url: 'https://arcade.makecode.com' },
    { title: 'micro:bit Documentație', url: 'https://microbit.org' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>
          <p className="mb-4">
            Bun venit la a doua sesiune de micro:bit Arcade! În această lecție vom explora senzori și jocuri avansate.
          </p>

          <LearningOutcome items={[
            "Utilizarea senzorilor micro:bit",
            "Input de la accelerometru",
            "Jocuri cu control fizic",
            "Debugging și testare"
          ]} />
        </>
      )
    },
    {
      id: 'senzori',
      title: 'Senzori și Input',
      content: (
        <>
          <p className="mb-4">
            Conținutul acestei secțiuni va fi adăugat în curând...
          </p>
        </>
      )
    },
    {
      id: 'jocuri',
      title: 'Jocuri Avansate',
      content: (
        <>
          <p className="mb-4">
            Conținutul acestei secțiuni va fi adăugat în curând...
          </p>
        </>
      )
    },
    {
      id: 'provocari',
      title: 'Provocări',
      content: (
        <>
          <Challenge title="Provocare 1" difficulty="medium">
            <p>Conținutul va fi adăugat în curând...</p>
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
            Conținutul acestei secțiuni va fi adăugat în curând...
          </p>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="microbit-arcade"
      sessionId="2"
      title="Sesiunea 2 - micro:bit Arcade"
      subtitle="Senzori și Jocuri Avansate"
      heroColor="bg-gradient-to-r from-red-600 to-red-400"
      previousLesson={{
        title: "Sesiunea 1",
        path: "/microbitarcade/session1"
      }}
      nextLesson={{
        title: "Sesiunea 3",
        path: "/microbitarcade/session3"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session2;
