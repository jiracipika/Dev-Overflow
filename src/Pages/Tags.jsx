import React from 'react'
import SearchInput from '../Components/SearchInput'
import TagCard from '../Components/TagCard.jsx'
import TagFilterTab from '../Components/TagFilterTab.jsx'
import { useTags } from '../context/TagsContext';


const Tags = () => {
  const {
    searchQuery,
    setSearchQuery,
    filterQuery,
    setFilterQuery,
    filteredTags,
    selectedTag,
    setSelectedTag,
    isAdmin
  } = useTags()

  const handleSearch = (userquery) => {
    setSearchQuery(userquery)
  }

  const handleFilterChosen = (userquery) => {
    setFilterQuery(userquery)
  }

  return (
    <section className='min-h-screen text-white py-8 gap-8 flex flex-col px-8 max-h-fit w-[calc(100%-330px)] bg-gradient-to-r from-[#0A0B10] to-black'>
      <SearchInput onSearchChange={handleSearch} placeholderText={"Search Tags"} classNames={"w-full"} />
      <TagFilterTab onChosenFilter={handleFilterChosen} />
      <div className='grid grid-cols-3 flex gap-2'>
        {filteredTags.map((item, index) => {
          return (
            <TagCard 
              key={index} 
              id={item.id}
              title={item.title}
              description={item.description}
              questions={item.questions}
              isSelected={selectedTag === item}
              onSelect={() => setSelectedTag(item)}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Tags