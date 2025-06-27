import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NotificationFilterTab = ({onChosenFilter}) => {
    const [chosenFilter, setChosenFilter] = useState("");
    
    const handleClick = (e) =>{
        setChosenFilter(e.target.innerText)
        onChosenFilter(e.target.innerText)
    }
    return (
        <section className="filterTab flex gap-4 ">
            <Link 
            onClick={handleClick} 
            className={`transition-all rounded-lg p-4 bg-[#151821] text-[#7B8EC8]`}> <span className={`${chosenFilter === "All" ? "bg-clip-text text-transparent bg-custom-gradient" : ""}`}>All</span> </Link>
            <Link
             onClick={handleClick} 
            className={`rounded-lg p-4 transition-all bg-[#151821] text-[#7B8EC8]`}> <span className={`${chosenFilter === "Messages" ? "bg-clip-text text-transparent bg-custom-gradient" : ""}`}>Messages</span> </Link>
            <Link onClick={handleClick} className='rounded-lg transition-all p-4 bg-[#151821] text-[#7B8EC8]'> <span className={`${chosenFilter === "Requests" ? "bg-clip-text text-transparent bg-custom-gradient" : ""}`}>Requests</span> </Link>
            <Link onClick={handleClick} className='rounded-lg p-4 transition-all bg-[#151821] text-[#7B8EC8]'> <span className={`${chosenFilter === "Schedule" ? "bg-clip-text text-transparent bg-custom-gradient" : ""}`}>Schedule</span> </Link>
        </section>
      )
}

export default NotificationFilterTab