import React, {useState} from 'react'
import SearchInput from '../Components/SearchInput';
import CommunityDatabyTags from '../assets/CommunityDatabyTags';
import CommunityCard from '../Components/CommunityCards';

const CommunitiesByTags = () => {
    const [searchQuery,setSearchQuery] = useState("")
    const [filteredCards, setFilteredCards] = useState(CommunityDatabyTags)
      
    const handleSearch = (userquery) =>{
        setSearchQuery(userquery)
        const filtered = CommunityDatabyTags.filter(name =>
            name.TagName.toLowerCase().includes(userquery.toLowerCase())
        );
        setFilteredCards(filtered)
        console.log(userquery)
    }
    return (
        <section className='min-h-screen text-white py-8 gap-8 flex flex-col px-8 max-h-fit w-[calc(100%-330px)] bg-gradient-to-r from-[#0A0B10] to-black'>
            <SearchInput onSearchChange={handleSearch} placeholderText={"Search Communities by Tag"} classNames={"w-full"} />
            <div className='flex gap-2'>
            {filteredCards.map((item, index) =>{
                return (
                <CommunityCard className='grid grid-cols-3' id={index} TagName={item.TagName} Users={item.Users}/>)

            })}  
            </div>
        </section>
      )
}

export default CommunitiesByTags