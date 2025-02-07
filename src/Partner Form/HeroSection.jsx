import * as React from "react";
import Header from "../pages/Header/NavBar";
import Footer from "../pages/Footer/Footer";
import ContactPage from "./contact/ContactPage";
export default function HeroSection() {
    return (
<div className="">
    <main className='text-xl'>
    <Header />
    </main>
    {/* <div className="flex overflow-hidden relative flex-col items-end w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:max-w-full"style={{
        backgroundImage: 'url("Partners_Images/Frame 1618872157.png")',
        backgroundSize: '145%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '70vh',
      }}
      >
      <div className="flex overflow-hidden flex-col lg:pt-52 lg:pr-4 sm:pt-32 max-w-full h-full bg-opacity-10 text-border-white lg:w-[600px] sm:w-full max-md:px-5 max-md:pb-24">
      <img
          loading="lazy"
          src="Partners_Images/Partner With Us.png"
          alt="XYZ"
          className="w-[100%]"
        />
      </div>
    </div>
    <ContactPage /> */}
    <div className="flex overflow-hidden relative flex-col justify-center items-center  w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("Partners_Images/Frame 1618872203.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '70vh',
  }}
  >
    <h1 className="text-5xl font-inter text-center text-white lg:px-60 max-md:max-w-full max-md:text-4xl" style={{ lineHeight:1.2}}>
    Join Us & Grow Together<br/> Become a Scholar Clone Partner!
    </h1>
  </div>
  <div className="overflow-hidden">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-14 text-2xl text-slate-800 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col items-start self-end px-20 max-w-full w-[733px]">
              <div className="mt-5 text-3xl font-inter leading-6 w-[571px] max-md:max-w-full" style={{
                color:'rgba(7, 68, 132, 1)',
              }}>
               Become a Scholar Clone Partner
              </div>
              <div className="mt-10 text-xl text-justify font-inter leading-6 w-[571px] max-md:max-w-full">
              Empower Education, Expand Your Business
              </div>
              <div className="text-xl text-justify font-interregular leading-6 w-[571px] max-md:max-w-full">
Join hands with Scholar Clone, the leading AI-driven School Management & Career Counseling ERP. Whether you&apos;re an EdTech company, reseller, or consultant, we offer you the tools, technology, and support to succeed.
rusted by Schools & Institutions Worldwide AI-Powered Personalized Learning & Career GuidanceLucrative Revenue & Growth OpportunitiesDedicated Partner Support & Resources
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:-ml-20 lg:pr-34 w-[43%] max-md:ml-0 max-md:w-full">
          <div className=" builder-canvas flex relative flex-col pt-8 max-w-[707px] min-h-[390px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="/Partners_Images/image 95.png"
              className="object-cover absolute rounded-2xl left-[103px] top-[6px] w-[431px]"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="flex mt-20 overflow-hidden relative flex-col justify-center items-center w-full max-md:pl-5 max-md:max-w-full"style={{
    backgroundImage: 'url("Partners_Images/Benifits (1).png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '60vh',
  }}
  ></div>
  <ContactPage />
    <Footer/>
</div>
    );
    }