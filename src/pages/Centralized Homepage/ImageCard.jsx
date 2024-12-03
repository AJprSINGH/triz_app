import * as React from "react";

export const ImageCard = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain shrink-0 max-w-full rounded-full shadow-sm aspect-square w-[120px] max-md:mt-8"
  />
);