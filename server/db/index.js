import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  console.error('Missing Supabase credentials in environment variables');
  process.exit(1);
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);

// Test the connection
async function testConnection() {
  try {
    const { data, error } = await supabase.from('users').select('count').limit(1);
    if (error) throw error;
    console.log('Successfully connected to Supabase');
    return true;
  } catch (error) {
    console.error('Error connecting to Supabase:', error.message);
    return false;
  }
}

// Helper functions for common operations
export const createRecord = async (table, data) => {
  try {
    const { data: result, error } = await supabase
      .from(table)
      .insert(data)
      .select();

    if (error) throw error;
    return result[0];
  } catch (error) {
    console.error(`Error creating record in ${table}:`, error.message);
    throw error;
  }
};

export const getRecords = async (table, query = {}) => {
  try {
    const { data, error } = await supabase
      .from(table)
      .select()
      .match(query);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error getting records from ${table}:`, error.message);
    throw error;
  }
};

export const updateRecord = async (table, id, data) => {
  try {
    const { data: result, error } = await supabase
      .from(table)
      .update(data)
      .match({ id })
      .select();

    if (error) throw error;
    return result[0];
  } catch (error) {
    console.error(`Error updating record in ${table}:`, error.message);
    throw error;
  }
};

export const deleteRecord = async (table, id) => {
  try {
    const { error } = await supabase
      .from(table)
      .delete()
      .match({ id });

    if (error) throw error;
    return true;
  } catch (error) {
    console.error(`Error deleting record from ${table}:`, error.message);
    throw error;
  }
};

// Initialize connection test
testConnection();

export { supabase };