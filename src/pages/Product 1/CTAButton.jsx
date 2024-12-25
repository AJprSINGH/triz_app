import * as React from "react";

export function CTAButton({ text, className }) {
  return (
    <button 
      className={className}
      tabIndex={0}
      role="button"
      aria-label={text}
      style={{
        background: 'rgba(61, 96, 149, 1)'
      }}
    >
      {text}
    </button>
  );
}