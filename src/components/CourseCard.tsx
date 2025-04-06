
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface CourseCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgcolor: string;
  link: string;
  age?: string;
  level?: string;
}

const CourseCard = ({ title, subtitle, description, icon, color, bgcolor, link, age, level }: CourseCardProps) => {
  // Ensure all links start with "/courses/"
  const formattedLink = !link.startsWith("/courses/") && !link.startsWith("/") 
    ? `/courses/${link}` 
    : link;
    
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className={`overflow-hidden border-2 ${color} hover:shadow-xl transition-all duration-300 h-full`}>
        <CardHeader className={`${bgcolor} text-white`}>
          <div className="flex items-center space-x-2">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
              {icon}
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <p className="text-sm font-medium text-white/80">{subtitle}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6 pb-4 flex flex-col h-full">
          <p className="text-gray-600 flex-grow">{description}</p>
          
          {/* Course Details */}
          {(age || level) && (
            <div className="flex flex-wrap gap-3 mt-4 mb-5">
              {age && (
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{age}</span>
                </div>
              )}
              
              {level && (
                <div className="flex items-center text-xs text-gray-500">
                  <Award className="h-3 w-3 mr-1" />
                  <span>{level}</span>
                </div>
              )}
            </div>
          )}
          
          <div className="mt-auto pt-4">
            <Button asChild className={`w-full ${bgcolor}`}>
              <Link to={formattedLink} className="flex items-center justify-center">
                <span>Explorează</span>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
