import React from 'react';

function Tag1({ categories }) {
  // Map category numbers to category names
  const categoryMap = {
    1: 'Branding',
    2: 'UI',
    3: 'Glitch',
    4: 'Motion',
  };

  return (
    <div className="tagContainer">
      {categories.map((category, index) => (
        <div key={index} className="pill">
          <h3>{categoryMap[category] || 'Unknown'}</h3>
        </div>
      ))}
    </div>
  );
}

export default Tag1;
