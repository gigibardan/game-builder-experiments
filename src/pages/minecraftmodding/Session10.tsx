
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session10 = () => {
  return (
    <LessonLayout 
      courseId="minecraftmodding"
      lessonId="session10"
      title="Texturi și modele 3D"
      description="Crearea asset-urilor vizuale pentru mod-uri"
      duration="90 min"
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

export default Session10;
