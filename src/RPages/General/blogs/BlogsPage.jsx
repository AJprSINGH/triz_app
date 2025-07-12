"use client";

import React, { useState, useEffect } from "react";
import { BlogCard } from "./BlogCard";

export default function BlogsPage() {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [showAllBlogs, setShowAllBlogs] = useState(false);

  const [newBlog, setNewBlog] = useState({
    image: "",
    title: "",
    author: { name: "", avatar: "" },
    date: "",
    readTime: "",
    description: "",
    additionalImage: null,
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://erp.triz.co.in/lms_data?table=blogs&filters[status]=published&filters[type]=blog"
        );
        const json = await res.json();
        console.log("Full API response:", json);

        let data = [];
        if (Array.isArray(json.data)) {
          data = json.data;
        } else if (Array.isArray(json)) {
          data = json;
        } else if (Array.isArray(json.blogs)) {
          data = json.blogs;
        } else {
          console.warn("Unexpected data shape:", json);
        }

        const blogsWithFixedFields = data.map(item => ({
          ...item,
          author: typeof item.author === "string"
            ? { name: item.author, avatar: "/vercel.png" }
            : {
                name: item.author?.name || "Unknown Author",
                avatar: "/vercel.png",
              },
          date: item.created_at
            ? new Date(item.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Unknown date",
        }));

        setBlogData(blogsWithFixedFields);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("author.")) {
      setNewBlog(prev => ({
        ...prev,
        author: { ...prev.author, [name.split(".")[1]]: value },
      }));
    } else {
      setNewBlog(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogData(prev => [...prev, newBlog]);
    setNewBlog({
      image: "",
      title: "",
      author: { name: "", avatar: "" },
      date: "",
      readTime: "",
      description: "",
      additionalImage: null,
    });
    setShowBlogForm(false);
  };

  const BlogForm = () => (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mt-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="image" placeholder="Image URL" value={newBlog.image} onChange={handleInputChange} className="border border-gray-300 p-2 rounded" required />
        <input type="text" name="title" placeholder="Title" value={newBlog.title} onChange={handleInputChange} className="border border-gray-300 p-2 rounded" required />
        <input type="text" name="author.name" placeholder="Author Name" value={newBlog.author.name} onChange={handleInputChange} className="border border-gray-300 p-2 rounded" required />
        <input type="text" name="author.avatar" placeholder="Author Avatar URL" value={newBlog.author.avatar} onChange={handleInputChange} className="border border-gray-300 p-2 rounded" required />
        <input type="text" name="date" placeholder="Date" value={newBlog.date} onChange={handleInputChange} className="border border-gray-300 p-2 rounded" required />
        <input type="text" name="readTime" placeholder="Read Time" value={newBlog.readTime} onChange={handleInputChange} className="border border-gray-300 p-2 rounded" required />
        <textarea name="description" placeholder="Description" value={newBlog.description} onChange={handleInputChange} className="border border-gray-300 p-2 rounded" required />
        <input type="text" name="additionalImage" placeholder="Additional Image URL (optional)" value={newBlog.additionalImage || ""} onChange={handleInputChange} className="border border-gray-300 p-2 rounded" />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap gap-5 justify-between mt-9 lg:px-20 sm:px-4 w-full max-w-screen-2xl">
        <div className="flex gap-2.5 items-center">
          <div className="font-bold capitalize text-zinc-800">Featured Blogs</div>
          <div className="h-0.5 w-8 bg-zinc-800" />
        </div>
        <div className="flex gap-3 my-auto lg:text-lg sm:text-sm font-bold text-zinc-800 group relative">
          <div
            className="grow transition-all duration-300 group-hover:text-sky-500 cursor-pointer"
            tabIndex={0}
            role="button"
            onClick={() => setShowAllBlogs(!showAllBlogs)}
          >
            {showAllBlogs ? "Show Less" : "See All Blogs"}
          </div>
        </div>
      </div>

      {isLoading ? (
        <p className="mt-10">Loading blogs...</p>
      ) : blogData.length === 0 ? (
        <p className="mt-10">No blogs found.</p>
      ) : (
        <div className="flex flex-wrap gap-5 justify-between mt-9 lg:px-16 sm:px-10 w-full max-w-screen-2xl max-md:max-w-full">
          <div className="flex lg:flex-row sm:flex-col gap-8 w-full flex-wrap">
            {/* Always show first 5 */}
            {blogData.slice(0, 5).map((blog, index) => (
              <div key={`first-${index}`} className="flex-1 transition-transform hover:scale-105" onClick={() => openModal(blog)}>
                <BlogCard {...blog} />
              </div>
            ))}
            {/* Show extra blogs if toggled */}
            {showAllBlogs && blogData.slice(5).map((blog, index) => (
              <div key={`extra-${index}`} className="flex-1 transition-transform hover:scale-105" onClick={() => openModal(blog)}>
                <BlogCard {...blog} />
              </div>
            ))}
          </div>
        </div>
      )}

      {showBlogForm && <BlogForm />}

      {isModalOpen && selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-12/12 max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <button onClick={closeModal} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Close</button>
              <h2 className="text-xl font-bold">{selectedBlog.title}</h2>
            </div>
            <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-48 object-cover mb-4 rounded" />
            <p className="text-gray-600 mb-2"><strong>Author:</strong> {selectedBlog.author.name}</p>
            <p className="text-gray-600 mb-2"><strong>Date:</strong> {selectedBlog.date}</p>
            {selectedBlog.readTime && <p className="text-gray-600 mb-2"><strong>Read Time:</strong> {selectedBlog.readTime}</p>}
            <div
              className="text-gray-700 mb-4"
              dangerouslySetInnerHTML={{ __html: selectedBlog.description }}
            />
            {selectedBlog.additionalImage && (
              <img src={selectedBlog.additionalImage} alt="Additional" className="w-full mt-4 rounded" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
