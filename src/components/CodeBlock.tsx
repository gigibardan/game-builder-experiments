
import React from 'react';
import { Card } from '@/components/ui/card';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeBlock = ({ code, language = 'javascript', title }: CodeBlockProps) => {
  return (
    <div className="my-6">
      {title && <h3 className="text-sm font-medium mb-2 text-gray-500">{title}</h3>}
      <Card className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <pre className="font-mono text-sm">
          <code>{code}</code>
        </pre>
      </Card>
    </div>
  );
};

export default CodeBlock;
