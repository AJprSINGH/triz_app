import React from "react";
import FormInput from "./FormInput";

const ContactForm = () => {
  const formFields = [
    { placeholder: "Enter Your Name", id: "name" },
    { placeholder: "Email Address", id: "email" },
    { placeholder: "Contact Number", id: "phone" },
    { placeholder: "Type of Partnership", id: "partnership" },
  ];

  return (
    <form className="flex overflow-hidden flex-col  items-start px-20 pt-32 pb-80 w-full text-lg font-medium bg-white shadow-[0px_2px_15px_rgba(0,0,0,0.3)] text-zinc-600 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1000px]">
        <div className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
          {formFields.slice(0, 2).map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="sr-only">
                {field.placeholder}
              </label>
              <FormInput placeholder={field.placeholder} />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-5 justify-between mt-12 max-md:mt-10 max-md:max-w-full">
          {formFields.slice(2, 4).map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="sr-only">
                {field.placeholder}
              </label>
              <FormInput placeholder={field.placeholder} />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="gap-2.5 self-center px-5 py-2 mt-20 text-lg font-bold text-white bg-sky-500 rounded-3xl max-md:mt-10"
        >
          Contact Us
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
