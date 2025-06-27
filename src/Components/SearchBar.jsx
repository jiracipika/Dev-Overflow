import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ placeholder = "Search...", onSearch = () => {} }) => {
  return (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#7B8EC8]  h-[24px] w-[24px]" size={20} />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full bg-[#1E1E1E] text-white rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
}

export default SearchBar;

