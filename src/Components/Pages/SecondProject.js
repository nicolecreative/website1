import React from 'react';
import Slideshow from '../Slideshow';
import './SecondProject.css';

function SecondProject() {
    return (
        <div>
            
            <div className="slide">
            <Slideshow/>
            </div>

            <div className="title">
            <h2>TYPOGRAPHIC DIALOGUE</h2>
            </div>
            <div className="pgraph">
            <h5>Typographic Dialogue is a typset book in which two texts are presented together and set based on the meanings, being intentional and making mistakes.</h5>
            </div>
            
        </div>
    );
}

export default SecondProject;