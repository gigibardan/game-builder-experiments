
import React from 'react';
import { Blocks } from 'lucide-react';
import CourseComingSoon from '@/components/CourseComingSoon';

const MicrobitArcade = () => {
  return (
    <CourseComingSoon
      title="Jocuri și Electronice"
      subtitle="micro:bit Arcade"
      description="Combină programarea cu electronica pentru a crea jocuri fizice interactive."
      bgColor="bg-gradient-to-r from-red-600 to-red-400"
      textColor="text-white"
      accentColor="bg-red-800"
      icon={<Blocks className="h-10 w-10 text-white" />}
    />
  );
};

export default MicrobitArcade;
