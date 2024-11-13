import React from 'react';

function FormInput({ label }) {
  return (
    <div className="flex flex-wrap gap-5 justify-between mt-5 first:mt-0 text-xl font-medium text-left text-black whitespace-nowrap max-md:max-w-full">
      <label htmlFor={label.toLowerCase()} className="my-auto">
        {label}
      </label>
      <input type={label.toLowerCase() === 'email' ? 'email' : 'text'} id={label.toLowerCase()} name={label.toLowerCase()} className="flex shrink-0 max-w-full rounded-2xl bg-blue-100 bg-opacity-80 h-[40px] w-[300px]"
        aria-label={label}
      />
    </div>
  );
}

export default FormInput;
