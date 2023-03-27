import React from 'react'
import './Footer.css'

const Footer = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
      };
  return (
    <div className='footer'>
        <div className='footer-break'></div>
        <div className='footer-container'>
            <div className='footer-text'>2022 Luke Mifflen. All rights reserved.</div>
            <div className='footer-icon'>
                <img src='./linkedin.svg' alt='' onClick={() => openInNewTab('https://www.linkedin.com/in/luke-mifflen/')}/>
            </div>
        </div>
    </div>
  )
}

export default Footer