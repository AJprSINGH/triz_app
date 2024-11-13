import React from 'react';

function ContactInfo() {
  const contactDetails = [
    { label: 'Contact Number:', value: '98241-54142' },
    { label: 'Email Address:', value: 'kalpesh@triz.com' },
    { label: 'Address:', value: '203,sundar chambers, rander road, adajan, surat' }
  ];

  return (
    <section className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow pt-10 pr-10 pb-20 pl-10 w-full bg-amber-500 rounded-2xl max-md:px-5 max-md:py-10 max-md:mt-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col justify-center self-center px-8 py-5 ml-4 max-w-full bg-white rounded-2xl w-[200px] max-md:px-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/92b6e4a1e9ea1b0a257daefd7bb2538196c8aceff04dba9e0797026c8200e71d?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3" alt="Contact information icon" className="object-contain w-full aspect-square" />
        </div>
        <div className="flex flex-col mt-10 ml-10 max-w-full text-xl font-medium leading-none text-center text-white w-[300px] max-md:mt-5">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex gap-5 mt-6 first:mt-0">
              <div className="grow">{detail.label}</div>
              <div className="grow shrink basis-auto">{detail.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;