
import React from 'react';
import { Card } from '@/components/ui/card';

interface CodeBlockProps {
  children?: React.ReactNode; // Made optional with the ? mark
  language?: string;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
  code?: string;
  showLineNumbers?: boolean;
}

const CodeBlock = ({ children, language = 'javascript', title, className, style, code, showLineNumbers }: CodeBlockProps) => {
  // If code prop is provided, use it, otherwise use children
  const codeContent = code || children;
  
  return (
    <div className={`my-6 ${className || ''}`} style={style}>
      {title && <h3 className="text-sm font-medium mb-2 text-gray-500">{title}</h3>}
      <Card className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <pre className={`font-mono text-sm ${showLineNumbers ? 'line-numbers' : ''}`}>
          <code>{codeContent}</code>
        </pre>
      </Card>
    </div>
  );
};

// Change to use named export
export { CodeBlock };
// Also keep default export for backward compatibility
export default CodeBlock;
