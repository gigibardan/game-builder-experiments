
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { cn } from '@/lib/utils';

interface ImageModalProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ 
  src, 
  alt, 
  caption, 
  className 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className={cn("cursor-pointer", className)}>
        <Image 
          src={src} 
          alt={alt} 
          onClick={openModal}
          className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] w-full max-w-full max-h-[300px] object-contain"
        />
        {caption && (
          <p className="text-sm text-center text-gray-600 mt-2">{caption}</p>
        )}
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-2 right-2 z-10 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-gray-900 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="p-2">
              <Image 
                src={src} 
                alt={alt} 
                className="max-w-full max-h-[85vh] object-contain"
              />
            </div>
            {caption && (
              <div className="bg-white p-4 text-center">
                <p className="text-gray-700">{caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
