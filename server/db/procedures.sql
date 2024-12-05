-- Create tables procedures
CREATE OR REPLACE FUNCTION create_users_table()
RETURNS void AS $$
BEGIN
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION create_dogs_table()
RETURNS void AS $$
BEGIN
  CREATE TABLE IF NOT EXISTS dogs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    name VARCHAR(255) NOT NULL,
    breed VARCHAR(255),
    age INTEGER,
    weight DECIMAL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION create_commands_table()
RETURNS void AS $$
BEGIN
  CREATE TABLE IF NOT EXISTS commands (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    description TEXT,
    difficulty INTEGER CHECK (difficulty BETWEEN 1 AND 3)
  );
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION create_training_sessions_table()
RETURNS void AS $$
BEGIN
  CREATE TABLE IF NOT EXISTS training_sessions (
    id SERIAL PRIMARY KEY,
    dog_id INTEGER REFERENCES dogs(id),
    command_id INTEGER REFERENCES commands(id),
    video_url TEXT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION create_command_progress_table()
RETURNS void AS $$
BEGIN
  CREATE TABLE IF NOT EXISTS command_progress (
    id SERIAL PRIMARY KEY,
    dog_id INTEGER REFERENCES dogs(id),
    command_id INTEGER REFERENCES commands(id),
    progress INTEGER DEFAULT 0,
    last_practiced TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(dog_id, command_id)
  );
END;
$$ LANGUAGE plpgsql;

-- Create a function to execute raw SQL queries
CREATE OR REPLACE FUNCTION execute_query(query_text TEXT)
RETURNS SETOF json AS $$
BEGIN
  RETURN QUERY EXECUTE query_text;
END;
$$ LANGUAGE plpgsql;