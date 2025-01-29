import React from "react";
import Header from "../pages/Header/NavBar";
import Footer from "../pages/Footer_C/Footer";
import Features from "./KeyFeatures";
import  Benefits  from "./benefits/Benefits";
const HERO_BUTTONS = [
    { text: "Get Your CRM Now!" },
    { text: "Request a Demo" }
  ];
export default function BlogsPage() {
    
    return (
<>
<main className='text-xl'>
    <Header />
    </main>
<div className="flex overflow-hidden relative flex-col justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("Design_four_images/Hero Seaction (1).png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '92vh',
  }}
  >
  <div className="flex overflow-hidden flex-col pt-20 max-w-full h-full bg-white bg-opacity-0 w-full px-40 max-md:px-5 max-md:pb-24">
    <h1 className="text-4xl font-lxe text-center max-md:max-w-full max-md:text-4xl">
    Secure and Simplify Your School&rsquo;s Visitor Tracking
    </h1>
    <h4 className="text-lg mt-6 font-interregular px-40 text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
Managing visitors on campus is crucial to maintaining security, efficiency, and professionalism in any school environment.
The Visitor Management System from Scholar Clone ERP offers a seamless solution to register, track, and manage all visitors 
be it parents, guests, vendors, or external personnel.With advanced features and automation, this module helps your school 
create a safe and organized environment while making a positive first impression.
    </h4>
    <div className="flex flex-row gap-10 items-center justify-center">
<button 
  className="self-center px-5 py-2 mt-12 mb-0 text-sm text-white   font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
  style={{
    background: 'rgba(34, 69, 111, 1)'
  }}
  onClick={() => {}}
  tabIndex={0}
  aria-label="Book Your Demo Now"
>
  Get Started Today
</button>
</div>
  </div>
    </div>
    <h1 className="text-center text-3xl font-intersemibold mt-20">
    Why Does Your School Need a Visitor Management System?
    </h1>
    <div className="overflow-hidden">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-16 text-2xl text-slate-800 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col items-start self-end px-20 max-w-full w-[733px]">
              <div className="mt-0 text-lg font-intersemibold leading-6 w-[571px] max-md:max-w-full">
              An outdated or manual visitor tracking process can lead to:<br/>
•	Security Gaps: No clear record of who enters and exits the premises.<br/>
•	Time Wastage: Long queues and slow manual registration processes.<br/>
•	Poor Visitor Experience: Inconsistent or unprofessional visitor handling.<br/>
The Visitor Management System eliminates these issues, ensuring a secure, fast, and welcoming experience for all visitors.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:-ml-20 lg:pr-34 w-[43%] lg:mt-10 max-md:ml-0 max-md:w-full">
          <div className=" builder-canvas flex relative flex-col pt-8 max-w-[707px] min-h-[390px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="/Design_four_images/image 7.jpg"
              className="object-cover absolute rounded-2xl left-[103px] top-[6px] w-[431px]"
            />
          </div>
        </div>
      </div>
    </div>
    <h1 className="text-center text-3xl font-inter" style={{
      color:'rgba(28, 81, 162, 1)'
    }}>
   Key Features of the Visitor Management System
    </h1>
    <div className="flex overflow-hidden relative flex-col justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
      backgroundImage: 'url("Design_four_images/Group 1321314651.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      height: '125vh',
    }}
    >
          <div className="flex flex-col rounded-lg mt-0 mx-20">
      <div className="w-[1200px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col pt-10 pr-16 pb-16 pl-8 w-full font-inter bg-white rounded-lg shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-lg text-neutral-800">
                Quick & Hassle-Free Visitor 
              </div>
              <div className="self-start mt-8 text-sm text-zinc-600">
              Replace manual logs with a fast, user-friendly digital check-in process.
              Allow pre-registration for faster entry and reduced wait times.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col pt-10 pr-16 pb-16 pl-8 w-full font-inter bg-white rounded-lg shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-lg text-neutral-800">
               Real-Time Visitor 
              </div>
              <div className="mt-8 text-sm text-zinc-600">
                Monitor visitor movement in real time, ensuring complete transparency.
                Record check-in and check-out times for every visitor.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col pt-10 pr-16 pb-16 pl-8 w-full font-inter bg-white rounded-lg shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-lg text-neutral-800">
              Enhanced Security Features
              </div>
              <div className="mt-8 text-sm text-zinc-600">
                Generate personalized visitor badges with photos for easy identification.
                Maintain a list of banned individuals and restrict their entry.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center mt-12 ml-44 max-w-full w-[1000px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col pt-10 pr-20 pb-16 pl-8 w-full font-inter bg-white rounded-lg shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-lg text-neutral-800">
              Seamless Communication
              </div>
              <div className="mt-8 text-sm text-zinc-600">
                Send alerts to the staff or host when their visitor arrives.
                Stay connected with visitors during critical situations.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col pt-10 pr-16 pb-16 pl-8 w-full font-inter bg-white rounded-lg shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-lg text-neutral-800">
              Comprehensive Reports
              </div>
              <div className="mt-8 text-sm text-zinc-600">
                Maintain detailed records of all visits for security and compliance.
                Generate purpose of visit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <h1 className="text-center text-3xl font-inter mt-20" style={{
      color:'rgba(28, 81, 162, 1)'
    }}>
    How Your School Benefits from the Visitor Management System
    </h1>
    <Benefits />
    <div className="flex overflow-hidden relative flex-col mt-40 justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
      backgroundImage: 'url("Design_four_images/Group 1321314655.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      height: '75vh',
    }}
    >
    <h1 className="text-3xl font-quicksandbold text-center max-md:max-w-full max-md:text-4xl"style={{
        color:'rgba(28, 81, 161, 1)'
    }}>
    Make Your Campus Safe, Efficient, and Welcoming
    </h1>
    <h4 className="text-lg mt-4 px-80 font-inter text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(61, 96, 149, 1)'
    }}>
With the Visitor Management System, you can modernize visitor tracking while ensuring maximum security and convenience. 
Create a safe, professional environment for your school community, and leave a lasting impression on every visitor.    </h4>
    <div className="flex flex-row gap-10 mb-40 text-white items-center justify-center">
    <button 
  className="self-center px-5 py-2 mt-12 mb-0 text-sm font-inter bg-sky-500 rounded-3xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
  style={{
    background: 'rgba(17, 134, 254, 1)'
  }}
  onClick={() => {}}
  tabIndex={0}
  aria-label="Book Your Demo Now"
>
Click below to learn more or request a free demo
</button>
</div>
</div>
<Footer />
  </>
);
}