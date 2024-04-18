import React, { useState } from 'react';
import Navigation from './Navigation';
import SidebarFooter from './SidebarFooter';
import './Sidebar.css';

function Sidebar({ selectedButton, setSelectedButton, setPageState, pageState }) {
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle clicking on the arrow button
  const handleArrowClick = () => {
    setPageState('home');
  };

  // Function to handle clicking on the logo
  const handleLogoClick = () => {
    setPageState('home');
  };

  // Function to handle hover state
  const handleHover = () => {
    setIsHovered(true);
  };

  // Function to handle mouse leaving
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={{ height: '100vh'}}>
      <div className='logo2' onClick={handleLogoClick}>
        <a href="/" className="nicolebachman.com/home">
          <img src={'https://nicolecreative.github.io/website/nlogo.png'} alt="Logo" />
        </a>
      </div>
      
      {/* Pass down the setSelectedButton and setPageState functions to the Navigation and SidebarFooter components */}
      <div className={`navigation-wrapper ${['about', 'project1', 'project2', 'project3', 'project4'].includes(pageState) ? 'invisible' : ''}`}>
        <Navigation selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
      </div>
       
      <div className={`arrow-wrapper ${['about', 'project1', 'project2', 'project3', 'project4'].includes(pageState) ? 'visible' : ''}`}
           onMouseEnter={handleHover}
           onMouseLeave={handleMouseLeave}>
        <img src={isHovered ? 'https://nicolecreative.github.io/website/greenbackbutton.png' : 'https://nicolecreative.github.io/website/backbutton.png'} alt="Back" onClick={handleArrowClick} />
      </div>

      <div className="sidebar-footer-wrapper"> 
        <SidebarFooter setPageState={setPageState} />
      </div>
    </div>
  );
}

export default Sidebar;
