import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Laptop, 
  Book, 
  Home, 
  Menu, 
  X, 
  Code, 
  Rocket,
  LayoutGrid,
  Box,
  PenTool,
  Gamepad,
  Globe,
  Paintbrush,
  Boxes,
  User,
  LogOut,
  ShieldCheck,
  Coffee
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
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout, isAdmin } = useAuth();

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

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  // Updated courses with consistent paths
  const courses = [
    {
      category: "Începători (8-12 ani)",
      items: [
        { title: "Scratch", path: "/courses/scratch", icon: <PenTool className="h-4 w-4 mr-2" />, description: "Laboratorul de Jocuri pentru începători" },
        { title: "App Inventor", path: "/courses/appinventor", icon: <Laptop className="h-4 w-4 mr-2" />, description: "Atelierul de Aplicații Mobile" },
      ]
    },
    {
      category: "Intermediari (10-15 ani)",
      items: [
        { title: "Construct 3", path: "/courses/construct3", icon: <Gamepad className="h-4 w-4 mr-2" />, description: "Dezvoltare de Jocuri 2D" },
        { title: "GDevelop", path: "/courses/gdevelop", icon: <Rocket className="h-4 w-4 mr-2" />, description: "Fabrica de Jocuri" },
        { title: "Alice 3", path: "/courses/alice3", icon: <Code className="h-4 w-4 mr-2" />, description: "Povești 3D Interactive" },
        { title: "micro:bit Arcade", path: "/courses/microbitarcade", icon: <LayoutGrid className="h-4 w-4 mr-2" />, description: "Jocuri și Electronice" },
      ]
    },
    {
      category: "Avansați (12-18 ani)",
      items: [
        { title: "Minecraft Modding", path: "/courses/minecraft-modding", icon: <Boxes className="h-4 w-4 mr-2" />, description: "De la jucător la creator" },
        { title: "Roblox Lua", path: "/courses/robloxlua", icon: <Code className="h-4 w-4 mr-2" />, description: "Universul Dezvoltării de Jocuri" },
        { title: "Python", path: "/courses/python", icon: <Code className="h-4 w-4 mr-2" />, description: "De la Cod la Aplicații" },
        { title: "Frontend Development", path: "/courses/frontenddev", icon: <Globe className="h-4 w-4 mr-2" />, description: "Construiește Web-ul Viitorului" },
        { title: "Greenfoot", path: "/courses/greenfoot", icon: <Coffee className="h-4 w-4 mr-2" />, description: "Java prin Jocuri" },
        { title: "Godot", path: "/courses/godot", icon: <Gamepad className="h-4 w-4 mr-2" />, description: "Game Development Pro" },
      ]
    }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-course-blue shadow-md py-2' : 'bg-course-blue py-4'}`}>
      <div className="container mx-auto py-2 px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <img 
              src="https://techminds-academy.ro/assets/images/logo-techminds-sigla.png" 
              alt="TechMinds Academy Logo" 
              className="h-10 w-auto" 
            />
          </Link>
          
          <button onClick={toggleMenu} className="sm:hidden text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <Button variant="ghost" className={cn(
                    "text-sm text-white hover:bg-white/10 hover:text-white",
                    isActive('/') ? "bg-white/20" : ""
                  )}>
                    <Home className="mr-1 h-4 w-4" />
                    <span>Acasă</span>
                  </Button>
                </Link>
              </NavigationMenuItem>
              
              {isAuthenticated && (
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm text-white hover:bg-white/10 hover:text-white bg-transparent">
                    <Book className="mr-1 h-4 w-4" />
                    <span>Cursuri</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 p-4 w-[600px] max-w-[95vw] bg-white text-gray-800 overflow-visible">
                      {courses.map((category, idx) => (
                        <div key={idx} className="mb-4 mx-2">
                          <h3 className="text-sm font-medium mb-2 text-gray-500 border-b pb-1">{category.category}</h3>
                          <div className="grid grid-cols-1 gap-2 mb-2">
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
                      <div className="text-center col-span-2 mt-2 pt-2 border-t">
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
              )}
              
              {isAdmin && (
                <NavigationMenuItem>
                  <Link to="/admin/dashboard">
                    <Button variant="ghost" className={cn(
                      "text-sm text-white hover:bg-white/10 hover:text-white",
                      isActive('/admin') ? "bg-white/20" : ""
                    )}>
                      <ShieldCheck className="mr-1 h-4 w-4" />
                      <span>Admin</span>
                    </Button>
                  </Link>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* User menu */}
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  <User className="mr-1 h-4 w-4" />
                  <span className="text-sm">{user?.username}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Cont utilizator</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Deconectare</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild className="bg-white text-course-blue hover:bg-white/90">
              <Link to="/login">Autentificare</Link>
            </Button>
          )}
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
            
            {isAuthenticated ? (
              <>
                <div className="flex items-center mb-6 pb-4 border-b">
                  <div className="rounded-full bg-gray-200 p-2 mr-3">
                    <User className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium">{user?.username}</p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                </div>
                
                <ul className="space-y-6">
                  <li>
                    <Link to="/" className="text-gray-800 hover:text-course-purple flex items-center" onClick={closeMenu}>
                      <Home className="mr-2 h-5 w-5" />
                      <span>Acasă</span>
                    </Link>
                  </li>
                  
                  {isAdmin && (
                    <li>
                      <Link to="/admin/dashboard" className="text-gray-800 hover:text-course-purple flex items-center" onClick={closeMenu}>
                        <ShieldCheck className="mr-2 h-5 w-5" />
                        <span>Admin</span>
                      </Link>
                    </li>
                  )}
                  
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
                  
                  <li className="pt-4 border-t">
                    <button 
                      onClick={handleLogout}
                      className="text-red-600 hover:text-red-800 flex items-center"
                    >
                      <LogOut className="mr-2 h-5 w-5" />
                      <span>Deconectare</span>
                    </button>
                  </li>
                </ul>
              </>
            ) : (
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">Autentifică-te pentru a accesa cursurile</p>
                <Button 
                  asChild 
                  className="w-full bg-course-blue hover:bg-course-blue/90 mb-3"
                  onClick={closeMenu}
                >
                  <Link to="/login">Autentificare</Link>
                </Button>
              </div>
            )}
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
