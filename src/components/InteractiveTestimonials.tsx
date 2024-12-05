import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Professional Trainer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    text: "Pack Command transformed how I train dogs. The AI feedback is revolutionary!"
  },
  {
    id: 2,
    name: "Mike Peterson",
    role: "Dog Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    text: "Finally found a training approach that actually works for my energetic pup."
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Veterinarian",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    text: "I recommend Pack Command to all my clients. It's scientifically sound and effective."
  },
  {
    id: 4,
    name: "David Chen",
    role: "Agility Trainer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    text: "The structured approach helped me train multiple championship-winning dogs."
  },
  {
    id: 5,
    name: "Lisa Martinez",
    role: "Dog Behaviorist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    text: "As a professional behaviorist, I'm impressed by the scientific approach to training."
  }
];

const sloganParts = [
  "Transform",
  "your dog's behavior",
  "with expert guidance,",
  "personalized training plans,",
  "AI-powered feedback,",
  "and proven results"
];

export function InteractiveTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null);

  return (
    <div className="py-16 px-4 bg-sand-50 rounded-lg">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-wrap items-center justify-center gap-4 text-3xl font-bold text-pine-800">
          {sloganParts.map((part, index) => (
            <div key={index} className="flex items-center gap-4">
              <span>{part}</span>
              {index < testimonials.length && (
                <div className="relative">
                  <motion.img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-12 h-12 rounded-full object-cover cursor-pointer border-2 border-forest-500"
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={() => setActiveTestimonial(testimonials[index])}
                    onHoverEnd={() => setActiveTestimonial(null)}
                  />
                  <AnimatePresence>
                    {activeTestimonial?.id === testimonials[index].id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute z-10 w-80 bg-white rounded-lg shadow-xl p-6 text-left text-base"
                        style={{ top: "120%", left: "50%", transform: "translateX(-50%)" }}
                      >
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
                        <p className="text-stone-600 italic mb-4">{activeTestimonial.text}</p>
                        <div>
                          <p className="font-semibold text-pine-800">{activeTestimonial.name}</p>
                          <p className="text-sm text-forest-600">{activeTestimonial.role}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}