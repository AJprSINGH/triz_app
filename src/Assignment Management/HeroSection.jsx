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
    Transform Assignments into Seamless Learning Experiences with Scholar Clone
    </h1>
    <h4 className="text-lg mt-6 font-interregular px-40 text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    Assignments don&rsquo;t have to be a hassle! With Scholar Clone&rsquo;s Assignment Management module, educators can craft engaging tasks in minutes, while students enjoy an organized, stress-free process from start to submission. 
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
Start Simplifying Assignments Today!
</button>
</div>
  </div>
    </div>
    <h1 className="text-center text-3xl font-intersemibold mt-20">
    Simplify, Streamline, Succeed
    </h1>
    <div className="overflow-hidden">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-20 text-2xl text-slate-800 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col items-start self-end px-20 max-w-full w-[733px]">
              <div className="mt-5 text-lg font-intersemibold leading-6 w-[571px] max-md:max-w-full">
              Scholar Clone&rsquo;s Assignment Management module is a game-changer in academic workflows. It eliminates the complexity of managing assignments, allowing educators to focus on teaching and students to concentrate on learning. From dynamic task creation to instant feedback, every feature is built to enhance efficiency and creativity.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:-ml-20 lg:pr-34 w-[43%] lg:mt-10 max-md:ml-0 max-md:w-full">
          <div className=" builder-canvas flex relative flex-col pt-8 max-w-[707px] min-h-[390px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="/lms_design_four_images/image 3.png"
              className="object-cover absolute rounded-2xl left-[103px] top-[6px] w-[431px]"
            />
          </div>
        </div>
      </div>
    </div>
    <h1 className="text-center text-3xl font-inter" style={{
      color:'rgba(28, 81, 162, 1)'
    }}>
    Outstanding Features That Redefine Assignment Management
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
            <div className="flex overflow-hidden flex-col pt-10 pr-14 pb-16 pl-8 w-full font-inter bg-white rounded-lg shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-lg text-neutral-800">
                Engaging Assignment Creation
              </div>
              <div className="self-start mt-8 text-sm text-zinc-600">
              Design assignments that captivate and challenge students. 
              Incorporate multimedia elements like videos, images, and links 
              to create dynamic and meaningful tasks.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col pt-10 pr-16 pb-16 pl-8 w-full font-inter bg-white rounded-lg shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-lg text-neutral-800">
              Effortless Submissions
              </div>
              <div className="mt-8 text-sm text-zinc-600">
              Allow students to submit assignments in formats that best 
              showcase their strengths—whether it&rsquo;s a document, video, or presentation.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col pt-10 pr-16 pb-16 pl-8 w-full font-inter bg-white rounded-lg shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-lg text-neutral-800">
              Deadline Alerts Made Easy
              </div>
              <div className="mt-8 text-sm text-zinc-600">
              Set deadlines and let our system handle the rest with automated 
              reminders for students and notifications for educators. Never miss a submission again!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center mt-12 ml-44 max-w-full w-[1000px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col pt-10 pr-16 pb-16 pl-8 w-full font-inter bg-white rounded-lg shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-lg text-neutral-800">
              Intuitive Grading & Feedback
              </div>
              <div className="mt-8 text-sm text-zinc-600">
              Simplify evaluations with tools that let you annotate 
              directly on assignments and provide rubric-based feedback. 
              Make grading consistent, quick, and insightful.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col pt-10 pr-16 pb-16 pl-8 w-full font-inter bg-white rounded-lg shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-lg text-neutral-800">
              Real-Time Monitoring
              </div>
              <div className="mt-8 text-sm text-zinc-600">
              Track submissions, view pending tasks, and stay on top 
              of progress effortlessly. Gain a clear view of assignment 
              completion with an interactive dashboard.
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
    Why Scholar Clone is the Ultimate Choice?
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
    Elevate Academic Excellence
    </h1>
    <h4 className="text-lg mt-4 px-80 font-inter text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(61, 96, 149, 1)'
    }}>
    Scholar Clone&rsquo;s Assignment Management module transforms the <br/>way assignments are handled. 
    </h4>
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
  Get Started with Scholar Clone Now!
</button>
</div>
</div>
<Footer />
  </>
);
}