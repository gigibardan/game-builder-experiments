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

  const createUser = async (email: string, password: string, username: string, firstName?: string, lastName?: string, role: 'student' | 'admin' = 'student') => {
    try {
      console.log('Creating user with:', { email, username, role });
      
      // Create auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
            first_name: firstName,
            last_name: lastName,
            role,
          },
        },
      });

      if (authError) {
        console.error('Auth error:', authError);
        throw authError;
      }

      console.log('User created successfully:', authData);

      if (authData.user) {
        // Update profile with role
        const { error: profileError } = await supabase
          .from('profiles')
          .update({ role })
          .eq('id', authData.user.id);

        if (profileError) {
          console.error('Profile update error:', profileError);
          throw profileError;
        }
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

  const updateUser = async (userId: string, updates: Partial<Profile> & { password?: string }) => {
    try {
      console.log('Updating user:', userId, updates);
      
      // Update profile data
      const { password, ...profileUpdates } = updates;
      
      if (Object.keys(profileUpdates).length > 0) {
        const { error: profileError } = await supabase
          .from('profiles')
          .update(profileUpdates)
          .eq('id', userId);

        if (profileError) {
          console.error('Profile update error:', profileError);
          throw profileError;
        }
      }

      // Update password if provided - this requires service_role key
      if (password) {
        console.log('Attempting to update password for user:', userId);
        
        // Try to update password using the admin API
        try {
          const response = await fetch(`https://smqnafpjpqpgdjvoguuk.supabase.co/auth/v1/admin/users/${userId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY || 'service_role_key_not_configured'}`,
              'apikey': import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY || 'service_role_key_not_configured'
            },
            body: JSON.stringify({
              password: password
            })
          });

          if (!response.ok) {
            const errorData = await response.json();
            console.error('Password update failed:', errorData);
            throw new Error(`Eroare la actualizarea parolei: ${errorData.message || 'Service role key nu este configurat'}`);
          }

          console.log('Password updated successfully');
        } catch (fetchError) {
          console.error('Password update error:', fetchError);
          throw new Error('Nu se poate actualiza parola. Verifică configurarea service_role key în Supabase.');
        }
      }

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
      console.log('Deleting user:', userId);
      
      // Delete user using admin API
      try {
        const response = await fetch(`https://smqnafpjpqpgdjvoguuk.supabase.co/auth/v1/admin/users/${userId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY || 'service_role_key_not_configured'}`,
            'apikey': import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY || 'service_role_key_not_configured'
          }
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('User deletion failed:', errorData);
          throw new Error(`Eroare la ștergerea utilizatorului: ${errorData.message || 'Service role key nu este configurat'}`);
        }

        console.log('User deleted successfully');
      } catch (fetchError) {
        console.error('User deletion error:', fetchError);
        throw new Error('Nu se poate șterge utilizatorul. Verifică configurarea service_role key în Supabase.');
      }

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
        access.sessions.length > 0 
          ? access.sessions.map(sessionId => ({
              user_id: userId,
              course_id: access.courseId,
              session_id: sessionId,
            }))
          : [{
              user_id: userId,
              course_id: access.courseId,
              session_id: null,
            }]
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

  const getUsersWithoutAccess = () => {
    return users.filter(user => {
      const hasAccess = userAccess.some(access => access.user_id === user.id);
      return !hasAccess && user.role === 'student';
    });
  };

  const getStatistics = () => {
    const totalUsers = users.length;
    const totalStudents = users.filter(u => u.role === 'student').length;
    const totalAdmins = users.filter(u => u.role === 'admin').length;
    const usersWithoutAccess = getUsersWithoutAccess().length;
    const totalCourses = courses.length;
    const totalSessions = sessions.length;

    return {
      totalUsers,
      totalStudents,
      totalAdmins,
      usersWithoutAccess,
      totalCourses,
      totalSessions
    };
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

    // Set up real-time listeners for data updates
    const usersChannel = supabase
      .channel('profiles-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'profiles' }, 
        () => {
          console.log('Profiles table changed, refetching users...');
          fetchUsers();
        }
      )
      .subscribe();

    const accessChannel = supabase
      .channel('user-access-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'user_access' }, 
        () => {
          console.log('User access table changed, refetching access data...');
          fetchUserAccess();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(usersChannel);
      supabase.removeChannel(accessChannel);
    };
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
    getUsersWithoutAccess,
    getStatistics,
    refetch: () => Promise.all([fetchUsers(), fetchUserAccess()]),
  };
}
