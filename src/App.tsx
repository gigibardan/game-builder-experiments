
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Session1 from "./pages/Session1";
import LessonTemplate from "./pages/LessonTemplate";
import AuthPage from "./pages/auth/AuthPage";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Dashboard from "./pages/admin/Dashboard";
import UserManagement from "./pages/admin/UserManagement";
import Unauthorized from "./pages/auth/Unauthorized";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

// Course imports
import Courses from "./pages/Courses";
import LegoSpikeEssentials from "./pages/courses/LegoSpikeEssentials";
import Python from "./pages/courses/Python";

// Scratch imports - using existing file names
import ScratchSession4 from "./pages/scratch/Session4CityRunner";
import ScratchSession6 from "./pages/scratch/Session6StitchBeach";
import ScratchSession8 from "./pages/scratch/Session8WizardsQuest";
import ScratchSession9 from "./pages/scratch/Session9RobotFootball";
import ScratchSession13 from "./pages/scratch/Session13";
import ScratchSession14 from "./pages/scratch/Session14";

// LEGO Spike Essentials imports
import Session1ClassicCarusel from "./pages/legoessentials/Session1ClassicCarusel";
import Session2FerrisWheel from "./pages/legoessentials/Session2FerrisWheel";
import Session3CableCar from "./pages/legoessentials/Session3CableCar";
import Session4TwirlingTeacups from "./pages/legoessentials/Session4TwirlingTeacups";
import Session5SnackStand from "./pages/legoessentials/Session5SnackStand";
import LegoSession6 from "./pages/legoessentials/Session6";
import LegoSession7 from "./pages/legoessentials/Session7";
import LegoSession8 from "./pages/legoessentials/Session8";
import LegoSession9 from "./pages/legoessentials/Session9";
import LegoSession10 from "./pages/legoessentials/Session10";
import LegoSession11 from "./pages/legoessentials/Session11";
import LegoSession12 from "./pages/legoessentials/Session12";
import LegoSession13 from "./pages/legoessentials/Session13";
import LegoSession14 from "./pages/legoessentials/Session14";

// App Inventor imports
import AppInventorSession1 from "./pages/appinventor/Session1";
import AppInventorSession2 from "./pages/appinventor/Session2";
import AppInventorSession3 from "./pages/appinventor/Session3";
import AppInventorSession4 from "./pages/appinventor/Session4";
import AppInventorSession5 from "./pages/appinventor/Session5";
import AppInventorSession6 from "./pages/appinventor/Session6";
import AppInventorSession7 from "./pages/appinventor/Session7";
import AppInventorSession8 from "./pages/appinventor/Session8";
import AppInventorSession9 from "./pages/appinventor/Session9";
import AppInventorSession10 from "./pages/appinventor/Session10";
import AppInventorSession11 from "./pages/appinventor/Session11";
import AppInventorSession12 from "./pages/appinventor/Session12";
import AppInventorSession13 from "./pages/appinventor/Session13";
import AppInventorSession14 from "./pages/appinventor/Session14";

// Alice3 imports
import Alice3Session1 from "./pages/alice3/Session1";
import Alice3Session1Adventure from "./pages/alice3/Session1Adventure";
import Alice3Session2SpaceGame from "./pages/alice3/Session2SpaceGame";
import Alice3Session3VirtualPet from "./pages/alice3/Session3VirtualPet";
import Alice3Session4Geometry from "./pages/alice3/Session4Geometry";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          
          {/* Course overview routes */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/lego-spike-essentials" element={<LegoSpikeEssentials />} />
          <Route path="/courses/python" element={<Python />} />

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

          {/* Protected lesson routes */}
          <Route path="/session1" element={
            <ProtectedRoute>
              <Session1 />
            </ProtectedRoute>
          } />
          <Route path="/lesson-template" element={
            <ProtectedRoute>
              <LessonTemplate />
            </ProtectedRoute>
          } />

          {/* Scratch course routes - only existing ones */}
          <Route path="/scratch/session4cityrunner" element={<ScratchSession4 />} />
          <Route path="/scratch/session6stitchbeach" element={<ScratchSession6 />} />
          <Route path="/scratch/session8wizardsquest" element={<ScratchSession8 />} />
          <Route path="/scratch/session9robotfootball" element={<ScratchSession9 />} />
          <Route path="/scratch/session13" element={<ScratchSession13 />} />
          <Route path="/scratch/session14" element={<ScratchSession14 />} />

          {/* LEGO Spike Essentials routes */}
          <Route path="/legoessentials/session1classiccarusel" element={<Session1ClassicCarusel />} />
          <Route path="/legoessentials/session2ferriswheel" element={<Session2FerrisWheel />} />
          <Route path="/legoessentials/session3cablecar" element={<Session3CableCar />} />
          <Route path="/legoessentials/session4twirlingteacups" element={<Session4TwirlingTeacups />} />
          <Route path="/legoessentials/session5snackstand" element={<Session5SnackStand />} />
          <Route path="/legoessentials/session6" element={<LegoSession6 />} />
          <Route path="/legoessentials/session7" element={<LegoSession7 />} />
          <Route path="/legoessentials/session8" element={<LegoSession8 />} />
          <Route path="/legoessentials/session9" element={<LegoSession9 />} />
          <Route path="/legoessentials/session10" element={<LegoSession10 />} />
          <Route path="/legoessentials/session11" element={<LegoSession11 />} />
          <Route path="/legoessentials/session12" element={<LegoSession12 />} />
          <Route path="/legoessentials/session13" element={<LegoSession13 />} />
          <Route path="/legoessentials/session14" element={<LegoSession14 />} />

          {/* App Inventor routes */}
          <Route path="/appinventor/session1" element={<AppInventorSession1 />} />
          <Route path="/appinventor/session2" element={<AppInventorSession2 />} />
          <Route path="/appinventor/session3" element={<AppInventorSession3 />} />
          <Route path="/appinventor/session4" element={<AppInventorSession4 />} />
          <Route path="/appinventor/session5" element={<AppInventorSession5 />} />
          <Route path="/appinventor/session6" element={<AppInventorSession6 />} />
          <Route path="/appinventor/session7" element={<AppInventorSession7 />} />
          <Route path="/appinventor/session8" element={<AppInventorSession8 />} />
          <Route path="/appinventor/session9" element={<AppInventorSession9 />} />
          <Route path="/appinventor/session10" element={<AppInventorSession10 />} />
          <Route path="/appinventor/session11" element={<AppInventorSession11 />} />
          <Route path="/appinventor/session12" element={<AppInventorSession12 />} />
          <Route path="/appinventor/session13" element={<AppInventorSession13 />} />
          <Route path="/appinventor/session14" element={<AppInventorSession14 />} />

          {/* Alice3 routes */}
          <Route path="/alice3/session1" element={<Alice3Session1 />} />
          <Route path="/alice3/session1adventure" element={<Alice3Session1Adventure />} />
          <Route path="/alice3/session2spacegame" element={<Alice3Session2SpaceGame />} />
          <Route path="/alice3/session3virtualpet" element={<Alice3Session3VirtualPet />} />
          <Route path="/alice3/session4geometry" element={<Alice3Session4Geometry />} />

          {/* 404 route - must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
