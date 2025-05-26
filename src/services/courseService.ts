
import { supabase } from '@/lib/supabase';
import { Course, Session } from '@/types/database';

export const fetchCourses = async (): Promise<Course[]> => {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('name');
  
  if (error) throw error;
  return data || [];
};

export const fetchSessions = async (): Promise<Session[]> => {
  const { data, error } = await supabase
    .from('sessions')
    .select('*')
    .order('order_number');
  
  if (error) throw error;
  return data || [];
};
