import React from "react";
import { BlogCard } from "./BlogCard";
import Header from "../pages/Header_C/NavBar";
import { SearchBar } from "./SearchBar";
import Footer from "../pages/Footer_C/Footer";

const blogData = [
  {
    category: "Content Partner",
    title: "Top-notch Content Providers",
    description: "Collaborating with the best to deliver quality educational resources for your needs.",
    imageSrc: "/Partners_Images/content-partners-guide-feature-image.jpg", 
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d69f07ce58248e9832734d04d647a7484264b318a6af5a3b919ef1588adcfdff?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
  },
  {
    category: "Solution Partner",
    title: "Innovative Solution Providers",
    description: "Delivering cutting-edge solutions for complex problems in education and beyond.",
    imageSrc: "/Partners_Images/Solution-partner.jpg", 
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d69f07ce58248e9832734d04d647a7484264b318a6af5a3b919ef1588adcfdff?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
  },
  {
    category: "Technology Partner",
    title: "Tech Advancements Leaders",
    description: "Empowering your journey with the latest technologies to ensure growth.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/516bb04816bad15fe89bd101bc071379d5a3e0ebf25247773b691989e71d3b9b?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323", // Original imageSrc
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d69f07ce58248e9832734d04d647a7484264b318a6af5a3b919ef1588adcfdff?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
  },
  {
    category: "Career Counsellor",
    title: "Expert Career Guidance",
    description: "Helping individuals navigate and achieve their dream career paths.",
    imageSrc: "/Partners_Images/Career-Counselling-for-Working-Professionals-in-India.jpg", 
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d69f07ce58248e9832734d04d647a7484264b318a6af5a3b919ef1588adcfdff?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
  },
  {
    category: "Psychologist",
    title: "Mental Health Experts",
    description: "Providing essential mental health support for a balanced and healthy mind.",
    imageSrc: "/Partners_Images/One.jpg", 
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d69f07ce58248e9832734d04d647a7484264b318a6af5a3b919ef1588adcfdff?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
  },
  {
    category: "HR Manager",
    title: "Human Resource Experts",
    description: "Enhancing workforce efficiency with skilled HR management practices.",
    imageSrc: "/Partners_Images/hr.jpg", 
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d69f07ce58248e9832734d04d647a7484264b318a6af5a3b919ef1588adcfdff?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
  },
  {
    "category": "Implementation Partner",
    "title": "Seamless Support",
    "description": "Ensuring smooth deployment and integration of educational technologies for institutions.",
    "imageSrc": "/Partners_Images/IP.jpg", 
    "iconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/d69f07ce58248e9832734d04d647a7484264b318a6af5a3b919ef1588adcfdff?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
},

  {
    "category": "Training Partner",
    "title": "Expert-Led Training Solutions",
    "description": "Providing professional development and skill-based training to educators and institutions.",
    "imageSrc": "/Partners_Images/TP.jpg", 
    "iconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/d69f07ce58248e9832734d04d647a7484264b318a6af5a3b919ef1588adcfdff?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
}
];

export default function BlogsPage() {
  
  return (
    <>
    <main className='text-xl'>
    <Header />
    </main>
    <div className="flex overflow-hidden relative flex-col justify-center items-center items-end w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:max-w-full"style={{
        backgroundImage: 'url("Partners_Images/Section.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
      }}
      >
      <div className="flex overflow-hidden flex-col pt-28 max-w-full h-full bg-white text-white bg-opacity-0 w-[600px] max-md:px-5 max-md:pb-24">
        <h1 className="text-3xl font-intersemibold text-center max-md:max-w-full max-md:text-4xl">
        Partner with Scholar Clone to Shape the Future of Education
        </h1>
        <h4 className="text-sm mt-4 font-interregular text-center max-md:max-w-full max-md:text-4xl">
        Join hands with us to revolutionize learning for K-12, higher education, and corporate training. 
        Together, we can empower institutions, educators, and learners to achieve more.
        </h4>
        <button 
      className="self-center px-5 py-2 mt-12 mb-0 text-lg font-inter bg-sky-500 rounded-3xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5 hover:bg-sky-600 hover:scale-105 hover:shadow-lg transition-all duration-300"
      onClick={() => (window.location.href = "/partner_form")}
      tabIndex={0}
      aria-label="Book Your Demo Now"
    >
      Become a Partner
    </button>
      </div>
      <div className="flex gap-5 lg:justify-between sm:justify-center lg:items-start sm:items-center self-end w-full max-w-full max-md:mt-10 max-md:max-w-full">
        <SearchBar />
      </div>
    </div>
    <div className="flex flex-col items-center">
      <div className="flex lg:flex-wrap gap-5 mt-9 justify-between lg:px-20 sm:px-10 w-full max-w-screen-2xl max-md:max-w-full">
      <div className="sm:flex lg:grid lg:grid-cols-4 sm:flex-col gap-8 w-full">
        {blogData.map((blog, index) => (
          <div key={index} className="lg:flex-grow sm:flex flex-1 h-full transition-all duration-300 transform hover:scale-105 hover:shadow-5xl">
            <BlogCard
              key={index}
              category={blog.category}
              title={blog.title}
              description={blog.description}
              imageSrc={blog.imageSrc}
              iconSrc={blog.iconSrc}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
    <div className="flex justify-center mt-20 mb-10 items-start text-base font-medium text-violet-700">
      <div className="flex items-start rounded-lg">
        <button 
          className="flex overflow-hidden gap-2 justify-center items-center px-5 py-3 bg-purple-50 rounded-lg border border-purple-50 border-solid shadow-sm transition-all duration-300 transform hover:scale-105 hover:font-bold"
          tabIndex="0"
          aria-label="Load more content"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ea4a6e791793dd3fabf3a998902d46c0c190112985b1a2fe79e24585ef5a9a6?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            alt=""
          />
          <span className="self-stretch my-auto">Load more</span>
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
}
