
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from '@/hooks/useAuth'
import { Toaster } from 'sonner'

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <App />
    <Toaster position="top-right" />
  </AuthProvider>
);
