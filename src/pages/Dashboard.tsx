import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialSection } from '../components/TestimonialSection';
import { ArrowRight, Heart, Shield, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: Heart,
    title: "Strengthen Your Bond",
    description: "Build a deeper connection with your furry friend through positive reinforcement"
  },
  {
    icon: Shield,
    title: "Expert Guidance",
    description: "Access professional training techniques backed by behavioral science"
  },
  {
    icon: Brain,
    title: "Smart Progress Tracking",
    description: "Monitor your dog's development with AI-powered insights"
  }
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-amber-100 to-brown-50 opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown-800 mb-6 leading-tight">
              Unleash Your Dog's
              <span className="block text-amber-600">Full Potential</span>
            </h1>
            
            <p className="text-lg md:text-xl text-brown-700 mb-8 leading-relaxed">
              Join thousands of happy dog owners who have transformed their relationship with their pets through our AI-powered training platform.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/training"
                className="inline-flex items-center px-8 py-3 bg-brown-600 text-white rounded-xl font-semibold hover:bg-brown-700 transition-all transform hover:scale-105 shadow-lg group"
              >
                Start Training
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 bg-amber-100 text-amber-800 rounded-xl font-semibold hover:bg-amber-200 transition-all shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {benefits.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-amber-100"
              >
                <Icon className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold text-brown-900 mb-2">{title}</h3>
                <p className="text-brown-600">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <TestimonialSection />
    </div>
  );
}