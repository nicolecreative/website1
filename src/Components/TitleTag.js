import React from 'react';
import Tag1 from './Tag1';
import './TitleTag.css';

function TitleTag({ category, title }) {
  return (
    <div className='titleTag'>
      <h3>{title}</h3> {/* Place h3 directly within .titleTag */}
      <div>
        <Tag1 categories={[1, 2, 3]} />
      </div>
    </div>
  );
}

export default TitleTag;
