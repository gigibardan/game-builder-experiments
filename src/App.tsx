
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

import Home from '@/pages/Home';
import Courses from '@/pages/Courses';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
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
import LegoSpikeEssentials from '@/pages/courses/LegoSpikeEssentials';
import LegoSpikePrime from '@/pages/courses/LegoSpikePrime';
import MicrobitExplorers from '@/pages/courses/MicrobitExplorers';

// Auth pages
import AuthPage from '@/pages/auth/AuthPage';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import Unauthorized from '@/pages/auth/Unauthorized';

// Admin pages
import Dashboard from '@/pages/admin/Dashboard';
import UserManagement from '@/pages/admin/UserManagement';
import ProjectStructure from '@/pages/admin/ProjectStructure';

// Student pages
import StudentDashboard from '@/pages/student/StudentDashboard';

// Session pages
import ProtectedRoute from '@/components/ProtectedRoute';
import CourseAccessGuard from '@/components/CourseAccessGuard';

// Scratch sessions
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

// App Inventor sessions
import AppInventorSession1 from '@/pages/appinventor/Session1';
import AppInventorSession2 from '@/pages/appinventor/Session2';
import AppInventorSession3 from '@/pages/appinventor/Session3';
import AppInventorSession4 from '@/pages/appinventor/Session4';
import AppInventorSession5 from '@/pages/appinventor/Session5';
import AppInventorSession6 from '@/pages/appinventor/Session6';
import AppInventorSession7 from '@/pages/appinventor/Session7';
import AppInventorSession8 from '@/pages/appinventor/Session8';
import AppInventorSession9 from '@/pages/appinventor/Session9';

// Construct3 sessions
import Construct3Session1 from '@/pages/construct3/Session1';
import Construct3Session2 from '@/pages/construct3/Session2';

// Alice3 sessions
import Alice3Session1 from '@/pages/alice3/Session1';
import Alice3Session1Adventure from '@/pages/alice3/Session1Adventure';
import Alice3Session2SpaceGame from '@/pages/alice3/Session2SpaceGame';
import Alice3Session3VirtualPet from '@/pages/alice3/Session3VirtualPet';
import Alice3Session4Geometry from '@/pages/alice3/Session4Geometry';

// GDevelop sessions
import GDevelopSession1 from '@/pages/gdevelop/Session1';
import GDevelopSession2 from '@/pages/gdevelop/Session2';
import GDevelopSession3 from '@/pages/gdevelop/Session3';
import GDevelopSession4 from '@/pages/gdevelop/Session4';
import GDevelopSession5 from '@/pages/gdevelop/Session5';
import GDevelopSession6 from '@/pages/gdevelop/Session6';
import GDevelopSession7 from '@/pages/gdevelop/Session7';
import GDevelopSession8 from '@/pages/gdevelop/Session8';
import GDevelopSession9 from '@/pages/gdevelop/Session9';
import GDevelopSession10 from '@/pages/gdevelop/Session10';
import GDevelopSession11 from '@/pages/gdevelop/Session11';
import GDevelopSession12 from '@/pages/gdevelop/Session12';
import GDevelopSession13 from '@/pages/gdevelop/Session13';
import GDevelopSession14 from '@/pages/gdevelop/Session14';

// Godot sessions
import GodotSession1 from '@/pages/godot/Session1';
import GodotSession2 from '@/pages/godot/Session2';
import GodotSession3 from '@/pages/godot/Session3';
import GodotSession4 from '@/pages/godot/Session4';
import GodotSession5 from '@/pages/godot/Session5';
import GodotSession6 from '@/pages/godot/Session6';
import GodotSession7 from '@/pages/godot/Session7';
import GodotSession8 from '@/pages/godot/Session8';
import GodotSession9 from '@/pages/godot/Session9';
import GodotSession10 from '@/pages/godot/Session10';
import GodotSession11 from '@/pages/godot/Session11';
import GodotSession12 from '@/pages/godot/Session12';
import GodotSession13 from '@/pages/godot/Session13';
import GodotSession14 from '@/pages/godot/Session14';
import SimpleGame from '@/pages/godot/SimpleGame';

// Greenfoot sessions
import GreenfootSession1 from '@/pages/greenfoot/Session1';
import GreenfootSession2 from '@/pages/greenfoot/Session2';
import GreenfootSession3 from '@/pages/greenfoot/Session3';
import GreenfootSession4 from '@/pages/greenfoot/Session4';
import GreenfootSession5 from '@/pages/greenfoot/Session5';
import GreenfootSession6 from '@/pages/greenfoot/Session6';
import GreenfootSession7 from '@/pages/greenfoot/Session7';
import GreenfootSession8 from '@/pages/greenfoot/Session8';
import GreenfootSession9 from '@/pages/greenfoot/Session9';
import GreenfootSession10 from '@/pages/greenfoot/Session10';
import GreenfootSession11 from '@/pages/greenfoot/Session11';
import GreenfootSession12 from '@/pages/greenfoot/Session12';
import GreenfootSession13 from '@/pages/greenfoot/Session13';
import GreenfootSession14 from '@/pages/greenfoot/Session14';

// Python sessions
import PythonSession1 from '@/pages/python/Session1';
import PythonSession2 from '@/pages/python/Session2';
import PythonSession3 from '@/pages/python/Session3';
import PythonSession4 from '@/pages/python/Session4';
import PythonSession5 from '@/pages/python/Session5';
import PythonSession6 from '@/pages/python/Session6';
import PythonSession7 from '@/pages/python/Session7';
import PythonSession8 from '@/pages/python/Session8';
import PythonSession9 from '@/pages/python/Session9';
import PythonSession10 from '@/pages/python/Session10';
import PythonSession11 from '@/pages/python/Session11';
import PythonSession12 from '@/pages/python/Session12';
import PythonSession13 from '@/pages/python/Session13';
import PythonSession14 from '@/pages/python/Session14';

// Frontend Dev sessions
import FrontendDevSession1 from '@/pages/frontenddev/Session1';
import FrontendDevSession2 from '@/pages/frontenddev/Session2';
import FrontendDevSession3 from '@/pages/frontenddev/Session3';
import FrontendDevSession4 from '@/pages/frontenddev/Session4';
import FrontendDevSession5 from '@/pages/frontenddev/Session5';
import FrontendDevSession6 from '@/pages/frontenddev/Session6';
import FrontendDevSession7 from '@/pages/frontenddev/Session7';
import FrontendDevSession8 from '@/pages/frontenddev/Session8';
import FrontendDevSession9 from '@/pages/frontenddev/Session9';
import FrontendDevSession10 from '@/pages/frontenddev/Session10';
import FrontendDevSession11 from '@/pages/frontenddev/Session11';
import FrontendDevSession12 from '@/pages/frontenddev/Session12';
import FrontendDevSession13 from '@/pages/frontenddev/Session13';
import FrontendDevSession14 from '@/pages/frontenddev/Session14';

// Minecraft Modding sessions
import MinecraftModdingSession1 from '@/pages/minecraftmodding/Session1';
import RubyArmor from '@/pages/minecraftmodding/RubyArmor';
import CrystalRealm from '@/pages/minecraftmodding/CrystalRealm';
import MinecraftModdingSession4 from '@/pages/minecraftmodding/Session4';
import MinecraftModdingSession5 from '@/pages/minecraftmodding/Session5';
import MinecraftModdingSession6 from '@/pages/minecraftmodding/Session6';
import MinecraftModdingSession7 from '@/pages/minecraftmodding/Session7';
import MinecraftModdingSession8 from '@/pages/minecraftmodding/Session8';
import MinecraftModdingSession9 from '@/pages/minecraftmodding/Session9';
import MinecraftModdingSession10 from '@/pages/minecraftmodding/Session10';
import MinecraftModdingSession11 from '@/pages/minecraftmodding/Session11';
import MinecraftModdingSession12 from '@/pages/minecraftmodding/Session12';
import MinecraftModdingSession13 from '@/pages/minecraftmodding/Session13';
import MinecraftModdingSession14 from '@/pages/minecraftmodding/Session14';

// Roblox Lua sessions
import RobloxLuaSession1 from '@/pages/robloxlua/Session1';
import RobloxLuaSession1Introducere from '@/pages/robloxlua/Session1Introducere';
import RobloxLuaSession2QuizGame from '@/pages/robloxlua/Session2QuizGame';
import RobloxLuaSession3ConstructiiScripturiIncepatori from '@/pages/robloxlua/Session3ConstructiiScripturiIncepatori';
import RobloxLuaSession4Obby from '@/pages/robloxlua/Session4Obby';
import RobloxLuaSession5NPCCreator from '@/pages/robloxlua/Session5NPCCreator';
import RobloxLuaSession6CreateAnimations from '@/pages/robloxlua/Session6CreateAnimations';
import RobloxLuaSession7Shop from '@/pages/robloxlua/Session7Shop';

// LEGO sessions
import Session1ClassicCarousel from '@/pages/legoessentials/Session1ClassicCarousel';
import Session2FerrisWheel from '@/pages/legoessentials/Session2FerrisWheel';
import Session3CableCar from '@/pages/legoessentials/Session3CableCar';
import Session4TwirlingTeacups from '@/pages/legoessentials/Session4TwirlingTeacups';
import Session5SnackStand from '@/pages/legoessentials/Session5SnackStand';

// Microbit sessions
import MicrobitArcadeSession1 from '@/pages/microbitarcade/Session1';
import MicrobitArcadeSession2 from '@/pages/microbitarcade/Session2';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Course index pages */}
            <Route path="/courses/scratch" element={<Scratch />} />
            <Route path="/courses/appinventor" element={<AppInventor />} />
            <Route path="/courses/construct3" element={<Construct3 />} />
            <Route path="/courses/gdevelop" element={<GDevelop />} />
            <Route path="/courses/alice3" element={<Alice3 />} />
            <Route path="/courses/microbit-arcade" element={<MicrobitArcade />} />
            <Route path="/courses/minecraft-modding" element={<MinecraftModding />} />
            <Route path="/courses/robloxlua" element={<RobloxLua />} />
            <Route path="/courses/python" element={<Python />} />
            <Route path="/courses/frontenddev" element={<FrontendDev />} />
            <Route path="/courses/greenfoot" element={<Greenfoot />} />
            <Route path="/courses/godot" element={<Godot />} />
            <Route path="/courses/lego-spike-essentials" element={<LegoSpikeEssentials />} />
            <Route path="/courses/lego-spike-prime" element={<LegoSpikePrime />} />
            <Route path="/courses/microbit-explorers" element={<MicrobitExplorers />} />

            {/* Protected admin routes */}
            <Route path="/admin/dashboard" element={
              <ProtectedRoute requiredRole="admin">
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/users" element={
              <ProtectedRoute requiredRole="admin">
                <UserManagement />
              </ProtectedRoute>
            } />
            <Route path="/admin/project-structure" element={
              <ProtectedRoute requiredRole="admin">
                <ProjectStructure />
              </ProtectedRoute>
            } />

            {/* Protected student routes */}
            <Route path="/student/dashboard" element={
              <ProtectedRoute requiredRole="student">
                <StudentDashboard />
              </ProtectedRoute>
            } />

            {/* Protected session routes with access guards */}
            {/* Scratch sessions */}
            <Route path="/scratch/session1-alegesanatos" element={
              <CourseAccessGuard courseSlug="scratch" sessionSlug="session1-alegesanatos">
                <Session1Alegesanatos />
              </CourseAccessGuard>
            } />
            <Route path="/scratch/session2-spacedodge" element={
              <CourseAccessGuard courseSlug="scratch" sessionSlug="session2-spacedodge">
                <Session2SpaceDodge />
              </CourseAccessGuard>
            } />
            <Route path="/scratch/session3-motoracer" element={
              <CourseAccessGuard courseSlug="scratch" sessionSlug="session3-motoracer">
                <Session3MotoRacer />
              </CourseAccessGuard>
            } />
            <Route path="/scratch/session4-cityrunner" element={
              <CourseAccessGuard courseSlug="scratch" sessionSlug="session4-cityrunner">
                <Session4CityRunner />
              </CourseAccessGuard>
            } />
            <Route path="/scratch/session5-beachballbounce" element={
              <CourseAccessGuard courseSlug="scratch" sessionSlug="session5-beachballbounce">
                <Session5BeachBallBounce />
              </CourseAccessGuard>
            } />
            <Route path="/scratch/session6-stitchbeach" element={
              <CourseAccessGuard courseSlug="scratch" sessionSlug="session6-stitchbeach">
                <Session6StitchBeach />
              </CourseAccessGuard>
            } />
            <Route path="/scratch/session7-cakequest" element={
              <CourseAccessGuard courseSlug="scratch" sessionSlug="session7-cakequest">
                <Session7cakequest />
              </CourseAccessGuard>
            } />
            <Route path="/scratch/session8-wizardsquest" element={
              <CourseAccessGuard courseSlug="scratch" sessionSlug="session8-wizardsquest">
                <Session8WizardsQuest />
              </CourseAccessGuard>
            } />
            <Route path="/scratch/session9-robotfootball" element={
              <CourseAccessGuard courseSlug="scratch" sessionSlug="session9-robotfootball">
                <Session9RobotFootball />
              </CourseAccessGuard>
            } />
            <Route path="/scratch/session10-flappyminecraft-part1" element={
              <CourseAccessGuard courseSlug="scratch" sessionSlug="session10-flappyminecraft-part1">
                <Session10FlappyMinecraftPart1 />
              </CourseAccessGuard>
            } />
            <Route path="/scratch/session10-flappyminecraft-part2" element={
              <CourseAccessGuard courseSlug="scratch" sessionSlug="session10-flappyminecraft-part2">
                <Session10FlappyMinecraftPart2 />
              </CourseAccessGuard>
            } />
            <Route path="/scratch/session11-eggdropper" element={
              <CourseAccessGuard courseSlug="scratch" sessionSlug="session11-eggdropper">
                <Session11EggDropper />
              </CourseAccessGuard>
            } />

            {/* App Inventor sessions */}
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

            {/* Python sessions */}
            <Route path="/python/session1" element={
              <CourseAccessGuard courseSlug="python" sessionSlug="session1">
                <PythonSession1 />
              </CourseAccessGuard>
            } />
            <Route path="/python/session2" element={
              <CourseAccessGuard courseSlug="python" sessionSlug="session2">
                <PythonSession2 />
              </CourseAccessGuard>
            } />
            <Route path="/python/session3" element={
              <CourseAccessGuard courseSlug="python" sessionSlug="session3">
                <PythonSession3 />
              </CourseAccessGuard>
            } />
            <Route path="/python/session4" element={
              <CourseAccessGuard courseSlug="python" sessionSlug="session4">
                <PythonSession4 />
              </CourseAccessGuard>
            } />
            <Route path="/python/session5" element={
              <CourseAccessGuard courseSlug="python" sessionSlug="session5">
                <PythonSession5 />
              </CourseAccessGuard>
            } />
            <Route path="/python/session6" element={
              <CourseAccessGuard courseSlug="python" sessionSlug="session6">
                <PythonSession6 />
              </CourseAccessGuard>
            } />
            <Route path="/python/session7" element={
              <CourseAccessGuard courseSlug="python" sessionSlug="session7">
                <PythonSession7 />
              </CourseAccessGuard>
            } />
            <Route path="/python/session8" element={
              <CourseAccessGuard courseSlug="python" sessionSlug="session8">
                <PythonSession8 />
              </CourseAccessGuard>
            } />
            <Route path="/python/session9" element={
              <CourseAccessGuard courseSlug="python" sessionSlug="session9">
                <PythonSession9 />
              </CourseAccessGuard>
            } />
            <Route path="/python/session10" element={
              <CourseAccessGuard courseSlug="python" sessionSlug="session10">
                <PythonSession10 />
              </CourseAccessGuard>
            } />
            <Route path="/python/session11" element={
              <CourseAccessGuard courseSlug="python" sessionSlug="session11">
                <PythonSession11 />
              </CourseAccessGuard>
            } />
            <Route path="/python/session12" element={
              <CourseAccessGuard courseSlug="python" sessionSlug="session12">
                <PythonSession12 />
              </CourseAccessGuard>
            } />
            <Route path="/python/session13" element={
              <CourseAccessGuard courseSlug="python" sessionSlug="session13">
                <PythonSession13 />
              </CourseAccessGuard>
            } />
            <Route path="/python/session14" element={
              <CourseAccessGuard courseSlug="python" sessionSlug="session14">
                <PythonSession14 />
              </CourseAccessGuard>
            } />

            {/* Minecraft Modding sessions */}
            <Route path="/minecraftmodding/session1" element={
              <CourseAccessGuard courseSlug="minecraftmodding" sessionSlug="session1">
                <MinecraftModdingSession1 />
              </CourseAccessGuard>
            } />
            <Route path="/minecraftmodding/ruby-armor" element={
              <CourseAccessGuard courseSlug="minecraftmodding" sessionSlug="ruby-armor">
                <RubyArmor />
              </CourseAccessGuard>
            } />
            <Route path="/minecraftmodding/crystal-realm" element={
              <CourseAccessGuard courseSlug="minecraftmodding" sessionSlug="crystal-realm">
                <CrystalRealm />
              </CourseAccessGuard>
            } />
            <Route path="/minecraftmodding/session4" element={
              <CourseAccessGuard courseSlug="minecraftmodding" sessionSlug="session4">
                <MinecraftModdingSession4 />
              </CourseAccessGuard>
            } />
            <Route path="/minecraftmodding/session5" element={
              <CourseAccessGuard courseSlug="minecraftmodding" sessionSlug="session5">
                <MinecraftModdingSession5 />
              </CourseAccessGuard>
            } />
            <Route path="/minecraftmodding/session6" element={
              <CourseAccessGuard courseSlug="minecraftmodding" sessionSlug="session6">
                <MinecraftModdingSession6 />
              </CourseAccessGuard>
            } />
            <Route path="/minecraftmodding/session7" element={
              <CourseAccessGuard courseSlug="minecraftmodding" sessionSlug="session7">
                <MinecraftModdingSession7 />
              </CourseAccessGuard>
            } />
            <Route path="/minecraftmodding/session8" element={
              <CourseAccessGuard courseSlug="minecraftmodding" sessionSlug="session8">
                <MinecraftModdingSession8 />
              </CourseAccessGuard>
            } />
            <Route path="/minecraftmodding/session9" element={
              <CourseAccessGuard courseSlug="minecraftmodding" sessionSlug="session9">
                <MinecraftModdingSession9 />
              </CourseAccessGuard>
            } />
            <Route path="/minecraftmodding/session10" element={
              <CourseAccessGuard courseSlug="minecraftmodding" sessionSlug="session10">
                <MinecraftModdingSession10 />
              </CourseAccessGuard>
            } />
            <Route path="/minecraftmodding/session11" element={
              <CourseAccessGuard courseSlug="minecraftmodding" sessionSlug="session11">
                <MinecraftModdingSession11 />
              </CourseAccessGuard>
            } />
            <Route path="/minecraftmodding/session12" element={
              <CourseAccessGuard courseSlug="minecraftmodding" sessionSlug="session12">
                <MinecraftModdingSession12 />
              </CourseAccessGuard>
            } />
            <Route path="/minecraftmodding/session13" element={
              <CourseAccessGuard courseSlug="minecraftmodding" sessionSlug="session13">
                <MinecraftModdingSession13 />
              </CourseAccessGuard>
            } />
            <Route path="/minecraftmodding/session14" element={
              <CourseAccessGuard courseSlug="minecraftmodding" sessionSlug="session14">
                <MinecraftModdingSession14 />
              </CourseAccessGuard>
            } />

            {/* Frontend Dev sessions */}
            <Route path="/frontenddev/session1" element={
              <CourseAccessGuard courseSlug="frontenddev" sessionSlug="session1">
                <FrontendDevSession1 />
              </CourseAccessGuard>
            } />
            <Route path="/frontenddev/session2" element={
              <CourseAccessGuard courseSlug="frontenddev" sessionSlug="session2">
                <FrontendDevSession2 />
              </CourseAccessGuard>
            } />
            <Route path="/frontenddev/session3" element={
              <CourseAccessGuard courseSlug="frontenddev" sessionSlug="session3">
                <FrontendDevSession3 />
              </CourseAccessGuard>
            } />
            <Route path="/frontenddev/session4" element={
              <CourseAccessGuard courseSlug="frontenddev" sessionSlug="session4">
                <FrontendDevSession4 />
              </CourseAccessGuard>
            } />
            <Route path="/frontenddev/session5" element={
              <CourseAccessGuard courseSlug="frontenddev" sessionSlug="session5">
                <FrontendDevSession5 />
              </CourseAccessGuard>
            } />
            <Route path="/frontenddev/session6" element={
              <CourseAccessGuard courseSlug="frontenddev" sessionSlug="session6">
                <FrontendDevSession6 />
              </CourseAccessGuard>
            } />
            <Route path="/frontenddev/session7" element={
              <CourseAccessGuard courseSlug="frontenddev" sessionSlug="session7">
                <FrontendDevSession7 />
              </CourseAccessGuard>
            } />
            <Route path="/frontenddev/session8" element={
              <CourseAccessGuard courseSlug="frontenddev" sessionSlug="session8">
                <FrontendDevSession8 />
              </CourseAccessGuard>
            } />
            <Route path="/frontenddev/session9" element={
              <CourseAccessGuard courseSlug="frontenddev" sessionSlug="session9">
                <FrontendDevSession9 />
              </CourseAccessGuard>
            } />
            <Route path="/frontenddev/session10" element={
              <CourseAccessGuard courseSlug="frontenddev" sessionSlug="session10">
                <FrontendDevSession10 />
              </CourseAccessGuard>
            } />
            <Route path="/frontenddev/session11" element={
              <CourseAccessGuard courseSlug="frontenddev" sessionSlug="session11">
                <FrontendDevSession11 />
              </CourseAccessGuard>
            } />
            <Route path="/frontenddev/session12" element={
              <CourseAccessGuard courseSlug="frontenddev" sessionSlug="session12">
                <FrontendDevSession12 />
              </CourseAccessGuard>
            } />
            <Route path="/frontenddev/session13" element={
              <CourseAccessGuard courseSlug="frontenddev" sessionSlug="session13">
                <FrontendDevSession13 />
              </CourseAccessGuard>
            } />
            <Route path="/frontenddev/session14" element={
              <CourseAccessGuard courseSlug="frontenddev" sessionSlug="session14">
                <FrontendDevSession14 />
              </CourseAccessGuard>
            } />

            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
