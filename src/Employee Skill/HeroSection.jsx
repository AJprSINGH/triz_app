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
<div className="lg:flex sm:hidden overflow-hidden relative flex-col justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("Design_five_images/Group.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '92vh',
  }}
  >
  <div className="flex overflow-hidden flex-col pt-20 max-w-full h-full bg-white text-white bg-opacity-0 w-[600px] max-md:px-5 max-md:pb-24">
    <h1 className="text-5xl font-intersemibold text-center max-md:max-w-full max-md:text-4xl">
    Unleash Potential, Track Skills, Build a Future-Ready Workforce
    </h1>
    <h4 className="text-lg mt-6 font-intersemibold text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    Revolutionize how your organization manages talent with the Employee Skill Management Module of Scholar Clone ERP. Empower employees to discover their strengths, track certifications, and build their careers while aligning their growth with your business goals.
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
  Get Started Today
</button>
</div>
  </div>
    </div>
<div className="sm:flex lg:hidden overflow-hidden relative flex-col justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("Design_five_images/Group.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '50vh',
  }}
  >
  <div className="flex overflow-hidden flex-col pt-10 max-w-full h-full bg-white text-white bg-opacity-0 w-[600px] max-md:px-5 max-md:pb-24">
    <h1 className="text-2xl mr-1 ml-1  font-intersemibold text-center max-md:max-w-full max-md:text-4xl">
    Unleash Potential, Track Skills, Build a Future-Ready Workforce
    </h1>
    <h4 className="text-sm mt-3 mr-2 ml-2 font-intersemibold text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    Revolutionize how your organization manages talent with the Employee Skill Management Module of Scholar Clone ERP. Empower employees to discover their strengths, track certifications, and build their careers while aligning their growth with your business goals.
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
  Get Started Today
</button>
</div>
  </div>
    </div>
    <div className="overflow-hidden">
      <div className="lg:flex sm:hidden gap-5 max-md:flex-col">
        <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-14 text-2xl text-slate-800 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col items-start self-end mt-24 px-20 max-w-full w-[733px]">
              <div className="text-2xl font-inter text-sky-800 max-md:max-w-full">
              Elevate Your Workforce with the Employee Skill Management Module
              </div>
              <div className="mt-5 text-lg font-interregular leading-6 w-[571px] max-md:max-w-full">
              In a competitive business environment, staying ahead means continuously upskilling your 
              workforce. The Employee Skill Management Module makes this process seamless by offering 
              tools for tracking skills, certifications, and career growth.
              </div>
              <div className="mt-8 text-lg leading-6 w-[601px] max-md:max-w-full">
              With this module, employees can take charge of their professional development 
              while managers gain insight into workforce capabilities, ensuring the right s
              talent is in the right place at the right time.
              </div>
              <div className="flex flex-wrap gap-5 self-stretch mt-11 text-sm font-inter max-md:mt-10">
              <div className="font-medium w-[169px]">
                  <span className="font-bold">Empower Employees:</span> <br />
                  Provide employees with a personalized view of their skills and certifications.
                </div>
                <div className="font-medium w-[169px]">
                  <span className="font-bold">Boost Business Agility:</span> <br />
                  Identify skill gapsand plan training strategies effectively.
                </div>
                <div className="w-[169px]">
                Drive Growth:{" "}
                  <span className="">
                  Align skill development with organizational goals to achieve measurable success.
                  </span>
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eec10844492a7f0ec68ec288188fbc98ffb8c5d8da71169d2c334f225d68abb6?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
              className="object-contain -mt-px max-w-full aspect-[1.24] w-[222px] max-md:mt-10"
            />
          </div>
        </div>
        <div className="flex flex-col lg:-ml-20 lg:pr-34 w-[43%] max-md:ml-0 max-md:w-full">
          <div className=" builder-canvas flex relative flex-col pt-12 max-w-[707px] min-h-[590px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex absolute -left-px shrink-0 rounded-full border-green-600 border-solid border-[25px] h-[246px] top-[344px] w-[246px]" />
            <img
              loading="lazy"
              src="/hr_design_five_images/image 7.png"
              className="object-contain absolute rounded-2xl shadow-sm aspect-square h-[426px] left-[103px] top-[116px] w-[431px]"
            />
          </div>
        </div>
      </div>
      <div className="sml:flex lg:hidden gap-5 max-md:flex-col">
        <div className="flex flex-col lg:w-[57%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-7 text-1xl text-slate-800 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col items-start self-end mt-12 px-10 max-w-full lg:w-[733px]">
              <div className="text-1xl font-inter text-sky-800 max-md:max-w-full">
              Elevate Your Workforce with the Employee Skill Management Module
              </div>
              <div className="mt-3 text-sm font-interregular leading-6 lg:w-[571px] max-md:max-w-full">
              In a competitive business environment, staying ahead means continuously upskilling your 
              workforce. The Employee Skill Management Module makes this process seamless by offering 
              tools for tracking skills, certifications, and career growth.
              </div>
              <div className="mt-5 text-sm leading-6 lg:w-[601px] max-md:max-w-full">
              With this module, employees can take charge of their professional development 
              while managers gain insight into workforce capabilities, ensuring the right s
              talent is in the right place at the right time.
              </div>
              <div className="flex flex-wrap gap-5 self-stretch mt-6 text-xs font-inter max-md:mt-10">
              <div className="font-medium lg:w-[169px]">
                  <span className="font-bold">Empower Employees:</span> <br />
                  Provide employees with a personalized view of their skills and certifications.
                </div>
                <div className="font-medium lg:w-[169px]">
                  <span className="font-bold">Boost Business Agility:</span> <br />
                  Identify skill gapsand plan training strategies effectively.
                </div>
                <div className="lg:w-[169px]">
                Drive Growth:{" "}
                  <span className="">
                  Align skill development with organizational goals to achieve measurable success.
                  </span>
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eec10844492a7f0ec68ec288188fbc98ffb8c5d8da71169d2c334f225d68abb6?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
              className="object-contain -mt-px max-w-full aspect-[1.24] w-[222px] max-md:mt-10"
            />
          </div>
        </div>
        <div className="flex flex-col lg:-ml-20 lg:pr-34 w-[43%] max-md:ml-0 max-md:w-full">
          {/* <div className=" builder-canvas flex relative flex-col pt-12 max-w-[707px] min-h-[590px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex absolute -left-px shrink-0 rounded-full border-green-600 border-solid border-[25px] h-[246px] top-[344px] w-[246px]" />
            <img
              loading="lazy"
              src="/hr_design_five_images/image 7.png"
              className="object-contain absolute rounded-2xl shadow-sm aspect-square h-[426px] left-[103px] top-[116px] w-[431px]"
            />
          </div> */}
        </div>
      </div>
    </div>
    <div className="lg:flex sm:hidden overflow-hidden relative flex-col justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
      backgroundImage: 'url("Design_five_images/Group 1321314648.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      height: '105vh',
    }}
    >
    <div className="flex flex-col items-end px-16 pt-14 pb-24 max-md:px-5">
      <div className="w-full max-w-[1541px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="/hr_design_five_images/image 8.png"
              className="object-contain w-full rounded-2xl aspect-square shadow-[4px_4px_10px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-inter tracking-tighter text-sky-800 max-md:max-w-full">
              Top Features of the Employee Skill Management Module
              </div>
              <div className="self-start mt-10 text-lg font-interregular leading-6 text-slate-800 max-md:max-w-full">
                {/* Programmatically send and receive ACH, wires, real-time
                <br />
                payments, and even physical checks. */}
              </div>
              <div className="mt-10 mr-6 max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start text-xl font-inter text-slate-800 max-md:mt-10">
                      <div className="self-stretch">
                      My Skills Dashboard
                      </div>
                      <div className="mt-12 max-md:mt-10">
                      My Certifications Tracker
                      </div>
                      <div className="mt-12 max-md:mt-10">
                      Skill Gap Analysis
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start text-xl font-inter text-slate-800 max-md:mt-10">
                      <div className="self-stretch">
                      Custom Skill Mapping
                      </div>
                      <div className="mt-12 max-md:mt-10">
                      Comprehensive Analytics
                      </div>
                      <div className="mt-9">
                      Integration with Training Programs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="sm:flex lg:hidden overflow-hidden relative flex-col justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
      backgroundImage: 'url("Design_five_images/Group 1321314648.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      height: '110vh',
    }}
    >
    <div className="flex flex-col items-end px-8 pt-7 pb-12 max-md:px-5">
      <div className="w-full max-w-[1541px] max-md:max-w-full">
        <div className="lg:flex gap-5 max-md:flex-col">
          <div className="flex flex-col lg:w-2/5 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="/hr_design_five_images/image 8.png"
              className="object-contain w-full rounded-2xl aspect-square shadow-[4px_4px_10px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 lg:w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl font-inter tracking-tighter text-sky-800 max-md:max-w-full">
              Top Features of the Employee Skill Management Module
              </div>
              <div className="self-start text-sm font-interregular leading-6 text-slate-800 max-md:max-w-full">
                {/* Programmatically send and receive ACH, wires, real-time
                <br />
                payments, and even physical checks. */}
              </div>
              <div className="mt-5 mr-3 max-md:mr-2.5 max-md:max-w-full">
                <div className="lg:flex gap-5 max-md:flex-col">
                  <div className="flex flex-col lg:w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start text-xs font-inter text-slate-800 max-md:mt-10">
                      <div className="self-stretch">
                      My Skills Dashboard
                      </div>
                      <div className="mt-3 max-md:mt-10">
                      My Certifications Tracker
                      </div>
                      <div className="mt-3 max-md:mt-10">
                      Skill Gap Analysis
                      </div>
                    </div>
                  </div>
                  <div className="lg:flex flex-col   lg:w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start text-xs font-inter text-slate-800 max-md:mt-10">
                      <div className="mt-3 self-stretch">
                      Custom Skill Mapping
                      </div>
                      <div className="mt-3 max-md:mt-10">
                      Comprehensive Analytics
                      </div>
                      <div className="mt-3">
                      Integration with Training Programs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Benefits />
    <h1 className="lg:text-3xl sm:text-2xl lg:mt-40 sm:mt-20 font-ralewaysemibold text-center max-md:max-w-full max-md:text-4xl"style={{
        color:'rgba(21, 70, 120, 1)'
    }}>
    Ready to Empower Your Workforce?
    </h1>
    <h4 className="lg:text-4xl sm:text-2xl mt-4 font-quicksandbold text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(21, 70, 120, 1)'
    }}>
    Track Skills. Certify Achievements. Drive Excellence.
    </h4>
    <div className="flex flex-row gap-10 lg:mb-40 sm:mb-20 text-white items-center justify-center">
    <button 
  className="self-center px-5 py-2 lg:mt-12 sm:mt-6 mb-0 lg:text-sm sm:text-xs font-inter bg-sky-500 rounded-3xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
  style={{
    background: 'rgba(17, 134, 254, 1)'
  }}
  onClick={() => {}}
  tabIndex={0}
  aria-label="Book Your Demo Now"
>
  Book a Demo
</button>
</div>
<Footer />
  </>
);
}