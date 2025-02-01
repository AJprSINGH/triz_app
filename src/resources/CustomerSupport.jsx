import * as React from "react";
import { useRouter } from "next/router";  
export default function CustomerSupport() {
  const router = useRouter(); 
  const handleClick = () => {
          router.push("/contactGlobal"); 
  };
  return (
    <div className="flex overflow-hidden flex-col w-[50%] px-8 pt-24 pb-52 bg-gray-200 rounded-xl shadow-[-4px_0px_15px_rgba(175,207,255,0.25)] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="self-center text-2xl font-semibold">Customer Support</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2ac133a455cba4f61a2f5b17c22ef3290f84654dba164b2040637f9c21148fc?placeholderIfAbsent=true&apiKey=694f6dd4c87e42e6b8a3be241cc17c5a"
        alt=""
        className="object-contain mx-0 mt-3 w-[100%] aspect-[220] max-md:mx-2.5"
      />
      <div className="mt-12 mx-10 text-center max-md:mt-10">
        Looking for additional assistance in an area not covered here? <br />
        <br />
        We&apos;d love to help!
      </div>
      <button
        className="gap-2.5 self-center px-5 py-1 mt-12 font-bold text-white bg-sky-500 rounded-3xl max-md:mt-10 transition-all duration-300 transform hover:scale-105"
        tabIndex="0"
        style={{
          background: 'rgba(17, 134, 254, 1)',
        }}
        onClick={handleClick}
      >
        Contact Us
      </button>
    </div>
  );
}
