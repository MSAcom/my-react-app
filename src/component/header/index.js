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
                <img src={Qyru} alt="qyru log" className='hero_banner' />
                <img src={ResponsiveQyru} alt='logo qyru'  className='hero_banner_responsive'/>
            </div>
        </header>
    )
}



export default Header;

/*
  <div className="presbloc">
                <div className='header-texte'>
            <div className="toggle-btn" onClick={toggleHeader}>

                <img src={burger} className={`burger ${isActive ? 'active' : ''}`} alt="burger" />
                 <img src={croix} className={`croix ${isActive ? 'active' : ''}`} alt="croix" />
            </div>
                 <div className='logo' >
                    <img src={logo} alt = 'logo'></img>
                </div>
                    <nav class="navbar">


                        <ul>
                            <li className="text">Home</li>
                            <li className="text">Menus</li>
                            <li className="text">Contact</li>
                        </ul>

                    </nav>
                     
                </div>
            </div>
            */