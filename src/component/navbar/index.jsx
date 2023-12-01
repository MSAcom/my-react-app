import React, { useState } from 'react'
import logo from '../header/logo3-0-removebg-preview.png'
import './index.css'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const menuToggle = () => {
    setShowMenu(!showMenu)
}

  return (
      <nav>
          <div className="toggleBtn" onClick={()=>menuToggle()}>
              <span className='line'></span>
              <span className='line'></span>
              <span className='line'></span>
          </div>
          <ul className={showMenu ? "menu active" : "menu"}>
            <div className="toggleBtn black" onClick={()=>menuToggle()}>
              <span className='line'></span>
              <span className='line'></span>
              <span className='line'></span>
          </div>
              <li className='link'> <a href="">Home</a></li>
              <li className='link'><a href="">Menu</a></li>
              <li className='link'><a href="">Contact</a></li>

          </ul>

          <img src={logo} alt="logo" className='logo'/>

          <button>Make a reservation</button>
    </nav>
  )
}

export default Navbar