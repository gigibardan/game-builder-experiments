
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Unauthorized = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="w-24 h-24 bg-red-100 rounded-full mx-auto flex items-center justify-center mb-6">
          <Lock className="w-12 h-12 text-red-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-3">Acces restricționat</h1>
        
        <p className="text-gray-600 mb-8">
          Nu ai acces la această pagină. Contactează administratorul pentru a obține acces.
        </p>
        
        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link to="/">
              Înapoi la pagina principală
            </Link>
          </Button>

          {!isAuthenticated && (
            <Button asChild variant="outline" className="w-full">
              <Link to="/login">
                Autentificare
              </Link>
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Unauthorized;
