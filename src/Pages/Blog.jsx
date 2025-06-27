// import React from "react";
// import BlogContent from "../Components/BlogContent";
// import { useBlog } from "../hooks/useBlog";

// function Blog() {
//   const blogData = useBlog();

//   return (
//     <div className="min-h-screen bg-dark-100">
      
//       <main className="transition-all duration-300 md:ml-20 p-8">
//         <BlogContent {...blogData} />
//       </main>
//     </div>
//   );
// }

// export default Blog;
import React from 'react';
// import Sidebar from './components/Sidebar';
import BlogContent from '../Components/BlogContent';
import { useBlog } from '../hooks/useBlog';

function App() {
  const blogData = useBlog();
  const isLoggedIn = true; // Changed to true to show the Add Blog button

  return (
    <div className="min-h-screen bg-dark-100 w-[calc(100%-330px)]">
     
     <main className="transition-all duration-300 md:ml-20 p-8">
        <BlogContent {...blogData} isLoggedIn={isLoggedIn} />
      </main>
    </div>
  );
}

export default App;