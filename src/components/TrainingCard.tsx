import React from 'react';
import { Command } from '../types';
import { PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TrainingCardProps {
  command: Command;
  description: string;
  imageUrl: string;
}

export function TrainingCard({ command, description, imageUrl }: TrainingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={command} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 capitalize">{command}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <Link
          to={`/tutorial/${command}`}
          className="mt-4 flex items-center space-x-2 text-amber-600 hover:text-amber-700"
        >
          <PlayCircle className="h-5 w-5" />
          <span>Watch Tutorial</span>
        </Link>
      </div>
    </div>
  );
}