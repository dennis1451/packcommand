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
    <section className="mb-8">
      <div className="flex items-center space-x-3 mb-4 px-4">
        <span className="text-2xl">{categoryInfo.icon}</span>
        <div>
          <h2 className="text-xl font-bold text-navy-800">{categoryInfo.title}</h2>
          <p className="text-sm text-navy-600">{categoryInfo.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {commands.map((command) => (
          <CommandCard key={command.id} command={command} />
        ))}
      </div>
    </section>
  );
}