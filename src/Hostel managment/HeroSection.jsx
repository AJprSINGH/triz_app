import React from "react";
import Header from "../pages/Header/NavBar";
import Footer from "../pages/Footer_C/Footer";
import Features from "./KeyFeatures";
import  Benefits  from "./benefits/Benefits";
const HERO_BUTTONS = [
    { text: "Get Your CRM Now!" },
    { text: "Request a Demo" }
  ];
  const featureData = [
    {
      title: "Effortless Allocation",
      description: "Assign rooms efficiently and manage occupancy in real time."
    },
    {
      title: "Simplified Meal Planning",
      description: "Organize and track daily meals, catering to dietary preferences and schedules."
    },
    {
      title: "Complete Oversight",
      description: "Keep track of hostel activities, from attendance to maintenance requests, with ease."
    }
  ];
  const features = [
    {
      title: "Room Allocation and Transfer",
      description: "Provides student preferences and history for better accommodation management."
    },
    {
      title: "Paperless Student Attendance",
      description: "Automates student check-ins and check-outs using digital methods like biometric, RFID, or mobile apps."
    },
    {
      title: " Visitor Management Records ",
      description: "Maintains digital logs of visitors entering and leaving the hostel."
    },
    {
      title: "Hostel Reports",
      description: "Maintenance requests and complaints"
    }
  ];
export default function BlogsPage() {
    
    return (
<>
<main className='text-xl'>
    <Header />
    </main>
<div className="lg:flex sm:hidden overflow-hidden relative flex-col justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("Design_two_images/Group 1321314640 (1).png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '110vh',
  }}
  >
  <div className="flex overflow-hidden flex-col pt-20 max-w-full h-full bg-white bg-opacity-0 w-[600px] max-md:px-5 max-md:pb-24">
    <h1 className="text-4xl font-lxe text-center max-md:max-w-full max-md:text-4xl underline decoration-[rgba(34,226,127,1)] decoration-4">
    Effortlessly Manage Your Hostel Operations
    </h1>
    <h4 className="text-lg mt-20 font-intersemibold text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(18, 20, 29, 1)'
    }}>
    Transform the way your school handles hostel activities with Scholar Clone’s Hostel Management System. From room assignments to meal planning and fee tracking, handle it all with confidence and precision.
    </h4>
    <div className="flex flex-row gap-10 items-center justify-center">
<button 
  className="self-center px-5 py-2 mt-12 mb-0 text-sm text-white font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
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
<div className="sm:flex lg:hidden overflow-hidden relative flex-col justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("Design_two_images/Group 1321314640 (1).png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
  }}
  >
  <div className="flex overflow-hidden flex-col pt-20 max-w-full h-full bg-white bg-opacity-0 w-[600px] max-md:px-5 max-md:pb-24">
    <h1 className="text-2xl mr-2 ml-2 font-lxe text-center max-md:max-w-full max-md:text-4xl underline decoration-[rgba(34,226,127,1)] decoration-4">
    Effortlessly Manage Your Hostel Operations
    </h1>
    <h4 className="text-sm mt-6 mr-2 ml-2 font-intersemibold text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(18, 20, 29, 1)'
    }}>
    Transform the way your school handles hostel activities with Scholar Clone’s Hostel Management System. From room assignments to meal planning and fee tracking, handle it all with confidence and precision.
    </h4>
    <div className="flex flex-row gap-10 items-center justify-center">
<button 
  className="self-center px-5 py-2 mt-10 mb-0 text-sm text-white font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
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
    
    <div className="lg:flex sm:hidden overflow-hidden -mt-[88px] relative flex-col justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("Design_two_images/Group 1321314640 (2).png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '50vh',
  }}
  >
    <div className="flex flex-col rounded-lg mx-40">
      <div className="z-10 self-center ml-6 text-2xl mt-4 font-lxsemibold tracking-tighter leading-none text-center text-white max-md:max-w-full underline decoration-[rgba(34,226,127,1)] decoration-4">
      Comprehensive Tools for Modern Hostel Management
      </div>
      <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {featureData.map((feature, index) => (
            <div key={index} className="flex flex-col w-full max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow px-10 pt-8 pb-6 w-full tracking-tighter leading-9 text-center text-black bg-white rounded-lg max-md:px-5 max-md:mt-10">
              <div className="text-2xl font-lxsemibold max-md:mr-1.5">
                {feature.title}
              </div>
              <div className="mt-2 text-[15px] font-interregular">
                {feature.description}
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
    </div>

    <div className="sm:flex lg:hidden overflow-hidden -mt-[88px] relative flex-col justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("Design_two_images/Group 1321314640 (2).png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '120vh',
  }}
  >
    <div className="flex flex-col rounded-lg mx-40">
      <div className="z-10 self-center ml-6 text-2xl mt-4 font-lxsemibold tracking-tighter leading-none text-center text-white max-md:max-w-full underline decoration-[rgba(34,226,127,1)] decoration-4">
      Comprehensive Tools for Modern Hostel Management
      </div>
      <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="lg:flex gap-5 max-md:flex-col">
          {featureData.map((feature, index) => (
            <div key={index} className="flex lg:flex-col pb-4 w-full max-md:ml-0 max-md:w-full">
            <div className="lg:flex overflow-hidden flex-col grow px-10 pt-8 pb-6 w-full tracking-tighter leading-9 text-center text-black bg-white rounded-lg max-md:px-5 max-md:mt-10">
              <div className="text-1xl font-lxsemibold max-md:mr-1.5"style={{lineHeight:1.0}}>
                {feature.title}
              </div>
              <div className="mt-2 text-[15px] font-interregular" style={{lineHeight:1.0}}>
                {feature.description}
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
    </div>

    <div className="rounded-none">
      <div className="lg:flex mx-20 mt-20 gap-20 max-md:flex-col">
        <div className="flex lg:flex-col lg:w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="\Hostel Management Images\image 85.png"
            alt="Educational CRM platform interface showcase"
            className="object-contain grow w-full max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex lg:flex-col lg:w-6/12 lg:mt-10 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
          <h1 className="z-10 self-start mt-0 lg:text-3xl sm:text-1xl font-lxesemibold tracking-tighter text-zinc-900 max-md:max-w-full underline decoration-[rgba(34,226,127,1)] decoration-4">
          Features Designed for Your Hostel&rsquo;s Success 
      </h1>
      <div className="z-10 mt-4 max-md:mt-10 max-md:max-w-full">
        {features.map((feature, index) => (
          <div key={index} className="mb-1">
          <span className="lg:text-lg sm:text-sm font-inter">{feature.title}: </span>
          <ul>
            <li className="list-disc ml-5 text-sm font-intermedium text-black">
              {feature.description}
            </li>
          </ul>
        </div>
        ))}
      </div>
          </div>
        </div>
      </div>
    </div>
    <Benefits />
    <h1 className="lg:text-3xl sm:text-1xl lg:mt-40 sm:mt-20 font-lxesemibold text-center max-md:max-w-full max-md:text-4xl underline decoration-[rgba(34,226,127,1)] decoration-4"style={{
        color:'rgb(10, 10, 10)'
    }}>
    Transform Your Hostel Operations Today
    </h1>
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
  Get Started Today
</button>
</div>
<Footer />
  </>
);
}