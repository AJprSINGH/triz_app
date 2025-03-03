import * as React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "bg-blue-300",
    title: "Borrowing Management",
    description: "Track every issued, returned, or overdue book with a streamlined system for both students and staff.",
  },
  {
    icon: "bg-violet-300",
    title: "Reservation & Hold System",
    description: "Allow users to reserve or place holds on books with just a few clicks, ensuring fair access.",
  },
  {
    icon: "bg-green-300",
    title: "Overdue Alerts & Fine Collection",
    description: "Set automated reminders for overdue items and manage fine collections efficiently to maintain accountability.",
  },
  {
    icon: "bg-blue-300",
    title: "Detailed Reports & Analytics",
    description: "Get actionable insights into borrowing trends, popular books, and library usage to make data-driven decisions.",
  },
  {
    icon: "bg-violet-300",
    title: "Multi-Campus Integration",
    description: "Manage libraries across multiple campuses with centralized control for inventory and user management.",
  },
];

function FeatureList() {
  return (
    <div className="lg:flex lg:mx-20 sm:mx-10 lg:mt-24 sm:mt-12 max-md:flex-col lg:mb-24 sm:mb-12">
      <div className="flex flex-col lg:w-[60%] lg:pr-20 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="\library mangement\image 84.jpg"
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