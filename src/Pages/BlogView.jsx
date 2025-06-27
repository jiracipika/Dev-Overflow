import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from "../data/blogData.js";
import Tag from '../Components/Tag.jsx'
import ShareIcon from '../assets/Icons/share-icon.svg';
import CommentIcon from '../assets/Icons/comment-icon.svg';
import LikeIcon from '../assets/Icons/like-icon.svg';
import PostAComment from '../Components/PostAComment';

const BlogView = () => {
  const [user, setUser] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [authorName, setAuthorName] = useState('');

  let params = useParams();

  useEffect(() => {
    const data = blogPosts.find(post => post.id == params.id);
    setUser(data);
  }, [params.id])

  const getReadingTime = (text) => {
    const words = text.split(' ').length;
    return Math.ceil(words / 200); // Assuming 200 words per minute
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: user?.title,
        text: user?.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  const handleCommentSubmit = async (commentText) => {
    if (!authorName.trim()) {
      throw new Error('Please enter your name');
    }

    const newCommentData = {
      id: Date.now(),
      text: commentText,
      author: authorName,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      avatar: 'default-avatar.png'
    };

    setComments(prev => [newCommentData, ...prev]);
    setAuthorName('');
  };

  return (
    <div className='min-h-screen text-white p-6 max-h-fit w-[calc(100%-330px)] bg-gradient-to-r from-[#0A0B10] to-black'>
      <div className="flex justify-between items-center mb-6">
        <Link to="/blog" className="text-blue-400 hover:text-blue-300">
          ← Back to Blog
        </Link>
        <button 
          onClick={handleShare}
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <img src={ShareIcon} alt="Share" className="w-5 h-5" />
          Share
        </button>
      </div>

      {user && (
        <>
          <div className="mb-6">
            <img src={user.imageUrl} alt="" className="rounded-lg mb-4" />
            <h1 className="text-3xl font-bold mb-2">{user.title}</h1>
            <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
              <span>{user.date}</span>
              <span>•</span>
              <span>{getReadingTime(user.description)} min read</span>
            </div>

            <div className='flex flex-wrap gap-2 mb-3'>
              {user.tags ? user.tags.map((item) => (
                <Link key={item} to={`/tags`}>
                  <Tag text={item} />
                </Link>
              )) : <Tag text={"hello"} />}
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <h3 className="text-gray-400">{user.author.name}</h3>
                <img 
                  className="w-10 h-10 rounded-full"
                  src={user.author.avatar} 
                  alt="" 
                />
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleLike}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                >
                  <img src={LikeIcon} alt="Like" className="w-5 h-5" />
                  {likes}
                </button>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p>{user.description}</p>
            </div>

            <div className="mt-12 border-t border-gray-700 pt-6">
              <h2 className="text-2xl font-bold mb-4">Comments</h2>
              
              {/* Author Name Input */}
              <div className="mb-4">
                <label className="text-gray-400 block mb-2">Your Name</label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Comment Form */}
              <div className="mb-6">
                <PostAComment onCommentSubmit={handleCommentSubmit} />
              </div>

              {/* Comments List */}
              <div className="space-y-4">
                {comments.length === 0 ? (
                  <p className="text-gray-400 text-center">No comments yet. Be the first to comment!</p>
                ) : (
                  comments.map((comment, index) => (
                    <div key={index} className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-4 mb-2">
                        <img 
                          src={comment.avatar}
                          alt={`${comment.author} avatar`}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <h3 className="font-medium">{comment.author}</h3>
                          <p className="text-xs text-gray-400">{comment.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-300">{comment.text}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default BlogView