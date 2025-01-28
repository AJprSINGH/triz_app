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
    Personalized Learning Path: Guiding Every Student to Success
    </h1>
    <h4 className="text-lg mt-6 font-interregular px-40 text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(34, 69, 111, 1)'
    }}>
    The Learning Path module is designed to empower students with a personalized, step-by-step approach to achieving their academic goals. By tailoring resources, assignments, and milestones to individual needs, this feature ensures every learner gets the guidance they deserve.
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
  Get Started Today
</button>
</div>
  </div>
    </div>
    <h1 className="text-center text-3xl font-intersemibold mt-20">
    Your Roadmap to Effective Learning
    </h1>
    <div className="overflow-hidden">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-20 text-2xl text-slate-800 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col items-start self-end px-20 max-w-full w-[733px]">
              <div className="mt-5 text-lg font-intersemibold leading-6 w-[571px] max-md:max-w-full">
              Education isn&rsquo;t one-size-fits-all, and neither is the Learning Path module. It dynamically adapts to each student&rsquo;s pace, preferences, and strengths, providing a structured pathway for learning. Whether mastering a new topic or preparing for exams, this tool is a game-changer in personalized education.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:-ml-20 lg:pr-34 w-[43%] lg:mt-10 max-md:ml-0 max-md:w-full">
          <div className=" builder-canvas flex relative flex-col pt-8 max-w-[707px] min-h-[390px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="/Design_four_images/image (10).png"
              className="object-cover absolute rounded-2xl left-[103px] top-[6px] w-[431px]"
            />
          </div>
        </div>
      </div>
    </div>
    <h1 className="text-center text-3xl font-inter" style={{
      color:'rgba(28, 81, 162, 1)'
    }}>
    Why Choose Our Learning Path Module?
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
            <div className="flex overflow-hidden flex-col pt-10 pr-16 pb-16 pl-8 w-full font-inter bg-white rounded-lg shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-lg text-neutral-800">
              Personalized Progress Tracking
              </div>
              <div className="self-start mt-8 text-sm text-zinc-600">
              Students receive a customized plan, guiding them through lessons, assignments, and assessments step by step.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col pt-10 pr-16 pb-16 pl-8 w-full font-inter bg-white rounded-lg shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-lg text-neutral-800">
              Dynamic Adaptation
              </div>
              <div className="mt-8 text-sm text-zinc-600">
              Learning paths adjust in real time based on student performance and engagement, ensuring maximum understanding and retention.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col pt-10 pr-16 pb-16 pl-8 w-full font-inter bg-white rounded-lg shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-lg text-neutral-800">
              Comprehensive Insights
              </div>
              <div className="mt-8 text-sm text-zinc-600">
              Teachers and parents can monitor progress with detailed reports, making it easy to identify strengths and areas for improvement.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center mt-12 ml-44 max-w-full w-[1000px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col pt-10 pr-20 pb-16 pl-8 w-full font-inter bg-white rounded-lg shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-lg text-neutral-800">
              Goal-Oriented Learning
              </div>
              <div className="mt-8 text-sm text-zinc-600">
              Set academic milestones and track progress toward achieving them, fostering motivation and accountability.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col pt-10 pr-16 pb-10 pl-8 w-full font-inter bg-white rounded-lg shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-lg text-neutral-800">
              Integrated LMS Resources
              </div>
              <div className="mt-8 text-sm text-zinc-600">
              Seamlessly integrates with other LMS features, including quizzes, assignments, and video lessons, to create a holistic learning experience.
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
    Unparalleled Benefits for Students and Educators
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
      Transform Learning, One Step at a TimeTake Control of Your Records Today
    </h1>
    <h4 className="text-lg mt-4 px-80 font-inter text-center max-md:max-w-full max-md:text-4xl" style={{
        color:'rgba(61, 96, 149, 1)'
    }}>
    The Learning Path module empowers institutions to provide individualized education for every student. By guiding learners with clear objectives and adaptive strategies, this tool ensures no one is left behind.
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
Start Creating Tailored Learning Paths Today!
</button>
</div>
</div>
<Footer />
  </>
);
}