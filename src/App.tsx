import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import Unauthorized from '@/pages/auth/Unauthorized';
import ProtectedRoute from '@/components/ProtectedRoute';
import Dashboard from '@/pages/admin/Dashboard';
import ScratchSession1 from '@/pages/scratch/Session1';
import ScratchSession2 from '@/pages/scratch/Session2';
import ScratchSession3 from '@/pages/scratch/Session3';
import ScratchSession4 from '@/pages/scratch/Session4';
import AppInventorSession1 from '@/pages/appinventor/Session1';
import AppInventorSession2 from '@/pages/appinventor/Session2';
import AppInventorSession3 from '@/pages/appinventor/Session3';
import PythonSession1 from '@/pages/python/Session1';
import Alice3Session1 from '@/pages/alice3/Session1';
import FrontendDevSession1 from '@/pages/frontenddev/Session1';
import LessonTemplate from '@/pages/LessonTemplate';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/courses/scratch",
    element: <Scratch />,
  },
  {
    path: "/courses/appinventor",
    element: <AppInventor />,
  },
  {
    path: "/courses/python",
    element: <Python />,
  },
  {
    path: "/courses/alice3",
    element: <Alice3 />,
  },
  {
    path: "/courses/frontenddev",
    element: <FrontendDev />,
  },
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute requireAdmin={true}>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/scratch/session1",
    element: (
      <ProtectedRoute courseId="scratch" sessionId="1">
        <ScratchSession1 />
      </ProtectedRoute>
    ),
  },
  {
    path: "/scratch/session2",
    element: (
      <ProtectedRoute courseId="scratch" sessionId="2">
        <ScratchSession2 />
      </ProtectedRoute>
    ),
  },
  {
    path: "/scratch/session3",
    element: (
      <ProtectedRoute courseId="scratch" sessionId="3">
        <ScratchSession3 />
      </ProtectedRoute>
    ),
  },
  {
    path: "/scratch/session4",
    element: (
      <ProtectedRoute courseId="scratch" sessionId="4">
        <ScratchSession4 />
      </ProtectedRoute>
    ),
  },
  {
    path: "/appinventor/session1",
    element: (
      <ProtectedRoute courseId="appinventor" sessionId="1">
        <AppInventorSession1 />
      </ProtectedRoute>
    ),
  },
  {
    path: "/appinventor/session2",
    element: (
      <ProtectedRoute courseId="appinventor" sessionId="2">
        <AppInventorSession2 />
      </ProtectedRoute>
    ),
  },
  {
    path: "/appinventor/session3",
    element: (
      <ProtectedRoute courseId="appinventor" sessionId="3">
        <AppInventorSession3 />
      </ProtectedRoute>
    ),
  },
  {
    path: "/python/session1",
    element: (
      <ProtectedRoute courseId="python" sessionId="1">
        <PythonSession1 />
      </ProtectedRoute>
    ),
  },
  {
    path: "/alice3/session1",
    element: (
      <ProtectedRoute courseId="alice3" sessionId="1">
        <Alice3Session1 />
      </ProtectedRoute>
    ),
  },
  {
    path: "/frontenddev/session1",
    element: (
      <ProtectedRoute courseId="frontenddev" sessionId="1">
        <FrontendDevSession1 />
      </ProtectedRoute>
    ),
  },
  {
    path: "/lesson-template",
    element: <LessonTemplate />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
