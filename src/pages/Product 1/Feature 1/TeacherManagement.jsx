import * as React from "react";
import Image from 'next/image'
// TeacherManagement component
export default function TeacherManagement() {
  const actionButtons = [
    "How It Works",
    "How It Benefits You",
    "Visualize Your Workflow"
  ];

  return (
    <div className="lg:flex sm:block gap-10 mx-10 mt-10 pl-[px] max-md:pl-5">
      <div className="flex flex-col w-[30%] gap-10 mr-60">
        <Image src="/erpservice_images/Group 157.png" alt="Student" width={500} height={500} className="object-contain w-full" />
      </div>
      <div className="flex z-10 flex-col w-[70%] items-start mr-0 font-medium max-md:max-w-full">
        <h1 className="text-2xl text-amber-500 max-md:max-w-full">
          User/Teacher Management System
        </h1>
        <p className="self-stretch mt-8 text-lg font-bold text-black text-justify max-md:max-w-full">
          User/Teacher Management System offers a complete solution to manage
          staff data, roles, and permissions with ease. This module allows
          administrators to track teacher performance, attendance, and
          assignments, ensuring seamless staff coordination. With powerful tools
          for communication and reporting, it simplifies daily management tasks,
          helping foster an organized and productive learning environment.
        </p>
        <div className="flex flex-wrap gap-4 justify-between mt-8 max-w-full text-sm text-white max-md:mt-10">
          {actionButtons.map((text, index) => (
            <ActionButton key={index}>{text}</ActionButton>
          ))}
        </div>
      </div>
    </div>
  );
}

// ActionButton component
function ActionButton({ children }) {
  return (
    <button 
      className="overflow-hidden gap-2.5 self-stretch p-2.5 rounded-xl bg-slate-500 shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-white"
      tabIndex={0}
    >
      {children}
    </button>
  );
}