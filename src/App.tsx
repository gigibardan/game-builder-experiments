
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import ProtectedRoute from '@/components/ProtectedRoute';
import CourseAccessGuard from '@/components/CourseAccessGuard';
import HomePage from '@/pages/HomePage';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Courses from '@/pages/Courses';
import Curriculum from '@/pages/Curriculum';
import AuthPage from '@/pages/auth/AuthPage';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import Unauthorized from '@/pages/auth/Unauthorized';
import AdminDashboard from '@/pages/admin/Dashboard';
import UserManagement from '@/pages/admin/UserManagement';
import StudentDashboard from '@/pages/student/StudentDashboard';
import NotFound from '@/pages/NotFound';

// Course pages
import Scratch from '@/pages/courses/Scratch';
import AppInventor from '@/pages/courses/AppInventor';
import Construct3 from '@/pages/courses/Construct3';
import GDevelop from '@/pages/courses/GDevelop';
import Alice3 from '@/pages/courses/Alice3';
import MicrobitArcade from '@/pages/courses/MicrobitArcade';
import MinecraftModding from '@/pages/courses/MinecraftModding';
import RobloxLua from '@/pages/courses/RobloxLua';
import Python from '@/pages/courses/Python';
import FrontendDev from '@/pages/courses/FrontendDev';
import Greenfoot from '@/pages/courses/Greenfoot';
import Godot from '@/pages/courses/Godot';

// Robotics course pages
import LegoSpikeEssentials from '@/pages/courses/LegoSpikeEssentials';
import LegoSpikePrime from '@/pages/courses/LegoSpikePrime';
import MicrobitExplorers from '@/pages/courses/MicrobitExplorers';

// Scratch lesson pages
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

// AppInventor lesson pages
import AppInventorSession1 from '@/pages/appinventor/Session1';
import AppInventorSession2 from '@/pages/appinventor/Session2';
import AppInventorSession3 from '@/pages/appinventor/Session3';
import AppInventorSession4 from '@/pages/appinventor/Session4';
import AppInventorSession5 from '@/pages/appinventor/Session5';
import AppInventorSession6 from '@/pages/appinventor/Session6';
import AppInventorSession7 from '@/pages/appinventor/Session7';
import AppInventorSession8 from '@/pages/appinventor/Session8';
import AppInventorSession9 from '@/pages/appinventor/Session9';

// Construct3 lesson pages
import Construct3Session1 from '@/pages/construct3/Session1';

// GDevelop lesson pages
import GDevelopSession1 from '@/pages/gdevelop/Session1';

// Alice3 lesson pages
import Alice3Session1 from '@/pages/alice3/Session1';
import Alice3Session1Adventure from '@/pages/alice3/Session1Adventure';
import Alice3Session2SpaceGame from '@/pages/alice3/Session2SpaceGame';
import Alice3Session3VirtualPet from '@/pages/alice3/Session3VirtualPet';
import Alice3Session4Geometry from '@/pages/alice3/Session4Geometry';

// MicrobitArcade lesson pages
import MicrobitArcadeSession1 from '@/pages/microbitarcade/Session1';

// MinecraftModding lesson pages
import MinecraftModdingSession1 from '@/pages/minecraftmodding/Session1';
import MinecraftModdingCrystalRealm from '@/pages/minecraftmodding/CrystalRealm';
import MinecraftModdingRubyArmor from '@/pages/minecraftmodding/RubyArmor';

// RobloxLua lesson pages
import RobloxLuaSession1 from '@/pages/robloxlua/Session1Introducere';


// Python lesson pages
import PythonSession1 from '@/pages/python/Session1';

// FrontendDev lesson pages
import FrontendDevSession1 from '@/pages/frontenddev/Session1';

// Greenfoot lesson pages
import GreenfootSession1 from '@/pages/greenfoot/Session1';
import GreenfootSession2 from '@/pages/greenfoot/Session2';
import GreenfootSession3 from '@/pages/greenfoot/Session3';

// Godot lesson pages
import GodotSession1 from '@/pages/godot/Session1';
import GodotSession2 from '@/pages/godot/Session2';
import GodotSession3 from '@/pages/godot/Session3';
import GodotSession4 from '@/pages/godot/Session4';
import GodotSession5 from '@/pages/godot/Session5';
import GodotSimpleGame from '@/pages/godot/SimpleGame';

// Lego Spike Essentials lesson pages
import LegoSpikeEssentialsSession1 from '@/pages/legoessentials/Session1ClassicCarousel';
import LegoSpikeEssentialsSession2 from '@/pages/legoessentials/Session2FerrisWheel';
import LegoSpikeEssentialsSession3 from '@/pages/legoessentials/Session3CableCar';
import LegoSpikeEssentialsSession4TwirlingTeacups from '@/pages/legoessentials/Session4TwirlingTeacups';
import LegoSpikeEssentialsSession5SnackStand from '@/pages/legoessentials/Session5SnackStand';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/curriculum" element={<Curriculum />} />
          
          {/* Auth routes */}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          
          {/* Programming course routes with access control */}
          <Route path="/courses/scratch" element={
            <CourseAccessGuard courseSlug="scratch">
              <Scratch />
            </CourseAccessGuard>
          } />
          <Route path="/courses/appinventor" element={
            <CourseAccessGuard courseSlug="appinventor">
              <AppInventor />
            </CourseAccessGuard>
          } />
          <Route path="/courses/construct3" element={
            <CourseAccessGuard courseSlug="construct3">
              <Construct3 />
            </CourseAccessGuard>
          } />
          <Route path="/courses/gdevelop" element={
            <CourseAccessGuard courseSlug="gdevelop">
              <GDevelop />
            </CourseAccessGuard>
          } />
          <Route path="/courses/alice3" element={
            <CourseAccessGuard courseSlug="alice3">
              <Alice3 />
            </CourseAccessGuard>
          } />
          <Route path="/courses/microbitarcade" element={
            <CourseAccessGuard courseSlug="microbitarcade">
              <MicrobitArcade />
            </CourseAccessGuard>
          } />
          <Route path="/courses/minecraft-modding" element={
            <CourseAccessGuard courseSlug="minecraft-modding">
              <MinecraftModding />
            </CourseAccessGuard>
          } />
          <Route path="/courses/robloxlua" element={
            <CourseAccessGuard courseSlug="robloxlua">
              <RobloxLua />
            </CourseAccessGuard>
          } />
          <Route path="/courses/python" element={
            <CourseAccessGuard courseSlug="python">
              <Python />
            </CourseAccessGuard>
          } />
          <Route path="/courses/frontenddev" element={
            <CourseAccessGuard courseSlug="frontenddev">
              <FrontendDev />
            </CourseAccessGuard>
          } />
          <Route path="/courses/greenfoot" element={
            <CourseAccessGuard courseSlug="greenfoot">
              <Greenfoot />
            </CourseAccessGuard>
          } />
          <Route path="/courses/godot" element={
            <CourseAccessGuard courseSlug="godot">
              <Godot />
            </CourseAccessGuard>
          } />
          
          {/* Robotics course routes with access control */}
          <Route path="/courses/lego-spike-essentials" element={
            <CourseAccessGuard courseSlug="lego-spike-essentials">
              <LegoSpikeEssentials />
            </CourseAccessGuard>
          } />
          <Route path="/courses/lego-spike-prime" element={
            <CourseAccessGuard courseSlug="lego-spike-prime">
              <LegoSpikePrime />
            </CourseAccessGuard>
          } />
          <Route path="/courses/microbit-explorers" element={
            <CourseAccessGuard courseSlug="microbit-explorers">
              <MicrobitExplorers />
            </CourseAccessGuard>
          } />
          
          {/* Scratch lesson routes with access control */}
          <Route path="/scratch/session1alegesanatos" element={
            <CourseAccessGuard courseSlug="scratch" sessionSlug="session1alegesanatos">
              <Session1Alegesanatos />
            </CourseAccessGuard>
          } />
          <Route path="/scratch/session2spacedodge" element={
            <CourseAccessGuard courseSlug="scratch" sessionSlug="session2spacedodge">
              <Session2SpaceDodge />
            </CourseAccessGuard>
          } />
          <Route path="/scratch/session3motoracer" element={
            <CourseAccessGuard courseSlug="scratch" sessionSlug="session3motoracer">
              <Session3MotoRacer />
            </CourseAccessGuard>
          } />
          <Route path="/scratch/session4cityrunner" element={
            <CourseAccessGuard courseSlug="scratch" sessionSlug="session4cityrunner">
              <Session4CityRunner />
            </CourseAccessGuard>
          } />
          <Route path="/scratch/session5beachballbounce" element={
            <CourseAccessGuard courseSlug="scratch" sessionSlug="session5beachballbounce">
              <Session5BeachBallBounce />
            </CourseAccessGuard>
          } />
          <Route path="/scratch/session6stitchbeach" element={
            <CourseAccessGuard courseSlug="scratch" sessionSlug="session6stitchbeach">
              <Session6StitchBeach />
            </CourseAccessGuard>
          } />
          <Route path="/scratch/session7cakequest" element={
            <CourseAccessGuard courseSlug="scratch" sessionSlug="session7cakequest">
              <Session7cakequest />
            </CourseAccessGuard>
          } />
          <Route path="/scratch/session8wizardsquest" element={
            <CourseAccessGuard courseSlug="scratch" sessionSlug="session8wizardsquest">
              <Session8WizardsQuest />
            </CourseAccessGuard>
          } />
          <Route path="/scratch/session9robotfootball" element={
            <CourseAccessGuard courseSlug="scratch" sessionSlug="session9robotfootball">
              <Session9RobotFootball />
            </CourseAccessGuard>
          } />
          <Route path="/scratch/session10flappyminecraftpart1" element={
            <CourseAccessGuard courseSlug="scratch" sessionSlug="session10flappyminecraftpart1">
              <Session10FlappyMinecraftPart1 />
            </CourseAccessGuard>
          } />
          <Route path="/scratch/session10flappyminecraftpart2" element={
            <CourseAccessGuard courseSlug="scratch" sessionSlug="session10flappyminecraftpart2">
              <Session10FlappyMinecraftPart2 />
            </CourseAccessGuard>
          } />
          <Route path="/scratch/session11eggdropper" element={
            <CourseAccessGuard courseSlug="scratch" sessionSlug="session11eggdropper">
              <Session11EggDropper />
            </CourseAccessGuard>
          } />
          
          {/* AppInventor lesson routes with access control */}
          <Route path="/appinventor/session1" element={
            <CourseAccessGuard courseSlug="appinventor" sessionSlug="session1">
              <AppInventorSession1 />
            </CourseAccessGuard>
          } />
          <Route path="/appinventor/session2" element={
            <CourseAccessGuard courseSlug="appinventor" sessionSlug="session2">
              <AppInventorSession2 />
            </CourseAccessGuard>
          } />
          <Route path="/appinventor/session3" element={
            <CourseAccessGuard courseSlug="appinventor" sessionSlug="session3">
              <AppInventorSession3 />
            </CourseAccessGuard>
          } />
          <Route path="/appinventor/session4" element={
            <CourseAccessGuard courseSlug="appinventor" sessionSlug="session4">
              <AppInventorSession4 />
            </CourseAccessGuard>
          } />
          <Route path="/appinventor/session5" element={
            <CourseAccessGuard courseSlug="appinventor" sessionSlug="session5">
              <AppInventorSession5 />
            </CourseAccessGuard>
          } />
          <Route path="/appinventor/session6" element={
            <CourseAccessGuard courseSlug="appinventor" sessionSlug="session6">
              <AppInventorSession6 />
            </CourseAccessGuard>
          } />
          <Route path="/appinventor/session7" element={
            <CourseAccessGuard courseSlug="appinventor" sessionSlug="session7">
              <AppInventorSession7 />
            </CourseAccessGuard>
          } />
          <Route path="/appinventor/session8" element={
            <CourseAccessGuard courseSlug="appinventor" sessionSlug="session8">
              <AppInventorSession8 />
            </CourseAccessGuard>
          } />
          <Route path="/appinventor/session9" element={
            <CourseAccessGuard courseSlug="appinventor" sessionSlug="session9">
              <AppInventorSession9 />
            </CourseAccessGuard>
          } />
          
          {/* Construct3 lesson routes with access control */}
          <Route path="/construct3/session1" element={
            <CourseAccessGuard courseSlug="construct3" sessionSlug="session1">
              <Construct3Session1 />
            </CourseAccessGuard>
          } />
          
          {/* GDevelop lesson routes with access control */}
          <Route path="/gdevelop/session1" element={
            <CourseAccessGuard courseSlug="gdevelop" sessionSlug="session1">
              <GDevelopSession1 />
            </CourseAccessGuard>
          } />
          
          {/* Alice3 lesson routes with access control */}
          <Route path="/alice3/session1" element={
            <CourseAccessGuard courseSlug="alice3" sessionSlug="session1">
              <Alice3Session1 />
            </CourseAccessGuard>
          } />
          <Route path="/alice3/session1adventure" element={
            <CourseAccessGuard courseSlug="alice3" sessionSlug="session1adventure">
              <Alice3Session1Adventure />
            </CourseAccessGuard>
          } />
          <Route path="/alice3/session2spacegame" element={
            <CourseAccessGuard courseSlug="alice3" sessionSlug="session2spacegame">
              <Alice3Session2SpaceGame />
            </CourseAccessGuard>
          } />
          <Route path="/alice3/session3virtualpet" element={
            <CourseAccessGuard courseSlug="alice3" sessionSlug="session3virtualpet">
              <Alice3Session3VirtualPet />
            </CourseAccessGuard>
          } />
          <Route path="/alice3/session4geometry" element={
            <CourseAccessGuard courseSlug="alice3" sessionSlug="session4geometry">
              <Alice3Session4Geometry />
            </CourseAccessGuard>
          } />
          
          {/* MicrobitArcade lesson routes with access control */}
          <Route path="/microbitarcade/session1" element={
            <CourseAccessGuard courseSlug="microbitarcade" sessionSlug="session1">
              <MicrobitArcadeSession1 />
            </CourseAccessGuard>
          } />
          
          {/* MinecraftModding lesson routes with access control */}
          <Route path="/minecraftmodding/session1" element={
            <CourseAccessGuard courseSlug="minecraft-modding" sessionSlug="session1">
              <MinecraftModdingSession1 />
            </CourseAccessGuard>
          } />
          <Route path="/minecraftmodding/crystalrealm" element={
            <CourseAccessGuard courseSlug="minecraft-modding" sessionSlug="crystalrealm">
              <MinecraftModdingCrystalRealm />
            </CourseAccessGuard>
          } />
          <Route path="/minecraftmodding/rubyarmor" element={
            <CourseAccessGuard courseSlug="minecraft-modding" sessionSlug="rubyarmor">
              <MinecraftModdingRubyArmor />
            </CourseAccessGuard>
          } />
          
          {/* RobloxLua lesson routes with access control */}
          <Route path="/robloxlua/session1introducere" element={
            <CourseAccessGuard courseSlug="robloxlua" sessionSlug="session1">
              <RobloxLuaSession1 />
            </CourseAccessGuard>
          } />
          
          {/* Python lesson routes with access control */}
          <Route path="/python/session1" element={
            <CourseAccessGuard courseSlug="python" sessionSlug="session1">
              <PythonSession1 />
            </CourseAccessGuard>
          } />
          
          {/* FrontendDev lesson routes with access control */}
          <Route path="/frontenddev/session1" element={
            <CourseAccessGuard courseSlug="frontenddev" sessionSlug="session1">
              <FrontendDevSession1 />
            </CourseAccessGuard>
          } />
          
          {/* Greenfoot lesson routes with access control */}
          <Route path="/greenfoot/session1" element={
            <CourseAccessGuard courseSlug="greenfoot" sessionSlug="session1">
              <GreenfootSession1 />
            </CourseAccessGuard>
          } />
          <Route path="/greenfoot/session2" element={
            <CourseAccessGuard courseSlug="greenfoot" sessionSlug="session2">
              <GreenfootSession2 />
            </CourseAccessGuard>
          } />
          <Route path="/greenfoot/session3" element={
            <CourseAccessGuard courseSlug="greenfoot" sessionSlug="session3">
              <GreenfootSession3 />
            </CourseAccessGuard>
          } />
          
          {/* Godot lesson routes with access control */}
          <Route path="/godot/session1" element={
            <CourseAccessGuard courseSlug="godot" sessionSlug="session1">
              <GodotSession1 />
            </CourseAccessGuard>
          } />
          <Route path="/godot/session2" element={
            <CourseAccessGuard courseSlug="godot" sessionSlug="session2">
              <GodotSession2 />
            </CourseAccessGuard>
          } />
          <Route path="/godot/session3" element={
            <CourseAccessGuard courseSlug="godot" sessionSlug="session3">
              <GodotSession3 />
            </CourseAccessGuard>
          } />
          <Route path="/godot/session4" element={
            <CourseAccessGuard courseSlug="godot" sessionSlug="session4">
              <GodotSession4 />
            </CourseAccessGuard>
          } />
          <Route path="/godot/session5" element={
            <CourseAccessGuard courseSlug="godot" sessionSlug="session5">
              <GodotSession5 />
            </CourseAccessGuard>
          } />
          <Route path="/godot/simplegame" element={
            <CourseAccessGuard courseSlug="godot" sessionSlug="simplegame">
              <GodotSimpleGame />
            </CourseAccessGuard>
          } />

          {/* Lego Spike Essentials lesson routes with access control */}
          <Route path="/legoessentials/session1classiccarusel" element={
            <CourseAccessGuard courseSlug="lego-spike-essentials" sessionSlug="session1classiccarusel">
              <LegoSpikeEssentialsSession1 />
            </CourseAccessGuard>
          } />

          <Route path="/legoessentials/session2ferriswheel" element={
            <CourseAccessGuard courseSlug="lego-spike-essentials" sessionSlug="session2ferriswheel">
              <LegoSpikeEssentialsSession2 />
            </CourseAccessGuard>
          } />

          <Route path="/legoessentials/session3cablecar" element={
            <CourseAccessGuard courseSlug="lego-spike-essentials" sessionSlug="session3cablecar">
              <LegoSpikeEssentialsSession3 />
            </CourseAccessGuard>
          } />

          <Route path="/legoessentials/session4twirlingteacups" element={
            <CourseAccessGuard courseSlug="lego-spike-essentials" sessionSlug="session4twirlingteacups">
              <LegoSpikeEssentialsSession4TwirlingTeacups />
            </CourseAccessGuard>
          } />

          <Route path="/legoessentials/session5snackstand" element={
            <CourseAccessGuard courseSlug="lego-spike-essentials" sessionSlug="session5snackstand">
              <LegoSpikeEssentialsSession5SnackStand />
            </CourseAccessGuard>
          } />

          {/* Protected student routes */}
          <Route path="/student/dashboard" element={
            <ProtectedRoute requiredRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          } />
          
          {/* Protected admin routes */}
          <Route path="/admin/dashboard" element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/users" element={
            <ProtectedRoute requiredRole="admin">
              <UserManagement />
            </ProtectedRoute>
          } />
          
          {/* Catch all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
