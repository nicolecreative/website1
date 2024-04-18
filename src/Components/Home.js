import React from 'react';
import Project from './Project'; // Assuming you have a component for each project
import './Home.css';

function Home({ selectedButton, setPageState }) {
  // Define project categories and images
  const projectCategories = {
    'Project 1': '1',
    'Project 2': '2',
    'Project 3': '3',
    'Project 4': '4',
  };

  const projectImages = {
    'Project 1': 'https://nicolecreative.github.io/website1/image1.jpg',
    'Project 2': 'https://nicolecreative.github.io/website1/image2.jpg',
    'Project 3': 'https://nicolecreative.github.io/website1/image3.jpg',
    'Project 4': 'https://nicolecreative.github.io/website1/image4.jpg',
  };

  // Define button project orders
  const buttonProjectOrders = {
    1: ['Project 1', 'Project 2', 'Project 3', 'Project 4'],
    2: ['Project 2', 'Project 4', 'Project 3', 'Project 1'],
    3: ['Project 4', 'Project 3', 'Project 2', 'Project 1'],
    4: ['Project 3', 'Project 1', 'Project 2', 'Project 4'],
    5: ['Project 1', 'Project 3', 'Project 4', 'Project 2'],
  };

  // Function to handle project click
  const handleProjectClick = (projectName) => {
    // Update page state to navigate to the corresponding project
    setPageState(projectName.toLowerCase().replace(/\s/g, ''));
  };

  // Generate projects based on selectedButton
  const projects = buttonProjectOrders[selectedButton].map(title => ({
    title,
    category: projectCategories[title],
    pimage: projectImages[title],
  }));

  return (
    <div className='homeBody'>

      {/* Render projects */}
      {projects.map(project => (
        <div key={project.title} onClick={() => handleProjectClick(project.title)}>
          <Project {...project} />
        </div>
      ))}
    </div>
  );
}

export default Home;
