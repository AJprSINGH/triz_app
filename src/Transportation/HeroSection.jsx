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
      title: "pick-up & drop ",
      description: "Assign pick-up and drop-off points for each student."
    },
    {
      title: "Bus Schedule",
      description: "Schedule bus shifts for morning and afternoon trips."
    },
    {
      title: "Track Bus",
      description: "Keep track of where each student boards and deboards the bus."
    },
    {
      title: "Bus Routes",
      description: "Monitor bus routes and ensure optimal travel time."
    }
  ];
  const features = [
    {
      title: "Student Location Management",
      description: "Assign and track each student's pick-up and drop-off points, ensuring clarity for all stakeholders."
    },
    {
      title: "Shift Scheduling",
      description: "Manage student shifts for both morning and afternoon commutes."
    },
    {
      title: "Real-Time Updates:",
      description: "Get real-time notifications about delays, route changes, or updates to the transportation schedule."
    },
    {
      title: "Bus Route Optimization",
      description: "Plan and optimize bus routes to save time and fuel costs."
    },
    {
      title: "Driver and Vehicle Management",
      description: "Maintain a detailed database of drivers, vehicles, and route assignments."
    },
    {
      title: "Parent Communication Integration",
      description: "Notify parents about the current location of the bus, expected arrival times, and any delays."
    },
    {
      title: "Comprehensive Reporting",
      description: "Generate detailed reports on bus routes, student shifts, and operational efficiency."
    }
  ];
export default function BlogsPage() {
    
    return (
<>
<main className='text-xl'>
    <Header />
    </main>
<div className="flex overflow-hidden relative flex-col justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("Design_two_images/Group 1321314640 (1).png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '110vh',
  }}
  >
  <div className="flex overflow-hidden flex-col pt-20 max-w-full h-full bg-white bg-opacity-0 w-[600px] max-md:px-5 max-md:pb-24">
    <h1 className="text-4xl font-lxe text-center max-md:max-w-full max-md:text-4xl underline decoration-[rgba(34,226,127,1)] decoration-4">
    Revolutionize Your School's Transportation Management
    </h1>
    <h4 className="text-lg mt-20 font-intersemibold text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(18, 20, 29, 1)'
    }}>
Ensure safe and efficient transportation for your students with Scholar Clone ERP's Transportation Management Module. Track student pick-up and drop-off points, manage bus shifts, and monitor real-time schedules—all from a single dashboard. Enhance operational efficiency and ensure peace of mind for parents and administrators alike.    </h4>
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
    <div className="flex overflow-hidden -mt-[88px] relative flex-col justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("Design_two_images/Group 1321314640 (2).png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '50vh',
  }}
  >
    <div className="flex flex-col rounded-lg mx-40">
      <div className="z-10 self-center ml-6 text-2xl mt-4 font-lxsemibold tracking-tighter leading-none text-center text-white max-md:max-w-full underline decoration-[rgba(34,226,127,1)] decoration-4">
      Smarter Transportation for Safer Commutes
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
    <div className="rounded-none">
      <div className="flex mx-20 mt-20 gap-20 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="Design_two_images/Group 1321314643.png"
            alt="Educational CRM platform interface showcase"
            className="object-contain grow w-full max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col w-6/12 mt-10 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
          <h1 className="z-10 self-start mt-0 text-3xl font-lxesemibold tracking-tighter text-zinc-900 max-md:max-w-full underline decoration-[rgba(34,226,127,1)] decoration-4">
          Key Features Tailored to Your School’s Needs
      </h1>
      <div className="z-10 mt-4 max-md:mt-10 max-md:max-w-full">
        {features.map((feature, index) => (
          <div key={index} className="mb-1">
          <span className="text-lg font-inter">{feature.title}: </span>
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
    <h1 className="text-3xl mt-40 font-lxesemibold text-center max-md:max-w-full max-md:text-4xl underline decoration-[rgba(34,226,127,1)] decoration-4"style={{
        color:'rgb(10, 10, 10)'
    }}>
    Redefine Student Transportation <br></br>with Scholar Clone
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