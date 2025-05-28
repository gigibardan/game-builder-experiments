
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
  const [hasAccess, setHasAccess] = useState(false);
  const [accessChecked, setAccessChecked] = useState(false);

  useEffect(() => {
    console.log('CourseAccessGuard: Auth state', { 
      isAuthenticated, 
      isAdmin, 
      loading, 
      courseSlug, 
      sessionSlug,
      profile 
    });
    
    // Don't check access until auth is fully loaded
    if (loading) {
      console.log('Auth still loading, waiting...');
      setAccessChecked(false);
      return;
    }

    console.log('Auth loaded, checking access...');
    
    if (!isAuthenticated) {
      console.log('User not authenticated');
      setHasAccess(false);
      setAccessChecked(true);
      return;
    }

    // Admins have access to everything
    if (isAdmin) {
      console.log('Admin access granted');
      setHasAccess(true);
      setAccessChecked(true);
      return;
    }

    // Check access for regular users
    const accessGranted = sessionSlug 
      ? hasAccessToSession(courseSlug, sessionSlug)
      : hasAccessToCourse(courseSlug);
    
    console.log('Access check result:', accessGranted);
    setHasAccess(accessGranted);
    setAccessChecked(true);
  }, [isAuthenticated, isAdmin, loading, courseSlug, sessionSlug, hasAccessToCourse, hasAccessToSession, profile]);

  // Show loading skeleton while authentication state loads or checking access
  if (loading || !accessChecked) {
    console.log('Showing loading state', { loading, accessChecked });
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
