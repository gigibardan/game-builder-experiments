
import React from 'react';
import { Link } from 'react-router-dom';
import { Construction, ArrowLeft, Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LessonInDevelopmentProps {
  courseId: string;
  sessionNumber: number;
  title: string;
  courseTitle: string;
  heroColor?: string;
}

const LessonInDevelopment: React.FC<LessonInDevelopmentProps> = ({
  courseId,
  sessionNumber,
  title,
  courseTitle,
  heroColor = "bg-gradient-to-r from-gray-600 to-gray-400"
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className={`${heroColor} text-white py-16`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                  <Construction className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Lecția {sessionNumber} • {courseTitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Clock className="mr-1 h-4 w-4" />
                  90 min
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Users className="mr-1 h-4 w-4" />
                  7-14 ani
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Award className="mr-1 h-4 w-4" />
                  În dezvoltare
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8 border-2 border-dashed border-gray-300">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center text-2xl text-gray-600">
                    <Construction className="mr-3 h-6 w-6" />
                    Conținut în dezvoltare
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-gray-600 text-lg">
                    Această lecție este în curs de dezvoltare și va fi disponibilă în curând.
                  </p>
                  <p className="text-gray-500">
                    Echipa noastră lucrează pentru a vă oferi conținut educațional de calitate. 
                    Vă mulțumim pentru răbdare!
                  </p>
                  <div className="flex justify-center space-x-4 pt-6">
                    <Button asChild variant="outline">
                      <Link to={`/courses/${courseId}`}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Înapoi la curs
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link to="/courses">
                        Toate cursurile
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LessonInDevelopment;
