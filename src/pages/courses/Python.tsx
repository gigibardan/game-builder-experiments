
import React from 'react';
import { Code } from 'lucide-react';
import CourseComingSoon from '@/components/CourseComingSoon';

const Python = () => {
  return (
    <CourseComingSoon
      title="De la Cod la Aplicații"
      subtitle="Python"
      description="Începe călătoria în programarea textului cu unul dintre cele mai populare limbaje."
      bgColor="bg-gradient-to-r from-blue-700 to-blue-500"
      textColor="text-white"
      accentColor="bg-blue-900"
      icon={<Code className="h-10 w-10 text-white" />}
    />
  );
};

export default Python;
