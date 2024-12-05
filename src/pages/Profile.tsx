import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { DogList } from '../components/dogs/DogList';
import { DogForm } from '../components/dogs/DogForm';

export function Profile() {
  const [showAddDog, setShowAddDog] = useState(false);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold text-pine-800">Your Dogs</h1>
        <button
          onClick={() => setShowAddDog(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-forest-600 text-white rounded-md hover:bg-forest-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-500"
        >
          <Plus className="h-5 w-5" />
          <span>Add Dog</span>
        </button>
      </motion.div>

      {showAddDog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold text-pine-800 mb-4">Add New Dog</h2>
            <DogForm onClose={() => setShowAddDog(false)} />
          </div>
        </div>
      )}

      <DogList />
    </div>
  );
}