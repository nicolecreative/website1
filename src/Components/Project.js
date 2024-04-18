import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import TitleTag from './TitleTag';
import './Project.css';

function Project({ title, category, pimage }) {
  return (
    <div className="projectComp">
      <div>
        <img src={pimage} alt={title} className="projectImage" />
      </div>
      <TitleTag category={category} title={title} />
    </div>
  );
}

export default Project;
