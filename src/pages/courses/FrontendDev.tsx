
import React from 'react';
import { Globe } from 'lucide-react';
import CourseComingSoon from '@/components/CourseComingSoon';

const FrontendDev = () => {
  return (
    <CourseComingSoon
      title="Construiește Web-ul Viitorului"
      subtitle="Frontend Development"
      description="Învață să creezi site-uri web moderne și interactive cu HTML, CSS și JavaScript."
      bgColor="bg-gradient-to-r from-cyan-600 to-cyan-400"
      textColor="text-white"
      accentColor="bg-cyan-800"
      icon={<Globe className="h-10 w-10 text-white" />}
    />
  );
};

export default FrontendDev;
