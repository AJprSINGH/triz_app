import Header from "../Header/NavBar";
import Footer from "../Footer/Footer";
import * as React from "react";
import PricingCard from "./PricingCard";

const pricingData = {
  ERP: [
  {
    title: "Basic ERP",
    price: "25000",
    features: [
      "Student Management",
      "Attendance",
      "Fee Management",
      "Timetable",
      "Basic Reports"
    ],
    featuresDescription: [
      "Add/edit student profiles, ID generation",
      "Daily/period tracking",
      "Invoice generation, payment tracking",
      "Automated class scheduling",
      "Exportable data for attendance, fees, and schedules"
    ],
    buttonColor: "sky-500",
    borderColor: "sky-500"
  },
  {
    title: "Professional ERP",
    price: "50000",
    recommended: true,
    Prerequisite: "Basic ERP+",
    features: [
      // "Student Management",
      // "Attendance",
      // "Fee Management",
      // "Timetable",
      // "Basic Reports",
      "Exam Management",
      "Inventory Management",
      "Campus Management",
      "Library Management"
    ],
    featuresDescription: [
      "Add/edit student profiles, ID generation",
      "Daily/period tracking",
      "Invoice generation, payment tracking",
      "Automated class scheduling",
      "Exportable data for attendance, fees, and schedules",
      "Grading, results, report cards",
      "Track assets and resources",
      "Manage facilities, transport, and extracurriculars",
      "Catalog books, issue/return tracking"
    ],
    buttonColor: "sky-500",
    borderColor: "sky-500"
  },
  {
    title: "Enterprise ERP",
    price: "75000",
    bestValue: true,
    Prerequisite: "Professional ERP+",
    features: [
      // "Student Management",
      // "Attendance",
      // "Fee Management",
      // "Timetable",
      // "Basic Reports",
      // "Exam Management",
      // "Inventory Management",
      // "Campus Management",
      // "Library Management",
      "Advanced Analytics",
      "Mobile App Access",
      "Admissions",
      "Hostel Management"
    ],
    featuresDescription: [
      "Add/edit student profiles, ID generation",
      "Daily/period tracking",
      "Invoice generation, payment tracking",
      "Automated class scheduling",
      "Exportable data for attendance, fees, and schedules",
      "Grading, results, report cards",
      "Track assets and resources",
      "Manage facilities, transport, and extracurriculars",
      "Catalog books, issue/return tracking",
      "Dashboards, predictive trends",
      "Parent and teacher portals",
      "Online application, review, and approval",
      "Room allocation, mess schedules, fee tracking"
    ],
    buttonColor: "green-600",
    borderColor: "green-600"
  },
],
LMS: [
  {
    title: "Starter LMS",
    price: "20000",
    features: [
      "Course Creation",
      "Assignment Management",
      "Basic Reporting",
      "Lesson Plans"
    ],
    featuresDescription: [
      "Upload content, organize by topics",
      "Online submissions, grading",
      "Student performance and course completion",
      "Generate NCERT-aligned plans"
    ],
    buttonColor: "sky-500",
    borderColor: "sky-500"
  },
  {
    title: "Advanced LMS",
    price: "40000",
    recommended: true,
    Prerequisite: "Starter LMS+",
    features: [
      // "Course Creation",
      // "Assignment Management",
      // "Basic Reporting",
      // "Lesson Plans",
      "Discussion Forums",
      "Gradebook",
      "Quizzes",
      "Homework Generator"
    ],
    featuresDescription: [
      "Upload content, organize by topics",
      "Online submissions, grading",
      "Student performance and course completion",
      "Generate NCERT-aligned plans",
      "Peer-to-peer engagement",
      "Automated grade tracking",
      "Timed tests, instant results",
      "Auto-generate assignments based on topics"
    ],
    buttonColor: "sky-500",
    borderColor: "sky-500"
  },
  {
    title: "Premium LMS",
    price: "60000",
    bestValue: true,
    Prerequisite: "Advanced LMS+",
    features: [
      // "Course Creation",
      // "Assignment Management",
      // "Basic Reporting",
      // "Lesson Plans",
      // "Discussion Forums",
      // "Gradebook",
      // "Quizzes",
      // "Homework Generator",
      "Gamification",
      "PAL (Personalized Adaptive Learning)",
      "Mobile App Access",
      "ERP Integration"
    ],
    featuresDescription: [
      "Upload content, organize by topics",
      "Online submissions, grading",
      "Student performance and course completion",
      "Generate NCERT-aligned plans",
      "Peer-to-peer engagement",
      "Automated grade tracking",
      "Timed tests, instant results",
      "Auto-generate assignments based on topics",
      "Badges, leaderboards, and rewards",
      "Customized learning paths",
      "Learning on the go",
      "Seamless connection with ERP modules"
    ],
    buttonColor: "green-600",
    borderColor: "green-600"
  },
],
CareerCounselling: [
  {
    title: "Awareness Module",
    price: "15000",
    features: [
      "Career Exploration Tools",
      "Interest & Personality Tests",
      "Career Curriculum"
    ],
    featuresDescription: [
      "Browse career paths",
      "RIASEC-based profiling",
      "Structured learning materials for career awareness"
    ],
    buttonColor: "sky-500",
    borderColor: "sky-500"
  },
  {
    title: "Counselling Module",
    price: "30000",
    recommended: true,
    Prerequisite: "Awareness Module+",
    features: [
      // "Career Exploration Tools",
      // "Interest & Personality Tests",
      // "Career Curriculum",
      "Personalized Career Counselling",
      "Occupation Info",
      "Education Pathways",
      "Scholarship Details"
    ],
    featuresDescription: [
      "Browse career paths",
      "RIASEC-based profiling",
      "Structured learning materials for career awareness",
      "AI-driven insights",
      "Job roles, skills required",
      "Higher studies and professional options",
      "Access to financial aid options"
    ],
    buttonColor: "sky-500",
    borderColor: "sky-500"
  },
  {
    title: "Comprehensive Module",
    price: "50000",
    bestValue: true,
    Prerequisite: "Counselling Module+",
    features: [
      // "Career Exploration Tools",
      // "Interest & Personality Tests",
      // "Career Curriculum",
      // "Personalized Career Counselling",
      // "Occupation Info",
      // "Education Pathways",
      // "Scholarship Details",
      "Career Preparation Tools",
      "Competitive Exam Guidance",
      "Self-Service Tools"
    ],
    featuresDescription: [
      "Browse career paths",
      "RIASEC-based profiling",
      "Structured learning materials for career awareness",
      "AI-driven insights",
      "Job roles, skills required",
      "Higher studies and professional options",
      "Access to financial aid options",
      "Mock interviews, CV/resume templates",
      "Exam lists, preparation tips",
      "Personalized dashboards for students"
    ],
    buttonColor: "green-600",
    borderColor: "green-600"
  },
],
HRMS: [
  {
    title: "Basic HRMS",
    price: "30000",
    features: [
      "Staff Attendance",
      "Payroll Management",
      "Leave Tracking"
    ],
    featuresDescription: [
      "Track daily attendance",
      "Salary computation, tax deductions",
      "Apply, approve, and manage leaves"
    ],
    buttonColor: "sky-500",
    borderColor: "sky-500"
  },
  {
    title: "Professional HRMS",
    price: "50000",
    recommended: true,
    Prerequisite: "Basic HRMS+",
    features: [
      // "Staff Attendance",
      // "Payroll Management",
      // "Leave Tracking",
      "Recruitment Module",
      "Appraisals",
      "HR Workflows"
    ],
    featuresDescription: [
      "Track daily attendance",
      "Salary computation, tax deductions",
      "Apply, approve, and manage leaves",
      "Post job openings, track applications",
      "Evaluate employee performance",
      "Automate routine HR tasks"
    ],
    buttonColor: "sky-500",
    borderColor: "sky-500"
  },
  {
    title: "Advanced HRMS",
    price: "75000",
    bestValue: true,
    Prerequisite: "Professional HRMS+",
    features: [
      // "Staff Attendance",
      // "Payroll Management",
      // "Leave Tracking",
      // "Recruitment Module",
      // "Appraisals",
      // "HR Workflows",
      "Training Modules",
      "Self-Service Portal",
      "Mobile HR Management"
    ],
    featuresDescription: [
      "Track daily attendance",
      "Salary computation, tax deductions",
      "Apply, approve, and manage leaves",
      "Post job openings, track applications",
      "Evaluate employee performance",
      "Automate routine HR tasks",
      "Plan and track staff training",
      "Allow staff to manage their profiles and tasks",
      "Access HR tools on mobile devices"
    ],
    buttonColor: "green-600",
    borderColor: "green-600"
  }
]
};
function PricingSection() {
  const [selectedCategory, setSelectedCategory] = React.useState("ERP");

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };
  const buttonStyle = (category) => {
    return selectedCategory === category
      ? "bg-slate-700 text-amber-600 border-green-600"
      : "bg-white text-indigo-950 border-green-600";
  };
  return (
    <>
    <Header />
    <div className="flex flex-col rounded-none">
      <div className="flex overflow-hidden flex-col items-center px-20 pt-20 pb-56 w-full text-white bg-slate-700 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col items-center mb-0 max-w-full w-[full] max-md:mb-2.5">
          <h1 className="text-3xl font-bold font-merriweather max-md:max-w-full max-md:text-4xl">
            Explore & find your perfect fit!
          </h1>
          <div className="self-center mt-6 text-sm font-merriweather max-md:max-w-full">
            Unlock the perfect plan for you or your team. Take the first step
            toward effortless management today.
          </div>
          <div className="flex overflow-hidden gap-10 px-10 py-2 mt-10 max-w-full font-inter text-md items-start justify-between font-medium bg-white border-2 border-green-600 border-solid rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-indigo-950 w-[738px] max-md:px-5 max-md:mt-10">
          <button
                onClick={() => handleButtonClick("ERP")}
                className={`py-2 px-4 rounded-full ${buttonStyle("ERP")}`}
                tabIndex={0}
              >
                ERP
              </button>
              <button
                onClick={() => handleButtonClick("LMS")}
                className={`py-2 px-4 rounded-full ${buttonStyle("LMS")}`}
                tabIndex={0}
              >
                LMS
              </button>
              <button
                onClick={() => handleButtonClick("HRMS")}
                className={`py-2 px-4 rounded-full ${buttonStyle("HRMS")}`}
                tabIndex={0}
              >
                HRMS
              </button>
              <button
                onClick={() => handleButtonClick("CareerCounselling")}
                className={`py-2 px-4 rounded-full ${buttonStyle("CareerCounselling")}`}
                tabIndex={0}
              >
                Career Counselling
              </button>
          </div>
        </div>
      </div>
      <div className="z-10 self-center -mt-[244px] ml-4 mr-6 w-full max-w-full max-md:mt-0 max-md:max-w-full">
        <div className="flex gap-10 justify-center  items-center w-full min-h-screen">
        {pricingData[selectedCategory]?.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}  
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default PricingSection;