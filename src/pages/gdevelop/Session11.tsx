
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session11 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
  ];

  const resources = [
    { title: 'Documentație GDevelop', url: 'https://gdevelop.io' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Sesiunea 11 - În curs de dezvoltare',
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
      sessionId="11"
      title="Sesiunea 11 - GDevelop"
      subtitle="În curs de dezvoltare"
      heroColor="bg-gradient-to-r from-purple-600 to-purple-400"
      previousLesson={{
        title: "Sesiunea 10",
        path: "/gdevelop/session10"
      }}
      nextLesson={{
        title: "Sesiunea 12",
        path: "/gdevelop/session12"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session11;
