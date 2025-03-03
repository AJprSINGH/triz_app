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
      title: "Real-Time Insights",
      description: "Stay updated on how students perform across subjects, assessments, and milestones."
    },
    {
      title: "Personalized Analytics",
      description: "Understand individual or group performance trends for smarter decisions."
    },
    {
      title: "Goal-Driven Outcomes",
      description: "Define learning benchmarks and track progress to ensure objectives are met."
    }
  ];
  const features = [
    {
      title: "Real-Time Progress Tracking",
      description: "Monitor student growth as it happens. Visual dashboards provide quick access to performance metrics, helping you take timely action."
    },
    {
      title: "Data-Driven Comparisons",
      description: "Compare progress over terms, years, or across groups to identify trends, gaps, and areas of strength."
    },
    {
      title: "Custom Assessments",
      description: "Leverage pre-built assessments or create your own to align with your curriculum, ensuring every test evaluates key learning objectives."
    },
    {
      title: "Interactive Visuals",
      description: "Experience engaging visuals like charts and heatmaps, making complex data easier to interpret for faster decision-making."
    },
    {
      title: "Detailed Feedback Mechanisms",
      description: "Deliver meaningful, actionable feedback to students and parents to keep learning focused and productive."
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
    <h1 className="lg:text-4xl sm:text-2xl font-lxe text-center max-md:max-w-full max-md:text-4xl underline decoration-[rgba(34,226,127,1)] decoration-4">
 student progress with Scholar Clone&rsquo;s Measuring Learning Growth Module. 
    </h1>
    <h4 className="text-lg mt-20 font-intersemibold text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(18, 20, 29, 1)'
    }}>
    From real-time tracking to detailed analytics, this module integrates seamlessly into your Learning Management System (LMS), empowering administrators, educators, and students to achieve their full potential.    </h4>
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
    height: '50vh',
  }}
  >
  <div className="flex overflow-hidden flex-col pt-20 max-w-full h-full bg-white bg-opacity-0 w-[600px] max-md:px-5 max-md:pb-24">
    <h1 className="text-2xl font-lxe text-center max-md:max-w-full max-md:text-4xl underline decoration-[rgba(34,226,127,1)] decoration-4">
 student progress with Scholar Clone&rsquo;s Measuring Learning Growth Module. 
    </h1>
    <h4 className="text-sm mt-16 font-intersemibold text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(18, 20, 29, 1)'
    }}>
    From real-time tracking to detailed analytics, this module integrates seamlessly into your Learning Management System (LMS), empowering administrators, educators, and students to achieve their full potential.    </h4>
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
      Why Choose the Measuring Learning Growth Module?
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
    <div className="sm:flex lg:hidden overflow-hidden -mt-[60px] mb-20 relative flex-col justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("Design_two_images/Group 1321314640 (2).png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  }}
  >
    <div className="flex flex-col rounded-lg mx-40">
      <div className="z-10 self-center ml-6 text-2xl text-center mt-4 font-lxsemibold tracking-tighter leading-none text-center text-white max-md:max-w-full underline decoration-[rgba(34,226,127,1)] decoration-4">
      Why Choose the Measuring Learning Growth Module?
      </div>
      <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="lg:flex gap-5 max-md:flex-col">
          {featureData.map((feature, index) => (
            <div key={index} className="flex flex-col pb-4 w-full max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow px-10 pt-8 pb-6 w-full tracking-tighter leading-9 text-center text-black bg-white rounded-lg max-md:px-5 max-md:mt-10">
              <div className="text-2xl font-lxsemibold max-md:mr-1.5" style={{ lineHeight: 1.0 }}>
                {feature.title}
              </div>
              <div className="mt-2 text-[15px] font-interregular" style={{ lineHeight: 1.0 }}>
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
      <div className="lg:flex mx-20 lg:mt-20 sm:mt-20 gap-20 max-md:flex-col">
        <div className="flex lg:flex-col lg:w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="/lms_design_two_images/image 2.png"
            alt="Educational CRM platform interface showcase"
            className="object-contain grow w-full max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex lg:flex-col lg:w-6/12 sm:w-full mt-10 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
          <h1 className="z-10 self-start lg:text-left sm:text-center mt-0 lg:text-3xl sm:text-2xl font-lxesemibold tracking-tighter text-zinc-900 max-md:max-w-full underline decoration-[rgba(34,226,127,1)] decoration-4">
          Key Features That Set It Apart
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
    <h1 className="lg:text-3xl sm:text-1xl mt-40 sm:hidden lg:block font-lxesemibold text-center max-md:max-w-full max-md:text-4xl underline decoration-[rgba(34,226,127,1)] decoration-4"style={{
        color:'rgb(10, 10, 10)'
    }}>
    Take the first step in transforming how you<br/>track and foster learning growth. 
    </h1>
    <h1 className="sm:flex lg:hidden lg:text-3xl pr-8 pl-8 sm:text-1xl mt-40 font-lxesemibold text-center max-md:max-w-full max-md:text-4xl underline decoration-[rgba(34,226,127,1)] decoration-4"style={{
        color:'rgb(10, 10, 10)'
    }}>
    Take the first step in transforming how you track and foster learning growth. 
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
Start Measuring Success Today
</button>
</div>
<Footer />
  </>
);
}