import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-lg py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <div className="text-2xl md:text-sm font-semibold">
          <Link to="/">mickey's jewelry studio</Link>
        </div>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/services" className="hover:text-gray-400">Services</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
