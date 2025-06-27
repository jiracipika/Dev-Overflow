import React from 'react'
import { FaMagnifyingGlass, FaMoon } from 'react-icons/fa6'
import { useState } from 'react'


const SearchInput = ({classNames, placeholderText, onSearchChange}) => {

    const [searchInput, setSearchInput] = useState("")

  return (
    <div className='relative flex items-center'>
        <span className='bg-[#0E1115] rounded-l-md h-fit w-fit p-[16px]'>
          <FaMagnifyingGlass className='text-[#7B8EC8]  h-[24px] w-[24px]' />
        </span>
        
        <input 
          onChange={(e)=> {
            setSearchInput((e.target.value))
            onSearchChange(e.target.value)
        }} 
          value={searchInput}
          placeholder={placeholderText} 
          type="text" 
          className={`bg-[#0E1115] placeholder-[#7B8EC8] outline-none text-[#7B8EC8] h-[56px] rounded-r-md text-xl ${classNames}`} />
    </div>
  )
}

export default SearchInput