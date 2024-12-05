import React from 'react';
import { TrainingProgress } from '../types';

interface ProgressChartProps {
  progress: TrainingProgress[];
}

export function ProgressChart({ progress }: ProgressChartProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-pine-800 mb-4">Training Progress</h2>
      <div className="space-y-4">
        {progress.map((item) => (
          <div key={item.command}>
            <div className="flex justify-between mb-1">
              <span className="text-stone-700 capitalize">{item.command}</span>
              <span className="text-stone-600">{item.successRate}%</span>
            </div>
            <div className="w-full bg-sand-100 rounded-full h-2">
              <div
                className="bg-forest-500 rounded-full h-2"
                style={{ width: `${item.successRate}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}