import React from "react";

export function BlogCard({ 
  category,
  title,
  description,
  imageSrc,
  iconSrc, }) {
  return (
    <div className="flex flex-col justify-between p-3 bg-white rounded-xl shadow-sm min-w-[200px] w-[280px] h-full"style={{
      boxShadow: '0px 15px 12px 2px rgba(16, 24, 40, 0.2)'
    }}>
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${title} illustration`}
        className="object-contain w-full rounded-lg aspect-[1.4]"
      />
      <div className="flex flex-col flex-1 justify-between mt-8 w-full">
        <div className="flex flex-col w-full">
          <div className="text-sm font-intersemibold leading-none text-violet-700">
            {category}
          </div>
          <div className="flex flex-col mt-3 w-full">
            <div className="flex gap-4 items-start w-full">
              <div className="flex-1 shrink text-xl font-intersemibold leading-none text-gray-900 basis-0">
                {title}
              </div>
              <div className="flex flex-col pt-1 w-6">
                <img
                  loading="lazy"
                  src={iconSrc}
                  alt=""
                  className="object-contain w-6 aspect-square"
                />
              </div>
            </div>
            <div className="mt-3 text-sm font-intersemibold leading-6 text-gray-500">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
