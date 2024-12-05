import React, { useState } from 'react';
import { useDogs } from '../../contexts/DogContext';

interface DogFormProps {
  onClose: () => void;
}

export function DogForm({ onClose }: DogFormProps) {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { addDog } = useDogs();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await addDog({
        name,
        breed,
        age: parseInt(age),
        weight: parseFloat(weight)
      });
      onClose();
    } catch (err) {
      setError('Failed to add dog');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-stone-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-stone-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
        />
      </div>
      <div>
        <label htmlFor="breed" className="block text-sm font-medium text-stone-700">
          Breed
        </label>
        <input
          id="breed"
          type="text"
          required
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          className="mt-1 block w-full rounded-md border-stone-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
        />
      </div>
      <div>
        <label htmlFor="age" className="block text-sm font-medium text-stone-700">
          Age (years)
        </label>
        <input
          id="age"
          type="number"
          required
          min="0"
          max="30"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="mt-1 block w-full rounded-md border-stone-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
        />
      </div>
      <div>
        <label htmlFor="weight" className="block text-sm font-medium text-stone-700">
          Weight (kg)
        </label>
        <input
          id="weight"
          type="number"
          required
          min="0"
          step="0.1"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="mt-1 block w-full rounded-md border-stone-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
        />
      </div>
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-stone-700 hover:text-stone-800"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 text-sm font-medium text-white bg-forest-600 rounded-md hover:bg-forest-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-500 disabled:opacity-50"
        >
          {loading ? 'Adding...' : 'Add Dog'}
        </button>
      </div>
    </form>
  );
}