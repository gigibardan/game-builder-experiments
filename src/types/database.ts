
export interface Profile {
  id: string;
  username: string;
  email: string;
  role: 'student' | 'admin';
  first_name?: string;
  last_name?: string;
  created_at: string;
  updated_at: string;
}

export interface Course {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface Session {
  id: string;
  course_id: string;
  name: string;
  slug: string;
  description?: string;
  order_number: number;
  created_at: string;
  updated_at: string;
}

export interface UserAccess {
  id: string;
  user_id: string;
  course_id: string;
  session_id?: string;
  created_at: string;
  updated_at: string;
}
