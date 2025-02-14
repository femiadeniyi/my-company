import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center transition duration-300 hover:shadow-2xl">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
