import React from "react";
import ImageSection from "./ImageSection";
const integrationData = [
{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/feature3/Group 85.png",
},
{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/feature3/Group 86.png",
},
{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/feature3/Group 87.png",
},
{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/feature3/Group 88.png",
},
{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/feature3/Group 89.png",
},
{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/feature3/Group 90.png",
},
{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/feature3/Group 91.png",
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