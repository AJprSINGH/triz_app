import React from "react";
import Header from "../pages/Header/NavBar";
import Footer from "../pages/Footer_C/Footer";
import Features from "./KeyFeatures";
import  Benefits  from "./benefits/Benefits";
const HERO_BUTTONS = [
    { text: "Get Your Solution Now!" },
    { text: "Request a Demo" }
  ];
  const featureData = [
    {
      title: "HR at Your Fingertips",
      description: "Access HR features on the go, whether you’re at the office, working remotely, or traveling."
    },
    {
      title: "Employee Engagement",
      description: "Empower employees with mobile tools for easy leave requests and payslip access."
    },
    {
      title: "Faster Decisions",
      description: "Streamline approvals, track performance, and manage tasks instantly with real-time updates."
    }
  ];
  const features = [
    {
      title: "Real-Time Attendance Tracking",
      description: "Employees can check in and out directly from the app."
    },
    {
      title: "Self-Service Portal",
      description: "Access payslips, update personal details, and apply for leaves or reimbursements."
    },
    {
      title: "Instant Notifications",
      description: "Stay updated with real-time alerts for approvals, announcements, and reminders."
    },
    {
      title: "Leave and Approval Management",
      description: "Employees can track their leave balances and request time off seamlessly."
    },
    {
      title: "Secure Document Access",
      description: "Employees can access HR documents, contracts, and certification records anytime."
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
    Empower Your HR On-the-Go with Scholar Clone&rsquo;s Mobile App Module
    </h1>
    <h4 className="text-lg mt-20 font-intersemibold text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(18, 20, 29, 1)'
    }}>
   In today&rsquo;s fast-paced work environment, flexibility is key. Scholar Clone&rsquo;s Mobile App Module brings the power of your HRMS to your fingertips, enabling employees and HR teams to manage essential tasks anytime, anywhere.
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
    <h1 className="text-2xl font-lxe text-center max-md:max-w-full max-md:text-4xl underline decoration-[rgba(34,226,127,1)] decoration-4">
    Empower Your HR On-the-Go with Scholar Clone&rsquo;s Mobile App Module
    </h1>
    <h4 className="text-sm mt-6 font-intersemibold text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(18, 20, 29, 1)'
    }}>
   In today&rsquo;s fast-paced work environment, flexibility is key. Scholar Clone&rsquo;s Mobile App Module brings the power of your HRMS to your fingertips, enabling employees and HR teams to manage essential tasks anytime, anywhere.
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
      Stay Connected, Stay Productive
      </div>
      <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {featureData.map((feature, index) => (
            <div key={index} className="flex flex-col w-full max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow px-10 pt-8 pb-6 w-full tracking-tighter leading-9 text-center text-black bg-white rounded-lg max-md:px-5 max-md:mt-10">
              <div className="text-2xl font-lxsemibold max-md:mr-1.5">
                {feature.title}
              </div>
              <div className="mt-2 text-[15px] font-interregular" style={{ lineHeight: 1.5 }}>
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
      Stay Connected, Stay Productive
      </div>
      <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="lg:flex gap-5 max-md:flex-col">
          {featureData.map((feature, index) => (
            <div key={index} className="flex flex-col w-full pb-4 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow px-10 pt-8 pb-6 w-full tracking-tighter leading-9 text-center text-black bg-white rounded-lg max-md:px-5 max-md:mt-10">
              <div className="text-1xl font-lxsemibold max-md:mr-1.5"style={{ lineHeight: 1.0 }}>
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
      <div className="lg:flex mx-20 mt-20 gap-20 max-md:flex-col">
        <div className="flex lg:flex-col lg:w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="hr_design_two_images/image 4.png"
            alt="Educational CRM platform interface showcase"
            className="object-contain grow w-full max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex lg:flex-col lg:w-6/12 mt-10 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
          <h1 className="z-10 self-start mt-0 lg:text-3xl sm:text-1xl font-lxesemibold tracking-tighter text-zinc-900 max-md:max-w-full underline decoration-[rgba(34,226,127,1)] decoration-4">
          Features That Set Our Mobile App Apart
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
    <h1 className="lg:text-3xl sm:text-2xl mt-40 font-lxesemibold text-center max-md:max-w-full max-md:text-4xl underline decoration-[rgba(34,226,127,1)] decoration-4"style={{
        color:'rgb(10, 10, 10)'
    }}>
    Take HR Management to <br/>the Next Level
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
Download the App Today
</button>
</div>
<Footer />
  </>
);
}