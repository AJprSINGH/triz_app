import * as React from "react";
import FeatureCard from "./FeatureCard";
import Hero from "./UserTeacherHero";
import Header from "../Header/NavBar";
import Footer from "../Footer/Footer";
const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/227de1a81194327dadc68ea982974c4da555caf9be06a82a9142ea07345472c1?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "User Management",
    description: `Comprehensive user profiles for teachers, students, and parents.
      Role-based access controls for secure and efficient management.
      Bulk user creation and imports for streamlined onboarding.`
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb99ce25f2bb43cbbcbea469a1e9c0ec14b2ff34fbabc65ea8cebd2178140316?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Student Attendance \nManagement",
    description: `Real-time attendance tracking with automated notifications.
      Detailed attendance reports for classes and individuals.
      Biometric and RFID integration for accurate tracking.`
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a30eae674798ec432caf252e9b7bdc3b33db65f566107f24528ff6460682eb59?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Exam Management",
    description: `Simplified marks entry for exams and co-scholastic activities.
      Result uploads and higher-performance class (HPC) tracking.`
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/47b32b639f621fa6fd7e7ba04829af1dd3c6c7580eea1667265e30fec743cefa?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Learning Outcomes \nManagement",
    description: `Define and analyze learning outcomes for each subject.
      Visualize performance trends with learning outcome graphs.`
  }
];

export default function FeaturesSection() {
  return (
    <>
    <Header />
    <Hero />
    <div className="flex flex-col font-inter rounded-none"style={{
        borderTop: 'solid',
        borderTopColor: 'rgba(151, 151, 151, 1)',
      }}>
      <div className="flex gap-0 max-md:flex-col">
        <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow pt-44 pr-16 pl-5 mt-auto w-full text-xl font-medium text-white rounded-none rounded-tr-xl rounded-br-xl bg-opacity-80 shadow-[3px_0px_8px_rgba(0,0,0,0.25)] max-md:px-5 max-md:py-24" style={{
            background: 'rgba(34, 69, 111, 0.75)'
          }}>
            <div>Features</div>
            <div className="mt-12 max-md:mt-10 max-md:mr-2">Benefits</div>
          </div>
        </div>
        <div className="flex flex-col ml-1 w-[84%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-10 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[1300px]">
              <h1 className="self-center ml-12 text-2xl font-medium text-amber-500 max-md:max-w-full max-md:text-xl">
                Key Features and Modules
              </h1>
              <div className="mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  {features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <FeatureCard {...feature} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  {features.slice(2, 4).map((feature, index) => (
                    <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <FeatureCard {...feature} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}