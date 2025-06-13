
import React from 'react';
import { Route } from 'react-router-dom';
import CourseAccessGuard from '@/components/CourseAccessGuard';

// Python sessions
import Session1Python from '@/pages/python/Session1';
import Session2Python from '@/pages/python/Session2';
import Session3Python from '@/pages/python/Session3';
import Session4Python from '@/pages/python/Session4';
import Session5Python from '@/pages/python/Session5';
import Session6Python from '@/pages/python/Session6';
import Session7Python from '@/pages/python/Session7';
import Session8Python from '@/pages/python/Session8';
import Session9Python from '@/pages/python/Session9';
import Session10Python from '@/pages/python/Session10';
import Session11Python from '@/pages/python/Session11';
import Session12Python from '@/pages/python/Session12';
import Session13Python from '@/pages/python/Session13';
import Session14Python from '@/pages/python/Session14';

export const PythonSessionRoutes = () => (
  <>
    <Route 
      path="/python/session1" 
      element={
        <CourseAccessGuard courseSlug="python">
          <Session1Python />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/python/session2" 
      element={
        <CourseAccessGuard courseSlug="python">
          <Session2Python />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/python/session3" 
      element={
        <CourseAccessGuard courseSlug="python">
          <Session3Python />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/python/session4" 
      element={
        <CourseAccessGuard courseSlug="python">
          <Session4Python />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/python/session5" 
      element={
        <CourseAccessGuard courseSlug="python">
          <Session5Python />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/python/session6" 
      element={
        <CourseAccessGuard courseSlug="python">
          <Session6Python />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/python/session7" 
      element={
        <CourseAccessGuard courseSlug="python">
          <Session7Python />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/python/session8" 
      element={
        <CourseAccessGuard courseSlug="python">
          <Session8Python />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/python/session9" 
      element={
        <CourseAccessGuard courseSlug="python">
          <Session9Python />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/python/session10" 
      element={
        <CourseAccessGuard courseSlug="python">
          <Session10Python />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/python/session11" 
      element={
        <CourseAccessGuard courseSlug="python">
          <Session11Python />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/python/session12" 
      element={
        <CourseAccessGuard courseSlug="python">
          <Session12Python />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/python/session13" 
      element={
        <CourseAccessGuard courseSlug="python">
          <Session13Python />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/python/session14" 
      element={
        <CourseAccessGuard courseSlug="python">
          <Session14Python />
        </CourseAccessGuard>
      } 
    />
  </>
);
