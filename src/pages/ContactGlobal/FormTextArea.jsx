import React from 'react';

function FormTextArea({ label }) {
  return (
    <div className="mt-8 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
          <label htmlFor="message" className="mt-6 ml-0 text-xl font-medium text-center text-black max-md:mt-10">
            {label}
          </label>
        </div>
        <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
          <textarea id="message" name="message" className="flex overflow-hidden flex-col grow pt-16 w-full rounded-2xl bg-blue-100 bg-opacity-80 max-md:pt-10 max-md:mt-5 max-md:max-w-full"
            aria-label={label}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default FormTextArea;