import React, { useState, useRef } from 'react';
import NavItem from './NavItem';
import Menu from './Menu';
import FeatureList from './FeatureList';
import Link from 'next/link'; 
import './header.css';
import { useRouter } from 'next/router';

const navItems = [
  { label: 'HOME', layerName: 'home', href: '/' },
  { label: 'PRODUCTS', layerName: 'products' },
  { label: 'SERVICES', layerName: 'services' },
  { label: 'ABOUTUS', layerName: 'aboutus', href: '/aboutus' },
  { label: 'COMPANY', layerName: 'company' },
];

function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const buttonRefs = useRef({});
  const dropdownRef = useRef(null);
  const router = useRouter();

  const handleClick = () => {
    router.push('/contactGlobal');
  };

  const handleDropdownToggle = (layerName) => {
    setActiveDropdown(layerName); // Set active dropdown on hover
  };

  const handleMouseLeaveDropdown = () => {
    setActiveDropdown(null); // Close dropdown when leaving the dropdown content
  };

  return (
    <>
      <header className="flex overflow-hidden flex-wrap gap-5 justify-between px-16 py-1 w-full max-md:px-5 max-md:max-w-full bg-gradient-to-r from-green-200 to-green-400">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d81f651477a8ed310482ed81dfc64acfc3018cb20cf04e3989f524cbb10ffa51?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3"
          alt=""
          className="object-contain shrink-0 w-28 max-w-full aspect-[2.67]"
        />
        <nav className="flex flex-wrap gap-10 items-center my-auto max-md:max-w-full">
          {navItems.map((item) => (
            item.href ? (
              <Link key={item.layerName} href={item.href}>
                <button
                  ref={(el) => (buttonRefs.current[item.layerName] = el)}
                  onMouseEnter={() => handleDropdownToggle(item.layerName)}
                  className="relative z-10 font-bold"
                >
                  <NavItem label={item.label} layerName={item.layerName} />
                </button>
              </Link>
            ) : (
              <button
                key={item.layerName}
                ref={(el) => (buttonRefs.current[item.layerName] = el)}
                onMouseEnter={() => handleDropdownToggle(item.layerName)}
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
          ref={dropdownRef}
          className="ps-item absolute bg-white p-5 rounded-t-lg shadow-lg"
          style={{
            top: buttonRefs.current[activeDropdown]?.getBoundingClientRect().bottom + window.scrollY,
            left: buttonRefs.current[activeDropdown]?.getBoundingClientRect().left + window.scrollX,
            zIndex: 1000,  // Ensure dropdown is above other content
          }}
        >
          {activeDropdown === 'products' && (
            <div onMouseLeave={handleMouseLeaveDropdown}>
              <Menu />
            </div>
          )}
          {activeDropdown === 'services' && (
            <div onMouseLeave={handleMouseLeaveDropdown}>
              <FeatureList />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default NavBar;