
import { Database } from '@/integrations/supabase/types';

export enum UserRole {
  USER = 'student',
  ADMIN = 'admin'
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  courseAccess: {
    courseId: string;
    sessions: string[];
  }[];
}

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Course = Database['public']['Tables']['courses']['Row'];
export type Session = Database['public']['Tables']['sessions']['Row'];
export type UserAccess = Database['public']['Tables']['user_access']['Row'];

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  hasAccessToCourse: (courseId: string) => boolean;
  hasAccessToSession: (courseId: string, sessionId: string) => boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  updateUserPassword?: (userId: string, newPassword: string) => Promise<boolean>;
}
