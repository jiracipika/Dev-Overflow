import React from 'react';
import { useSelector } from 'react-redux';
import { useMessages } from '../context/MessageContext';
import MessageBox from './MessageBox';

const MessageBoxes = () => {
  const { messages } = useMessages();
  const { user } = useSelector((state) => state.auth);

  return (
    <div
      className="bg-[#ddddf7] h-[calc(100%_-_100px)] overflow-scroll p-[5px]"
      alt="messages"
    >
      {messages.map((message, index) => (
        <MessageBox
          key={message._id ?? index}
          text={message.text}
          isSending={message.sender === user?._id}
          timestamp={message.createdAt}
        />
      ))}
    </div>
  );
};

export default MessageBoxes;
