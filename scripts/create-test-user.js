import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

async function createTestUser() {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: 'dennistest@test.com',
      password: 'TestPassword123!@#',
      options: {
        data: {
          full_name: 'Dennis Test'
        }
      }
    });

    if (error) {
      console.error('Error creating user:', error.message);
      return;
    }

    console.log('Test user created successfully!');
    console.log('Login credentials:');
    console.log('Email: dennistest@test.com');
    console.log('Password: TestPassword123!@#');

    if (data.user) {
      console.log('User ID:', data.user.id);
    }

  } catch (error) {
    console.error('Unexpected error:', error);
  } finally {
    process.exit(0);
  }
}

createTestUser();