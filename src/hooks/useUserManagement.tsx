
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Profile, Course, Session, UserAccess } from '@/types/database';
import { toast } from 'sonner';

// Service role key pentru operațiuni administrative
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtcW5hZnBqcHFwZ2Rqdm9ndXVrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzA0MzY3MCwiZXhwIjoyMDYyNjE5NjcwfQ.AyT60g9TuZkXMaa5qG4z5WAdp_dzT6uywVBr9MQWNnk';

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
      
      // Create auth user using admin API
      const createUserResponse = await fetch(`https://smqnafpjpqpgdjvoguuk.supabase.co/auth/v1/admin/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
          'apikey': SERVICE_ROLE_KEY
        },
        body: JSON.stringify({
          email,
          password,
          user_metadata: {
            username,
            first_name: firstName,
            last_name: lastName,
            role,
          },
          email_confirm: true
        })
      });

      if (!createUserResponse.ok) {
        const errorData = await createUserResponse.json();
        console.error('User creation failed:', errorData);
        throw new Error(errorData.message || 'Eroare la crearea utilizatorului');
      }

      const userData = await createUserResponse.json();
      console.log('User created successfully:', userData);

      // Update profile with role
      if (userData.id) {
        const { error: profileError } = await supabase
          .from('profiles')
          .upsert({ 
            id: userData.id,
            username,
            email,
            role 
          });

        if (profileError) {
          console.error('Profile update error:', profileError);
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

      // Update password if provided using admin API
      if (password) {
        console.log('Attempting to update password for user:', userId);
        
        const updatePasswordResponse = await fetch(`https://smqnafpjpqpgdjvoguuk.supabase.co/auth/v1/admin/users/${userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
            'apikey': SERVICE_ROLE_KEY
          },
          body: JSON.stringify({
            password: password
          })
        });

        if (!updatePasswordResponse.ok) {
          const errorData = await updatePasswordResponse.json();
          console.error('Password update failed:', errorData);
          throw new Error(`Eroare la actualizarea parolei: ${errorData.message || 'Unknown error'}`);
        }

        console.log('Password updated successfully');
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
      const deleteUserResponse = await fetch(`https://smqnafpjpqpgdjvoguuk.supabase.co/auth/v1/admin/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
          'apikey': SERVICE_ROLE_KEY
        }
      });

      if (!deleteUserResponse.ok) {
        const errorData = await deleteUserResponse.json();
        console.error('User deletion failed:', errorData);
        throw new Error(`Eroare la ștergerea utilizatorului: ${errorData.message || 'Unknown error'}`);
      }

      console.log('User deleted successfully');
      
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
