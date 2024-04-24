import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TitleTag from './TitleTag';
import './Project.css';
import './TitleTag.css';

function Project({ title, category, pimage }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="projectComp" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="projectImage">
        <img src={pimage} alt={title} />
      </div >

      <div className='titleCat'>
      <TitleTag category={category} title={title} hovered={hovered} />
      </div>
    </div>
  );
}

export default Project;
