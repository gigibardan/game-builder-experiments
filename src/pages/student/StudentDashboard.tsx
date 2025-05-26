
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/hooks/useAuth';
import { useUsers } from '@/hooks/useUsers';
import { useCourses } from '@/hooks/useCourses';
import { useUserAccess } from '@/hooks/useUserAccess';
import { Book, Clock, Award, TrendingUp, Play, CheckCircle, AlertCircle } from 'lucide-react';

const StudentDashboard: React.FC = () => {
  const { profile } = useAuth();
  const { users } = useUsers();
  const { courses, sessions } = useCourses();
  const { getUserAccess } = useUserAccess();
  
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

  // Calculate some additional stats
  const totalPossibleSessions = sessions.length;
  const accessPercentage = totalPossibleSessions > 0 ? Math.round((myTotalSessions / totalPossibleSessions) * 100) : 0;
  
  const getExperienceLevel = () => {
    if (myCourses.length === 0) return { level: 'Începător', color: 'text-gray-600' };
    if (myCourses.length <= 2) return { level: 'Novice', color: 'text-blue-600' };
    if (myCourses.length <= 4) return { level: 'Intermediar', color: 'text-green-600' };
    return { level: 'Avansat', color: 'text-purple-600' };
  };

  const experienceLevel = getExperienceLevel();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard Personal</h1>
            <p className="text-gray-500">
              Bine ai venit înapoi, {profile?.username}! 
              {myCourses.length > 0 ? ' Continuă-ți parcursul de învățare.' : ' Începe-ți aventura în programmation!'}
            </p>
          </div>

          {/* Alertă dacă utilizatorul nu are acces la cursuri */}
          {myCourses.length === 0 && (
            <Card className="mb-6 border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Nu ai acces la niciun curs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-600 mb-3">
                  Pentru a începe să înveți, contactează administratorul pentru a-ți acorda acces la cursuri.
                </p>
                <Button asChild size="sm" className="bg-orange-600 hover:bg-orange-700">
                  <Link to="/contact">
                    Contactează-ne
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-blue-700 flex items-center">
                  <Book className="mr-2 h-5 w-5" />
                  Cursuri Disponibile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{myCourses.length}</div>
                <p className="text-gray-600">Din {courses.length} total</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-green-700 flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Sesiuni de Învățare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{myTotalSessions}</div>
                <p className="text-gray-600">Lecții disponibile</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-purple-700 flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Acces Platform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{accessPercentage}%</div>
                <p className="text-gray-600">Din conținutul total</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-amber-700 flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Nivel Experiență
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${experienceLevel.color}`}>
                  {experienceLevel.level}
                </div>
                <p className="text-gray-600">Bazat pe cursuri</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Cursurile mele */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Book className="mr-2 h-5 w-5" />
                    Cursurile Mele ({myCourses.length})
                  </span>
                  {myCourses.length > 0 && (
                    <Button asChild size="sm" variant="outline">
                      <Link to="/courses">
                        Vezi toate
                      </Link>
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {myCourses.length > 0 ? (
                  <div className="space-y-4">
                    {myCourses.map((course) => {
                      const courseSessions = myAccess.find(access => access.courseId === course.id)?.sessions.length || 0;
                      const totalCourseSessions = sessions.filter(s => s.course_id === course.id).length;
                      const courseProgress = totalCourseSessions > 0 ? Math.round((courseSessions / totalCourseSessions) * 100) : 0;
                      
                      return (
                        <div key={course.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{course.name}</h3>
                            <div className="flex items-center gap-4 mt-1">
                              <p className="text-sm text-gray-600">
                                {courseSessions} din {totalCourseSessions} sesiuni
                              </p>
                              <span className="text-sm text-blue-600 font-medium">
                                {courseProgress}% acces
                              </span>
                            </div>
                            {course.description && (
                              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                {course.description}
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col gap-2 ml-4">
                            <Button asChild size="sm">
                              <Link to={`/courses/${course.slug}`}>
                                <Play className="mr-1 h-3 w-3" />
                                Învață
                              </Link>
                            </Button>
                            {courseProgress === 100 && (
                              <span className="flex items-center text-green-600 text-xs">
                                <CheckCircle className="mr-1 h-3 w-3" />
                                Complet
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <AlertCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
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
            
            {/* Sesiuni recente / disponibile */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Sesiuni Disponibile
                </CardTitle>
              </CardHeader>
              <CardContent>
                {availableSessions.length > 0 ? (
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {availableSessions.slice(0, 8).map((session) => {
                      const course = courses.find(c => c.id === session.course_id);
                      return (
                        <div key={session.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-l-blue-500">
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{session.name}</h4>
                            <p className="text-xs text-gray-500">{course?.name}</p>
                            {session.description && (
                              <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                                {session.description}
                              </p>
                            )}
                          </div>
                          <Button asChild size="sm" variant="outline" className="ml-3">
                            <Link to={`/${course?.slug}/${session.slug}`}>
                              <Play className="h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      );
                    })}
                    {availableSessions.length > 8 && (
                      <div className="text-center pt-2">
                        <p className="text-sm text-gray-500">
                          ... și încă {availableSessions.length - 8} sesiuni
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Clock className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-500">Nu ai sesiuni disponibile.</p>
                    {myCourses.length === 0 && (
                      <p className="text-sm text-gray-400 mt-2">
                        Contactează administratorul pentru acces la cursuri.
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Informații suplimentare */}
          {myCourses.length > 0 && (
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Statistici Detaliate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{myAccess.length}</div>
                      <p className="text-sm text-blue-700">Cursuri cu acces</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{myTotalSessions}</div>
                      <p className="text-sm text-green-700">Total sesiuni disponibile</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{accessPercentage}%</div>
                      <p className="text-sm text-purple-700">Acoperire platformă</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudentDashboard;
