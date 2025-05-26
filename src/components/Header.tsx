
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut, Settings } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, profile, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const getInitials = (username: string) => {
    return username.substring(0, 2).toUpperCase();
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://techminds-academy.ro/assets/images/logo-techminds-sigla.png" 
              alt="TechMinds Academy" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-gray-900 hidden sm:block">
              TechMinds Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-course-blue transition-colors"
            >
              Acasă
            </Link>
            <Link 
              to="/courses" 
              className="text-gray-700 hover:text-course-blue transition-colors"
            >
              Cursuri
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-course-blue transition-colors"
            >
              Despre noi
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-course-blue transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {isAuthenticated && profile ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-course-blue text-white">
                        {getInitials(profile.username)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{profile.username}</p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        {profile.email}
                      </p>
                      {profile.role === 'admin' && (
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                          Administrator
                        </span>
                      )}
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  {isAdmin && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link to="/admin/dashboard" className="cursor-pointer">
                          <Settings className="mr-2 h-4 w-4" />
                          Dashboard Admin
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/admin/users" className="cursor-pointer">
                          <User className="mr-2 h-4 w-4" />
                          Gestionare Utilizatori
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    Deconectare
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild className="bg-course-blue hover:bg-course-blue/90">
                <Link to="/auth">Autentificare</Link>
              </Button>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-course-blue transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Acasă
              </Link>
              <Link 
                to="/courses" 
                className="text-gray-700 hover:text-course-blue transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Cursuri
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-course-blue transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Despre noi
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-course-blue transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
