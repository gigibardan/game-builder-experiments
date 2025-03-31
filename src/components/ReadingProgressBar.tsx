
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled a bit
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = Math.floor((window.scrollY / documentHeight) * 100);
      
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Progress
        value={progress}
        className="h-1 rounded-none bg-gray-100"
        indicatorClassName="bg-course-blue"
      />
    </div>
  );
};

export default ReadingProgressBar;
