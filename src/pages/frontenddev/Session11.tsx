
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session11 = () => {
  return (
    <LessonLayout 
      courseId="frontenddev"
      sessionId="session11"
      title="React și componente"
      subtitle="Primii pași în dezvoltarea cu biblioteca React."
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

export default Session11;
