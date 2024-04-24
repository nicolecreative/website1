import React, { useState, useEffect } from 'react';
import MainComponent from './Components/Main';
import Sidebar from './Components/Sidebar';
import MobileFooter from './Components/MobileFooter';
import './App.css'; // Import common styles

function App() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [selectedButton, setSelectedButton] = useState(1); // State for selected button
  const [pageState, setPageState] = useState('home'); // State for the current page

  useEffect(() => {
    // Check if the device supports touch events
    const onTouchStart = () => setIsTouchDevice(true);
    document.addEventListener('touchstart', onTouchStart, { passive: true });

    return () => {
      document.removeEventListener('touchstart', onTouchStart);
    };
  }, []);

  // Log the selected button state
  useEffect(() => {
    console.log('Selected Button:', selectedButton);
  }, [selectedButton]);

  // Log the page state
  useEffect(() => {
    console.log('Page State:', pageState);
  }, [pageState]);

  const handleLogoClick = () => {
    setPageState('home');
  };

  
  return (
    <div className={`App ${isTouchDevice ? 'touch-device' : 'non-touch-device'}`}>
      <header className="App-header">
      <div className="mobile-header">
      <div className="mobile-logo" onClick={handleLogoClick}>
        <a href="/" className="nicolebachman.com/home">
          <img src={"https://nicolecreative.github.io/website1/nlogo.png"} alt="Logo" />
        </a>
      </div>
            
      </div>
        <div className="sidebar-wrapper">
          {/* Pass down the selectedButton state and setSelectedButton function to Sidebar */}
          <Sidebar selectedButton={selectedButton} setSelectedButton={setSelectedButton} setPageState={setPageState} pageState={pageState} />
        </div>
        <div className="main-wrapper">
          {/* Pass down selectedButton, pageState, and setPageState to MainComponent */}
          <MainComponent selectedButton={selectedButton} pageState={pageState} setPageState={setPageState} className="mainComp"/>
        </div>
        <div className="mobile-footer">
          {/* Pass down selectedButton, pageState, and setPageState to MainComponent */}
          <MobileFooter  setPageState={setPageState} />
        </div>
        

      </header>
    </div>
  );
}

export default App;
