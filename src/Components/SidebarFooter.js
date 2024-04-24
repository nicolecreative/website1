import React, { useState } from 'react';
import DownloadText from './DownloadText';
import './About.css';
import './DownloadText.css';

function SidebarFooter({ setPageState }) {
  const [aboutMeHovered, setAboutMeHovered] = useState(false);
  const [generativeArtHovered, setGenerativeArtHovered] = useState(false);

  // Function to handle clicking on "about me" section
  const handleAboutClick = () => {
    // Update page state to 'about' when "about me" is clicked
    setPageState('about');
  };

  // Function to handle clicking on "generative art" section
  const handleGenerativeArtClick = () => {
    // Update page state to 'generativeart' when "generative art" is clicked
    setPageState('generativeart');
  };

  return (
    <div>
      <div className='topButtons'>
        <div className="artButton">
          <img
            src={generativeArtHovered ? "https://nicolecreative.github.io/website1/blueartbutton.png" : "https://nicolecreative.github.io/website1/artbutton.png"}
            onClick={handleGenerativeArtClick}
            onMouseEnter={() => setGenerativeArtHovered(true)}
            onMouseLeave={() => setGenerativeArtHovered(false)}
          />
        </div>
        <div className="aboutme">
          <img
            src={aboutMeHovered ? "https://nicolecreative.github.io/website1/blueaboutme.png" : "https://nicolecreative.github.io/website1/aboutme.png"}
            alt="aboutme"
            onClick={handleAboutClick}
            onMouseEnter={() => setAboutMeHovered(true)}
            onMouseLeave={() => setAboutMeHovered(false)}
          />
        </div>
      </div>

      <div id="downloads">
        <DownloadText text="pdf portfolio" link="https://youtube.com" />
        {/* Change the link to the direct download link of the resume */}
        <DownloadText text="resume" link="https://nicolecreative.github.io/website1/resume.pdf" />
      </div>
    </div>
  );
}

export default SidebarFooter;

