import React from 'react';
import Link from 'next/link';

function FooterColumn({ title, items = [], itemRoutes = [] }) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-sm mt-6 items-start text-black">
        <h4 className="text-white text-xl font-bold">{title}</h4>
        {items.length > 0 ? (
          items.map((item, index) => (
            <Link
              key={index}
              href={itemRoutes[index] || "#"}  // Fallback in case itemRoutes[index] is undefined
              className={`mt-${index === 0 ? '4' : '2'} text-white text-sm font-bold hover:text-sky-600`}
            >
              {item}
            </Link>
          ))
        ) : (
          <p>No items available</p>  // Handle case when items array is empty
        )}
      </div>
    </div>
  );
}

export default FooterColumn;
