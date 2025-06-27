import React, { createContext, useContext, useState, useEffect } from 'react';
import TagCardInfo from '../assets/TagSampleData.js';

const TagsContext = createContext();

export const TagsProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("");
  const [filteredTags, setFilteredTags] = useState(TagCardInfo);
  const [selectedTag, setSelectedTag] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let filtered = [...TagCardInfo];
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(tag => 
        tag.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply sort filter
    if (filterQuery === "Popular") {
      filtered.sort((a, b) => b.questions - a.questions);
    } else if (filterQuery === "Name") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    setFilteredTags(filtered);
  }, [searchQuery, filterQuery]);

  return (
    <TagsContext.Provider 
      value={{
        searchQuery,
        setSearchQuery,
        filterQuery,
        setFilterQuery,
        filteredTags,
        selectedTag,
        setSelectedTag,
        isAdmin,
        setIsAdmin
      }}
    >
      {children}
    </TagsContext.Provider>
  );
};

export const useTags = () => {
  const context = useContext(TagsContext);
  if (context === undefined) {
    throw new Error("useTags must be used within a TagsProvider");
  }
  return context;
};

export default TagsContext;
