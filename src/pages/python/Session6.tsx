
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session6 = () => {
  return (
    <LessonLayout 
      courseId="python"
      sessionId="session6"
      title="Programarea orientată pe obiecte"
      subtitle="Concepte OOP în Python."
      heroColor="bg-gradient-to-r from-blue-500 to-indigo-600"
      sidebarItems={[]}
      resources={[]}
    >
      <div className="space-y-6">
        <InfoBox variant="info">
          <p>
            Această lecție este în curs de dezvoltare. Revino curând pentru conținut complet!
          </p>
        </InfoBox>
      </div>
    </LessonLayout>
  );
};

export default Session6;
