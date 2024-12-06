import React, { createContext, useContext, useState } from 'react';
import { UserProgress } from '../types/gamification';
import { mockUserProgress } from '../data/mockGamification';

interface GamificationContextType {
  userProgress: UserProgress;
  addExperience: (amount: number) => void;
  completeAchievement: (achievementId: string) => void;
  updateQuestProgress: (questId: string, progress: number) => void;
  earnBadge: (badgeId: string) => void;
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export function GamificationProvider({ children }: { children: React.ReactNode }) {
  const [userProgress, setUserProgress] = useState<UserProgress>(mockUserProgress);

  const addExperience = (amount: number) => {
    setUserProgress(prev => ({
      ...prev,
      experience: prev.experience + amount
    }));
  };

  const completeAchievement = (achievementId: string) => {
    setUserProgress(prev => ({
      ...prev,
      achievements: prev.achievements.map(achievement =>
        achievement.id === achievementId
          ? { ...achievement, unlockedAt: new Date() }
          : achievement
      )
    }));
  };

  const updateQuestProgress = (questId: string, progress: number) => {
    setUserProgress(prev => ({
      ...prev,
      quests: prev.quests.map(quest =>
        quest.id === questId
          ? { ...quest, progress }
          : quest
      )
    }));
  };

  const earnBadge = (badgeId: string) => {
    setUserProgress(prev => ({
      ...prev,
      badges: prev.badges.map(badge =>
        badge.id === badgeId
          ? { ...badge, earned: true }
          : badge
      )
    }));
  };

  return (
    <GamificationContext.Provider
      value={{
        userProgress,
        addExperience,
        completeAchievement,
        updateQuestProgress,
        earnBadge
      }}
    >
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const context = useContext(GamificationContext);
  if (context === undefined) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
}