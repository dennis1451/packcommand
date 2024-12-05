import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

async function listUsers() {
  try {
    const { data: { users }, error } = await supabase.auth.admin.listUsers();
    
    if (error) {
      console.error('Error:', error.message);
      return;
    }

    console.log('Users in the database:');
    if (!users || users.length === 0) {
      console.log('No users found');
    } else {
      users.forEach(user => {
        console.log(`- ${user.email} (${user.user_metadata?.name || 'No name'})`);
      });
    }
  } catch (error) {
    console.error('Error listing users:', error.message);
  }
}

listUsers();