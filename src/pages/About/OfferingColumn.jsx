import React from 'react';

function OfferingColumn({ imageSrc, title }) {
  return (
    <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-10">
        <div className="flex flex-col justify-center self-center p-12 max-w-full rounded-full bg-sky-500 shadow-[4px_4px_8px_rgba(0,0,0,0.25)] w-[250px] max-md:px-5">
          <img loading="lazy" src={imageSrc} alt={title} className="object-contain w-full aspect-square" />
        </div>
        <h3 className="justify-center self-center mt-6 text-xl font-semibold text-amber-500">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default OfferingColumn;