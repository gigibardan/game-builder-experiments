import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Users, BarChart3, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Interface defined for proper TypeScript typing
interface SessionCardProps {
  number: number;
  title: string;
  description: string;
  link: string;
  isAvailable?: boolean;
  duration?: string;
  level?: string;
  ageGroup?: string;
  highlights?: string[];
  color?: string;
  skills?: string[];
  imageSrc?: string;
}

// Maparea culorilor Tailwind la clase CSS pentru fundal
const COLOR_MAP = {
  'amber': 'from-amber-400 to-amber-600',
  'blue': 'from-blue-400 to-blue-600',
  'green': 'from-green-400 to-green-600',
  'purple': 'from-purple-400 to-purple-600',
  'cyan': 'from-cyan-400 to-cyan-600',
  'indigo': 'from-indigo-400 to-indigo-600',
  'rose': 'from-rose-400 to-rose-600',
  'emerald': 'from-emerald-400 to-emerald-600',
  'default': 'from-amber-400 to-amber-600'
};

// Maparea culorilor Tailwind la clase CSS pentru butoane
const BUTTON_COLOR_MAP = {
  'amber': 'bg-amber-500 hover:bg-amber-600',
  'blue': 'bg-blue-500 hover:bg-blue-600',
  'green': 'bg-green-500 hover:bg-green-600',
  'purple': 'bg-purple-500 hover:bg-purple-600',
  'cyan': 'bg-cyan-500 hover:bg-cyan-600',
  'indigo': 'bg-indigo-500 hover:bg-indigo-600',
  'rose': 'bg-rose-500 hover:bg-rose-600',
  'emerald': 'bg-emerald-500 hover:bg-emerald-600',
  'default': 'bg-amber-500 hover:bg-amber-600'
};

// Maparea culorilor Tailwind la clase CSS pentru texte
const TEXT_COLOR_MAP = {
  'amber': 'text-amber-800',
  'blue': 'text-blue-800',
  'green': 'text-green-800',
  'purple': 'text-purple-800',
  'cyan': 'text-cyan-800',
  'indigo': 'text-indigo-800',
  'rose': 'text-rose-800',
  'emerald': 'text-emerald-800',
  'default': 'text-amber-800'
};

// Maparea culorilor Tailwind la clase CSS pentru border
const BORDER_COLOR_MAP = {
  'amber': 'border-amber-300',
  'blue': 'border-blue-300',
  'green': 'border-green-300',
  'purple': 'border-purple-300',
  'cyan': 'border-cyan-300',
  'indigo': 'border-indigo-300',
  'rose': 'border-rose-300',
  'emerald': 'border-emerald-300',
  'default': 'border-amber-300'
};

// Maparea culorilor Tailwind la clase CSS pentru badge
const BADGE_COLOR_MAP = {
  'amber': 'bg-amber-100 text-amber-800 border-amber-200',
  'blue': 'bg-blue-100 text-blue-800 border-blue-200',
  'green': 'bg-green-100 text-green-800 border-green-200',
  'purple': 'bg-purple-100 text-purple-800 border-purple-200',
  'cyan': 'bg-cyan-100 text-cyan-800 border-cyan-200',
  'indigo': 'bg-indigo-100 text-indigo-800 border-indigo-200',
  'rose': 'bg-rose-100 text-rose-800 border-rose-200',
  'emerald': 'bg-emerald-100 text-emerald-800 border-emerald-200',
  'default': 'bg-amber-100 text-amber-800 border-amber-200'
};

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
  color = "amber",
  skills = [],
  imageSrc
}: SessionCardProps) => {
  // Use highlights if provided, otherwise use skills
  const displaySkills = highlights || skills || [];
  
  // Get the correct color classes based on the color prop
  const gradientClass = COLOR_MAP[color] || COLOR_MAP.default;
  const buttonColorClass = BUTTON_COLOR_MAP[color] || BUTTON_COLOR_MAP.default;
  const textColorClass = TEXT_COLOR_MAP[color] || TEXT_COLOR_MAP.default;
  const borderColorClass = BORDER_COLOR_MAP[color] || BORDER_COLOR_MAP.default;
  const badgeColorClass = BADGE_COLOR_MAP[color] || BADGE_COLOR_MAP.default;

  return (
    <Card className={`group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1 ${
      isAvailable ? `${borderColorClass} border-2` : 'border-gray-300 border-2'
    }`}>
      {/* Image Section with Ribbon */}
      {imageSrc && (
        <div className="relative w-full h-48 overflow-hidden">
          {/* Session Number Ribbon */}
          <div className={`absolute top-4 left-0 z-10 py-1 px-3 shadow-md bg-gradient-to-r ${gradientClass} text-white font-bold`}>
            #{number}
          </div>
          
          <img 
            src={imageSrc} 
            alt={`Preview of ${title}`}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300"></div>
          
          {/* Title on image */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white text-xl font-bold drop-shadow-md">{title}</h3>
          </div>
        </div>
      )}
      
      {/* Content Section */}
      <CardContent className="pt-6 pb-2 bg-white">
        {/* If no image, show title here */}
        {!imageSrc && (
          <CardTitle className={`flex items-center text-gray-800 mb-3`}>
            <span className={`bg-gradient-to-r ${gradientClass} rounded-full h-8 w-8 flex items-center justify-center mr-2 shadow-md text-white`}>
              {number}
            </span>
            <span className="text-gray-800">{title}</span>
          </CardTitle>
        )}
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* Info badges in a nicer layout */}
        {(duration || level || ageGroup) && (
          <div className="grid grid-cols-3 gap-2 mb-5">
            {duration && (
              <div className="flex flex-col items-center bg-gray-50 rounded-md p-2 shadow-sm border border-gray-100">
                <Clock className={`h-5 w-5 ${textColorClass} mb-1`} />
                <span className="text-gray-500 text-xs">Durată</span>
                <span className="font-medium text-sm text-center">{duration}</span>
              </div>
            )}
            {level && (
              <div className="flex flex-col items-center bg-gray-50 rounded-md p-2 shadow-sm border border-gray-100">
                <BarChart3 className={`h-5 w-5 ${textColorClass} mb-1`} />
                <span className="text-gray-500 text-xs">Nivel</span>
                <span className="font-medium text-sm text-center">{level}</span>
              </div>
            )}
            {ageGroup && (
              <div className="flex flex-col items-center bg-gray-50 rounded-md p-2 shadow-sm border border-gray-100">
                <Users className={`h-5 w-5 ${textColorClass} mb-1`} />
                <span className="text-gray-500 text-xs">Vârstă</span>
                <span className="font-medium text-sm text-center">{ageGroup}</span>
              </div>
            )}
          </div>
        )}
        
        {/* Highlights/Skills */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 mb-2">Ce vei învăța:</h4>
          <div className="flex flex-wrap gap-2">
            {displaySkills.map((skill, index) => (
              <div key={index} className={`flex items-center ${badgeColorClass} rounded-full px-3 py-1 text-xs`}>
                <CheckCircle className="h-3 w-3 mr-1" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      
      {/* Footer with Button */}
      <CardFooter className="pt-2 pb-4 bg-white">
        <Button
          asChild
          disabled={!isAvailable}
          className={`w-full ${isAvailable ? buttonColorClass : 'bg-gray-300'} text-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow`}
        >
          <a href={isAvailable ? link : '#'}>
            {isAvailable ? (
              <>
                <span>Începe Lecția</span>
                <ArrowUpRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              'În curând'
            )}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SessionCard;