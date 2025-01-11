import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  const rotate3D = {
    hidden: { rotateY: 90, opacity: 0 },
    visible: { rotateY: 0, opacity: 1, transition: { duration: 1, delay: 0.8 } },
  };

  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-indigo-900/70 backdrop-blur-sm"></div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{ y: -100, x: Math.random() * 1000, opacity: 0 }}
            animate={{
              y: window.innerHeight,
              x: Math.random() * 1000,
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Banner Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-wrap justify-center items-center">
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
          <motion.h1
            className="text-6xl font-bold text-white mb-4"
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Colory
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 mb-6"
            variants={slideInRight}
            initial="hidden"
            animate="visible"
          >
            Create and save beautiful gradients with ease! Unleash your creativity and design stunning
            color combinations.
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = '/gradient')}
          >
            Get Started
          </motion.button>
        </div>

        {/* Right Column - Gradient Design */}
        <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
          <motion.div
            className="relative z-10 text-center bg-white/20 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md mx-auto"
            variants={rotate3D}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg shadow-lg mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox=" 0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-white">Gradient Design</h2>
              <p className="text-white/80">Explore a variety of beautiful gradients!</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;