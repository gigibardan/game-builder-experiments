
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Mesajul tău a fost trimis cu succes!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-course-blue to-course-purple py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Contactează-ne</h1>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Suntem aici să răspundem la întrebările tale și să te ajutăm să găsești cursul potrivit
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-6">Informații de contact</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-course-blue/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-course-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600">contact@techminds-academy.ro</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-course-blue/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-course-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Telefon</h3>
                      <p className="text-gray-600">+40 123 456 789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-course-blue/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-course-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Adresă</h3>
                      <p className="text-gray-600">
                        Str. Exemplu, Nr. 123<br />
                        București, România
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-lg mb-4">Program</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Luni - Vineri: 9:00 - 18:00</p>
                    <p>Sâmbătă: 10:00 - 14:00</p>
                    <p>Duminică: Închis</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-6">Trimite-ne un mesaj</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nume complet</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Numele tău"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="adresa@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subiect</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subiectul mesajului"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mesaj</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Scrie mesajul tău aici..."
                      rows={5}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Se trimite..." : "Trimite mesajul"}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Găsește-ne pe hartă</h2>
            
            <div className="relative h-96 rounded-lg overflow-hidden shadow-md">
              {/* Placeholder for a map - in a real app, you would integrate Google Maps or another mapping service */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Map placeholder - Google Maps would be integrated here</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
