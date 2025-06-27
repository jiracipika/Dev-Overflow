// import { useState } from "react";
// import { blogPosts, allTags, allTechTags } from "../data/blogData";

// export const useBlog = () => {
//   const [posts] = useState(blogPosts);
//   const [tags] = useState(allTags);
//   const [tech] = useState(allTechTags);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedTag, setSelectedTag] = useState("all");

//   const filteredPosts = posts.filter((post) => {
//     const matchesSearch =
//       searchQuery === "" ||
//       post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       post.tags.some((tag) =>
//         tag.toLowerCase().includes(searchQuery.toLowerCase())
//       );

//     const matchesTag = selectedTag === "all" || post.tags.includes(selectedTag);

//     return matchesSearch && matchesTag;
//   });

//   return {
//     posts: filteredPosts,
//     tags,
//     tech,
//     loading: false,
//     error: null,
//     searchQuery,
//     setSearchQuery,
//     selectedTag,
//     setSelectedTag,
//   };
// };
import { useState } from "react";
import { blogPosts, allTags } from "../data/blogData";

export const useBlog = () => {
  const [posts, setPosts] = useState(blogPosts);
  const [tags] = useState(allTags);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesTag = selectedTag === "all" || post.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  const addBlog = (newBlog) => {
    setPosts((prevPosts) => [newBlog, ...prevPosts]);
  };

  return {
    posts: filteredPosts,
    tags,
    loading: false,
    error: null,
    searchQuery,
    setSearchQuery,
    selectedTag,
    setSelectedTag,
    addBlog,
  };
};
