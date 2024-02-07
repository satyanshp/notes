import React from 'react'
import '../styles/Notes.css'

const Note = ({noteData}) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = (dt) => {
    const format = (d) => {
      const indDateTime = new Date(d).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
      const date = indDateTime?.split(", ")[0];
      const time = indDateTime?.split(", ")[1];
      const hour = time?.split(":")[0];
      const minute = time?.split(":")[1];
      const am = time?.split(" ")[1];
      const breakedDate = date?.split("/");
      const monthName = months[Number(breakedDate[0])-1];
      const formatedDate = `${breakedDate[1]} ${monthName} ${breakedDate[2]}`;
      const formatedTime = `${am?hour:Number(hour)}:${minute} ${am}`
      return { 
        date:formatedDate,
        time:formatedTime
      }
    }
    if(typeof dt === "string"){
      return format(dt);
    }
    if(typeof dt === 'object'){
      const dateString = (dt.toISOString());
      return format(dateString);
    }
  }
  return (
    <div className='note'>
        <section className='note-text'>
          {noteData.note}  
        </section>
        <section className='note-details'>
            <p>
                <span>{date(noteData?.date)?.date}</span>
                <span className='dot'></span>
                <span>{date(noteData?.date)?.time}</span>
            </p>
        </section>
    </div>
  )
}

export default Note