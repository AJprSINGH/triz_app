import React from 'react';

const socialIcons = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b84f15a74953ba91a4211f79738f2c438f2b68487d8f252e3286c93acd878b4?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", alt: "Facebook" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/148be12708369af569ebf328a54b34f1f5296e81591ff9c999db7d49abde4edd?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", alt: "Twitter" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0a2fb90b1dbe42e4a29acfad15a901056d4026e3010b5a0305aa2b39d832a24?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", alt: "Instagram" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5441d247b97919dca496494b622b55c0957994ad79f4dba06713d0b8a0c5834f?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", alt: "LinkedIn" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9b6da756bc24fc87a08ecbe4ff70d2f2079826cacfe120a47199e2aac67037f?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3", alt: "YouTube" }
];

function SocialIcons() {
  return (
    <div className="flex lg:gap-8 max-md:max-w-full sm:gap-4 sm:justify-center">
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
  //   <div className="flex gap-6 sm:gap-4 sm:justify-center">
  //   {socialIcons.map((icon, index) => (
  //     <img
  //       key={index}
  //       loading="lazy"
  //       src={icon.src}
  //       alt={icon.alt}
  //       className="w-8 h-8 sm:w-6 sm:h-6"
  //     />
  //   ))}
  // </div>
  );
}

export default SocialIcons;