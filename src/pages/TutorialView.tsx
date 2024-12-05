import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { VideoPlayer } from '../components/VideoPlayer';
import { TutorialGuide } from '../components/TutorialGuide';
import { AIFeedback } from '../components/AIFeedback';
import { VideoUpload } from '../components/VideoUpload';
import { commands } from '../data/commands';

export function TutorialView() {
  const { command } = useParams<{ command: string }>();
  const tutorial = commands.find(cmd => cmd.id === command);

  if (!tutorial) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-pine-800 mb-4">Tutorial Not Found</h2>
          <p className="text-stone-600">The requested tutorial could not be found.</p>
        </div>
      </div>
    );
  }

  // Mock AI feedback data - in a real app, this would come from your backend
  const mockFeedback = {
    score: 85,
    strengths: [
      'Clear hand signals',
      'Good timing with rewards',
      'Consistent command voice'
    ],
    improvements: [
      'Wait slightly longer before treating',
      'Reduce treat dependency gradually'
    ],
    tips: [
      'Try practicing in different locations',
      'Incorporate hand signals without treats',
      'Increase duration before reward'
    ]
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-pine-800 mb-4">
          Training: {tutorial.name}
        </h1>
        <p className="text-lg text-stone-600 mb-8">
          Follow along with our detailed guide and video tutorial
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <VideoPlayer 
            videoUrl="/tutorials/placeholder-video.mp4" 
            title={`How to Train: ${tutorial.name}`} 
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold text-pine-800 mb-4">Upload Your Training Video</h3>
            <p className="text-stone-600 mb-4">
              Upload a video of your {tutorial.name.toLowerCase()} training session to receive AI-powered feedback
            </p>
            <VideoUpload />
          </motion.div>
          <AIFeedback feedback={mockFeedback} />
        </div>
        <TutorialGuide
          title={tutorial.name}
          steps={tutorial.tutorial.steps.map(step => step.description)}
          tips={tutorial.tutorial.tips}
        />
      </div>
    </div>
  );
}