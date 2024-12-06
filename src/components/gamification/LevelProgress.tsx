import React from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Trophy } from 'lucide-react';
import { useGamification } from '../../contexts/GamificationContext';

export function LevelProgress() {
  const { userProgress } = useGamification();

  if (!userProgress) return null;

  const progressPercentage = (userProgress.experience / userProgress.nextLevelExperience) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-pine-800">Level {userProgress.level}</h3>
          <p className="text-stone-600">Training Master</p>
        </div>
        <Trophy className="h-8 w-8 text-forest-500" />
      </div>

      <div className="w-32 h-32 mx-auto mb-4">
        <CircularProgressbar
          value={progressPercentage}
          text={`${Math.round(progressPercentage)}%`}
          styles={buildStyles({
            pathColor: '#2E7D32',
            textColor: '#2E7D32',
            trailColor: '#E8F5E9'
          })}
        />
      </div>

      <div className="text-center">
        <p className="text-stone-600">
          {userProgress.experience} / {userProgress.nextLevelExperience} XP
        </p>
        <p className="text-sm text-stone-500 mt-2">
          {Math.ceil(userProgress.nextLevelExperience - userProgress.experience)} XP until next level
        </p>
      </div>
    </motion.div>
  );
}