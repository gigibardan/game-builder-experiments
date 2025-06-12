
import React from 'react';
import LessonInDevelopment from '@/components/LessonInDevelopment';

const Session1 = () => {
  return (
    <LessonInDevelopment
      courseId="scratch"
      sessionNumber={1}
      title="Session 1"
      courseTitle="Scratch"
      heroColor="bg-gradient-to-r from-orange-500 to-yellow-500"
    />
  );
};

export default Session1;
