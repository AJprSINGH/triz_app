import React, { useState, useEffect } from 'react';

const ClientSection = () => {
  const clients = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    src: `/home_images/clients/${index + 1}.png`,
    alt: `Client logo ${index + 1}`
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <section className="flex overflow-hidden flex-col pt-2 pb-11 mt-10 mb-10 w-full text-3xl font-bold text-center text-amber-500 bg-blue-100 bg-opacity-80 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center">Our valued clients</h2>
      <div className="mt-6 max-md:mt-10 relative w-full h-[150px]">
        {clients.map((client, index) => (
          <div
            key={client.id}
            className={`absolute top-0 w-full h-full transition-all duration-1000 ${
              index === currentIndex
                ? 'opacity-100 translate-x-0'
                : index === (currentIndex - 1 + clients.length) % clients.length
                ? '-translate-x-full opacity-0'
                : 'translate-x-full opacity-0'
            }`}
          >
            <img
              src={client.src}
              alt={client.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSection;
