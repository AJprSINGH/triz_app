import * as React from "react";
import { BenefitCard } from "./BenefitCard";
import { benefitsData } from "./BenefitsData";

export default function Benefits() {
  return (<>
    <div className="lg:flex sm:hidden flex-col pb-10 h-[110vh] bg-white overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.25)] max-md:pl-5">
      <div className=" w-full pl-20 max-w-full max-md:max-w-full">
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
      <div className="flex justify-center items-center mt-10 mx-60">
        
        <div className="builder-canvas relative max-w-full w-full max-md:mt-10 bg-gray-400 bg-opacity-30 rounded-2xl p-0 border-4 border-gray-400 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <div className="grid grid-cols-3 gap-6">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className={`p-6 rounded-br-lg  flex flex-col items-start ${
                  index === benefitsData.length - 1
                    ? "bg-[rgb(17,24,38)] text-white"
                    : "text-black"
                }`}
              >
                <div className="text-xl font-inter  mb-4">
                  {benefit.title}
                </div>
                <div className="text-sm font-interregular ">
                  {benefit.description}
                </div>
              </div>
            ))}
            <div className="absolute bottom-[-250px] left-[-100px]">
              <div className="flex relative shrink-0 rounded-full border-green-600 border-solid border-[25px] h-[260px] w-[260px]" />
            </div>
          </div>
        </div>
      </div>
</div>
<div className="sm:flex lg:hidden flex-col pb-10 h-[130vh] bg-white overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.25)] max-md:pl-5">
      <div className=" w-full max-w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-full items-center justify-center  max-md:ml-0 max-md:w-full">
            <div className="text-1xl font-inter pl-10 text-center text-sky-800 max-md:mt-10 max-md:max-w-full">
              Why Your School Needs the Complain Management Module?
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba3124853833bab105b0d8711735aebcde4fb580608bd44e5269c444d8d7b955?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
              className="object-contain grow shrink-0 max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 mx-14">
        
        <div className="builder-canvas relative max-w-full w-full max-md:mt-10 bg-gray-400 bg-opacity-30 rounded-2xl p-0 border-4 border-gray-400 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <div className="grid grid-cols-1 gap-1">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className={`p-3 rounded-br-lg  flex flex-col items-start ${
                  index === benefitsData.length - 1
                    ? "bg-[rgb(17,24,38)] text-white"
                    : "text-black"
                }`}
              >
                <div className="text-sm font-inter  mb-4">
                  {benefit.title}
                </div>
                <div className="text-xs font-interregular ">
                  {benefit.description}
                </div>
              </div>
            ))}
            <div className="absolute bottom-[-250px] left-[-100px]">
              <div className="flex relative shrink-0 rounded-full border-green-600 border-solid border-[25px] h-[260px] w-[260px]" />
            </div>
          </div>
        </div>
      </div>
</div>
 </>
);
}
