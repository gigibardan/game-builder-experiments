
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session8 = () => {
  return (
    <LessonLayout 
      courseId="minecraftmodding"
      sessionId="session8"
      title="Redstone și automatizare"
      subtitle="Integrează mod-ul tău cu sistemul redstone."
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

export default Session8;
