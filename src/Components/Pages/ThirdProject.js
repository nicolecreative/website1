import React from 'react';
import './ThirdProject.css';

function ThirdProject() {
  return (
    <div classname="project3page">
      
      <div className='video'>
        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/938466991?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&title=0"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{ position: 'absolute', top: '15%', left: '3%', width: '90%', height: '90%' }}
            title="robotlyrics"
          ></iframe>
          </div>
          <div className='nameTitle'>
      <h3>KRAFTWERK LYRIC VIDEO</h3>
      </div>
    </div>
        </div>
      
  );
}

export default ThirdProject;

