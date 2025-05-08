
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Image } from '@/components/ui/image';

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
  imageSrc?: string; // New prop for the lesson image
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
  color = "amber", // Changed default color to amber for better visibility
  skills = [],
  imageSrc // New prop for the image
}: SessionCardProps) => {
  // Use highlights if provided, otherwise use skills
  const displaySkills = highlights || skills || [];
  
  // Helper function to get the text color based on background color for better contrast
  const getTextColor = (bgColor: string) => {
    const darkColors = ['blue', 'purple', 'indigo', 'gray', 'black', 'course-blue', 'course-purple'];
    return darkColors.includes(bgColor) ? 'text-white' : 'text-gray-800';
  };

  const textColor = getTextColor(color);

  return (
    <Card className={`overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full border-2 ${
      isAvailable ? `border-${color}/60` : 'border-gray-300'
    }`}>
      {/* Added image section */}
      {imageSrc && (
        <div className="w-full h-40 overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={`Preview of ${title}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader className={`${
        isAvailable ? `bg-${color}` : 'bg-gray-300'
      } ${textColor}`}>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center">
            <span className={`bg-white ${textColor === 'text-white' ? `text-${color}` : 'text-gray-800'} rounded-full h-8 w-8 flex items-center justify-center mr-2 shadow-md`}>
              {number}
            </span>
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6 bg-white">
        <p className="text-gray-600 mb-4">{description}</p>
        
        {(duration || level || ageGroup) && (
          <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
            {duration && (
              <div className="flex flex-col items-center bg-gray-50 p-2 rounded shadow-sm">
                <span className="text-gray-500">Durată</span>
                <span className="font-medium">{duration}</span>
              </div>
            )}
            {level && (
              <div className="flex flex-col items-center bg-gray-50 p-2 rounded shadow-sm">
                <span className="text-gray-500">Nivel</span>
                <span className="font-medium">{level}</span>
              </div>
            )}
            {ageGroup && (
              <div className="flex flex-col items-center bg-gray-50 p-2 rounded shadow-sm">
                <span className="text-gray-500">Vârstă</span>
                <span className="font-medium">{ageGroup}</span>
              </div>
            )}
          </div>
        )}
        
        <div className="flex flex-wrap gap-2">
          {displaySkills.map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100 border-gray-200">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-white">
        <Button asChild disabled={!isAvailable} 
          className={`w-full ${isAvailable 
            ? `bg-amber-500 hover:bg-amber-600 text-white shadow-md` 
            : 'bg-gray-300'}`}>
          <Link to={isAvailable ? link : '#'}>
            {isAvailable ? 'Începe Lecția' : 'În curând'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SessionCard;
