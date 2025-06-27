import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ExpandableCard from '../Components/ExpandableCard'

const Collections = () => {
  const [bookmarkedCards, setBookmarkedCards] = useState([])

  useEffect(() => {
    // Load bookmarked cards from localStorage
    const savedCollections = JSON.parse(localStorage.getItem('collections') || '[]')
    setBookmarkedCards(savedCollections)
  }, [])

  return (
    <div className='min-h-screen text-white py-8 gap-8 flex flex-col px-8 max-h-fit w-[calc(100%-330px)] bg-gradient-to-r from-[#0A0B10] to-black'>
      <h2 className="text-2xl font-bold mb-6">Saved Questions</h2>
      {bookmarkedCards.length === 0 ? (
        <p className="text-gray-400 text-center py-12">No questions saved yet</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {bookmarkedCards.map((item) => (
              <ExpandableCard {...item} isBookmarked={true} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Collections