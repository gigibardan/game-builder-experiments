
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, UserRole } from '@/types/auth';

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUserPassword: (userId: string, newPassword: string) => Promise<boolean>;
  isAuthenticated: boolean;
  isAdmin: boolean;
  loading: boolean;
  hasAccessToCourse: (courseId: string) => boolean;
  hasAccessToSession: (courseId: string, sessionId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Mock users data (in a real app, this would be in a database)
const MOCK_USERS: Record<string, User & { password: string }> = {
  'admin': {
    id: '1',
    username: 'admin',
    email: 'admin@techminds.ro',
    password: 'admin123',
    role: UserRole.ADMIN,
    courseAccess: [] // Admin has access to everything
  },
  'student1': {
    id: '2',
    username: 'student1',
    email: 'student1@example.com',
    password: 'student123',
    role: UserRole.USER,
    courseAccess: [
      { courseId: 'appinventor', sessions: ['session1', 'session2'] },
      { courseId: 'scratch', sessions: ['session1alegesanatos'] }
    ]
  },
  'student2': {
    id: '3',
    username: 'student2',
    email: 'student2@example.com',
    password: 'student123',
    role: UserRole.USER,
    courseAccess: [
      { courseId: 'python', sessions: ['session1'] }
    ]
  }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('techminds_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        localStorage.removeItem('techminds_user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    // In a real app, this would be an API call
    const mockUser = MOCK_USERS[username];
    
    if (mockUser && mockUser.password === password) {
      // Remove password before storing user data
      const { password: _, ...userWithoutPassword } = mockUser;
      setUser(userWithoutPassword);
      localStorage.setItem('techminds_user', JSON.stringify(userWithoutPassword));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('techminds_user');
    navigate('/login');
  };
  
  const updateUserPassword = async (userId: string, newPassword: string): Promise<boolean> => {
    // This is a mock implementation - in a real app, this would call an API
    // For the mock version, we can't really update the password in the MOCK_USERS object
    // as that would reset when the page refreshes. In a real app, this would update the database.
    console.log(`Password updated for user ${userId}`);
    return true;
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
