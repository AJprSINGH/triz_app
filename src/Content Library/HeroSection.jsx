import React from "react";
import Header from "../pages/Header/NavBar";
import Footer from "../pages/Footer_C/Footer";
import Features from "./KeyFeatures";
import  Benefits  from "./benefits/Benefits";
const HERO_BUTTONS = [
    { text: "Get Your Solution Now!" },
    { text: "Request a Demo" }
  ];
export default function BlogsPage() {
    
    return (
<>
<main className='text-xl'>
    <Header />
    </main>
<div className="flex overflow-hidden relative flex-col justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("Design_one_images/Group 1321314639.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
  }}
  >
  <div className="flex overflow-hidden flex-col pt-20 max-w-full h-full bg-white text-white bg-opacity-0 w-[600px] max-md:px-5 max-md:pb-24">
    <h1 className="text-4xl font-intersemibold text-center max-md:max-w-full max-md:text-4xl">
    Empower Your Workforce with a Comprehensive HR Content Library
    </h1>
    <h4 className="text-lg mt-20 font-intersemibold text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    The ultimate resource hub to enhance employee engagement, development, and compliance.
    </h4>
    <div className="flex flex-row gap-10 items-center justify-center">
    <button 
  className="self-center px-5 py-2 mt-12 mb-0 text-sm font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
  style={{
    background: 'rgba(34, 69, 111, 1)'
  }}
  onClick={() => {}}
  tabIndex={0}
  aria-label="Book Your Demo Now"
>
  Get Free Demo
</button>
<button 
  className="self-center px-5 py-2 mt-12 mb-0 text-sm font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
  style={{
    background: 'rgba(34, 69, 111, 1)'
  }}
  onClick={() => {}}
  tabIndex={0}
  aria-label="Book Your Demo Now"
>
  Get Your Solution Today
</button>
</div>
  </div>
    </div>
    <div className="rounded-none">
      <div className="flex mx-20 max-md:flex-col">
        <div className="flex flex-col w-6/12 mt-12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="/hr_design_one_images/image 7.png"
            alt="Educational CRM platform interface showcase"
            className="object-contain grow w-[80%] aspect-[1.58] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full font-bold max-md:mt-10 max-md:max-w-full">
            <div className="text-xl font-inter text-right max-md:mr-2.5 max-md:max-w-full" style={{
                color:'rgba(61, 96, 149, 1)'
            }}>
             Our HR Content Library is a curated collection of essential resources, tools, and templates 
             designed to streamline your HR processes and elevate workforce management. 
            </div>
            <div className="flex gap-2 justify-between self-end mt-12 max-w-full text-xs w-[380px] max-md:mt-10">
              {HERO_BUTTONS.map((button, index) => (
                <button key={index}
                 className={`gap-2.5 self-stretch px-5 py-2 bg-sky-500 font-inter rounded-3xl text-white`}
                 tabIndex="0"
                 style={{
                    background:'rgba(17, 134, 254, 1)'
                 }}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="flex overflow-hidden relative flex-col justify-center mt-10 items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("Design_one_images/Group 1321314639 (1).png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
  }}
  >
  <div className="flex overflow-hidden flex-col pt-20 max-w-full h-full bg-white text-white bg-opacity-0 w-[600px] max-md:px-5 max-md:pb-24">
    <h1 className="text-2xl font-inter text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    Streamline Your Admissions Process with Scholar Clone Education CRM
    </h1>
    <h4 className="text-[15px] mt-20 font-inter text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgb(0, 0, 0)'
    }}>
    Scholar Clone Education CRM is a comprehensive solution designed to address the unique  challenges of educational institutions. From managing leads to tracking applications and  automating communications, our CRM simplifies the entire admissions process. Built for  efficiency, scalability, and personalization, Scholar Clone Education CRM is the ultimate  tool to enhance student engagement and boost enrollment success.
    </h4>
    <div className="flex flex-row gap-10 mt-10 items-center justify-center">
    <button
                 className={`gap-2.5 self-stretch px-3 py-2 font-inter bg-sky-500 rounded-3xl text-white text-xs`}
                 tabIndex="0"
                 style={{
                    background:'rgba(17, 134, 254, 1)'
                 }}
                >
                  Get Your CRM Now!
                </button>
</div>
  </div>
    </div> */}
    <div className="flex overflow-hidden relative flex-col justify-center mt-10 items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
      backgroundImage: 'url("Design_one_images/Group 1321314640.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      height: '110vh',
    }}
    >
    <Features />
    </div>
    <Benefits />
    <h1 className="text-3xl mt-40 font-inter text-center max-md:max-w-full max-md:text-4xl"style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    Ready to Transform Your HR Operations?
    </h1>
    <h4 className="text-2xl mt-2 font-inter text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    Unlock the power of an all-in-one HR Content Library and build a workplace that<br/> thrives on efficiency, transparency, and growth.
    </h4>
    <div className="flex flex-row gap-10 mb-40 text-white items-center justify-center">
    <button 
  className="self-center px-5 py-2 mt-12 mb-0 text-sm font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
  style={{
    background: 'rgba(34, 69, 111, 1)'
  }}
  onClick={() => {}}
  tabIndex={0}
  aria-label="Book Your Demo Now"
>
Explore the Library Today 
</button>
<button 
  className="self-center px-5 py-2 mt-12 mb-0 text-sm font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
  style={{
    background: 'rgba(34, 69, 111, 1)'
  }}
  onClick={() => {}}
  tabIndex={0}
  aria-label="Book Your Demo Now"
>
Request a Demo Now
</button>
</div>
<Footer />
  </>
);
}