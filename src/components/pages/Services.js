import React, { useState } from 'react';

const Services = () => {
  const services = [
    {
      title: 'Veterinary',
      description: 'Providing exceptional care for your furry friends.',
      icon: 'fa-solid fa-paw',
    },
    {
      title: 'Landscaping',
      description: 'Transforming your outdoor space into a beautiful oasis.',
      icon: 'fa-solid fa-spade',
    },
    {
      title: 'Irrigation',
      description: 'Ensuring your lawn and garden stay healthy and flourishing.',
      icon: 'fa-solid fa-tint',
    },
    // Add more services here if needed
  ];

  const [isCardHovered, setIsCardHovered] = useState(null);

  const handleCardHover = (id) => {
    setIsCardHovered(id === isCardHovered ? null : id);
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-32">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={() => handleCardHover(null)}
            className={`relative cursor-pointer rounded-lg border-2 border-gray-200 p-4 hover:shadow-lg transition-all duration-300 ${
              isCardHovered === index ? 'z-10' : ''
            }`}
          >
            <i className={`absolute top-0 left-1/2 transform -translate-x-1/2 text-3xl text-primary ${
              isCardHovered === index ? 'text-3xl' : ''
            }`}>
              <span className={`fa-layers ${isCardHovered === index ? 'fa-fw' : ''}`}>
                <FontAwesomeIcon icon={[`fas`, service.icon]} />
              </span>
            </i>
            <h3 className="text-xl font-bold mt-4">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;