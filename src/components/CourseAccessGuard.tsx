
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Skeleton } from './ui/skeleton';

interface CourseAccessGuardProps {
  children: React.ReactNode;
  courseSlug: string;
  sessionSlug?: string;
}

const CourseAccessGuard: React.FC<CourseAccessGuardProps> = ({
  children,
  courseSlug,
  sessionSlug,
}) => {
  const { isAuthenticated, hasAccessToCourse, hasAccessToSession, loading, isAdmin, profile } = useAuth();
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    console.log('CourseAccessGuard: Auth state', { 
      isAuthenticated, 
      isAdmin, 
      loading, 
      courseSlug, 
      sessionSlug,
      profile 
    });
    
    // Safety timeout - daca loading-ul dureaza prea mult, forteaza verificarea
    const timeout = setTimeout(() => {
      console.log('CourseAccessGuard: Timeout reached, forcing access check');
      if (loading) {
        setIsCheckingAccess(false);
      }
    }, 10000); // 10 secunde timeout
    
    if (!loading) {
      clearTimeout(timeout);
      
      if (!isAuthenticated) {
        console.log('User not authenticated');
        setIsCheckingAccess(false);
        return;
      }

      console.log('Auth loaded, checking access...');
      
      // Admins have access to everything
      if (isAdmin) {
        console.log('Admin access granted');
        setHasAccess(true);
        setIsCheckingAccess(false);
        return;
      }

      // Check access for regular users
      const accessGranted = sessionSlug 
        ? hasAccessToSession(courseSlug, sessionSlug)
        : hasAccessToCourse(courseSlug);
      
      console.log('Access check result:', accessGranted);
      setHasAccess(accessGranted);
      setIsCheckingAccess(false);
    }

    return () => clearTimeout(timeout);
  }, [isAuthenticated, isAdmin, loading, courseSlug, sessionSlug, hasAccessToCourse, hasAccessToSession, profile]);

  // Show loading skeleton while authentication state loads or checking access
  if (loading || isCheckingAccess) {
    console.log('Showing loading state', { loading, isCheckingAccess });
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md space-y-4">
          <Skeleton className="h-12 w-12 rounded-full mx-auto bg-course-blue/20" />
          <Skeleton className="h-4 w-3/4 mx-auto bg-course-blue/20" />
          <Skeleton className="h-4 w-1/2 mx-auto bg-course-blue/20" />
        </div>
      </div>
    );
  }

  console.log('Final auth decision:', { isAuthenticated, hasAccess });

  if (!isAuthenticated) {
    console.log('User not authenticated, redirecting to auth');
    return <Navigate to="/auth" replace />;
  }

  if (!hasAccess) {
    console.log('Access denied, redirecting to unauthorized');
    return <Navigate to="/unauthorized" replace />;
  }

  console.log('Access granted, showing content');
  return <>{children}</>;
};

export default CourseAccessGuard;
