import React from 'react';
import background from '../../assets/background.svg';
import lock from '../../assets/lock.svg';
import '../styles/Blank.css';

const Blank = () => {
  return (
    <div className='blank'>
        <div className='blank_container'>
            <img src={background} alt="select a chat" />
            <h2>Pocket Notes</h2>
            <p>
                Send and receive messages without keeping your phone online.
                Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
        </div>
        <div className='encripted'>
            <img src={lock} alt="lock" />
            <p>end-to-end encrypted</p>
        </div>
    </div>
  )
}

export default Blank