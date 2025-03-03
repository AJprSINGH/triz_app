import * as React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "bg-blue-300",
    title: "Digital Handbook Builder",
    description: "Create and customize a digital repository that reflects your organization's ethos, operations, and expectations.",
  },
  {
    icon: "bg-violet-300",
    title: "Smart Search Functionality",
    description: "Enable employees to quickly find the information they need with advanced search and filtering options.",
  },
  {
    icon: "bg-green-300",
    title: "Version Control & Updates ",
    description: "Maintain transparency and compliance by ensuring employees always have access to the latest version of policies and procedures.",
  },
];

function FeatureList() {
  return (
    <div className="lg:flex lg:mx-20 sm:mx-10 lg:mt-24 sm:mt-12 max-md:flex-col lg:mb-24 sm:mb-12">
      <div className="flex flex-col lg:w-[60%] lg:pr-20 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="hr_design_three_images/image 15.jpg"
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