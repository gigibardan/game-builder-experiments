
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import ProtectedRoute from '@/components/ProtectedRoute';
import Index from '@/pages/Index';
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

// Session pages would be imported here when created

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
          <Route path="/" element={<Index />} />
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
