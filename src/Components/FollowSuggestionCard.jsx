import React from 'react'
import { Link } from 'react-router-dom'

const FollowSuggestionCard = ({id, Name, Username, imgSrc}) => {
  return (
    <>
        <div id={id} className='flex bg-card-gradient rounded-lg w-full justify-between p-2 items-center'>
            <div className='flex gap-3 items-center'>
                <img className='w-14 h-14 rounded-full' src={imgSrc} alt="" />
                <div className="">
                <Link to={`/${id}`}><h1 className="">{Name}</h1></Link>
                    <p>@{Username}</p>
                </div>
            </div>
            <Link className='bg-custom-gradient p-2 rounded-lg'>Follow</Link>
        </div>
    </>
  )
}

export default FollowSuggestionCard