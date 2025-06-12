
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session11 = () => {
  return (
    <LessonLayout 
      courseId="python"
      lessonId="session11"
      title="Machine Learning cu scikit-learn"
      description="Introducere în învățarea automată"
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

export default Session11;
