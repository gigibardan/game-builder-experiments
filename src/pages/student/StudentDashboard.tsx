
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/hooks/useAuth';
import { useUserManagement } from '@/hooks/useUserManagement';
import { Book, Clock, Award, TrendingUp } from 'lucide-react';

const StudentDashboard: React.FC = () => {
  const { profile } = useAuth();
  const { courses, sessions, userAccess, getUserAccess } = useUserManagement();
  
  const myAccess = getUserAccess(profile?.id || '');
  const myCourses = courses.filter(course => 
    myAccess.some(access => access.courseId === course.id)
  );
  
  const myTotalSessions = myAccess.reduce((total, access) => {
    return total + access.sessions.length;
  }, 0);

  const availableSessions = sessions.filter(session =>
    myAccess.some(access => 
      access.courseId === session.course_id && access.sessions.includes(session.id)
    )
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard Personal</h1>
            <p className="text-gray-500">Bine ai venit înapoi, {profile?.username}! Continuă-ți parcursul de învățare</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-blue-700 flex items-center">
                  <Book className="mr-2 h-5 w-5" />
                  Cursuri
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{myCourses.length}</div>
                <p className="text-gray-600">Cursuri înscris</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-green-700 flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Sesiuni
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{myTotalSessions}</div>
                <p className="text-gray-600">Sesiuni disponibile</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-purple-700 flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Progres
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{Math.round((myTotalSessions / Math.max(sessions.length, 1)) * 100)}%</div>
                <p className="text-gray-600">Din total platformă</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-amber-700 flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Nivel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {myCourses.length === 0 ? 'Începător' : 
                   myCourses.length <= 2 ? 'Novice' : 
                   myCourses.length <= 5 ? 'Intermediar' : 'Avansat'}
                </div>
                <p className="text-gray-600">Experiență</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="mr-2 h-5 w-5" />
                  Cursurile Mele
                </CardTitle>
              </CardHeader>
              <CardContent>
                {myCourses.length > 0 ? (
                  <div className="space-y-4">
                    {myCourses.map((course) => {
                      const courseSessions = myAccess.find(access => access.courseId === course.id)?.sessions.length || 0;
                      return (
                        <div key={course.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h3 className="font-semibold">{course.name}</h3>
                            <p className="text-sm text-gray-600">{courseSessions} sesiuni disponibile</p>
                          </div>
                          <Button asChild size="sm">
                            <Link to={`/courses/${course.slug}`}>
                              Continuă
                            </Link>
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">Nu ești înscris la niciun curs încă.</p>
                    <Button asChild>
                      <Link to="/courses">
                        Explorează Cursurile
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Sesiuni Recente
                </CardTitle>
              </CardHeader>
              <CardContent>
                {availableSessions.length > 0 ? (
                  <div className="space-y-4">
                    {availableSessions.slice(0, 5).map((session) => {
                      const course = courses.find(c => c.id === session.course_id);
                      return (
                        <div key={session.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-medium text-sm">{session.name}</h4>
                            <p className="text-xs text-gray-500">{course?.name}</p>
                          </div>
                          <Button asChild size="sm" variant="outline">
                            <Link to={`/${course?.slug}/${session.slug}`}>
                              Începe
                            </Link>
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">Nu ai sesiuni disponibile.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudentDashboard;
