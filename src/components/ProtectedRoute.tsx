
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  courseId?: string;
  sessionId?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireAdmin = false,
  courseId,
  sessionId,
}) => {
  const { isAuthenticated, isAdmin, hasAccessToCourse, hasAccessToSession, loading } = useAuth();
  const location = useLocation();

  // Show loading state if auth is still initializing
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-course-blue"></div>
      </div>
    );
  }

  // Check if user is authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if route requires admin privileges
  if (requireAdmin && !isAdmin) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Check if route requires course access
  if (courseId && !hasAccessToCourse(courseId)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Check if route requires session access
  if (courseId && sessionId && !hasAccessToSession(courseId, sessionId)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
