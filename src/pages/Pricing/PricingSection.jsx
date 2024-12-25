import Header from "../Header/NavBar";
import Footer from "../Footer/Footer";
import * as React from "react";
import PricingCard from "./PricingCard";

const pricingData = [
  {
    title: "Essential Package",
    price: "20",
    features: ["Student Management", "Student Management", "Student Management", "Student Management"],
    buttonColor: "sky-500",
    borderColor: "sky-500"
  },
  {
    title: "Essential Package",
    price: "20",
    recommended: true,
    features: ["Student Management", "Student Management", "Student Management", "Student Management"],
    buttonColor: "sky-500",
    borderColor: "sky-500"
  },
  {
    title: "Essential Package",
    price: "20",
    bestValue: true,
    features: ["Student Management", "Student Management", "Student Management", "Student Management"],
    buttonColor: "green-600",
    borderColor: "green-600"
  }
];

function PricingSection() {
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
            <button tabIndex={0}>ERP</button>
            <button tabIndex={0}>LMS</button>
            <button tabIndex={0}>HRMS</button>
            <button tabIndex={0} className="">Career Counselling</button>
          </div>
        </div>
      </div>
      <div className="z-10 self-center -mt-[300px] ml-4 mr-6 w-full max-w-full max-md:mt-0 max-md:max-w-full">
        <div className="flex gap-10 justify-center  items-center w-full min-h-screen">
          {pricingData?.map((plan, index) => (
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