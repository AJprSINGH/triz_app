import React from "react";

const ContactInfo = ({ icon, text }) => {
  return (
    <div className="flex gap-2.5 items-start">
      <div className="flex gap-2.5 justify-center items-center pt-1 pr-1.5 w-[23px]">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain self-stretch my-auto aspect-[0.75] w-[18px]"
        />
      </div>
      <div className="text-lg font-osbold leading-7 text-slate-900 w-[332px]">
        {text}
      </div>
    </div>
  );
};

export default ContactInfo;
