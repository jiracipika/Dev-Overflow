import React, { useState } from 'react';
import { useMessages } from '../context/MessageContext';
import audio_call from '../assets/Images/telecommunication.png';
import video_call from '../assets/Images/video.png';
import add_friend from '../assets/Images/add-friend.png';
import more_icon from '../assets/Images/more.png';
import MessageBoxes from './MessageBoxes';
import MessageInput from './MessageInput';

const ChatBox = () => {
  const { currentChat } = useMessages();

  return (
    <div className="w-[80%] flex-2" alt="chat">
      <div
        className="h-[50px] bg-[#5d5b8d] flex items-center justify-between p-[10px] text-[lightgray]"
        alt="chatInfo"
      >
        <span>{currentChat ? 'User' : 'No chat selected'}</span>
        <div className="flex gap-[15px]" alt="chatIcons">
          <img
            className="h-[24px] cursor-pointer hover:opacity-70 transition-opacity"
            src={audio_call}
            alt="Audio Call"
            onClick={() => console.log('Audio call clicked')}
          />
          <img
            className="h-[24px] cursor-pointer hover:opacity-70 transition-opacity"
            src={video_call}
            alt="Video Call"
            onClick={() => console.log('Video call clicked')}
          />
          <img
            className="h-[24px] cursor-pointer hover:opacity-70 transition-opacity"
            src={add_friend}
            alt="Add Friend"
            onClick={() => console.log('Add friend clicked')}
          />
          <div className="relative">
            <img
              className="h-[24px] cursor-pointer hover:opacity-70 transition-opacity"
              src={more_icon}
              alt="More"
            />
          </div>
        </div>
      </div>
      <MessageBoxes />
      <MessageInput />
    </div>
  );
};

export default ChatBox;
