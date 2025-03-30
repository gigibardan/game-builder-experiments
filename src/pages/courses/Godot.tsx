
import React from 'react';
import { Gamepad } from 'lucide-react';
import CourseComingSoon from '@/components/CourseComingSoon';

const Godot = () => {
  return (
    <CourseComingSoon
      title="Game Development Pro"
      subtitle="Godot"
      description="Dezvoltă jocuri profesionale 2D și 3D cu un motor de joc avansat și gratuit."
      bgColor="bg-gradient-to-r from-indigo-700 to-indigo-500"
      textColor="text-white"
      accentColor="bg-indigo-900"
      icon={<Gamepad className="h-10 w-10 text-white" />}
    />
  );
};

export default Godot;
