import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import EditCourse from './pages/EditCourse';
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
import MinecraftModdingSession2 from './pages/minecraftmodding/Session2';
import MinecraftModdingSession3 from './pages/minecraftmodding/Session3';
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

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!loading) {
      setIsAuthenticated(!!user);
    }
  }, [user, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
   const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (!loading && user) {
            setIsAdmin(user.role === 'admin');
        }
    }, [user, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAdmin ? <>{children}</> : <Navigate to="/" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/edit-course/:courseId" element={<AdminRoute><EditCourse /></AdminRoute>} />

          {/* Greenfoot Routes */}
          <Route path="/greenfoot" element={<Greenfoot />} />
          <Route path="/greenfoot/session1" element={<ProtectedRoute><GreenfootSession1 /></ProtectedRoute>} />
          <Route path="/greenfoot/session2" element={<ProtectedRoute><GreenfootSession2 /></ProtectedRoute>} />
          <Route path="/greenfoot/session3" element={<ProtectedRoute><GreenfootSession3 /></ProtectedRoute>} />
          <Route path="/greenfoot/session4" element={<ProtectedRoute><GreenfootSession4 /></ProtectedRoute>} />
          <Route path="/greenfoot/session5" element={<ProtectedRoute><GreenfootSession5 /></ProtectedRoute>} />
          <Route path="/greenfoot/session6" element={<ProtectedRoute><GreenfootSession6 /></ProtectedRoute>} />
          <Route path="/greenfoot/session7" element={<ProtectedRoute><GreenfootSession7 /></ProtectedRoute>} />
          <Route path="/greenfoot/session8" element={<ProtectedRoute><GreenfootSession8 /></ProtectedRoute>} />
          <Route path="/greenfoot/session9" element={<ProtectedRoute><GreenfootSession9 /></ProtectedRoute>} />
          <Route path="/greenfoot/session10" element={<ProtectedRoute><GreenfootSession10 /></ProtectedRoute>} />
          <Route path="/greenfoot/session11" element={<ProtectedRoute><GreenfootSession11 /></ProtectedRoute>} />
          <Route path="/greenfoot/session12" element={<ProtectedRoute><GreenfootSession12 /></ProtectedRoute>} />
          <Route path="/greenfoot/session13" element={<ProtectedRoute><GreenfootSession13 /></ProtectedRoute>} />
          <Route path="/greenfoot/session14" element={<ProtectedRoute><GreenfootSession14 /></ProtectedRoute>} />

          {/* GDevelop Routes */}
          <Route path="/gdevelop" element={<GDevelop />} />
          <Route path="/gdevelop/session1" element={<ProtectedRoute><GDevelopSession1 /></ProtectedRoute>} />
          <Route path="/gdevelop/session2" element={<ProtectedRoute><GDevelopSession2 /></ProtectedRoute>} />
          <Route path="/gdevelop/session3" element={<ProtectedRoute><GDevelopSession3 /></ProtectedRoute>} />
          <Route path="/gdevelop/session4" element={<ProtectedRoute><GDevelopSession4 /></ProtectedRoute>} />
          <Route path="/gdevelop/session5" element={<ProtectedRoute><GDevelopSession5 /></ProtectedRoute>} />
          <Route path="/gdevelop/session6" element={<ProtectedRoute><GDevelopSession6 /></ProtectedRoute>} />
          <Route path="/gdevelop/session7" element={<ProtectedRoute><GDevelopSession7 /></ProtectedRoute>} />
          <Route path="/gdevelop/session8" element={<ProtectedRoute><GDevelopSession8 /></ProtectedRoute>} />
          <Route path="/gdevelop/session9" element={<ProtectedRoute><GDevelopSession9 /></ProtectedRoute>} />
          <Route path="/gdevelop/session10" element={<ProtectedRoute><GDevelopSession10 /></ProtectedRoute>} />
          <Route path="/gdevelop/session11" element={<ProtectedRoute><GDevelopSession11 /></ProtectedRoute>} />
          <Route path="/gdevelop/session12" element={<ProtectedRoute><GDevelopSession12 /></ProtectedRoute>} />
          <Route path="/gdevelop/session13" element={<ProtectedRoute><GDevelopSession13 /></ProtectedRoute>} />
          <Route path="/gdevelop/session14" element={<ProtectedRoute><GDevelopSession14 /></ProtectedRoute>} />

          {/* Godot Routes */}
          <Route path="/godot" element={<Godot />} />
          <Route path="/godot/session1" element={<ProtectedRoute><GodotSession1 /></ProtectedRoute>} />
          <Route path="/godot/session2" element={<ProtectedRoute><GodotSession2 /></ProtectedRoute>} />
          <Route path="/godot/session3" element={<ProtectedRoute><GodotSession3 /></ProtectedRoute>} />
          <Route path="/godot/session4" element={<ProtectedRoute><GodotSession4 /></ProtectedRoute>} />
          <Route path="/godot/session5" element={<ProtectedRoute><GodotSession5 /></ProtectedRoute>} />
          <Route path="/godot/session6" element={<ProtectedRoute><GodotSession6 /></ProtectedRoute>} />
          <Route path="/godot/session7" element={<ProtectedRoute><GodotSession7 /></ProtectedRoute>} />
          <Route path="/godot/session8" element={<ProtectedRoute><GodotSession8 /></ProtectedRoute>} />
          <Route path="/godot/session9" element={<ProtectedRoute><GodotSession9 /></ProtectedRoute>} />
          <Route path="/godot/session10" element={<ProtectedRoute><GodotSession10 /></ProtectedRoute>} />
          <Route path="/godot/session11" element={<ProtectedRoute><GodotSession11 /></ProtectedRoute>} />
          <Route path="/godot/session12" element={<ProtectedRoute><GodotSession12 /></ProtectedRoute>} />
          <Route path="/godot/session13" element={<ProtectedRoute><GodotSession13 /></ProtectedRoute>} />
          <Route path="/godot/session14" element={<ProtectedRoute><GodotSession14 /></ProtectedRoute>} />

          {/* Minecraft Modding Routes */}
          <Route path="/minecraftmodding" element={<MinecraftModding />} />
          <Route path="/minecraftmodding/session1" element={<ProtectedRoute><MinecraftModdingSession1 /></ProtectedRoute>} />
          <Route path="/minecraftmodding/session2" element={<ProtectedRoute><MinecraftModdingSession2 /></ProtectedRoute>} />
          <Route path="/minecraftmodding/session3" element={<ProtectedRoute><MinecraftModdingSession3 /></ProtectedRoute>} />
          <Route path="/minecraftmodding/crystal-realm" element={<ProtectedRoute><CrystalRealm /></ProtectedRoute>} />
          <Route path="/minecraftmodding/ruby-armor" element={<ProtectedRoute><RubyArmor /></ProtectedRoute>} />
            <Route path="/minecraftmodding/session4" element={<ProtectedRoute><Session4MinecraftModding /></ProtectedRoute>} />
            <Route path="/minecraftmodding/session5" element={<ProtectedRoute><Session5MinecraftModding /></ProtectedRoute>} />
            <Route path="/minecraftmodding/session6" element={<ProtectedRoute><Session6MinecraftModding /></ProtectedRoute>} />
            <Route path="/minecraftmodding/session7" element={<ProtectedRoute><Session7MinecraftModding /></ProtectedRoute>} />
            <Route path="/minecraftmodding/session8" element={<ProtectedRoute><Session8MinecraftModding /></ProtectedRoute>} />
            <Route path="/minecraftmodding/session9" element={<ProtectedRoute><Session9MinecraftModding /></ProtectedRoute>} />
            <Route path="/minecraftmodding/session10" element={<ProtectedRoute><Session10MinecraftModding /></ProtectedRoute>} />
            <Route path="/minecraftmodding/session11" element={<ProtectedRoute><Session11MinecraftModding /></ProtectedRoute>} />
            <Route path="/minecraftmodding/session12" element={<ProtectedRoute><Session12MinecraftModding /></ProtectedRoute>} />
            <Route path="/minecraftmodding/session13" element={<ProtectedRoute><Session13MinecraftModding /></ProtectedRoute>} />
            <Route path="/minecraftmodding/session14" element={<ProtectedRoute><Session14MinecraftModding /></ProtectedRoute>} />

            {/* Frontend Development Routes */}
            <Route path="/frontenddev" element={<FrontendDev />} />
            <Route path="/frontenddev/session3" element={<ProtectedRoute><Session3FrontendDev /></ProtectedRoute>} />
            <Route path="/frontenddev/session4" element={<ProtectedRoute><Session4FrontendDev /></ProtectedRoute>} />
            <Route path="/frontenddev/session5" element={<ProtectedRoute><Session5FrontendDev /></ProtectedRoute>} />
            <Route path="/frontenddev/session6" element={<ProtectedRoute><Session6FrontendDev /></ProtectedRoute>} />
            <Route path="/frontenddev/session7" element={<ProtectedRoute><Session7FrontendDev /></ProtectedRoute>} />
            <Route path="/frontenddev/session8" element={<ProtectedRoute><Session8FrontendDev /></ProtectedRoute>} />
            <Route path="/frontenddev/session9" element={<ProtectedRoute><Session9FrontendDev /></ProtectedRoute>} />
            <Route path="/frontenddev/session10" element={<ProtectedRoute><Session10FrontendDev /></ProtectedRoute>} />
            <Route path="/frontenddev/session11" element={<ProtectedRoute><Session11FrontendDev /></ProtectedRoute>} />
            <Route path="/frontenddev/session12" element={<ProtectedRoute><Session12FrontendDev /></ProtectedRoute>} />
            <Route path="/frontenddev/session13" element={<ProtectedRoute><Session13FrontendDev /></ProtectedRoute>} />
            <Route path="/frontenddev/session14" element={<ProtectedRoute><Session14FrontendDev /></ProtectedRoute>} />

            {/* Python Routes */}
            <Route path="/python" element={<Python />} />
            <Route path="/python/session3" element={<ProtectedRoute><Session3Python /></ProtectedRoute>} />
            <Route path="/python/session4" element={<ProtectedRoute><Session4Python /></ProtectedRoute>} />
            <Route path="/python/session5" element={<ProtectedRoute><Session5Python /></ProtectedRoute>} />
            <Route path="/python/session6" element={<ProtectedRoute><Session6Python /></ProtectedRoute>} />
            <Route path="/python/session7" element={<ProtectedRoute><Session7Python /></ProtectedRoute>} />
            <Route path="/python/session8" element={<ProtectedRoute><Session8Python /></ProtectedRoute>} />
            <Route path="/python/session9" element={<ProtectedRoute><Session9Python /></ProtectedRoute>} />
            <Route path="/python/session10" element={<ProtectedRoute><Session10Python /></ProtectedRoute>} />
            <Route path="/python/session11" element={<ProtectedRoute><Session11Python /></ProtectedRoute>} />
            <Route path="/python/session12" element={<ProtectedRoute><Session12Python /></ProtectedRoute>} />
            <Route path="/python/session13" element={<ProtectedRoute><Session13Python /></ProtectedRoute>} />
            <Route path="/python/session14" element={<ProtectedRoute><Session14Python /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

// Add imports at the top
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
