import React from "react";

function BenefitsCard({ title, description }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col px-12 pt-8 pb-16 w-full text-center rounded-xl border border-solid bg-neutral-50 border-slate-500 border-opacity-30 shadow-[0px_0px_15px_rgba(120,120,171,0.15)] max-md:px-5 max-md:mt-10">
        <h3 className="self-center text-xl font-inter text-slate-500">
          {title}
        </h3>
        <p className="mt-11 text-lg font-interregular text-black max-md:mt-10">{description}</p>
      </div>
    </div>
  );
}

export default BenefitsCard;
