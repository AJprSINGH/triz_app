import React from "react";
import Header from "../pages/Header/NavBar";
import Footer from "../pages/Footer_C/Footer";
import Features from "./KeyFeatures";
import  Benefits  from "./benefits/Benefits";
const HERO_BUTTONS = [
    { text: "Upgrade to Smart Attendance Today!" },
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
    Efficient Attendance Tracking Tailored for Modern Education
    </h1>
    <h4 className="text-lg mt-20 font-intersemibold text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    Say goodbye to outdated attendance systems and embrace the efficiency of the Student Attendance Management Module. Designed to simplify attendance tracking, this module brings automation, real-time reporting, and seamless communication to educational institutions.
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
Upgrade to Smart Attendance Today!
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
  <div className="flex overflow-hidden flex-col pt-10 max-w-full h-full bg-white text-white bg-opacity-0 w-[600px] max-md:px-5 max-md:pb-24">
    <h1 className="text-2xl font-intersemibold text-center max-md:max-w-full max-md:text-4xl">
    Efficient Attendance Tracking Tailored for Modern Education
    </h1>
    <h4 className="text-sm mt-10 font-intersemibold text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    Say goodbye to outdated attendance systems and embrace the efficiency of the Student Attendance Management Module. Designed to simplify attendance tracking, this module brings automation, real-time reporting, and seamless communication to educational institutions.
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
Upgrade to Smart Attendance Today!
</button>
</div>
  </div>
    </div>
    <div className="rounded-none">
      <div className="lg:flex mx-20 max-md:flex-col">
        <div className="flex flex-col lg:w-6/12 mt-12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="Student Attendance images/image 85.png"
            alt="Educational CRM platform interface showcase"
            className="object-contain grow lg:w-[80%] aspect-[1.58] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col lg:w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full font-bold max-md:mt-10 max-md:max-w-full">
            <div className="lg:text-xl sm:text-sm sm:pt-3 font-inter lg:text-right sm:text-center max-md:mr-2.5 max-md:max-w-full" style={{
                color:'rgba(61, 96, 149, 1)'
            }}>
              Whether you manage a small school or a large university, the Student Attendance Management Module ensures that no detail is overlooked. With features that cater to teachers, students, and parents alike, this module is your ultimate solution for boosting productivity and ensuring accountability.
            </div>
            <div className="flex gap-2 justify-between self-end lg:mt-12 sm:mt-6 max-w-full text-xs w-[380px] max-md:mt-10">
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
    backgroundImage: 'url("Student Attendance images/Group 1321314689.png")',
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
    Effortless Attendance Management, Anytime, Anywhere
    </h1>
    <h4 className="text-[15px] mt-20 font-inter text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgb(0, 0, 0)'
    }}>
    The Student Attendance Management Module streamlines the attendance process with cutting-edge automation and advanced reporting capabilities.From biometric integration to customizable reports, this module is built to enhance operational efficiency and improve student engagement.

    </h4>
    <div className="flex flex-row gap-10 mt-10 items-center justify-center">
    <button
                 className={`gap-2.5 self-stretch px-3 py-2 font-inter bg-sky-500 rounded-3xl text-white text-xs`}
                 tabIndex="0"
                 style={{
                    background:'rgba(17, 134, 254, 1)'
                 }}
                >
                  Upgrade to Smart Attendance Today!
                </button>
</div>
  </div>
    </div>
    <div className="sm:flex lg:hidden overflow-hidden relative flex-col justify-center mt-10 items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("Student Attendance images/Group 1321314689.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '50vh',
  }}
  >
  <div className="flex overflow-hidden flex-col pt-10 max-w-full h-full bg-white text-white bg-opacity-0 w-[600px] max-md:px-5 max-md:pb-24">
    <h1 className="text-1xl font-inter text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    Effortless Attendance Management, Anytime, Anywhere
    </h1>
    <h4 className="text-[12px] mt-10 ml-3 mr-5  font-inter text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgb(0, 0, 0)'
    }}>
    The Student Attendance Management Module streamlines the attendance process with cutting-edge automation and advanced reporting capabilities.From biometric integration to customizable reports, this module is built to enhance operational efficiency and improve student engagement.

    </h4>
    <div className="flex flex-row gap-10 mt-5 items-center justify-center">
    <button
                 className={`gap-2.5 self-stretch px-3 py-2 font-inter bg-sky-500 rounded-3xl text-white text-xs`}
                 tabIndex="0"
                 style={{
                    background:'rgba(17, 134, 254, 1)'
                 }}
                >
                  Upgrade to Smart Attendance Today!
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
      height: '245vh',
    }}
    >
    <Features />
    </div>
    <Benefits />
    <h1 className="lg:text-3xl sm:text-2xl lg:mt-40 sm:mt-20 font-inter text-center max-md:max-w-full max-md:text-4xl"style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    Take Attendance Tracking to the Next Level
    </h1>
    <h4 className="lg:text-2xl sm:text-1xl mt-2 font-inter text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    Experience the ease and efficiency of the Student Attendance Management Module with Scholar Clone ERP. Say hello to automation, and seamless communication—designed to simplify your everyday operations.
    </h4>
    <div className="flex flex-row gap-10 lg:mb-40 sm:mb-20 text-white items-center justify-center">
    <button 
  className="self-center px-5 py-2 lg:mt-12 sm:mt-6 mb-0 lg:text-sm sm:text-xs font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
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
  className="self-center px-5 py-2 lg:mt-12 sm:mt-6 mb-0 lg:text-sm sm:text-xs font-inter bg-sky-500 rounded-xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
  style={{
    background: 'rgba(34, 69, 111, 1)'
  }}
  onClick={() => {}}
  tabIndex={0}
  aria-label="Book Your Demo Now"
>
Upgrade to Smart Attendance Today
</button>
</div>
<Footer />
  </>
);
}