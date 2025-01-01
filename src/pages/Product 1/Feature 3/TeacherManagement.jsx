import * as React from "react";
import Image from 'next/image'
// TeacherManagement component
export default function TeacherManagement() {
  const actionButtons = [
    "How It Works",
    "How It Benefits You",
    "Visualize Your Workflow"
  ];
  const contentArray = [
    {
      id: 1,
      title: "Education CRM",
      description:
        "Our Attendance Management System revolutionizes the way schools track and manage student attendance. With real-time data capture, automated alerts, and detailed reporting, it ensures seamless monitoring and reduces manual effort. Teachers and administrators can access comprehensive attendance records at a glance, while parents stay informed through instant notifications, fostering accountability and promoting student punctuality and engagement.....",
      image: "/erpservice_images/feature3/Group 346.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 2,
      title: "Student Profiles & Management",
      description:
        "Simplify your exam process with Scholar Clone's Exam Management System. Easily schedule exams, manage question banks, conduct online and offline assessments, and automate grading for faster results. Gain valuable insights with detailed performance reports, while ensuring secure, compliant exam administration. Save time, reduce errors, and improve outcomes with an all-in-one solution designed for modern schools.....",
      image: "/erpservice_images/feature3/Group 348.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 3,
      title: "Attendance Tracking",
      description:
        "Transform learning with Scholar Clone’s Digital Classroom System, offering interactive multimedia lessons, real-time collaboration, and automated attendance tracking. Manage assignments and assessments digitally, providing instant feedback, while seamless communication keeps teachers, students, and parents connected. Boost student engagement and streamline teaching with flexible, accessible tools designed for modern education.....",
      image: "/erpservice_images/feature3/Group 349.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 4,
      title: "Gradebook",
      description:
        "The Grade Book feature in Scholar Clone’s ERP system streamlines grading and assessment for K-12 schools, allowing teachers to record, track, and analyze student performance effortlessly. With easy access to scores and progress reports, educators and parents stay informed and engaged in students' academic journeys.",
      image: "/erpservice_images/feature3/Group 350.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 5,
      title: "Certificate Generation",
      description:
        "With an intuitive grading system, teachers can easily track progress, identify areas for improvement, and keep parents informed. The Certificate Generation tool adds a personal touch, allowing schools to create custom certificates that recognize each student’s unique accomplishments, transforming milestones into memorable keepsakes and enhancing student motivation!",
      image: "/erpservice_images/feature3/Group 351.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 6,
      title: "I-Cards Generation system",
      description:
        "Scholar Clone’s I-Card Generation system provides schools with a fast, efficient way to create professional, customized ID cards for students, staff, and faculty. With essential details and high-quality design, this feature strengthens school security, simplifies identification, and fosters a sense of belonging and pride within the school community—making it a must-have for modern K-12 institutions.",
      image: "/erpservice_images/feature3/Group 352.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 7,
      title: "Hostel Management",
      description:
        "Scholar Clone’s Hostel Management feature offers a complete solution for managing student accommodations with ease and efficiency. From streamlined room assignments and hassle-free check-ins to automated fee tracking and real-time occupancy monitoring, it simplifies every aspect of hostel life. By enhancing safety, organization, and convenience, this feature creates a welcoming, well-organized home away from home that students and parents can trust.",
      image: "/erpservice_images/feature3/Group 353.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 8,
      title: "Library Management",
      description:
        "Library Management transforms the way you manage resources, making it easy to track, issue, and return books with just a few clicks. From digital cataloging to real-time inventory updates, this module streamlines operations and enhances the student experience, ensuring your library is always organized, accessible, and efficient.",
      image: "/erpservice_images/feature3/Group 354.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
  ];

  return (
    <>
    {contentArray.map((item) => (
      <div
      key={item.id} 
      className="lg:flex sm:block gap-10 lg:mx-10 sm:mx-0 lg:mt-10 sm:mt-6 pl-[px] max-md:pl-5"
      >
      {item.id % 2 != 0 ? (
      <>
      <div className="flex flex-col lg:w-[30%] sm:w-full gap-10 mr-60 sm:items-center">
        <Image src={item.image} alt="Student" width={500} height={500} className="lg:flex sm:hidden object-contain w-full" />
        <Image src={item.image} alt="Student" width={100} height={100} className="lg:hidden sm:flex object-contain" />
      </div>
      <div className="flex z-10 flex-col lg:w-[70%] sm:w-full items-start mr-0 font-medium max-md:max-w-full font-intermedium">
        <h1 className="lg:text-2xl sm:text-sm sm:items-center text-amber-500 max-md:max-w-full">
          {item.title}
        </h1>
        <p className="self-stretch lg:mt-8 sm:mt-4 lg:text-lg sm:text-xs text-black text-justify max-md:max-w-full">
          {item.description}
        </p>
        <div className="flex flex-wrap lg:gap-4 sm:gap-2 justify-between lg:mt-8 sm:mt-4 max-w-full lg:text-sm sm:text-xs text-white max-md:mt-10">
        {actionButtons.map((text, index) => (
                    <ActionButton key={index} url={item[`url${index + 1}`]}>
                      {text}
                    </ActionButton>
          ))}
        </div>
      </div>
      </>
      ) : (
        <>
        <div className="lg:hidden sm:flex flex-col lg:w-[30%] sm:w-full gap-10 lg:ml-60 sm:items-center">
        <Image src={item.image} alt="Student" width={100} height={100} className="lg:hidden sm:flex object-contain" />
        </div>
          <div className="flex z-10 flex-col lg:w-[70%] sm:w-full items-start mr-0 font-medium max-md:max-w-full font-intermedium">
        <h1 className="lg:text-2xl sm:text-sm sm:items-center text-amber-500 max-md:max-w-full">
          {item.title}
        </h1>
        <p className="self-stretch lg:mt-8 sm:mt-4 lg:text-lg sm:text-xs text-black text-justify max-md:max-w-full">
          {item.description}
        </p>
        <div className="flex flex-wrap lg:gap-4 sm:gap-2 justify-between lg:mt-8 sm:mt-4 max-w-full lg:text-sm sm:text-xs text-white max-md:mt-10">
        {actionButtons.map((text, index) => (
                    <ActionButton key={index} url={item[`url${index + 1}`]}>
                      {text}
                    </ActionButton>
          ))}
        </div>
      </div>
      <div className="lg:flex sm:hidden flex-col lg:w-[30%] sm:w-full gap-10 lg:ml-60 sm:items-center">
        <Image src={item.image} alt="Student" width={500} height={500} className="lg:flex sm:hidden object-contain w-full" />
      </div>
        </>
      )}
        </div>
    ))}
    </>
  );
}

// ActionButton component
function ActionButton({ children,url }) {
  return (
    <a 
      href={url}
      className="overflow-hidden lg:gap-2.5 lg:self-stretch lg:p-2.5 sm:p-1 lg:rounded-xl sm:rounded-md shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-white"
      tabIndex={0}
      style={{
        background:'rgba(61, 96, 149, 1)'
      }}
    >
      {children}
    </a>
  );
}