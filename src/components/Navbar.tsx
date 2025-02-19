import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const getLinkClass = (path: string) => {
    return location.pathname === path
      ? 'text-gray-400'
      : 'hover:text-gray-400';
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <div className="text-2xl md:text-sm font-semibold">
          <Link to="/">mickey's jewelry studio</Link>
        </div>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            <Link to="/" className={getLinkClass('/')}>Home</Link>
            <Link to="/services" className={getLinkClass('/services')}>Services</Link>
            <Link to="/about" className={getLinkClass('/about')}>About</Link>
            <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700 text-white p-4 space-y-4 hover:text-amber-300">
          <Link to="/" className={getLinkClass('/')}>Home<br/></Link>
          <Link to="/services" className={getLinkClass('/services')}>Services<br/></Link>
          <Link to="/about" className={getLinkClass('/about')}>About<br/></Link>
          <Link to="/contact" className={getLinkClass('/contact')}>Contact<br/></Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
