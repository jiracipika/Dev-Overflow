import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'
import { FaMagnifyingGlass, FaMoon } from 'react-icons/fa6'
import NotifIcon from '../assets/Images/icons8-notification-48.png'

const Searchbar = () => {
  const [query, setQuery] = useState("")

  const handleSearch = (userquery) =>{
    setQuery(userquery)
    
  }
  

  return (
    <div className={`bg-[#0A0B10] z-10 w-[calc(100%-266px)] fixed top-0 h-[100px] text-white flex justify-around items-center `}>
      
      
    <SearchInput onSearchChange={handleSearch} placeholderText={"Search anything globally"} classNames={"w-[566px]"}/>
      <div className='flex items-center gap-4'>
        <FaMoon className='text-[#ff7000] rotate-[-90deg] w-[24px] h-[24px]' />
        <Link to={"notifications"}><img className='rounded-full w-[42px] h-[42px]' src={NotifIcon}></img></Link>
        <Link to={"profile"}><img className='rounded-full w-[42px] h-[42px]' src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/4JkBtVU9QUwcwFCWi3AV" alt="" /></Link>
      </div>
        
    </div>
  )
}

export default Searchbar