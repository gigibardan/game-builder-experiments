
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Despre noi */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">TechMinds Academy</h3>
            <p className="mb-6">
              Ajutăm copiii să treacă de la consumatori la creatori de tehnologie prin metode de învățare interactive și proiecte practice.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Cursuri */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Cursuri Populare</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/scratch" className="text-gray-400 hover:text-white transition-colors">
                  Scratch - Laboratorul de Jocuri
                </Link>
              </li>
              <li>
                <Link to="/appinventor" className="text-gray-400 hover:text-white transition-colors">
                  App Inventor - Aplicații Mobile
                </Link>
              </li>
              <li>
                <Link to="/roblox-lua" className="text-gray-400 hover:text-white transition-colors">
                  Roblox Lua - Dezvoltare Jocuri
                </Link>
              </li>
              <li>
                <Link to="/python" className="text-gray-400 hover:text-white transition-colors">
                  Python - De la Cod la Aplicații
                </Link>
              </li>
              <li>
                <Link to="/#courses" className="text-gray-400 hover:text-white transition-colors">
                  Vezi toate cursurile
                </Link>
              </li>
            </ul>
          </div>

          {/* Linkuri Rapide */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Linkuri Rapide</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Despre Noi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Întrebări Frecvente
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Termeni și Condiții
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Politica de Confidențialitate
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 text-gray-400 flex-shrink-0" />
                <span>Strada Exemplu, Nr. 123, București, România</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 mr-3 text-gray-400 flex-shrink-0" />
                <span>+40 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 mr-3 text-gray-400 flex-shrink-0" />
                <span>contact@techminds.ro</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-10" />

        <div className="text-center">
          <p className="text-gray-500">
            © {currentYear} TechMinds Academy. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
