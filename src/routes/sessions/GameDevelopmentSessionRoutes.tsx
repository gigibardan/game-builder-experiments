
import React from 'react';
import { Route } from 'react-router-dom';
import CourseAccessGuard from '@/components/CourseAccessGuard';

// GDevelop sessions
import Session1GDevelop from '@/pages/gdevelop/Session1';
import Session2GDevelop from '@/pages/gdevelop/Session2';
import Session3GDevelop from '@/pages/gdevelop/Session3';
import Session4GDevelop from '@/pages/gdevelop/Session4';
import Session5GDevelop from '@/pages/gdevelop/Session5';
import Session6GDevelop from '@/pages/gdevelop/Session6';
import Session7GDevelop from '@/pages/gdevelop/Session7';
import Session8GDevelop from '@/pages/gdevelop/Session8';
import Session9GDevelop from '@/pages/gdevelop/Session9';
import Session10GDevelop from '@/pages/gdevelop/Session10';
import Session11GDevelop from '@/pages/gdevelop/Session11';
import Session12GDevelop from '@/pages/gdevelop/Session12';
import Session13GDevelop from '@/pages/gdevelop/Session13';
import Session14GDevelop from '@/pages/gdevelop/Session14';

// Godot sessions
import Session1Godot from '@/pages/godot/Session1';
import Session2Godot from '@/pages/godot/Session2';
import Session3Godot from '@/pages/godot/Session3';
import Session4Godot from '@/pages/godot/Session4';
import Session5Godot from '@/pages/godot/Session5';
import Session6Godot from '@/pages/godot/Session6';
import Session7Godot from '@/pages/godot/Session7';
import Session8Godot from '@/pages/godot/Session8';
import Session9Godot from '@/pages/godot/Session9';
import Session10Godot from '@/pages/godot/Session10';
import Session11Godot from '@/pages/godot/Session11';
import Session12Godot from '@/pages/godot/Session12';
import Session13Godot from '@/pages/godot/Session13';
import Session14Godot from '@/pages/godot/Session14';
import SimpleGameGodot from '@/pages/godot/SimpleGame';

// Greenfoot sessions
import Session1Greenfoot from '@/pages/greenfoot/Session1';
import Session2Greenfoot from '@/pages/greenfoot/Session2';
import Session3Greenfoot from '@/pages/greenfoot/Session3';
import Session4Greenfoot from '@/pages/greenfoot/Session4';
import Session5Greenfoot from '@/pages/greenfoot/Session5';
import Session6Greenfoot from '@/pages/greenfoot/Session6';
import Session7Greenfoot from '@/pages/greenfoot/Session7';
import Session8Greenfoot from '@/pages/greenfoot/Session8';
import Session9Greenfoot from '@/pages/greenfoot/Session9';
import Session10Greenfoot from '@/pages/greenfoot/Session10';
import Session11Greenfoot from '@/pages/greenfoot/Session11';
import Session12Greenfoot from '@/pages/greenfoot/Session12';
import Session13Greenfoot from '@/pages/greenfoot/Session13';
import Session14Greenfoot from '@/pages/greenfoot/Session14';

// Construct3 sessions
import Session1Construct3 from '@/pages/construct3/Session1';
import Session2Construct3 from '@/pages/construct3/Session2';

export const GameDevelopmentSessionRoutes = () => (
  <>
    {/* GDevelop sessions */}
    <Route 
      path="/gdevelop/session1" 
      element={
        <CourseAccessGuard courseSlug="gdevelop">
          <Session1GDevelop />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/gdevelop/session2" 
      element={
        <CourseAccessGuard courseSlug="gdevelop">
          <Session2GDevelop />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/gdevelop/session3" 
      element={
        <CourseAccessGuard courseSlug="gdevelop">
          <Session3GDevelop />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/gdevelop/session4" 
      element={
        <CourseAccessGuard courseSlug="gdevelop">
          <Session4GDevelop />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/gdevelop/session5" 
      element={
        <CourseAccessGuard courseSlug="gdevelop">
          <Session5GDevelop />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/gdevelop/session6" 
      element={
        <CourseAccessGuard courseSlug="gdevelop">
          <Session6GDevelop />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/gdevelop/session7" 
      element={
        <CourseAccessGuard courseSlug="gdevelop">
          <Session7GDevelop />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/gdevelop/session8" 
      element={
        <CourseAccessGuard courseSlug="gdevelop">
          <Session8GDevelop />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/gdevelop/session9" 
      element={
        <CourseAccessGuard courseSlug="gdevelop">
          <Session9GDevelop />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/gdevelop/session10" 
      element={
        <CourseAccessGuard courseSlug="gdevelop">
          <Session10GDevelop />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/gdevelop/session11" 
      element={
        <CourseAccessGuard courseSlug="gdevelop">
          <Session11GDevelop />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/gdevelop/session12" 
      element={
        <CourseAccessGuard courseSlug="gdevelop">
          <Session12GDevelop />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/gdevelop/session13" 
      element={
        <CourseAccessGuard courseSlug="gdevelop">
          <Session13GDevelop />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/gdevelop/session14" 
      element={
        <CourseAccessGuard courseSlug="gdevelop">
          <Session14GDevelop />
        </CourseAccessGuard>
      } 
    />

    {/* Godot sessions */}
    <Route 
      path="/godot/session1" 
      element={
        <CourseAccessGuard courseSlug="godot">
          <Session1Godot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/godot/session2" 
      element={
        <CourseAccessGuard courseSlug="godot">
          <Session2Godot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/godot/session3" 
      element={
        <CourseAccessGuard courseSlug="godot">
          <Session3Godot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/godot/session4" 
      element={
        <CourseAccessGuard courseSlug="godot">
          <Session4Godot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/godot/session5" 
      element={
        <CourseAccessGuard courseSlug="godot">
          <Session5Godot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/godot/session6" 
      element={
        <CourseAccessGuard courseSlug="godot">
          <Session6Godot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/godot/session7" 
      element={
        <CourseAccessGuard courseSlug="godot">
          <Session7Godot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/godot/session8" 
      element={
        <CourseAccessGuard courseSlug="godot">
          <Session8Godot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/godot/session9" 
      element={
        <CourseAccessGuard courseSlug="godot">
          <Session9Godot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/godot/session10" 
      element={
        <CourseAccessGuard courseSlug="godot">
          <Session10Godot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/godot/session11" 
      element={
        <CourseAccessGuard courseSlug="godot">
          <Session11Godot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/godot/session12" 
      element={
        <CourseAccessGuard courseSlug="godot">
          <Session12Godot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/godot/session13" 
      element={
        <CourseAccessGuard courseSlug="godot">
          <Session13Godot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/godot/session14" 
      element={
        <CourseAccessGuard courseSlug="godot">
          <Session14Godot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/godot/simplegame" 
      element={
        <CourseAccessGuard courseSlug="godot">
          <SimpleGameGodot />
        </CourseAccessGuard>
      } 
    />

    {/* Greenfoot sessions */}
    <Route 
      path="/greenfoot/session1" 
      element={
        <CourseAccessGuard courseSlug="greenfoot">
          <Session1Greenfoot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/greenfoot/session2" 
      element={
        <CourseAccessGuard courseSlug="greenfoot">
          <Session2Greenfoot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/greenfoot/session3" 
      element={
        <CourseAccessGuard courseSlug="greenfoot">
          <Session3Greenfoot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/greenfoot/session4" 
      element={
        <CourseAccessGuard courseSlug="greenfoot">
          <Session4Greenfoot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/greenfoot/session5" 
      element={
        <CourseAccessGuard courseSlug="greenfoot">
          <Session5Greenfoot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/greenfoot/session6" 
      element={
        <CourseAccessGuard courseSlug="greenfoot">
          <Session6Greenfoot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/greenfoot/session7" 
      element={
        <CourseAccessGuard courseSlug="greenfoot">
          <Session7Greenfoot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/greenfoot/session8" 
      element={
        <CourseAccessGuard courseSlug="greenfoot">
          <Session8Greenfoot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/greenfoot/session9" 
      element={
        <CourseAccessGuard courseSlug="greenfoot">
          <Session9Greenfoot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/greenfoot/session10" 
      element={
        <CourseAccessGuard courseSlug="greenfoot">
          <Session10Greenfoot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/greenfoot/session11" 
      element={
        <CourseAccessGuard courseSlug="greenfoot">
          <Session11Greenfoot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/greenfoot/session12" 
      element={
        <CourseAccessGuard courseSlug="greenfoot">
          <Session12Greenfoot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/greenfoot/session13" 
      element={
        <CourseAccessGuard courseSlug="greenfoot">
          <Session13Greenfoot />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/greenfoot/session14" 
      element={
        <CourseAccessGuard courseSlug="greenfoot">
          <Session14Greenfoot />
        </CourseAccessGuard>
      } 
    />

    {/* Construct3 sessions */}
    <Route 
      path="/construct3/session1" 
      element={
        <CourseAccessGuard courseSlug="construct3">
          <Session1Construct3 />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/construct3/session2" 
      element={
        <CourseAccessGuard courseSlug="construct3">
          <Session2Construct3 />
        </CourseAccessGuard>
      } 
    />
  </>
);
