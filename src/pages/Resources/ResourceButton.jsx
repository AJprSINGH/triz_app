import React from "react";

function ResourceButton({ text }) {
  return (
    <button className="gap-2.5 self-stretch px-5 py-3.5 whitespace-nowrap bg-sky-500 rounded-3xl min-h-[50px]">
      {text}
    </button>
  );
}

export default ResourceButton;