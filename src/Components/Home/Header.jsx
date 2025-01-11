import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the hamburger menu

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Colory
        </h1>

        {/* Hamburger Menu Icon (Visible on Small Screens) */}
        <button
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>

        {/* Navigation Links (Visible on Larger Screens) */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link to="/" className="text-gray-800 hover:text-purple-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/gradient" className="text-gray-800 hover:text-purple-600 transition">
              Tool
            </Link>
          </li>
          <li>
            <Link to="/saved-gradients" className="text-gray-800 hover:text-purple-600 transition">
              Saved
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (Visible on Small Screens) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/20 backdrop-blur-md shadow-lg">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                to="/"
                className="text-gray-800 hover:text-purple-600 transition"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/gradient"
                className="text-gray-800 hover:text-purple-600 transition"
                onClick={toggleMenu}
              >
                Tool
              </Link>
            </li>
            <li>
              <Link
                to="/saved-gradients"
                className="text-gray-800 hover:text-purple-600 transition"
                onClick={toggleMenu}
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;