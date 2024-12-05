import React from 'react';
import { motion } from 'framer-motion';
import { LightbulbIcon, Share2, BookmarkPlus } from 'lucide-react';

const tips = [
  {
    id: 1,
    title: "Consistency is Key",
    content: "Train at the same times each day to establish a routine. Dogs thrive on predictable schedules and clear expectations.",
    category: "Training Basics",
    difficulty: "Beginner"
  },
  {
    id: 2,
    title: "The Power of Positive Reinforcement",
    content: "Always reward good behavior immediately. This creates a strong association between the desired action and the positive outcome.",
    category: "Training Technique",
    difficulty: "Beginner"
  },
  {
    id: 3,
    title: "Short Training Sessions",
    content: "Keep training sessions to 5-10 minutes. Multiple short sessions are more effective than one long session.",
    category: "Best Practices",
    difficulty: "Intermediate"
  }
];

export function DailyTip() {
  // Get a random tip (in a real app, this would be managed by your backend)
  const todaysTip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="bg-forest-50 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <LightbulbIcon className="h-8 w-8 text-forest-600" />
              <h1 className="text-2xl font-bold text-pine-800">Daily Training Tip</h1>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-stone-600 hover:text-forest-600 transition-colors">
                <BookmarkPlus className="h-5 w-5" />
              </button>
              <button className="p-2 text-stone-600 hover:text-forest-600 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm text-stone-600">
            <span className="bg-forest-100 text-forest-700 px-3 py-1 rounded-full">
              {todaysTip.category}
            </span>
            <span className="text-stone-500">
              Difficulty: {todaysTip.difficulty}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h2 className="text-xl font-semibold text-pine-800 mb-4">
            {todaysTip.title}
          </h2>
          <p className="text-stone-600 leading-relaxed">
            {todaysTip.content}
          </p>
          
          <div className="mt-8 space-y-4">
            <h3 className="font-semibold text-pine-800">How to Apply This Tip:</h3>
            <ul className="list-disc list-inside space-y-2 text-stone-600">
              <li>Start with basic commands you've already established</li>
              <li>Practice in a quiet, familiar environment</li>
              <li>Keep treats handy for immediate reinforcement</li>
              <li>Document your progress in the training log</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}