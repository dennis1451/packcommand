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
      className="card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-brown-800">Level {userProgress.level}</h3>
          <p className="text-brown-600">Training Master</p>
        </div>
        <Trophy className="h-8 w-8 text-amber-500" />
      </div>

      <div className="w-32 h-32 mx-auto mb-4">
        <CircularProgressbar
          value={progressPercentage}
          text={`${Math.round(progressPercentage)}%`}
          styles={buildStyles({
            pathColor: '#8B4513',
            textColor: '#8B4513',
            trailColor: '#FCF5E5',
            pathTransition: 'stroke-dashoffset 1s ease-in-out'
          })}
        />
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-brown-700 font-medium">
          {userProgress.experience} / {userProgress.nextLevelExperience} XP
        </p>
        <p className="text-sm text-brown-500 mt-2">
          {Math.ceil(userProgress.nextLevelExperience - userProgress.experience)} XP until next level
        </p>
      </motion.div>
    </motion.div>
  );
}