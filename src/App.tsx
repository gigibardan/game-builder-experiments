
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
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
import Scratch from "./pages/courses/Scratch";
import AppInventor from "./pages/courses/AppInventor";
import Alice3 from "./pages/courses/Alice3";
import Construct3 from "./pages/courses/Construct3";
import GDevelop from "./pages/courses/GDevelop";
import Greenfoot from "./pages/courses/Greenfoot";
import Godot from "./pages/courses/Godot";
import FrontendDev from "./pages/courses/FrontendDev";
import RobloxLua from "./pages/courses/RobloxLua";
import MinecraftModding from "./pages/courses/MinecraftModding";
import MicrobitArcade from "./pages/courses/MicrobitArcade";
import LegoSpikePrime from "./pages/courses/LegoSpikePrime";
import MicrobitExplorers from "./pages/courses/MicrobitExplorers";

// Scratch imports - redenumite pentru consistență
import ScratchSession1 from "./pages/scratch/Session1";
import ScratchSession2 from "./pages/scratch/Session2";
import ScratchSession3 from "./pages/scratch/Session3";
import ScratchSession4 from "./pages/scratch/Session4";
import ScratchSession5 from "./pages/scratch/Session5";
import ScratchSession6 from "./pages/scratch/Session6";
import ScratchSession7 from "./pages/scratch/Session7";
import ScratchSession8 from "./pages/scratch/Session8";
import ScratchSession9 from "./pages/scratch/Session9";
import ScratchSession10 from "./pages/scratch/Session10";
import ScratchSession11 from "./pages/scratch/Session11";
import ScratchSession12 from "./pages/scratch/Session12";
import ScratchSession13 from "./pages/scratch/Session13";
import ScratchSession14 from "./pages/scratch/Session14";

// LEGO Spike Essentials imports
import Session1ClassicCarousel from "./pages/legoessentials/Session1ClassicCarousel";
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

// Greenfoot imports
import GreenfootSession2 from "./pages/greenfoot/Session2";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          
          {/* Course overview routes */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/lego-spike-essentials" element={<LegoSpikeEssentials />} />
          <Route path="/courses/python" element={<Python />} />
          <Route path="/courses/scratch" element={<Scratch />} />
          <Route path="/courses/appinventor" element={<AppInventor />} />
          <Route path="/courses/alice3" element={<Alice3 />} />
          <Route path="/courses/construct3" element={<Construct3 />} />
          <Route path="/courses/gdevelop" element={<GDevelop />} />
          <Route path="/courses/greenfoot" element={<Greenfoot />} />
          <Route path="/courses/godot" element={<Godot />} />
          <Route path="/courses/frontenddev" element={<FrontendDev />} />
          <Route path="/courses/roblox-lua" element={<RobloxLua />} />
          <Route path="/courses/minecraft-modding" element={<MinecraftModding />} />
          <Route path="/courses/microbit-arcade" element={<MicrobitArcade />} />
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

          {/* Scratch course routes - structură consistentă */}
          <Route path="/scratch/session1" element={<ScratchSession1 />} />
          <Route path="/scratch/session2" element={<ScratchSession2 />} />
          <Route path="/scratch/session3" element={<ScratchSession3 />} />
          <Route path="/scratch/session4" element={<ScratchSession4 />} />
          <Route path="/scratch/session5" element={<ScratchSession5 />} />
          <Route path="/scratch/session6" element={<ScratchSession6 />} />
          <Route path="/scratch/session7" element={<ScratchSession7 />} />
          <Route path="/scratch/session8" element={<ScratchSession8 />} />
          <Route path="/scratch/session9" element={<ScratchSession9 />} />
          <Route path="/scratch/session10" element={<ScratchSession10 />} />
          <Route path="/scratch/session11" element={<ScratchSession11 />} />
          <Route path="/scratch/session12" element={<ScratchSession12 />} />
          <Route path="/scratch/session13" element={<ScratchSession13 />} />
          <Route path="/scratch/session14" element={<ScratchSession14 />} />

          {/* LEGO Spike Essentials routes */}
          <Route path="/legoessentials/session1" element={<Session1ClassicCarousel />} />
          <Route path="/legoessentials/session2" element={<Session2FerrisWheel />} />
          <Route path="/legoessentials/session3" element={<Session3CableCar />} />
          <Route path="/legoessentials/session4" element={<Session4TwirlingTeacups />} />
          <Route path="/legoessentials/session5" element={<Session5SnackStand />} />
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

          {/* Greenfoot routes */}
          <Route path="/greenfoot/session2" element={<GreenfootSession2 />} />

          {/* 404 route - must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
