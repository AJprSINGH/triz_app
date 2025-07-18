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
    Unlock Excellence with the Mainstream CBSE Module
    </h1>
    <h4 className="text-lg mt-6 font-intersemibold text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    Empower students to master CBSE curriculum with an intelligent, interactive, and results-driven learning experience.
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
Start Learning Now 
</button>
</div>
  </div>
    </div>
<div className="sm:flex lg:hidden overflow-hidden relative flex-col justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("Design_five_images/Group.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '40vh',
  }}
  >
  <div className="flex overflow-hidden flex-col pt-10 max-w-full h-full bg-white text-white bg-opacity-0 w-[600px] max-md:px-5 max-md:pb-24">
    <h1 className="text-2xl font-intersemibold text-center max-md:max-w-full max-md:text-4xl">
    Unlock Excellence with the Mainstream CBSE Module
    </h1>
    <h4 className="text-sm mt-3 mr-2 ml-2font-intersemibold text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    Empower students to master CBSE curriculum with an intelligent, interactive, and results-driven learning experience.
    </h4>
    <div className="flex flex-row gap-10 items-center justify-center">
<button 
  className="self-center px-5 py-2 mt-6 mb-0 text-sm font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
  style={{
    background: 'rgba(34, 69, 111, 1)'
  }}
  onClick={() => {}}
  tabIndex={0}
  aria-label="Book Your Demo Now"
>
Start Learning Now 
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
              Transformative Learning, Powered by CBSE Expertise
              </div>
              <div className="mt-5 text-lg font-interregular leading-6 w-[571px] max-md:max-w-full">
              The Mainstream CBSE Module is a comprehensive, cutting-edge learning system designed to
               provide students with an immersive educational experience. 
              </div>
              <div className="mt-8 text-lg leading-6 w-[601px] max-md:max-w-full">
              Fully aligned with the CBSE syllabus, it helps learners grasp essential concepts with clarity and confidence. 
              Tailored for students from Grade 1 to 12, our platform bridges the gap between traditional learning and modern 
              educational needs. 
              </div>
              <div className="flex flex-wrap gap-5 self-stretch mt-11 text-sm font-inter max-md:mt-10">
              <div className="font-medium w-[169px]">
                  {/* <span className="font-bold">Promote Transparency:</span> <br />
                  Keep everyone informed with clear status updates and resolution timelines. */}
                </div>
                <div className="font-medium w-[169px]">
                  {/* <span className="font-bold">Organize Complaints:</span> <br />
                  Track every issue from submission to resolution. */}
                </div>
                <div className="w-[169px]">
                  {/* Enhance Communication:{" "}
                  <span className="">
                    Ensure timely and effective responses to all parties
                    involved.
                  </span> */}
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
              src="/lms_design_five_images/image 4.png"
              className="object-contain absolute rounded-2xl shadow-sm aspect-square h-[431px] left-[103px] top-[116px] w-[431px]"
            />
          </div>
        </div>
      </div>
      <div className="sm:flex lg:hidden gap-5 max-md:flex-col">
        <div className="flex flex-col lg:w-[57%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-7 text-1xl text-slate-800 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col mr-10 items-start self-end mt-12 px-10 max-w-full lg:w-[733px]">
              <div className="text-2xl font-inter text-sky-800 max-md:max-w-full">
              Transformative Learning, Powered by CBSE Expertise
              </div>
              <div className="mt-2 text-sm font-interregular leading-6 lg:w-[571px] max-md:max-w-full">
              The Mainstream CBSE Module is a comprehensive, cutting-edge learning system designed to
               provide students with an immersive educational experience. 
              </div>
              <div className="mt-8 text-sm leading-6 lg:w-[601px] max-md:max-w-full">
              Fully aligned with the CBSE syllabus, it helps learners grasp essential concepts with clarity and confidence. 
              Tailored for students from Grade 1 to 12, our platform bridges the gap between traditional learning and modern 
              educational needs. 
              </div>
              <div className="flex flex-wrap gap-5 self-stretch lg:mt-11 text-xs font-inter max-md:mt-10">
              <div className="font-medium lg:w-[169px]">
                  {/* <span className="font-bold">Promote Transparency:</span> <br />
                  Keep everyone informed with clear status updates and resolution timelines. */}
                </div>
                <div className="font-medium w-lg:[169px]">
                  {/* <span className="font-bold">Organize Complaints:</span> <br />
                  Track every issue from submission to resolution. */}
                </div>
                <div className="lg:w-[169px]">
                  {/* Enhance Communication:{" "}
                  <span className="">
                    Ensure timely and effective responses to all parties
                    involved.
                  </span> */}
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
        <div className="flex flex-col lg:-ml-20 lg:pr-34 lg:w-[43%] max-md:ml-0 max-md:w-full">
          <div className=" builder-canvas flex relative flex-col pt-6 max-w-[707px] min-h-[590px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex absolute -left-px shrink-0 rounded-full border-green-600 border-solid border-[25px] h-[246px] top-[344px] w-[246px]" />
            <img
              loading="lazy"
              src="/lms_design_five_images/image 4.png"
              className="object-contain absolute rounded-2xl shadow-sm aspect-square h-[431px] left-[103px] top-[116px] w-[431px]"
            />
          </div>
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
              src="lms_design_five_images/image 5.png"
              className="object-contain w-full rounded-2xl aspect-square shadow-[4px_4px_10px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-inter tracking-tighter text-sky-800 max-md:max-w-full">
              Key Features of the Mainstream CBSE Content Library
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
                      Extensive Collection of Study Materials
                      </div>
                      <div className="mt-12 max-md:mt-10">
                      Curated Practice Papers & Sample Questions
                      </div>
                      <div className="mt-12 max-md:mt-10">
                      Interactive Multimedia Resources
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start text-xl font-inter text-slate-800 max-md:mt-10">
                      <div className="self-stretch">
                      Comprehensive Solutions & Explanations
                      </div>
                      <div className="mt-12 max-md:mt-10">
                      Seamless Access Anytime, Anywhere
                      </div>
                      <div className="mt-9">
                      Regular Updates & New Additions
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
      height: '95vh',
    }}
    >
    <div className="lg:flex flex-col items-end px-16 pt-14 pb-24 max-md:px-5">
      <div className="w-full max-w-[1541px] max-md:max-w-full">
        <div className="lg:flex gap-5 max-md:flex-col">
          <div className="flex flex-col lg:w-2/5 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="lms_design_five_images/image 5.png"
              className="object-contain w-full rounded-2xl aspect-square shadow-[4px_4px_10px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 lg:w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              <div className="text-1xl mt-2 text-center font-inter tracking-tighter text-sky-800 max-md:max-w-full">
              Key Features of the Mainstream CBSE Content Library
              </div>
              <div className="self-start mt-5 text-sm font-interregular leading-6 text-slate-800 max-md:max-w-full">
                {/* Programmatically send and receive ACH, wires, real-time
                <br />
                payments, and even physical checks. */}
              </div>
              <div className="mt-5 mr-3 max-md:mr-2.5 max-md:max-w-full">
                <div className="lg:flex gap-5 max-md:flex-col">
                  <div className="flex flex-col lg:w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start text-xs font-inter text-slate-800 max-md:mt-10">
                      <div className="self-stretch">
                      Extensive Collection of Study Materials
                      </div>
                      <div className="mt-3 max-md:mt-10">
                      Curated Practice Papers & Sample Questions
                      </div>
                      <div className="mt-3 max-md:mt-10">
                      Interactive Multimedia Resources
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col  lg:w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start text-xs font-inter text-slate-800 max-md:mt-10">
                      <div className=" mt-3 self-stretch">
                      Comprehensive Solutions & Explanations
                      </div>
                      <div className="mt-3 max-md:mt-10">
                      Seamless Access Anytime, Anywhere
                      </div>
                      <div className="mt-3">
                      Regular Updates & New Additions
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
    Elevate Your Child&rsquo;s Education Today
    </h1>
    <h4 className="lg:text-4xl sm:text-2xl lg:mt-4 sm:mt-2 sm:mr-2 sm:ml-2 font-quicksandbold text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(21, 70, 120, 1)'
    }}>
    Join thousands of parents and educators who have already <br/>embraced this innovative learning platform.
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
Get Started with a Free Trial
</button>
</div>
<Footer />
  </>
);
}