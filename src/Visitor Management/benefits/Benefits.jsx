import * as React from "react";
import { BenefitCard } from "./BenefitCard";
import { benefitsData } from "./BenefitsData";
const features = [
  {
    title: "Enhanced Campus Security",
    description: "Keep students and staff safe by restricting unauthorized entry."
  },
  {
    title: "Improved Efficiency",
    description: " Streamline visitor check-ins, saving time for staff and guests."
  },
  {
    title: "Professional Visitor Experience ",
    description: "Greet visitors with a smooth, digital registration process."
  },
  {
    title: "Better Recordkeeping ",
    description: "Maintain a clear, digital log of visitor activities for future reference."
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
