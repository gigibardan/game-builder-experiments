
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session10 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
  ];

  const resources = [
    { title: 'Documentație Greenfoot', url: 'https://greenfoot.org' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Sesiunea 10 - În curs de dezvoltare',
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
      courseId="greenfoot"
      sessionId="10"
      title="Sesiunea 10 - Greenfoot"
      subtitle="În curs de dezvoltare"
      heroColor="bg-gradient-to-r from-orange-600 to-orange-400"
      previousLesson={{
        title: "Sesiunea 9",
        path: "/greenfoot/session9"
      }}
      nextLesson={{
        title: "Sesiunea 11",
        path: "/greenfoot/session11"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session10;
