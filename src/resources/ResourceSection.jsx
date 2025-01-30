import * as React from "react";

export function ResourceSection({ title, items, additionalClasses = "" }) {
  return (
    <>
      <div className={`text-xl font-bold text-sky-500 ${additionalClasses}`} style={{
        color:'rgba(17, 134, 254, 1)',
      }}>
        {title}
      </div>
      {items.map((item, index) => (
        <a
          href={item.url}
          key={index}
          className={`${index === 0 ? "mt-5 text-[16px]" : "mt-2.5 text-[16px]"}`}
          tabIndex="0"
          role="button"
        >
          {item.title}
        </a>
      ))}
    </>
  );
}
