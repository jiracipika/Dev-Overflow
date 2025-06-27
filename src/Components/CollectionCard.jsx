import { FaStar, FaRegStar, FaRegThumbsUp, FaEye, FaComment } from "react-icons/fa";

const CollectionCard = ({title, author, asked, votes, answers, views, tags, id, imgSrc}) => {


  return (
    <div id={id} className="p-8 rounded-lg shadow-md bg-[#0B0D12]">
      {/* Question Title and Star Icon */}
      <div className="flex mb-4 justify-between">
        <h3 className="text-xl font-semibold pr-6">{title}</h3>
        <button onClick={handleToggleBookmark} className="text-yellow-500 text-xl flex-none ml-4">
          {isBookmarked ? <FaStar /> : <FaRegStar />}
        </button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-[#161A22] text-[#7B8EC8] px-4 py-2 text-sm rounded-md">
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom Section - Profile, Votes, Answers, Views */}
      <div className="flex justify-between items-center text-gray-400 text-sm mt-4">
        {/* Left Section - Profile Picture, Username, and Time */}
        <div className="flex items-center space-x-3">
          <img src={imgSrc} alt="User" className="w-10 h-10 rounded-full" />
          <span className="text-white font-semibold text-base">{author}</span>
          <span className="text-gray-500">• {asked}</span>
        </div>

        {/* Right Section - Votes, Answers, Views */}
        <div className="flex space-x-8">
          <span className="flex items-center">
            <FaRegThumbsUp className="text-[#1DA1F2] mr-2" />Votes {votes}
          </span>
          <span className="flex items-center">
          <FaComment className='text-[#1DA1F2] mr-2'/>Answers {answers}
          </span>
          <span className="flex items-center">
            <FaEye className='text-[#1DA1F2] mr-2'/>Views {views}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;