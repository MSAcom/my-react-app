import React, { useState } from 'react'
import Logo from "../../images/logo3-0-removebg-preview.png"
import './index.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false) 

    const menuToggle = () => { 
    setShowMenu(!showMenu) //inverse donc devient true
    }

  return (
    <nav>
      <div className="toggleBtn" onClick={()=>menuToggle()}> 
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
      </div>

      <ul className={showMenu ? "menu active" : "menu"}>
        <div className="toggleBtn black" onClick={() => menuToggle()}>
          <span className='line'></span>
          <span className='line'></span>
        </div>
          
        <div className="menu_link">
          <li className='link'> <a href={'/'}>Home</a></li>
          <li className='link'><a href={'/about'}>About</a></li>
          <li className='link'><a href={'/menu'}>Menu</a></li>
          <li className='link'><a href={'/reservation'}>Réservations</a></li> 
          <li className='link'><a href={'/events'}>Events</a></li>
          <li className='link'><a href={'/contact'}>Contact</a></li>  
        </div>
      </ul>

      <img src={Logo} alt="logo" className='logo'/>
      <button className='reservationBtn'>réservation</button>
    </nav>
  )
}

export default Navbar