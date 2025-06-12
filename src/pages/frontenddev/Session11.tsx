
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session11 = () => {
  return (
    <LessonLayout 
      courseId="frontenddev"
      lessonId="session11"
      title="API-uri și fetch"
      description="Comunicarea cu servicii web și API-uri"
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
