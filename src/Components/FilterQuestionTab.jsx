import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const FilterQuestionTab = ({onChosenFilter}) => {
    const [chosenFilter, setChosenFilter] = useState("Newest");

    const handleClick = (e) =>{
        setChosenFilter(e.target.innerText)
        onChosenFilter(e.target.innerText)
    }
    
  return (
    <section className="filterTab flex flex-wrap gap-2 justify-center sm:gap-3 md:gap-4 lg:gap-6 max-w-6xl mx-auto px-4">
        <Link 
        onClick={handleClick} 
        className={`transition-all rounded-lg p-2 sm:p-3 md:p-4 bg-[#151821] text-[#7B8EC8] 
        text-xs sm:text-sm md:text-base lg:text-lg 
        max-[1155px]:text-sm max-[768px]:text-xs max-[576px]:text-[9px] 
        whitespace-nowrap`}> 
            <span className={`${chosenFilter === "Newest" ? "bg-clip-text text-transparent bg-custom-gradient" : ""}`}>
                Newest
            </span> 
        </Link>
        <Link
         onClick={handleClick} 
        className={`rounded-lg p-2 sm:p-3 md:p-4 transition-all bg-[#151821] text-[#7B8EC8] 
        text-xs sm:text-sm md:text-base lg:text-lg 
        max-[1155px]:text-sm max-[768px]:text-xs max-[576px]:text-[9px] 
        whitespace-nowrap`}> 
            <span className={`${chosenFilter === "Recommended" ? "bg-clip-text text-transparent bg-custom-gradient" : ""}`}>
                Recommended
            </span>
        </Link>
        <Link 
        onClick={handleClick} 
        className={`rounded-lg p-2 sm:p-3 md:p-4 transition-all bg-[#151821] text-[#7B8EC8] 
        text-xs sm:text-sm md:text-base lg:text-lg 
        max-[1155px]:text-sm max-[768px]:text-xs max-[576px]:text-[9px] 
        whitespace-nowrap`}>
            <span className={`${chosenFilter === "Frequent" ? "bg-clip-text text-transparent bg-custom-gradient" : ""}`}>
                Frequent
            </span>
        </Link>
        <Link 
        onClick={handleClick} 
        className={`rounded-lg p-2 sm:p-3 md:p-4 transition-all bg-[#151821] text-[#7B8EC8] 
        text-xs sm:text-sm md:text-base lg:text-lg 
        max-[1155px]:text-sm max-[768px]:text-xs max-[576px]:text-[9px] 
        whitespace-nowrap`}>
            <span className={`${chosenFilter === "Unanswered" ? "bg-clip-text text-transparent bg-custom-gradient" : ""}`}>
                Unanswered
            </span>
        </Link>
    </section>
  )
}

export default FilterQuestionTab