import './index.css';
import React, { useState, useEffect } from 'react';
import Navbar from '../navbar';
import Qyru from '../../images/qyru.png'
import ResponsiveQyru from '../../images/logo2-0-sans-fond.png'

function Header () {
    return (
        <header className='header'>  
          <Navbar/>
            <div className='hero_container'>
                <img src={Qyru} alt="qyru log" className='hero_banner'/> 
                <img src={ResponsiveQyru} alt='logo qyru' className='hero_banner_responsive'/>
            </div>
        </header>
    )
}

export default Header;