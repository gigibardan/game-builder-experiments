
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session14 = () => {
  return (
    <LessonLayout 
      courseId="python"
      sessionId="session14"
      title="Proiect final și deployment"
      subtitle="Aplicație completă Python pentru portfolio."
      heroColor="bg-gradient-to-r from-blue-500 to-indigo-600"
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

export default Session14;
