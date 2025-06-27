import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const TagFilter = ({ tags, selectedTag, onTagSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const closeDropdown = () => setIsDropdownOpen(false);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter out JavaScript from the dropdown options
  const dropdownTags = tags.filter((tag) => tag !== 'JavaScript');

  return (
    <div className="flex gap-2 flex-wrap items-center">
      <button
        onClick={() => onTagSelect('all')}
        className={`px-4 py-2 rounded-lg ${
          selectedTag === 'all'
            ? 'bg-orange-500 text-white'
            : 'bg-[#1E1E1E] text-gray-400 hover:bg-[#2E2E2E]'
        }`}
      >
        View all
      </button>

      <button
        onClick={() => onTagSelect('JavaScript')}
        className={`px-4 py-2 rounded-lg ${
          selectedTag === 'JavaScript'
            ? 'bg-orange-500 text-white'
            : 'bg-[#1E1E1E] text-gray-400 hover:bg-[#2E2E2E]'
        }`}
      >
        JavaScript
      </button>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1E1E1E] text-gray-400 hover:bg-[#2E2E2E]"
        >
          <span>Filter by Tag</span>
          <ChevronDown
            size={16}
            className={`transform transition-transform ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div
            className="absolute z-10 mt-2 w-40 rounded-lg bg-[#1E1E1E] shadow-lg py-1 overflow-y-auto"
            style={{ maxHeight: '160px' }} // Limit to 4 items
          >
            {dropdownTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  onTagSelect(tag);
                  closeDropdown();
                }}
                className={`w-full text-left px-4 py-2 hover:bg-[#2E2E2E] ${
                  selectedTag === tag
                    ? 'text-orange-500'
                    : 'text-gray-400'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TagFilter;
