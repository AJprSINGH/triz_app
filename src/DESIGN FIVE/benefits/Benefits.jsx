import * as React from "react";
import { BenefitCard } from "./BenefitCard";
import { benefitsData } from "./BenefitsData";

export default function Benefits() {
  return (
    <div className="flex flex-col pb-10 pl-20 h-[120vh] bg-white overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.25)] max-md:pl-5">
      <div className=" w-full max-w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-full items-center justify-center  max-md:ml-0 max-md:w-full">
            <div className="mt-10 text-3xl font-inter pl-40 text-center text-sky-800 max-md:mt-10 max-md:max-w-full">
              Why Your School Needs the Complain Management Module?
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba3124853833bab105b0d8711735aebcde4fb580608bd44e5269c444d8d7b955?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
              className="object-contain grow shrink-0 max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-0 ">
  <div className="builder-canvas relative max-w-full w-full max-md:mt-10">
    <div className="flex absolute shrink-0 rounded-full border-green-600 border-solid border-[25px] h-[260px] left-[125px] top-[420px] w-[260px]" />
    <div className="border-r-2 border-gray-400 p-4">
    <div className="absolute top-8 text-lg font-bold h-[53px] left-[246.60415649414062px] w-[253px]">
      Strengthen Trust and Relationships
    </div>
    <div className="absolute text-sm h-[107px] left-[246.60415649414062px] top-[100.33331298828125px] w-[228px]">
      Show parents, students, and staff that their voices matter. Timely
      responses foster trust and a stronger sense of community.
    </div>
    </div>
    <div className="absolute top-8 text-lg font-bold h-[53px] left-[530.3750305175781px] w-[253px]">
      Boost Efficiency and Accountability
    </div>
    <div className="absolute text-sm h-[107px] left-[530.3750305175781px] top-[100.33331298828125px] w-[228px]">
      Streamline complaint handling, reduce response times, and track every
      step for complete accountability.
    </div>
    
    <div className="absolute top-8 text-lg font-bold h-[53px] left-[814.1459045410156px] w-[253px]">
      Identify and Address Root Causes
    </div>
    <div className="absolute text-sm h-[107px] left-[814.1459045410156px] top-[100.33331298828125px] w-[228px]">
      Use analytics to spot patterns and address recurring issues, improving
      overall school management.
    </div>
    
    <div className="absolute text-lg font-bold h-[53px] left-[246.60415649414062px] top-[250px] w-[253px]">
      Strengthen Trust and Relationships
    </div>
    <div className="absolute text-sm h-[107px] left-[246.60415649414062px] top-[318.33331298828125px] w-[228px]">
      Show parents, students, and staff that their voices matter. Timely
      responses foster trust and a stronger sense of community.
    </div>
    <div className="absolute text-lg font-bold h-[53px] left-[530.3750305175781px] top-[250px] w-[253px]">
      Boost Efficiency and Accountability
    </div>
    <div className="absolute text-sm h-[107px] left-[530.3750305175781px] top-[318.33331298828125px] w-[228px]">
      Streamline complaint handling, reduce response times, and track every
      step for complete accountability.
    </div>
    
    <div className="absolute text-lg  font-bold h-[53px] left-[814.1459045410156px] top-[250px] w-[253px]">
      Identify and Address Root Causes
    </div>
    <div className="absolute text-sm h-[107px] left-[814.1459045410156px] top-[318.33331298828125px] w-[228px]">
      Use analytics to spot patterns and address recurring issues, improving
      overall school management.
    </div>
  </div>
</div>

    </div>
  );
}
