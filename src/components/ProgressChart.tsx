import React from 'react';
import { TrainingProgress } from '../types';

interface ProgressChartProps {
  progress: TrainingProgress[];
}

export function ProgressChart({ progress }: ProgressChartProps) {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold text-navy-800 mb-6">Training Progress</h2>
      <div className="space-y-6">
        {progress.map((item) => (
          <div key={item.command} className="space-y-2">
            <div className="flex justify-between mb-1">
              <span className="text-navy-700 font-medium capitalize">{item.command}</span>
              <span className="text-primary-600 font-semibold">{item.successRate}%</span>
            </div>
            <div className="w-full bg-neutral-100 rounded-full h-3">
              <div
                className="bg-primary-500 rounded-full h-3 transition-all duration-500"
                style={{ width: `${item.successRate}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}