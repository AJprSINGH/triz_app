import React from "react";
import InputField from "./InputField";
import GenderSelection from "./GenderSelection";
import UploadButton from "./UploadButton";

function ApplyNow() {
  const inputFields = [
    { label: "Enter Your First name", name: "firstName" },
    { label: "Enter Your Middle name", name: "middleName" },
    { label: "Enter Your Last name", name: "lastName" },
    { label: "Enter Your E-mail Address", name: "email" },
    { label: "Enter Your Current Location", name: "location" },
    { label: "Enter Your Skills", name: "skills" },
    { label: "Enter Your Phone Number", name: "phoneNumber" },
    { label: "Select year Of Experience", name: "experience" },
  ];

  return (
    <div className="flex overflow-hidden flex-col px-20 pb-28 bg-white font-intersemibold rounded-xl shadow-[4px_4px_4px_rgba(0,0,0,0.25)] max-md:pb-24">
      <h1 className="self-center text-3xl font-inter text-sky-800 max-md:text-4xl">
        Apply Now
      </h1>
      <form className="flex flex-col px-10 mt-10 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-10 max-md:flex-col max-md:max-w-full">
          {inputFields.slice(0, 2).map((field) => (
            <InputField key={field.name} {...field} />
          ))}
        </div>
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              {inputFields.slice(2, 6).map((field) => (
                <InputField key={field.name} {...field} />
              ))}
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              {inputFields.slice(6).map((field) => (
                <InputField key={field.name} {...field} />
              ))}
              <GenderSelection />
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1578px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <InputField label="Add Cover Letter" name="coverLetter" />
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="max-md:max-w-full">
                <div className="flex ml-5 gap-5 max-md:flex-col">
                  <InputField label="Upload Portfolio" name="portfolio" />
                  <UploadButton />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button
          type="submit"
          className="overflow-hidden gap-2.5 self-center p-2.5 mt-24 ml-7 text-2xl font-medium text-white rounded-xl bg-slate-500 shadow-[0px_4px_8px_rgba(0,0,0,0.25)] max-md:mt-10"
        >
          Know More
        </button> */}
      </form>
    </div>
  );
}

export default ApplyNow;
