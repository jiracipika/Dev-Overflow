import React, { useState, useEffect } from 'react';
import articles from '../assets/FakeData.js'
import Tag from '../Components/Tag.jsx'
import { useParams } from 'react-router-dom'
import PostAComment from '../Components/PostAComment.jsx'

const QuestionView = () => {

  const [article, setArticle] = useState(null);
  const [showCommentForm, setShowCommentForm] = useState(false);
  let params = useParams();

  useEffect(()=> {
    const data = articles.find(x => x.id == params.id);
    console.log(data)
    setArticle(data);
  }, [])

  const handleCommentSubmit = async (commentText) => {
    if (!article) return;

    // Update the article's comments in state
    const newComment = {
      comment: commentText,
      author: "Current User", // You would get this from auth state
      date: "just now"
    };

    // Create a new copy of the article with the new comment
    const updatedArticle = {
      ...article,
      comments: [...article.comments, newComment]
    };

    // Update the state
    setArticle(updatedArticle);

    // In a real app, you would make an API call here
    // await api.postComment(article.id, commentText)
  };

  return (
    <div className='min-h-screen text-white p-6 max-h-fit w-[calc(100%-330px)] bg-gradient-to-r from-[#0A0B10] to-black'>
      {article && (
        <>
        <h1 className='text-4xl font-bold mb-4'>{article.title}</h1>
        <div className='flex gap-3 py-4 text-gray-400'>
          <h3>Asked {article.asked}</h3>
          <h4>{article.likes} Likes</h4>
          <h4>{article.views} Views</h4>
        </div>

        <div className='mb-6'>
          <div className='flex flex-wrap gap-2 mb-3'>
            {
                article.tags ? article.tags.map((item) =>{ //
                    return (<Tag text={item}/>)
                })
                :
                <Tag text={"hello"}/>
                
            }
          </div>

          <div className='flex items-center gap-2 justify-self-end text-sm text-gray-400'>
            <p>Asked By</p>
            <p>{article.author}</p>
          </div>
        </div>

        <div className='prose prose-invert max-w-none'>
          <p className='text-lg leading-relaxed'>{article.content}</p>
        </div>

        
        <div className='py-4'>
          <h2 className='text-2xl font-semibold mb-4'>Comments</h2>
          <div className='space-y-6'>
            {article.comments.map((comment, index) => (
              <div key={index} className='bg-[#1A1B20] rounded-lg p-6 transition-all duration-200 hover:bg-[#202128]'>
                <div className='flex justify-between items-start mb-4'>
                  <div>
                    <div className='flex items-center gap-3'>
                      <div className='w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-sm font-medium'>{comment.author.charAt(0).toUpperCase()}</div>
                      <div>
                        <p className='font-medium'>{comment.author}</p>
                        <p className='text-sm text-gray-400'>Commented {comment.date || 'today'}</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-2'>
                    <button className='text-sm text-blue-400 hover:text-blue-500 transition-colors'>Share</button>
                    <button className='text-sm text-blue-400 hover:text-blue-500 transition-colors'>Follow</button>
                  </div>
                </div>
                <div className='prose prose-sm prose-invert max-w-none'>
                  <p>{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-center mt-8 gap-4'>
          <button 
            onClick={() => setShowCommentForm(!showCommentForm)}
            className='bg-custom-gradient p-4 rounded-lg font-semibold'
          >
            Post a Comment
          </button>
        </div>

        {showCommentForm && (
          <div className='mt-8'>
            <PostAComment onCommentSubmit={handleCommentSubmit} />
          </div>
        )}
        </>
      )}
    </div>
  )
}

export default QuestionView