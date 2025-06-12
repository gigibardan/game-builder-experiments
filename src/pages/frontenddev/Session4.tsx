
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session4 = () => {
  return (
    <LessonLayout 
      courseId="frontenddev"
      sessionId="session4"
      title="JavaScript fundamentals"
      description="Începe să programezi cu JavaScript"
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

export default Session4;
