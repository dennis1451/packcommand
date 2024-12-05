import express from 'express';
import { query } from '../db/index.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get all dogs for a user
router.get('/', auth, async (req, res) => {
  try {
    const result = await query(
      'SELECT * FROM dogs WHERE user_id = $1',
      [req.user.id]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a new dog
router.post('/', auth, async (req, res) => {
  try {
    const { name, breed, age, weight } = req.body;
    const result = await query(
      'INSERT INTO dogs (user_id, name, breed, age, weight) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [req.user.id, name, breed, age, weight]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a dog
router.put('/:id', auth, async (req, res) => {
  try {
    const { name, breed, age, weight } = req.body;
    const result = await query(
      'UPDATE dogs SET name = $1, breed = $2, age = $3, weight = $4 WHERE id = $5 AND user_id = $6 RETURNING *',
      [name, breed, age, weight, req.params.id, req.user.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Dog not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export { router };