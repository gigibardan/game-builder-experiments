
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Greenfoot from './pages/courses/Greenfoot';
import GDevelop from './pages/courses/GDevelop';
import Godot from './pages/courses/Godot';
import FrontendDev from './pages/courses/FrontendDev';
import Python from './pages/courses/Python';
import MinecraftModding from './pages/courses/MinecraftModding';
import GreenfootSession1 from './pages/greenfoot/Session1';
import GreenfootSession2 from './pages/greenfoot/Session2';
import GreenfootSession3 from './pages/greenfoot/Session3';
import GreenfootSession4 from './pages/greenfoot/Session4';
import GreenfootSession5 from './pages/greenfoot/Session5';
import GreenfootSession6 from './pages/greenfoot/Session6';
import GreenfootSession7 from './pages/greenfoot/Session7';
import GreenfootSession8 from './pages/greenfoot/Session8';
import GreenfootSession9 from './pages/greenfoot/Session9';
import GreenfootSession10 from './pages/greenfoot/Session10';
import GreenfootSession11 from './pages/greenfoot/Session11';
import GreenfootSession12 from './pages/greenfoot/Session12';
import GreenfootSession13 from './pages/greenfoot/Session13';
import GreenfootSession14 from './pages/greenfoot/Session14';
import GDevelopSession1 from './pages/gdevelop/Session1';
import GDevelopSession2 from './pages/gdevelop/Session2';
import GDevelopSession3 from './pages/gdevelop/Session3';
import GDevelopSession4 from './pages/gdevelop/Session4';
import GDevelopSession5 from './pages/gdevelop/Session5';
import GDevelopSession6 from './pages/gdevelop/Session6';
import GDevelopSession7 from './pages/gdevelop/Session7';
import GDevelopSession8 from './pages/gdevelop/Session8';
import GDevelopSession9 from './pages/gdevelop/Session9';
import GDevelopSession10 from './pages/gdevelop/Session10';
import GDevelopSession11 from './pages/gdevelop/Session11';
import GDevelopSession12 from './pages/gdevelop/Session12';
import GDevelopSession13 from './pages/gdevelop/Session13';
import GDevelopSession14 from './pages/gdevelop/Session14';
import GodotSession1 from './pages/godot/Session1';
import GodotSession2 from './pages/godot/Session2';
import GodotSession3 from './pages/godot/Session3';
import GodotSession4 from './pages/godot/Session4';
import GodotSession5 from './pages/godot/Session5';
import GodotSession6 from './pages/godot/Session6';
import GodotSession7 from './pages/godot/Session7';
import GodotSession8 from './pages/godot/Session8';
import GodotSession9 from './pages/godot/Session9';
import GodotSession10 from './pages/godot/Session10';
import GodotSession11 from './pages/godot/Session11';
import GodotSession12 from './pages/godot/Session12';
import GodotSession13 from './pages/godot/Session13';
import GodotSession14 from './pages/godot/Session14';
import MinecraftModdingSession1 from './pages/minecraftmodding/Session1';
import CrystalRealm from './pages/minecraftmodding/CrystalRealm';
import RubyArmor from './pages/minecraftmodding/RubyArmor';
import Session4MinecraftModding from '@/pages/minecraftmodding/Session4';
import Session5MinecraftModding from '@/pages/minecraftmodding/Session5';
import Session6MinecraftModding from '@/pages/minecraftmodding/Session6';
import Session7MinecraftModding from '@/pages/minecraftmodding/Session7';
import Session8MinecraftModding from '@/pages/minecraftmodding/Session8';
import Session9MinecraftModding from '@/pages/minecraftmodding/Session9';
import Session10MinecraftModding from '@/pages/minecraftmodding/Session10';
import Session11MinecraftModding from '@/pages/minecraftmodding/Session11';
import Session12MinecraftModding from '@/pages/minecraftmodding/Session12';
import Session13MinecraftModding from '@/pages/minecraftmodding/Session13';
import Session14MinecraftModding from '@/pages/minecraftmodding/Session14';
import Session3FrontendDev from '@/pages/frontenddev/Session3';
import Session4FrontendDev from '@/pages/frontenddev/Session4';
import Session5FrontendDev from '@/pages/frontenddev/Session5';
import Session6FrontendDev from '@/pages/frontenddev/Session6';
import Session7FrontendDev from '@/pages/frontenddev/Session7';
import Session8FrontendDev from '@/pages/frontenddev/Session8';
import Session9FrontendDev from '@/pages/frontenddev/Session9';
import Session10FrontendDev from '@/pages/frontenddev/Session10';
import Session11FrontendDev from '@/pages/frontenddev/Session11';
import Session12FrontendDev from '@/pages/frontenddev/Session12';
import Session13FrontendDev from '@/pages/frontenddev/Session13';
import Session14FrontendDev from '@/pages/frontenddev/Session14';
import Session3Python from '@/pages/python/Session3';
import Session4Python from '@/pages/python/Session4';
import Session5Python from '@/pages/python/Session5';
import Session6Python from '@/pages/python/Session6';
import Session7Python from '@/pages/python/Session7';
import Session8Python from '@/pages/python/Session8';
import Session9Python from '@/pages/python/Session9';
import Session10Python from '@/pages/python/Session10';
import Session11Python from '@/pages/python/Session11';
import Session12Python from '@/pages/python/Session12';
import Session13Python from '@/pages/python/Session13';
import Session14Python from '@/pages/python/Session14';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />

        {/* Greenfoot Routes */}
        <Route path="/greenfoot" element={<Greenfoot />} />
        <Route path="/greenfoot/session1" element={<GreenfootSession1 />} />
        <Route path="/greenfoot/session2" element={<GreenfootSession2 />} />
        <Route path="/greenfoot/session3" element={<GreenfootSession3 />} />
        <Route path="/greenfoot/session4" element={<GreenfootSession4 />} />
        <Route path="/greenfoot/session5" element={<GreenfootSession5 />} />
        <Route path="/greenfoot/session6" element={<GreenfootSession6 />} />
        <Route path="/greenfoot/session7" element={<GreenfootSession7 />} />
        <Route path="/greenfoot/session8" element={<GreenfootSession8 />} />
        <Route path="/greenfoot/session9" element={<GreenfootSession9 />} />
        <Route path="/greenfoot/session10" element={<GreenfootSession10 />} />
        <Route path="/greenfoot/session11" element={<GreenfootSession11 />} />
        <Route path="/greenfoot/session12" element={<GreenfootSession12 />} />
        <Route path="/greenfoot/session13" element={<GreenfootSession13 />} />
        <Route path="/greenfoot/session14" element={<GreenfootSession14 />} />

        {/* GDevelop Routes */}
        <Route path="/gdevelop" element={<GDevelop />} />
        <Route path="/gdevelop/session1" element={<GDevelopSession1 />} />
        <Route path="/gdevelop/session2" element={<GDevelopSession2 />} />
        <Route path="/gdevelop/session3" element={<GDevelopSession3 />} />
        <Route path="/gdevelop/session4" element={<GDevelopSession4 />} />
        <Route path="/gdevelop/session5" element={<GDevelopSession5 />} />
        <Route path="/gdevelop/session6" element={<GDevelopSession6 />} />
        <Route path="/gdevelop/session7" element={<GDevelopSession7 />} />
        <Route path="/gdevelop/session8" element={<GDevelopSession8 />} />
        <Route path="/gdevelop/session9" element={<GDevelopSession9 />} />
        <Route path="/gdevelop/session10" element={<GDevelopSession10 />} />
        <Route path="/gdevelop/session11" element={<GDevelopSession11 />} />
        <Route path="/gdevelop/session12" element={<GDevelopSession12 />} />
        <Route path="/gdevelop/session13" element={<GDevelopSession13 />} />
        <Route path="/gdevelop/session14" element={<GDevelopSession14 />} />

        {/* Godot Routes */}
        <Route path="/godot" element={<Godot />} />
        <Route path="/godot/session1" element={<GodotSession1 />} />
        <Route path="/godot/session2" element={<GodotSession2 />} />
        <Route path="/godot/session3" element={<GodotSession3 />} />
        <Route path="/godot/session4" element={<GodotSession4 />} />
        <Route path="/godot/session5" element={<GodotSession5 />} />
        <Route path="/godot/session6" element={<GodotSession6 />} />
        <Route path="/godot/session7" element={<GodotSession7 />} />
        <Route path="/godot/session8" element={<GodotSession8 />} />
        <Route path="/godot/session9" element={<GodotSession9 />} />
        <Route path="/godot/session10" element={<GodotSession10 />} />
        <Route path="/godot/session11" element={<GodotSession11 />} />
        <Route path="/godot/session12" element={<GodotSession12 />} />
        <Route path="/godot/session13" element={<GodotSession13 />} />
        <Route path="/godot/session14" element={<GodotSession14 />} />

        {/* Minecraft Modding Routes */}
        <Route path="/minecraftmodding" element={<MinecraftModding />} />
        <Route path="/minecraftmodding/session1" element={<MinecraftModdingSession1 />} />
        <Route path="/minecraftmodding/crystal-realm" element={<CrystalRealm />} />
        <Route path="/minecraftmodding/ruby-armor" element={<RubyArmor />} />
        <Route path="/minecraftmodding/session4" element={<Session4MinecraftModding />} />
        <Route path="/minecraftmodding/session5" element={<Session5MinecraftModding />} />
        <Route path="/minecraftmodding/session6" element={<Session6MinecraftModding />} />
        <Route path="/minecraftmodding/session7" element={<Session7MinecraftModding />} />
        <Route path="/minecraftmodding/session8" element={<Session8MinecraftModding />} />
        <Route path="/minecraftmodding/session9" element={<Session9MinecraftModding />} />
        <Route path="/minecraftmodding/session10" element={<Session10MinecraftModding />} />
        <Route path="/minecraftmodding/session11" element={<Session11MinecraftModding />} />
        <Route path="/minecraftmodding/session12" element={<Session12MinecraftModding />} />
        <Route path="/minecraftmodding/session13" element={<Session13MinecraftModding />} />
        <Route path="/minecraftmodding/session14" element={<Session14MinecraftModding />} />

        {/* Frontend Development Routes */}
        <Route path="/frontenddev" element={<FrontendDev />} />
        <Route path="/frontenddev/session3" element={<Session3FrontendDev />} />
        <Route path="/frontenddev/session4" element={<Session4FrontendDev />} />
        <Route path="/frontenddev/session5" element={<Session5FrontendDev />} />
        <Route path="/frontenddev/session6" element={<Session6FrontendDev />} />
        <Route path="/frontenddev/session7" element={<Session7FrontendDev />} />
        <Route path="/frontenddev/session8" element={<Session8FrontendDev />} />
        <Route path="/frontenddev/session9" element={<Session9FrontendDev />} />
        <Route path="/frontenddev/session10" element={<Session10FrontendDev />} />
        <Route path="/frontenddev/session11" element={<Session11FrontendDev />} />
        <Route path="/frontenddev/session12" element={<Session12FrontendDev />} />
        <Route path="/frontenddev/session13" element={<Session13FrontendDev />} />
        <Route path="/frontenddev/session14" element={<Session14FrontendDev />} />

        {/* Python Routes */}
        <Route path="/python" element={<Python />} />
        <Route path="/python/session3" element={<Session3Python />} />
        <Route path="/python/session4" element={<Session4Python />} />
        <Route path="/python/session5" element={<Session5Python />} />
        <Route path="/python/session6" element={<Session6Python />} />
        <Route path="/python/session7" element={<Session7Python />} />
        <Route path="/python/session8" element={<Session8Python />} />
        <Route path="/python/session9" element={<Session9Python />} />
        <Route path="/python/session10" element={<Session10Python />} />
        <Route path="/python/session11" element={<Session11Python />} />
        <Route path="/python/session12" element={<Session12Python />} />
        <Route path="/python/session13" element={<Session13Python />} />
        <Route path="/python/session14" element={<Session14Python />} />
      </Routes>
    </Router>
  );
}

export default App;
