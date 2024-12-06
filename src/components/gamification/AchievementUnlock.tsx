import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { Award } from 'lucide-react';

interface AchievementUnlockProps {
  achievement: {
    name: string;
    description: string;
    icon: string;
  };
  onClose: () => void;
}

export function AchievementUnlock({ achievement, onClose }: AchievementUnlockProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: -50 }}
        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      >
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
        />
        
        <motion.div
          className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-4"
          layoutId="achievement-popup"
        >
          <div className="text-center">
            <Award className="h-16 w-16 text-forest-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-pine-800 mb-2">Achievement Unlocked!</h2>
            <h3 className="text-xl text-forest-600 mb-4">{achievement.name}</h3>
            <p className="text-stone-600 mb-6">{achievement.description}</p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-forest-500 text-white rounded-lg hover:bg-forest-600 transition-colors"
            >
              Awesome!
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}