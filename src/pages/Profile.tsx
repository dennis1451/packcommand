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
    <div className="space-y-8 px-4 py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-6"
      >
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-primary-100 p-3 rounded-full">
            <User className="h-6 w-6 text-primary-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-navy-800">
              {user?.email || 'User Profile'}
            </h2>
            <p className="text-navy-600">Member since {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => {/* TODO: Implement settings */}}
            className="flex items-center space-x-2 px-4 py-2 text-navy-600 hover:text-primary-600 transition-colors"
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
        <h2 className="text-2xl font-bold text-navy-800">Your Dogs</h2>
        <button
          onClick={() => setShowAddDog(true)}
          className="btn-primary inline-flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          <span>Add Dog</span>
        </button>
      </motion.div>

      {showAddDog && (
        <div className="fixed inset-0 bg-navy-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full"
          >
            <h2 className="text-xl font-semibold text-navy-800 mb-4">Add New Dog</h2>
            <DogForm onClose={() => setShowAddDog(false)} />
          </motion.div>
        </div>
      )}

      <DogList />
    </div>
  );
}