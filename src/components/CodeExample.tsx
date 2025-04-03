
import React from 'react';
import { motion } from 'framer-motion';

interface CodeExampleProps {
  title?: string;
  language?: string;
  children: React.ReactNode;
}

export const CodeExample: React.FC<CodeExampleProps> = ({ title, language = 'javascript', children }) => {
  return (
    <div className="my-6 rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
      {title && (
        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center">
          <span className="text-sm font-medium text-gray-700">{title}</span>
          {language && <span className="ml-auto text-xs bg-gray-200 px-2 py-1 rounded text-gray-600">{language}</span>}
        </div>
      )}
      <div className="p-4 overflow-x-auto font-mono text-sm">
        {children}
      </div>
    </div>
  );
};

interface ImageExampleProps {
  src: string;
  alt: string;
  caption?: string;
}

export const ImageExample: React.FC<ImageExampleProps> = ({ src, alt, caption }) => {
  return (
    <motion.div 
      className="my-6 rounded-lg overflow-hidden border border-gray-200"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <img src={src} alt={alt} className="w-full h-auto" />
      {caption && (
        <div className="bg-gray-50 p-3 text-center text-sm text-gray-600">
          {caption}
        </div>
      )}
    </motion.div>
  );
};

interface BlockCodeExampleProps {
  title?: string;
  src: string;
  alt: string;
  caption?: string;
}

export const BlockCodeExample: React.FC<BlockCodeExampleProps> = ({ title, src, alt, caption }) => {
  return (
    <motion.div 
      className="my-6 rounded-lg overflow-hidden border border-gray-200"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {title && (
        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
          <span className="text-sm font-medium text-gray-700">{title}</span>
        </div>
      )}
      <img src={src} alt={alt} className="w-full h-auto" />
      {caption && (
        <div className="bg-gray-50 p-3 text-sm text-gray-600">
          {caption}
        </div>
      )}
    </motion.div>
  );
};

export default { CodeExample, ImageExample, BlockCodeExample };
