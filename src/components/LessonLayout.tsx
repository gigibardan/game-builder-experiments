
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, ChevronRight, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface LessonSidebarItem {
  id: string;
  title: string;
  isActive?: boolean;
}

export interface LessonResource {
  title: string;
  url: string;
}

export interface LessonSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface LessonProps {
  courseId: string;
  sessionId: string;
  title: string;
  subtitle: string;
  heroColor: string;
  previousLesson?: {
    title: string;
    path: string;
  };
  nextLesson?: {
    title: string;
    path: string;
  };
  sidebarItems: LessonSidebarItem[];
  resources: LessonResource[];
  children?: React.ReactNode;
  sections?: LessonSection[];
}

const LessonLayout: React.FC<LessonProps> = ({
  courseId,
  sessionId,
  title,
  subtitle,
  heroColor,
  previousLesson,
  nextLesson,
  sidebarItems,
  resources,
  children,
  sections
}) => {
  const location = useLocation();

  useEffect(() => {
    // Handle anchor scrolling when URL contains hash
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Extract the main color from heroColor for the button
  const extractMainColor = () => {
    if (heroColor.includes('from-')) {
      const colorMatch = heroColor.match(/from-([a-z]+-[0-9]+)/);
      return colorMatch ? colorMatch[1] : 'course-purple';
    } else if (heroColor.includes('bg-')) {
      const colorMatch = heroColor.match(/bg-([a-z]+-[0-9]+)/);
      return colorMatch ? colorMatch[1] : 'course-purple';
    }
    return 'course-purple';
  };

  const mainColor = extractMainColor();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ReadingProgressBar />
      
      {/* Hero Section with Dynamic Color */}
      <section className={`${heroColor} text-white py-10 md:py-12 px-2 sm:px-4 md:px-0`}>
        <div className="container mx-auto px-0 sm:px-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-2">
                <span className="bg-white text-opacity-90 text-course-purple font-bold rounded-full h-10 w-10 flex items-center justify-center mr-3 shadow-lg">
                  {sessionId}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
              </div>
              <p className="text-white/90 text-lg max-w-2xl mt-2">
                {subtitle}
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button 
                asChild 
                variant="outline" 
                className={`border-white text-${mainColor} hover:bg-${mainColor} hover:text-white hover:border-white shadow-md`}
              >
                <Link to={`/courses/${courseId}`} className="flex items-center">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  <span>Înapoi la curs</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 px-2 sm:px-4 md:px-0 bg-gray-50">
        <div className="container mx-auto px-0 sm:px-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-3/4">
              <Card className="mb-8 rounded-xl shadow-lg overflow-hidden border-0">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-4 px-6 border-b border-gray-100">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-gray-500 mr-2" />
                    <h2 className="text-xl font-semibold text-gray-800">Conținutul lecției</h2>
                  </div>
                </div>
                
                <CardContent className="p-3 sm:p-6 md:p-8">
                  {sections ? (
                    <div className="space-y-12">
                      {sections.map((section, index) => (
                        <div 
                          key={section.id} 
                          id={section.id}
                          className="scroll-mt-24"
                        >
                          <div className="flex items-center mb-4">
                            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 w-10 h-10 rounded-full flex items-center justify-center shadow-sm mr-3">
                              <span className="text-indigo-700 font-bold">{index + 1}</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                          </div>
                          <div className="pl-0 md:pl-14 prose prose-headings:text-indigo-700 prose-a:text-blue-600 max-w-none">
                            {section.content}
                          </div>
                          {index < sections.length - 1 && (
                            <div className="w-full border-b border-gray-100 mt-12"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    children
                  )}

                  <div className="flex justify-between mt-12 pt-6 border-t border-gray-100">
                    {previousLesson ? (
                      <Button asChild variant="outline" className="shadow-sm hover:shadow transition-all duration-200">
                        <Link to={previousLesson.path} className="flex items-center">
                          <ArrowLeft className="mr-2 h-5 w-5" />
                          <span>{previousLesson.title}</span>
                        </Link>
                      </Button>
                    ) : (
                      <div></div>
                    )}
                    
                    {nextLesson && (
                      <Button asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-200">
                        <Link to={nextLesson.path} className="flex items-center">
                          <span>{nextLesson.title}</span>
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-6">
                <Card className="overflow-hidden border-0 shadow-lg rounded-xl bg-white">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-4 px-5 text-white">
                    <h3 className="text-lg font-bold">Cuprins</h3>
                  </div>
                  <CardContent className="p-4">
                    <ul className="space-y-3">
                      {sidebarItems.map((item, index) => (
                        <li key={item.id} className="group">
                          <a 
                            href={`#${item.id}`} 
                            className={cn(
                              "flex items-center py-2 px-3 rounded-lg transition-all duration-200",
                              item.isActive 
                                ? "bg-indigo-50 text-indigo-700 font-medium" 
                                : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                            )}
                          >
                            <div className={cn(
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-full mr-2 transition-colors",
                              item.isActive 
                                ? "bg-indigo-100 text-indigo-600" 
                                : "bg-gray-100 text-gray-500 group-hover:bg-indigo-100 group-hover:text-indigo-600"
                            )}>
                              <span className="text-xs font-medium">{index + 1}</span>
                            </div>
                            <span className="text-sm">{item.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {resources.length > 0 && (
                  <Card className="overflow-hidden border-0 shadow-lg rounded-xl bg-white">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-4 px-5 text-white">
                      <h3 className="text-lg font-bold">Resurse utile</h3>
                    </div>
                    <CardContent className="p-4">
                      <ul className="space-y-2">
                        {resources.map((resource, index) => (
                          <li key={index} className="group">
                            <a 
                              href={resource.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="flex items-center py-2 px-3 text-gray-700 hover:text-indigo-600 rounded-lg hover:bg-gray-50 transition-all duration-200"
                            >
                              <ChevronRight className="h-4 w-4 mr-2 text-indigo-400 group-hover:text-indigo-600" />
                              <span className="text-sm">{resource.title}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LessonLayout;
