import React, { useState, useRef, useEffect } from 'react';
import NavItem from './NavItem';
import Menu from './Menu';
import FeatureList from './FeatureList';
import Link from 'next/link'; 
import './header.css';
import { useRouter } from 'next/router';
import NV1 from './Navbar_new';
import FeatureLayout from './FeatureLayout';
import zIndex from '@mui/material/styles/zIndex';
import FeatureLayoutNew from '../../SComponents/FeatureLayout';
const navItems = [
  { label: 'HOME', layerName: 'home', href: '/' },
  { label: 'PRODUCTS', layerName: 'products' },
  { label: 'SERVICES', layerName: 'services' },
  { label: 'ABOUTUS', layerName: 'aboutus', href: '/aboutus' },
  { label: 'COMPANY', layerName: 'company' , href: '/career' },
];

function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const buttonRefs = useRef({});
  const dropdownRef = useRef(null);
  const router = useRouter();
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    zIndex: 1000,
  });

  useEffect(() => {
    // Only access window object on the client side
    if (typeof window !== 'undefined') {
      setDropdownPosition({
        top: buttonRefs.current[activeDropdown]?.getBoundingClientRect().bottom + window.scrollY+10,
        left: buttonRefs.current[activeDropdown]?.getBoundingClientRect().left + window.scrollX-100,
        zIndex: 1000,
      });
    }
  }, [activeDropdown]); // Only run when `activeDropdown` changes

  const handleClick = () => {
    router.push('/contactGlobal');
  };

  const handleDropdownToggle = (layerName) => {
    setActiveDropdown(layerName);
  };

  const handleMouseLeaveDropdown = () => {
    setActiveDropdown(null);
    setDropdownPosition({
      top: 0,
      left: 0,
      zIndex: 1000,
      transform: "translateX(-4%)",
    });
  };
  const handleLeftMenuHover = (id) => {
    if (id === 1 || id === 2 || id === 3 || id === 4 || id === 5 || id === 6) {
      setDropdownPosition({
        top: 50,
        left: "11%",
        transform: "translateX(-4%)",
        zIndex:1000
      });
    } else {
      if (typeof window !== 'undefined') {
        setDropdownPosition({
          top: buttonRefs.current[activeDropdown]?.getBoundingClientRect().bottom + window.scrollY,
          left: buttonRefs.current[activeDropdown]?.getBoundingClientRect().left + window.scrollX,
          zIndex: 1000,
          transform: "translateX(-4%)",
        });
      }
    }
  };
  const handleLeftMenuHoverNew = (id) => {
    if (id === 1 || id === 2 || id === 3 || id === 4 || id === 5 || id === 6) {
      setDropdownPosition({
        top: 50,
        left: "10%",
        transform: "translateX(-4%)",
        zIndex:1000
      });
    } else {
      setDropdownPosition({
        top: 50,
        left: "46%",
        transform: "translateX(-4%)",
        zIndex:1000
      });
    }
  };
  return (
    <>
      {/* Large Screens (lg) */}
      <header className="hidden lg:flex md:flex overflow-hidden flex-wrap gap-5 justify-between px-16 py-1 w-full bg-gradient-to-r from-green-200 to-green-400">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d81f651477a8ed310482ed81dfc64acfc3018cb20cf04e3989f524cbb10ffa51?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3"
          alt=""
          className="object-contain shrink-0 w-28 max-w-full aspect-[2.67]"
        />
        <nav className="flex flex-wrap gap-10 items-center my-auto">
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

      {/* Medium Screens (md) */}
      <header className="lg:hidden md:hidden sm2:flex overflow-hidden flex-wrap">
        {/* Future content for medium screens (md) */}
        <NV1 dropdownDataType="headerNavbar" className="flex-shrink-0 max-w-full"/>
        <div className="hidden"> {/* Placeholder or future header content for md screens */} </div>
      </header>

      {/* Small Screens (sm)
      <header className="lg:hidden md:hidden sm:flex overflow-hidden">
        Future content for small screens (sm)
        <NV1 />
        <div className="hidden"> Placeholder or future header content for sm screens  </div>
      </header>
       */}
      {/* Dropdown Content (Products / Services) */}
      {(activeDropdown === 'products' || activeDropdown === 'services') && (
        <div
          ref={dropdownRef}
          className="ps-item absolute transition-all duration-300 ease-in-out fade-in"
          style={dropdownPosition}
        >
          {activeDropdown === 'products' && (
            <div onMouseLeave={handleMouseLeaveDropdown}>
              <FeatureLayout onLeftMenuHover={handleLeftMenuHover} />
            </div>
          )}
          {activeDropdown === 'services' && (
            <div onMouseLeave={handleMouseLeaveDropdown}>
              <FeatureLayoutNew onLeftMenuHover={handleLeftMenuHoverNew} />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default NavBar;
