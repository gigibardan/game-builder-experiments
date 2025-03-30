
import React from 'react';
import { Rocket } from 'lucide-react';
import CourseComingSoon from '@/components/CourseComingSoon';

const GDevelop = () => {
  return (
    <CourseComingSoon
      title="Fabrica de Jocuri"
      subtitle="GDevelop"
      description="Dezvoltă jocuri 2D complexe cu fizică realistă și efecte vizuale impresionante."
      bgColor="bg-gradient-to-r from-indigo-600 to-indigo-400"
      textColor="text-white"
      accentColor="bg-indigo-800"
      icon={<Rocket className="h-10 w-10 text-white" />}
    />
  );
};

export default GDevelop;
