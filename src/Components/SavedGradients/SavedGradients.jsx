import React, { useState } from 'react';
import { FaTrash, FaCopy } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SavedGradients = ({ savedGradients, deleteGradient }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter gradients based on the search term
  const filteredGradients = savedGradients.filter((gradient) => {
    const gradientName = gradient?.name?.toLowerCase() || '';
    const gradientColor1 = gradient.color1.toLowerCase();
    const gradientColor2 = gradient.color2.toLowerCase();
    const search = searchTerm.toLowerCase();
    return (
      gradientName.includes(search) ||
      gradientColor1.includes(search) ||
      gradientColor2.includes(search)
    );
  });

  // Function to copy color code to clipboard
  const copyColorCode = (colorCode) => {
    navigator.clipboard.writeText(colorCode)
      .then(() => toast.success('Gradient CSS copied to clipboard!'))
      .catch((err) => console.error('Failed to copy: ', err));
  };

  // Function to confirm deletion
  const confirmDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this gradient?')) {
      deleteGradient(index);
      toast.success('Gradient deleted successfully!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-900/20 backdrop-blur-xl"></div>

      {/* Saved Gradients Container */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center mb-8 text-white bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          Saved Gradients
        </h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or color..."
            className="w-full md:w-1/2 lg:w-1/3 p-3 rounded-lg shadow-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Gradients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGradients.map((gradient, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-lg p-6 overflow-hidden"
              style={{
                background: `linear-gradient(90deg, ${gradient.color1}, ${gradient.color2})`,
              }}
            >
              {/* Gradient Name */}
              <h2 className="text-xl font-semibold text-white drop-shadow-lg mb-2">
                {gradient.name || 'Untitled Gradient'}
              </h2>

              {/* Actions */}
              <div className="absolute top-3 right-3 flex gap-3">
                {/* Copy Button */}
                <button
                  onClick={() =>
                    copyColorCode(
                      `background: linear-gradient(90deg, ${gradient.color1}, ${gradient.color2});`
                    )
                  }
                  className="text-white bg-blue-500 hover:bg-blue-700 p-2 rounded-full shadow-md transition"
                  title="Copy CSS"
                >
                  <FaCopy />
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => confirmDelete(index)}
                  className="text-white bg-red-500 hover:bg-red-700 p-2 rounded-full shadow-md transition"
                  title="Delete Gradient"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Toast Notifications */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default SavedGradients;
