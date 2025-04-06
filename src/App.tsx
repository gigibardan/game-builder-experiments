import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import Home from '@/pages/Home';
import Courses from '@/pages/Courses';
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import Scratch from '@/pages/courses/Scratch';
import AppInventor from '@/pages/courses/AppInventor';
import Python from '@/pages/courses/Python';
import Alice3 from '@/pages/courses/Alice3';
import FrontendDev from '@/pages/courses/FrontendDev';
import Godot from '@/pages/courses/Godot';
import Unauthorized from '@/pages/auth/Unauthorized';
import ProtectedRoute from '@/components/ProtectedRoute';
import Dashboard from '@/pages/admin/Dashboard';
import ScratchSession1 from '@/pages/scratch/Session1';
import ScratchSession2 from '@/pages/scratch/Session2';
import ScratchSession3 from '@/pages/scratch/Session3';
import ScratchSession4 from '@/pages/scratch/Session4';
import Session1Alegesanatos from '@/pages/scratch/Session1Alegesanatos';
import Session2SpaceDodge from '@/pages/scratch/Session2SpaceDodge';
import AppInventorSession1 from '@/pages/appinventor/Session1';
import AppInventorSession2 from '@/pages/appinventor/Session2';
import AppInventorSession3 from '@/pages/appinventor/Session3';
import AppInventorSession4 from '@/pages/appinventor/Session4';
import AppInventorSession5 from '@/pages/appinventor/Session5';
import PythonSession1 from '@/pages/python/Session1';
import Alice3Session1 from '@/pages/alice3/Session1';
import FrontendDevSession1 from '@/pages/frontenddev/Session1';
import GodotSession1 from '@/pages/godot/Session1';
import GodotSession2 from '@/pages/godot/Session2';
import GodotSession3 from '@/pages/godot/Session3';
import GodotSession4 from '@/pages/godot/Session4';
import GodotSession5 from '@/pages/godot/Session5';
import GodotSimpleGame from '@/pages/godot/SimpleGame';
import LessonTemplate from '@/pages/LessonTemplate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      
      <Route path="/courses/scratch" element={<Scratch />} />
      <Route path="/courses/appinventor" element={<AppInventor />} />
      <Route path="/courses/python" element={<Python />} />
      <Route path="/courses/alice3" element={<Alice3 />} />
      <Route path="/courses/frontenddev" element={<FrontendDev />} />
      <Route path="/courses/godot" element={<Godot />} />
      
      <Route 
        path="/admin/dashboard" 
        element={
          <ProtectedRoute requireAdmin={true}>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      
      <Route path="/scratch/session1alegesanatos" element={<Session1Alegesanatos />} />
      <Route path="/scratch/session2spacedodge" element={<Session2SpaceDodge />} />
      
      <Route 
        path="/scratch/session1" 
        element={
          <ProtectedRoute courseId="scratch" sessionId="1">
            <ScratchSession1 />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/scratch/session2" 
        element={
          <ProtectedRoute courseId="scratch" sessionId="2">
            <ScratchSession2 />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/scratch/session3" 
        element={
          <ProtectedRoute courseId="scratch" sessionId="3">
            <ScratchSession3 />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/scratch/session4" 
        element={
          <ProtectedRoute courseId="scratch" sessionId="4">
            <ScratchSession4 />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/appinventor/session1" 
        element={
          <ProtectedRoute courseId="appinventor" sessionId="1">
            <AppInventorSession1 />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/appinventor/session2" 
        element={
          <ProtectedRoute courseId="appinventor" sessionId="2">
            <AppInventorSession2 />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/appinventor/session3" 
        element={
          <ProtectedRoute courseId="appinventor" sessionId="3">
            <AppInventorSession3 />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/appinventor/session4" 
        element={
          <ProtectedRoute courseId="appinventor" sessionId="4">
            <AppInventorSession4 />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/appinventor/session5" 
        element={
          <ProtectedRoute courseId="appinventor" sessionId="5">
            <AppInventorSession5 />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/python/session1" 
        element={
          <ProtectedRoute courseId="python" sessionId="1">
            <PythonSession1 />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/alice3/session1" 
        element={
          <ProtectedRoute courseId="alice3" sessionId="1">
            <Alice3Session1 />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/frontenddev/session1" 
        element={
          <ProtectedRoute courseId="frontenddev" sessionId="1">
            <FrontendDevSession1 />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/godot/session1" 
        element={
          <ProtectedRoute courseId="godot" sessionId="1">
            <GodotSession1 />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/godot/session2" 
        element={
          <ProtectedRoute courseId="godot" sessionId="2">
            <GodotSession2 />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/godot/session3" 
        element={
          <ProtectedRoute courseId="godot" sessionId="3">
            <GodotSession3 />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/godot/session4" 
        element={
          <ProtectedRoute courseId="godot" sessionId="4">
            <GodotSession4 />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/godot/session5" 
        element={
          <ProtectedRoute courseId="godot" sessionId="5">
            <GodotSession5 />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/godot/game" 
        element={
          <ProtectedRoute courseId="godot" sessionId="game">
            <GodotSimpleGame />
          </ProtectedRoute>
        } 
      />
      
      <Route path="/lesson-template" element={<LessonTemplate />} />
    </Routes>
  );
}

export default App;
