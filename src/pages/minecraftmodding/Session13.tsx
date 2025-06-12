
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox } from '@/components/LessonComponents';

const Session13 = () => {
  return (
    <LessonLayout 
      courseId="minecraftmodding"
      sessionId="session13"
      title="Distribuție și publicare"
      subtitle="Publică mod-urile și construiește o comunitate."
      heroColor="bg-gradient-to-r from-green-500 to-emerald-600"
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

export default Session13;
