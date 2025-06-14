
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session8 = () => {
  return (
    <LessonLayout 
      courseId="frontenddev"
      sessionId="session8"
      title="JavaScript avansat și ES6"
      subtitle="Concepte avansate și sintaxa modernă JavaScript."
      heroColor="bg-gradient-to-r from-cyan-500 to-blue-600"
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
