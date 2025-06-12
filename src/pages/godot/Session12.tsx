
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session12 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
  ];

  const resources = [
    { title: 'Documentație Godot', url: 'https://docs.godotengine.org' },
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
      courseId="godot"
      sessionId="12"
      title="Sesiunea 12 - Godot"
      subtitle="În curs de dezvoltare"
      heroColor="bg-gradient-to-r from-indigo-600 to-indigo-400"
      previousLesson={{
        title: "Sesiunea 11",
        path: "/godot/session11"
      }}
      nextLesson={{
        title: "Sesiunea 13",
        path: "/godot/session13"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session12;
