'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const features = [
    {
      title: 'Machine Learning',
      description: 'Advanced ML models for complex problems',
    },
    {
      title: 'AI Research',
      description: 'Cutting-edge research and innovation',
    },
    {
      title: 'Deployment & Scale',
      description: 'Production-ready scalable solutions',
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Gradient Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF6B00] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute -bottom-8 right-10 w-96 h-96 bg-[#0A3D9C] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Building the Future with
            <span className="block text-[#FF6B00]">Artificial Intelligence</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We develop safe, scalable AI solutions for tomorrow.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#FF6B00] text-white font-semibold rounded-xl hover:bg-[#FF6B00]/90 transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            Explore Our Work
            <ArrowRight size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-[#0A3D9C] text-[#0A3D9C] font-semibold rounded-xl hover:bg-[#0A3D9C] hover:text-white transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 backdrop-blur"
            >
              <div className="w-12 h-12 bg-[#FF6B00] rounded-full mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
