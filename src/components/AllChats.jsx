import React, { useContext, useState } from 'react'
import { getTitleHeader } from './subComponents/Title'
import send from '../assets/send.svg'
import back from '../assets/back.svg'
import sendac from '../assets/sendac.svg'
import './styles/AllChats.css'
import Note from './subComponents/Note'
import { ChatContext } from '../context/chatsContext'

const AllChats = () => {
  const { selected, setSelected, chatData, setChatData } = useContext(ChatContext);
  const [note, setNote] = useState('');
  const noteData = {
    note,
    date: new Date(),
  }
  const handleSend = () => {
    setChatData([...chatData.filter(v => typeof v === "object"), chatData[selected].notes.push(noteData)]);
    console.log(chatData);
    localStorage.setItem('chatData', JSON.stringify([...chatData.filter(v => typeof v === "object")]));
    setNote('');
  }
  return (
    <div className='allChats'>
        <section className='chatHeader'>
          {window.innerWidth <600 && <>
            <div onClick={()=>setSelected(null)} style={{cursor:'pointer'}}>
              <img src={back} alt="back" />
            </div>
          </>}
          <div
            className={`title_container`}
            style={{paddingInline:'3%'}}
          >
            <span style={{background:chatData[selected].color}}>{getTitleHeader(chatData[selected].name)}</span>
            <h2 style={{color:'#fff'}}>{chatData[selected].name}</h2>
          </div>
        </section>
        <section className='chatAll-container'>
          <div className='chatAll'>
            {chatData[selected]?.notes?.map((item,index)=>(<Note key={`${item.note.slice(0,5)}-${index}`} noteData={item}/>))}
          </div>
        </section>
        <section className='sendMessageContainer'>
          <textarea type="textarea" placeholder='Enter your text here...........' value={note} onChange={(e)=>setNote(e.target.value)} />
          <img src={note?sendac:send} alt="send" onClick={handleSend} style={{cursor:'pointer'}} />
        </section>
    </div>
  )
}

export default AllChats