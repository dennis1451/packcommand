import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as authRoutes } from './routes/auth.js';
import { router as userRoutes } from './routes/users.js';
import { router as dogRoutes } from './routes/dogs.js';
import { router as trainingRoutes } from './routes/training.js';
import { router as chatRoutes } from './routes/chat.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/dogs', dogRoutes);
app.use('/api/training', trainingRoutes);
app.use('/api/chat', chatRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});