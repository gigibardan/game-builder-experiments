
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session4 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
  ];

  const resources = [
    { title: 'Documentația GDevelop', url: 'https://gdevelop.io' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Sesiunea 4 - În curs de dezvoltare',
      content: (
        <>
          <InfoBox variant="info">
            <p className="mb-4">
              Această sesiune este în curs de dezvoltare. Conținutul va fi disponibil în curând.
            </p>
          </InfoBox>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="gdevelop"
      sessionId="4"
      title="Sesiunea 4 - GDevelop"
      subtitle="În curs de dezvoltare"
      heroColor="bg-gradient-to-r from-purple-600 to-purple-400"
      previousLesson={{
        title: "Sesiunea 3",
        path: "/gdevelop/session3"
      }}
      nextLesson={{
        title: "Sesiunea 5",
        path: "/gdevelop/session5"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session4;
