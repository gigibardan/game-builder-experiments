
import React from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, alt, ...props }, ref) => {
    return (
      <img
        ref={ref}
        className={cn(
          "rounded-md object-cover transition-all",
          className
        )}
        alt={alt || "Image"}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";
