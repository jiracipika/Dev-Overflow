import React, {useState, useEffect} from 'react'
import {useParams, Link} from "react-router-dom";
import SearchInput from '../Components/SearchInput';
import UserCard from '../Components/UserCard';
import UserDataInfo from '../assets/UserData';

const Communities = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const [hasJoined, setHasJoined] = useState(false)
  const { TagName } = useParams();


  const UsersByTag = UserDataInfo.filter(user => user.tags.includes(TagName));

  const [filteredUsers, setFilteredUsers] = useState(UsersByTag)

  // Load saved state when component mounts
  useEffect(() => {
    const savedState = localStorage.getItem(`community_${TagName}_joined`);
    if (savedState) {
      setHasJoined(JSON.parse(savedState));
    }
  }, [TagName]);


  const handleSearch = (userquery) =>{
    setSearchQuery(userquery)
    const filtered = UsersByTag.filter(name =>
      name.Name.toLowerCase().includes(userquery.toLowerCase())
  );
    setFilteredUsers(filtered)
    console.log(userquery)
  }

  const handleJoin = () => {
    const newState = !hasJoined;
    setHasJoined(newState);
    // Save to localStorage
    localStorage.setItem(`community_${TagName}_joined`, JSON.stringify(newState));
    console.log(newState ? "Joined community" : "Left community");
  };

  return (
    <section className='min-h-screen text-white py-8 gap-8 flex flex-col px-8 max-h-fit w-[calc(100%-330px)] bg-gradient-to-r from-[#0A0B10] to-black'>
      <SearchInput onSearchChange={handleSearch} placeholderText={"Search by Username"} classNames={"w-full"} />
      <button 
        onClick={handleJoin} 
        className={`px-5 py-2 w-fit rounded-md self-end transition-colors ${
          hasJoined 
            ? 'bg-red-600 hover:bg-red-700' 
            : 'bg-custom-gradient hover:opacity-90'
        }`}
      >
        {hasJoined ? 'Leave Community' : 'Join Community'}
      </button>
      <div className='grid grid-cols-3 flex gap-2'>
      {filteredUsers.map((item) =>{
        return (
            <UserCard key={item.id} {...item}/>
        )

      })}  
      </div>
      <Link to="/communitiesbytags" className="mt-4 inline-block text-blue-500 underline">Back to Tag List</Link>
    </section>
  )
}

export default Communities