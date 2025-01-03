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
    <div className="flex overflow-hidden relative flex-col items-end w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:max-w-full"style={{
        backgroundImage: 'url("Resources_Images/Group 395 (1).png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '70vh',
      }}
      >
      <div className="flex overflow-hidden flex-col pt-36 pr-4 max-w-full h-full bg-white bg-opacity-10 text-white bg-opacity-0 w-[600px] max-md:px-5 backdrop-blur-md max-md:pb-24">
        <h1 className="text-4xl font-intersemibold text-center max-md:max-w-full max-md:text-4xl">
          Your Partner in Innovation And Excellence
        </h1>
        <button 
      className="self-center px-5 py-2 mt-12 mb-0 text-lg font-inter bg-sky-500 rounded-3xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
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