
import React from 'react';
import { Route } from 'react-router-dom';
import CourseAccessGuard from '@/components/CourseAccessGuard';

// Scratch course sessions
import Session1Alegesanatos from '@/pages/scratch/Session1Alegesanatos';
import Session2SpaceDodge from '@/pages/scratch/Session2SpaceDodge';
import Session3MotoRacer from '@/pages/scratch/Session3MotoRacer';
import Session4CityRunner from '@/pages/scratch/Session4CityRunner';
import Session5BeachBallBounce from '@/pages/scratch/Session5BeachBallBounce';
import Session6StitchBeach from '@/pages/scratch/Session6StitchBeach';
import Session7cakequest from '@/pages/scratch/Session7cakequest';
import Session8WizardsQuest from '@/pages/scratch/Session8WizardsQuest';
import Session9RobotFootball from '@/pages/scratch/Session9RobotFootball';
import Session10FlappyMinecraftPart1 from '@/pages/scratch/Session10FlappyMinecraftPart1';
import Session10FlappyMinecraftPart2 from '@/pages/scratch/Session10FlappyMinecraftPart2';
import Session11EggDropper from '@/pages/scratch/Session11EggDropper';

export const ScratchSessionRoutes = () => (
  <>
    <Route 
      path="/scratch/session1alegesanatos" 
      element={
        <CourseAccessGuard courseSlug="scratch">
          <Session1Alegesanatos />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/scratch/session2spacedodge" 
      element={
        <CourseAccessGuard courseSlug="scratch">
          <Session2SpaceDodge />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/scratch/session3motoracer" 
      element={
        <CourseAccessGuard courseSlug="scratch">
          <Session3MotoRacer />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/scratch/session4cityrunner" 
      element={
        <CourseAccessGuard courseSlug="scratch">
          <Session4CityRunner />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/scratch/session5beachball" 
      element={
        <CourseAccessGuard courseSlug="scratch">
          <Session5BeachBallBounce />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/scratch/session6stitchbeach" 
      element={
        <CourseAccessGuard courseSlug="scratch">
          <Session6StitchBeach />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/scratch/session7cakequest" 
      element={
        <CourseAccessGuard courseSlug="scratch">
          <Session7cakequest />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/scratch/session8wizardsquest" 
      element={
        <CourseAccessGuard courseSlug="scratch">
          <Session8WizardsQuest />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/scratch/session9robotfootball" 
      element={
        <CourseAccessGuard courseSlug="scratch">
          <Session9RobotFootball />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/scratch/session10flappyminecraftpart1" 
      element={
        <CourseAccessGuard courseSlug="scratch">
          <Session10FlappyMinecraftPart1 />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/scratch/session10flappyminecraftpart2" 
      element={
        <CourseAccessGuard courseSlug="scratch">
          <Session10FlappyMinecraftPart2 />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/scratch/session11eggdropper" 
      element={
        <CourseAccessGuard courseSlug="scratch">
          <Session11EggDropper />
        </CourseAccessGuard>
      } 
    />
  </>
);
