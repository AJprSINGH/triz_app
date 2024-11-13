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
                <h1 className="mr-10 ml-5 text-5xl font-bold text-sky-500 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
                  Connect Your Systems, <br />
                  <span className="text-amber-500">Enhance Your School</span>
                </h1>
                <p className="mt-8 ml-5 text-xl text-black max-md:mt-6 max-md:max-w-full">
                  Simplify your school&apos;s operations by connecting essential systems for attendance, communication, and finance. Our integration solutions ensure smooth coordination across platforms, empowering your institution to run efficiently while focusing on growth and student success.
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
            </div>
            <div className="flex flex-col ml-20 w-full lg:w-6/12 max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b055c3407f2d2ed5163636ef8f044c536ef57b6a8f84bf456f4c9d960b6e49f?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3" alt="School integration illustration" className="object-contain w-full aspect-[1.29] max-md:mt-6 max-md:max-w-full" />
            </div>
          </div>
        </section>
        <section className="flex overflow-hidden flex-col justify-center items-center self-stretch px-10 py-6 mt-4 w-full rounded-2xl bg-slate-100 max-md:px-5 max-md:mt-6 max-md:max-w-full">
          <img loading="lazy" src="/integration_images/Frame 75.png" className="w-full h-auto object-cover" alt="Description of the image" />
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
        <Footer/>
      </main>
    </>
  );
}

export default IntegrationScholarClone;
