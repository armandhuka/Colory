import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-3xl"></div>

      {/* Grid Layout Container */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <h1 className="text-6xl font-bold text-white mb-12 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          About Colory
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Image */}
          <div className="flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1964&q=80"
                alt="About Colory"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              What is Colory?
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Colory is a modern and intuitive gradient generator designed to help you create and save beautiful gradients with ease. Whether you're a designer, developer, or just someone who loves colors, Colory is here to make your life easier.
            </p>
            <p className="text-lg text-white/80 mb-6">
              With Colory, you can:
            </p>
            <ul className="list-disc list-inside text-lg text-white/80 mb-6">
              <li>Generate stunning gradients with just a few clicks.</li>
              <li>Save your favorite gradients for future use.</li>
              <li>Copy gradient CSS code to your clipboard instantly.</li>
            </ul>
            <button
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
              onClick={() => window.location.href = '/gradient'}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;