import React from 'react';

const socialIcons = [
  { src: "/footer_c_images/Social Icons-3.png", alt: "Facebook" },
  { src: "/footer_c_images/Social Icons-2.png", alt: "Twitter" },
  { src: "/footer_c_images/Social Icons.png", alt: "Instagram" },
  { src: "/footer_c_images/Social Icons-1.png", alt: "LinkedIn" },
  { src: "/footer_c_images/Social Icons-4.png", alt: "YouTube" }
];

function SocialIcons() {
  return (
    <div className="flex flex-wrap flex-1 gap-10 max-md:max-w-full">
      {socialIcons.map((icon, index) => (
        <img
          key={index}
          loading="lazy"
          src={icon.src}
          alt={icon.alt}
          className="object-contain shrink-0 aspect-square w-[50px]"
        />
      ))}
    </div>
  );
}

export default SocialIcons;