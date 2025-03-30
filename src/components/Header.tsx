
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Laptop, Book, Home, Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto py-2 px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Link to="/" className="flex items-center space-x-2 text-gray-800" onClick={closeMenu}>
            <Laptop size={32} className={`transition-colors ${isScrolled || location.pathname === '/' ? 'text-course-purple' : 'text-white'}`} />
            <span className={`text-xl font-bold transition-colors ${isScrolled || location.pathname === '/' ? 'text-gray-800' : 'text-white'}`}>
              TechMinds Academy
            </span>
          </Link>
          
          <button onClick={toggleMenu} className="sm:hidden text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <Button variant={isActive('/') ? "default" : "ghost"} className="text-sm">
                    <Home className="mr-1 h-4 w-4" />
                    <span>Acasă</span>
                  </Button>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm">
                  <Book className="mr-1 h-4 w-4" />
                  <span>Cursuri</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/scratch"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Scratch</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Laboratorul de Jocuri pentru începători
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/appinventor"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">App Inventor</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Atelierul de Aplicații Mobile
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/construct3"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Construct 3</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Dezvoltare de Jocuri 2D
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/roblox-lua"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Roblox Lua</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Universul Dezvoltării de Jocuri
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li className="col-span-2">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/#courses"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-center"
                        >
                          <div className="text-sm font-medium leading-none">Vezi toate cursurile</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
        {/* Mobile Navigation */}
        <nav className={`fixed inset-y-0 right-0 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out z-50 flex flex-col h-full`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold">Meniu</span>
              <button onClick={closeMenu}>
                <X size={24} />
              </button>
            </div>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-800 hover:text-course-purple flex items-center" onClick={closeMenu}>
                  <Home className="mr-2 h-5 w-5" />
                  <span>Acasă</span>
                </Link>
              </li>
              <li>
                <div className="mb-2 font-medium text-gray-500">Cursuri</div>
                <ul className="pl-4 space-y-3">
                  <li>
                    <Link to="/scratch" className="text-gray-800 hover:text-course-purple block" onClick={closeMenu}>
                      Scratch
                    </Link>
                  </li>
                  <li>
                    <Link to="/appinventor" className="text-gray-800 hover:text-course-purple block" onClick={closeMenu}>
                      App Inventor
                    </Link>
                  </li>
                  <li>
                    <Link to="/construct3" className="text-gray-800 hover:text-course-purple block" onClick={closeMenu}>
                      Construct 3
                    </Link>
                  </li>
                  <li>
                    <Link to="/gdevelop" className="text-gray-800 hover:text-course-purple block" onClick={closeMenu}>
                      GDevelop
                    </Link>
                  </li>
                  <li>
                    <Link to="/roblox-lua" className="text-gray-800 hover:text-course-purple block" onClick={closeMenu}>
                      Roblox Lua
                    </Link>
                  </li>
                  <li>
                    <Link to="/python" className="text-gray-800 hover:text-course-purple block" onClick={closeMenu}>
                      Python
                    </Link>
                  </li>
                  <li>
                    <Link to="/#courses" className="text-course-purple font-medium block" onClick={closeMenu}>
                      Vezi toate cursurile
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        
        {/* Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
            onClick={closeMenu}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;
