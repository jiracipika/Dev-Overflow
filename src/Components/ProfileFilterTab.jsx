import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProfileFilterTab = ({onChosenFilter}) => {
    const [chosenFilter, setChosenFilter] = useState("Top Posts");

    const handleClick = (e) =>{
        setChosenFilter(e.target.innerText)
        onChosenFilter(e.target.innerText)
    }
    
  return (
    <section className="filterTab flex gap-4 ">
        <Link 
        onClick={handleClick} 
        className={`transition-all rounded-lg p-4 bg-[#151821] text-[#7B8EC8]`}> <span className={`${chosenFilter === "Top Posts" ? "bg-clip-text text-transparent bg-custom-gradient" : ""}`}>Top Posts</span> </Link>
        <Link
         onClick={handleClick} 
        className={`rounded-lg p-4 transition-all bg-[#151821] text-[#7B8EC8]`}> <span className={`${chosenFilter === "Answered" ? "bg-clip-text text-transparent bg-custom-gradient" : ""}`}>Answered</span> </Link>
    </section>
  )
}

export default ProfileFilterTab