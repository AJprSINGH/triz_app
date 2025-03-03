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
<div className="lg:flex sm:hidden overflow-hidden relative flex-col justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("Design_one_images/Group 1321314639.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
  }}
  >
  <div className="flex overflow-hidden flex-col pt-20 max-w-full h-full bg-white text-white bg-opacity-0 w-[600px] max-md:px-5 max-md:pb-24">
    <h1 className="text-4xl font-intersemibold text-center max-md:max-w-full max-md:text-4xl">
    Redefine Compliance Training 
    </h1>
    <h4 className="text-lg mt-20 font-intersemibold text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    Our Compliance Training module is designed to meet the unique challenges of today&apos;s organizations.From automating training schedules to providing personalized learning paths, we make compliance training seamless, impactful, and engaging. 
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
<div className="sm:flex lg:hidden overflow-hidden relative flex-col justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("Design_one_images/Group 1321314639.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '60vh',
  }}
  >
  <div className="flex overflow-hidden flex-col pt-20 max-w-full h-full bg-white text-white bg-opacity-0 w-[600px] max-md:px-5 max-md:pb-24">
    <h1 className="text-2xl font-intersemibold text-center max-md:max-w-full max-md:text-4xl">
    Redefine Compliance Training 
    </h1>
    <h4 className="text-sm mt-10 font-intersemibold text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    Our Compliance Training module is designed to meet the unique challenges of today&apos;s organizations.From automating training schedules to providing personalized learning paths, we make compliance training seamless, impactful, and engaging. 
    </h4>
    <div className="flex flex-row gap-10 items-center justify-center">
    <button 
  className="self-center px-5 py-2 mt-6 mb-0 text-xs font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
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
  className="self-center px-5 py-2 mt-6 mb-0 text-xs font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
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
      <div className="lg:flex mx-20 max-md:flex-col">
        <div className="flex flex-col lg:w-6/12 mt-12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="/hr_design_one_images/image 5.png"
            alt="Educational CRM platform interface showcase"
            className="object-contain grow lg:w-[80%] aspect-[1.58] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col lg:w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full font-bold max-md:mt-10 max-md:max-w-full">
            <div className="text-xl font-inter lg:text-right max-md:mr-2.5 max-md:max-w-full" style={{
                color:'rgba(61, 96, 149, 1)'
            }}>
              Compliance is more than just adhering to laws and regulations it&apos;s about creating a safe,
               ethical, and high-performing<br/> work environment. 
            </div>
            <div className="flex gap-2 justify-between self-end mt-12 max-w-full text-xs lg:w-[380px] max-md:mt-10">
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
    <div className="lg:flex sm:hidden overflow-hidden relative flex-col justify-center mt-10 items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("hr_design_one_images/image 6.png")',
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
    Streamline Compliance Training 
    </h1>
    <h4 className="text-[15px] mt-20 font-inter text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgb(0, 0, 0)'
    }}>
    Our Compliance Training module is designed to meet the unique challenges of today&rsquo;s organizations. 
    From automating training schedules to providing personalized learning paths, we make compliance training seamless, 
    impactful, and engaging.
    </h4>
    <div className="flex flex-row gap-10 mt-10 items-center justify-center">
    <button
                 className={`gap-2.5 self-stretch px-3 py-2 font-inter bg-sky-500 rounded-3xl text-white text-xs`}
                 tabIndex="0"
                 style={{
                    background:'rgba(17, 134, 254, 1)'
                 }}
                >
                  Get Your Solution Now!
                </button>
</div>
  </div>
    </div>
    <div className="sm:flex lg:hidden overflow-hidden relative flex-col justify-center mt-14 items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("hr_design_one_images/image 6.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '50vh',
  }}
  >
  <div className="flex overflow-hidden flex-col pt-20 max-w-full h-full bg-white text-white bg-opacity-0 w-[600px] max-md:px-5 max-md:pb-24">
    <h1 className="text-1xl font-inter text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    Streamline Compliance Training 
    </h1>
    <h4 className="text-[10px] mt-5 ml-4 mr-5 font-inter text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgb(0, 0, 0)'
    }}>
    Our Compliance Training module is designed to meet the unique challenges of today&rsquo;s organizations. 
    From automating training schedules to providing personalized learning paths, we make compliance training seamless, 
    impactful, and engaging.
    </h4>
    <div className="flex flex-row gap-10 mt-10 items-center justify-center">
    <button
                 className={`gap-2.5 self-stretch px-3 py-2 font-inter bg-sky-500 rounded-3xl text-white text-xs`}
                 tabIndex="0"
                 style={{
                    background:'rgba(17, 134, 254, 1)'
                 }}
                >
                  Get Your Solution Now!
                </button>
</div>
  </div>
    </div>
    <div className="lg:flex sm:hidden overflow-hidden relative flex-col justify-center mt-10 items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
      backgroundImage: 'url("Design_one_images/Group 1321314640.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      height: '110vh',
    }}
    >
    <Features />
    </div>
    <div className="sm:flex lg:hidden overflow-hidden relative flex-col justify-center mt-10 items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
      backgroundImage: 'url("Design_one_images/Group 1321314640.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      height: '220vh',
    }}
    >
    <Features />
    </div>
    <Benefits />
    <h1 className="lg:text-3xl sm:text-2xl lg:mt-40 sm:mt-20 font-inter text-center max-md:max-w-full max-md:text-4xl"style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    Ready to Take the Next Step?
    </h1>
    <h4 className="lg:text-2xl sm:text-1xl mt-2 font-inter text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    Experience the difference with Scholar Clone. Revolutionize your organization&apos;s compliance<br/> with our world-class training module.
    </h4>
    <div className="flex flex-row gap-10 mb-40 text-white items-center justify-center">
    <button 
  className="self-center px-5 py-2 lg:mt-12 sm:mt-6 mb-0 lg:text-sm sm:text-xs font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
  style={{
    background: 'rgba(34, 69, 111, 1)'
  }}
  onClick={() => {}}
  tabIndex={0}
  aria-label="Book Your Demo Now"
>
Schedule a Demo Today 
</button>
<button 
  className="self-center px-5 py-2 lg:mt-12 sm:mt-6  lg:text-sm sm:text-xs font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
  style={{
    background: 'rgba(34, 69, 111, 1)'
  }}
  onClick={() => {}}
  tabIndex={0}
  aria-label="Book Your Demo Now"
>
Get Started Now
</button>
</div>
<Footer />
  </>
);
}