import React from "react";

function InputField({ label, name }) {
  return (
    <div className="mt-4 flex flex-col grow text-xl text-black max-md:mt-10 max-md:max-w-full">
      <label htmlFor={name} className="self-start max-md:ml-2.5">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        className="flex shrink-0 mt-4 bg-sky-100 rounded-lg h-[40px] max-md:max-w-full w-full"
        aria-label={label}
      />
    </div>
  );
}

export default InputField;
