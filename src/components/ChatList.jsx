import React, { useContext, useState } from 'react'
import Title from './subComponents/Title'
import './styles/ChatList.css'
import { ChatContext } from '../context/chatsContext'

const ChatList = () => {
  const { chatData, setChatData, setData } = useContext(ChatContext);
  const colorArr = [
    'rgba(179, 139, 250, 1)',
    'rgba(255, 121, 242, 1)',
    'rgba(67, 230, 252, 1)',
    'rgba(241, 149, 118, 1)',
    'rgba(0, 71, 255, 1)',
    'rgba(102, 145, 255, 1)'
  ]
  const [popup, setPopup] = useState(false);
  const [name, setName] = useState('');
  const [color, setColor] = useState('#000');
  const formData = {
    name,
    color,
    notes: [],
  }
  const handleCreate = () => {
    if(name !== '' && color !== '#000') {
      setChatData((prevState)=>[...prevState, formData]);
      setData(formData);
      setPopup(false);
    }
  }
  return (
    <div className='chatList_main'>
      <h1>Pocket Notes</h1>
      <section className='chatList__container'>
        {
          chatData?.filter(v => typeof v === "object")?.map((item,index)=>(
            <Title key={`${item.name}-${index}`} title={item.name} color={item.color} index={index} />
          ))
        }
      </section>
      <div className='addNew__notes' onClick={()=>setPopup(true)}><p>+</p></div>
      {popup&&<>
        <div className='dialog'>
            <h2>Create New group</h2>
            <form>
              <div className='form_field'>
                <label htmlFor="grpName">Group Name</label>
                <input type="text" required name="grpName" id="grpName" placeholder='Enter group name' onChange={(e)=>setName(e.target.value)} />
              </div>
              <div className='form_field'>
                <label>Choose colour</label>
                <div>
                  <ul>
                    {colorArr.map((item,index)=>(<li key={`${item}-${index}`} style={{background:item,cursor:'pointer'}} onClick={()=>setColor(item)}></li>))}
                  </ul>
                </div>
              </div>
              <button onClick={handleCreate}>Create</button>
            </form>
        </div>
        <div className='shadow' onClick={()=>setPopup(false)}></div>
      </>}
    </div>
  )
}

export default ChatList