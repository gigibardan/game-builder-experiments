
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session3 = () => {
  return (
    <LessonLayout 
      courseId="frontenddev"
      sessionId="session3"
      title="CSS și stilizarea avansată"
      subtitle="Învață să stilizezi site-urile web cu CSS avansat."
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

export default Session3;
