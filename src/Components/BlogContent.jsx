// import React from 'react';
// import SearchBar from './SearchBar';
// import TagFilter from './TagFilter';
// import BlogCard from './BlogCard';


// const BlogContent = ({ 
//   posts, 
//   tags, 
//   loading, 
//   error,
//   searchQuery,
//   setSearchQuery,
//   selectedTag,
//   setSelectedTag 
// }) => {
  
//   if (loading) return <div className="text-light-900">Loading...</div>;
//   if (error) return <div className="text-red-500">Error: {error}</div>;

//   return (
//     // <div className="max-w-screen-md mx-auto px-4">
//       <div className="max-w-screen-2xl px-4 md:px-0 mx-2">
//       <h1 className="text-4xl font-bold text-light-900 mb-8">Overflow Blog</h1>
      
      
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
//         <SearchBar 
//           value={searchQuery}
//           onSearch={setSearchQuery}  
//           placeholder="Search by title or tags..." 
//         />
        
//         <TagFilter
//           tags={tags}
//           selectedTag={selectedTag}
//           onTagSelect={setSelectedTag}
//         />
//       </div>

      

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 xl:gap-6">
//         {posts.map((post) => (
//           <BlogCard key={post._id} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BlogContent;
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import SearchBar from './SearchBar';
import TagFilter from './TagFilter';
import BlogCard from './BlogCard';
import AddBlogModal from './AddBlogModal';
import {Link} from "react-router-dom";

const BlogContent = ({ 
  posts, 
  tags, 
  loading, 
  error,
  searchQuery,
  setSearchQuery,
  selectedTag,
  setSelectedTag,
  addBlog,
  isLoggedIn = false
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) return <div className="text-light-900">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  const handleAddBlog = () => {
    setIsModalOpen(true);
  };

  const handleSubmitBlog = (newBlog) => {
    addBlog(newBlog);
  };

  return (
    <div className="max-w-screen-2xl px-4 md:px-0 mx-2">
      <h1 className="text-4xl font-bold text-light-900 mb-8">Overflow Blog</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="flex flex-1 items-center gap-4 w-full md:w-auto">
          <SearchBar 
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by title or tags..." 
          />
          {isLoggedIn && (
            <button
              onClick={handleAddBlog}
              className="flex items-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Plus size={20} />
              <span className="hidden md:inline">Add Blog</span>
            </button>
          )}
        </div>
        <TagFilter
          tags={tags}
          selectedTag={selectedTag}
          onTagSelect={setSelectedTag}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link to={`/blogview/${post.id}`}><BlogCard key={post.id} post={post} /></Link>
        ))}
      </div>

      <AddBlogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitBlog}
      />
    </div>
  );
}

export default BlogContent;