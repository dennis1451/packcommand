import React from 'react';
import { motion } from 'framer-motion';
import { InteractiveTestimonials } from '../components/InteractiveTestimonials';
import { Dog, Award, Play, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Command } from '../types';

const commands: Array<{ name: Command; progress: number }> = [
  { name: 'sit', progress: 30 },
  { name: 'stay', progress: 45 },
  { name: 'come', progress: 20 }
];

export function Dashboard() {
  return (
    <div className="space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center relative bg-sand-50 rounded-lg py-16 px-4"
      >
        <Dog className="mx-auto h-16 w-16 text-forest-600 mb-6" />
        <h1 className="text-4xl font-bold text-pine-800 mb-4">
          Welcome to Pack Command!
        </h1>
        <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
          Ready to start training your dog today? Choose a command to begin your training journey.
        </p>
      </motion.section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-pine-800 mb-6">Available Commands</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commands.map(({ name, progress }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.02 }}
              className="bg-sand-50 rounded-lg p-6 cursor-pointer"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-pine-700 capitalize">{name}</h3>
                <span className="text-sm text-forest-600">{progress}% Mastered</span>
              </div>
              <div className="w-full bg-sand-200 rounded-full h-2 mb-4">
                <div
                  className="bg-forest-500 rounded-full h-2"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <Link
                to={`/tutorial/${name}`}
                className="text-forest-600 hover:text-forest-700 flex items-center gap-2"
              >
                <Play className="h-4 w-4" />
                <span>Start Training</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/training">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <Play className="mx-auto h-8 w-8 text-forest-500 mb-3" />
            <h3 className="font-semibold text-lg mb-2 text-pine-700">Start New Training</h3>
            <p className="text-stone-600">Begin a new training session</p>
          </motion.div>
        </Link>
        <Link to="/progress">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <BarChart className="mx-auto h-8 w-8 text-forest-500 mb-3" />
            <h3 className="font-semibold text-lg mb-2 text-pine-700">Training Dashboard</h3>
            <p className="text-stone-600">Track your progress</p>
          </motion.div>
        </Link>
        <Link to="/daily-tip">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <Award className="mx-auto h-8 w-8 text-forest-500 mb-3" />
            <h3 className="font-semibold text-lg mb-2 text-pine-700">Daily Tip</h3>
            <p className="text-stone-600">Get professional training advice</p>
          </motion.div>
        </Link>
      </section>

      <InteractiveTestimonials />
    </div>
  );
}