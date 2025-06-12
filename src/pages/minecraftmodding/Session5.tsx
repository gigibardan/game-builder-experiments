
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session5 = () => {
  return (
    <LessonLayout 
      courseId="minecraftmodding"
      sessionId="session5"
      title="Structuri și generare de lume"
      subtitle="Creează structuri și definește reguli de generare a lumii."
      heroColor="bg-gradient-to-r from-green-500 to-emerald-600"
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

export default Session5;
