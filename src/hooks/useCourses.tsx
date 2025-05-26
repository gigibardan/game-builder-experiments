
import { useState, useEffect } from 'react';
import { Course, Session } from '@/types/database';
import { fetchCourses, fetchSessions } from '@/services/courseService';

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);

  const loadCourses = async () => {
    try {
      const data = await fetchCourses();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const loadSessions = async () => {
    try {
      const data = await fetchSessions();
      setSessions(data);
    } catch (error) {
      console.error('Error fetching sessions:', error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([loadCourses(), loadSessions()]);
      setLoading(false);
    };

    loadData();
  }, []);

  return {
    courses,
    sessions,
    loading,
    refetchCourses: loadCourses,
    refetchSessions: loadSessions,
  };
}
