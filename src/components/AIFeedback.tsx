import React from 'react';
import { Brain, ThumbsUp, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface AIFeedbackProps {
  feedback: {
    score: number;
    strengths: string[];
    improvements: string[];
    tips: string[];
  };
}

export function AIFeedback({ feedback }: AIFeedbackProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-center space-x-3 mb-6">
        <Brain className="h-6 w-6 text-amber-600" />
        <h3 className="text-xl font-semibold text-gray-900">PawAI Feedback</h3>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <ThumbsUp className="h-5 w-5 text-green-500" />
            <h4 className="font-medium text-gray-900">Strengths</h4>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {feedback.strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-3">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            <h4 className="font-medium text-gray-900">Areas for Improvement</h4>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {feedback.improvements.map((improvement, index) => (
              <li key={index}>{improvement}</li>
            ))}
          </ul>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Training Tips</h4>
          <ul className="space-y-2 text-gray-600">
            {feedback.tips.map((tip, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-amber-600">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}