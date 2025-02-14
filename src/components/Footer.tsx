import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <p>&copy; 2025 Femtinz. All rights reserved.</p>
        <div className="space-x-6 mt-4">
          <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
          <a href="https://linkedin.com" className="hover:text-gray-400">LinkedIn</a>
          <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
