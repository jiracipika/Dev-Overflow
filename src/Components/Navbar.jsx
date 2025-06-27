import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { 
  homeSvgSrc, 
  collectionSvgSrc, 
  tagSvgSrc, 
  communitesSvgSrc, 
  askAQuestionSvgSrc, 
  logoutSvgSrc,
  blogSvgSrc,
  messagesSvgSrc

} from '../assets/Icons/getIcons'


const Navbar = () => {
  return (
    <nav className='text-white py-10 px-4 min-h-screen flex flex-col justify-between z-10 fixed top-0 max-h-full w-[266px] bg-[#0B0C14]'>
      <div className='flex flex-col w-full gap-8 '>
        <h1 className='px-4 py-2.5 text-[18px]'>Logo</h1>
        <ul className='flex flex-col gap-4 w-full '>
          <NavLink to={"/"} className={({ isActive }) => `flex transition-all text-[18px] px-4 py-2.5 rounded-lg w-full font-normal gap-2 items-center ${isActive ? "bg-custom-gradient" : ""}`}><img src={homeSvgSrc} alt="Home-icon" />Home</NavLink>
          <NavLink to={"/collections"} className={({ isActive }) => `flex transition-all text-[18px] px-4 py-2.5 rounded-lg w-full font-normal gap-2 items-center ${isActive ? "bg-custom-gradient" : ""}`}> <img src={collectionSvgSrc} alt='Star-icon' /> Collections</NavLink>
          <NavLink to={"/tags"} className={({ isActive }) => `flex transition-all text-[18px] px-4 py-2.5 rounded-lg w-full font-normal gap-2 items-center ${isActive ? "bg-custom-gradient" : ""}`}><img src={tagSvgSrc} alt='Tag-icon' /> Tags</NavLink>
          <NavLink to={"/communitiesbytags"} className={({ isActive }) => `flex transition-all text-[18px] px-4 py-2.5 rounded-lg w-full font-normal gap-2 items-center ${isActive ? "bg-custom-gradient" : ""}`}><img src={communitesSvgSrc} alt='GroupOfPeople-icon' /> Communities</NavLink>
          <NavLink to={"/ask-a-question"} className={({ isActive }) => `flex transition-all text-[18px] px-4 py-2.5 rounded-lg w-full font-normal gap-2 items-center ${isActive ? "bg-custom-gradient" : ""}`}><img src={askAQuestionSvgSrc} alt='QuestionMark-icon' /> Ask a Question</NavLink>
          <NavLink to={"/blog"} className={({ isActive }) => `flex transition-all text-[18px] px-4 py-2.5 rounded-lg w-full font-normal gap-2 items-center ${isActive ? "bg-custom-gradient" : ""}`}><img src={blogSvgSrc} alt='Blog-icon' /> Blog</NavLink>
          <NavLink to={"/messages"} className={({ isActive }) => `flex transition-all text-[18px] px-4 py-2.5 rounded-lg w-full font-normal gap-2 items-center ${isActive ? "bg-custom-gradient" : ""}`}><img src={messagesSvgSrc} alt='Messages-icon' />Messages</NavLink>
        </ul>

      </div>


      <NavLink to={"/signin"}className="px-4 py-2.5 gap-2 flex items-center text-[18px]"> <img src={logoutSvgSrc} alt='Exit-icon' /> Log Out</NavLink>
    </nav>
  )
}

export default Navbar