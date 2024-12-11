import React from 'react';
import { motion } from 'framer-motion';
import { Command } from '../types';
import { Play, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CommandCardProps {
  command: Command;
}

export function CommandCard({ command }: CommandCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden"
    >
      <div className="relative h-40">
        <img
          src={command.imageUrl}
          alt={`${command.name} command demonstration`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-lg font-semibold text-white mb-1">{command.name}</h3>
          <div className="flex items-center space-x-1">
            {Array.from({ length: command.difficulty }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-navy-600 mb-4">{command.description}</p>
        {command.progress !== undefined && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-navy-600">Progress</span>
              <span className="text-primary-600">{command.progress}%</span>
            </div>
            <div className="w-full bg-neutral-100 rounded-full h-2">
              <div
                className="bg-primary-500 rounded-full h-2 transition-all duration-300"
                style={{ width: `${command.progress}%` }}
              />
            </div>
          </div>
        )}
        <Link
          to={`/tutorial/${command.id}`}
          className="flex items-center justify-center space-x-2 w-full py-2 px-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          <Play className="w-4 h-4" />
          <span className="font-medium">Start Training</span>
        </Link>
      </div>
    </motion.div>
  );
}