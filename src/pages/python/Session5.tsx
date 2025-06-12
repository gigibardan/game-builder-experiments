
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session5 = () => {
  return (
    <LessonLayout 
      courseId="python"
      lessonId="session5"
      title="Liste și dicționare"
      description="Structuri de date fundamentale în Python"
      duration="90 min"
      level="Intermediar"
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
