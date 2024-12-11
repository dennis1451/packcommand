import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LevelProgress } from './LevelProgress';
import { useGamification } from '../../contexts/GamificationContext';
import { Award, Star, Target, Flame, ChevronRight, ChevronLeft } from 'lucide-react';

export function GamificationSidebar() {
  const { userProgress } = useGamification();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsCollapsed(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current && 
        buttonRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsCollapsed(true);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!userProgress) return null;

  const sidebarVariants = {
    open: {
      width: '320px',
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1
      }
    },
    closed: {
      width: '0px',
      opacity: 0,
      x: 320,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    closed: {
      opacity: 0,
      x: 50,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  return (
    <div className="fixed right-0 top-0 flex items-start z-40">
      <motion.button
        ref={buttonRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="mt-24 bg-white shadow-lg rounded-l-xl p-2 hover:bg-amber-50 transition-colors relative z-50"
      >
        {isCollapsed ? (
          <ChevronLeft className="h-5 w-5 text-brown-600" />
        ) : (
          <ChevronRight className="h-5 w-5 text-brown-600" />
        )}
      </motion.button>

      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            ref={sidebarRef}
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed right-0 top-0 h-screen bg-white shadow-lg border-l border-neutral-200 overflow-y-auto pt-20 pb-8"
          >
            <div className="px-4 space-y-6">
              <motion.div variants={itemVariants}>
                <LevelProgress />
              </motion.div>

              <motion.div variants={itemVariants} className="card p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Flame className="h-5 w-5 text-amber-500" />
                  <h3 className="text-lg font-semibold text-brown-800">Daily Streak</h3>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-600 mb-1">{userProgress.streak} days</p>
                  <p className="text-sm text-brown-600">Keep up the great work!</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="flex items-center space-x-2 mb-4">
                  <Target className="h-5 w-5 text-primary-500" />
                  <h3 className="text-lg font-semibold text-brown-800">Active Quests</h3>
                </div>
                <div className="space-y-4">
                  {userProgress.quests.map((quest) => (
                    <motion.div
                      key={quest.id}
                      className="card p-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <h4 className="font-medium text-brown-800 mb-2">{quest.name}</h4>
                      <p className="text-sm text-brown-600 mb-3">{quest.description}</p>
                      <div className="w-full bg-neutral-100 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-primary-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${(quest.progress / quest.total) * 100}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                      <p className="text-xs text-brown-500 mt-2">
                        {quest.progress} / {quest.total}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="h-5 w-5 text-amber-500" />
                  <h3 className="text-lg font-semibold text-brown-800">Recent Achievements</h3>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {userProgress.achievements
                    .filter((achievement) => achievement.unlockedAt)
                    .slice(0, 6)
                    .map((achievement) => (
                      <motion.div
                        key={achievement.id}
                        className="bg-amber-50 rounded-lg p-3 flex items-center justify-center group hover:bg-amber-100 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        title={achievement.name}
                      >
                        <Star className="h-6 w-6 text-amber-500 group-hover:text-amber-600 transition-colors" />
                      </motion.div>
                    ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="h-5 w-5 text-primary-500" />
                  <h3 className="text-lg font-semibold text-brown-800">Badges</h3>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {userProgress.badges
                    .filter((badge) => badge.earned)
                    .map((badge) => (
                      <motion.div
                        key={badge.id}
                        className="bg-primary-50 rounded-lg p-2 aspect-square flex items-center justify-center hover:bg-primary-100 transition-colors"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        title={badge.name}
                      >
                        <img
                          src={badge.imageUrl}
                          alt={badge.name}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}