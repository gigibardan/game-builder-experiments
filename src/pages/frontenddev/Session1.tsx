
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { motion } from 'framer-motion';

const Session1 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ReadingProgressBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-cyan-400 py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Lecția 1: Introducere în Frontend Development
              </h1>
              <p className="text-xl mb-0 max-w-2xl mx-auto">
                Primii pași în dezvoltarea web modernă
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-cyan-700">Ce este Frontend Development?</h2>
              <p className="mb-6 text-gray-700">
                Frontend Development reprezintă partea de dezvoltare web care se ocupă cu ceea ce utilizatorii 
                văd și interacționează într-un site sau aplicație. Aceasta include design-ul, layout-ul, 
                navigarea și toate elementele interactive pe care utilizatorii le folosesc direct.
              </p>

              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png" 
                  alt="Frontend Development" 
                  className="w-full"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6 text-cyan-700">De ce să înveți Frontend Development?</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Cerere mare pe piața muncii pentru dezvoltatori frontend</li>
                <li>Combinație perfectă de creativitate și logică</li>
                <li>Vezi imediat rezultatele muncii tale</li>
                <li>Posibilitatea de a lucra ca freelancer sau remote</li>
                <li>Peisaj tehnologic în continuă evoluție și învățare</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-cyan-700">Ce vom învăța în acest curs</h2>
              <p className="mb-6 text-gray-700">
                În acest curs, vom explora fundamentele dezvoltării web frontend, începând cu HTML, CSS și JavaScript. 
                Vom avansa spre tehnologii moderne precum React, vom învăța despre design responsive și 
                vom crea proiecte practice pentru a aplica cunoștințele dobândite.
              </p>

              <div className="bg-cyan-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-cyan-700">Exercițiu pentru acasă</h3>
                <p className="text-gray-700 mb-4">
                  Instalează un editor de cod (recomandăm Visual Studio Code) și creează 
                  prima ta pagină web simplă folosind HTML. Adaugă un titlu, un paragraf 
                  și o imagine pentru a începe să te familiarizezi cu structura de bază.
                </p>
              </div>

              <div className="flex justify-between mt-12">
                <Button asChild variant="outline">
                  <Link to="/frontenddev" className="flex items-center">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Înapoi la curs</span>
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/frontenddev" className="flex items-center">
                    <span>Lecția următoare</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Session1;
