import React, { useState, useEffect } from 'react'
import ProfileFilterTab from '../Components/ProfileFilterTab'
import UserDataInfo from '../assets/UserData.js';
import ExpandableCard from '../Components/ExpandableCard.jsx';
import articles from '../assets/FakeData.js';
import AvatarPic from '../Components/AvatarPic';
import { useParams } from 'react-router-dom';

const OtherUserProfile = () => {

    const [filterQuery, setFilterQuery] = useState("Top Posts")
    const [userData, setUserData] = useState({})
    const [filteredPosts, setFilterPosts] = useState([])
    const [isFollowing, setIsFollowing] = useState(false)
    
    let params = useParams();

    useEffect(() => {
        const userid = Number(params.id)
        console.log(userid)
        const data = UserDataInfo.find(x => x.id === userid);
        if (data) {
            setUserData(data);
            // Check if user is already following this user
            // This would typically come from an API call
            // For now, we'll just initialize it as false
            setIsFollowing(false);
            // Initial post filtering when user data is loaded
            setFilterPosts(articles.filter(article => article.author === data.Name));
        } else {
            console.error('User not found:', params.id);
        }
    }, [params.id]);

    useEffect(() => {
        if (!userData || !userData.Name) return;

        let filteredPosts = articles.filter(article => article.author === userData.Name);
        
        if (filterQuery === "Top Posts") {
            // Sort by likes or other criteria for top posts
            filteredPosts = filteredPosts.sort((a, b) => b.likes - a.likes);
        } else if (filterQuery === "Answered") {
            // Filter posts where the user has commented
            filteredPosts = articles.filter(article => 
                article.comments.some(comment => comment.author === userData.Name)
            );
        }
        
        setFilterPosts(filteredPosts);
    }, [filterQuery, userData]);

    const handleFilterChosen = (userquery) => {
        setFilterQuery(userquery);
    }

    const handleFollow = async () => {
        try {
            // Here you would typically make an API call to follow the user
            // For now, we'll just toggle the state
            setIsFollowing(!isFollowing);
            
            // In a real application, you would:
            // 1. Make an API call to follow/unfollow the user
            // 2. Update the UI based on the response
            // 3. Handle any errors that might occur
        } catch (error) {
            console.error('Error following user:', error);
            // In a real app, you would show an error message to the user
        }
    }


    return (
        <section className='bg-gradient-to-r from-[#0A0B10] to-black h-full w-[calc(100%-330px)] p-6 flex-col'>
            <AvatarPic />
            <div className='rounded-md bg-[#0A0B10] h-full rounded-[20px] left-[157px] top-[101px]'>
                <div className='flex gap-4 justify-end'>
                    <button 
                        onClick={handleFollow}
                        className='bg-custom-gradient text-[white] font-bold py-2 px-4 rounded'
                    >
                        {isFollowing ? 'Following' : 'Follow'}
                    </button>
                    <button className='bg-custom-gradient text-[white] font-bold py-2 px-4 rounded'>Message</button>
                </div>
                {userData && (
                <>
                <h1 className='text-[white] text-4xl'>{userData.Name}</h1>
                <h3 className='text-[white] text-sm'>@{userData.Username}</h3>
                <p className='text-[white]'>{userData.Bio}</p>
                </>
            )}
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

export default OtherUserProfile