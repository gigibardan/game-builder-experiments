
import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

// Route components
import { PublicRoutes } from './routes/PublicRoutes';
import { AuthRoutes } from './routes/AuthRoutes';
import { AdminRoutes } from './routes/AdminRoutes';
import { StudentRoutes } from './routes/StudentRoutes';
import { CourseOverviewRoutes } from './routes/CourseOverviewRoutes';
import { CourseSessionRoutes } from './routes/CourseSessionRoutes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster />
        <Routes>
          {PublicRoutes()}
          {AuthRoutes()}
          {AdminRoutes()}
          {StudentRoutes()}
          {CourseOverviewRoutes()}
          {CourseSessionRoutes()}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
