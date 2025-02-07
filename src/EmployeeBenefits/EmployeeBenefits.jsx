import React from "react";
import BenefitsCard from "./BenefitsCard";
import PerksSection from "./PerksSection";

const benefitsData = [
  {
    title: "Career Growth & Development",
    description:
      "Gain hands-on experience with structured learning, mentorship, and leadership training in AI, EdTech, and SaaS.",
  },
  {
    title: "Work That Matters",
    description:
      "Create impactful AI-driven education solutions that empower students, educators, and institutions globally.",
  },
  {
    title: "Culture of Innovation",
    description:
      "Thrive in a collaborative, data-driven environment that values bold thinking and creative problem-solving.",
  },
];

function EmployeeBenefits() {
  return (
    <>
    <div className="overflow-hidden">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-28 text-2xl text-slate-800 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col items-start self-end px-20 max-w-full w-[733px]">
              <div className="mt-5 text-2xl font-inter leading-6 w-[571px] max-md:max-w-full" style={{
                color:'rgba(7, 68, 132, 1)',
              }}>
               Shape the Future of EdTech with Us
              </div>
              <div className="mt-5 text-lg text-justify font-interregular leading-6 w-[571px] max-md:max-w-full">
              At Scholar Clone, we are redefining education with cutting-edge technology, AI-driven learning, and school management solutions that empower students, educators, and institutions.
             <br/>If you&rsquo;re passionate about transforming education, solving real-world challenges, and growing your career in an innovation-driven culture, you’re in the right place.
             <br/>🚀 Join us and be part of something bigger!
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:-ml-20 lg:pr-34 w-[43%] max-md:ml-0 max-md:w-full">
          <div className=" builder-canvas flex relative flex-col pt-8 max-w-[707px] min-h-[390px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="/career_page_images/image 92.png"
              className="object-cover absolute rounded-2xl left-[103px] top-[6px] w-[431px]"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center rounded-none">
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 mt-20 mx-20 max-md:flex-col">
          <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/09cd08b3819e6790d8036c40bdf25e6b078d2f441d03e23995b3b2e63005ebc3?placeholderIfAbsent=true&apiKey=694f6dd4c87e42e6b8a3be241cc17c5a"
              alt="Employee benefits illustration"
              className="object-contain w-[80%]  rounded-2xl max-md:max-w-full"
            />
          </div>
          <PerksSection />
        </div>
      </div>
      <h2 className="mt-36 text-3xl font-inter text-center text-sky-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        What's in It for You?
      </h2>
      <div className="flex overflow-visible flex-col items-center self-stretch px-16 pb-44 mt-44 w-full bg-white shadow-[0px_-4px_15px_rgba(0,0,0,0.1)] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
        <div className="z-10 -mt-20 -mb-9 w-full max-w-[1350px] max-md:mb-2.5 max-md:max-w-full" style={{
        }}>
          <div className="flex gap-5 max-md:flex-col">
            {benefitsData.map((benefit, index) => (
              <BenefitsCard
                key={index}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default EmployeeBenefits;
