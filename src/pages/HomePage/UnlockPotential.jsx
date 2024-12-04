import React from 'react';
import Newone from './NewOne';
import Header from '../Header/NavBar';
import MainContent from './MainContent';
import Client from './ClientSection';
import Contact from '../Contact/ContactCard';
import Scroll from '../ScrollToTop/Scroll';
import Footer from '../Footer/Footer';
function UnlockPotential() {
  return (
    <div className="flex flex-col w-full max-w-full mx-auto overflow-x-hidden">
      <main className="font-bold text-xl">
      <Header />
      </main>
      <Newone />
      <MainContent />
      <Client />
      {/* Contact Us Section */}
      <div className="contact-us w-full mt-10">
        <h1 className="text-4xl font-bold text-center text-sky-500 mb-12">
        Contact Us
      </h1> 
        <Contact />
      </div>
      <Scroll />
      <Footer />
    </div>
  );
}

export default UnlockPotential;