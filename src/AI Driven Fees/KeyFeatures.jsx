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
    <div className="lg:flex lg:mx-20 sm:mx-10 lg:mt-24 sm:mt-12 max-md:flex-col lg:mb-24 sm:mb-12">
      <div className="flex flex-col lg:w-[60%] lg:pr-20 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="AI Driven Images/image 84.png"
            alt="Educational CRM platform interface showcase"
            className="object-contain grow w-full max-md:mt-10 max-md:max-w-full rounded-2xl"
            style={{
              boxShadow: '0px 0px 8px 0px rgba(16, 24, 40, 0.25)'
            }}
          />
        </div>
    <div className="flex flex-col max-w-full lg:w-[40%] max-md:mt-10">
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