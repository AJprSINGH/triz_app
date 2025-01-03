import * as React from "react";
import Content1 from "./blogs/BlogsPage";
import Content2 from "./blogs1/BlogsPage";
import Content3 from "./blogs2/BlogsPage";
import Content4 from "./blogs3/BlogsPage";
import Header from "../../pages/Header/NavBar";
import Footer from "../../pages/Footer/Footer";
export default function HeroSection() {
  return (
    <div className="flex flex-col w-full max-w-full mx-auto overflow-x-hidden">
    <main className='text-xl'>
    <Header />
    </main>
    <div className="flex overflow-hidden relative flex-col items-end px-20 w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:max-w-full"style={{
        backgroundImage: 'url("Resources_Images/Group 395 (1).png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '90vh',
      }}
      >
      <div className="flex overflow-hidden flex-col px-11 pt-24 pb-52 max-w-full bg-white text-white font-intermedium bg-opacity-0 w-[880px] max-md:px-5 max-md:pb-24">
        <h1 className="text-6xl font-semibold text-center max-md:max-w-full max-md:text-4xl">
          Your Partner in Innovation and Excellence
        </h1>
        <button 
      className="self-end px-5 py-2 mt-12 mr-60 mb-0 text-2xl font-bold font-inter bg-sky-500 rounded-3xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
      onClick={() => {}}
      tabIndex={0}
      aria-label="Book Your Demo Now"
    >
      Book Your Demo Now!
    </button>
      </div>
    </div>
    <Content1 />
    <Content2 />
    <Content3 />
    <Content4 />
    <Footer />
    </div>
  );
}