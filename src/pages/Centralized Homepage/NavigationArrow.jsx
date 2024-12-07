import * as React from "react";

function NavigationArrow({ direction, src }) {
  return (
    <button
      aria-label={`Navigate ${direction}`}
      className="focus:outline-none focus:ring-2 focus:ring-slate-700 rounded-full"
      tabIndex={0}
    >
      <img
        loading="lazy"
        src={src}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-square w-[100px]"
      />
    </button>
  );
}

export default NavigationArrow;