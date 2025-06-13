
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

// Alice3 sessions
import Session1Alice from './pages/alice3/Session1';

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

          {/* Alice3 sessions */}
          <Route 
            path="/alice3/session1" 
            element={
              <CourseAccessGuard courseSlug="alice3">
                <Session1Alice />
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
