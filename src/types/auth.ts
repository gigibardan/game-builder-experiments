
export enum UserRole {
  USER = 'user',
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

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  hasAccessToCourse: (courseId: string) => boolean;
  hasAccessToSession: (courseId: string, sessionId: string) => boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}
