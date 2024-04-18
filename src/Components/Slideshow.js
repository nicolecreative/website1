import React, { useState } from 'react';
import './Slideshow.css'; // Import CSS file for component styles

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = Array.from({ length: 10 }, (_, index) => `https://nicolecreative.github.io/website1/slideshow/${index + 1}.png`);
  const totalPages = images.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  return (
    <div className='slideshowComp'>
      <div className="slideshow">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="image" />
        <div className="arrow-container">
          <div className='circle' onClick={handlePrev}>
            <img
              src="https://nicolecreative.github.io/website1/slideshowArrow.png"
              alt="Previous"
              className="arrow prev"
            />
          </div>
          <div className='circle' onClick={handleNext}>
            <img
              src="https://nicolecreative.github.io/website1/slideshow1.png"
              alt="Next"
              className="arrow next flipped"
            />
          </div>
        </div>
      </div>
      <div className="page-text">Page {currentIndex}/{totalPages-1}</div>
    </div>
  );
}

export default Slideshow;
