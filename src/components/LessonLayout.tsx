
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  children: React.ReactNode;
  tabs?: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[];
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
  tabs
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ReadingProgressBar />
      
      <main className="flex-grow">
        {/* Hero Section with Dynamic Color */}
        <section className={`${heroColor} text-white py-8`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center mb-2">
                    <span className="bg-white text-opacity-90 text-course-purple rounded-full h-8 w-8 flex items-center justify-center mr-2">
                      {sessionId}
                    </span>
                    <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
                  </div>
                  <p className="text-white/90 max-w-2xl">
                    {subtitle}
                  </p>
                </motion.div>
              </div>
              <div className="mt-4 md:mt-0">
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 hover:text-white">
                  <Link to={`/courses/${courseId}`} className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <span>Înapoi la curriculum</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-3/4">
                <Card className="mb-8">
                  <CardContent className="p-6">
                    {tabs ? (
                      <Tabs defaultValue={tabs[0].id} className="mb-8">
                        <TabsList className="mb-4">
                          {tabs.map((tab) => (
                            <TabsTrigger key={tab.id} value={tab.id}>{tab.label}</TabsTrigger>
                          ))}
                        </TabsList>
                        {tabs.map((tab) => (
                          <TabsContent key={tab.id} value={tab.id}>
                            {tab.content}
                          </TabsContent>
                        ))}
                      </Tabs>
                    ) : (
                      children
                    )}

                    <div className="flex justify-between mt-12">
                      {previousLesson ? (
                        <Button asChild className="bg-gray-500 hover:bg-gray-600">
                          <Link to={previousLesson.path}>
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            <span>{previousLesson.title}</span>
                          </Link>
                        </Button>
                      ) : (
                        <div></div>
                      )}
                      
                      {nextLesson && (
                        <Button asChild className="bg-course-purple hover:bg-course-blue">
                          <Link to={nextLesson.path}>
                            <span>{nextLesson.title}</span>
                            <ChevronRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/4">
                <div className="sticky top-24">
                  <Card className="mb-6">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-2">Conținut</h3>
                      <ul className="space-y-2">
                        {sidebarItems.map((item) => (
                          <li key={item.id}>
                            <a 
                              href={`#${item.id}`} 
                              className={cn(
                                "flex items-center",
                                item.isActive ? "text-course-purple" : "text-gray-700 hover:text-course-blue"
                              )}
                            >
                              <div className={cn(
                                "h-2 w-2 rounded-full mr-2",
                                item.isActive ? "bg-course-purple" : "bg-gray-300"
                              )}></div>
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  {resources.length > 0 && (
                    <Card>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold mb-2">Resurse</h3>
                        <ul className="space-y-2">
                          {resources.map((resource, index) => (
                            <li key={index}>
                              <a 
                                href={resource.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-course-blue hover:underline flex items-center"
                              >
                                <ChevronRight className="h-4 w-4 mr-1" />
                                {resource.title}
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
      </main>
      
      <Footer />
    </div>
  );
};

export default LessonLayout;
