
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, Construction } from 'lucide-react';

interface SessionCardInDevelopmentProps {
  number: number;
  title: string;
  description: string;
  duration?: string;
  level?: string;
  ageGroup?: string;
  color?: string;
}

const SessionCardInDevelopment: React.FC<SessionCardInDevelopmentProps> = ({
  number,
  title,
  description,
  duration = "90 min",
  level = "În dezvoltare",
  ageGroup = "7-14 ani",
  color = "gray",
}) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg border-2 border-dashed border-gray-300 bg-gray-50">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <div className={`bg-${color}-100 text-${color}-600 px-3 py-1 rounded-full text-sm font-medium`}>
            Lecția {number}
          </div>
          <Construction className="h-5 w-5 text-gray-400" />
        </div>
        
        <CardTitle className="text-xl leading-tight text-gray-600">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-500 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-gray-200 text-gray-600">
            <Clock className="mr-1 h-3 w-3" />
            {duration}
          </Badge>
          <Badge variant="secondary" className="bg-gray-200 text-gray-600">
            <Users className="mr-1 h-3 w-3" />
            {ageGroup}
          </Badge>
          <Badge variant="secondary" className="bg-gray-200 text-gray-600">
            <Award className="mr-1 h-3 w-3" />
            {level}
          </Badge>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-center text-gray-400 text-sm">
            <Construction className="mr-2 h-4 w-4" />
            Conținut în dezvoltare
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SessionCardInDevelopment;
