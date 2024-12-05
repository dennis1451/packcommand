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
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-amber-900 mb-4">Training Commands</h1>
        <p className="text-lg text-gray-600 mb-8">
          Choose a command to start training your dog
        </p>
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search commands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
      </motion.div>

      {Object.entries(commandsByCategory).map(([category, categoryCommands]) => (
        <CategorySection
          key={category}
          category={category as CommandCategory}
          commands={categoryCommands}
        />
      ))}
    </div>
  );
}