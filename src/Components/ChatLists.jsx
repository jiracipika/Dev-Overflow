import React from 'react';
import { useMessages } from '../context/MessageContext';

const ChatLists = () => {
  const { conversations, setCurrentChat } = useMessages();

  const handleChatClick = (conversation) => {
    setCurrentChat(conversation);
  };

  return (
    <div className="flex-1 overflow-y-auto p-[10px]">
      {conversations.map((conversation) => (
        <div
          key={conversation._id}
          className="flex items-center gap-[10px] text-[#7B8EC8] cursor-pointer hover:bg-[#2f2d52] transition-colors duration-200 p-[10px] rounded-md mb-[5px]"
          onClick={() => handleChatClick(conversation)}
        >
          <img
            className="w-[50px] h-[50px] rounded-[50%] object-cover"
            src="https://github.com/shadcn.png"
            alt="User Avatar"
          />
          <div className="flex flex-col flex-1">
            <div className="flex justify-between items-center">
              <span className="text-[18px] font-[500]">User</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatLists;
