import React from "react";
import Header from "../pages/Header/NavBar";
import Footer from "../pages/Footer_C/Footer";
import Features from "./KeyFeatures";
import  Benefits  from "./benefits/Benefits";
import { useRouter } from "next/router";  
const HERO_BUTTONS = [
    { text: "Get Your Solution Now!" },
    { text: "Request a Demo" }
  ];
  const featureData = [
    {
      title: "Stay Updated in Real-Time",
      description: "Monitor stock levels and movements anytime, anywhere."
    },
    {
      title: "Prioritize What Matters",
      description: "Allocate resources to classrooms, labs, or events based on real-time needs."
    },
    {
      title: "Never Run Out of Stock",
      description: "Receive automated alerts for low inventory and restocking schedules."
    }
  ];
  const features = [
    {
      title: "Real-Time Expense Tracking",
      description: "Easily log and monitor every petty cash transaction in real time. Say goodbye to missing receipts or manual records."
    },
    {
      title: "Streamlined Approvals",
      description: "Automate the approval process for petty cash requests. Define workflows to ensure transparency and faster processing."
    },
    {
      title: "Detailed Expense Reports",
      description: "Generate insightful reports to track spending patterns, ensure compliance, and make data-driven financial decisions."
    },
    // {
    //   title: "Sales Tracking",
    //   description: "Manage on-campus sales (e.g., books and uniforms) with automated invoices and receipts."
    // },
    // {
    //   title: "Detailed Analytics & Reports",
    //   description: "Gain insights into inventory trends, usage, and costs to support decision-making."
    // }
  ];
  const ctaButtons = [
    {
      text: "Get Started Today!",
      className: "overflow-hidden gap-2.5 self-stretch p-1 rounded-xl shadow-[0px_4px_8px_rgba(0,0,0,0.25)]"
    },
    {
      text: " Simplify Your School’s Expense Management!",
      className: "overflow-hidden gap-2.5  p-1 rounded-xl shadow-[0px_4px_8px_rgba(0,0,0,0.25)]"
    }
  ];
  
export default function BlogsPage() {
    const router = useRouter(); 
    
     
      const handleClick = () => {
        router.push("/contactGlobal"); 
      };
    return (
<div className="flex flex-col w-full max-w-full mx-auto overflow-x-hidden">
<main className='text-xl'>
    <Header />
    </main>
<div className="lg:flex sm:hidden overflow-hidden flex-col justify-center items-start font-inter px-16 py-10 w-full max-md:px-5 max-md:py-24 max-md:max-w-full" style={{
        background: 'linear-gradient(0deg, #ffffff 29%, rgba(61, 96, 149, 1) 100%)',
      }}>
      <div className="-mb-6 w-full max-w-[1668px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start mt-6 w-full text-2xl font-medium max-md:mt-10 max-md:max-w-full">
              <div className="text-6xl text-white font-inter max-md:max-w-full max-md:text-4xl">
              Effortless Petty Cash Management for Your School
              </div>
              <div className="self-stretch text-lg mt-12 text-black max-md:mt-10 max-md:max-w-full">
              Managing petty cash doesn&apos;t have to be a headache! With Scholar Clone&apos;s Petty Cash Management Module, streamline expense tracking, approvals, and reporting for all your small transactions. Gain full control of your school&apos;s day-to-day finances while reducing errors and boosting accountability.
              </div>
              <div className="flex flex-wrap gap-10 text-[15px] mt-12 max-w-full text-white w-[547px] max-md:mt-10">
                {ctaButtons.map((button, index) => (
                  <button 
                  key={index}
                  className={button.className}
                  tabIndex={0}
                  role="button"
                  aria-label={button.text}
                  style={{
                    background: 'rgba(61, 96, 149, 1)'
                  }}
                  onClick={handleClick} 
                >
                  {button.text}
                </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="\petty cash management images\image 86.png"
              alt="User and teacher management interface demonstration"
              className="object-contain grow w-full aspect-[1.5] max-md:mt-9 max-md:max-w-full"

            />
          </div>
        </div>
      </div>
    </div>
<div className="sm:flex lg:hidden overflow-hidden flex-col justify-center items-start font-inter px-16 py-10 w-full max-md:px-5 max-md:py-24 max-md:max-w-full" style={{
        background: 'linear-gradient(0deg, #ffffff 29%, rgba(61, 96, 149, 1) 100%)',
      }}>
      <div className="-mb-6 w-full max-w-[1668px] max-md:mb-2.5 max-md:max-w-full">
        <div className="lg:flex gap-5 max-md:flex-col">
          <div className="flex flex-col lg:w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start mt-3 w-full text-1xl font-medium max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl text-white font-inter max-md:max-w-full max-md:text-4xl">
              Effortless Petty Cash Management for Your School
              </div>
              <div className="self-stretch text-sm mt-6 text-black max-md:mt-10 max-md:max-w-full">
              Managing petty cash doesn&apos;t have to be a headache! With Scholar Clone&apos;s Petty Cash Management Module, streamline expense tracking, approvals, and reporting for all your small transactions. Gain full control of your school&apos;s day-to-day finances while reducing errors and boosting accountability.
              </div>
              <div className="flex flex-wrap gap-10 text-[13px] mt-6 max-w-full text-white lg:w-[547px] max-md:mt-10">
                {ctaButtons.map((button, index) => (
                  <button 
                  key={index}
                  className={button.className}
                  tabIndex={0}
                  role="button"
                  aria-label={button.text}
                  style={{
                    background: 'rgba(61, 96, 149, 1)'
                  }}
                  onClick={handleClick} 
                >
                  {button.text}
                </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:ml-5 lg:w-[45%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="\petty cash management images\image 86.png"
              alt="User and teacher management interface demonstration"
              className="object-contain grow w-full aspect-[1.5] max-md:mt-9 max-md:max-w-full"

            />
          </div>
        </div>
      </div>
    </div>
    <div className="rounded-none">
      <div className="lg:flex mx-20 mt-24 max-md:flex-col">
        <div className="lg:flex sm:hidden flex-col lg:w-6/12 lg:pr-36 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="petty cash management images/image 85.png"
            alt="Educational CRM platform interface showcase"
            className="object-contain grow w-full max-md:mt-10 max-md:max-w-full rounded-2xl"
            style={{
              boxShadow: '0px 0px 8px 0px rgba(16, 24, 40, 0.25)'
            }}
          />
        </div>
        {/* <div className="sm:flex flex-col lg:w-6/12 lg:pr-36 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="petty cash management images/image 85.png"
            alt="Educational CRM platform interface showcase"
            className="object-contain grow w-full max-md:mt-10 max-md:max-w-full rounded-2xl"
            style={{
              boxShadow: '0px 0px 8px 0px rgba(16, 24, 40, 0.25)'
            }}
          />
        </div> */}
        <div className="flex flex-col lg:w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
          <h1 className="lg:z-10 self-start lg:mt-0 lg:text-3xl sm:text-2xl font-inter tracking-tighter max-md:max-w-full" style={{
            color:'rgba(28, 81, 161, 1)'
          }}>
          Why Your School Needs Petty Cash Management
      </h1>
      <div className="z-10 lg:mt-4 sm:mt-2 max-md:mt-10 max-md:max-w-full">
        {features.map((feature, index) => (
          <div key={index} className="mb-1">
          <ul className="list-disc lg:pl-5">
            <li className="lg:text-sm sm:text-xs font-intermedium text-black">
              {feature.description}
            </li>
          </ul>
        </div>
        ))}
      </div>
      <div className="flex gap-0 justify-between self-end mt-4 max-w-full text-xs lg:w-[380px] max-md:mt-10">
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
    <h1 className="lg:text-4xl sm:text-2xl text-center font-intersemibold lg:mt-40 sm:mt-10"style={{
            color:'rgba(28, 81, 161, 1)'
    }}>
            Features That Make Managing Petty Cash a Breeze
    </h1>
    <Features />
    <Benefits />
    <div className="rounded-none lg:mx-40 sm:mx-10 lg:mt-20 sm:mt-10">
      <div className="lg:flex gap-5 max-md:flex-col">
        <div className="lg:flex sm:hidden flex-col  lg:w-[22%] sm:w-[30%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/28377e402529559884aaaa580e3e965cc682efca2b4743f9e17b7bb9ecac4c07?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
            className="object-contain grow shrink-0 mt-11 max-w-full aspect-[0.68] w-[274px] max-md:mt-10"
          />
        </div>
        {/* <div className="sm:flex lg:hidden flex-col  lg:w-[22%] sm:w-[30%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/28377e402529559884aaaa580e3e965cc682efca2b4743f9e17b7bb9ecac4c07?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
            className="object-contain grow shrink-0 mt-11 max-w-full aspect-[0.68] w-[274px] max-md:mt-10"
          />
        </div> */}
        <div className="flex flex-col lg:w-[78%] max-md:ml-0 max-md:w-full">
          <div className="lg:flex flex-col w-full items-center justify-center lg:pr-36 text-blue-800 max-md:max-w-full">
            <div className="lg:text-[29px] font-ralewayextrabold max-md:max-w-full max-md:text-4xl">
            Take Control of Your School&rsquo;s Daily Finances
            </div>
            <div className="lg:mt-8 sm:mt-4 lg:text-2xl sm:text-1xl font-interregular max-md:mr-2.5 max-md:max-w-full">
            Stop struggling with manual petty cash management. Scholar Clone&apos;s 
            Petty Cash Management Module gives you the tools to track, manage, and report 
            small expenses with precision. Simplify your workflows and make your school&apos;s finances 
            transparent and efficient. 
            </div>
            <div className="lg:flex flex-wrap gap-10 sm:mb-10 text-white">
      <button
        className="px-5 py-2 mt-12 mb-0 lg:text-sm sm:text-xs font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
        style={{
          background: 'rgba(28, 81, 161, 1)',
        }}
        onClick={() => {}}
        tabIndex={0}
        aria-label="Book Your Demo Now"
      >
        Start Today 
      </button>
      <button
        className="px-5 py-2 mt-12 mb-0 lg:text-sm sm:text-xs font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
        style={{
          background: 'rgba(28, 81, 161, 1)',
        }}
        onClick={() => {}}
        tabIndex={0}
        aria-label="Get Your Solution Today"
      >
        Click Below to Learn More →
      </button>
    </div>
    </div>
          </div>
        </div>
      </div>
<Footer />
  </div>
);
}