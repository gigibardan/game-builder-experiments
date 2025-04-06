
import React from 'react';
import { Star, Info, BookOpen, AlertTriangle, HelpCircle, CheckCircle, Code } from 'lucide-react';

interface InfoBoxProps {
  title?: string;
  icon?: 'info' | 'star' | 'warning' | 'help' | 'success' | 'code' | 'book';
  variant?: 'primary' | 'secondary' | 'warning' | 'success' | 'info';
  children: React.ReactNode;
}

export const InfoBox: React.FC<InfoBoxProps> = ({ 
  title, 
  icon = 'info', 
  variant = 'primary', 
  children 
}) => {
  const variantStyles = {
    primary: {
      border: 'border-l-course-purple',
      bg: 'bg-purple-50',
      iconColor: 'text-course-purple',
      titleColor: 'text-course-purple',
    },
    secondary: {
      border: 'border-l-course-blue',
      bg: 'bg-blue-50',
      iconColor: 'text-course-blue',
      titleColor: 'text-course-blue',
    },
    warning: {
      border: 'border-l-orange-500',
      bg: 'bg-orange-50',
      iconColor: 'text-orange-500',
      titleColor: 'text-orange-700',
    },
    success: {
      border: 'border-l-green-500',
      bg: 'bg-green-50',
      iconColor: 'text-green-500',
      titleColor: 'text-green-700',
    },
    info: {
      border: 'border-l-blue-500',
      bg: 'bg-blue-50',
      iconColor: 'text-blue-500',
      titleColor: 'text-blue-700',
    }
  };

  const IconComponent = {
    info: Info,
    star: Star,
    warning: AlertTriangle,
    help: HelpCircle,
    success: CheckCircle,
    code: Code,
    book: BookOpen
  }[icon];

  const styles = variantStyles[variant];

  return (
    <div className={`${styles.border} ${styles.bg} border-l-4 p-4 my-6 rounded-r-md`}>
      {(title || icon) && (
        <h3 className={`font-bold flex items-center ${styles.titleColor} mb-2`}>
          {icon && <IconComponent className={`h-5 w-5 ${styles.iconColor} mr-2`} />}
          {title}
        </h3>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

interface StepItemProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export const StepItem: React.FC<StepItemProps> = ({ number, title, children }) => {
  return (
    <div className="p-4 border rounded-md bg-gray-50 mb-4">
      <div className="flex items-start">
        <div className="bg-course-purple text-white rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
          {number}
        </div>
        <div>
          <h3 className="font-bold mb-2">{title}</h3>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

interface ChallengeProps {
  title: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  children: React.ReactNode;
}

export const Challenge: React.FC<ChallengeProps> = ({ title, difficulty = 'medium', children }) => {
  const difficultyStyles = {
    easy: {
      stars: 1,
      color: 'text-green-500'
    },
    medium: {
      stars: 2,
      color: 'text-orange-500'
    },
    hard: {
      stars: 3,
      color: 'text-red-500'
    }
  };

  const { stars, color } = difficultyStyles[difficulty];

  return (
    <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md my-6">
      <h3 className="font-bold flex items-center">
        <div className="flex mr-2">
          {Array.from({ length: stars }).map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${color} mr-0.5`} fill="currentColor" />
          ))}
        </div>
        {title}
      </h3>
      <div className="mt-2">{children}</div>
    </div>
  );
};

interface LearningOutcomeProps {
  items?: string[];
  title?: string;
  children?: React.ReactNode;
}

export const LearningOutcome: React.FC<LearningOutcomeProps> = ({ items = [], title = "Ce vei învăța", children }) => {
  return (
    <div className="bg-blue-50 border-l-4 border-course-blue p-4 my-6">
      <h3 className="text-lg font-semibold text-course-blue mb-2">{title}</h3>
      {items.length > 0 ? (
        <ul className="list-disc list-inside space-y-1">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        children
      )}
    </div>
  );
};

export default { InfoBox, StepItem, Challenge, LearningOutcome };
