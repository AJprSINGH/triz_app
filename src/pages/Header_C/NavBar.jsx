import React, { useState, useRef,useEffect } from 'react';
import NavItem from './NavItem';
import Menu from './Menu';
import FeatureList from './FeatureList';
import Link from 'next/link'; 
import './header.css';
import { useRouter } from 'next/router';
import NV1 from '../Header/Navbar_new';
import MyComponent from './MyComponent';
const navItems = [
  { label: 'HOME', layerName: 'home', href: '/center_home' },
  { label: 'PRODUCTS', layerName: 'products' },
  { label: 'ABOUTUS', layerName: 'aboutus', href: '/aboutus' },
  { label: 'COMPANY', layerName: 'company', href: '/career' },
];
const dropdownData = {
  PRODUCTS: [
    { label: "K12", href: "/" },
    { label: "Higher Studies", href: "/lmsservice" },
    { label: "Corporate", href: "/ccservice" },
  ],
};
function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const buttonRefs = useRef({});
  const dropdownRef = useRef(null);
  const router = useRouter();
  const [dropdownDimensions, setDropdownDimensions] = useState({ width: 0, height: 0 });

useEffect(() => {
  if (dropdownRef.current) {
    setDropdownDimensions({
      width: dropdownRef.current.offsetWidth,
      height: dropdownRef.current.offsetHeight,
    });
  }
}, [activeDropdown]);
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
      {/* Large Screens (lg) */}
      <header className="relative hidden lg:flex md:flex overflow-hidden flex-wrap gap-5 justify-between px-16 py-1 w-full bg-gradient-to-r from-[rgb(42,62,92)] to-[rgb(42,62,92)]">
        <img
          loading="lazy"
          src="/center_home_images/Group 190 (1).png"
          alt=""
          className="object-contain shrink-0 w-28 max-w-full aspect-[2.67]"
        />
        <nav className="flex flex-wrap gap-10 items-center my-auto text-white">
          {navItems.map((item) => (
            item.href ? (
              <Link key={item.layerName} href={item.href}>
                <button
                  ref={(el) => (buttonRefs.current[item.layerName] = el)}
                  onMouseEnter={() => handleDropdownToggle(item.layerName)}
                  className="relative z-10 font-bold text-white"
                >
                  <NavItem label={item.label} layerName={item.layerName} />
                </button>
              </Link>
            ) : (
              <button
                key={item.layerName}
                ref={(el) => (buttonRefs.current[item.layerName] = el)}
                onMouseEnter={() => handleDropdownToggle(item.layerName)}
                className="relative z-10 font-bold text-white"
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
      <header className="lg:hidden md:hidden sm2:flex overflow-hidden">
        {/* Future content for medium screens (md) */}
        <NV1 dropdownDataType="headerCNavbar" />
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
      {(activeDropdown === 'products') && (
        <div
        ref={dropdownRef}
        className={`ps-item absolute transition-all duration-300 ease-in-out fade-in`}
        style={{
          top: 50,
          left: '8%', 
          transform: 'translateX(-4%)', 
          zIndex: 1000,
        }}
      >
        {activeDropdown === 'products' && (
          <div onMouseLeave={handleMouseLeaveDropdown}>
                  <MyComponent />
          </div>
        )}
      </div>
      )}
    </>
  );
}

export default NavBar;
{/* <div className="dropdown-menu-wrapper">
                    <ul className="dropdown-menu">
                      {dropdownData.PRODUCTS.map((product) => (
                        <li key={product.label}>
                          <Link href={product.href} className="dropdown-item">
                            {product.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div> */}