-- Create tables
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS dogs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  breed VARCHAR(255),
  age INTEGER,
  weight DECIMAL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS commands (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  description TEXT,
  difficulty INTEGER CHECK (difficulty BETWEEN 1 AND 3),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS training_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  dog_id UUID REFERENCES dogs(id),
  command_id UUID REFERENCES commands(id),
  video_url TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS command_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  dog_id UUID REFERENCES dogs(id),
  command_id UUID REFERENCES commands(id),
  progress INTEGER DEFAULT 0,
  last_practiced TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(dog_id, command_id)
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE dogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE commands ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE command_progress ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can insert own data" ON users
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view own dogs" ON dogs
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own dogs" ON dogs
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own dogs" ON dogs
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Everyone can view commands" ON commands
  FOR SELECT USING (true);

CREATE POLICY "Users can view own training sessions" ON training_sessions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM dogs
      WHERE dogs.id = training_sessions.dog_id
      AND dogs.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert own training sessions" ON training_sessions
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM dogs
      WHERE dogs.id = training_sessions.dog_id
      AND dogs.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can view own command progress" ON command_progress
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM dogs
      WHERE dogs.id = command_progress.dog_id
      AND dogs.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update own command progress" ON command_progress
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM dogs
      WHERE dogs.id = command_progress.dog_id
      AND dogs.user_id = auth.uid()
    )
  );