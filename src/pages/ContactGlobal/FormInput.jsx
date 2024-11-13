import React from 'react';
import PropTypes from 'prop-types';

function FormInput({ label }) {
  // Ensure `label` is a string before calling `.toLowerCase()`
  const normalizedLabel = label ? label.toLowerCase() : ''; // Fallback to empty string if `label` is undefined or invalid

  return (
    <div className="flex flex-wrap gap-5 justify-between mt-5 first:mt-0 text-xl font-medium text-left text-black whitespace-nowrap max-md:max-w-full">
      <label htmlFor={normalizedLabel} className="my-auto">
        {label}
      </label>
      <input
        type={normalizedLabel === 'email' ? 'email' : 'text'}
        id={normalizedLabel}
        name={normalizedLabel}
        className="flex shrink-0 max-w-full rounded-2xl bg-blue-100 bg-opacity-80 h-[40px] w-[300px]"
        aria-label={label}
      />
    </div>
  );
}

// Add PropTypes to validate props and catch issues earlier in development
FormInput.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormInput;
