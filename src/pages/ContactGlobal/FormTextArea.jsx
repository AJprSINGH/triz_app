import React from 'react';
import PropTypes from 'prop-types';

function FormTextArea({ label }) {
  // Ensure `label` is a string and handle it safely
  const normalizedLabel = label ? label.toLowerCase().replace(/\s+/g, '-') : ''; // Replace spaces with dashes for id consistency

  return (
    <div className="mt-8 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
          <label htmlFor={normalizedLabel} className="mt-6 ml-0 text-xl font-medium text-center text-black max-md:mt-10">
            {label}
          </label>
        </div>
        <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
          <textarea 
            id={normalizedLabel} 
            name={normalizedLabel} 
            className="flex overflow-hidden flex-col grow pt-16 w-full rounded-2xl bg-blue-100 bg-opacity-80 max-md:pt-10 max-md:mt-5 max-md:max-w-full"
            aria-label={label}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

// Prop validation
FormTextArea.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormTextArea;
