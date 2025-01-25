import React from "react";

const FormInput = ({ placeholder }) => {
  return (
    <div className="flex items-center px-5 h-12 rounded-2xl border border-solid border-zinc-500 w-full max-md:px-5 max-md:max-w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full  outline-none text-zinc-900 text-lg font-medium"
      />
    </div>
  );
};

export default FormInput;
