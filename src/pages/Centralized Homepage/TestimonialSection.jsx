import * as React from "react";
import TestimonialCard from "./TestimonialCard";
import NavigationArrow from "./NavigationArrow";

const testimonialData = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/753c4f53ae51af5fa9a317d3add5bf52d13892f22c8001083ea9995856590cf6?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
    name: "Meghna Mehta",
    review: "Scholar Clone is a comprehensive solution transforming education management with seamless integration of ERP, LMS, and career counseling tools."
  },
//   {
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/753c4f53ae51af5fa9a317d3add5bf52d13892f22c8001083ea9995856590cf6?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3",
//     name: "Sargun Mehta",
//     review: "Scholar Clone is a comprehensive solution transforming education management with seamless integration of ERP, LMS, and career counseling tools."
//   }
];

function TestimonialSection() {
  return (
    <div className="flex flex-col items-center rounded-none mt-20">
      <h1 className="text-4xl font-bold text-slate-700 max-md:max-w-full max-md:text-2xl">
        Our Clients Reviews
      </h1>
      <div className="flex flex-wrap gap-10 items-center self-stretch px-10 mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <NavigationArrow 
          direction="left" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a292747c051d4854eec32c0a75dde744766c1f53acf3491f0f130609bdfb1560?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3" 
        />
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard 
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            review={testimonial.review}
          />
        ))}
        <NavigationArrow 
          direction="right" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e75f137b4fcdad276b0062bc6eed03ca72b6d41b89fe3161bf503638442405d?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3" 
        />
      </div>
      <h2 className="mt-20 text-4xl font-bold text-slate-700 max-md:mt-10 max-md:max-w-full max-md:text-3xl">
        Our Latest Blogs & Articles
      </h2>
    </div>
  );
}

export default TestimonialSection;