import React from "react";
import ResourceButton from "./ResourceButton";
import Contact from "../Contact/ContactCard";
import Scroll from "../ScrollToTop/Scroll";
import Header from "../Header/NavBar";
import Footer from "../Footer/Footer";
const resourceTypes = [
  "Blogs/Vlogs",
  "Webinar",
  "Playback",
  "E-book",
  "Client Testimonial",
  "News Letter",
  "Edu News",
  "Future"
];

function ResourcePage() {
  return (
    <main className="flex flex-col text-xl font-bold rounded-none">
     <Header />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5dc64c4f987e181bb00649e7979a67f12917a4040747c7021b68464f6a96168?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3"
        alt="Resource page header"
        className="object-contain w-full aspect-[2.6] max-md:max-w-full"
      />
      <section className="flex z-6 flex-col self-center mt-12  w-full max-w-full max-md:mt-4 max-md:max-w-full">
        <div className="flex flex-wrap gap-3 justify-center items-center w-full text-lg text-white max-md:gap-2 max-md:max-w-full">
          {resourceTypes.map((type, index) => (
            <ResourceButton key={index} text={type} className="px-3 py-2 bg-blue-600 rounded-md text-sm max-md:text-xs" />
          ))}
        </div>
        <div className="flex overflow-hidden flex-col px-12 py-4 mt-24 ml-40 max-w-full text-black whitespace-nowrap rounded-2xl border-sky-500 border-solid border-[5px] w-[310px] max-md:px-5 max-md:mt-10">
                <img loading="lazy" src="/resources/Group 125.png" alt="Group 125" className="w-full h-auto object-contain" />
        </div>
        {/* Contact Us Section */}
        <div className="contact-us w-full mt-16">
          <h1 className="text-4xl font-bold text-center text-sky-500 mb-12">
            Contact Us
          </h1>
          <Contact />
        </div>
      </section>
      <Scroll />
      <Footer />
    </main>
  );
}

export default ResourcePage;
