import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import "./style.css";
const ContactPage = () => {
  const contactDetails = [
    {
      icon: "1.  Creative Freedom",
      text: " – Develop and showcase your unique content while working at your own pace.",
    },
    {
      icon: "2. Integrated Learning Solutions",
      text: " – Contribute to a platform that supports NEP-aligned and competency-based learning practices.",
    },
    {
      icon: "3. AI-Driven Personalization",
      text: " – Enhance student engagement with adaptive, data-driven insights for better outcomes.",
    },
    {
      icon: "4. Scalable Opportunities",
      text: " – Earn income while growing your reputation as a leading content creator.",
    },
    {
      icon: "5. Collaborative Network",
      text: " – Partner with a team of like-minded professionals passionate about learning innovation.",
    },
    {
      icon: "6. Global Reach",
      text: " – Be a part of a platform with wide visibility, reaching educators, learners, and institutions worldwide.",
    },
    {
      icon: "7. Flexibility",
      text: " – Work online, offline, or a hybrid mode that suits your schedule.",
    },
  ];
  return (
    <div>
      <div className="flex max-md:flex-col">
        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col my-20 items-center max-md:mt-10">
            <div className="flex flex-col max-w-full text-slate-900 w-[360px]">
            <img
          loading="lazy"
          src="/Partners_Images/image 90.png"
          alt="Feature Icon"
          className="object-contain w-[60%] mx-auto"
        />
            </div>
            <div className="flex flex-col mt-8 mx-20 overflow-y-auto max-h-80 scrollbar-hide">
      <ol className="">
    {contactDetails.map((detail, index) => (
      <li key={index} className={index > 0 ? "mt-4" : ""}>
        <ContactInfo icon={detail.icon} text={detail.text} />
      </li>
    ))}
  </ol>
</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
