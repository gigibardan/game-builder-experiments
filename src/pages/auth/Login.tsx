
import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from "sonner";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // If user is already logged in, redirect to homepage
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await login(username, password);
      
      if (success) {
        toast.success("Autentificare reușită!");
        navigate('/');
      } else {
        toast.error("Nume de utilizator sau parolă incorecte!");
      }
    } catch (error) {
      toast.error("A apărut o eroare la autentificare!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-course-blue to-course-purple flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <div className="text-center mb-6">
            <img 
              src="https://techminds-academy.ro/assets/images/logo-techminds-sigla.png" 
              alt="TechMinds Academy Logo" 
              className="h-16 mx-auto mb-4" 
            />
            <h1 className="text-2xl font-bold text-gray-800">Autentificare</h1>
            <p className="text-gray-600">Accesează cursurile tale</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Nume de utilizator</Label>
              <Input
                id="username"
                type="text"
                placeholder="Introdu numele de utilizator"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Parolă</Label>
              <Input
                id="password"
                type="password"
                placeholder="Introdu parola"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-course-blue hover:bg-course-blue/90"
              disabled={isLoading}
            >
              {isLoading ? "Se procesează..." : "Autentificare"}
            </Button>
          </form>
          
          <div className="mt-6 text-sm text-center text-gray-600">
            <p>Demo conturi:</p>
            <p>Admin: username: <strong>admin</strong>, password: <strong>admin123</strong></p>
            <p>Student: username: <strong>student1</strong>, password: <strong>student123</strong></p>
          </div>
        </div>
        
        <p className="text-white text-center mt-4 text-sm">
          © {new Date().getFullYear()} TechMinds Academy. Toate drepturile rezervate.
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
