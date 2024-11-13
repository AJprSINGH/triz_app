import React from 'react';
import ClientLogo from './ClientLogo';

const ClientSection = () => {
  const clients = [
    { id: 1, src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d1fe3ea561597731100080264a757810f895badb6171eb93eb065f73b35d2b32?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3', alt: 'Client logo 1' },
  ];

  return (
    <section className="flex overflow-hidden flex-col pt-2 pb-11 mt-10 mb-10 w-full text-3xl font-bold text-center text-amber-500 bg-blue-100 bg-opacity-80 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center">Our valued clients</h2>
      <div className="mt-6 max-md:mt-10">
        {clients.map((client) => (
          <ClientLogo key={client.id} src={client.src} alt={client.alt} />
        ))}
      </div>
    </section>
  );
};

export default ClientSection;