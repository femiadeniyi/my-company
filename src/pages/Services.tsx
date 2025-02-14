// src/pages/Services.tsx
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { FaLaptopCode, FaCloud, FaMobileAlt } from 'react-icons/fa';

const Services: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          title="Web Development" 
          description="We create modern and responsive websites that drive engagement and conversion." 
          icon={<FaLaptopCode />} 
        />
        <ServiceCard 
          title="Cloud Solutions" 
          description="Optimize your infrastructure with scalable and secure cloud solutions." 
          icon={<FaCloud />} 
        />
        <ServiceCard 
          title="Mobile Apps" 
          description="Build powerful mobile apps for both Android and iOS to reach your customers anywhere." 
          icon={<FaMobileAlt />} 
        />
      </div>
    </section>
  );
};

export default Services;
