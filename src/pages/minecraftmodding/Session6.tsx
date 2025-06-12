
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session6 = () => {
  return (
    <LessonLayout 
      courseId="minecraftmodding"
      lessonId="session6"
      title="Generarea lumilor procedurale"
      description="Algoritmi pentru generarea terenurilor și structurilor"
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

export default Session6;
