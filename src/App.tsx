
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* App Inventor Routes */}
        <Route path="/courses/appinventor" element={<AppInventor />} />
        <Route path="/appinventor" element={<AppInventor />} />
        <Route path="/appinventor/session1" element={<Session1 />} />
        <Route path="/appinventor/session2" element={<Session2 />} />
        <Route path="/appinventor/session3" element={<Session3 />} />
        <Route path="/appinventor/session4" element={<Session4 />} />
        <Route path="/appinventor/session5" element={<Session5 />} />
        <Route path="/appinventor/session6" element={<Session6 />} />
        <Route path="/appinventor/session7" element={<Session7 />} />
        <Route path="/appinventor/session8" element={<Session8 />} />
        <Route path="/appinventor/session9" element={<Session9 />} />
        
        {/* Scratch Routes */}
        <Route path="/courses/scratch" element={<Scratch />} />
        <Route path="/scratch" element={<Scratch />} />
        <Route path="/scratch/session1" element={<ScratchSession1 />} />
        <Route path="/scratch/session2" element={<ScratchSession2 />} />
        
        {/* Construct3 Routes */}
        <Route path="/courses/construct3" element={<Construct3 />} />
        <Route path="/construct3" element={<Construct3 />} />
        <Route path="/construct3/session1" element={<Construct3Session1 />} />
        
        {/* GDevelop Routes */}
        <Route path="/courses/gdevelop" element={<GDevelop />} />
        <Route path="/gdevelop" element={<GDevelop />} />
        <Route path="/gdevelop/session1" element={<GDevelopSession1 />} />
        
        {/* Alice3 Routes */}
        <Route path="/courses/alice3" element={<Alice3 />} />
        <Route path="/alice3" element={<Alice3 />} />
        <Route path="/alice3/session1" element={<Alice3Session1 />} />
        
        {/* MicrobitArcade Routes */}
        <Route path="/courses/microbitarcade" element={<MicrobitArcade />} />
        <Route path="/microbitarcade" element={<MicrobitArcade />} />
        <Route path="/microbitarcade/session1" element={<MicrobitArcadeSession1 />} />
        
        {/* MinecraftModding Routes */}
        <Route path="/courses/minecraftmodding" element={<MinecraftModding />} />
        <Route path="/minecraftmodding" element={<MinecraftModding />} />
        <Route path="/minecraftmodding/session1" element={<MinecraftModdingSession1 />} />
        
        {/* RobloxLua Routes */}
        <Route path="/courses/robloxlua" element={<RobloxLua />} />
        <Route path="/robloxlua" element={<RobloxLua />} />
        <Route path="/robloxlua/session1" element={<RobloxLuaSession1 />} />
        
        {/* Python Routes */}
        <Route path="/courses/python" element={<Python />} />
        <Route path="/python" element={<Python />} />
        <Route path="/python/session1" element={<PythonSession1 />} />
        
        {/* Greenfoot Routes */}
        <Route path="/courses/greenfoot" element={<Greenfoot />} />
        <Route path="/greenfoot" element={<Greenfoot />} />
        <Route path="/greenfoot/session1" element={<GreenfootSession1 />} />
        
        {/* Godot Routes */}
        <Route path="/courses/godot" element={<Godot />} />
        <Route path="/godot" element={<Godot />} />
        <Route path="/godot/session1" element={<GodotSession1 />} />
        
        {/* Frontend Development Routes */}
        <Route path="/courses/frontenddev" element={<FrontendDev />} />
        <Route path="/frontenddev" element={<FrontendDev />} />
        <Route path="/frontenddev/session1" element={<FrontendDevSession1 />} />
        
        {/* Rute vechi păstrate pentru compatibilitate */}
        <Route path="/curriculum" element={<Curriculum />} />
        
        {/* Ruta pentru pagini inexistente */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
