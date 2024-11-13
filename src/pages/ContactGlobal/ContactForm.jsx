import React from 'react';
import ContactInfo from './ContactInfo';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import Header from '../Header/NavBar';
import Footer from '../Footer/Footer';
import Head from 'next/head';
function ContactForm() {
  return (
    <>
    <main className="font-bold text-xl">
      <Header />
    </main>
    <div className="flex flex-col rounded-none">
      <header className="flex overflow-hidden flex-col w-full bg-sky-950 bg-opacity-60 max-md:max-w-full">
        <div className="flex relative flex-col items-end px-10 ml-px w-full max-w-[1500px] h-[10px] pt-[390px] max-md:pt-24 max-md:pl-5 max-md:max-w-full">
          <img loading="lazy" src="/contactGlobal_images/image.png" alt="" className="object-cover absolute inset-0 h-10px" />
        </div>
      </header>
      <main className="overflow-hidden self-center pl-6 mt-10 max-w-full bg-white rounded-3xl border-blue-500 border-solid shadow-sm border-[5px] w-[950px] max-md:pl-5 max-md:mt-8">
        <div className="flex gap-5 max-md:flex-col">
          <section className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
            <form className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              <FormInput label="Name" />
              <FormInput label="Email" />
              <FormInput label="Contact Number" />
              <FormTextArea label="Write Your Message" />
              <button type="submit" className="self-center px-5 py-2 mt-10 text-xl font-bold text-white bg-sky-500 hover:bg-lime-600 hover:scale-95 rounded-3xl max-md:mt-10">
                Contact Us
              </button>
            </form>
          </section>
          <ContactInfo />
        </div>
      </main>
      <br></br>
      <br></br>
      <footer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.123456789123!2d72.1234567!3d21.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0512345678901%3A0x1234567890abcdef!2sTriz%20Innovation%20Pvt%20Ltd%2C%20Surat!5e0!3m2!1sen!2sin!4v1612345678901!5m2!1sen!2sin"
          //   src="https://www.google.com/maps/embed/v1/place?q=Triz%20Innovation%20Pvt%20Ltd%2C%20Surat&key=YOUR_API_KEY"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Triz Innovation Location"
        ></iframe>
      </footer>
      <br></br>
    </div>
    <Footer/>
    </>
  );
}

export default ContactForm;