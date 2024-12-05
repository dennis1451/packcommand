import React from 'react';
import { BookOpen } from 'lucide-react';

interface TutorialGuideProps {
  title: string;
  steps: string[];
  tips: string[];
}

export function TutorialGuide({ title, steps, tips }: TutorialGuideProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-3 mb-6">
        <BookOpen className="h-6 w-6 text-amber-600" />
        <h3 className="text-xl font-semibold text-gray-900">{title} Guide</h3>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="font-medium text-gray-900 mb-4">Step-by-Step Instructions</h4>
          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li key={index} className="flex space-x-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-medium">
                  {index + 1}
                </span>
                <span className="text-gray-600">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Pro Tips</h4>
          <ul className="space-y-2">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start space-x-2 text-gray-600">
                <span className="text-amber-600">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}