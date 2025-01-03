import React from "react";

export default function NavigationButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`self-stretch px-3.5 py-2 transition-colors duration-200 ${
        isActive
          ? "bg-gray-200 text-slate-500 rounded-md"
          : "text-white hover:bg-gray-200/20"
      }`}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
}
