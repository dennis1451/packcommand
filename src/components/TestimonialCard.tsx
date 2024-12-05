import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  image: string;
  text: string;
  rating: number;
}

export function TestimonialCard({ name, image, text, rating }: TestimonialProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg text-pine-800">{name}</h3>
          <div className="flex text-forest-400">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-stone-600 italic">{text}</p>
    </motion.div>
  );
}