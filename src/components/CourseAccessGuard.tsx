
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

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
  const { isAuthenticated, hasAccessToCourse, hasAccessToSession, loading, isAdmin } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-course-blue"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  // Admins have access to everything
  if (isAdmin) {
    return <>{children}</>;
  }

  // Check access for regular users
  const hasAccess = sessionSlug 
    ? hasAccessToSession(courseSlug, sessionSlug)
    : hasAccessToCourse(courseSlug);

  if (!hasAccess) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default CourseAccessGuard;
