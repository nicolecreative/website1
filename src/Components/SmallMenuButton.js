import React from 'react';

function SmallMenuButton({ isSelected, handleSelect }) {
  return (
    <div>
      {/* Use conditional rendering to display the button based on the selected state */}
      <img
        src={isSelected ? "https://nicolecreative.github.io/website1/bluebutton.png" : "https://nicolecreative.github.io/website1/greybutton.png"}
        alt="Button"
        onClick={handleSelect} // Handle button selection
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}

export default SmallMenuButton;
