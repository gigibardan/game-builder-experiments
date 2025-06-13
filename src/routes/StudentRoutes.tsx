
import React from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from '@/components/ProtectedRoute';
import StudentDashboard from '@/pages/student/StudentDashboard';

export const StudentRoutes = () => (
  <>
    <Route 
      path="/student/dashboard" 
      element={
        <ProtectedRoute requiredRole="student">
          <StudentDashboard />
        </ProtectedRoute>
      } 
    />
  </>
);
