import React, { useEffect } from 'react';
import LargeButton from './LargeButton';
import './Navigation.css';

// Navigation.js
function Navigation({ selectedButton, setSelectedButton }) {
  // Function to handle button selection
  const handleButtonSelect = (buttonId) => {
    // Check if the clicked button is already selected
    if (selectedButton === buttonId) {
      // If already selected, deselect the button
      setSelectedButton(1);
    } else {
      // Otherwise, select the clicked button
      setSelectedButton(buttonId);
    }
  };

  console.log('Selected Button (Navigation):', selectedButton);

  return (
    <div className="nav">
      {/* Render LargeButton components and pass down the handleButtonSelect function and selectedButton prop */}
      <LargeButton
        buttonId={1}
        selectedButton={selectedButton}
        handleButtonSelect={handleButtonSelect}
        buttonName={"index"}
      />
      <LargeButton
        buttonId={2}
        selectedButton={selectedButton}
        handleButtonSelect={handleButtonSelect}
        buttonName={"branding"}
      />
      <LargeButton
        buttonId={3}
        selectedButton={selectedButton}
        handleButtonSelect={handleButtonSelect}
        buttonName={"motion"}
      />
      <LargeButton
        buttonId={4}
        selectedButton={selectedButton}
        handleButtonSelect={handleButtonSelect}
        buttonName={"UI"}
      />
     
    </div>
  );
}




export default Navigation;

