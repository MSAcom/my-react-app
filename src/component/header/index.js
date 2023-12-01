import './index.css';
import React, { useState, useEffect } from 'react';
import logo from './logo3-0-removebg-preview.png'
import burger from './burger-sans-fond.png';
import croix from './croix-épurée.png';
import banner from "../../images/image-accueil.jpg"
import Navbar from '../navbar';
function Header () {
    
   

    return (
        
        <header className='header'>
            
          <Navbar/>
            <div className='hero_container'>
        <img src={banner} alt='banner intérieur restaurant' className='hero_banner' />
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