import React from "react";

function PerksSection() {
  return (
    <div className="flex flex-col w-full -ml-60 max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col my-auto px-10 py-10 w-full bg-white rounded-2xl shadow-sm max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
        <h2 className="self-start text-2xl font-inter text-sky-800 max-md:max-w-full max-md:text-4xl">
          Employee Benefits & Perks
        </h2>
        <ul className="mt-12 text-lg font-interregular text-black max-md:mt-10 max-md:max-w-full">
          <li>✅ Competitive Salary & Performance-Based Growth</li>
          <li>✅ Flexible Work Arrangements (Hybrid & Remote Work Options)</li>
          <li>
            ✅ Medical & Wellness Benefits (Health insurance, mental well-being)
          </li>
          <li>
            ✅ Learning & Upskilling Programs (Certifications, AI training,
            workshops)
          </li>
          <li>✅ Hackathons, Innovation Challenges & Tech Events</li>
          <li>✅ Annual Team Retreats, Offsite Events & Celebrations</li>
        </ul>
      </div>
    </div>
  );
}

export default PerksSection;
