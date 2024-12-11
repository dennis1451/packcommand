import React from 'react';
import { motion } from 'framer-motion';
import { ProgressChart } from '../components/ProgressChart';
import { Award, TrendingUp, Calendar } from 'lucide-react';

const sampleProgress = [
  { command: 'sit', successRate: 85, sessionsCompleted: 12, lastPracticed: new Date() },
  { command: 'stay', successRate: 70, sessionsCompleted: 8, lastPracticed: new Date() },
  { command: 'come', successRate: 60, sessionsCompleted: 6, lastPracticed: new Date() },
];

export function Progress() {
  return (
    <div className="space-y-8 px-4 py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">
          Training Progress
        </h1>
        <p className="text-lg text-navy-600 mb-8">
          Track your dog's training journey and celebrate their achievements
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Award, title: 'Commands Mastered', value: '3' },
          { icon: TrendingUp, title: 'Average Success Rate', value: '72%' },
          { icon: Calendar, title: 'Training Sessions', value: '26' },
        ].map(({ icon: Icon, title, value }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card p-6"
          >
            <Icon className="w-8 h-8 text-primary-500 mb-3" />
            <h3 className="text-lg font-semibold text-navy-800 mb-2">{title}</h3>
            <p className="text-3xl font-bold text-primary-600">{value}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <ProgressChart progress={sampleProgress} />
      </motion.div>
    </div>
  );
}