import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import Tag from './Tag.jsx'
import { FaThumbsUp, FaComment, FaEye, FaRegStar, FaStar} from 'react-icons/fa6'
import { addToCollections, removeFromCollections as removeCardFromCollections } from '../utils/collections'

const COLLECTIONS_KEY = 'collections'

const readCollections = () => {
    try {
        return JSON.parse(localStorage.getItem(COLLECTIONS_KEY) || '[]')
    } catch {
        return []
    }
}

const ExpandableCard = ({title, author, asked, votes, comments, views, tags, id, imgSrc}) => {

    const [isBookmarked, setIsBookmarked] = useState(false)

    useEffect(() => {
        const savedCollections = readCollections()
        const isAlreadyBookmarked = savedCollections.some(item => item.id === id)
        setIsBookmarked(isAlreadyBookmarked)

    }, [id])

    const saveToCollections = (cardData) => {
        const updatedCollections = addToCollections(readCollections(), cardData)
        localStorage.setItem(COLLECTIONS_KEY, JSON.stringify(updatedCollections))
    }

    const removeFromCollections = (cardId) => {
        const updatedCollections = removeCardFromCollections(readCollections(), cardId)
        localStorage.setItem(COLLECTIONS_KEY, JSON.stringify(updatedCollections))
    }

    const toggleBookmark = () => {
        const cardData = {
            id,
            title,
            author,
            asked,
            votes,
            comments,
            views,
            tags,
            imgSrc
        }

        if (!isBookmarked) {
            saveToCollections(cardData)
        } else {
            removeFromCollections(id)
        }

        setIsBookmarked(!isBookmarked)
    }


    return (
    <div id={id} className='p-6 rounded-lg shadow-md bg-[#0B0D12]'>
        <div className="flex mb-3 justify-between">
            <Link to={`/question/${id}`}><h1 className='text-lg font-semibold pr-6 max-[1500px]:text-[16px]'>{title || "Title Here"}</h1></Link>
            <button onClick={toggleBookmark} className='text-yellow-500 text-xl flex-none'>
                {isBookmarked ? <FaStar /> : <FaRegStar />}
            </button>
        </div>
        <div className='flex flex-wrap gap-2 mb-3'>
            {
                tags ? tags.map((item) =>{
                    return (<Tag text={item}/>)
                })
                :
                <Tag text={"hello"}/>
                
            }
        </div>
        <div className='flex justify-between'>
            <div className='flex gap-2'>
                <img className='w-6 h-6 rounded-full' src={imgSrc || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s"} alt="" />
                <p className="text-white font-semibold max-[1500px]:text-[14px]">{author ?? "user"}</p>
                <span className="text-gray-500 max-[1500px]:text-[14px] max-[1362px]:text-[12px]">• {asked ?? ""}</span>
            </div>
            <div className='flex gap-4'>
                <button className='flex items-center gap-2'><FaThumbsUp  className='text-[#1DA1F2]'/><span className='max-[1418px]:text-[11px]'>Votes {votes ?? 0 }</span></button>
                <button className='flex items-center gap-2'><FaComment className='text-[#1DA1F2]'/><span className='max-[1418px]:text-[11px]'>Answers {comments ? comments.length : 0 }</span></button>
                <button className='flex items-center gap-2'><FaEye className='text-[#1DA1F2]'/><span className='max-[1418px]:text-[11px]'>Views {views ?? 0 }</span></button>
            </div>
        </div>
    </div>
  )
}

export default ExpandableCard