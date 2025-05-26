
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import ProtectedRoute from '@/components/ProtectedRoute';
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
import RobloxLuaSession1 from '@/pages/robloxlua/Session1';

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
          
          {/* Programming course routes */}
          <Route path="/courses/scratch" element={<Scratch />} />
          <Route path="/courses/appinventor" element={<AppInventor />} />
          <Route path="/courses/construct3" element={<Construct3 />} />
          <Route path="/courses/gdevelop" element={<GDevelop />} />
          <Route path="/courses/alice3" element={<Alice3 />} />
          <Route path="/courses/microbitarcade" element={<MicrobitArcade />} />
          <Route path="/courses/minecraft-modding" element={<MinecraftModding />} />
          <Route path="/courses/robloxlua" element={<RobloxLua />} />
          <Route path="/courses/python" element={<Python />} />
          <Route path="/courses/frontenddev" element={<FrontendDev />} />
          <Route path="/courses/greenfoot" element={<Greenfoot />} />
          <Route path="/courses/godot" element={<Godot />} />
          
          {/* Robotics course routes */}
          <Route path="/courses/lego-spike-essentials" element={<LegoSpikeEssentials />} />
          <Route path="/courses/lego-spike-prime" element={<LegoSpikePrime />} />
          <Route path="/courses/microbit-explorers" element={<MicrobitExplorers />} />
          
          {/* Scratch lesson routes */}
          <Route path="/scratch/session1alegesanatos" element={<Session1Alegesanatos />} />
          <Route path="/scratch/session2spacedodge" element={<Session2SpaceDodge />} />
          <Route path="/scratch/session3motoracer" element={<Session3MotoRacer />} />
          <Route path="/scratch/session4cityrunner" element={<Session4CityRunner />} />
          <Route path="/scratch/session5beachballbounce" element={<Session5BeachBallBounce />} />
          <Route path="/scratch/session6stitchbeach" element={<Session6StitchBeach />} />
          <Route path="/scratch/session7cakequest" element={<Session7cakequest />} />
          <Route path="/scratch/session8wizardsquest" element={<Session8WizardsQuest />} />
          <Route path="/scratch/session9robotfootball" element={<Session9RobotFootball />} />
          <Route path="/scratch/session10flappyminecraftpart1" element={<Session10FlappyMinecraftPart1 />} />
          <Route path="/scratch/session10flappyminecraftpart2" element={<Session10FlappyMinecraftPart2 />} />
          <Route path="/scratch/session11eggdropper" element={<Session11EggDropper />} />
          
          {/* AppInventor lesson routes */}
          <Route path="/appinventor/session1" element={<AppInventorSession1 />} />
          <Route path="/appinventor/session2" element={<AppInventorSession2 />} />
          <Route path="/appinventor/session3" element={<AppInventorSession3 />} />
          <Route path="/appinventor/session4" element={<AppInventorSession4 />} />
          <Route path="/appinventor/session5" element={<AppInventorSession5 />} />
          <Route path="/appinventor/session6" element={<AppInventorSession6 />} />
          <Route path="/appinventor/session7" element={<AppInventorSession7 />} />
          <Route path="/appinventor/session8" element={<AppInventorSession8 />} />
          <Route path="/appinventor/session9" element={<AppInventorSession9 />} />
          
          {/* Construct3 lesson routes */}
          <Route path="/construct3/session1" element={<Construct3Session1 />} />
          
          {/* GDevelop lesson routes */}
          <Route path="/gdevelop/session1" element={<GDevelopSession1 />} />
          
          {/* Alice3 lesson routes */}
          <Route path="/alice3/session1" element={<Alice3Session1 />} />
          <Route path="/alice3/session1adventure" element={<Alice3Session1Adventure />} />
          <Route path="/alice3/session2spacegame" element={<Alice3Session2SpaceGame />} />
          <Route path="/alice3/session3virtualpet" element={<Alice3Session3VirtualPet />} />
          <Route path="/alice3/session4geometry" element={<Alice3Session4Geometry />} />
          
          {/* MicrobitArcade lesson routes */}
          <Route path="/microbitarcade/session1" element={<MicrobitArcadeSession1 />} />
          
          {/* MinecraftModding lesson routes */}
          <Route path="/minecraftmodding/session1" element={<MinecraftModdingSession1 />} />
          <Route path="/minecraftmodding/crystalrealm" element={<MinecraftModdingCrystalRealm />} />
          <Route path="/minecraftmodding/rubyarmor" element={<MinecraftModdingRubyArmor />} />
          
          {/* RobloxLua lesson routes */}
          <Route path="/robloxlua/session1" element={<RobloxLuaSession1 />} />
          
          {/* Python lesson routes */}
          <Route path="/python/session1" element={<PythonSession1 />} />
          
          {/* FrontendDev lesson routes */}
          <Route path="/frontenddev/session1" element={<FrontendDevSession1 />} />
          
          {/* Greenfoot lesson routes */}
          <Route path="/greenfoot/session1" element={<GreenfootSession1 />} />
          <Route path="/greenfoot/session2" element={<GreenfootSession2 />} />
          <Route path="/greenfoot/session3" element={<GreenfootSession3 />} />
          
          {/* Godot lesson routes */}
          <Route path="/godot/session1" element={<GodotSession1 />} />
          <Route path="/godot/session2" element={<GodotSession2 />} />
          <Route path="/godot/session3" element={<GodotSession3 />} />
          <Route path="/godot/session4" element={<GodotSession4 />} />
          <Route path="/godot/session5" element={<GodotSession5 />} />
          <Route path="/godot/simplegame" element={<GodotSimpleGame />} />
          
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
