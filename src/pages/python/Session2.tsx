
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample } from '@/components/CodeExample';
import ImageModal from '@/components/ImageModal';

const Session2 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'structuri', title: 'Structuri de Control' },
    { id: 'functii', title: 'Funcții' },
    { id: 'provocari', title: 'Provocări' },
    { id: 'concluzii', title: 'Concluzii' },
  ];

  const resources = [
    { title: 'Python.org', url: 'https://python.org' },
    { title: 'Tutorial Video', url: '#' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>
          <p className="mb-4">
            Bun venit la a doua sesiune de Python! În această lecție vom explora structurile de control și funcțiile.
          </p>

          <LearningOutcome items={[
            "Structuri de control (if, for, while)",
            "Definirea și utilizarea funcțiilor",
            "Parametri și valori de retur",
            "Debugging în Python"
          ]} />
        </>
      )
    },
    {
      id: 'structuri',
      title: 'Structuri de Control',
      content: (
        <>
          <p className="mb-4">
            Conținutul acestei secțiuni va fi adăugat în curând...
          </p>
        </>
      )
    },
    {
      id: 'functii',
      title: 'Funcții',
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
      courseId="python"
      sessionId="2"
      title="Sesiunea 2 - Python"
      subtitle="Structuri de Control și Funcții"
      heroColor="bg-gradient-to-r from-blue-700 to-blue-500"
      previousLesson={{
        title: "Sesiunea 1",
        path: "/python/session1"
      }}
      nextLesson={{
        title: "Sesiunea 3",
        path: "/python/session3"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session2;
