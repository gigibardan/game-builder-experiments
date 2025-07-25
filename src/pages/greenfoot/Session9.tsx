
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session9 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
  ];

  const resources = [
    { title: 'Documentația Greenfoot', url: 'https://greenfoot.org' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Sesiunea 9 - În curs de dezvoltare',
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
      courseId="greenfoot"
      sessionId="9"
      title="Sesiunea 9 - Greenfoot"
      subtitle="În curs de dezvoltare"
      heroColor="bg-gradient-to-r from-orange-600 to-orange-400"
      previousLesson={{
        title: "Sesiunea 8",
        path: "/greenfoot/session8"
      }}
      nextLesson={{
        title: "Sesiunea 10",
        path: "/greenfoot/session10"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session9;
