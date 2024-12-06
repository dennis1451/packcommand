import React from 'react';
import { motion } from 'framer-motion';
import { Command } from '../types';
import { Star, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CommandCardProps {
  command: Command;
}

export function CommandCard({ command }: CommandCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative h-48">
        <img
          src={command.imageUrl}
          alt={`${command.name} command demonstration`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-pine-800">{command.name}</h3>
          <div className="flex items-center space-x-1">
            {Array.from({ length: command.difficulty }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-forest-400 fill-current" />
            ))}
          </div>
        </div>
        <p className="text-stone-600 text-sm mb-4">{command.description}</p>
        {command.progress && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-stone-600">Progress</span>
              <span className="text-forest-600">{command.progress}%</span>
            </div>
            <div className="w-full bg-sand-100 rounded-full h-2">
              <div
                className="bg-forest-500 rounded-full h-2 transition-all duration-300"
                style={{ width: `${command.progress}%` }}
              />
            </div>
          </div>
        )}
        <Link
          to={`/tutorial/${command.id}`}
          className="flex items-center justify-center space-x-2 bg-forest-50 text-forest-700 py-2 px-4 rounded-md hover:bg-forest-100 transition-colors"
        >
          <Play className="w-4 h-4" />
          <span>Start Training</span>
        </Link>
      </div>
    </motion.div>
  );
}