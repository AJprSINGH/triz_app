import React from 'react';
import SocialIcons from './SocialIcons';
import FooterColumn from './FooterColumn';

const footerColumns = [
  {
    title: 'Home',
    items: ['Home', 'About Us', 'Who We Serve', 'Changes and Benefits', 'Blogs and Brochures', 'Contact Us', 'Request a Free Demo'],
    itemRoutes: ['/', '/aboutus', '/who-we-serve', '/changes-and-benefits', '/blogs-and-brochures', '/contactus', '/request-demo'] // Example paths
  },
  {
    title: 'K-12 Solution',
    items: ['Home', 'About Us', 'Products', 'Services', 'Resources & Blogs', 'Contact Us', 'Book Demo'],
    itemRoutes: ['/', '/aboutus', '/erpservice', '/supportservice', '/resources', '/contactGlobal', '/book-demo'] // Example paths
  },
  {
    title: 'Higher Education',
    items: ['Home', 'About Us', 'Products', 'Services', 'Resources & Blogs', 'Contact Us', 'Book Demo'],
    itemRoutes: ['/', '/aboutus', '/products', '/services', '/resources-blogs', '/contactus', '/book-demo'] // Example paths
  },
  {
    title: 'Corporate Solution',
    items: ['Home', 'About Us', 'Products', 'Services', 'Resources & Blogs', 'Contact Us', 'Book Demo'],
    itemRoutes: ['/', '/aboutus', '/products', '/services', '/resources-blogs', '/contactus', '/book-demo'] // Example paths
  }
];

function Footer() {
  return (
    <footer className="flex flex-col items-center px-2 py-1 max-md:px-2 bg-gradient-to-r from-[rgb(42,62,92)] to-[rgb(42,62,92)]">
      <div className="flex flex-wrap mt-10 gap-48 w-full max-w-[1760px] max-md:max-w-full">
        <div className="flex flex-col items-center font-bold">
          <img
            loading="lazy"
            src="/footer_c_images/Group 232.png"
            className="object-contain max-w-full ml-20 aspect-[2.67] w-[200px]"
            alt="Company Logo"
          />
        </div>
        <nav className="flex-auto my-auto">
          <div className="flex max-md:flex-col">
            {footerColumns.map((column, index) => (
              <FooterColumn
                key={index}
                title={column.title}
                items={column.items}
                itemRoutes={column.itemRoutes}  // Pass itemRoutes to FooterColumn
              />
            ))}
          </div>
        </nav>
      </div>

      {/* Centered Copyright and Social Icons */}
      <div className="flex flex-wrap justify-center items-center gap-40 mt-10 text-center">
        <p className="text-xl font-bold text-white">
          All Rights Are Reserved By 2024 © Triz Innovation PVT LTD.
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
}

export default Footer;
