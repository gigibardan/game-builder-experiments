import React from 'react';
import { Rocket, Users, Clock, Award } from 'lucide-react';

const GDevelopOverview = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Despre cursul GDevelop</h2>
          <p className="text-lg text-gray-600 mb-4">
            GDevelop este un motor de jocuri open-source și gratuit care permite crearea jocurilor 2D fără 
            programare tradițională. Folosește un sistem visual de evenimente pentru logica jocului.
          </p>
          <p className="text-lg text-gray-600">
            Cursul nostru te va ghida pas cu pas prin procesul de dezvoltare a jocurilor, de la concepte 
            de bază până la crearea unui joc complet funcțional.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-1">10-16 ani</h3>
            <p className="text-sm text-gray-600">Vârsta recomandată</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-1">12-14 sesiuni</h3>
            <p className="text-sm text-gray-600">Durată completă</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-1">Certificat</h3>
            <p className="text-sm text-gray-600">La finalizare</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
              <Rocket className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-1">Proiecte</h3>
            <p className="text-sm text-gray-600">Multiple jocuri</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GDevelopOverview;