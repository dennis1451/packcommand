import React from 'react';
import { motion } from 'framer-motion';
import { CommandCard } from './CommandCard';
import { Command, CommandCategory } from '../types';
import { commandCategories } from '../data/commands';

interface CategorySectionProps {
  category: CommandCategory;
  commands: Command[];
}

export function CategorySection({ category, commands }: CategorySectionProps) {
  const categoryInfo = commandCategories[category];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <div className="flex items-center space-x-3 mb-6">
        <span className="text-2xl">{categoryInfo.icon}</span>
        <div>
          <h2 className="text-2xl font-bold text-pine-800">{categoryInfo.title}</h2>
          <p className="text-stone-600">{categoryInfo.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {commands.map((command) => (
          <CommandCard key={command.id} command={command} />
        ))}
      </div>
    </motion.section>
  );
}