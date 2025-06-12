
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session9 = () => {
  return (
    <LessonLayout 
      courseId="python"
      sessionId="session9"
      title="Web scraping cu Python"
      description="Extragerea datelor de pe site-uri web"
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

export default Session9;
