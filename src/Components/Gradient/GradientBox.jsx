import React from 'react';

const GradientBox = ({ children }) => {
  return (
    <div className="bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-white/10">
      <h1 className="text-4xl font-bold text-white mb-6 text-center">Gradient Generator</h1>
      {children}
    </div>
  );
};

export default GradientBox;
