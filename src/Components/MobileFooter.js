import React from 'react';
import DownloadText from './DownloadText';
import './About.css';
import './DownloadText.css';
import './MobileFooter.css';

function MobileFooter({ setPageState }) {
  // Function to handle clicking on "about me" section
  const handleAboutClick = () => {
    // Update page state to 'about' when "about me" is clicked
    setPageState('about');
  };

  return (
    <div className="footer-container">
      <div>
        {/* Add onClick handler to "about me" section */}
        <h3 id="about" onClick={handleAboutClick}>about me</h3>
      </div>

      <div id="downloads">
        <DownloadText text="pdf portfolio" link="https://youtube.com" />
        {/* Change the link to the direct download link of the resume */}
        <DownloadText text="resume" link="https://nicolecreative.github.io/website1/resume.pdf" />
      </div>
    </div>
  );
}

export default MobileFooter;
