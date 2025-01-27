import React from "react";

const ContactInfo = ({ icon, text }) => {
  return (
    <>
      <span className="font-osbold text-sm text-slate-900"style={{
      color: 'rgba(1, 19, 52, 1)',
    }}>{icon}</span>
      <p className="text-sm font-osregular text-slate-900 mt-1"style={{
      color: 'rgba(1, 19, 52, 1)',
    }}>{text}</p>
    </>
  );
};

export default ContactInfo;
