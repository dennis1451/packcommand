import React from 'react';
import { motion } from 'framer-motion';
import { CategorySection } from '../components/CategorySection';
import { commands, commandCategories } from '../data/commands';
import { CommandCategory } from '../types';
import { Search } from 'lucide-react';

export function Training() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredCommands = commands.filter(command =>
    command.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    command.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const commandsByCategory = Object.keys(commandCategories).reduce((acc, category) => {
    const categoryCommands = filteredCommands.filter(
      command => command.category === category
    );
    if (categoryCommands.length > 0) {
      acc[category as CommandCategory] = categoryCommands;
    }
    return acc;
  }, {} as Record<CommandCategory, typeof commands>);

  return (
    <div className="space-y-6 px-4 py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">
          Training Commands
        </h1>
        <p className="text-base md:text-lg text-navy-600 mb-6">
          Choose a command to start training your dog
        </p>
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search commands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none"
          />
        </div>
      </motion.div>

      {Object.entries(commandsByCategory).map(([category, categoryCommands], index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <CategorySection
            category={category as CommandCategory}
            commands={categoryCommands}
          />
        </motion.div>
      ))}
    </div>
  );
}