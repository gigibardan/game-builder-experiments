
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session4 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
  ];

  const resources = [
    { title: 'Documentație Greenfoot', url: 'https://greenfoot.org' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Sesiunea 4 - În curs de dezvoltare',
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
      sessionId="4"
      title="Sesiunea 4 - Greenfoot"
      subtitle="În curs de dezvoltare"
      heroColor="bg-gradient-to-r from-orange-600 to-orange-400"
      previousLesson={{
        title: "Sesiunea 3",
        path: "/greenfoot/session3"
      }}
      nextLesson={{
        title: "Sesiunea 5",
        path: "/greenfoot/session5"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session4;
