import React, { useState } from "react";
import JobCard from "./JobCard";
import ApplyForm from "../ApplyNow/ApplyNow"; 
const jobData = [
  {
    title: "Full Stack Developers",
    location: "Onsite / Remote",
    experience: "2-6 years",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8d7356217079fb12b3b2fa0739c632856a42baf9c74ae1e5496f7f7967d8bb4a?placeholderIfAbsent=true&apiKey=694f6dd4c87e42e6b8a3be241cc17c5a",
  },
  {
    title: "UI/UX Designer",
    location: "Remote / Onsite",
    experience: "1-4 years",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8d7356217079fb12b3b2fa0739c632856a42baf9c74ae1e5496f7f7967d8bb4a?placeholderIfAbsent=true&apiKey=694f6dd4c87e42e6b8a3be241cc17c5a",
  },
  {
    title: "Product Manager",
    location: "Remote / Hybrid",
    experience: "3-7 years",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8d7356217079fb12b3b2fa0739c632856a42baf9c74ae1e5496f7f7967d8bb4a?placeholderIfAbsent=true&apiKey=694f6dd4c87e42e6b8a3be241cc17c5a",
  },
];

function ExploreOpenRoles() {
  const [selectedJob, setSelectedJob] = useState(null);

  // Function to handle Apply button click
  const handleApplyClick = (job) => {
    setSelectedJob(job); // Set the selected job
  };
  return (
    <>
    <div className="flex flex-col rounded-2xl mt-20 mb-20">
      <h1 className="self-center text-3xl font-inter text-center text-sky-800 max-md:max-w-full max-md:text-4xl">
        Explore Open Roles
      </h1>
      <div className="mt-20 w-full ">
        <div className="flex mx-40 gap-20 max-md:flex-col">
          {jobData.map((job, index) => (
            <div
              key={index}
              className="flex flex-col w-full max-md:ml-0 max-md:w-full"
            >
              <JobCard {...job} onApply={() => handleApplyClick(job)} />
            </div>
          ))}
        </div>
      </div>
    </div>
    {selectedJob && (
          <div className="mt-10">
            <ApplyForm job={selectedJob} onClose={() => setSelectedJob(null)} />
          </div>
        )}
    </>
  );
}

export default ExploreOpenRoles;
