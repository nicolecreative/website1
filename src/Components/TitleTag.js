import React, { useState, useEffect, useRef } from 'react';
import Tag1 from './Tag1';
import "./Project.css";

function TitleTag({ category, title, hovered }) {
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting); // Set isVisible to true when it's intersecting
      });
    }, { threshold: [0], rootMargin: "0px 0px -10% 0px"}); // Specify a larger root margin

    observer.observe(titleRef.current);

    // Cleanup observer on component unmount
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []); // Remove dependency array to ensure the effect runs on every render

  return (
    <div className={`titleTag ${isVisible ? 'appear' : ''}`} ref={titleRef}>
      <div className='clippingContainer'>
        {/* Arrow container with sliding animation */}
        <div className='arrowContainer'>
          <img src="/forward.png" alt="Forward" className={hovered ? "arrowImage slideIn" : "arrowImage slideOut"} />
        </div>
        {/* Title */}
        <div className={`title ${hovered ? 'fadeOut' : 'fadeIn'}`}>
          <h3>{hovered ? "" : title}</h3>
        </div>
      </div>
      {/* Additional content */}
      <div>
        <Tag1 categories={[category]} />
      </div>
    </div>
  );
}

export default TitleTag;
