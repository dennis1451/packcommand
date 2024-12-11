import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Professional Trainer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    quote: "Pack Command transformed how I train dogs. The AI feedback is revolutionary and has helped me improve my training techniques significantly.",
    align: "right"
  },
  {
    id: 2,
    name: "Mike Peterson",
    role: "Dog Behaviorist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    quote: "The structured approach and personalized insights have made a remarkable difference in how I work with challenging cases. It's like having an expert assistant always available.",
    align: "left"
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Agility Trainer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    quote: "Finally found a training platform that combines technology with proven methods. The progress tracking and AI suggestions are game-changers for both trainers and dog owners.",
    align: "right"
  }
];

export function TestimonialSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-neutral-50 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy-800 mb-4">
            Trusted by Professional Trainers
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Join thousands of dog training professionals who have transformed their practice with Pack Command
          </p>
        </motion.div>

        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: testimonial.align === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex ${testimonial.align === 'left' ? 'justify-start' : 'justify-end'} relative`}
            >
              <div className={`flex items-center gap-6 max-w-2xl ${
                testimonial.align === 'left' ? 'flex-row' : 'flex-row-reverse'
              }`}>
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
                    </svg>
                  </div>
                </div>
                
                <div className={`glass p-6 rounded-2xl shadow-glass max-w-lg ${
                  testimonial.align === 'left' ? 'ml-4' : 'mr-4'
                }`}>
                  <p className="text-navy-700 mb-4 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-navy-800">{testimonial.name}</h3>
                    <span className="text-primary-500">•</span>
                    <p className="text-navy-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}