import React from 'react'
import { createContext, useState, useEffect } from "react";

export const ChatContext =createContext();

const ChatContextProvider = ({children}) => {
const [chatData, setChatData] = useState([]);
const [selected, setSelected] = useState(null);

const setData = (formData) => {
  localStorage.setItem('chatData', JSON.stringify([...chatData.filter(v => typeof v === "object"), formData]));
}

useEffect(() => {
  setChatData(JSON.parse(localStorage.getItem('chatData'))?JSON.parse(localStorage.getItem('chatData')):[]);
  // setSelected(null);
  }, []);
  
  return (
    <ChatContext.Provider value={{ chatData, selected, setSelected, setChatData, setData }}>{children}</ChatContext.Provider>
  )
}

export default ChatContextProvider