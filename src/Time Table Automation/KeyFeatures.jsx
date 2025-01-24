import * as React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "bg-blue-300",
    title: "Conflict-Free Scheduling",
    description: "Automatically detect and resolve conflicts related to overlapping classes, faculty availability, or room assignments.",
  },
  {
    icon: "bg-violet-300",
    title: "Dynamic Adjustments",
    description: "Update timetables in real-time to accommodate changes such as unexpected leaves, special events, or exam schedules.",
  },
  {
    icon: "bg-green-300",
    title: "Resource Optimization",
    description: "Allocate classrooms, labs, and other resources based on capacity and availability, ensuring efficient utilization.",
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