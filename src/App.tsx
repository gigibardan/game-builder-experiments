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

// Course session pages
import ScratchSession1 from './pages/courses/scratch/Session1';
import ScratchSession2 from './pages/courses/scratch/Session2';
import ScratchSession3 from './pages/courses/scratch/Session3';
import ScratchSession4 from './pages/courses/scratch/Session4';
import ScratchSession5 from './pages/courses/scratch/Session5';
import ScratchSession6 from './pages/courses/scratch/Session6';
import ScratchSession7 from './pages/courses/scratch/Session7';
import ScratchSession8 from './pages/courses/scratch/Session8';
import ScratchSession9 from './pages/courses/scratch/Session9';
import ScratchSession10 from './pages/courses/scratch/Session10';
import ScratchSession11 from './pages/courses/scratch/Session11';
import ScratchSession12 from './pages/courses/scratch/Session12';
import ScratchSession13 from './pages/courses/scratch/Session13';
import ScratchSession14 from './pages/courses/scratch/Session14';

// Components
import ProtectedRoute from './components/ProtectedRoute';
import CourseAccessGuard from './components/CourseAccessGuard';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClient client={queryClient}>
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
          <Route path="/courses/roblox-lua" element={<RobloxLua />} />
          <Route path="/courses/minecraft-modding" element={<MinecraftModding />} />
          <Route path="/courses/python" element={<Python />} />
          <Route path="/courses/gdevelop" element={<GDevelop />} />
          <Route path="/courses/alice3" element={<Alice3 />} />
          <Route path="/courses/app-inventor" element={<AppInventor />} />
          <Route path="/courses/construct3" element={<Construct3 />} />
          <Route path="/courses/godot" element={<Godot />} />
          <Route path="/courses/greenfoot" element={<Greenfoot />} />
          <Route path="/courses/frontend-dev" element={<FrontendDev />} />
          <Route path="/courses/lego-spike-essentials" element={<LegoSpikeEssentials />} />
          <Route path="/courses/lego-spike-prime" element={<LegoSpikePrime />} />
          <Route path="/courses/microbit-explorers" element={<MicrobitExplorers />} />
          <Route path="/courses/microbit-arcade" element={<MicrobitArcade />} />

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
            path="/courses/scratch/session1" 
            element={
              <CourseAccessGuard course="scratch">
                <ScratchSession1 />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/courses/scratch/session2" 
            element={
              <CourseAccessGuard course="scratch">
                <ScratchSession2 />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/courses/scratch/session3" 
            element={
              <CourseAccessGuard course="scratch">
                <ScratchSession3 />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/courses/scratch/session4" 
            element={
              <CourseAccessGuard course="scratch">
                <ScratchSession4 />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/courses/scratch/session5" 
            element={
              <CourseAccessGuard course="scratch">
                <ScratchSession5 />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/courses/scratch/session6" 
            element={
              <CourseAccessGuard course="scratch">
                <ScratchSession6 />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/courses/scratch/session7" 
            element={
              <CourseAccessGuard course="scratch">
                <ScratchSession7 />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/courses/scratch/session8" 
            element={
              <CourseAccessGuard course="scratch">
                <ScratchSession8 />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/courses/scratch/session9" 
            element={
              <CourseAccessGuard course="scratch">
                <ScratchSession9 />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/courses/scratch/session10" 
            element={
              <CourseAccessGuard course="scratch">
                <ScratchSession10 />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/courses/scratch/session11" 
            element={
              <CourseAccessGuard course="scratch">
                <ScratchSession11 />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/courses/scratch/session12" 
            element={
              <CourseAccessGuard course="scratch">
                <ScratchSession12 />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/courses/scratch/session13" 
            element={
              <CourseAccessGuard course="scratch">
                <ScratchSession13 />
              </CourseAccessGuard>
            } 
          />
          <Route 
            path="/courses/scratch/session14" 
            element={
              <CourseAccessGuard course="scratch">
                <ScratchSession14 />
              </CourseAccessGuard>
            } 
          />

          {/* 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClient>
  );
}

export default App;
