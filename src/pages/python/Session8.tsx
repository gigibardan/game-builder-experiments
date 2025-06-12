
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } in '@/components/LessonComponents';

const Session8 = () => {
  return (
    <LessonLayout 
      courseId="python"
      lessonId="session8"
      title="Biblioteci externe și pip"
      description="Utilizarea bibliotecilor Python populare"
      duration="120 min"
      level="Avansat"
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
