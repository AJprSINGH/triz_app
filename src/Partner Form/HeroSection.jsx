import * as React from "react";
import Header from "../pages/Header/NavBar";
import Footer from "../pages/Footer/Footer";
import ContactPage from "./contact/ContactPage";
export default function HeroSection() {
    return (
<div className="flex flex-col w-full max-w-full mx-auto overflow-x-hidden">
    <main className='text-xl'>
    <Header />
    </main>
    <div className="flex overflow-hidden relative flex-col items-end w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:max-w-full"style={{
        backgroundImage: 'url("Partners_Images/Frame 1618872157.png")',
        backgroundSize: '145%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '70vh',
      }}
      >
      <div className="flex overflow-hidden flex-col lg:pt-52 lg:pr-4 sm:pt-32 max-w-full h-full bg-opacity-10 text-border-white lg:w-[600px] sm:w-full max-md:px-5 max-md:pb-24">
      <img
          loading="lazy"
          src="Partners_Images/Partner With Us.png"
          alt="XYZ"
          className="w-[100%]"
        />
      </div>
    </div>
    <ContactPage />
    <Footer/>
</div>
    );
    }