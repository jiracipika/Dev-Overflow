import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaYoutube   } from "react-icons/fa6";
import SearchInput from '../Components/SearchInput';
import FilterQuestionTab from '../Components/FilterQuestionTab';
import articles from '../assets/FakeData.js'
import ExpandableCard from '../Components/ExpandableCard.jsx';
import { applyFeedFilters } from '../utils/questionFeed';

const Home = () => {
  const [searchQuery,setSearchQuery] = useState("")
  const [filterQuery, setFilterQuery] = useState("Newest")
  const [itemsToShow, setItemsToShow] = useState(5)
  const [filteredArticles, setFilteredArticles] = useState(articles)

  const handleSearch = (userquery) => {
    setSearchQuery(userquery)
    setItemsToShow(5)
    setFilteredArticles(applyFeedFilters(articles, { searchQuery: userquery, filter: filterQuery }))
  }

  const handleFilterChosen = (userquery) => {
    setFilterQuery(userquery)
    setItemsToShow(5)
    setFilteredArticles(applyFeedFilters(articles, { searchQuery, filter: userquery }))
  }

  const handleShowMore = () => {
    setItemsToShow(prev => prev + 5)
  }

  return (
    <div className='min-h-screen text-white py-8 gap-8 flex flex-col px-8 max-h-fit w-[calc(100%-330px)] bg-gradient-to-r from-[#0A0B10] to-black'>
      <header className='flex justify-between'>
        <h1 className='text-[30px] font-bold'>All Questions</h1>
        <Link className='bg-custom-gradient p-4 rounded-lg font-semibold' to="ask-a-question">Ask a Question</Link>
      </header>
      <SearchInput onSearchChange={handleSearch} placeholderText={"Search a Question here"} classNames={"w-full"} />
      <FilterQuestionTab onChosenFilter={handleFilterChosen} />
      {filteredArticles.slice(0, itemsToShow).map((item) =>{
        return (<ExpandableCard key={item.id} {...item}/>)
      })}
      {itemsToShow < filteredArticles.length && (
      <div className='flex justify-center mt-4'>
        <button onClick={handleShowMore} className='bg-custom-gradient p-4 rounded-lg font-semibold'>Show More</button>
      </div>
      )}
    </div>
  )
}

export default Home