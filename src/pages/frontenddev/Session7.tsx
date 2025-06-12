
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session7 = () => {
  return (
    <LessonLayout 
      courseId="frontenddev"
      sessionId="session7"
      title="Framework-uri CSS"
      subtitle="Folosirea Bootstrap și Tailwind CSS pentru dezvoltare rapidă."
      heroColor="bg-gradient-to-r from-cyan-500 to-blue-600"
      sidebarItems={[]}
      resources={[]}
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

export default Session7;
