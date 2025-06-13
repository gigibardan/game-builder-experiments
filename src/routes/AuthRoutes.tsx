
import React from 'react';
import { Route } from 'react-router-dom';
import AuthPage from '@/pages/auth/AuthPage';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import Unauthorized from '@/pages/auth/Unauthorized';

export const AuthRoutes = () => (
  <>
    <Route path="/auth" element={<AuthPage />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/reset-password" element={<ResetPassword />} />
    <Route path="/unauthorized" element={<Unauthorized />} />
  </>
);
