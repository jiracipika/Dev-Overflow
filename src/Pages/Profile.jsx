import React, {useState} from 'react'
import {Link} from "react-router-dom";
import ProfileFilterTab from '../Components/ProfileFilterTab'
import ExpandableCard from '../Components/ExpandableCard.jsx';
import UserPosts from '../assets/UserPostsData.js'
import AvatarPic from '../Components/AvatarPic';

const profile = () => {

    const [filterQuery, setFilterQuery] = useState("Top Posts")
    const [username, setUsername] = useState("Daotama")
    const [filteredPosts, setFilterPosts] = useState(UserPosts.filter((user) => user.author == username))

    const handleFilterChosen = (userquery) =>{
        setFilterQuery(userquery)
        console.log(userquery)

        if (userquery == "Top Posts"){
            setFilterPosts(UserPosts.filter((user) => user.author == username))
            
        }
        else if (userquery == "Answered"){
            setFilterPosts(UserPosts.filter(post => 
                post.comments.some(comment => comment.author== username)
            ));
        }

      }
    

    return (
        <section className='bg-gradient-to-r from-[#0A0B10] to-black h-full w-[calc(100%-330px)] p-6 flex-col'>
            <AvatarPic />
            <div className='rounded-md bg-[#0A0B10] h-full rounded-[20px] flex flex-col p-6 mt-4'>
                <div className='justify-between items-start mb-4 py-1'>
                    <h1 className='text-[white] text-4xl'>Dao</h1>
                    <h3 className='text-[white] text-sm'>@Daotama</h3>
                    <button className='bg-custom-gradient text-[white] font-bold py-2 px-4 rounded'><Link to="/editProfile">Edit Profile</Link></button>
                </div>
                <div className='mt-4 max-w-[600px]'>
                    <p className='text-[white] leading-relaxed'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className='min-h-screen text-white py-8 gap-8 flex flex-col px-8 max-h-fit w-[calc(100%-330px)] bg-gradient-to-r from-[#0A0B10] to-black'>
                <ProfileFilterTab onChosenFilter={handleFilterChosen}/>
                {filteredPosts.map((item) =>{
        return (<ExpandableCard key={item.id} {...item}/>)

      })}
            </div>
        </section>
    )
}

export default profile