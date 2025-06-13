
import React from 'react';
import { Route } from 'react-router-dom';
import CourseAccessGuard from '@/components/CourseAccessGuard';

// Alice3 sessions
import Session1Alice from '@/pages/alice3/Session1';
import Session1AdventureAlice from '@/pages/alice3/Session1Adventure';
import Session2SpaceGameAlice from '@/pages/alice3/Session2SpaceGame';
import Session3VirtualPetAlice from '@/pages/alice3/Session3VirtualPet';
import Session4GeometryAlice from '@/pages/alice3/Session4Geometry';

// AppInventor sessions
import Session1AppInventor from '@/pages/appinventor/Session1';
import Session2AppInventor from '@/pages/appinventor/Session2';
import Session3AppInventor from '@/pages/appinventor/Session3';
import Session4AppInventor from '@/pages/appinventor/Session4';
import Session5AppInventor from '@/pages/appinventor/Session5';
import Session6AppInventor from '@/pages/appinventor/Session6';
import Session7AppInventor from '@/pages/appinventor/Session7';
import Session8AppInventor from '@/pages/appinventor/Session8';
import Session9AppInventor from '@/pages/appinventor/Session9';

// Lego Spike Essentials sessions
import Session1ClassicCarousel from '@/pages/legoessentials/Session1ClassicCarousel';
import Session2FerrisWheel from '@/pages/legoessentials/Session2FerrisWheel';
import Session3CableCar from '@/pages/legoessentials/Session3CableCar';
import Session4TwirlingTeacups from '@/pages/legoessentials/Session4TwirlingTeacups';
import Session5SnackStand from '@/pages/legoessentials/Session5SnackStand';

// Microbit Arcade sessions
import Session1MicrobitArcade from '@/pages/microbitarcade/Session1';
import Session2MicrobitArcade from '@/pages/microbitarcade/Session2';

export const MobileRoboticsSessionRoutes = () => (
  <>
    {/* Alice3 sessions */}
    <Route 
      path="/alice3/session1" 
      element={
        <CourseAccessGuard courseSlug="alice3">
          <Session1Alice />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/alice3/session1adventure" 
      element={
        <CourseAccessGuard courseSlug="alice3">
          <Session1AdventureAlice />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/alice3/session2spacegame" 
      element={
        <CourseAccessGuard courseSlug="alice3">
          <Session2SpaceGameAlice />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/alice3/session3virtualpet" 
      element={
        <CourseAccessGuard courseSlug="alice3">
          <Session3VirtualPetAlice />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/alice3/session4geometry" 
      element={
        <CourseAccessGuard courseSlug="alice3">
          <Session4GeometryAlice />
        </CourseAccessGuard>
      } 
    />

    {/* AppInventor sessions */}
    <Route 
      path="/appinventor/session1" 
      element={
        <CourseAccessGuard courseSlug="appinventor">
          <Session1AppInventor />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/appinventor/session2" 
      element={
        <CourseAccessGuard courseSlug="appinventor">
          <Session2AppInventor />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/appinventor/session3" 
      element={
        <CourseAccessGuard courseSlug="appinventor">
          <Session3AppInventor />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/appinventor/session4" 
      element={
        <CourseAccessGuard courseSlug="appinventor">
          <Session4AppInventor />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/appinventor/session5" 
      element={
        <CourseAccessGuard courseSlug="appinventor">
          <Session5AppInventor />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/appinventor/session6" 
      element={
        <CourseAccessGuard courseSlug="appinventor">
          <Session6AppInventor />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/appinventor/session7" 
      element={
        <CourseAccessGuard courseSlug="appinventor">
          <Session7AppInventor />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/appinventor/session8" 
      element={
        <CourseAccessGuard courseSlug="appinventor">
          <Session8AppInventor />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/appinventor/session9" 
      element={
        <CourseAccessGuard courseSlug="appinventor">
          <Session9AppInventor />
        </CourseAccessGuard>
      } 
    />

    {/* Lego Spike Essentials sessions */}
    <Route 
      path="/lego-spike-essentials/session1classiccarousel" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session1ClassicCarousel />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/lego-spike-essentials/session2ferriswheel" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session2FerrisWheel />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/lego-spike-essentials/session3cablecar" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session3CableCar />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/lego-spike-essentials/session4twirlingteacups" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session4TwirlingTeacups />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/lego-spike-essentials/session5snackstand" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session5SnackStand />
        </CourseAccessGuard>
      } 
    />

    {/* Microbit Arcade sessions */}
    <Route 
      path="/microbitarcade/session1" 
      element={
        <CourseAccessGuard courseSlug="microbitarcade">
          <Session1MicrobitArcade />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/microbitarcade/session2" 
      element={
        <CourseAccessGuard courseSlug="microbitarcade">
          <Session2MicrobitArcade />
        </CourseAccessGuard>
      } 
    />
  </>
);
