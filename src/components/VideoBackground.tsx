import React from 'react';
import { motion } from 'framer-motion';

interface VideoBackgroundProps {
  overlayOpacity?: number;
}

export function VideoBackground({ overlayOpacity = 0.4 }: VideoBackgroundProps) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900 opacity-95" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: overlayOpacity }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black/50"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(74, 144, 226, 0.3) 0%, rgba(0, 0, 0, 0.95) 70%)',
        }}
      />
    </div>
  );
}