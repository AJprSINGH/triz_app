import React from 'react';
import Services from './Services';
import ScrollToTop from './ScrollToTop';
import Contact from '../Contact/ContactCard';
import IG from './IntegrationServices';
import Header from '../Header/NavBar';
import Footer from '../Footer/Footer';

function IntegrationScholarClone() {
  return (
    <>
      <main className="flex flex-col text-xl font-bold rounded-none">
      <Header />
        <section className="overflow-hidden self-stretch pt-10 pr-10 pb-6 pl-5 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex gap-4 max-md:flex-col">
            <div className="flex flex-col w-full lg:w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                <h1 className="mr-10 ml-5 text-4xl font-bold text-sky-500 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
                Holistic School Quality Assurance: <br />
                  <span className="text-amber-500">From Evaluation to Excellence</span>
                </h1>
                <p className="mt-8 ml-5 text-xl text-black max-md:mt-6 max-md:max-w-full">
                Our digital ecosystem for quality education streamlines school operations, covering attendance, exams, fees, and inventory. It enhances communication with parent-teacher tools and supports digital classrooms, library, and transport management. Designed to simplify tasks, it empowers schools to focus on student success.                </p>
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
            </div>
            <div className="flex flex-col ml-20 w-full lg:w-6/12 max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="/PI 3/image.png" />
            </div>
          </div>
        </section>
        <Services />
        <IG />
        {/* Contact Us Section */}
      <div className="contact-us w-full mt-16">
        <h1 className="text-4xl font-bold text-center text-sky-500 mb-12">
        Contact Us
      </h1> 
        
          
            <Contact />
        </div>
        <ScrollToTop />
        <Footer />
      </main>
    </>
  );
}

export default IntegrationScholarClone;
