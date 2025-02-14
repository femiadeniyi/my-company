import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center bg-blue-600 text-white text-center py-16">
      <h1 className="text-5xl font-extrabold mb-6">Welcome to mickey's jewelry studio</h1>
      <p className="text-xl mb-8">We provide world-class solutions to help your business grow.</p>
      <Link to="/services" className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold transition duration-300 hover:bg-gray-200">
        Discover Our Services
      </Link>
    </section>
  );
};

export default Home;
