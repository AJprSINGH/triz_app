import React, { useState } from 'react';
import Image from 'next/image';
import studentImage from '../../../public/AIservice_images/Group 60.png';
import featureImage1 from '../../../public/AIservice_images/feature1.png';
import featureImage2 from '../../../public/AIservice_images/feature2.png';
import featureImage3 from '../../../public/AIservice_images/feature3.png';
import Contact from '../Contact/ContactCard';
import Scroll from '../ScrollToTop/scroll';
import Header from "../Header/NavBar";
import Footer from "../Footer/Footer";

const features = [
  {
    title: 'Transforming Education with Smart Insights',
    image: featureImage1,
    description: 'Streamline your school management process with our efficient tools designed to simplify attendance, timetabling, and much more.',
  },
  {
    title: 'Optimizing Educational Processes for Impact ',
    image: featureImage2,
    description: 'Gain full control over finances, including fees, payroll, and budgeting, with clear and intuitive tools.',
  },
  {
    title: 'Boosting Engagement and Connectivity in Learning',
    image: featureImage3,
    description: 'Provide personalized learning experiences to your students with powerful LMS and content management tools.',
  },
];

const EducationAiComponent = () => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0);

  const handleFeatureClick = (index) => {
    setSelectedFeatureIndex(index);
  };

  return (
    <section className="erp-service text-xl font-bold bg-white overflow-hidden">
      <Header />
      <div className="flex flex-wrap items-center">
        <div className="hero-content flex flex-col lg:flex-row items-center lg:justify-between w-full">
          <div className="text-content w-full lg:w-6/12 mb-8 lg:mb-0 lg:ml-8"> {/* Add left margin here */}
            <h1 className="text-5xl font-bold mb-5">
              <span className="text-blue-600">AI-Driven Learning,</span> <br />
              <span className="text-orange-500">Smarter Education</span>
            </h1>
            <p className="text-gray-700 mb-6 text-xl">
            Our digital ecosystem for quality education streamlines school operations, covering attendance, exams, fees, and inventory. It enhances communication with parent-teacher tools and supports digital classrooms, library, and transport management. Designed to simplify tasks, it empowers schools to focus on student success.
            </p>
            <div className="mt-5 max-w-full w-[500px]">
                  <div className="flex gap-4 max-md:flex-col">
                    <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-3 items-start mt-1 max-md:mt-6">
                        <div className="flex shrink-0 mt-0 self-start bg-white rounded-full border-green-600 border-solid border-[3px] h-[100px] w-[100px]" aria-hidden="true" />
                        <div className="flex shrink-0 mt-20 bg-white rounded-full border-green-600 border-solid border-[3px] h-[80px] w-[80px]" aria-hidden="true" />
                        <div className="flex shrink-0 self-end mt-32 bg-white rounded-full border-green-600 border-solid border-[3px] h-[60px] w-[60px] max-md:mt-6" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="flex flex-col ml-4 w-[34%] max-md:ml-0 max-md:w-full">
                    <button className="overflow-hidden px-4 py-3 w-full text-xl font-medium text-white bg-lime-500 rounded-xl shadow-[0px_4px_8px_rgba(0,0,0,0.25)] transition-transform transform hover:bg-lime-600 hover:scale-95 max-md:mt-6">
                        Know More
                      </button>
                    </div>
                  </div>
                </div>
          </div>
          <div className="image-content w-full lg:w-6/12 mt-8 lg:mt-0 lg:ml-auto lg:pr-0">
            <Image src={studentImage} alt="Student" width={500} height={500} className="object-contain w-full" />
          </div>
        </div>

        {/* Key Features Section */}
        <div className="key-features w-full mt-16">
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">Key Features</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => handleFeatureClick(index)}
                className={`feature-card w-80 h-60 border-2 rounded-lg p-4 flex flex-col items-center cursor-pointer transition ${
                  index === selectedFeatureIndex ? 'border-green-500' : 'border-blue-500'
                }`}
              >
                <h3 className="text-xl font-semibold text-center mb-4">{feature.title}</h3>
                <Image src={feature.image} alt={`Feature ${index + 1}`} width={150} height={100} className="object-cover w-full h-32" />
                {index === selectedFeatureIndex && <hr className="w-full border-green-500 my-2" />}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Feature Description Section */}
        <div className="feature-description w-full mt-16 px-8">
          <h3 className="text-3xl font-bold text-blue-600 mb-6">{features[selectedFeatureIndex].title}</h3>
          <p className="text-gray-700 text-lg">{features[selectedFeatureIndex].description}</p>
        </div>

        {/* Contact Us Section */}
        <div className="contact-us w-full mt-16">
        <h1 className="text-4xl font-bold text-center text-sky-500 mb-12">
        Contact Us
      </h1> 
        
          
            <Contact />
        </div>
      </div>
      <Scroll />
      <Footer />
    </section>
  );
};

export default EducationAiComponent;
