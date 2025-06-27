import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TagFilterTab = ({onChosenFilter}) => {
    const [chosenFilter, setChosenFilter] = useState("");

    const handleClick = (e) =>{
        setChosenFilter(e.target.innerText)
        onChosenFilter(e.target.innerText)
    }
    
  return (
    <section className="filterTab flex gap-4 ">
        <Link 
        onClick={handleClick} 
        className={`transition-all rounded-lg p-4 bg-[#151821] text-[#7B8EC8]`}> <span className={`${chosenFilter === "Popular" ? "bg-clip-text text-[orange] bg-custom-gradient" : ""}`}>Popular</span> </Link>
        <Link
         onClick={handleClick} 
        className={`rounded-lg p-4 transition-all bg-[#151821] text-[#7B8EC8]`}> <span className={`${chosenFilter === "Name" ? "bg-clip-text text-[orange] bg-custom-gradient" : ""}`}>Name</span> </Link>
    </section>
  )
}

export default TagFilterTab