import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from '../components/TestimonialCard';
import { Dog, Award, Play, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Command } from '../types';

const commands: Array<{ name: Command; progress: number }> = [
  { name: 'sit', progress: 30 },
  { name: 'stay', progress: 45 },
  { name: 'come', progress: 20 }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    text: "PawPerfect transformed my puppy's behavior! The AI feedback was incredibly helpful.",
    rating: 5
  },
  {
    name: "Mike Peterson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    text: "The personalized training recommendations made all the difference for my rescue dog.",
    rating: 5
  },
  {
    name: "Emma Wilson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    text: "Finally, a training app that actually works! My dog learned basic commands in weeks.",
    rating: 4
  }
];

export function Dashboard() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center relative"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1920')] opacity-10" />
        <div className="relative">
          <Dog className="mx-auto h-16 w-16 text-amber-600 mb-6" />
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            Welcome to AI Dog Trainer!
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to start training your dog today? Choose a command to begin your training journey.
          </p>
        </div>
      </motion.section>

      {/* Command Selection Grid */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-amber-900 mb-6">Available Commands</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commands.map(({ name, progress }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.02 }}
              className="bg-amber-50 rounded-lg p-6 cursor-pointer"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-amber-900 capitalize">{name}</h3>
                <span className="text-sm text-amber-600">{progress}% Mastered</span>
              </div>
              <div className="w-full bg-amber-200 rounded-full h-2 mb-4">
                <div
                  className="bg-amber-600 rounded-full h-2"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <Link
                to={`/tutorial/${name}`}
                className="text-amber-600 hover:text-amber-700 flex items-center gap-2"
              >
                <Play className="h-4 w-4" />
                <span>Start Training</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Access Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/training">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <Play className="mx-auto h-8 w-8 text-amber-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Start New Training</h3>
            <p className="text-gray-600">Begin a new training session</p>
          </motion.div>
        </Link>
        <Link to="/progress">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <BarChart className="mx-auto h-8 w-8 text-amber-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Training Dashboard</h3>
            <p className="text-gray-600">Track your progress</p>
          </motion.div>
        </Link>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow-md text-center"
        >
          <Award className="mx-auto h-8 w-8 text-amber-600 mb-3" />
          <h3 className="font-semibold text-lg mb-2">Daily Tip</h3>
          <p className="text-gray-600">Consistency is key in dog training!</p>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-12 px-4 rounded-lg">
        <h2 className="text-2xl font-bold text-amber-900 mb-8 text-center">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}