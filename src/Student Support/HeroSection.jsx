import React from "react";
import Header from "../pages/Header/NavBar";
import Footer from "../pages/Footer_C/Footer";
import Features from "./KeyFeatures";
import  Benefits  from "./benefits/Benefits";
import { useRouter } from "next/router";  
const HERO_BUTTONS = [
    { text: "Get Started Today!" },
    { text: "Schedule a Demo" }
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
      title: "Centralized Management",
      description: "The Student Support & Engagement Module is a feature-rich addition to Scholar Clone’s LMS that bridges the gap between students, educators, and the school community. "
    },
    {
      title: "Vendor & Purchase Orders",
      description: "It provides personalized assistance, fosters collaboration, and keeps students engaged through interactive tools, progress tracking, and real-time feedback."
    },
    {
      title: "Stock In/Out Logs",
      description: "This module ensures that every learner receives the guidance, support, and encouragement they need to succeed academically and emotionally."
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
      text: "Get Free Demo",
      className: "overflow-hidden gap-2.5 self-stretch p-1 rounded-xl shadow-[0px_4px_8px_rgba(0,0,0,0.25)]"
    },
    {
      text: "Get Your Solution Today",
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
              Student Support & Engagement Module
              </div>
              <div className="self-stretch text-lg mt-12 text-black max-md:mt-10 max-md:max-w-full">
              Empowering students goes beyond academics—it&rsquo;s about creating an environment where they feel supported, motivated, and actively engaged in their learning journey.               </div>
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
              src="/lms_design_three_images/image 10.png"
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
            <div className="flex flex-col items-start mt-6 w-full text-2xl font-medium max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl text-white font-inter max-md:max-w-full max-md:text-4xl">
              Student Support & Engagement Module
              </div>
              <div className="self-stretch text-sm mt-6 text-black max-md:mt-10 max-md:max-w-full">
              Empowering students goes beyond academics—it&rsquo;s about creating an environment where they feel supported, motivated, and actively engaged in their learning journey.               </div>
              <div className="flex lg:flex-wrap gap-10 text-[10px] mt-12 max-w-full text-white mb-5 w-[547px] max-md:mt-10">
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
          <div className="flex flex-col  lg:w-[45%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="/lms_design_three_images/image 10.png"
              alt="User and teacher management interface demonstration"
              className="object-contain grow w-full aspect-[1.5] max-md:mt-9 max-md:max-w-full"

            />
          </div>
        </div>
      </div>
    </div>
    <div className="rounded-none">
      <div className="lg:flex sm:hidden mx-20 mt-24 max-md:flex-col">
        <div className="flex flex-col w-6/12 pr-36 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="lms_design_three_images/image 11.jpg"
            alt="Educational CRM platform interface showcase"
            className="object-contain grow w-full max-md:mt-10 max-md:max-w-full rounded-2xl"
            style={{
              boxShadow: '0px 0px 8px 0px rgba(16, 24, 40, 0.25)'
            }}
          />
        </div>
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
          <h1 className="z-10 self-start mt-0 text-3xl font-inter tracking-tighter max-md:max-w-full" style={{
            color:'rgba(28, 81, 161, 1)'
          }}>
          What is the Student Support & Engagement Module?
      </h1>
      <div className="z-10 mt-4 max-md:mt-10 max-md:max-w-full">
        <p className="text-lg font-interregular">Tackle the challenges of managing visitors, inquiries, and appointments with ease:</p>
        {features.map((feature, index) => (
          <div key={index} className="mb-1">
          <ul className="list-disc pl-5">
            <li className="text-sm font-intermedium text-black">
              {feature.description}
            </li>
          </ul>
        </div>
        ))}
      </div>
      <div className="flex gap-0 justify-between self-end mt-4 max-w-full text-xs w-[380px] max-md:mt-10">
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
      <div className="sm:flex lg:hidden mx-10 mt-12 max-md:flex-col">
        {/* <div className="lg:flex flex-col w-12/12 pr-36 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="lms_design_three_images/image 11.jpg"
            alt="Educational CRM platform interface showcase"
            className="object-contain grow w-full max-md:mt-10 max-md:max-w-full rounded-2xl"
            style={{
              boxShadow: '0px 0px 8px 0px rgba(16, 24, 40, 0.25)'
            }}
          />
        </div> */}
        <div className="lg:flex flex-col w-12/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
          <h1 className="z-10 self-start mt-0 text-2xl font-inter tracking-tighter max-md:max-w-full" style={{
            color:'rgba(28, 81, 161, 1)'
          }}>
          What is the Student Support & Engagement Module?
      </h1>
      <div className="z-10 mt-2 max-md:mt-10 max-md:max-w-full">
        <p className="text-sm font-interregular">Tackle the challenges of managing visitors, inquiries, and appointments with ease:</p>
        {features.map((feature, index) => (
          <div key={index} className="mb-1">
          <ul className="list-disc pl-2">
            <li className="text-xs font-intermedium text-black">
              {feature.description}
            </li>
          </ul>
        </div>
        ))}
      </div>
      <div className="flex gap-0 justify-between self-end mt-2 max-w-full text-xs w-[350px] max-md:mt-10">
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
           Key Features That Drive Engagement
    </h1>
    <Features />
    <Benefits />
    <div className="rounded-none lg:mx-40 sm:mx-10 lg:mt-20 sm:mt-10">
      <div className="lg:flex sm:hidden gap-5 max-md:flex-col">
        <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/28377e402529559884aaaa580e3e965cc682efca2b4743f9e17b7bb9ecac4c07?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
            className="object-contain grow shrink-0 mt-11 max-w-full aspect-[0.68] w-[274px] max-md:mt-10"
          />
        </div>
        <div className="flex flex-col w-[78%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full items-center justify-center pr-36 text-blue-800 max-md:max-w-full">
            <div className="text-[29px] font-ralewayextrabold max-md:max-w-full max-md:text-4xl">
            Transform Your Classroom with Scholar Clone&rsquo;s 
            </div>
            <div className="mt-8 text-2xl font-interregular max-md:mr-2.5 max-md:max-w-full">
            This module goes beyond teaching—it builds a culture of <br/>collaboration, inclusivity, and lifelong learning.
            </div>
            <div className="flex flex-wrap gap-10 text-white">
      <button
        className="px-5 py-2 mt-12 mb-0 text-sm font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
        style={{
          background: 'rgba(28, 81, 161, 1)',
        }}
        onClick={() => {}}
        tabIndex={0}
        aria-label="Book Your Demo Now"
      >
        Schedule a Demo
      </button>
      <button
        className="px-5 py-2 mt-12 mb-0 text-sm font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
        style={{
          background: 'rgba(28, 81, 161, 1)',
        }}
        onClick={() => {}}
        tabIndex={0}
        aria-label="Get Your Solution Today"
      >
        Get Started Today
      </button>
    </div>
    </div>
          </div>
        </div>
        <div className="sm:flex lg:hidden gap-5 max-md:flex-col">
        {/* <div className="flex flex-col lg:w-[22%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/28377e402529559884aaaa580e3e965cc682efca2b4743f9e17b7bb9ecac4c07?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
            className="object-contain grow shrink-0 mt-11 max-w-full aspect-[0.68] w-[274px] max-md:mt-10"
          />
        </div> */}
        <div className="lg:flex flex-col lg:w-[78%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full items-center justify-center lg:pr-36 text-blue-800 max-md:max-w-full">
            <div className="text-[20px] font-ralewayextrabold max-md:max-w-full max-md:text-4xl">
            Transform Your Classroom with Scholar Clone&rsquo;s 
            </div>
            <div className="mt-8 text-1xl font-interregular max-md:mr-2.5 max-md:max-w-full">
            This module goes beyond teaching—it builds a culture of collaboration, inclusivity, and lifelong learning.
            </div>
            <div className="flex lg:flex-wrap gap-10 text-white sm:mb-10">
      <button
        className="px-5 py-2 mt-6 mb-0 text-xs font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
        style={{
          background: 'rgba(28, 81, 161, 1)',
        }}
        onClick={() => {}}
        tabIndex={0}
        aria-label="Book Your Demo Now"
      >
        Schedule a Demo
      </button>
      <button
        className="px-5 py-2 mt-6 mb-0 text-xs font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
        style={{
          background: 'rgba(28, 81, 161, 1)',
        }}
        onClick={() => {}}
        tabIndex={0}
        aria-label="Get Your Solution Today"
      >
        Get Started Today
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