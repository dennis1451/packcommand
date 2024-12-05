import express from 'express';
import { query } from '../db/index.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get training sessions for a dog
router.get('/dog/:dogId', auth, async (req, res) => {
  try {
    const result = await query(
      'SELECT * FROM training_sessions WHERE dog_id = $1 ORDER BY created_at DESC',
      [req.params.dogId]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a new training session
router.post('/', auth, async (req, res) => {
  try {
    const { dogId, commandId, videoUrl, notes } = req.body;
    const result = await query(
      'INSERT INTO training_sessions (dog_id, command_id, video_url, notes) VALUES ($1, $2, $3, $4) RETURNING *',
      [dogId, commandId, videoUrl, notes]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get progress for a specific command
router.get('/progress/:dogId/:commandId', auth, async (req, res) => {
  try {
    const result = await query(
      'SELECT * FROM command_progress WHERE dog_id = $1 AND command_id = $2',
      [req.params.dogId, req.params.commandId]
    );
    res.json(result.rows[0] || { progress: 0 });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export { router };