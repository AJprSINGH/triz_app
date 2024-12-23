import * as React from "react";
import PricingPlan from "./PricingPlan";
import Header from "../Header/NavBar";
import Footer from "../Footer/Footer";
const essentialFeatures = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/00a7c91fc5b4a2515351adda853d175b24723c4c3c6aadbfbcfa0b78d201484c?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Admission Management" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/87119d1167e32479282ea3a596958ef37457f564d7e56c6754f3606be4e973a6?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Communication Solutions" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43fd42c07ee084d1e73139d3438bf816f39a99189150a7f2d7d6ff0e4bebac72?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Attendance Management" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43fd42c07ee084d1e73139d3438bf816f39a99189150a7f2d7d6ff0e4bebac72?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Exam Management" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a7b1e7c4e4f97e35d1d916c86af5805dc99bfd70a0c3676cabdf8891cc4fa48?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Student Services" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64c0f1fa963736f85b6c16c1502bcac38099b5b25b1bfa2a6a500c7b7187bb3d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Mobile Applications" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64c0f1fa963736f85b6c16c1502bcac38099b5b25b1bfa2a6a500c7b7187bb3d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Attendance Management" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64c0f1fa963736f85b6c16c1502bcac38099b5b25b1bfa2a6a500c7b7187bb3d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Human Resource Management" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64c0f1fa963736f85b6c16c1502bcac38099b5b25b1bfa2a6a500c7b7187bb3d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Library Management System" }
];

const advancedFeatures = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/00a7c91fc5b4a2515351adda853d175b24723c4c3c6aadbfbcfa0b78d201484c?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Campus and Facility Management" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/87119d1167e32479282ea3a596958ef37457f564d7e56c6754f3606be4e973a6?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Career Services" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43fd42c07ee084d1e73139d3438bf816f39a99189150a7f2d7d6ff0e4bebac72?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Faculty and Administration Mobile App" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43fd42c07ee084d1e73139d3438bf816f39a99189150a7f2d7d6ff0e4bebac72?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Learning Management System (Enhanced)" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a7b1e7c4e4f97e35d1d916c86af5805dc99bfd70a0c3676cabdf8891cc4fa48?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Human Resource Management (Extended)" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64c0f1fa963736f85b6c16c1502bcac38099b5b25b1bfa2a6a500c7b7187bb3d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Analytics and Reports" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64c0f1fa963736f85b6c16c1502bcac38099b5b25b1bfa2a6a500c7b7187bb3d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Attendance Management" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64c0f1fa963736f85b6c16c1502bcac38099b5b25b1bfa2a6a500c7b7187bb3d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Inventory and Store Management" }
];

const nextGenFeatures = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/85fcff78007ff46d9897a6f6f82c8e50f00953afccb393450aed7a70f8abd568?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Advanced Campus Management" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d519531d080bf2cefb7f2e5b337ec9e7730694d055f8a1c294ae3d6b47ba181?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Career and Placement Services" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ca629b7126b6eaeb98d242bdfbe8f28d9cacf8a34263fe93ca4e37c3c39f468?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Education CRM" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ca629b7126b6eaeb98d242bdfbe8f28d9cacf8a34263fe93ca4e37c3c39f468?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "AI and Predictive Analytics" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/718dfcb77a8a8c07badb8dbba94da20577347f93d6135fae757df1945dc4ee22?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Trustee/Principal Features" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/57a938c362963fa4f9c8d579b8a52975841a50523b46ad9b759dfa83ed575f76?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Learning Management System (Complete)" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/57a938c362963fa4f9c8d579b8a52975841a50523b46ad9b759dfa83ed575f76?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Library Management System" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/57a938c362963fa4f9c8d579b8a52975841a50523b46ad9b759dfa83ed575f76?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Research Management System" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/57a938c362963fa4f9c8d579b8a52975841a50523b46ad9b759dfa83ed575f76?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", text: "Advanced Analytics" }
];

function PricingSection() {
  return (
    <>
    <Header />
    <div className="flex flex-col mx-10 mt-20 mb-20">
      <div className="self-center text-4xl font-bold font-merriweather text-center text-slate-500 max-md:max-w-full max-md:text-4xl">
        Smart Plans for Every Need, Perfect Value for Everyone
      </div>
      <div className="px-9 pb-2.5 mt-20 w-full rounded-3xl bg-slate-700 bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                    <PricingPlan
                      price="20"
                      title="Essential Package"
                      description="Unleash the power of automation."
                      features={essentialFeatures}
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                    <PricingPlan
                      price="45"
                      title="Advanced Package"
                      description="Includes all modules from the Essential Package, plus:"
                      features={advancedFeatures}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-24 items-start mt-10 max-w-full text-lg font-medium font-poppins text-center w-[759px]">
                <button className="px-16 py-6 mt-2.5 text-white bg-emerald-500 rounded-3xl bg-blend-normal max-md:px-5">
                  Choose plan
                </button>
                <button className="px-16 py-6 mt-2.5 text-white bg-emerald-500 rounded-3xl bg-blend-normal max-md:px-5">
                  Choose plan
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[36%] -mt-10 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-5 pb-16 mt-0 w-full text-white bg-teal-800 rounded-3xl shadow-[0px_42px_34px_rgba(82,67,194,0.296)] max-md:mt-1.5 max-md:max-w-full">
              <div className="self-end px-4 py-1.5 mr-20 text-xs font-extrabold font-poppins tracking-wider text-center rounded-2xl bg-slate-700 max-md:mr-2.5">
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
                />  
                <button className="px-16 py-6 mt-2.5 max-w-full text-base font-medium font-poppins text-center text-white rounded-3xl bg-slate-700 w-[300px] max-md:px-5 max-md:mt-10">
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