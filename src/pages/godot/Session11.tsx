
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session11 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
  ];

  const resources = [
    { title: 'Documentație Godot', url: 'https://docs.godotengine.org' },
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
      courseId="godot"
      sessionId="11"
      title="Sesiunea 11 - Godot"
      subtitle="În curs de dezvoltare"
      heroColor="bg-gradient-to-r from-indigo-600 to-indigo-400"
      previousLesson={{
        title: "Sesiunea 10",
        path: "/godot/session10"
      }}
      nextLesson={{
        title: "Sesiunea 12",
        path: "/godot/session12"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session11;
