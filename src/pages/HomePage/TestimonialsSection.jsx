import * as React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Bhavini",
    school: "Vidhyadeep School",
    testimonial:
      "Scholar Clone has revolutionized our school's operations, making everything from student management to curriculum planning more efficient and effective.",
  },
  {
    name: "Bhavini",
    school: "Vidhyadeep School",
    testimonial:
      "Scholar Clone has revolutionized our school's operations, making everything from student management to curriculum planning more efficient and effective.",
  },
];

export default function TestimonialsSection() {
  return (
    <>
    <style>
        {`
          .scrollbar-hidden::-webkit-scrollbar {
              display: none;
          }
          .scrollbar-hidden {
              -ms-overflow-style: none; /* For Internet Explorer */
              scrollbar-width: none; /* For Firefox */
          }
        `}
      </style>
    <div className="w-full max-w-[1528px] mx-auto mb-4">
      {/* Title Section */}
      <div className="text-2xl font-bold text-center text-amber-500">
        Real Voices, Real Impact: Discover How Scholar Clone Transforms Education
      </div>
      <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a7d6674d3b690a4e24760590347fc1421984a28590c2d38c75c71b209a0a324?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3"
          alt="Scholar Clone transformation illustration"
          className="object-contain z-10 mt-0 ml-[1000px] max-w-full aspect-[2.33] w-[300px]"
        />
      {/* Main Content Section (Image and Testimonials) */}
      <div className="flex flex-row w-full max-h-[500px]">
        {/* Left Side Image */}
        <div className="flex-1 flex justify-center items-center max-h-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/43b878cf2cc62df145412da26a3cf76537f38f55b40b110292ffd49a3cb5668c?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3"
            alt="Scholar Clone platform showcase"
            className="object-contain w-full h-full max-w-[940px] rounded-2xl aspect-[1.08]"
          />
        </div>

        {/* Right Side Testimonials Section */}
        <div className="flex-1 flex flex-col pr-10 pt-2 overflow-hidden">
          <div className="flex flex-col max-h-full overflow-y-auto scrollbar-hidden"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className={index > 0 ? "mt-8" : ""}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
