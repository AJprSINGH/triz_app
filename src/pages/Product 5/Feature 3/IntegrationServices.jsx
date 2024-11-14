import React from "react";
import ImageSection from "./ImageSection";
const integrationData = [

  {
    title: "Attendance & Tracking Solution",
    buttonText: "How It Works",
    imageSrc: "/commservice_images/feature3/Frame 70.png",
  },
  {
    title: "Attendance & Tracking Solution",
    buttonText: "How It Works",
    imageSrc: "/commservice_images/feature3/Frame 71.png",
  },
  {
    title: "Attendance & Tracking Solution",
    buttonText: "How It Works",
    imageSrc: "/commservice_images/feature3/Group 72.png",
  },
];

function IntegrationServices() {
  return (
    <main className="flex flex-col rounded-3xl mt-20">
    <header className="self-center text-3xl font-bold text-center text-sky-500 max-md:max-w-full max-md:text-4xl">
      Features of School Management system
    </header>
      {integrationData.map((integration, index) => (
        <React.Fragment key={index}>
          <ImageSection imageSrc={integration.imageSrc} />
        </React.Fragment>
      ))}
    </main>
  );
}

export default IntegrationServices;