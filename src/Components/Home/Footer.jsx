import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Colory. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex space-x-4">
            <a href="/about" className="text-sm hover:text-gray-400 transition">
              About
            </a>
            <a href="/guide" className="text-sm hover:text-gray-400 transition">
              Guide
            </a>
            <a href="/contact" className="text-sm hover:text-gray-400 transition">
              Contact
            </a>
            <a href="/privacy" className="text-sm hover:text-gray-400 transition">
              Privacy Policy
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;