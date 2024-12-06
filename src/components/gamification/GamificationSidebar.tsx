import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LevelProgress } from './LevelProgress';
import { useGamification } from '../../contexts/GamificationContext';
import { Award, Star, Target, Flame, ChevronRight, ChevronLeft } from 'lucide-react';

export function GamificationSidebar() {
  const { userProgress } = useGamification();
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    // Start with sidebar collapsed
    setIsCollapsed(true);
  }, []);

  if (!userProgress) return null;

  return (
    <div className="fixed right-0 top-0 flex items-start z-40">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="mt-24 bg-white shadow-md rounded-l-lg p-2 hover:bg-sand-50 transition-colors"
      >
        {isCollapsed ? (
          <ChevronLeft className="h-5 w-5 text-forest-600" />
        ) : (
          <ChevronRight className="h-5 w-5 text-forest-600" />
        )}
      </motion.button>

      <motion.div
        initial={{ opacity: 0, x: 320 }}
        animate={{ 
          opacity: isCollapsed ? 0 : 1, 
          x: isCollapsed ? 320 : 0,
          width: isCollapsed ? '0px' : '320px'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="h-screen bg-white shadow-lg border-l border-sand-200 overflow-y-auto pt-20 pb-8 px-4"
      >
        <LevelProgress />

        <div className="mt-6">
          <div className="flex items-center space-x-2 mb-4">
            <Flame className="h-5 w-5 text-forest-500" />
            <h3 className="text-lg font-semibold text-pine-800">Daily Streak</h3>
          </div>
          <div className="bg-sand-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-forest-600">{userProgress.streak} days</p>
            <p className="text-sm text-stone-600">Keep up the great work!</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="h-5 w-5 text-forest-500" />
            <h3 className="text-lg font-semibold text-pine-800">Active Quests</h3>
          </div>
          <div className="space-y-4">
            {userProgress.quests.map((quest) => (
              <div key={quest.id} className="bg-sand-50 rounded-lg p-4">
                <h4 className="font-medium text-pine-800 mb-2">{quest.name}</h4>
                <p className="text-sm text-stone-600 mb-3">{quest.description}</p>
                <div className="w-full bg-white rounded-full h-2">
                  <div
                    className="bg-forest-500 rounded-full h-2 transition-all duration-300"
                    style={{ width: `${(quest.progress / quest.total) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-stone-500 mt-2">
                  {quest.progress} / {quest.total}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center space-x-2 mb-4">
            <Award className="h-5 w-5 text-forest-500" />
            <h3 className="text-lg font-semibold text-pine-800">Recent Achievements</h3>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {userProgress.achievements
              .filter((achievement) => achievement.unlockedAt)
              .slice(0, 6)
              .map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-sand-50 rounded-lg p-2 flex items-center justify-center"
                  title={achievement.name}
                >
                  <Star className="h-6 w-6 text-forest-500" />
                </div>
              ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center space-x-2 mb-4">
            <Star className="h-5 w-5 text-forest-500" />
            <h3 className="text-lg font-semibold text-pine-800">Badges</h3>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {userProgress.badges
              .filter((badge) => badge.earned)
              .map((badge) => (
                <div
                  key={badge.id}
                  className="bg-sand-50 rounded-lg p-2 aspect-square flex items-center justify-center"
                  title={badge.name}
                >
                  <img
                    src={badge.imageUrl}
                    alt={badge.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}