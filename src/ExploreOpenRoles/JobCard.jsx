import React, { useState } from "react";
import ApplyForm from "../ApplyNow/ApplyNow"; 
function JobCard({ title, location, experience, imageSrc,onApply }) {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
    <div className="flex overflow-hidden flex-col px-10 py-10 w-full  bg-white rounded-2xl max-md:px-5 max-md:mt-10" style={{
      boxShadow: '6px 6px 12px 2px rgba(16, 24, 40, 0.2)'
    }}>
      <img
        loading="lazy"
        src={imageSrc}
        alt=""
        className="object-contain self-center max-w-full aspect-square w-[80px]"
      />
      <h2 className="mt-12 text-lg font-inter text-cyan-900 max-md:mx-2.5 max-md:mt-10">
        {title}
      </h2>
      <p className="mt-8 text-black font-interregular">
        Location: {location} Experience: {experience}
      </p>
      <button 
          className="gap-2.5 self-center px-4 py-1 mt-8 font-interregular text-sm text-white bg-sky-500 rounded-2xl max-md:mt-8 hover:bg-sky-600 focus:ring-2 focus:ring-sky-400"
          onClick={onApply}
      >
        Apply Now
        </button>
    </div>
    </>
  );
}

export default JobCard;
