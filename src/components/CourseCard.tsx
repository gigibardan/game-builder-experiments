
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  link: string;
}

const CourseCard = ({ title, description, icon, color, link }: CourseCardProps) => {
  return (
    <Card className={`overflow-hidden border-2 ${color} hover:shadow-lg transition-all duration-300 h-full`}>
      <CardHeader className={`${color.replace('border', 'bg')} text-white`}>
        <div className="flex items-center space-x-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6 pb-4 flex flex-col h-full">
        <p className="text-gray-600 flex-grow">{description}</p>
        <div className="mt-4">
          <Button asChild className={`w-full ${color.replace('border', 'bg')}`}>
            <Link to={link} className="flex items-center justify-center">
              <span>Începe</span>
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
