import React from "react";
import ImageSection from "./ImageSection";
import Content from './TeacherManagement';
const integrationData = [
 {
        title: "Attendance & Tracking Solution",
        buttonText: "How It Works",
        imageSrc: "/erpservice_images/Frame 70.png",
},
{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/Frame 71.png",
},
{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/Group 72.png",
},
{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/Group 75.png",
},
{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/Group 76.png",
},
{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/Group 77.png",
},
{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/Group 78.png",
},
{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/Group 79.png",
},
{
  title: "Attendance & Tracking Solution",
  buttonText: "How It Works",
  imageSrc: "/erpservice_images/Group 80.png",
},
];

function IntegrationServices() {
  return (
    <main className="flex flex-col rounded-3xl mt-20">
    <header className="self-center lg:text-3xl sm:text-sm font-bold text-center text-sky-500 max-md:max-w-full max-md:text-4xl">
      Features of School Management system
    </header>
    <Content />
      {integrationData.map((integration, index) => (
        <React.Fragment key={index}>
          <ImageSection imageSrc={integration.imageSrc} />
        </React.Fragment>
      ))}
    </main>
  );
}

export default IntegrationServices;