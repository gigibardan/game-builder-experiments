import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import AuthPage from '@/pages/auth/AuthPage';
import Unauthorized from '@/pages/auth/Unauthorized';
import Home from '@/pages/Home';
import Courses from '@/pages/Courses';
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import Scratch from '@/pages/courses/Scratch';
import AppInventor from '@/pages/courses/AppInventor';
import Python from '@/pages/courses/Python';
import Alice3 from '@/pages/courses/Alice3';
import FrontendDev from '@/pages/courses/FrontendDev';
import Godot from '@/pages/courses/Godot';
import Greenfoot from '@/pages/courses/Greenfoot';
import MinecraftModding from '@/pages/courses/MinecraftModding';
import GDevelop from '@/pages/courses/GDevelop';
import RobloxLua from '@/pages/courses/RobloxLua';
import NotFound from '@/pages/NotFound';
import ProtectedRoute from '@/components/ProtectedRoute';
import CourseAccessGuard from '@/components/CourseAccessGuard';
import Dashboard from '@/pages/admin/Dashboard';
import UserManagement from '@/pages/admin/UserManagement';
import StudentDashboard from '@/pages/student/StudentDashboard';
import Session1Alegesanatos from '@/pages/scratch/Session1Alegesanatos';
import Session2SpaceDodge from '@/pages/scratch/Session2SpaceDodge';
import Session3MotoRacer from '@/pages/scratch/Session3MotoRacer';
import Session4CityRunner from '@/pages/scratch/Session4CityRunner';
import Session5BeachBallBounce from '@/pages/scratch/Session5BeachBallBounce';
import Session6StitchBeach from '@/pages/scratch/Session6StitchBeach';
import Session7CakeQuest from '@/pages/scratch/Session7cakequest';
import Session8WizardsQuest from '@/pages/scratch/Session8WizardsQuest';
import Session9RobotFootball from './pages/scratch/Session9RobotFootball';
import Session10FlappyMinecraftPart1 from './pages/scratch/Session10FlappyMinecraftPart1';
import Session10FlappyMinecraftPart2 from './pages/scratch/Session10FlappyMinecraftPart2';
import Session11EggDropper from './pages/scratch/Session11EggDropper';
import AppInventorSession1 from '@/pages/appinventor/Session1';
import AppInventorSession2 from '@/pages/appinventor/Session2';
import AppInventorSession3 from '@/pages/appinventor/Session3';
import AppInventorSession4 from '@/pages/appinventor/Session4';
import AppInventorSession5 from '@/pages/appinventor/Session5';
import AppInventorSession7 from '@/pages/appinventor/Session7';
import PythonSession1 from '@/pages/python/Session1';
import Alice3Session1 from '@/pages/alice3/Session1';
import Session1Adventure from '@/pages/alice3/Session1Adventure';
import Session2SpaceGame from '@/pages/alice3/Session2SpaceGame';
import Session3VirtualPet from '@/pages/alice3/Session3VirtualPet';
import Session4Geometry from '@/pages/alice3/Session4Geometry';
import FrontendDevSession1 from '@/pages/frontenddev/Session1';
import GodotSession1 from '@/pages/godot/Session1';
import GodotSession2 from '@/pages/godot/Session2';
import GodotSession3 from '@/pages/godot/Session3';
import GodotSession4 from '@/pages/godot/Session4';
import GodotSession5 from '@/pages/godot/Session5';
import GodotSimpleGame from '@/pages/godot/SimpleGame';
import LessonTemplate from '@/pages/LessonTemplate';
import Session1 from '@/pages/minecraftmodding/Session1';
import RubyArmor from '@/pages/minecraftmodding/RubyArmor';
import CrystalRealm from '@/pages/minecraftmodding/CrystalRealm';
import GreenfootSession1 from '@/pages/greenfoot/Session1';
import GreenfootSession2 from '@/pages/greenfoot/Session2';
import GreenfootSession3 from '@/pages/greenfoot/Session3';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        
        {/* Student Dashboard */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Course pages with access control */}
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
        <Route path="/courses/gdevelop" element={
          <CourseAccessGuard courseSlug="gdevelop">
            <GDevelop />
          </CourseAccessGuard>
        } />
        <Route path="/courses/python" element={
          <CourseAccessGuard courseSlug="python">
            <Python />
          </CourseAccessGuard>
        } />
        <Route path="/courses/alice3" element={
          <CourseAccessGuard courseSlug="alice3">
            <Alice3 />
          </CourseAccessGuard>
        } />
        <Route path="/courses/frontenddev" element={
          <CourseAccessGuard courseSlug="frontenddev">
            <FrontendDev />
          </CourseAccessGuard>
        } />
        <Route path="/courses/godot" element={
          <CourseAccessGuard courseSlug="godot">
            <Godot />
          </CourseAccessGuard>
        } />
        <Route path="/courses/minecraft-modding" element={
          <CourseAccessGuard courseSlug="minecraft-modding">
            <MinecraftModding />
          </CourseAccessGuard>
        } />
        <Route path="/courses/greenfoot" element={
          <CourseAccessGuard courseSlug="greenfoot">
            <Greenfoot />
          </CourseAccessGuard>
        } />
        <Route path="/courses/robloxlua" element={
          <CourseAccessGuard courseSlug="robloxlua">
            <RobloxLua />
          </CourseAccessGuard>
        } />
        
        {/* Admin Routes - Protected */}
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute requireAdmin={true}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/users" 
          element={
            <ProtectedRoute requireAdmin={true}>
              <UserManagement />
            </ProtectedRoute>
          } 
        />
        
        {/* Scratch session routes with access control */}
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
            <Session7CakeQuest />
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

        {/* App Inventor session routes */}
        <Route path="/appinventor/session1" element={<AppInventorSession1 />} />
        <Route path="/appinventor/session2" element={<AppInventorSession2 />} />
        <Route path="/appinventor/session3" element={<AppInventorSession3 />} />
        <Route path="/appinventor/session4" element={<AppInventorSession4 />} />
        <Route path="/appinventor/session5" element={<AppInventorSession5 />} />
        <Route path="/appinventor/session7" element={<AppInventorSession7 />} />
        
        {/* Python session routes */}
        <Route path="/python/session1" element={<PythonSession1 />} />
        
        {/* Alice3 session routes */}
        <Route path="/alice3/session1" element={<Alice3Session1 />} />
        <Route path="/alice3/session1adventure" element={<Session1Adventure />} />
        <Route path="/alice3/session2spacegame" element={<Session2SpaceGame />} />
        <Route path="/alice3/session3virtualpet" element={<Session3VirtualPet />} />
        <Route path="/alice3/session4geometry" element={<Session4Geometry />} />
        
        {/* Frontend Development session routes */}
        <Route path="/frontenddev/session1" element={<FrontendDevSession1 />} />
        
        {/* Godot session routes */}
        <Route path="/godot/session1" element={<GodotSession1 />} />
        <Route path="/godot/session2" element={<GodotSession2 />} />
        <Route path="/godot/session3" element={<GodotSession3 />} />
        <Route path="/godot/session4" element={<GodotSession4 />} />
        <Route path="/godot/session5" element={<GodotSession5 />} />
        <Route path="/godot/game" element={<GodotSimpleGame />} />
        
        {/* Minecraft Modding session routes */}
        <Route path="/minecraftmodding/session1" element={<Session1 />} />
        <Route path="/minecraftmodding/ruby-armor" element={<RubyArmor />} />
        <Route path="/minecraftmodding/crystal-realm" element={<CrystalRealm />} />
        
        {/* Greenfoot session routes */}
        <Route path="/greenfoot/session1" element={<GreenfootSession1 />} />
        <Route path="/greenfoot/session2" element={<GreenfootSession2 />} />
        <Route path="/greenfoot/session3" element={<GreenfootSession3 />} />
        
        <Route path="/lesson-template" element={<LessonTemplate />} />

        {/* Catch all route - 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
