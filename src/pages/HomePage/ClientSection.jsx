import React from 'react';

const ClientSection = () => {
  const clients = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    src: `/home_images/clients/${index + 1}.png`,
    alt: `Client logo ${index + 1}`,
  }));

  const clientWidth = 150; // Adjust the width of each logo image
  const containerWidth = clientWidth * clients.length; // Total width for all images

  return (
    <section className="flex overflow-hidden flex-col pt-2 pb-2 mt-10 mb-10 w-full text-3xl font-bold text-center text-amber-500 bg-blue-100 bg-opacity-80 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center">Our valued clients</h2>
      <div className="mt-0 max-md:mt-10 relative w-full h-[150px]">
        {/* Image container */}
        <div
          className="flex absolute gap-40 top-0 left-0 h-full animate-scroll"
          style={{
            width: `${containerWidth}px`, // Total width based on number of images
          }}
        >
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex-shrink-0 w-[150px] h-full" // Adjust logo width as needed
            >
              <img
                src={client.src}
                alt={client.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}

          {/* Duplicate the logos to create a continuous loop */}
          {clients.map((client) => (
            <div
              key={client.id + '-duplicate'}
              className="flex-shrink-0 w-[150px] h-full" // Same width as original logos
            >
              <img
                src={client.src}
                alt={client.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
