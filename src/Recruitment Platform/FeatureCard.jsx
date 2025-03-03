import * as React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex gap-4 items-start">
      <div className={`flex shrink-0 ${icon} rounded-full lg:h-[50px] sm:h-[30px] lg:w-[50px] sm:w-[30px]`} />
      <div className="flex flex-col grow shrink-0 mt-1 basis-0 w-fit">
        <div className="lg:text-xl sm:text-sm font-inter leading-tight text-zinc-900">
          {title}
        </div>
        <div className="mt-5 lg:text-base sm:text-xs font-interregular leading-7 opacity-70 text-neutral-600">
          {description}
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;