
import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from "sonner";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // If user is already logged in, redirect to homepage
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        toast.error("Parolele nu coincid!");
        setIsLoading(false);
        return;
      }

      // In a real app, this would be an API call
      toast.info("Înregistrare în curs de dezvoltare. Funcția nu este încă implementată complet.");
      toast.success("Cont creat cu succes! Acum te poți autentifica.");
      navigate('/login');
    } catch (error) {
      toast.error("A apărut o eroare la înregistrare!");
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
            <h1 className="text-2xl font-bold text-gray-800">Înregistrare</h1>
            <p className="text-gray-600">Creează-ți un cont pentru a accesa cursurile</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Nume de utilizator</Label>
              <Input
                id="username"
                type="text"
                placeholder="Alege un nume de utilizator"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Adresa ta de email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Parolă</Label>
              <Input
                id="password"
                type="password"
                placeholder="Creează o parolă"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmă parola</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Introdu parola din nou"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-course-blue hover:bg-course-blue/90"
              disabled={isLoading}
            >
              {isLoading ? "Se procesează..." : "Înregistrare"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Ai deja un cont? <a href="/login" className="text-course-blue hover:underline">Autentifică-te</a>
            </p>
          </div>
        </div>
        
        <p className="text-white text-center mt-4 text-sm">
          © {new Date().getFullYear()} TechMinds Academy. Toate drepturile rezervate.
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
