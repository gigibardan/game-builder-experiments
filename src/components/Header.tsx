
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Laptop, Book, Home } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-course-purple to-course-blue shadow-md">
      <div className="container mx-auto py-4 px-4 flex flex-col sm:flex-row justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-white mb-4 sm:mb-0">
          <Laptop size={32} />
          <span className="text-xl font-bold">CodeKids</span>
        </Link>
        
        <nav className="flex space-x-2">
          <Button asChild variant="ghost" className="text-white hover:bg-white/20">
            <Link to="/" className="flex items-center">
              <Home className="mr-1 h-4 w-4" />
              <span>Acasă</span>
            </Link>
          </Button>
          
          <Button asChild variant="ghost" className="text-white hover:bg-white/20">
            <Link to="/curriculum" className="flex items-center">
              <Book className="mr-1 h-4 w-4" />
              <span>Curriculum</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
