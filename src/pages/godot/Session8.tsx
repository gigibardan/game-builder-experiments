
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session8 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
  ];

  const resources = [
    { title: 'Documentație Godot', url: 'https://docs.godotengine.org' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Sesiunea 8 - În curs de dezvoltare',
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
      courseId="godot"
      sessionId="8"
      title="Sesiunea 8 - Godot"
      subtitle="În curs de dezvoltare"
      heroColor="bg-gradient-to-r from-indigo-600 to-indigo-400"
      previousLesson={{
        title: "Sesiunea 7",
        path: "/godot/session7"
      }}
      nextLesson={{
        title: "Sesiunea 9",
        path: "/godot/session9"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session8;
