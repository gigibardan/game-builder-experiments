
import React from 'react';
import { Gamepad, Laptop, Trophy } from 'lucide-react';
import CourseCard from '@/components/CourseCard';

const Index = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CourseCard 
          title="Jocuri Interactive" 
          subtitle="Dezvoltare de jocuri"
          description="Creează jocuri captivante precum Clicker, Quiz, Catch the Object și multe altele!"
          icon={<Gamepad className="h-6 w-6" />}
          color="border-course-purple"
          bgcolor="bg-course-purple"
          link="/curriculum"
        />
        
        <CourseCard 
          title="Programare Vizuală" 
          subtitle="Concepte de bază"
          description="Învață concepte de programare utilizând blocuri vizuale în App Inventor."
          icon={<Laptop className="h-6 w-6" />}
          color="border-course-blue"
          bgcolor="bg-course-blue"
          link="/curriculum"
        />
        
        <CourseCard 
          title="Proiecte Practice" 
          subtitle="Aplicare practică"
          description="Aplică ce înveți prin proiecte distractive pe care le poți împărtăși cu prietenii."
          icon={<Trophy className="h-6 w-6" />}
          color="border-course-orange"
          bgcolor="bg-course-orange"
          link="/curriculum"
        />
      </div>
    </div>
  );
};

export default Index;
