
import React from 'react';
import { Layout } from 'lucide-react';
import CourseComingSoon from '@/components/CourseComingSoon';

const RobloxLua = () => {
  return (
    <CourseComingSoon
      title="Universul Dezvoltării de Jocuri"
      subtitle="Roblox Lua"
      description="Creează jocuri complexe în platforma Roblox folosind limbajul de programare Lua."
      bgColor="bg-gradient-to-r from-red-600 to-orange-500"
      textColor="text-white"
      accentColor="bg-red-800"
      icon={<Layout className="h-10 w-10 text-white" />}
    />
  );
};

export default RobloxLua;
