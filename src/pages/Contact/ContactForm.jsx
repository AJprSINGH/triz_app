import React from 'react';

function ContactForm() {
  return (
    <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
      <form className="flex flex-col items-start self-stretch my-auto text-xs font-bold text-slate-800 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-4xl tracking-tighter text-amber-500">Say Hi!</h2>
        <p className="mt-4 text-xl leading-none text-slate-500">We&apos;d like to talk with you.</p>
        
        <label htmlFor="fullName" className="mt-20 leading-none max-md:mt-10">My name is</label>
        <input
          id="fullName"
          type="text"
          className="overflow-hidden self-stretch px-8 mt-1.5 text-base leading-10 rounded-2xl shadow bg-slate-100 text-slate-500 max-md:px-5 max-md:max-w-full"
          placeholder="Full name"
        />
        
        <label htmlFor="email" className="mt-7 leading-none">My email is</label>
        <input
          id="email"
          type="email"
          className="overflow-hidden self-stretch px-8 mt-2.5 text-base leading-10 whitespace-nowrap rounded-2xl shadow bg-slate-100 text-slate-500 max-md:px-5 max-md:max-w-full"
          placeholder="Email"
        />
        
        <label htmlFor="message" className="mt-6 leading-none">Your message</label>
        <textarea
          id="message"
          className="overflow-hidden self-stretch px-9 pt-5 pb-20 mt-3.5 text-base leading-none rounded-2xl shadow bg-slate-100 text-slate-500 max-md:px-5 max-md:pb-28 max-md:max-w-full"
          placeholder="I want to say that..."
        ></textarea>
      </form>
    </div>
  );
}

export default ContactForm;