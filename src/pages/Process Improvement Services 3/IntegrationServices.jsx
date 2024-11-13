import React from "react";
import IntegrationCard from "./IntegrationCard";
import ImageSection from "./ImageSection";
const integrationData = [
 {
        title: "Attendance & Tracking Solution",
        buttonText: "How It Works",
        imageSrc: "/PI 3/Frame 83.png",
},
];

function IntegrationServices() {
  return (
    <main className="flex flex-col rounded-3xl mt-20">
    <header className="self-center text-5xl font-bold text-center text-sky-500 max-md:max-w-full max-md:text-4xl">
      Seamlessly connect and elevate your processes with <br />
      our powerful integration services.
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