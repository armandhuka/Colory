import React from 'react';
import { FaCopy, FaSave } from 'react-icons/fa';
import { toast } from 'react-toastify';

const GradientActions = ({
  color1,
  color2,
  percentage1,
  percentage2,
  direction,
  gradientName,
  saveGradient,
}) => {
  const copyToClipboard = () => {
    const gradientCode = `background: linear-gradient(${direction}, ${color1} ${percentage1}%, ${color2} ${percentage2}%);`;
    navigator.clipboard.writeText(gradientCode)
      .then(() => toast.success('Gradient code copied to clipboard!'))
      .catch(() => toast.error('Failed to copy gradient code.'));
  };

  const handleSaveGradient = () => {
    if (!gradientName) {
      toast.error('Please enter a name for the gradient.');
      return;
    }
    const newGradient = { color1, color2, percentage1, percentage2, direction, name: gradientName };
    saveGradient(newGradient);
    toast.success('Gradient saved successfully!');
  };

  return (
    <div className="flex justify-between">
      <button onClick={copyToClipboard} className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
        <FaCopy className="mr-2" /> Copy Gradient
      </button>
      <button onClick={handleSaveGradient} className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
        <FaSave className="mr-2" /> Save Gradient
      </button>
    </div>
  );
};

export default GradientActions;
