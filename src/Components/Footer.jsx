import React, { useState, useEffect }  from 'react'
import FollowSuggestionCard from './FollowSuggestionCard'
import Tag from './Tag'
import UserDataInfo from '../assets/UserData'

const Footer = () => {

  const [randomSelectedUsers, setrandomSelectedUsers] = useState([])

  useEffect(() => {

    const allUsers = [...UserDataInfo]

    //Shuffle using Fisher-Yates Algorithm
    for (let i = allUsers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allUsers[i], allUsers[j]] = [allUsers[j], allUsers[i]]
    }

    setrandomSelectedUsers(allUsers.slice(0, 4))
  }, [])
  
  return (
    <footer className=' text-white p-4 gap-6 flex flex-col justify-around h-screen w-[330px] fixed top-0 right-0 bg-[#0A0B10]'>
        <div className='relative flex gap-4 flex-col top-[100px]'>
          {randomSelectedUsers.map((user) => (
            <FollowSuggestionCard key={user.id} {...user} />
          ))}
        </div>
  
        <div className="tags grid grid-cols-2 gap-2">
          <Tag classnames={"grid col-span-2"} text={"About Us"} />
          <Tag text={"Contact Us"} />
          <Tag text={"Policy"} />
          <Tag classnames={"grid col-span-2 w-fit"} text={"© 2025 Networking Tool. All rights reserved."} />
        </div>
    </footer>
  )
}

export default Footer