
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
import Session6HoveringHelicopter from '@/pages/legoessentials/Session6HoveringHelicopter';
import Session7Taxi from '@/pages/legoessentials/Session7Taxi';
import Session8Pinball from '@/pages/legoessentials/Session8Pinball';
import Session9BigLittleHelper from '@/pages/legoessentials/Session9BigLittleHelper';
import Session10BigBus from '@/pages/legoessentials/Session10BigBus';
import Session11RobotPart1 from '@/pages/legoessentials/Session11RobotPart1';
import Session12RobotPart2 from '@/pages/legoessentials/Session12RobotPart2';
import Session13Racheta from '@/pages/legoessentials/Session13Racheta';

// Microbit Arcade sessions
import Session1MicrobitArcade from '@/pages/microbitarcade/Session1';
import Session2MicrobitArcade from '@/pages/microbitarcade/Session2';
import Session8 from '@/pages/frontenddev/Session8';
import Session9 from '@/pages/frontenddev/Session9';

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
      path="/legoessentials/session1classiccarusel" 
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
      path="/legoessentials/session2ferriswheel" 
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
      path="/legoessentials/session3cablecar" 
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
      path="/legoessentials/session4twirlingteacups" 
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
    <Route 
      path="/legoessentials/session5snackstand" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session5SnackStand />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/lego-spike-essentials/session6hoveringhelicopter" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session6HoveringHelicopter />
        </CourseAccessGuard>
      }
    />
    <Route 
      path="/legoessentials/session6hoveringhelicopter" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session6HoveringHelicopter />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/lego-spike-essentials/session7taxi" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session7Taxi />
        </CourseAccessGuard>
      }
    />
    <Route 
      path="/legoessentials/session7taxi" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session7Taxi />
        </CourseAccessGuard>
      }
    />
    <Route 
      path="/lego-spike-essentials/session8pinball" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session8Pinball />
        </CourseAccessGuard>
      }
    />
    <Route 
      path="/legoessentials/session8pinball" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session8Pinball />
        </CourseAccessGuard>
      }
    />
    <Route 
      path="/lego-spike-essentials/session9biglittlehelper" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session9BigLittleHelper />
        </CourseAccessGuard>
      }
    />
    <Route 
      path="/legoessentials/session9biglittlehelper" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session9BigLittleHelper />
        </CourseAccessGuard>
      }
    />
    <Route 
      path="/lego-spike-essentials/session10bigbus" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session10BigBus />
        </CourseAccessGuard>
      }
    />
    <Route 
      path="/legoessentials/session10bigbus" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session10BigBus />
        </CourseAccessGuard>
      }
    />
    <Route 
      path="/lego-spike-essentials/session11robotpart1" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session11RobotPart1 />
        </CourseAccessGuard>
      }
    />
    <Route 
      path="/legoessentials/session11robotpart1" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session11RobotPart1 />
        </CourseAccessGuard>
      }
    />
    <Route 
      path="/lego-spike-essentials/session12robotpart2" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session12RobotPart2 />
        </CourseAccessGuard>
      }
    />
    <Route 
      path="/legoessentials/session12robotpart2" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session12RobotPart2 />
        </CourseAccessGuard>
      }
    />
    <Route 
      path="/lego-spike-essentials/session13racheta" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session13Racheta />
        </CourseAccessGuard>
      }
    />
    <Route 
      path="/legoessentials/session13racheta" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-essentials">
          <Session13Racheta />
        </CourseAccessGuard>
      }
    />

    {/* LEGO SPIKE Prime sessions */}
    <Route 
      path="/lego-spike-prime/robot-navigator" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-prime">
          <Session1ClassicCarousel />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/lego-spike-prime/bratul-robotic" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-prime">
          <Session2FerrisWheel />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/lego-spike-prime/robot-de-competitie" 
      element={
        <CourseAccessGuard courseSlug="lego-spike-prime">
          <Session3CableCar />
        </CourseAccessGuard>
      } 
    />

    {/* micro:bit Explorers sessions */}
    <Route 
      path="/microbit-explorers/primul-program-microbit" 
      element={
        <CourseAccessGuard courseSlug="microbit-explorers">
          <Session1MicrobitArcade />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/microbit-explorers/jocuri-cu-leduri" 
      element={
        <CourseAccessGuard courseSlug="microbit-explorers">
          <Session2MicrobitArcade />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/microbit-explorers/senzori-inteligenti" 
      element={
        <CourseAccessGuard courseSlug="microbit-explorers">
          <Session1MicrobitArcade />
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
