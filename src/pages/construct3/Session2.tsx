
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample } from '@/components/CodeExample';
import ImageModal from '@/components/ImageModal';

const Session2 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'concepte', title: 'Concepte de Bază' },
    { id: 'implementare', title: 'Implementare' },
    { id: 'provocari', title: 'Provocări' },
    { id: 'concluzii', title: 'Concluzii' },
  ];

  const resources = [
    { title: 'Documentație Construct 3', url: 'https://construct.net' },
    { title: 'Tutorial Video', url: '#' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>
          <p className="mb-4">
            Bun venit la a doua sesiune de Construct 3! În această lecție vom explora concepte mai avansate.
          </p>

          <LearningOutcome items={[
            "Concepte avansate în Construct 3",
            "Implementarea mecanicilor de joc",
            "Optimizarea performanței",
            "Testarea și debugging"
          ]} />
        </>
      )
    },
    {
      id: 'concepte',
      title: 'Concepte de Bază',
      content: (
        <>
          <p className="mb-4">
            Conținutul acestei secțiuni va fi adăugat în curând...
          </p>
        </>
      )
    },
    {
      id: 'implementare',
      title: 'Implementare',
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
          <Challenge title="Provocare 1" difficulty="easy">
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
      courseId="construct3"
      sessionId="2"
      title="Sesiunea 2 - Construct 3"
      subtitle="Concepte Avansate"
      heroColor="bg-gradient-to-r from-blue-600 to-blue-400"
      previousLesson={{
        title: "Sesiunea 1",
        path: "/construct3/session1"
      }}
      nextLesson={{
        title: "Sesiunea 3",
        path: "/construct3/session3"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session2;
