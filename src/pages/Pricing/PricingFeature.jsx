import * as React from "react";
import { useState } from "react";

const PricingFeature = ({ icon, text, description, featureTextColor ,descriptionTextColor}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex flex-col gap-2.5 mt-2.5 text-lg font-semibold font-poppins ${featureTextColor}`}>
      <div className="flex items-center gap-2">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 aspect-square w-[25px] cursor-pointer"
          onClick={toggleDescription}
        />
        <div className="basis-auto">{text}</div>
      </div>
      <div
        className={`${
          isOpen ? 'max-h-40' : 'max-h-0'
        } overflow-hidden transition-all duration-300 ease-in-out mt-2`} 
        style={{ marginTop: isOpen ? "10px" : "0" }} 
      >
        <p className={`text-sm ${descriptionTextColor}`}>{description}</p>
      </div>
    </div>
  );
};

export default PricingFeature;
