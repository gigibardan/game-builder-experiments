
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session12 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
  ];

  const resources = [
    { title: 'Documentație GDevelop', url: 'https://gdevelop.io' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Sesiunea 12 - În curs de dezvoltare',
      content: (
        <>
          <InfoBox type="info">
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
      sessionId="12"
      title="Sesiunea 12 - GDevelop"
      subtitle="În curs de dezvoltare"
      heroColor="bg-gradient-to-r from-purple-600 to-purple-400"
      previousLesson={{
        title: "Sesiunea 11",
        path: "/gdevelop/session11"
      }}
      nextLesson={{
        title: "Sesiunea 13",
        path: "/gdevelop/session13"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session12;
