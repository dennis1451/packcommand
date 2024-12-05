import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { VideoPlayer } from '../components/VideoPlayer';
import { TutorialGuide } from '../components/TutorialGuide';
import { AIFeedback } from '../components/AIFeedback';
import { VideoUpload } from '../components/VideoUpload';
import { Command } from '../types';

const tutorials: Record<Command, {
  title: string;
  videoUrl: string;
  steps: string[];
  tips: string[];
  feedback: {
    score: number;
    strengths: string[];
    improvements: string[];
    tips: string[];
  };
}> = {
  sit: {
    title: 'Teaching Your Dog to Sit',
    videoUrl: '/tutorials/sit-command.mp4',
    steps: [
      'Start with your dog in a standing position',
      'Hold a treat close to their nose',
      'Slowly move the treat up and back over their head',
      'As their head tilts back to follow the treat, they will naturally sit',
      'As soon as they sit, say "Yes!" and give them the treat'
    ],
    tips: [
      'Keep training sessions short (5-10 minutes)',
      'Practice in a quiet environment initially',
      'Use high-value treats for better motivation',
      'Be patient and consistent with the command word'
    ],
    feedback: {
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
    }
  },
  stay: {
    title: 'Teaching Your Dog to Stay',
    videoUrl: '/tutorials/stay-command.mp4',
    steps: [
      'Ask your dog to sit',
      'Hold your hand out in front of you, palm facing dog',
      'Say "Stay" in a clear, firm voice',
      'Wait a few seconds, then reward',
      'Gradually increase the duration and distance'
    ],
    tips: [
      'Start with short durations (2-3 seconds)',
      'Build duration before distance',
      'Use a release word consistently',
      'Practice in different environments'
    ],
    feedback: {
      score: 75,
      strengths: [
        'Good initial command position',
        'Clear release cue',
        'Patient approach'
      ],
      improvements: [
        'More consistent hand signals needed',
        'Work on longer durations'
      ],
      tips: [
        'Practice with mild distractions',
        'Reward calm behavior',
        'Use varying distances'
      ]
    }
  },
  come: {
    title: 'Teaching Your Dog to Come',
    videoUrl: '/tutorials/come-command.mp4',
    steps: [
      'Start in a quiet area with minimal distractions',
      'Show your dog a high-value treat',
      'Walk a few steps away and call their name followed by "Come!"',
      'When they come to you, immediately reward them',
      'Gradually increase the distance'
    ],
    tips: [
      'Never punish your dog when they come to you',
      'Make coming to you fun and rewarding',
      'Practice in different locations',
      'Use an excited, happy tone of voice'
    ],
    feedback: {
      score: 80,
      strengths: [
        'Enthusiastic recall command',
        'Immediate reward delivery',
        'Good use of positive reinforcement'
      ],
      improvements: [
        'Work on faster response time',
        'Practice with more distractions'
      ],
      tips: [
        'Use a long leash for safety during practice',
        'Incorporate games into training',
        'Practice at varying distances'
      ]
    }
  }
};

export function TutorialView() {
  const { command } = useParams<{ command: Command }>();
  const tutorial = command ? tutorials[command] : null;

  if (!tutorial) {
    return <div>Tutorial not found</div>;
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-amber-900 mb-4">{tutorial.title}</h1>
        <p className="text-lg text-gray-600 mb-8">
          Follow along with our detailed guide and video tutorial
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <VideoPlayer videoUrl={tutorial.videoUrl} title={tutorial.title} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Your Training Video</h3>
            <p className="text-gray-600 mb-4">
              Upload a video of your {command} training session to receive AI-powered feedback
            </p>
            <VideoUpload />
          </motion.div>
          <AIFeedback feedback={tutorial.feedback} />
        </div>
        <TutorialGuide
          title={tutorial.title}
          steps={tutorial.steps}
          tips={tutorial.tips}
        />
      </div>
    </div>
  );
}