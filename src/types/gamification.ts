export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  requirement: string;
  earned: boolean;
}

export interface QuestProgress {
  id: string;
  name: string;
  description: string;
  progress: number;
  total: number;
  reward: {
    type: 'points' | 'badge' | 'title';
    value: string | number;
  };
}

export interface UserProgress {
  level: number;
  experience: number;
  nextLevelExperience: number;
  achievements: Achievement[];
  badges: Badge[];
  quests: QuestProgress[];
  streak: number;
  totalTrainingSessions: number;
}