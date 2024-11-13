import React from 'react';
import Link from 'next/link';

function FooterColumn({ title, items, itemRoutes }) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-sm mt-6 items-start text-black">
        <h4 className="text-xl font-bold">{title}</h4>
        {items.map((item, index) => (
          <Link key={index} href={itemRoutes[index]} className={`mt-${index === 0 ? '4' : '2'} text-sm font-bold hover:text-sky-600`}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FooterColumn;
