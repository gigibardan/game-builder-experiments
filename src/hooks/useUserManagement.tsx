
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Profile, Course, Session, UserAccess } from '@/types/database';
import { toast } from 'sonner';

export function useUserManagement() {
  const [users, setUsers] = useState<Profile[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [userAccess, setUserAccess] = useState<UserAccess[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setUsers(data || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('Eroare la încărcarea utilizatorilor');
    }
  };

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('name');
      
      if (error) throw error;
      setCourses(data || []);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const fetchSessions = async () => {
    try {
      const { data, error } = await supabase
        .from('sessions')
        .select('*')
        .order('order_number');
      
      if (error) throw error;
      setSessions(data || []);
    } catch (error) {
      console.error('Error fetching sessions:', error);
    }
  };

  const fetchUserAccess = async () => {
    try {
      const { data, error } = await supabase
        .from('user_access')
        .select('*');
      
      if (error) throw error;
      setUserAccess(data || []);
    } catch (error) {
      console.error('Error fetching user access:', error);
    }
  };

  const createUser = async (email: string, password: string, username: string, role: 'student' | 'admin' = 'student') => {
    try {
      // Create auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
            role,
          },
        },
      });

      if (authError) throw authError;

      if (authData.user) {
        // Update profile with role
        const { error: profileError } = await supabase
          .from('profiles')
          .update({ role })
          .eq('id', authData.user.id);

        if (profileError) throw profileError;
      }

      await fetchUsers();
      toast.success('Utilizator creat cu succes!');
      return { success: true };
    } catch (error: any) {
      console.error('Error creating user:', error);
      toast.error(error.message || 'Eroare la crearea utilizatorului');
      return { success: false, error: error.message };
    }
  };

  const updateUser = async (userId: string, updates: Partial<Profile>) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', userId);

      if (error) throw error;

      await fetchUsers();
      toast.success('Utilizator actualizat cu succes!');
      return { success: true };
    } catch (error: any) {
      console.error('Error updating user:', error);
      toast.error(error.message || 'Eroare la actualizarea utilizatorului');
      return { success: false, error: error.message };
    }
  };

  const deleteUser = async (userId: string) => {
    try {
      // Delete from auth.users (will cascade to profiles)
      const { error } = await supabase.auth.admin.deleteUser(userId);

      if (error) throw error;

      await fetchUsers();
      toast.success('Utilizator șters cu succes!');
      return { success: true };
    } catch (error: any) {
      console.error('Error deleting user:', error);
      toast.error(error.message || 'Eroare la ștergerea utilizatorului');
      return { success: false, error: error.message };
    }
  };

  const updateUserAccess = async (userId: string, courseAccess: { courseId: string; sessions: string[] }[]) => {
    try {
      // Delete existing access
      await supabase
        .from('user_access')
        .delete()
        .eq('user_id', userId);

      // Insert new access
      const accessRecords = courseAccess.flatMap(access =>
        access.sessions.map(sessionId => ({
          user_id: userId,
          course_id: access.courseId,
          session_id: sessionId,
        }))
      );

      if (accessRecords.length > 0) {
        const { error } = await supabase
          .from('user_access')
          .insert(accessRecords);

        if (error) throw error;
      }

      await fetchUserAccess();
      toast.success('Permisiuni actualizate cu succes!');
      return { success: true };
    } catch (error: any) {
      console.error('Error updating user access:', error);
      toast.error(error.message || 'Eroare la actualizarea permisiunilor');
      return { success: false, error: error.message };
    }
  };

  const getUserAccess = (userId: string) => {
    const userAccessRecords = userAccess.filter(access => access.user_id === userId);
    const courseMap = new Map<string, string[]>();

    userAccessRecords.forEach(access => {
      if (!courseMap.has(access.course_id)) {
        courseMap.set(access.course_id, []);
      }
      if (access.session_id) {
        courseMap.get(access.course_id)!.push(access.session_id);
      }
    });

    return Array.from(courseMap.entries()).map(([courseId, sessions]) => ({
      courseId,
      sessions,
    }));
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([
        fetchUsers(),
        fetchCourses(),
        fetchSessions(),
        fetchUserAccess(),
      ]);
      setLoading(false);
    };

    loadData();
  }, []);

  return {
    users,
    courses,
    sessions,
    userAccess,
    loading,
    createUser,
    updateUser,
    deleteUser,
    updateUserAccess,
    getUserAccess,
    refetch: () => Promise.all([fetchUsers(), fetchUserAccess()]),
  };
}
