import React from "react";

function UploadButton() {
  return (
    <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col pb-0 mt-[60px] w-full text-lg font-inter text-white whitespace-nowrap max-md:mt-10">
        <button
          type="button"
          className=" self-stretch px-1 py-1 bg-sky-500 rounded-lg min-h-[30px]"
        >
          Upload
        </button>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c3d6ca723086356037dbcc4eaeddf13f74d001559551599bf0cc6a922c7109b?placeholderIfAbsent=true&apiKey=694f6dd4c87e42e6b8a3be241cc17c5a"
          alt=""
          className="object-contain z-10 mt-0 ml-2.5 aspect-[0.95] w-[19px]"
        />
      </div>
    </div>
  );
}

export default UploadButton;
