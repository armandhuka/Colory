import React from 'react';
import { FaPaintBrush, FaSave, FaEye, FaCopy } from 'react-icons/fa';

const Guide = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-3xl"></div>

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <h1 className="text-6xl font-bold text-white mb-12 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
          Guide to Using Colory
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-slide-in-left">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-4">
                <FaPaintBrush className="text-white text-3xl" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Step 1: Generate Gradients</h2>
              <p className="text-lg text-white/80">
                Use the <strong>Tool</strong> page to generate gradients. Choose colors, randomize, and select directions.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-slide-in-right">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4">
                <FaSave className="text-white text-3xl" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Step 2: Save Gradients</h2>
              <p className="text-lg text-white/80">
                Save your favorite gradients for future use with a single click.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-slide-in-left">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-4">
                <FaEye className="text-white text-3xl" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Step 3: View Saved Gradients</h2>
              <p className="text-lg text-white/80">
                Access your saved gradients anytime on the <strong>Saved</strong> page.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-slide-in-right">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mb-4">
                <FaCopy className="text-white text-3xl" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Step 4: Copy CSS Code</h2>
              <p className="text-lg text-white/80">
                Copy the CSS code for your gradient and use it in your projects.
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center mt-12 animate ```jsx
        fade-in">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Start Creating
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guide;