import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

function ContactCard() {
  return (
    <section className="flex flex-col justify-center items-center rounded-none">
      <div className="py-px pl-10 w-[1000px] bg-white rounded-2xl shadow-[0px_-2px_4px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

export default ContactCard;