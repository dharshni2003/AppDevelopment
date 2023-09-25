import React from 'react'
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../../../Redux/userSlice';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Sidebar() {
    const navRef = useRef();
    const user = useSelector(selectUser);
    const username = user.user && user.user.username ? user.user.username : 'Guest';
  const showNavbar = ()=> {
       navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <div className="body67">
    <header>

    
    <nav ref={navRef}>
    
    <a href="/#">WEATHERLIVE!</a> 
    <Link to="/"><i class="fa-solid fa-house"></i> Home</Link> 
    <Link to="/login"><i class="fa-solid fa-right-to-bracket"></i>Login</Link>
    <Link to="/register"><i class="fa-regular fa-registered"></i>Register</Link>
    <Link to="/weather"><i class="fa-solid fa-cloud"></i>Tracker</Link>
    <Link to="/login">Logout  </Link>
    <div className="user">
    {username}
    </div>
    
    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
    </button>
    </nav>
    <button className="nav-btn" onClick={showNavbar}>
       <FaBars/>
    </button>
    </header>
    <div>
  <div className="primary-nav">
    <button href="#" className="hamburger open-panel nav-toggle">
      <span className="screen-reader-text">Menu</span>
    </button>
    <nav role="navigation" className="menu">
      <a href="#" className="logotype">
        DASH<span>BOARD</span>
      </a>
      <div className="overflow-container">
        <ul className="menu-dropdown">
        
          <li>
            <Link to="/about">AboutUS</Link>
            <span className="icon">
              <i className="fa fa-dashboard" />
            </span>
          </li>
          <li className="menu-hasdropdown">
            <Link to="/feedback">Feedback</Link>
            <span className="icon">
            <i class="fa-regular fa-note-sticky"></i>
            </span>
            
           
            
            <label title="toggle menu" htmlFor="settings">
              
            </label>
            
          </li>
          
          <li>
            <Link to="/Faq">FAQ</Link>
            <span className="icon">
            <i class="fa-solid fa-question"></i>
            </span>
            </li>
            <li>
            <Link to="/contactus">Contact us</Link>
            <span className="icon">
            <i class="fa-solid fa-phone"></i>
            </span>
          </li>
          <li>
          <Link to="/privacy">Privacy Policy </Link>
            <span className="icon">
            <i class="fa-solid fa-lock"></i>
            </span>
            </li>
            <li>
            <Link to="/terms">Terms & Conditions</Link>
            <span className="icon">
            <i class="fa-solid fa-check"></i>
            </span>
            </li>
        </ul>
        
      </div>
    </nav>
  </div>
  
</div>
</div>

  )
}
