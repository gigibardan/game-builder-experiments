
import { useState, useEffect, createContext, useContext } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { Profile } from '@/types/database';

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  loading: boolean;
  hasAccessToCourse: (courseSlug: string) => boolean;
  hasAccessToSession: (courseSlug: string, sessionSlug: string) => boolean;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signUp: (email: string, password: string, username: string, firstName?: string, lastName?: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [userAccess, setUserAccess] = useState<{courseId: string, courseSlug?: string, sessionId?: string, sessionSlug?: string}[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (error) throw error;
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
      setProfile(null);
    }
  };

  const fetchUserAccess = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_access')
        .select(`
          course_id,
          session_id,
          courses!inner (slug),
          sessions (slug)
        `)
        .eq('user_id', userId);
      
      if (error) throw error;
      
      const accessData = data?.map(access => ({
        courseId: access.course_id,
        courseSlug: (access.courses as any)?.slug,
        sessionId: access.session_id,
        sessionSlug: (access.sessions as any)?.slug
      })) || [];
      
      setUserAccess(accessData);
    } catch (error) {
      console.error('Error fetching user access:', error);
      setUserAccess([]);
    }
  };

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          await fetchProfile(session.user.id);
          await fetchUserAccess(session.user.id);
        } else {
          setProfile(null);
          setUserAccess([]);
        }
        
        setLoading(false);
      }
    );

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        fetchProfile(session.user.id);
        fetchUserAccess(session.user.id);
      } else {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const hasAccessToCourse = (courseSlug: string) => {
    if (profile?.role === 'admin') return true;
    return userAccess.some(access => access.courseSlug === courseSlug);
  };

  const hasAccessToSession = (courseSlug: string, sessionSlug: string) => {
    if (profile?.role === 'admin') return true;
    return userAccess.some(access => 
      access.courseSlug === courseSlug && 
      (access.sessionSlug === sessionSlug || !access.sessionId) // Access to whole course or specific session
    );
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) return { error: error.message };
      return {};
    } catch (error) {
      return { error: 'A apărut o eroare neașteptată' };
    }
  };

  const signUp = async (email: string, password: string, username: string, firstName?: string, lastName?: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
            first_name: firstName,
            last_name: lastName,
          },
        },
      });
      
      if (error) return { error: error.message };
      return {};
    } catch (error) {
      return { error: 'A apărut o eroare neașteptată' };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const value = {
    user,
    profile,
    session,
    isAuthenticated: !!user,
    isAdmin: profile?.role === 'admin',
    loading,
    hasAccessToCourse,
    hasAccessToSession,
    signIn,
    signUp,
    signOut,
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
