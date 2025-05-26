
import { supabase } from '@/lib/supabase';
import { Profile } from '@/types/database';

const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtcW5hZnBqcHFwZ2Rqdm9ndXVrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzA0MzY3MCwiZXhwIjoyMDYyNjE5NjcwfQ.AyT60g9TuZkXMaa5qG4z5WAdp_dzT6uywVBr9MQWNnk';

export const fetchUsers = async (): Promise<Profile[]> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data || [];
};

export const createUser = async (
  email: string, 
  password: string, 
  username: string, 
  firstName?: string, 
  lastName?: string, 
  role: 'student' | 'admin' = 'student'
) => {
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

  // Manually create profile since trigger doesn't work with admin API
  if (userData.user && userData.user.id) {
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({ 
        id: userData.user.id,
        username: username || email.split('@')[0],
        email,
        role,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      });

    if (profileError) {
      console.error('Profile creation error:', profileError);
      // Don't throw here, user is created in auth, just log the error
    }
  }

  return { success: true };
};

export const updateUser = async (userId: string, updates: Partial<Profile> & { password?: string }) => {
  console.log('Updating user:', userId, updates);
  
  // Update profile data first
  const { password, ...profileUpdates } = updates;
  
  if (Object.keys(profileUpdates).length > 0) {
    const { error: profileError } = await supabase
      .from('profiles')
      .update({
        ...profileUpdates,
        updated_at: new Date().toISOString()
      })
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

  return { success: true };
};

export const deleteUser = async (userId: string) => {
  console.log('Deleting user:', userId);
  
  // Delete user using admin API - this will cascade to profiles
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
  return { success: true };
};

// Funcție pentru sincronizarea utilizatorilor din auth.users în profiles
export const syncUsersFromAuth = async () => {
  console.log('Syncing users from auth to profiles...');
  
  try {
    // Get all users from auth.users using admin API
    const authUsersResponse = await fetch(`https://smqnafpjpqpgdjvoguuk.supabase.co/auth/v1/admin/users`, {
      headers: {
        'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
        'apikey': SERVICE_ROLE_KEY
      }
    });

    if (!authUsersResponse.ok) {
      throw new Error('Failed to fetch auth users');
    }

    const authData = await authUsersResponse.json();
    const authUsers = authData.users || [];

    // Get existing profiles
    const { data: existingProfiles } = await supabase
      .from('profiles')
      .select('id');

    const existingIds = new Set(existingProfiles?.map(p => p.id) || []);

    // Create profiles for users that don't have them
    const missingProfiles = authUsers
      .filter((user: any) => !existingIds.has(user.id))
      .map((user: any) => ({
        id: user.id,
        username: user.user_metadata?.username || user.email?.split('@')[0] || 'user',
        email: user.email,
        role: user.user_metadata?.role || 'student',
        created_at: user.created_at,
        updated_at: new Date().toISOString()
      }));

    if (missingProfiles.length > 0) {
      const { error } = await supabase
        .from('profiles')
        .insert(missingProfiles);

      if (error) {
        console.error('Error creating missing profiles:', error);
        throw error;
      }

      console.log(`Created ${missingProfiles.length} missing profiles`);
    }

    return { success: true, synced: missingProfiles.length };
  } catch (error) {
    console.error('Sync error:', error);
    throw error;
  }
};
