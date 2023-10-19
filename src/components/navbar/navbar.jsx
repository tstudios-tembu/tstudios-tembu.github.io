import React, {useState} from 'react'
import './navbar.css'
import logo_nav from "../../assets/logo_navbar.png"
import telegram from "../../assets/telegram.png"

const Navbar = () => {

  return (
    <nav className='navbar'>
      <div className='internalLinks'>
        <img className="logo_nav" src={logo_nav} alt="Ha Thu" />
        <div className="allNavbarItems">
          {/* <div activeClass="active" to='experiencesSec' spy={true} smooth={true} className="navbarItem">Inventory</div>
          <div activeClass="active" to='projectsSec' spy={true} smooth={true} className="navbarItem">Events</div>
          <div activeClass="active" to='aboutSection' spy={true} smooth={true} className="navbarItem">EXCO</div> */}
      </div>
      </div>
      <div className="externalLinks">
        <a href='https://t.me/+kY_0zp0_F8owZTk1' target="_blank" rel="noreferrer noopener">
          <img className="telegram" src={telegram} alt=""/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar