
import { useState, useEffect } from 'react';
import { Profile } from '@/types/database';
import { fetchUsers, createUser, updateUser, deleteUser, syncUsersFromAuth } from '@/services/userService';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';

export function useUsers() {
  const [users, setUsers] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('Eroare la încărcarea utilizatorilor');
    }
  };

  const handleSyncUsers = async () => {
    try {
      const result = await syncUsersFromAuth();
      if (result.synced > 0) {
        toast.success(`${result.synced} utilizatori sincronizați cu succes!`);
        await loadUsers(); // Reload users after sync
      } else {
        toast.info('Toți utilizatorii sunt deja sincronizați');
      }
      return result;
    } catch (error: any) {
      console.error('Error syncing users:', error);
      toast.error('Eroare la sincronizarea utilizatorilor');
      return { success: false, error: error.message };
    }
  };

  const handleCreateUser = async (
    email: string, 
    password: string, 
    username: string, 
    firstName?: string, 
    lastName?: string, 
    role: 'student' | 'admin' = 'student'
  ) => {
    try {
      const result = await createUser(email, password, username, firstName, lastName, role);
      await loadUsers();
      toast.success('Utilizator creat cu succes!');
      return result;
    } catch (error: any) {
      console.error('Error creating user:', error);
      toast.error(error.message || 'Eroare la crearea utilizatorului');
      return { success: false, error: error.message };
    }
  };

  const handleUpdateUser = async (userId: string, updates: Partial<Profile> & { password?: string }) => {
    try {
      const result = await updateUser(userId, updates);
      await loadUsers();
      toast.success('Utilizator actualizat cu succes!');
      return result;
    } catch (error: any) {
      console.error('Error updating user:', error);
      toast.error(error.message || 'Eroare la actualizarea utilizatorului');
      return { success: false, error: error.message };
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      const result = await deleteUser(userId);
      await loadUsers();
      toast.success('Utilizator șters cu succes!');
      return result;
    } catch (error: any) {
      console.error('Error deleting user:', error);
      toast.error(error.message || 'Eroare la ștergerea utilizatorului');
      return { success: false, error: error.message };
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await loadUsers();
      setLoading(false);
    };

    loadData();

    // Set up real-time listener for data updates
    const usersChannel = supabase
      .channel('profiles-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'profiles' }, 
        () => {
          console.log('Profiles table changed, refetching users...');
          loadUsers();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(usersChannel);
    };
  }, []);

  return {
    users,
    loading,
    createUser: handleCreateUser,
    updateUser: handleUpdateUser,
    deleteUser: handleDeleteUser,
    syncUsers: handleSyncUsers,
    refetchUsers: loadUsers,
  };
}
