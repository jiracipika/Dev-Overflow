import React, { useState, useRef } from 'react';
import { X, Upload, Image as ImageIcon } from 'lucide-react';

const AddBlogModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    tags: [],
    tech: ''
  });
  const [dragActive, setDragActive] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tags') {
      setFormData(prev => ({
        ...prev,
        [name]: value.split(',').map(tag => tag.trim())
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setFormData(prev => ({ ...prev, imageUrl: url }));
    setPreviewImage(url);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
        setFormData(prev => ({ ...prev, imageUrl: e.target.result }));
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload an image file');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    
    const newBlog = {
      _id: Date.now().toString(),
      ...formData,
      date: currentDate,
      author: {
        name: "Current User", // This should come from auth context in a real app
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    };
    
    onSubmit(newBlog);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-dark-200 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-light-900">Add New Blog Post</h2>
          <button
            onClick={onClose}
            className="text-light-400 hover:text-light-900 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-light-900 mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-dark-300 text-light-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter blog title"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-light-900 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full bg-dark-300 text-light-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter blog description"
            />
          </div>

          <div>
            <label className="block text-light-900 mb-2">Blog Image</label>
            <div className="space-y-4">
              {/* Image URL input */}
              <div>
                <label htmlFor="imageUrl" className="block text-light-400 text-sm mb-2">
                  Option 1: Enter Image URL
                </label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleImageUrlChange}
                  className="w-full bg-dark-300 text-light-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter image URL from Unsplash"
                />
              </div>

              {/* Image upload/drag-drop zone */}
              <div>
                <label className="block text-light-400 text-sm mb-2">
                  Option 2: Upload Image
                </label>
                <div
                  className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
                    dragActive 
                      ? 'border-orange-500 bg-dark-300' 
                      : 'border-dark-400 hover:border-dark-500'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileInput}
                    className="hidden"
                  />
                  
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="p-3 rounded-full bg-dark-400">
                      <Upload size={24} className="text-light-400" />
                    </div>
                    <p className="text-light-400 text-center">
                      Drag and drop your image here, or{' '}
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="text-orange-500 hover:text-orange-600"
                      >
                        browse
                      </button>
                    </p>
                    <p className="text-light-400 text-sm">
                      Supports: JPG, PNG, GIF (max 5MB)
                    </p>
                  </div>
                </div>
              </div>

              {/* Image preview */}
              {previewImage && (
                <div className="relative">
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg"
                    onError={() => setPreviewImage(null)}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreviewImage(null);
                      setFormData(prev => ({ ...prev, imageUrl: '' }));
                    }}
                    className="absolute top-2 right-2 p-1 bg-dark-200 rounded-full text-light-400 hover:text-light-900"
                  >
                    <X size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="tags" className="block text-light-900 mb-2">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              required
              value={formData.tags.join(', ')}
              onChange={handleChange}
              className="w-full bg-dark-300 text-light-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="e.g., JavaScript, React, Web Development"
            />
          </div>

          <div>
            <label htmlFor="tech" className="block text-light-900 mb-2">
              Technology Category
            </label>
            <select
              id="tech"
              name="tech"
              required
              value={formData.tech}
              onChange={handleChange}
              className="w-full bg-dark-300 text-light-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select a category</option>
              <option value="Full Stack Development">Full Stack Development</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="DevOps">DevOps</option>
              <option value="Cloud Computing">Cloud Computing</option>
            </select>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-dark-400 text-light-900 rounded-lg hover:bg-dark-500 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlogModal;