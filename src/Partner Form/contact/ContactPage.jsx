import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  const contactDetails = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0488d72a93c5807b84e356fd74de174cbe6d092c37317d612a9ee7aac3a5549d?placeholderIfAbsent=true&apiKey=694f6dd4c87e42e6b8a3be241cc17c5a",
      text: "23, Sundar-chambers, Rander Road, Adajan Patiya, Surat, Gujarat, India",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/731fee5cb355f79a27d57477ca3ed79d3913f8d1412f02b2122b941724c1dcd1?placeholderIfAbsent=true&apiKey=694f6dd4c87e42e6b8a3be241cc17c5a",
      text: "+91 9824154142",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/23c8367fca83c2d3315433c225672f588a4a77d526e8e9dc2aad8119510453c0?placeholderIfAbsent=true&apiKey=694f6dd4c87e42e6b8a3be241cc17c5a",
      text: "kalpesh@triz.co.in",
    },
  ];

  return (
    <div>
      <div className="flex max-md:flex-col">
        <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col my-40 items-center max-md:mt-10">
            <div className="flex flex-col max-w-full text-slate-900 w-[360px]">
              <div className="text-3xl font-osbold leading-none">
                Let's talk with us
              </div>
              <div className="mt-5 text-sm font-osregular leading-7">
                Looking to collaborate with us? Complete the form below to start
                your partnership journey!
              </div>
            </div>
            <div className="flex flex-col mt-8">
              {contactDetails.map((detail, index) => (
                <div key={index} className={index > 0 ? "mt-4" : ""}>
                  <ContactInfo icon={detail.icon} text={detail.text} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
