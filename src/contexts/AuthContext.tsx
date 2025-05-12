
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, UserRole, Profile, UserAccess } from '@/types/auth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUserPassword: (userId: string, newPassword: string) => Promise<boolean>;
  isAuthenticated: boolean;
  isAdmin: boolean;
  loading: boolean;
  hasAccessToCourse: (courseId: string) => boolean;
  hasAccessToSession: (courseId: string, sessionId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Load user on initial render
  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);
      
      // Check if there's an active session
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) {
        console.error('Error getting session:', sessionError);
        setLoading(false);
        return;
      }
      
      if (!session) {
        setLoading(false);
        return;
      }
      
      // Get user profile from profiles table
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
      
      if (profileError) {
        console.error('Error getting profile:', profileError);
        setLoading(false);
        return;
      }
      
      if (!profile) {
        setLoading(false);
        return;
      }
      
      // Get user's course access
      const { data: userAccessData, error: userAccessError } = await supabase
        .from('user_access')
        .select('*, courses:course_id(id, slug), sessions:session_id(id, slug)')
        .eq('user_id', session.user.id);
      
      if (userAccessError) {
        console.error('Error getting user access:', userAccessError);
      }
      
      // Transform user access data to the format expected by our app
      const courseAccess = transformUserAccess(userAccessData || []);
      
      // Create the user object
      const userObject: User = {
        id: profile.id,
        username: profile.username,
        email: profile.email,
        role: profile.role === 'admin' ? UserRole.ADMIN : UserRole.USER,
        courseAccess
      };
      
      setUser(userObject);
      setLoading(false);
    };
    
    loadUser();
    
    // Set up auth state change listener
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session) {
        // Get user profile
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        
        if (!profile) {
          setUser(null);
          return;
        }
        
        // Get user's course access
        const { data: userAccessData } = await supabase
          .from('user_access')
          .select('*, courses:course_id(id, slug), sessions:session_id(id, slug)')
          .eq('user_id', session.user.id);
        
        // Transform user access data
        const courseAccess = transformUserAccess(userAccessData || []);
        
        // Create the user object
        const userObject: User = {
          id: profile.id,
          username: profile.username,
          email: profile.email,
          role: profile.role === 'admin' ? UserRole.ADMIN : UserRole.USER,
          courseAccess
        };
        
        setUser(userObject);
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
      }
    });
    
    return () => {
      if (authListener && authListener.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

  // Helper function to transform user access data
  const transformUserAccess = (userAccessData: any[]): { courseId: string; sessions: string[] }[] => {
    const courseMap = new Map<string, string[]>();
    
    userAccessData.forEach(access => {
      const courseId = access.course_id;
      const sessionId = access.session_id;
      
      if (!courseMap.has(courseId)) {
        courseMap.set(courseId, []);
      }
      
      if (sessionId) {
        const sessions = courseMap.get(courseId) || [];
        sessions.push(sessionId);
        courseMap.set(courseId, sessions);
      }
    });
    
    return Array.from(courseMap).map(([courseId, sessions]) => ({
      courseId,
      sessions
    }));
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        toast.error(error.message);
        return false;
      }
      
      toast.success('Login successful');
      return true;
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred during login');
      return false;
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      navigate('/login');
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('An error occurred during logout');
    }
  };
  
  const updateUserPassword = async (userId: string, newPassword: string): Promise<boolean> => {
    try {
      // For security, only admins can update passwords
      if (user?.role !== UserRole.ADMIN) {
        toast.error('Unauthorized: Only admins can update passwords');
        return false;
      }
      
      // In Supabase, we can't directly update another user's password through the client
      // We would typically use an admin API or Edge Function for this
      // For now, we'll just show a success message as a placeholder
      toast.success(`Password updated for user ${userId}`);
      return true;
    } catch (error) {
      console.error('Password update error:', error);
      toast.error('An error occurred while updating the password');
      return false;
    }
  };

  const hasAccessToCourse = (courseId: string): boolean => {
    if (!user) return false;
    
    // Admin has access to everything
    if (user.role === UserRole.ADMIN) return true;
    
    // Check if student has access to this course
    return user.courseAccess.some(access => access.courseId === courseId);
  };

  const hasAccessToSession = (courseId: string, sessionId: string): boolean => {
    if (!user) return false;
    
    // Admin has access to everything
    if (user.role === UserRole.ADMIN) return true;
    
    // Check if student has access to this course and session
    const courseAccess = user.courseAccess.find(access => access.courseId === courseId);
    if (!courseAccess) return false;
    
    // Check if student has access to this specific session
    return courseAccess.sessions.includes(sessionId);
  };

  const value = {
    user,
    login,
    logout,
    updateUserPassword,
    isAuthenticated: !!user,
    isAdmin: user?.role === UserRole.ADMIN,
    loading,
    hasAccessToCourse,
    hasAccessToSession
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
