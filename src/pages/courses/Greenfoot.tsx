
import React from 'react';
import { Coffee } from 'lucide-react';
import CourseComingSoon from '@/components/CourseComingSoon';

const Greenfoot = () => {
  return (
    <CourseComingSoon
      title="Java prin Jocuri"
      subtitle="Greenfoot"
      description="Învață programare orientată pe obiecte prin crearea jocurilor în Java."
      bgColor="bg-gradient-to-r from-orange-600 to-orange-400"
      textColor="text-white"
      accentColor="bg-orange-800"
      icon={<Coffee className="h-10 w-10 text-white" />}
    />
  );
};

export default Greenfoot;
