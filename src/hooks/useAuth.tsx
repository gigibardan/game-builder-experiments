
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
      console.log('Fetching profile for user:', userId);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (error) {
        console.error('Error fetching profile:', error);
        setProfile(null);
        return null;
      }
      
      console.log('Profile fetched successfully:', data);
      setProfile(data);
      return data;
    } catch (error) {
      console.error('Unexpected error fetching profile:', error);
      setProfile(null);
      return null;
    }
  };

  const fetchUserAccess = async (userId: string) => {
    try {
      console.log('Fetching user access for user:', userId);
      const { data, error } = await supabase
        .from('user_access')
        .select(`
          course_id,
          session_id,
          courses!inner (slug),
          sessions (slug)
        `)
        .eq('user_id', userId);
      
      if (error) {
        console.error('Error fetching user access:', error);
        setUserAccess([]);
        return [];
      }
      
      console.log('Raw user access data:', data);
      
      const accessData = data?.map(access => ({
        course_id: access.course_id,
        courseId: access.course_id,
        courseSlug: (access.courses as any)?.slug,
        sessionId: access.session_id,
        sessionSlug: (access.sessions as any)?.slug
      })) || [];
      
      console.log('Processed access data:', accessData);
      setUserAccess(accessData);
      return accessData;
    } catch (error) {
      console.error('Unexpected error fetching user access:', error);
      setUserAccess([]);
      return [];
    }
  };

  useEffect(() => {
    let isMounted = true;
    let authProcessing = false;

    const handleAuthStateChange = async (event: string, session: Session | null) => {
      console.log('Auth state changed:', event, session?.user?.id);
      if (!isMounted || authProcessing) return;

      authProcessing = true;
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        try {
          console.log('User authenticated, fetching profile and access...');
          
          // Start with loading = true, but set a maximum time limit
          const timeoutId = setTimeout(() => {
            console.warn('Auth loading timeout reached, forcing completion');
            if (isMounted) {
              setLoading(false);
              authProcessing = false;
            }
          }, 15000); // 15 seconds max
          
          // Fetch profile and access data with individual error handling
          const profilePromise = fetchProfile(session.user.id).catch(error => {
            console.error('Profile fetch failed:', error);
            return null;
          });
          
          const accessPromise = fetchUserAccess(session.user.id).catch(error => {
            console.error('Access fetch failed:', error);
            return [];
          });
          
          const [profileData, accessData] = await Promise.all([profilePromise, accessPromise]);
          
          clearTimeout(timeoutId);
          console.log('Auth data loaded successfully', { profileData, accessData });
          
        } catch (error) {
          console.error('Critical error in auth state change:', error);
        } finally {
          if (isMounted) {
            console.log('Setting loading to false after user auth');
            setLoading(false);
            authProcessing = false;
          }
        }
      } else {
        console.log('No user session, clearing data');
        setProfile(null);
        setUserAccess([]);
        if (isMounted) {
          console.log('Setting loading to false - no user');
          setLoading(false);
          authProcessing = false;
        }
      }
    };

    // Set up auth state listener
    console.log('Setting up auth state listener...');
    const { data: { subscription } } = supabase.auth.onAuthStateChange(handleAuthStateChange);

    // Get initial session with timeout protection
    const getInitialSession = async () => {
      try {
        console.log('Getting initial session...');
        
        // Set a timeout for the initial session check
        const sessionTimeout = setTimeout(() => {
          console.warn('Initial session timeout, forcing loading false');
          if (isMounted) {
            setLoading(false);
          }
        }, 10000);
        
        const { data: { session }, error } = await supabase.auth.getSession();
        clearTimeout(sessionTimeout);
        
        if (error) {
          console.error('Error getting initial session:', error);
          if (isMounted) {
            setLoading(false);
          }
          return;
        }
        
        if (!isMounted) return;
        
        console.log('Initial session retrieved:', session?.user?.id || 'no session');
        await handleAuthStateChange('INITIAL_SESSION', session);
      } catch (error) {
        console.error('Unexpected error getting initial session:', error);
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    getInitialSession();

    return () => {
      console.log('Cleaning up auth provider...');
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const hasAccessToCourse = (courseSlug: string) => {
    if (profile?.role === 'admin') {
      console.log('Admin access granted for course:', courseSlug);
      return true;
    }
    
    const hasAccess = userAccess.some(access => access.courseSlug === courseSlug);
    console.log('Course access check:', courseSlug, hasAccess, userAccess);
    return hasAccess;
  };

  const hasAccessToSession = (courseSlug: string, sessionSlug: string) => {
    if (profile?.role === 'admin') {
      console.log('Admin access granted for session:', courseSlug, sessionSlug);
      return true;
    }
    
    const hasAccess = userAccess.some(access => 
      access.courseSlug === courseSlug && 
      (access.sessionSlug === sessionSlug || !access.sessionId) // Access to whole course or specific session
    );
    console.log('Session access check:', courseSlug, sessionSlug, hasAccess, userAccess);
    return hasAccess;
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
    console.log('Signing out user...');
    setLoading(true);
    try {
      await supabase.auth.signOut();
      console.log('Sign out successful');
    } catch (error) {
      console.error('Sign out error:', error);
    } finally {
      setLoading(false);
    }
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
