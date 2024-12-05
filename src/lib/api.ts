import axios from 'axios';
import { z } from 'zod';
import { db } from './db';
import type { TrainingSession, AIFeedback } from '../types';

// Schema for validation
const AIFeedbackSchema = z.object({
  score: z.number().min(0).max(100),
  strengths: z.array(z.string()),
  improvements: z.array(z.string()),
  tips: z.array(z.string())
});

export const api = {
  // Training Sessions
  async saveTrainingSession(session: Omit<TrainingSession, 'id'>) {
    return await db.trainingSessions.add(session);
  },

  async getTrainingSessions(userId: string) {
    return await db.trainingSessions
      .where('userId')
      .equals(userId)
      .reverse()
      .sortBy('timestamp');
  },

  // Mock AI Analysis
  async analyzeTrainingVideo(videoBlob: Blob): Promise<AIFeedback> {
    // In a real app, this would upload to a server and get AI analysis
    // For now, we'll return mock feedback after a delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    const mockFeedback = {
      score: Math.floor(Math.random() * 30) + 70, // Random score between 70-100
      strengths: [
        'Good timing with rewards',
        'Clear command voice',
        'Consistent hand signals'
      ],
      improvements: [
        'Maintain eye contact longer',
        'Wait for full completion before treating'
      ],
      tips: [
        'Practice in different locations',
        'Gradually increase difficulty',
        'Keep training sessions short'
      ]
    };

    // Validate the mock feedback
    return AIFeedbackSchema.parse(mockFeedback);
  }
};