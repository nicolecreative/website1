import React, { useState, useEffect } from 'react';
import SmallMenuButton from './SmallMenuButton';
import './Navigation.css';

function LargeButton({ buttonId, selectedButton, handleButtonSelect, buttonName }) {
  // State to manage the selected state of the small button
  const [isSmallButtonSelected, setIsSmallButtonSelected] = useState(selectedButton === buttonId);

  useEffect(() => {
    setIsSmallButtonSelected(selectedButton === buttonId);
  }, [selectedButton, buttonId]);

  // Function to handle button click
  const handleClick = () => {
    handleButtonSelect(buttonId);
  };

  // Function to handle small button click
  const handleSmallButtonClick = () => {
    handleButtonSelect(buttonId);
  };

  return (
    <div className="large-button-container">
      {/* Render the SmallMenuButton component and pass down the selected state */}
      <SmallMenuButton
        isSelected={isSmallButtonSelected}
        handleSelect={handleSmallButtonClick} // Handle selection in SmallMenuButton
      />
      {/* Render the clickable text */}
      <h3
        className={selectedButton === buttonId ? 'selected' : ''}
        onClick={handleClick}
        style={{ cursor: 'pointer', userSelect: 'none' }}
      >
        {buttonName} 
      </h3>
    </div>
  );
}

export default LargeButton;
