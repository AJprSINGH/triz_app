import * as React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "bg-blue-300",
    title: "Job Posting & Tracking",
    description: "Expand your reach by posting to top platforms while tracking application progress in real-time.",
  },
  {
    icon: "bg-violet-300",
    title: "Resume Screening Powered by AI",
    description: "Identify the best-fit candidates through automated resume parsing and scoring.",
  },
  {
    icon: "bg-green-300",
    title: "Pre-Assessment Tools",
    description: "Evaluate candidates' skills with built-in tests, ensuring only qualified individuals make it through.",
  },
];

function FeatureList() {
  return (
    <div className="flex mx-20 mt-24 max-md:flex-col mb-24">
      <div className="flex flex-col w-[60%] pr-20 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="hr_design_three_images/image 3.jpg"
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