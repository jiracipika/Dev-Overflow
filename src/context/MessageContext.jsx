import React, { useState, useContext, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import axios from '../utils/axios';
import { MessageContext } from './messageContextBase';

export const MessageProvider = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();

  useEffect(() => {
    socket.current = io('ws://localhost:5173');
    socket.current.on('getMessage', (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });

    return () => socket.current.disconnect();
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    if (!user?._id) return;

    socket.current.emit('addUser', user._id);
    socket.current.on('getUsers', (users) => {
      console.log(users);
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      if (!user?._id) return;

      try {
        const res = await axios.get('/conversations/' + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user?._id]);

  useEffect(() => {
    const getMessages = async () => {
      if (!currentChat?._id) {
        setMessages([]);
        return;
      }

      try {
        const res = await axios.get('/messages/' + currentChat._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e, newMessage) => {
    e.preventDefault();

    const text = newMessage.trim();
    if (!text || !user?._id || !currentChat?._id) return false;

    const message = {
      sender: user._id,
      text,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    try {
      const res = await axios.post('/messages', message);
      setMessages((previousMessages) => [...previousMessages, res.data]);
      socket.current.emit('sendMessage', {
        senderId: user._id,
        receiverId,
        text,
      });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return (
    <MessageContext.Provider
      value={{
        messages,
        currentChat,
        conversations,
        setCurrentChat,
        handleSubmit,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = () => useContext(MessageContext);
