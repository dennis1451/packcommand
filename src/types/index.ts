export type CommandCategory = 
  | 'basic-obedience'
  | 'pack-leadership'
  | 'tricks'
  | 'agility'
  | 'utility'
  | 'advanced';

export interface TutorialStep {
  title: string;
  description: string;
}

export interface Command {
  id: string;
  name: string;
  category: CommandCategory;
  description: string;
  difficulty: 1 | 2 | 3;
  imageUrl: string;
  progress?: number;
  tutorial: {
    steps: TutorialStep[];
    tips: string[];
  };
}

export interface TrainingSession {
  id: string;
  videoUrl: string;
  command: Command;
  feedback: string;
  timestamp: Date;
}

export interface TrainingProgress {
  command: Command;
  successRate: number;
  sessionsCompleted: number;
  lastPracticed: Date;
}