import * as React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "bg-blue-300",
    title: "Historical Data Analysis",
    description: "Automatically analyze fee collection trends from previous years.",
  },
  {
    icon: "bg-violet-300",
    title: "Customizable Parameters",
    description: "Adjust parameters like fee hikes, new admissions, and expected dropouts to refine predictions.",
  },
  {
    icon: "bg-green-300",
    title: "Dynamic Forecasting",
    description: "Generate real-time predictions based on updated data throughout the year.",
  },
  {
    icon: "bg-blue-300",
    title: "Integration with Fee Management",
    description: "Seamlessly integrate with Scholar Clone’s fee management module for real-time data syncing.",
  },
];

function FeatureList() {
  return (
    <div className="flex mx-20 mt-24 max-md:flex-col mb-24">
      <div className="flex flex-col w-[60%] pr-20 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="Design_three_images/Group 1321314644.png"
            alt="Educational CRM platform interface showcase"
            className="object-contain grow w-full max-md:mt-10 max-md:max-w-full rounded-2xl"
            style={{
              boxShadow: '0px 0px 8px 0px rgba(16, 24, 40, 0.25)'
            }}
          />
        </div>
    <div className="flex flex-col max-w-full w-[40%] max-md:mt-10">
      {features.map((feature, index) => (
        <div key={index} className="w-full  items-center shadow-sm justify-center mt-8">
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        </div>
      ))}
    </div>
    </div>
  );
}

export default FeatureList;