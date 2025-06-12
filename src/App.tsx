
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

// Course session pages (using the correct existing paths)
import Session3MotoRacer from './pages/scratch/Session3MotoRacer';
import Session8WizardsQuest from './pages/scratch/Session8WizardsQuest';
import Session9RobotFootball from './pages/scratch/Session9RobotFootball';

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
          
          {/* Course overview pages - Fixed routes to match URLs */}
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

          {/* Scratch course sessions - only the ones that exist */}
          <Route 
            path="/scratch/session3motoracer" 
            element={
              <CourseAccessGuard courseSlug="scratch">
                <Session3MotoRacer />
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

          {/* 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
