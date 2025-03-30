
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface SessionCardProps {
  number: number;
  title: string;
  description: string;
  skills: string[];
  link: string;
  isAvailable?: boolean;
}

const SessionCard = ({ 
  number, 
  title, 
  description, 
  skills, 
  link, 
  isAvailable = true 
}: SessionCardProps) => {
  return (
    <Card className={`overflow-hidden border-2 hover:shadow-lg transition-all duration-300 h-full ${
      isAvailable ? 'border-course-purple' : 'border-gray-300'
    }`}>
      <CardHeader className={`${
        isAvailable ? 'bg-course-purple' : 'bg-gray-300'
      } text-white`}>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center">
            <span className="bg-white text-course-purple rounded-full h-8 w-8 flex items-center justify-center mr-2">
              {number}
            </span>
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild disabled={!isAvailable} 
          className={`w-full ${isAvailable ? 'bg-course-purple hover:bg-course-blue' : 'bg-gray-300'}`}>
          <Link to={isAvailable ? link : '#'}>
            {isAvailable ? 'Începe Lecția' : 'În curând'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SessionCard;
