import * as React from "react";
import { BenefitCard } from "./BenefitCard";
import { benefitsData } from "./BenefitsData";
const features = [
  {
    title: "Tailored Learning for Success: ",
    description: "Gain access to career-specific course content designed to align perfectly with your future goals."
  },
  {
    title: "Engaging and Interactive: ",
    description: "Learn through gamified quizzes, interactive videos, and real-world scenarios that keep you motivated and excited."
  },
  {
    title: "Industry-Ready Skills: ",
    description: "Stay ahead with cutting-edge knowledge and skills that prepare you for the evolving job market."
  },
  {
    title: "Certifications That Matter: ",
    description: "Build a portfolio of recognized certifications and projects to showcase your expertise to colleges and employers."
  }
];
export default function Benefits() {
  return (
    <div className="flex relative flex-col justify-center items-center items-end w-full max-md:pl-5 max-md:max-w-full"style={{
      backgroundImage: 'url("Design_four_images/Group 1321314652.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      height: '60vh',
    }}
    >
    <div className="rounded-none">
      <div className="flex mx-20 mt-20 max-md:flex-col">
          <div className="flex flex-col w-6/12 ml-10 -mr-32 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="Design_four_images/image (11).png"
              alt="Educational CRM platform interface showcase"
              className="object-cover w-[60%] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col w-6/12 mt-8 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
            <h1 className="z-10 self-start mt-0 text-lg font-intermedium tracking-tighter text-zinc-900 max-md:max-w-full">
            
        </h1>
      <div className="z-10 mt-4 max-md:mt-10 max-md:max-w-full">
        {features.map((feature, index) => (
          <div key={index} className="mb-1">
          <ul className="list-disc pl-5">
            <li className="text-sm font-intermedium text-black">
            <span className=" text-lg font-inter">{feature.title} </span><br/>
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
    </div>
  );
}
