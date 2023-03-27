import React, { useState } from 'react'
import Contact from './Contact';
import "./ChatPopup.css";
// import { AiFillMessage, AiOutlineMessage } from 'react-icons/ai';

//use AiOutlineMessage to show notification when message is unread
const ChatPopup = () => {
    const [show, setShow] = useState(false);
  return (<div>
    <div className={show ? "popup show" : "popup"}>
        <Contact show={show} />
        
        </div>
        
        <div className={show ? 'chat-btn' : "chat-btn-active"} onClick={() => setShow(!show)} >Let's Talk</div>
        </div>
  )
}

export default ChatPopup