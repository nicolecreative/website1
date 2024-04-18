import React, { useState } from 'react';
import './DownloadText.css';

function DownloadText({ text, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="download-text" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h3>{text}</h3>
        <img src={isHovered ? 'https://nicolecreative.github.io/website/green.png' : 'https://nicolecreative.github.io/website/download1.png'} alt="Download Icon" />
      </a>
    </div>
  );
}

export default DownloadText;
