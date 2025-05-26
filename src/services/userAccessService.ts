
import { supabase } from '@/lib/supabase';
import { UserAccess } from '@/types/database';

export const fetchUserAccess = async (): Promise<UserAccess[]> => {
  const { data, error } = await supabase
    .from('user_access')
    .select('*');
  
  if (error) throw error;
  return data || [];
};

export const updateUserAccess = async (
  userId: string, 
  courseAccess: { courseId: string; sessions: string[] }[]
) => {
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

  return { success: true };
};
