import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { BsSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { PiDotsSixVerticalLight } from "react-icons/pi";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : ''} ${isSidebarHidden ? 'hidden' : ''}`}>
      <div className="nav-header">
        <div className="user-section">
          <div className="user-avatar"><CgProfile /></div>
          <span>Log In</span>
        </div>
      </div>
      
      <div className="nav-links">
        <Link to="/" className="nav-item active">
          <span className="icon"><PiDotsSixVerticalLight /></span>
          Platform Launch
        </Link>
        <Link to="/marketing" className="nav-item">
          <span className="icon"><PiDotsSixVerticalLight /></span>
          Marketing Plan
        </Link>
        <Link to="/roadmap" className="nav-item">
           <span className="icon"><PiDotsSixVerticalLight /></span>
          Roadmap
        </Link>
      </div>
      
      <div className="nav-footer">
        <button className="create-board">+ Create New Board</button>
        <div className="theme-toggle">
          <span className="sun-icon"><BsSunFill /></span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            <span className="slider round"></span>
          </label>
          <span className="moon-icon"><BsFillMoonStarsFill /></span>
        </div>
        <button 
          className="hide-sidebar"
          onClick={() => setIsSidebarHidden(!isSidebarHidden)}
        >
          Hide Sidebar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;