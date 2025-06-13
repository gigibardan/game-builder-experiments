
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

// Public pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Auth pages
import AuthPage from './pages/auth/AuthPage';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Unauthorized from './pages/auth/Unauthorized';

// Admin pages
import Dashboard from './pages/admin/Dashboard';
import UserManagement from './pages/admin/UserManagement';
import ProjectStructure from './pages/admin/ProjectStructure';
import CourseManagement from './pages/admin/CourseManagement';

// Student pages
import StudentDashboard from './pages/student/StudentDashboard';

// Course overview pages
import Scratch from './pages/courses/Scratch';
import RobloxLua from './pages/courses/RobloxLua';
import MinecraftModding from './pages/courses/MinecraftModding';
import Python from './pages/courses/Python';
import GDevelop from './pages/courses/GDevelop';
import Alice3 from './pages/courses/Alice3';
import AppInventor from './pages/courses/AppInventor';
import Construct3 from './pages/courses/Construct3';
import Godot from './pages/courses/Godot';
import Greenfoot from './pages/courses/Greenfoot';
import FrontendDev from './pages/courses/FrontendDev';
import LegoSpikeEssentials from './pages/courses/LegoSpikeEssentials';
import LegoSpikePrime from './pages/courses/LegoSpikePrime';
import MicrobitExplorers from './pages/courses/MicrobitExplorers';
import MicrobitArcade from './pages/courses/MicrobitArcade';

// Course session pages - Scratch
import Session3MotoRacer from './pages/scratch/Session3MotoRacer';
import Session8WizardsQuest from './pages/scratch/Session8WizardsQuest';
import Session9RobotFootball from './pages/scratch/Session9RobotFootball';
import Session1Alegesanatos from './pages/scratch/Session1Alegesanatos';
import Session2SpaceDodge from './pages/scratch/Session2SpaceDodge';
import Session4CityRunner from './pages/scratch/Session4CityRunner';
import Session5BeachBallBounce from './pages/scratch/Session5BeachBallBounce';
import Session6StitchBeach from './pages/scratch/Session6StitchBeach';
import Session7cakequest from './pages/scratch/Session7cakequest';
import Session10FlappyMinecraftPart1 from './pages/scratch/Session10FlappyMinecraftPart1';
import Session10FlappyMinecraftPart2 from './pages/scratch/Session10FlappyMinecraftPart2';
import Session11EggDropper from './pages/scratch/Session11EggDropper';

// Frontend Development sessions
import Session1FrontendDev from './pages/frontenddev/Session1';
import Session2FrontendDev from './pages/frontenddev/Session2';
import Session3FrontendDev from './pages/frontenddev/Session3';
import Session4FrontendDev from './pages/frontenddev/Session4';
import Session5FrontendDev from './pages/frontenddev/Session5';
import Session6FrontendDev from './pages/frontenddev/Session6';
import Session7FrontendDev from './pages/frontenddev/Session7';
import Session8FrontendDev from './pages/frontenddev/Session8';
import Session9FrontendDev from './pages/frontenddev/Session9';
import Session10FrontendDev from './pages/frontenddev/Session10';
import Session11FrontendDev from './pages/frontenddev/Session11';
import Session12FrontendDev from './pages/frontenddev/Session12';
import Session13FrontendDev from './pages/frontenddev/Session13';
import Session14FrontendDev from './pages/frontenddev/Session14';

// Alice3 sessions
import Session1Alice from './pages/alice3/Session1';
import Session1AdventureAlice from './pages/alice3/Session1Adventure';
import Session2SpaceGameAlice from './pages/alice3/Session2SpaceGame';
import Session3VirtualPetAlice from './pages/alice3/Session3VirtualPet';
import Session4GeometryAlice from './pages/alice3/Session4Geometry';

// Python sessions
import Session1Python from './pages/python/Session1';
import Session2Python from './pages/python/Session2';
import Session3Python from './pages/python/Session3';
import Session4Python from './pages/python/Session4';
import Session5Python from './pages/python/Session5';
import Session6Python from './pages/python/Session6';
import Session7Python from './pages/python/Session7';
import Session8Python from './pages/python/Session8';
import Session9Python from './pages/python/Session9';
import Session10Python from './pages/python/Session10';
import Session11Python from './pages/python/Session11';
import Session12Python from './pages/python/Session12';
import Session13Python from './pages/python/Session13';
import Session14Python from './pages/python/Session14';

// RobloxLua sessions
import Session1RobloxLua from './pages/robloxlua/Session1';
import Session1IntroducereRoblox from './pages/robloxlua/Session1Introducere';
import Session2QuizGameRoblox from './pages/robloxlua/Session2QuizGame';
import Session3ConstructiiScripturiRoblox from './pages/robloxlua/Session3ConstructiiScripturiIncepatori';
import Session4ObbyRoblox from './pages/robloxlua/Session4Obby';
import Session5NPCCreatorRoblox from './pages/robloxlua/Session5NPCCreator';
import Session6CreateAnimationsRoblox from './pages/robloxlua/Session6CreateAnimations';
import Session7ShopRoblox from './pages/robloxlua/Session7Shop';

// MinecraftModding sessions
import Session1MinecraftModding from './pages/minecraftmodding/Session1';
import Session4MinecraftModding from './pages/minecraftmodding/Session4';
import Session5MinecraftModding from './pages/minecraftmodding/Session5';
import Session6MinecraftModding from './pages/minecraftmodding/Session6';
import Session7MinecraftModding from './pages/minecraftmodding/Session7';
import Session8MinecraftModding from './pages/minecraftmodding/Session8';
import Session9MinecraftModding from './pages/minecraftmodding/Session9';
import Session10MinecraftModding from './pages/minecraftmodding/Session10';
import Session11MinecraftModding from './pages/minecraftmodding/Session11';
import Session12MinecraftModding from './pages/minecraftmodding/Session12';
import Session13MinecraftModding from './pages/minecraftmodding/Session13';
import Session14MinecraftModding from './pages/minecraftmodding/Session14';
import CrystalRealmMinecraft from './pages/minecraftmodding/CrystalRealm';
import RubyArmorMinecraft from './pages/minecraftmodding/RubyArmor';

// GDevelop sessions
import Session1GDevelop from './pages/gdevelop/Session1';
import Session2GDevelop from './pages/gdevelop/Session2';
import Session3GDevelop from './pages/gdevelop/Session3';
import Session4GDevelop from './pages/gdevelop/Session4';
import Session5GDevelop from './pages/gdevelop/Session5';
import Session6GDevelop from './pages/gdevelop/Session6';
import Session7GDevelop from './pages/gdevelop/Session7';
import Session8GDevelop from './pages/gdevelop/Session8';
import Session9GDevelop from './pages/gdevelop/Session9';
import Session10GDevelop from './pages/gdevelop/Session10';
import Session11GDevelop from './pages/gdevelop/Session11';
import Session12GDevelop from './pages/gdevelop/Session12';
import Session13GDevelop from './pages/gdevelop/Session13';
import Session14GDevelop from './pages/gdevelop/Session14';

// Godot sessions
import Session1Godot from './pages/godot/Session1';
import Session2Godot from './pages/godot/Session2';
import Session3Godot from './pages/godot/Session3';
import Session4Godot from './pages/godot/Session4';
import Session5Godot from './pages/godot/Session5';
import Session6Godot from './pages/godot/Session6';
import Session7Godot from './pages/godot/Session7';
import Session8Godot from './pages/godot/Session8';
import Session9Godot from './pages/godot/Session9';
import Session10Godot from './pages/godot/Session10';
import Session11Godot from './pages/godot/Session11';
import Session12Godot from './pages/godot/Session12';
import Session13Godot from './pages/godot/Session13';
import Session14Godot from './pages/godot/Session14';
import SimpleGameGodot from './pages/godot/SimpleGame';

// Greenfoot sessions
import Session1Greenfoot from './pages/greenfoot/Session1';
import Session2Greenfoot from './pages/greenfoot/Session2';
import Session3Greenfoot from './pages/greenfoot/Session3';
import Session4Greenfoot from './pages/greenfoot/Session4';
import Session5Greenfoot from './pages/greenfoot/Session5';
import Session6Greenfoot from './pages/greenfoot/Session6';
import Session7Greenfoot from './pages/greenfoot/Session7';
import Session8Greenfoot from './pages/greenfoot/Session8';
import Session9Greenfoot from './pages/greenfoot/Session9';
import Session10Greenfoot from './pages/greenfoot/Session10';
import Session11Greenfoot from './pages/greenfoot/Session11';
import Session12Greenfoot from './pages/greenfoot/Session12';
import Session13Greenfoot from './pages/greenfoot/Session13';
import Session14Greenfoot from './pages/greenfoot/Session14';

// AppInventor sessions
import Session1AppInventor from './pages/appinventor/Session1';
import Session2AppInventor from './pages/appinventor/Session2';
import Session3AppInventor from './pages/appinventor/Session3';
import Session4AppInventor from './pages/appinventor/Session4';
import Session5AppInventor from './pages/appinventor/Session5';
import Session6AppInventor from './pages/appinventor/Session6';
import Session7AppInventor from './pages/appinventor/Session7';
import Session8AppInventor from './pages/appinventor/Session8';
import Session9AppInventor from './pages/appinventor/Session9';

// Construct3 sessions
import Session1Construct3 from './pages/construct3/Session1';
import Session2Construct3 from './pages/construct3/Session2';

// Lego Spike Essentials sessions
import Session1ClassicCarousel from './pages/legoessentials/Session1ClassicCarousel';
import Session2FerrisWheel from './pages/legoessentials/Session2FerrisWheel';
import Session3CableCar from './pages/legoessentials/Session3CableCar';
import Session4TwirlingTeacups from './pages/legoessentials/Session4TwirlingTeacups';
import Session5SnackStand from './pages/legoessentials/Session5SnackStand';

// Microbit Arcade sessions
import Session1MicrobitArcade from './pages/microbitarcade/Session1';
import Session2MicrobitArcade from './pages/microbitarcade/Session2';

// Components
import ProtectedRoute from './components/ProtectedRoute';
import CourseAccessGuard from './components/CourseAccessGuard';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Auth routes */}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          
          {/* Course overview pages */}
          <Route path="/courses/scratch" element={<Scratch />} />
          <Route path="/courses/robloxlua" element={<RobloxLua />} />
          <Route path="/courses/minecraft-modding" element={<MinecraftModding />} />
          <Route path="/courses/python" element={<Python />} />
          <Route path="/courses/gdevelop" element={<GDevelop />} />
          <Route path="/courses/alice3" element={<Alice3 />} />
          <Route path="/courses/appinventor" element={<AppInventor />} />
          <Route path="/courses/construct3" element={<Construct3 />} />
          <Route path="/courses/godot" element={<Godot />} />
          <Route path="/courses/greenfoot" element={<Greenfoot />} />
          <Route path="/courses/frontenddev" element={<FrontendDev />} />
          <Route path="/courses/lego-spike-essentials" element={<LegoSpikeEssentials />} />
          <Route path="/courses/lego-spike-prime" element={<LegoSpikePrime />} />
          <Route path="/courses/microbit-explorers" element={<MicrobitExplorers />} />
          <Route path="/courses/microbitarcade" element={<MicrobitArcade />} />

          {/* Admin routes */}
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

          {/* Student dashboard */}
          <Route 
            path="/student/dashboard" 
            element={
              <ProtectedRoute requiredRole="student">
                <StudentDashboard />
              </ProtectedRoute>
            } 
          />

          {/* Scratch course sessions */}
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

          {/* Frontend Development sessions */}
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

          {/* Python sessions */}
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

          {/* RobloxLua sessions */}
          <Route 
            path="/robloxlua/session1" 
            element={
              <CourseAccessGuard courseSlug="robloxlua">
                <Session1RobloxLua />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/robloxlua/session1introducere" 
            element={
              <CourseAccessGuard courseSlug="robloxlua">
                <Session1IntroducereRoblox />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/robloxlua/session2quizgame" 
            element={
              <CourseAccessGuard courseSlug="robloxlua">
                <Session2QuizGameRoblox />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/robloxlua/session3constructiiscripturi"
            element={
              <CourseAccessGuard courseSlug="robloxlua">
                <Session3ConstructiiScripturiRoblox />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/robloxlua/session4obby" 
            element={
              <CourseAccessGuard courseSlug="robloxlua">
                <Session4ObbyRoblox />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/robloxlua/session5npccreator" 
            element={
              <CourseAccessGuard courseSlug="robloxlua">
                <Session5NPCCreatorRoblox />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/robloxlua/session6createanimations" 
            element={
              <CourseAccessGuard courseSlug="robloxlua">
                <Session6CreateAnimationsRoblox />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/robloxlua/session7shop" 
            element={
              <CourseAccessGuard courseSlug="robloxlua">
                <Session7ShopRoblox />
              </CourseAccessGuard>
            } 
          />

          {/* MinecraftModding sessions */}
          <Route 
            path="/minecraft-modding/session1" 
            element={
              <CourseAccessGuard courseSlug="minecraft-modding">
                <Session1MinecraftModding />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/minecraft-modding/session4" 
            element={
              <CourseAccessGuard courseSlug="minecraft-modding">
                <Session4MinecraftModding />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/minecraft-modding/session5" 
            element={
              <CourseAccessGuard courseSlug="minecraft-modding">
                <Session5MinecraftModding />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/minecraft-modding/session6" 
            element={
              <CourseAccessGuard courseSlug="minecraft-modding">
                <Session6MinecraftModding />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/minecraft-modding/session7" 
            element={
              <CourseAccessGuard courseSlug="minecraft-modding">
                <Session7MinecraftModding />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/minecraft-modding/session8" 
            element={
              <CourseAccessGuard courseSlug="minecraft-modding">
                <Session8MinecraftModding />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/minecraft-modding/session9" 
            element={
              <CourseAccessGuard courseSlug="minecraft-modding">
                <Session9MinecraftModding />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/minecraft-modding/session10" 
            element={
              <CourseAccessGuard courseSlug="minecraft-modding">
                <Session10MinecraftModding />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/minecraft-modding/session11" 
            element={
              <CourseAccessGuard courseSlug="minecraft-modding">
                <Session11MinecraftModding />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/minecraft-modding/session12" 
            element={
              <CourseAccessGuard courseSlug="minecraft-modding">
                <Session12MinecraftModding />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/minecraft-modding/session13"
            element={
              <CourseAccessGuard courseSlug="minecraft-modding">
                <Session13MinecraftModding />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/minecraft-modding/session14" 
            element={
              <CourseAccessGuard courseSlug="minecraft-modding">
                <Session14MinecraftModding />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/minecraft-modding/crystalrealm" 
            element={
              <CourseAccessGuard courseSlug="minecraft-modding">
                <CrystalRealmMinecraft />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/minecraft-modding/rubyarmor" 
            element={
              <CourseAccessGuard courseSlug="minecraft-modding">
                <RubyArmorMinecraft />
              </CourseAccessGuard>
            } 
          />

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
                <Session7GDevelop />
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

          {/* 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
