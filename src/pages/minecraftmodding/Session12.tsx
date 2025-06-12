
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session12 = () => {
  return (
    <LessonLayout 
      courseId="minecraftmodding"
      lessonId="session12"
      title="Compatibilitate și mod packs"
      description="Crearea mod-urilor compatibile și integrarea în pack-uri"
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

export default Session12;
