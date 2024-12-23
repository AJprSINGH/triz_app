import * as React from "react";
import PricingFeature from "./PricingFeature";

const PricingPlan = ({ price, title, description, features, buttonColor = "bg-emerald-500", textColor = "text-slate-700",featureTextColor = "text-slate-700" }) => (
    <div className="flex flex-col items-start w-full max-md:mt-10">
      <div className="flex gap-3 whitespace-nowrap">
        <div className={`text-4xl font-bold font-poppins leading-none ${textColor}`}>
          {price}
        </div>
        <div className={`my-auto text-lg font-medium font-poppins ${textColor}`}>
          /User
        </div>
      </div>
      {/* Apply textColor to the title */}
      <div className={`mt-4 text-3xl font-medium font-poppins ${textColor}`}>{title}</div>
      {/* Apply textColor to the description */}
      <div className={`mt-1.5 text-lg font-semibold font-poppins ${textColor}`}>
        {description}
      </div>
      {features.map((feature, index) => (
        <PricingFeature
          key={index}
          icon={feature.icon}
          text={feature.text}
          featureTextColor={featureTextColor}
        />
      ))}
    </div>
  );
export default PricingPlan;