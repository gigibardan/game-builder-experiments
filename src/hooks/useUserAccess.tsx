
import { useState, useEffect } from 'react';
import { UserAccess, Profile } from '@/types/database';
import { fetchUserAccess, updateUserAccess } from '@/services/userAccessService';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';

export function useUserAccess() {
  const [userAccess, setUserAccess] = useState<UserAccess[]>([]);
  const [loading, setLoading] = useState(true);

  const loadUserAccess = async () => {
    try {
      const data = await fetchUserAccess();
      setUserAccess(data);
    } catch (error) {
      console.error('Error fetching user access:', error);
    }
  };

  const handleUpdateUserAccess = async (
    userId: string, 
    courseAccess: { courseId: string; sessions: string[] }[]
  ) => {
    try {
      const result = await updateUserAccess(userId, courseAccess);
      await loadUserAccess();
      toast.success('Permisiuni actualizate cu succes!');
      return result;
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

  const getUsersWithoutAccess = (users: Profile[]) => {
    return users.filter(user => {
      const hasAccess = userAccess.some(access => access.user_id === user.id);
      return !hasAccess && user.role === 'student';
    });
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await loadUserAccess();
      setLoading(false);
    };

    loadData();

    // Set up real-time listener for data updates
    const accessChannel = supabase
      .channel('user-access-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'user_access' }, 
        () => {
          console.log('User access table changed, refetching access data...');
          loadUserAccess();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(accessChannel);
    };
  }, []);

  return {
    userAccess,
    loading,
    updateUserAccess: handleUpdateUserAccess,
    getUserAccess,
    getUsersWithoutAccess,
    refetchUserAccess: loadUserAccess,
  };
}
