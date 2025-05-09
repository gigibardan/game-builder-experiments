
import React from 'react';
import { Card } from '@/components/ui/card';
import { CodeBlock } from '@/components/CodeBlock';
import ImageModal from '@/components/ImageModal';

interface CodeExampleProps {
  title?: string;
  language?: string;
  children: string;
  className?: string;
}

export const CodeExample: React.FC<CodeExampleProps> = ({ 
  title, 
  language = "javascript", 
  children,
  className 
}) => {
  return (
    <Card className={`mb-6 overflow-hidden ${className}`}>
      {title && (
        <div className="bg-gray-100 px-4 py-2 border-b">
          <h3 className="text-gray-800 font-medium">{title}</h3>
        </div>
      )}
      <div className="p-0">
        <CodeBlock language={language} code={children} />
      </div>
    </Card>
  );
};

interface ImageExampleProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export const ImageExample: React.FC<ImageExampleProps> = ({ 
  src, 
  alt, 
  caption,
  className 
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <ImageModal 
        src={src}
        alt={alt}
        caption={caption}
      />
    </div>
  );
};

interface BlockCodeExampleProps {
  title?: string;
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export const BlockCodeExample: React.FC<BlockCodeExampleProps> = ({
  title,
  src,
  alt,
  caption,
  className
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      {title && (
        <h3 className="text-gray-800 font-medium mb-2">{title}</h3>
      )}
      <ImageModal 
        src={src}
        alt={alt}
        caption={caption}
      />
    </div>
  );
};
