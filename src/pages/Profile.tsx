import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, User, Settings, LogOut } from 'lucide-react';
import { DogList } from '../components/dogs/DogList';
import { DogForm } from '../components/dogs/DogForm';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Profile() {
  const [showAddDog, setShowAddDog] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/auth');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-forest-100 p-3 rounded-full">
            <User className="h-6 w-6 text-forest-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-pine-800">
              {user?.email || 'User Profile'}
            </h2>
            <p className="text-stone-600">Member since {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => {/* TODO: Implement settings */}}
            className="flex items-center space-x-2 px-4 py-2 text-stone-600 hover:text-forest-600 transition-colors"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </button>
          <button
            onClick={handleSignOut}
            className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:text-red-700 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex justify-between items-center"
      >
        <h2 className="text-2xl font-bold text-pine-800">Your Dogs</h2>
        <button
          onClick={() => setShowAddDog(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-forest-600 text-white rounded-md hover:bg-forest-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-500"
        >
          <Plus className="h-5 w-5" />
          <span>Add Dog</span>
        </button>
      </motion.div>

      {showAddDog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
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