import * as React from "react";
import { BenefitCard } from "./BenefitCard";
import { benefitsData } from "./BenefitsData";
const features = [
  {
    title: "Save Time: ",
    description: "Get instant answers without waiting for support staff."
  },
  {
    title: "Improve Efficiency:",
    description: "Learn system navigation and features faster with personalized assistance."
  },
  {
    title: "Accessible Anytime: ",
    description: "Available 24/7, the chatbot ensures you’re never left without help."
  },
  {
    title: "Enhanced User Experience: ",
    description: "A seamless, intuitive, and helpful way to interact with Scholar Clone."
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
              src="ai_design_images/image 8.png"
              alt="Educational CRM platform interface showcase"
              className="object-cover w-[60%] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col w-6/12 mt-8 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
            <h1 className="z-10 self-start mt-0 text-lg font-intermedium tracking-tighter text-zinc-900 max-md:max-w-full">
            Track and manage every piece of correspondence with a powerful, user-friendly interface. From letters and emails to official notices, this module acts as a centralized hub for all your record-keeping needs.
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
