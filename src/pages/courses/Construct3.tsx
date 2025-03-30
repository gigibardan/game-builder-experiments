
import React from 'react';
import { Gamepad } from 'lucide-react';
import CourseComingSoon from '@/components/CourseComingSoon';

const Construct3 = () => {
  return (
    <CourseComingSoon
      title="Dezvoltare de Jocuri 2D"
      subtitle="Construct 3"
      description="Învață să creezi jocuri 2D captivante fără a avea nevoie de cunoștințe avansate de programare."
      bgColor="bg-gradient-to-r from-blue-600 to-blue-400"
      textColor="text-white"
      accentColor="bg-blue-700"
      icon={<Gamepad className="h-10 w-10 text-white" />}
    />
  );
};

export default Construct3;
