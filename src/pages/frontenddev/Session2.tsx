
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample } from '@/components/CodeExample';
import ImageModal from '@/components/ImageModal';

const Session2 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'css', title: 'CSS Avansat' },
    { id: 'javascript', title: 'JavaScript' },
    { id: 'provocari', title: 'Provocări' },
    { id: 'concluzii', title: 'Concluzii' },
  ];

  const resources = [
    { title: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
    { title: 'Tutorial Video', url: '#' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>
          <p className="mb-4">
            Bun venit la a doua sesiune de Frontend Development! În această lecție vom explora CSS avansat și JavaScript.
          </p>

          <LearningOutcome items={[
            "CSS Flexbox și Grid",
            "JavaScript pentru interactivitate",
            "Responsive design",
            "Debugging în browser"
          ]} />
        </>
      )
    },
    {
      id: 'css',
      title: 'CSS Avansat',
      content: (
        <>
          <p className="mb-4">
            Conținutul acestei secțiuni va fi adăugat în curând...
          </p>
        </>
      )
    },
    {
      id: 'javascript',
      title: 'JavaScript',
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
      courseId="frontend-dev"
      sessionId="2"
      title="Sesiunea 2 - Frontend Development"
      subtitle="CSS Avansat și JavaScript"
      heroColor="bg-gradient-to-r from-cyan-600 to-cyan-400"
      previousLesson={{
        title: "Sesiunea 1",
        path: "/frontenddev/session1"
      }}
      nextLesson={{
        title: "Sesiunea 3",
        path: "/frontenddev/session3"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session2;
