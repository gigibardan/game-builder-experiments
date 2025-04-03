
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "sonner";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Email de resetare trimis cu succes!");
      setEmailSent(true);
    } catch (error) {
      toast.error("A apărut o eroare la trimiterea email-ului!");
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
            <h1 className="text-2xl font-bold text-gray-800">Ai uitat parola?</h1>
            <p className="text-gray-600">
              {!emailSent 
                ? "Introdu adresa de email și îți vom trimite un link pentru resetarea parolei" 
                : "Verifică emailul pentru a continua procesul de resetare a parolei"
              }
            </p>
          </div>
          
          {!emailSent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
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
              
              <Button 
                type="submit" 
                className="w-full bg-course-blue hover:bg-course-blue/90"
                disabled={isLoading}
              >
                {isLoading ? "Se procesează..." : "Trimite link de resetare"}
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-green-600 mb-4">
                Un email cu link-ul de resetare a parolei a fost trimis la adresa {email}
              </p>
              <p className="text-gray-600 mb-4">
                Nu ai primit email-ul? Verifică și folderul de spam sau încearcă din nou.
              </p>
              <Button 
                onClick={() => setEmailSent(false)} 
                variant="outline"
                className="w-full"
              >
                Încearcă cu altă adresă de email
              </Button>
            </div>
          )}
          
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

export default ForgotPassword;
