
import React from 'react';
import { Brush } from 'lucide-react';
import CourseComingSoon from '@/components/CourseComingSoon';

const MinecraftModding = () => {
  return (
    <CourseComingSoon
      title="De la jucător la creator"
      subtitle="Minecraft Modding"
      description="Transformă jocul tău preferat prin crearea propriilor modificări și extensii."
      bgColor="bg-gradient-to-r from-green-600 to-green-400"
      textColor="text-white"
      accentColor="bg-green-800"
      icon={<Brush className="h-10 w-10 text-white" />}
    />
  );
};

export default MinecraftModding;
