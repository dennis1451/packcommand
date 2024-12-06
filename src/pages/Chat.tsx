import React from 'react';
import { motion } from 'framer-motion';
import { ChatInterface } from '../components/chat/ChatInterface';

export function Chat() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-pine-800 mb-4">Chat with Pack Commander</h1>
        <p className="text-lg text-stone-600">
          Get expert advice and answers to all your dog training questions
        </p>
      </motion.div>

      <ChatInterface />
    </div>
  );
}