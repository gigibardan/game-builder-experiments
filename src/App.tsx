
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* App Inventor Routes */}
          <Route path="/appinventor" element={<AppInventor />} />
          <Route path="/appinventor/session1" element={<Session1 />} />
          <Route path="/appinventor/session2" element={<Session2 />} />
          <Route path="/appinventor/session3" element={<Session3 />} />
          <Route path="/appinventor/session4" element={<Session4 />} />
          <Route path="/appinventor/session5" element={<Session5 />} />
          <Route path="/appinventor/session6" element={<Session6 />} />
          
          {/* Alte cursuri */}
          <Route path="/scratch" element={<Scratch />} />
          <Route path="/construct3" element={<Construct3 />} />
          <Route path="/gdevelop" element={<GDevelop />} />
          <Route path="/alice3" element={<Alice3 />} />
          <Route path="/microbit-arcade" element={<MicrobitArcade />} />
          <Route path="/minecraft-modding" element={<MinecraftModding />} />
          <Route path="/roblox-lua" element={<RobloxLua />} />
          <Route path="/python" element={<Python />} />
          <Route path="/greenfoot" element={<Greenfoot />} />
          <Route path="/godot" element={<Godot />} />
          <Route path="/frontend-dev" element={<FrontendDev />} />
          
          {/* Rute vechi păstrate pentru compatibilitate */}
          <Route path="/curriculum" element={<Curriculum />} />
          
          {/* Ruta pentru pagini inexistente */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
