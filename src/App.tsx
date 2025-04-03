
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

import HomePage from "./pages/HomePage";
import Curriculum from "./pages/Curriculum";
import NotFound from "./pages/NotFound";
import AppInventor from "./pages/courses/AppInventor";
import Scratch from "./pages/courses/Scratch";
import Construct3 from "./pages/courses/Construct3";
import GDevelop from "./pages/courses/GDevelop";
import Alice3 from "./pages/courses/Alice3";
import MicrobitArcade from "./pages/courses/MicrobitArcade";
import MinecraftModding from "./pages/courses/MinecraftModding";
import RobloxLua from "./pages/courses/RobloxLua";
import Python from "./pages/courses/Python";
import Greenfoot from "./pages/courses/Greenfoot";
import Godot from "./pages/courses/Godot";
import FrontendDev from "./pages/courses/FrontendDev";
import Session1 from "./pages/appinventor/Session1";
import Session2 from "./pages/appinventor/Session2";
import Session3 from "./pages/appinventor/Session3";
import Session4 from "./pages/appinventor/Session4";
import Session5 from "./pages/appinventor/Session5";
import Session6 from "./pages/appinventor/Session6";
import Session7 from "./pages/appinventor/Session7";
import Session8 from "./pages/appinventor/Session8";
import Session9 from "./pages/appinventor/Session9";
import ScratchSession1 from "./pages/scratch/Session1";
import ScratchSession2 from "./pages/scratch/Session2";
import Construct3Session1 from "./pages/construct3/Session1";
import GDevelopSession1 from "./pages/gdevelop/Session1";
import Alice3Session1 from "./pages/alice3/Session1";
import MicrobitArcadeSession1 from "./pages/microbitarcade/Session1";
import MinecraftModdingSession1 from "./pages/minecraftmodding/Session1";
import RobloxLuaSession1 from "./pages/robloxlua/Session1";
import PythonSession1 from "./pages/python/Session1";
import GreenfootSession1 from "./pages/greenfoot/Session1";
import GodotSession1 from "./pages/godot/Session1";
import FrontendDevSession1 from "./pages/frontenddev/Session1";

// Auth pages
import Login from "./pages/auth/Login";
import Unauthorized from "./pages/auth/Unauthorized";
import Dashboard from "./pages/admin/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Protected routes */}
          <Route path="/" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } />
          
          {/* Admin routes */}
          <Route path="/admin" element={
            <ProtectedRoute requireAdmin={true}>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          {/* Course routes */}
          <Route path="/courses/appinventor" element={
            <ProtectedRoute courseId="appinventor">
              <AppInventor />
            </ProtectedRoute>
          } />
          <Route path="/appinventor" element={
            <ProtectedRoute courseId="appinventor">
              <AppInventor />
            </ProtectedRoute>
          } />
          <Route path="/appinventor/session1" element={
            <ProtectedRoute courseId="appinventor" sessionId="session1">
              <Session1 />
            </ProtectedRoute>
          } />
          <Route path="/appinventor/session2" element={
            <ProtectedRoute courseId="appinventor" sessionId="session2">
              <Session2 />
            </ProtectedRoute>
          } />
          <Route path="/appinventor/session3" element={
            <ProtectedRoute courseId="appinventor" sessionId="session3">
              <Session3 />
            </ProtectedRoute>
          } />
          <Route path="/appinventor/session4" element={
            <ProtectedRoute courseId="appinventor" sessionId="session4">
              <Session4 />
            </ProtectedRoute>
          } />
          <Route path="/appinventor/session5" element={
            <ProtectedRoute courseId="appinventor" sessionId="session5">
              <Session5 />
            </ProtectedRoute>
          } />
          <Route path="/appinventor/session6" element={
            <ProtectedRoute courseId="appinventor" sessionId="session6">
              <Session6 />
            </ProtectedRoute>
          } />
          <Route path="/appinventor/session7" element={
            <ProtectedRoute courseId="appinventor" sessionId="session7">
              <Session7 />
            </ProtectedRoute>
          } />
          <Route path="/appinventor/session8" element={
            <ProtectedRoute courseId="appinventor" sessionId="session8">
              <Session8 />
            </ProtectedRoute>
          } />
          <Route path="/appinventor/session9" element={
            <ProtectedRoute courseId="appinventor" sessionId="session9">
              <Session9 />
            </ProtectedRoute>
          } />
          
          {/* Scratch routes */}
          <Route path="/courses/scratch" element={
            <ProtectedRoute courseId="scratch">
              <Scratch />
            </ProtectedRoute>
          } />
          <Route path="/scratch" element={
            <ProtectedRoute courseId="scratch">
              <Scratch />
            </ProtectedRoute>
          } />
          <Route path="/scratch/session1" element={
            <ProtectedRoute courseId="scratch" sessionId="session1">
              <ScratchSession1 />
            </ProtectedRoute>
          } />
          <Route path="/scratch/session2" element={
            <ProtectedRoute courseId="scratch" sessionId="session2">
              <ScratchSession2 />
            </ProtectedRoute>
          } />
          
          {/* Construct3 Routes */}
          <Route path="/courses/construct3" element={
            <ProtectedRoute courseId="construct3">
              <Construct3 />
            </ProtectedRoute>
          } />
          <Route path="/construct3" element={
            <ProtectedRoute courseId="construct3">
              <Construct3 />
            </ProtectedRoute>
          } />
          <Route path="/construct3/session1" element={
            <ProtectedRoute courseId="construct3" sessionId="session1">
              <Construct3Session1 />
            </ProtectedRoute>
          } />
          
          {/* GDevelop Routes */}
          <Route path="/courses/gdevelop" element={
            <ProtectedRoute courseId="gdevelop">
              <GDevelop />
            </ProtectedRoute>
          } />
          <Route path="/gdevelop" element={
            <ProtectedRoute courseId="gdevelop">
              <GDevelop />
            </ProtectedRoute>
          } />
          <Route path="/gdevelop/session1" element={
            <ProtectedRoute courseId="gdevelop" sessionId="session1">
              <GDevelopSession1 />
            </ProtectedRoute>
          } />
          
          {/* Alice3 Routes */}
          <Route path="/courses/alice3" element={
            <ProtectedRoute courseId="alice3">
              <Alice3 />
            </ProtectedRoute>
          } />
          <Route path="/alice3" element={
            <ProtectedRoute courseId="alice3">
              <Alice3 />
            </ProtectedRoute>
          } />
          <Route path="/alice3/session1" element={
            <ProtectedRoute courseId="alice3" sessionId="session1">
              <Alice3Session1 />
            </ProtectedRoute>
          } />
          
          {/* MicrobitArcade Routes */}
          <Route path="/courses/microbitarcade" element={
            <ProtectedRoute courseId="microbitarcade">
              <MicrobitArcade />
            </ProtectedRoute>
          } />
          <Route path="/microbitarcade" element={
            <ProtectedRoute courseId="microbitarcade">
              <MicrobitArcade />
            </ProtectedRoute>
          } />
          <Route path="/microbitarcade/session1" element={
            <ProtectedRoute courseId="microbitarcade" sessionId="session1">
              <MicrobitArcadeSession1 />
            </ProtectedRoute>
          } />
          
          {/* MinecraftModding Routes */}
          <Route path="/courses/minecraftmodding" element={
            <ProtectedRoute courseId="minecraftmodding">
              <MinecraftModding />
            </ProtectedRoute>
          } />
          <Route path="/minecraftmodding" element={
            <ProtectedRoute courseId="minecraftmodding">
              <MinecraftModding />
            </ProtectedRoute>
          } />
          <Route path="/minecraftmodding/session1" element={
            <ProtectedRoute courseId="minecraftmodding" sessionId="session1">
              <MinecraftModdingSession1 />
            </ProtectedRoute>
          } />
          
          {/* RobloxLua Routes */}
          <Route path="/courses/robloxlua" element={
            <ProtectedRoute courseId="robloxlua">
              <RobloxLua />
            </ProtectedRoute>
          } />
          <Route path="/robloxlua" element={
            <ProtectedRoute courseId="robloxlua">
              <RobloxLua />
            </ProtectedRoute>
          } />
          <Route path="/robloxlua/session1" element={
            <ProtectedRoute courseId="robloxlua" sessionId="session1">
              <RobloxLuaSession1 />
            </ProtectedRoute>
          } />
          
          {/* Python Routes */}
          <Route path="/courses/python" element={
            <ProtectedRoute courseId="python">
              <Python />
            </ProtectedRoute>
          } />
          <Route path="/python" element={
            <ProtectedRoute courseId="python">
              <Python />
            </ProtectedRoute>
          } />
          <Route path="/python/session1" element={
            <ProtectedRoute courseId="python" sessionId="session1">
              <PythonSession1 />
            </ProtectedRoute>
          } />
          
          {/* Greenfoot Routes */}
          <Route path="/courses/greenfoot" element={
            <ProtectedRoute courseId="greenfoot">
              <Greenfoot />
            </ProtectedRoute>
          } />
          <Route path="/greenfoot" element={
            <ProtectedRoute courseId="greenfoot">
              <Greenfoot />
            </ProtectedRoute>
          } />
          <Route path="/greenfoot/session1" element={
            <ProtectedRoute courseId="greenfoot" sessionId="session1">
              <GreenfootSession1 />
            </ProtectedRoute>
          } />
          
          {/* Godot Routes */}
          <Route path="/courses/godot" element={
            <ProtectedRoute courseId="godot">
              <Godot />
            </ProtectedRoute>
          } />
          <Route path="/godot" element={
            <ProtectedRoute courseId="godot">
              <Godot />
            </ProtectedRoute>
          } />
          <Route path="/godot/session1" element={
            <ProtectedRoute courseId="godot" sessionId="session1">
              <GodotSession1 />
            </ProtectedRoute>
          } />
          
          {/* Frontend Development Routes */}
          <Route path="/courses/frontenddev" element={
            <ProtectedRoute courseId="frontenddev">
              <FrontendDev />
            </ProtectedRoute>
          } />
          <Route path="/frontenddev" element={
            <ProtectedRoute courseId="frontenddev">
              <FrontendDev />
            </ProtectedRoute>
          } />
          <Route path="/frontenddev/session1" element={
            <ProtectedRoute courseId="frontenddev" sessionId="session1">
              <FrontendDevSession1 />
            </ProtectedRoute>
          } />
          
          {/* Rute vechi păstrate pentru compatibilitate */}
          <Route path="/curriculum" element={
            <ProtectedRoute>
              <Curriculum />
            </ProtectedRoute>
          } />
          
          {/* Ruta pentru pagini inexistente */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
