
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session3 = () => {
  return (
    <LessonLayout 
      courseId="python"
      lessonId="session3"
      title="Structuri de control"
      description="If, else, loop-uri și logica programării"
      duration="90 min"
      level="Începător"
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

export default Session3;
