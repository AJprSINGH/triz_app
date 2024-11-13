import React, { useState, useRef } from 'react';
import NavItem from './NavItem';
import ContactButton from './ContactButton';
import Menu from './Menu';
import FeatureList from './FeatureList';
import Link from 'next/link';  // Import Link from Next.js
import './header.css';
import { useRouter } from 'next/router';
const navItems = [
  { label: 'HOME', layerName: 'home', href: '/' },  // Add href for Home
  { label: 'PRODUCTS', layerName: 'products' },
  { label: 'SERVICES', layerName: 'services' },
  { label: 'ABOUTUS', layerName: 'aboutus', href: '/aboutus' },  // Add href for About Us
  { label: 'COMPANY', layerName: 'company' },
];

function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const buttonRefs = useRef({});
  const router = useRouter();  // Initialize useRouter hook
  const handleClick = () => {
    router.push('/contactGlobal');  // Navigate to /contactGlobal
  };
  const handleDropdownToggle = (layerName) => {
    if (activeDropdown === layerName) {
      setActiveDropdown(null); // Close if clicking the same button
    } else {
      setActiveDropdown(layerName);

      // Get the button's position using getBoundingClientRect
      const buttonRect = buttonRefs.current[layerName].getBoundingClientRect();
      setDropdownPosition({
        top: buttonRect.bottom + window.scrollY, // Position dropdown below the button
        left: buttonRect.left + window.scrollX, // Align with the button's left
      });
    }
  };

  const handleCloseOverlay = () => {
    setActiveDropdown(null); // Close the dropdown
  };

  return (
    <>
      <header className="flex overflow-hidden flex-wrap gap-5 justify-between px-16 py-2.5 w-full max-md:px-5 max-md:max-w-full bg-gradient-to-r from-green-200 to-green-400">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d81f651477a8ed310482ed81dfc64acfc3018cb20cf04e3989f524cbb10ffa51?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3"
          alt=""
          className="object-contain shrink-0 w-40 max-w-full aspect-[2.67]"
        />
        <nav className="flex flex-wrap gap-10 items-center my-auto max-md:max-w-full">
          {navItems.map((item) => (
            item.href ? (
              // If href is provided, wrap the item with a Link component
              <Link key={item.layerName} href={item.href}>
                <button
                  ref={(el) => (buttonRefs.current[item.layerName] = el)}
                  onClick={() => handleDropdownToggle(item.layerName)}
                  className="relative z-10 font-bold"
                >
                  <NavItem label={item.label} layerName={item.layerName} />
                </button>
              </Link>
            ) : (
              // If no href, just render the button as usual
              <button
                key={item.layerName}
                ref={(el) => (buttonRefs.current[item.layerName] = el)}
                onClick={() => handleDropdownToggle(item.layerName)}
                className="relative z-10 font-bold"
              >
                <NavItem label={item.label} layerName={item.layerName} />
              </button>
            )
          ))}
          <button className="contact-button gap-2 self-stretch px-1 py-1 font-bold text-white bg-sky-500 rounded-xl min-h-[10px]" onClick={handleClick}>
            Contact Us
          </button>
        </nav>
      </header>
      {(activeDropdown === 'products' || activeDropdown === 'services') && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={handleCloseOverlay}
        >
          <div
            className="relative bg-white p-5 rounded-lg shadow-lg"
            style={{
              position: 'absolute',
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`,
              width: 'auto', // Adjust width as needed
            }}
            onClick={(e) => e.stopPropagation()} // Prevent click on menu from closing
          >
            {activeDropdown === 'products' && <Menu />}
            {activeDropdown === 'services' && <FeatureList />}
            <button
              onClick={handleCloseOverlay}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times; {/* Close button */}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
