import React from 'react';
import { motion } from 'framer-motion';
import { TrainingCard } from '../components/TrainingCard';

const trainingGuides = [
  {
    command: 'sit',
    description: 'Learn how to teach your dog the basic sit command with positive reinforcement.',
    imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800',
  },
  {
    command: 'stay',
    description: 'Master the stay command to improve your dog\'s impulse control and obedience.',
    imageUrl: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&q=80&w=800',
  },
  {
    command: 'come',
    description: 'Build a reliable recall command for better off-leash control and safety.',
    imageUrl: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=800',
  },
];

export function Training() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-amber-900 mb-4">Training Guides</h1>
        <p className="text-lg text-gray-600 mb-8">
          Master essential commands with our comprehensive training guides
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainingGuides.map((guide, index) => (
          <motion.div
            key={guide.command}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <TrainingCard {...guide} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}