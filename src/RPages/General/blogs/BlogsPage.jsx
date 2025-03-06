import React, { useState } from "react";
import { BlogCard } from "./BlogCard";

const blogData = [
  {
    image: "/blog_images/blog1.webp",
    title: "Lesson plan with computational thinking",
    author: {
      name: "Kalpesh Sheth",
      avatar: "/vercel.png",
    },
    date: "Jan 10, 2022",
    readTime: "3 min",
    description:
      `Computational thinking is “a way of solving problems, designing systems, and understanding human behavior by drawing on the concepts of computer science.” For the students it’s an approach to tackling challenging questions and ambiguous puzzles, integrate computational thinking into all of our classes with clear lesson planning.
      Students will understand and apply computational thinking concepts, including decomposition, pattern recognition, abstraction, and algorithmic thinking, to analyze and solve problems related to ecosystems across the curriculum.
      Algorithmic Thinking :
       Present a problem related to ecosystem management (e.g., controlling invasive species).
       In  groups, have students brainstorm and outline step-by-step procedures to address the problem.
       Encourage students to consider cause-and-effect relationships and potential outcomes of their algorithms.`,
    additionalImage: "/blog_images/add2.webp", // Example additional image URL
  },
  {
    image: "/blog_images/blog2.webp",
    title:
      "A Lesson Planning Process framework for creating effective and engaging learning environments.",
    author: {
      name: "Rajesh Rafaliya",
      avatar: "/vercel.png",
    },
    date: "Jan 10, 2022",
    readTime: "3 min",
    description:
      `“A Lesson Planning Process” framework for creating effective and engaging learning environments. It aligns with the SAMR (Substitution, Augmentation, Modification, Redefinition) model for integrating technology in education. The pyramid illustrates a progression from lower-order to higher-order thinking skills, emphasising the need for lessons that encourage Analysis, Synthesis, and Evaluation.
      The center highlights five key elements of an ideal Learning Environment: Engaging, Collaborative, Constructive, Authentic, and providing opportunities for students to connect their learning to the broader community. Various assessment strategies are suggested, such as hand signals, concept maps, portfolios, and reflective journaling.
      The thought bubbles from the teacher figures illustrate common goals and challenges in lesson planning, such as fostering active engagement, collaboration, higher-order thinking, and authentic learning experiences relevant to students’ lives. Overall, this framework provides a comprehensive guide for designing lessons that leverage technology effectively and create meaningful, student centered learning experiences.`,
  },
  {
    image: "/blog_images/blog3.webp",
    title:
      "The need of building Future-Ready Vocational Education and Training Systems and integrate with school",
    author: {
      name: "Abhi Raval",
      avatar: "/vercel.png",
    },
    date: "Jan 10, 2022",
    readTime: "3 min",
    description:
      `In today’s rapidly evolving job market, preparing students for the workforce is more important than ever. Traditional education systems often focus solely on academic subjects, leaving students unprepared for the practical skills needed in the real world.
      Vocational education and training programs offer hands-on learning experiences that teach students practical skills relevant to specific industries or professions. These programs can range from technical trades like carpentry and plumbing to specialised fields like healthcare and information technology.
      However, despite the valuable skills they provide, vocational education programs are sometimes seen as separate from mainstream education. This divide can limit opportunities for students and hinder their ability to transition smoothly into the workforce.
      To address this issue, educators and policymakers are working to integrate vocational education and training into mainstream curriculum. By weaving vocational elements into academic subjects, students can gain practical skills while still meeting traditional educational requirements.`,
  },
  {
    image: "/blog_images/blog4.webp",
    title: "Unlocking Technology’s Transformative Power for education: SAMR framework",
    author: {
      name: "Vivek Gajera",
      avatar: "/vercel.png",
    },
    date: "Jan 10, 2022",
    readTime: "3 min",
    description:
      `SAMR Framework for improving education technology integration in learning, teaching, and assessment:
      The SAMR Model: A Pathway to Meaningful Technology Integration
      In today’s digital age, technology has become an integral part of education. However, simply using technology in the classroom is not enough to truly enhance learning experiences. Educators need a framework to guide them in effectively integrating technology to transform teaching and learning practices. This is where the SAMR Model comes into play.
      Developed by Dr. Ruben Puentedura, the SAMR Model provides a framework for evaluating and designing technology integration in educational settings. SAMR stands for Substitution, Augmentation, Modification, and Redefinition, representing four levels of technology integration.
      1. Substitution: At this level, technology acts as a direct substitute for traditional tools or materials without significant functional change. For example, using a word processor instead of a typewriter or reading an e-book instead of a printed book.
      2. Augmentation: Technology acts as a substitute for traditional tools but provides functional improvements. For instance, using a word processor with spell-check and formatting features or annotating an e-book with digital notes and highlights.
      3.Modification: Technology allows for significant task redesign, allowing students to complete activities that would be difficult or impossible without technology. Examples include using online collaborative tools for group projects or creating multimedia presentations to demonstrate learning.
      4. Redefinition: Technology enables the creation of entirely new tasks, previously inconceivable without the use of technology. This could involve students participating in virtual reality simulations, creating and publishing their own e-books, or participating in global collaborative projects.`,
    additionalImage: null, // No additional image for this blog
  },
  {
    image: "/blog_images/blog5.webp",
    title: "Schools Learning Circle as a”pedagogical taxonomy.",
    author: {
      name: "Ajit Singh",
      avatar: "/vercel.png",
    },
    date: "Jan 10, 2022",
    readTime: "3 min",
    description:
      `The most important part of improving schools is the Schools Learning Circle. This is a group that focuses on making teaching better. They do this by looking at research evidence on 5 key areas called the “pedagogical taxonomy.”
      The goal is to understand what research says really works for effective teaching and learning. Then they figure out how to apply these proven methods in classrooms all around the world.
      The Schools Learning Circle is creating a “Toolbox” with strategies and resources for teachers based on these 5 key teaching areas:
      1. Classroom Interaction This is about the interactions between teachers and students, and also between students and their classmates. Good classroom interaction means positive communication and engaging activities that create an environment where learning can happen best.
      2. Cognitive Engagement These are techniques that get students to really think deeply about what they are learning. It means going beyond just memorizing facts to truly understanding concepts. Activities that promote critical thinking, problem-solving, and mastering skills engage students cognitively.
      3. Formative Assessment & Feedback Formative assessment is all about checking on student learning while it’s happening, not just at the end. It allows teachers to provide timely feedback to students so they know what areas they need to improve. Good feedback guides students to fill their learning gaps.`,
    
  },
];

export default function BlogsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap gap-5 justify-between mt-9 lg:px-20 sm:px-4 w-full max-w-screen-2xl max-md:max-w-full">
        <div className="flex gap-2.5 items-center">
          <div className="self-stretch my-auto lg:text-lg sm:text-sm font-pjbold capitalize text-zinc-800">
            Featured Blogs
          </div>
          <div className="flex flex-col justify-center self-stretch py-0.5 my-auto lg:w-[35px] sm:w-[15px]">
            <div className="shrink-0 h-0.5 border-2 border-solid bg-zinc-800 border-zinc-800" />
          </div>
        </div>
        <div className="flex gap-3 my-auto lg:text-lg sm:text-sm font-pjbold text-right capitalize text-zinc-800 group relative">
          <div className="grow transition-all duration-300 group-hover:text-sky-500" tabIndex="0" role="button">
            See All Blogs
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64effff9585372e1f5c5de70cde683ea5a8cd07735d046955d0bd7d25e34e40f?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
            alt=""
            className="object-contain shrink-0 self-start mt-1 lg:w-5.5 sm:w-2 aspect-[0.43] transition-all duration-300 group-hover:ml-2"
          />
        </div>
      </div>
      <div className="flex lg:flex-wrap gap-5 justify-between mt-9 lg:px-16 sm:px-10 w-full max-w-screen-2xl max-md:max-w-full">
        <div className="flex lg:flex-row sm:flex-col gap-8 w-full">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="lg:flex-grow sm:flex flex-1 h-full transition-all duration-300 transform hover:scale-105 hover:shadow-5xl"
              onClick={() => openModal(blog)}
            >
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-12/12 max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Close
              </button>
              <h2 className="text-xl font-bold">{selectedBlog.title}</h2>
            </div>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <p className="text-gray-600 mb-2">
              <strong>Author:</strong> {selectedBlog.author.name}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Date:</strong> {selectedBlog.date}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Read Time:</strong> {selectedBlog.readTime}
            </p>
            {/* Split description into paragraphs */}
            {selectedBlog.description.split("\n").map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4">
                {paragraph.trim()}
              </p>
            ))}
            {/* Additional image below description */}
            {selectedBlog.additionalImage && (
              <img
                src={selectedBlog.additionalImage}
                alt={`${selectedBlog.title} additional image`}
                className="w-full h-auto object-cover mt-4 rounded"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}