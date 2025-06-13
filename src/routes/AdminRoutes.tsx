
import React from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from '@/components/ProtectedRoute';
import Dashboard from '@/pages/admin/Dashboard';
import UserManagement from '@/pages/admin/UserManagement';
import ProjectStructure from '@/pages/admin/ProjectStructure';
import CourseManagement from '@/pages/admin/CourseManagement';

export const AdminRoutes = () => (
  <>
    <Route 
      path="/admin/dashboard" 
      element={
        <ProtectedRoute requiredRole="admin">
          <Dashboard />
        </ProtectedRoute>
      } 
    />
    <Route 
      path="/admin/users" 
      element={
        <ProtectedRoute requiredRole="admin">
          <UserManagement />
        </ProtectedRoute>
      } 
    />
    <Route 
      path="/admin/courses" 
      element={
        <ProtectedRoute requiredRole="admin">
          <CourseManagement />
        </ProtectedRoute>
      } 
    />
    <Route 
      path="/admin/structure" 
      element={
        <ProtectedRoute requiredRole="admin">
          <ProjectStructure />
        </ProtectedRoute>
      } 
    />
  </>
);
