
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface SessionCardProps {
  number: number;
  title: string;
  description: string;
  link: string;
  isAvailable?: boolean;
  // New props to support the Scratch page
  duration?: string;
  level?: string;
  ageGroup?: string;
  highlights?: string[];
  color?: string;
  skills?: string[]; // Keeping this for backward compatibility
}

const SessionCard = ({ 
  number, 
  title, 
  description, 
  link, 
  isAvailable = true,
  duration,
  level,
  ageGroup,
  highlights,
  color = "course-purple",
  skills = []
}: SessionCardProps) => {
  // Use highlights if provided, otherwise use skills
  const displaySkills = highlights || skills || [];

  return (
    <Card className={`overflow-hidden border-2 hover:shadow-lg transition-all duration-300 h-full ${
      isAvailable ? `border-${color}` : 'border-gray-300'
    }`}>
      <CardHeader className={`${
        isAvailable ? `bg-${color}` : 'bg-gray-300'
      } text-white`}>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center">
            <span className={`bg-white text-${color} rounded-full h-8 w-8 flex items-center justify-center mr-2`}>
              {number}
            </span>
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-gray-600 mb-4">{description}</p>
        
        {(duration || level || ageGroup) && (
          <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
            {duration && (
              <div className="flex flex-col items-center bg-gray-50 p-2 rounded">
                <span className="text-gray-500">Durată</span>
                <span className="font-medium">{duration}</span>
              </div>
            )}
            {level && (
              <div className="flex flex-col items-center bg-gray-50 p-2 rounded">
                <span className="text-gray-500">Nivel</span>
                <span className="font-medium">{level}</span>
              </div>
            )}
            {ageGroup && (
              <div className="flex flex-col items-center bg-gray-50 p-2 rounded">
                <span className="text-gray-500">Vârstă</span>
                <span className="font-medium">{ageGroup}</span>
              </div>
            )}
          </div>
        )}
        
        <div className="flex flex-wrap gap-2">
          {displaySkills.map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild disabled={!isAvailable} 
          className={`w-full ${isAvailable ? `bg-${color} hover:bg-course-blue` : 'bg-gray-300'}`}>
          <Link to={isAvailable ? link : '#'}>
            {isAvailable ? 'Începe Lecția' : 'În curând'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SessionCard;
