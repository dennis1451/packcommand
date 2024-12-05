import { supabase } from '../index.js';

export async function up() {
  const { error: usersError } = await supabase.rpc('create_users_table');
  if (usersError) throw usersError;

  const { error: dogsError } = await supabase.rpc('create_dogs_table');
  if (dogsError) throw dogsError;

  const { error: commandsError } = await supabase.rpc('create_commands_table');
  if (commandsError) throw commandsError;

  const { error: sessionsError } = await supabase.rpc('create_training_sessions_table');
  if (sessionsError) throw sessionsError;

  const { error: progressError } = await supabase.rpc('create_command_progress_table');
  if (progressError) throw progressError;
}

export async function down() {
  const tables = [
    'command_progress',
    'training_sessions',
    'commands',
    'dogs',
    'users'
  ];

  for (const table of tables) {
    const { error } = await supabase
      .from(table)
      .delete()
      .neq('id', 0); // Delete all records
    
    if (error) throw error;
  }
}