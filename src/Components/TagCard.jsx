import React from 'react'
import {Link} from "react-router-dom";

const TagCard = ({title, description, questions, id, isSelected, onSelect}) => {
    return (
        <div id={id} className={`h-fit ${isSelected ? 'bg-card-gradient border-2 border-blue-500' : 'bg-card-gradient'} flex flex-col gap-3 p-9 rounded-lg cursor-pointer transition-all duration-100`} onClick={onSelect} aria-selected={isSelected}>
            <div className="">
                <Link key={id} to={`/tagSection/${id}`} ><label className={`bg-gray-800 ${isSelected ? 'bg-blue-700' : 'hover:bg-gray-600'} font-semibold text-[20px] p-2 rounded-lg cursor-pointer max-[1480px]:text-[15px] max-[1350px]:text-[14px]`}>{title || "Title Name"}</label></Link>
            </div>
            <p className='my-1 truncate'>{description || "Something"}</p>
            <div className='flex justify-between'>
                <p><span className="text-[orange]">{questions || '122'}</span> Questions</p>
            </div>
        </div>
    )
}

export default TagCard