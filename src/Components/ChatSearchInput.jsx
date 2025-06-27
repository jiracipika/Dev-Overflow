import React, { useState } from 'react'
import { FaMagnifyingGlass, FaMoon } from 'react-icons/fa6'
import { useMessages } from '../context/MessageContext'

const ChatSearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { chats, setCurrentChat } = useMessages()

  // Filter chats based on search term
  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleChatClick = (chat) => {
    setCurrentChat(chat)
  }

  return (
    <div className='border-b-[gray] border-b border-solid bg-[#3e3c61]'>
      <div className='flex items-center gap-[10px] p-[10px]'>
        <FaMagnifyingGlass className='text-[#7B8EC8] h-[24px] w-[24px]' />
        <input 
          className='bg-[transparent] text-[#7B8EC8] border-[none] outline-none w-full' 
          type="text" 
          placeholder='Search User'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className='overflow-y-auto max-h-[200px]'>
        {filteredChats.map((chat) => (
          <div 
            key={chat.id}
            className='p-[10px] flex items-center gap-[10px] text-[#7B8EC8] cursor-pointer hover:bg-[#2f2d52] transition-colors duration-200'
            onClick={() => handleChatClick(chat)}
          >
            <img 
              className='w-[50px] h-[50px] rounded-[50%] object-cover' 
              src={chat.avatar || ''} 
              alt={chat.name}
            />
            <div className='flex flex-col'>
              <span className='font-medium'>{chat.name}</span>
              <span className='text-[#7B8EC8] text-sm'>{chat.lastMessage?.text || 'No messages yet'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatSearchInput