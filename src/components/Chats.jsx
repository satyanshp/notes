import React, { useContext } from 'react';
import './styles/Chats.css';
import Blank from './subComponents/Blank';
import AllChats from './AllChats';
import { ChatContext } from '../context/chatsContext';

const Chats = () => {
  const { selected } = useContext(ChatContext);
  return (
    <div className='ChatSection'>
      {
        selected||selected===0 
        ? <AllChats />
        : <Blank/>
      }
    </div>

  )
}

export default Chats