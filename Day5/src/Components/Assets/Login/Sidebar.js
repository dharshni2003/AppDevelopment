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
    
    <a href="/#">WEATHER LIVE!</a> 
    <Link to="/">Home</Link> 
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
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
            <Link to="weather">Weather Today</Link>
            <span className="icon">
              <i className="fa fa-gear" />
            </span>
            <label title="toggle menu" htmlFor="settings">
              
            </label>
            <input
              type="checkbox"
              className="sub-menu-checkbox"
              id="settings"
            />
          </li>
          <li>
            <Link to="/countries">Countries</Link>
            <span className="icon">
              <i className="fa fa-heart" />
            </span>
          </li>
          
          <li>
            <Link to="/report">Report</Link>
            <span className="icon">
              <i className="fa fa-envelope" />
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
