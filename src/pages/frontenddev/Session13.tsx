
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session13 = () => {
  return (
    <LessonLayout 
      courseId="frontenddev"
      lessonId="session13"
      title="Deploy și hosting"
      description="Publicarea site-urilor web pe internet"
      duration="90 min"
      level="Expert"
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

export default Session13;
