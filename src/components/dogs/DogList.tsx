import React from 'react';
import { motion } from 'framer-motion';
import { Dog, Edit, Trash2 } from 'lucide-react';
import { useDogs } from '../../contexts/DogContext';

export function DogList() {
  const { dogs, loading, deleteDog } = useDogs();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {dogs.map((dog) => (
        <motion.div
          key={dog.id}
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <Dog className="h-8 w-8 text-forest-500" />
              <div>
                <h3 className="text-lg font-semibold text-pine-800">{dog.name}</h3>
                <p className="text-stone-600">{dog.breed}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                className="p-1 text-stone-400 hover:text-forest-500 transition-colors"
                onClick={() => {/* TODO: Implement edit */}}
              >
                <Edit className="h-5 w-5" />
              </button>
              <button
                className="p-1 text-stone-400 hover:text-red-500 transition-colors"
                onClick={() => deleteDog(dog.id)}
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-stone-500">Age:</span>
              <span className="text-stone-700">{dog.age} years</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-stone-500">Weight:</span>
              <span className="text-stone-700">{dog.weight} kg</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}