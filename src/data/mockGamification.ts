export const mockUserProgress = {
  level: 5,
  experience: 450,
  nextLevelExperience: 1000,
  streak: 7,
  totalTrainingSessions: 23,
  achievements: [
    {
      id: '1',
      name: 'First Steps',
      description: 'Complete your first training session',
      icon: '🎯',
      unlockedAt: new Date('2024-03-10')
    },
    {
      id: '2',
      name: 'Consistent Trainer',
      description: 'Maintain a 7-day training streak',
      icon: '🔥',
      unlockedAt: new Date('2024-03-15')
    },
    {
      id: '3',
      name: 'Pack Leader',
      description: 'Successfully complete 20 training sessions',
      icon: '👑',
      unlockedAt: new Date('2024-03-18')
    }
  ],
  badges: [
    {
      id: '1',
      name: 'Basic Training Expert',
      description: 'Master all basic commands',
      imageUrl: 'https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=50&h=50&fit=crop',
      requirement: 'Complete all basic training modules',
      earned: true
    },
    {
      id: '2',
      name: 'Agility Master',
      description: 'Complete advanced agility training',
      imageUrl: 'https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=50&h=50&fit=crop',
      requirement: 'Master agility course',
      earned: true
    }
  ],
  quests: [
    {
      id: '1',
      name: 'Perfect Recall',
      description: 'Train your dog to come when called 10 times',
      progress: 7,
      total: 10,
      reward: {
        type: 'badge',
        value: 'Recall Master'
      }
    },
    {
      id: '2',
      name: 'Leash Training',
      description: 'Complete 5 successful walks without pulling',
      progress: 3,
      total: 5,
      reward: {
        type: 'points',
        value: 100
      }
    },
    {
      id: '3',
      name: 'Trick Master',
      description: 'Teach 3 new tricks',
      progress: 1,
      total: 3,
      reward: {
        type: 'title',
        value: 'Trick Training Expert'
      }
    }
  ]
};