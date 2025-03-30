
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700 text-center md:text-left">© 2023 CodeKids. Toate drepturile rezervate.</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="text-course-purple hover:text-course-blue transition-colors">
              Acasă
            </Link>
            <Link to="/curriculum" className="text-course-purple hover:text-course-blue transition-colors">
              Curriculum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
