
import React from 'react';
import { Box } from 'lucide-react';
import CourseComingSoon from '@/components/CourseComingSoon';

const Alice3 = () => {
  return (
    <CourseComingSoon
      title="Povești 3D Interactive"
      subtitle="Alice 3"
      description="Creează povești și animații 3D interactive într-un mediu vizual de programare."
      bgColor="bg-gradient-to-r from-pink-500 to-pink-400"
      textColor="text-white"
      accentColor="bg-pink-700"
      icon={<Box className="h-10 w-10 text-white" />}
    />
  );
};

export default Alice3;
