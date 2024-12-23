import * as React from "react";

const PricingFeature = ({ icon, text, featureTextColor }) => (
  <div className={`flex gap-5 mt-2.5 text-lg font-semibold font-poppins ${featureTextColor}`}>
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="object-contain shrink-0 aspect-square w-[25px]"
    />
    <div className="basis-auto">{text}</div>
  </div>
);

export default PricingFeature;