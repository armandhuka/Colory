import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Home/Header';
import Home from './Components/Home/Home';
import Gradient from './Components/Gradient/Gradient';
import SavedGradients from './Components/SavedGradients/SavedGradients';

const App = () => {
  const [savedGradients, setSavedGradients] = useState([]);

  // Load saved gradients from localStorage on component mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('gradients')) || [];
    setSavedGradients(saved);
  }, []);

  // Save a new gradient to localStorage and state
  const saveGradient = (newGradient) => {
    const isDuplicate = savedGradients.some(
      (gradient) =>
        gradient.color1 === newGradient.color1 &&
        gradient.color2 === newGradient.color2 &&
        gradient.direction === newGradient.direction
    );

    const toastId = 'save-gradient-toast'; // Unique toast ID for saving

    if (!isDuplicate) {
      const updatedGradients = [...savedGradients, newGradient];
      setSavedGradients(updatedGradients);
      localStorage.setItem('gradients', JSON.stringify(updatedGradients));

      // Show success toast
      if (!toast.isActive(toastId)) {
        toast.success('Gradient saved successfully!', { toastId });
      }
    } else {
      // Show error toast for duplicates
      if (!toast.isActive(toastId)) {
        toast.error('This gradient is already saved!', { toastId });
      }
    }
  };

  // Delete a gradient from localStorage and state
  const deleteGradient = (index) => {
    const updatedGradients = savedGradients.filter((_, i) => i !== index);
    setSavedGradients(updatedGradients);
    localStorage.setItem('gradients', JSON.stringify(updatedGradients));
    toast.info('Gradient deleted successfully!');
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/gradient"
            element={
              <Gradient
                savedGradients={savedGradients}
                saveGradient={saveGradient}
              />
            }
          />
          <Route
            path="/saved-gradients"
            element={
              <SavedGradients
                savedGradients={savedGradients}
                deleteGradient={deleteGradient}
              />
            }
          />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
};

export default App;
