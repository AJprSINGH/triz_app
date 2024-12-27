import React from 'react';

function ContactForm() {
  return (
    <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
      <form className="flex flex-col items-start self-stretch my-auto text-xs text-slate-800 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-4xl tracking-tighter font-osbold text-amber-500">Say Hi!</h2>
        <p className="mt-4 text-xl leading-none font-osregular text-slate-500">We&apos;d like to talk with you.</p>
        
        <label htmlFor="fullName" className="mt-20 font-osbold text-sm leading-none max-md:mt-10">My name is</label>
        <input
          id="fullName"
          type="text"
          className="overflow-hidden self-stretch px-8 mt-1.5 text-base font-osregular text-xs leading-10 rounded-2xl text-slate-500 max-md:px-5 max-md:max-w-full"
          placeholder="Full name"
          style={{
            background: 'rgba(245, 245, 250, 1)',
            boxShadow: 'inset 0 4px 6px rgba(170, 170, 204, 0.5), inset 0 -4px 6px rgba(255, 255, 255, 1), inset 4px 0 6px rgba(170, 170, 204, 0.5), inset -4px 0 6px rgba(255, 255, 255, 0.5)',
          }}
        />
        
        <label htmlFor="email" className="mt-7 leading-none font-osbold text-sm">My email is</label>
        <input
          id="email"
          type="email"
          className="overflow-hidden self-stretch px-8 mt-2.5 text-base font-osregular text-xs leading-10 whitespace-nowrap rounded-2xl text-slate-500 max-md:px-5 max-md:max-w-full"
          placeholder="Email"
          style={{
            background: 'rgba(245, 245, 250, 1)',
            boxShadow: 'inset 0 4px 6px rgba(170, 170, 204, 0.5), inset 0 -4px 6px rgba(255, 255, 255, 1), inset 4px 0 6px rgba(170, 170, 204, 0.5), inset -4px 0 6px rgba(255, 255, 255, 0.5)',
          }}
        />
        
        <label htmlFor="message" className="mt-6 leading-none font-osbold text-sm">Your message</label>
        <textarea
          id="message"
          className="overflow-hidden self-stretch px-9 pt-5 pb-20 mt-3.5 text-base font-osregular text-xs leading-none rounded-2xl  text-slate-500 max-md:px-5 max-md:pb-28 max-md:max-w-full"
          placeholder="I want to say that..."
          style={{
            background: 'rgba(245, 245, 250, 1)',
            boxShadow: 'inset 0 4px 6px rgba(170, 170, 204, 0.5), inset 0 -4px 6px rgba(255, 255, 255, 1), inset 4px 0 6px rgba(170, 170, 204, 0.5), inset -4px 0 6px rgba(255, 255, 255, 0.5)',
          }}
        ></textarea>
      </form>
    </div>
  );
}

export default ContactForm;