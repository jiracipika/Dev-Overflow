import React, { useState } from "react";

const AddBlog = ({ addBlog, showModal, setShowModal }) => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogImage, setBlogImage] = useState(null);

  const handleNewBlog = () => {
    if (!blogTitle || !blogContent || !blogImage) {
      alert("All fields are required!");
      return;
    }

    const newBlog = {
      id: Date.now(),
      title: blogTitle,
      content: blogContent,
      image: URL.createObjectURL(blogImage),
      date: new Date().toDateString(),
      author: "Logged-in User",
    };

    addBlog(newBlog);
    setShowModal(false);
    setBlogTitle("");
    setBlogContent("");
    setBlogImage(null);
  };

  return (
    showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-xl font-bold mb-4">Add New Blog</h2>
          <input 
            type="file" 
            accept="image/*" 
            onChange={(e) => setBlogImage(e.target.files[0])} 
            className="mb-2" 
          />
          <input 
            type="text" 
            placeholder="Blog Title" 
            value={blogTitle} 
            onChange={(e) => setBlogTitle(e.target.value)} 
            className="border p-2 w-full mb-2" 
          />
          <textarea 
            placeholder="Blog Content" 
            value={blogContent} 
            onChange={(e) => setBlogContent(e.target.value)} 
            className="border p-2 w-full mb-2"
          ></textarea>
          <button 
            onClick={handleNewBlog} 
            className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2">
            Submit
          </button>
          <button 
            onClick={() => setShowModal(false)} 
            className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Cancel
          </button>
        </div>
      </div>
    )
  );
};

export default AddBlog;