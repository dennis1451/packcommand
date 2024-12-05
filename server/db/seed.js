import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

async function seedDatabase() {
  try {
    console.log('Seeding database...');

    // Seed commands
    const commands = [
      { 
        name: 'sit',
        category: 'basic-obedience',
        description: 'Teach your dog to sit on command',
        difficulty: 1
      },
      {
        name: 'stay',
        category: 'basic-obedience',
        description: 'Train your dog to remain in position',
        difficulty: 2
      },
      {
        name: 'heel',
        category: 'pack-leadership',
        description: 'Walk properly beside you without pulling',
        difficulty: 2
      },
      {
        name: 'spin',
        category: 'tricks',
        description: 'Teach your dog to spin in a circle',
        difficulty: 1
      },
      {
        name: 'jump',
        category: 'agility',
        description: 'Train your dog to jump over obstacles',
        difficulty: 2
      },
      {
        name: 'fetch',
        category: 'utility',
        description: 'Teach your dog to retrieve items',
        difficulty: 1
      }
    ];

    const { error: commandsError } = await supabase
      .from('commands')
      .upsert(commands);

    if (commandsError) {
      console.error('Error seeding commands:', commandsError);
      throw commandsError;
    }

    console.log('Commands seeded successfully');

    // Note: We'll let users register through the app instead of seeding test users
    // This is more secure and follows Supabase's authentication patterns

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seedDatabase();