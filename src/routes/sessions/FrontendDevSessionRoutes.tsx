
import React from 'react';
import { Route } from 'react-router-dom';
import CourseAccessGuard from '@/components/CourseAccessGuard';

// Frontend Development sessions
import Session1FrontendDev from '@/pages/frontenddev/Session1';
import Session2FrontendDev from '@/pages/frontenddev/Session2';
import Session3FrontendDev from '@/pages/frontenddev/Session3';
import Session4FrontendDev from '@/pages/frontenddev/Session4';
import Session5FrontendDev from '@/pages/frontenddev/Session5';
import Session6FrontendDev from '@/pages/frontenddev/Session6';
import Session7FrontendDev from '@/pages/frontenddev/Session7';
import Session8FrontendDev from '@/pages/frontenddev/Session8';
import Session9FrontendDev from '@/pages/frontenddev/Session9';
import Session10FrontendDev from '@/pages/frontenddev/Session10';
import Session11FrontendDev from '@/pages/frontenddev/Session11';
import Session12FrontendDev from '@/pages/frontenddev/Session12';
import Session13FrontendDev from '@/pages/frontenddev/Session13';
import Session14FrontendDev from '@/pages/frontenddev/Session14';

export const FrontendDevSessionRoutes = () => (
  <>
    <Route 
      path="/frontenddev/session1" 
      element={
        <CourseAccessGuard courseSlug="frontenddev">
          <Session1FrontendDev />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/frontenddev/session2" 
      element={
        <CourseAccessGuard courseSlug="frontenddev">
          <Session2FrontendDev />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/frontenddev/session3" 
      element={
        <CourseAccessGuard courseSlug="frontenddev">
          <Session3FrontendDev />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/frontenddev/session4" 
      element={
        <CourseAccessGuard courseSlug="frontenddev">
          <Session4FrontendDev />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/frontenddev/session5" 
      element={
        <CourseAccessGuard courseSlug="frontenddev">
          <Session5FrontendDev />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/frontenddev/session6" 
      element={
        <CourseAccessGuard courseSlug="frontenddev">
          <Session6FrontendDev />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/frontenddev/session7" 
      element={
        <CourseAccessGuard courseSlug="frontenddev">
          <Session7FrontendDev />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/frontenddev/session8" 
      element={
        <CourseAccessGuard courseSlug="frontenddev">
          <Session8FrontendDev />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/frontenddev/session9" 
      element={
        <CourseAccessGuard courseSlug="frontenddev">
          <Session9FrontendDev />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/frontenddev/session10" 
      element={
        <CourseAccessGuard courseSlug="frontenddev">
          <Session10FrontendDev />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/frontenddev/session11" 
      element={
        <CourseAccessGuard courseSlug="frontenddev">
          <Session11FrontendDev />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/frontenddev/session12" 
      element={
        <CourseAccessGuard courseSlug="frontenddev">
          <Session12FrontendDev />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/frontenddev/session13" 
      element={
        <CourseAccessGuard courseSlug="frontenddev">
          <Session13FrontendDev />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/frontenddev/session14" 
      element={
        <CourseAccessGuard courseSlug="frontenddev">
          <Session14FrontendDev />
        </CourseAccessGuard>
      } 
    />
  </>
);
