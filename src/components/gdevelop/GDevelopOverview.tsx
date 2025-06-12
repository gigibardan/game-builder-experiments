
import React from 'react';
import { Rocket, Users, Clock, Award } from 'lucide-react';

const GDevelopOverview = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Despre cursul GDevelop</h2>
            <p className="text-lg text-gray-600 mb-6">
              GDevelop este un motor de jocuri open-source și gratuit care permite crearea jocurilor 2D fără 
              programare tradițională. Folosește un sistem visual de evenimente pentru logica jocului.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Cursul nostru te va ghida pas cu pas prin procesul de dezvoltare a jocurilor, de la concepte 
              de bază până la crearea unui joc complet funcțional.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">10-16 ani</h3>
                <p className="text-sm text-gray-600">Vârsta recomandată</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">14 sesiuni</h3>
                <p className="text-sm text-gray-600">Durată completă</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Certificat</h3>
                <p className="text-sm text-gray-600">La finalizare</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Proiecte</h3>
                <p className="text-sm text-gray-600">Multiple jocuri</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <img 
              src="/public/assets/images/gdevelop/gdevelop-logo.webp" 
              alt="GDevelop Logo" 
              className="max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GDevelopOverview;
