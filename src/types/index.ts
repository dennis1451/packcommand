export interface TrainingSession {
  id?: number;
  userId: string;
  dogId: string;
  command: Command;
  videoUrl?: string;
  feedback?: AIFeedback;
  timestamp: Date;
}

export type Command = 'sit' | 'stay' | 'come';

export interface TrainingProgress {
  command: Command;
  successRate: number;
  sessionsCompleted: number;
  lastPracticed: Date;
}

export interface AIFeedback {
  score: number;
  strengths: string[];
  improvements: string[];
  tips: string[];
}

export interface UserProfile {
  id?: number;
  email: string;
  name: string;
  createdAt: Date;
}

export interface DogProfile {
  id?: number;
  userId: string;
  name: string;
  breed?: string;
  age?: number;
  createdAt: Date;
}