
import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { toast } from "sonner";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tokenValid, setTokenValid] = useState<boolean | null>(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const token = searchParams.get('token');

  useEffect(() => {
    // In a real app, verify the token on component mount
    const verifyToken = async () => {
      try {
        // Simulate token verification
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (token) {
          setTokenValid(true);
        } else {
          setTokenValid(false);
          toast.error("Token-ul de resetare lipsește sau este invalid!");
        }
      } catch (error) {
        setTokenValid(false);
        toast.error("Eroare la verificarea token-ului de resetare!");
      }
    };

    verifyToken();
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Parolele nu coincid!");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Parola a fost schimbată cu succes!");
      navigate('/login');
    } catch (error) {
      toast.error("A apărut o eroare la resetarea parolei!");
    } finally {
      setIsLoading(false);
    }
  };

  if (tokenValid === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-course-blue to-course-purple flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-course-blue"></div>
          </div>
          <p className="text-center mt-4 text-gray-600">Verificăm link-ul de resetare...</p>
        </div>
      </div>
    );
  }

  if (tokenValid === false) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-course-blue to-course-purple flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Link invalid</h1>
          <p className="text-gray-600 mb-6">
            Link-ul de resetare a parolei este invalid sau a expirat.
          </p>
          <Button asChild className="w-full">
            <Link to="/forgot-password">
              Solicită un nou link de resetare
            </Link>
          </Button>
        </div>
      </div>
    );
  }

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
            <h1 className="text-2xl font-bold text-gray-800">Resetează parola</h1>
            <p className="text-gray-600">Creează o nouă parolă pentru contul tău</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Parolă nouă</Label>
              <Input
                id="password"
                type="password"
                placeholder="Introdu noua parolă"
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
                placeholder="Introdu din nou parola"
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
              {isLoading ? "Se procesează..." : "Resetează parola"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              <Link to="/login" className="text-course-blue hover:underline">
                Înapoi la pagina de autentificare
              </Link>
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

export default ResetPassword;
