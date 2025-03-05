import React, { useState,useEffect } from "react";
import  ResourceSection  from "./ResourceSection";
import  CustomerSupport  from "./CustomerSupport";

const byTypeData = [
  { title: "Blogs", url: "/GR" },
  { title: "Broachers", url: "/GR" },
  { title: "Case Studies", url: "/GR" },
  { title: "FAQ's", url: "/GR" },
  { title: "News Letters", url: "/GR" },
  { title: "News & Announcements", url: "/GR" },
];

const forTeachersData = [
  { title: "Lesson Plan Repository", url: "https://masterz.vercel.app/login" },
  { title: "Classroom Management Toolkit", url: "/classroom-management-toolkit" },
  { title: "Teachers AI", url: "https://masterz.vercel.app/login" },
];

const forStudentsData = [
  { title: "Study Material", url: "/study-material" },
  { title: "Mock Tests and Quiz Banks", url: "/mock-tests" },
  { title: "Knowledge Graph", url: "/knowledge-graph" },
];

const forAdminsData = [
  { title: "ERP Demonstrations", url: "/erp-demonstrations" },
  { title: "Staff Management", url: "/staff-management" },
];


export default function ResourceTypes() {
  // const [activeHeaderId, setActiveHeaderId] = useState(1);
  // const activeHeader = resourceData.find(
  //     (header) => header.id === activeHeaderId
  // );
  const [visible, setVisible] = useState(false);
      useEffect(() => {
        setVisible(true);
      }, []);
  return (
    <div className={`flex overflow-hidden w-[90%]  gap-16 font-inter pl-10 text-lg text-black bg-white rounded-xl shadow-sm max-md:pl-5 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`} style={{
      boxShadow: '0 0 25px 3px rgba(36, 174, 139, 0.45)',
    }}>
      <div className="flex flex-col items-start mt-10">
        <ResourceSection title="By Type" items={byTypeData} />
        <ResourceSection
          title="For Teachers"
          items={forTeachersData}
          additionalClasses="mt-16 max-md:mt-10"
        />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2832c3ebece2c7bfc59f663d2e2dc9d57573987cd3d9583115c860e157bc953c?placeholderIfAbsent=true&apiKey=694f6dd4c87e42e6b8a3be241cc17c5a"
        alt=""
        className="object-contain shrink-0 my-14 w-2px aspect-[250]"
      />
      <div className="flex flex-col items-start self-start mt-10 max-md:mt-10">
        <ResourceSection title="For Students" items={forStudentsData} />
        <div className="self-stretch mt-16 text-xl font-bold text-sky-500 max-md:mt-10 max-md:mr-2.5" style={{
          color:'rgba(17, 134, 254, 1)',
        }}>
          For Administrators & <br />
          School Principals
        </div>
        {forAdminsData.map((item, index) => (
          <a
          href={item.url} key={index} className={`${index === 0 ? "mt-5 text-[16px]" : "mt-2.5 text-[16px]"}`}>
            {item.title}
          </a>
        ))}
      </div>
      <CustomerSupport />
    </div>
  );
}
