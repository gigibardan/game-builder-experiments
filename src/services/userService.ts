
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

  return { success: true };
};

export const updateUser = async (userId: string, updates: Partial<Profile> & { password?: string }) => {
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

  return { success: true };
};

export const deleteUser = async (userId: string) => {
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
  return { success: true };
};
