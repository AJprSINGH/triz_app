import React from "react";
import ImageSection from "./ImageSection";
const integrationData = [
{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/feature2/Group 81.png",
},
{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/feature2/Group 82.png",
},
{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/feature2/Group 83.png",
},

{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/feature2/Group 84.png",
},
];

function IntegrationServices() {
  return (
    <main className="flex flex-col rounded-3xl mt-20">
    <header className="self-center lg:text-3xl sm:text-sm font-bold text-center text-sky-500 max-md:max-w-full max-md:text-4xl">
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