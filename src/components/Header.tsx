
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Laptop, 
  Book, 
  Home, 
  Menu, 
  X, 
  ChevronDown, 
  Gamepad, 
  Code, 
  Rocket 
} from 'lucide-react';
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

  // Organize courses by category
  const courses = [
    {
      category: "Începători (8-12 ani)",
      items: [
        { title: "Scratch", path: "/scratch", icon: <Gamepad className="h-4 w-4 mr-2" />, description: "Laboratorul de Jocuri pentru începători" },
        { title: "App Inventor", path: "/appinventor", icon: <Laptop className="h-4 w-4 mr-2" />, description: "Atelierul de Aplicații Mobile" },
      ]
    },
    {
      category: "Intermediari (10-15 ani)",
      items: [
        { title: "Construct 3", path: "/construct3", icon: <Gamepad className="h-4 w-4 mr-2" />, description: "Dezvoltare de Jocuri 2D" },
        { title: "GDevelop", path: "/gdevelop", icon: <Rocket className="h-4 w-4 mr-2" />, description: "Fabrica de Jocuri" },
        { title: "Alice 3", path: "/alice3", icon: <Code className="h-4 w-4 mr-2" />, description: "Povești 3D Interactive" },
        { title: "micro:bit Arcade", path: "/microbit-arcade", icon: <Gamepad className="h-4 w-4 mr-2" />, description: "Jocuri și Electronice" },
      ]
    },
    {
      category: "Avansați (12-18 ani)",
      items: [
        { title: "Minecraft Modding", path: "/minecraft-modding", icon: <Code className="h-4 w-4 mr-2" />, description: "De la jucător la creator" },
        { title: "Roblox Lua", path: "/roblox-lua", icon: <Code className="h-4 w-4 mr-2" />, description: "Universul Dezvoltării de Jocuri" },
        { title: "Python", path: "/python", icon: <Code className="h-4 w-4 mr-2" />, description: "De la Cod la Aplicații" },
        { title: "Frontend Development", path: "/frontend-dev", icon: <Code className="h-4 w-4 mr-2" />, description: "Construiește Web-ul Viitorului" },
      ]
    }
  ];

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
                  <div className="w-[850px] p-4 md:grid-cols-3 lg:w-[850px]">
                    {courses.map((category, idx) => (
                      <div key={idx} className="mb-4">
                        <h3 className="text-sm font-medium mb-2 text-gray-500 border-b pb-1">{category.category}</h3>
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          {category.items.map((item, i) => (
                            <NavigationMenuLink asChild key={i}>
                              <Link
                                to={item.path}
                                onClick={closeMenu}
                                className="block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="flex items-center">
                                  {item.icon}
                                  <span className="text-sm font-medium">{item.title}</span>
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="text-center mt-4 pt-2 border-t">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/#courses"
                          onClick={closeMenu}
                          className="text-sm font-medium text-course-purple hover:text-course-purple/80"
                        >
                          Vezi toate cursurile
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
        {/* Mobile Navigation */}
        <nav className={`fixed inset-y-0 right-0 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden w-80 bg-white shadow-xl transition-transform duration-300 ease-in-out z-50 flex flex-col h-full`}>
          <div className="p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold">Meniu</span>
              <button onClick={closeMenu}>
                <X size={24} />
              </button>
            </div>
            <ul className="space-y-6">
              <li>
                <Link to="/" className="text-gray-800 hover:text-course-purple flex items-center" onClick={closeMenu}>
                  <Home className="mr-2 h-5 w-5" />
                  <span>Acasă</span>
                </Link>
              </li>
              
              {courses.map((category, idx) => (
                <li key={idx} className="space-y-2">
                  <div className="font-medium text-gray-500 border-b pb-1">{category.category}</div>
                  <ul className="pl-2 space-y-3 mt-2">
                    {category.items.map((item, i) => (
                      <li key={i}>
                        <Link 
                          to={item.path} 
                          className="text-gray-800 hover:text-course-purple flex items-center py-1" 
                          onClick={closeMenu}
                        >
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              
              <li>
                <Link to="/#courses" className="text-course-purple font-medium block" onClick={closeMenu}>
                  Vezi toate cursurile
                </Link>
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
