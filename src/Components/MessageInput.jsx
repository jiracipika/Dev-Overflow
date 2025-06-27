import React, { useState } from 'react';
import { useMessages } from '../context/MessageContext';
import attachment_icon from '../assets/Images/attach.png';

const MessageInput = () => {
  const [newMessage, setNewMessage] = useState('');
  const { handleSubmit } = useMessages();

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, newMessage);
        setNewMessage('');
      }}
      className="h-[50px] bg-[white] p-[10px] flex items-center justify-between"
      alt="input"
    >
      <div className="flex items-center gap-[10px]">
        <input
          type="file"
          id="file"
          style={{ display: 'none' }}
          accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.txt"
        />
        <label htmlFor="file" className="cursor-pointer">
          <img className="h-[24px] w-[24px]" src={attachment_icon} alt="Attach" />
        </label>
      </div>

      <input
        className="flex-1 border-none outline-none text-[#2f2d52] text-[18px] px-[10px]"
        type="text"
        placeholder="Type Something..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />

      <button
        type="submit"
        className="border-none px-[15px] py-2.5 text-[white] bg-[#8da4f1] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;
