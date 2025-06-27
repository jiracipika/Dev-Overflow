import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AvatarPic from '../Components/AvatarPic.jsx';
import Tag from './Tag.jsx'

const UserCard = ({Name, Username, tags, id}) => {
    const [showAllTags, setShowAllTags] = useState(false);

    return(
        <div id={id} className='bg-card-gradient flex flex-col gap-3 p-10 rounded-lg'>
            <AvatarPic/>
            <Link to={`/${id}`}><label className='font-semibold text-[20px] p-2 rounded-lg cursor-pointer'>{Name|| "Name"}</label></Link>
            <label className='text-[10px] p-2 rounded-lg'>{Username|| "Username"}</label>
                <div className='flex flex-wrap gap-2 max-w-full'>
                {
                    tags ? (
                        tags.length > 3 ? (
                            <>
                                {showAllTags ? (
                                    tags.map((item, index) => (
                                        <Tag key={index} text={item} />
                                    ))
                                ) : (
                                    tags.slice(0, 3).map((item, index) => (
                                        <Tag key={index} text={item} />
                                    ))
                                )}
                                <button 
                                    className="text-sm text-blue-500 hover:underline cursor-pointer"
                                    onClick={() => {
                                        setShowAllTags(!showAllTags);
                                    }}
                                >
                                    {showAllTags ? 'Show less' : `+${tags.length - 3} more`}
                                </button>
                            </>
                        ) : (
                            tags.map((item, index) => (
                                <Tag key={index} text={item} />
                            ))
                        )
                    ) : (
                        <Tag text="hello" />
                    )
                }

                </div>
        </div>
    )

}

export default UserCard