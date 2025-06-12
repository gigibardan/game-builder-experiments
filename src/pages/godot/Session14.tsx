
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session14 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
  ];

  const resources = [
    { title: 'Documentația Godot', url: 'https://docs.godotengine.org' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Sesiunea 14 - În curs de dezvoltare',
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
      courseId="godot"
      sessionId="14"
      title="Sesiunea 14 - Godot"
      subtitle="În curs de dezvoltare"
      heroColor="bg-gradient-to-r from-indigo-600 to-indigo-400"
      previousLesson={{
        title: "Sesiunea 13",
        path: "/godot/session13"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session14;
