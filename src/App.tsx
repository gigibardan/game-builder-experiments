
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Curriculum from "./pages/Curriculum";
import Session1 from "./pages/Session1";
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
import Session2 from "./pages/appinventor/Session2";

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
