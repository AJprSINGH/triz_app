import * as React from "react";
import PricingPlan from "./PricingPlan";
import Header from "../Header/NavBar";
import Footer from "../Footer/Footer";
const essentialFeatures = [
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/00a7c91fc5b4a2515351adda853d175b24723c4c3c6aadbfbcfa0b78d201484c?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Admission Management", 
    description: "Manage student admissions, handle application processes, and track candidate status efficiently." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/87119d1167e32479282ea3a596958ef37457f564d7e56c6754f3606be4e973a6?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Communication Solutions", 
    description: "Streamline communication across departments, students, and parents with integrated tools." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43fd42c07ee084d1e73139d3438bf816f39a99189150a7f2d7d6ff0e4bebac72?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Attendance Management", 
    description: "Track and manage student attendance, send alerts, and generate reports automatically." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43fd42c07ee084d1e73139d3438bf816f39a99189150a7f2d7d6ff0e4bebac72?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Exam Management", 
    description: "Organize and schedule exams, manage results, and generate comprehensive reports." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a7b1e7c4e4f97e35d1d916c86af5805dc99bfd70a0c3676cabdf8891cc4fa48?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Student Services", 
    description: "Offer student support through counseling, financial aid, and other essential services." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64c0f1fa963736f85b6c16c1502bcac38099b5b25b1bfa2a6a500c7b7187bb3d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Mobile Applications", 
    description: "Enable students and faculty to access information on-the-go with dedicated mobile apps." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64c0f1fa963736f85b6c16c1502bcac38099b5b25b1bfa2a6a500c7b7187bb3d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Attendance Management", 
    description: "Track and monitor attendance patterns across courses and sessions." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64c0f1fa963736f85b6c16c1502bcac38099b5b25b1bfa2a6a500c7b7187bb3d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Human Resource Management", 
    description: "Manage faculty and staff records, payroll, and performance evaluations." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64c0f1fa963736f85b6c16c1502bcac38099b5b25b1bfa2a6a500c7b7187bb3d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Library Management System", 
    description: "Efficiently manage library resources, track borrowing, and maintain records." 
  }
];

const advancedFeatures = [
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/00a7c91fc5b4a2515351adda853d175b24723c4c3c6aadbfbcfa0b78d201484c?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Campus and Facility Management", 
    description: "Oversee campus facilities, maintenance, and resource allocation with ease." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/87119d1167e32479282ea3a596958ef37457f564d7e56c6754f3606be4e973a6?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Career Services", 
    description: "Support students' career development, internships, and job placements." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43fd42c07ee084d1e73139d3438bf816f39a99189150a7f2d7d6ff0e4bebac72?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Faculty and Administration Mobile App", 
    description: "Offer mobile solutions for faculty and administrators to manage tasks on the go." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43fd42c07ee084d1e73139d3438bf816f39a99189150a7f2d7d6ff0e4bebac72?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Learning Management System (Enhanced)", 
    description: "Advanced tools for creating, delivering, and managing courses and content." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a7b1e7c4e4f97e35d1d916c86af5805dc99bfd70a0c3676cabdf8891cc4fa48?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Human Resource Management (Extended)", 
    description: "Comprehensive HR tools for payroll, performance tracking, and employee data management." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64c0f1fa963736f85b6c16c1502bcac38099b5b25b1bfa2a6a500c7b7187bb3d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Analytics and Reports", 
    description: "Generate detailed analytics and reports for various aspects of the system." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64c0f1fa963736f85b6c16c1502bcac38099b5b25b1bfa2a6a500c7b7187bb3d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Attendance Management", 
    description: "Track attendance with real-time updates and customized notifications." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64c0f1fa963736f85b6c16c1502bcac38099b5b25b1bfa2a6a500c7b7187bb3d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Inventory and Store Management", 
    description: "Manage campus inventory, supplies, and store resources effectively." 
  }
];

const nextGenFeatures = [
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/85fcff78007ff46d9897a6f6f82c8e50f00953afccb393450aed7a70f8abd568?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Advanced Campus Management", 
    description: "Leverage AI-driven tools to manage and optimize campus infrastructure." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d519531d080bf2cefb7f2e5b337ec9e7730694d055f8a1c294ae3d6b47ba181?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Career and Placement Services", 
    description: "Offer students personalized career services and placement support with enhanced tools." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ca629b7126b6eaeb98d242bdfbe8f28d9cacf8a34263fe93ca4e37c3c39f468?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Education CRM", 
    description: "Manage all student data, interactions, and communications in one centralized system." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ca629b7126b6eaeb98d242bdfbe8f28d9cacf8a34263fe93ca4e37c3c39f468?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "AI and Predictive Analytics", 
    description: "Use AI and predictive analytics to optimize student outcomes and operational efficiency." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/718dfcb77a8a8c07badb8dbba94da20577347f93d6135fae757df1945dc4ee22?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Trustee/Principal Features", 
    description: "Empower leadership with strategic tools for governance and decision-making." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/57a938c362963fa4f9c8d579b8a52975841a50523b46ad9b759dfa83ed575f76?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Learning Management System (Complete)", 
    description: "Comprehensive LMS solution with advanced features for educators and students." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/57a938c362963fa4f9c8d579b8a52975841a50523b46ad9b759dfa83ed575f76?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Library Management System", 
    description: "An integrated library management system to handle all aspects of campus libraries." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/57a938c362963fa4f9c8d579b8a52975841a50523b46ad9b759dfa83ed575f76?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Research Management System", 
    description: "Facilitate research activities, from proposal submission to publication." 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/57a938c362963fa4f9c8d579b8a52975841a50523b46ad9b759dfa83ed575f76?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", 
    text: "Advanced Analytics", 
    description: "Unlock powerful insights into campus operations, student performance, and more." 
  }
];
function PricingSection() {
  return (
    <>
    <Header />
    <div className="flex flex-col mx-28 mt-20 mb-20">
      <div className="self-center text-4xl font-bold font-merriweather text-center text-slate-500 max-md:max-w-full max-md:text-4xl">
        Smart Plans for Every Need, Perfect Value for Everyone
      </div>
      <div className="px-9 pb-2.5 mt-16 w-full rounded-3xl bg-slate-700 bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="w-[43%] max-md:ml-0 max-md:w-full">
                    <PricingPlan
                      price="20"
                      title="Essential Package"
                      description="Unleash the power of automation."
                      features={essentialFeatures}
                    />
                    <button className="px-10 py-2.5 mt-2.5 text-white font-poppins bg-emerald-500 rounded-3xl bg-blend-normal max-md:px-5">
                  Choose plan
                </button>
                  </div>
                  <div className="ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                    <PricingPlan
                      price="45"
                      title="Advanced Package"
                      description="Includes all modules from the Essential Package, plus:"
                      features={advancedFeatures}
                    />
                  <button className="px-10 py-2.5 mt-10 text-white font-poppins bg-emerald-500 rounded-3xl bg-blend-normal max-md:px-5">
                  Choose plan
                  </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-between mt-2 max-w-full text-lg font-medium font-poppins text-center w-[759px]">
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[32%] -mt-10 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-5 pb-16 mt-0 w-full text-white bg-teal-800 rounded-3xl shadow-[0px_42px_34px_rgba(82,67,194,0.296)] max-md:mt-1.5 max-md:max-w-full">
              <div className="self-end px-4 py-1.5 mr-14 text-xs font-extrabold font-poppins tracking-wider text-center rounded-2xl bg-slate-700 max-md:mr-2.5">
                MOST POPULAR
              </div>
              <div className="flex flex-col items-start px-10 mt-6 w-full max-md:px-5 max-md:max-w-full">
                <PricingPlan
                  price="60"
                  title="NextGen Package"
                  description="Includes all modules from the Advanced Package, plus:"
                  features={nextGenFeatures}
                  buttonColor="bg-slate-700"
                  textColor="text-white"
                  featureTextColor = "text-white"
                  descriptionTextColor = "text-white"
                />  
                <button className="px-10 py-2.5 mt-2.5 max-w-full text-base font-medium font-poppins text-center text-white rounded-3xl bg-slate-700 w-[200px] max-md:px-5 max-md:mt-10">
                  Choose plan
                </button>
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

export default PricingSection;