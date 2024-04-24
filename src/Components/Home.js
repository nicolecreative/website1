import React, { useEffect } from 'react';
import Project from './Project'; // Assuming you have a component for each project
import './Home.css';

function Home({ selectedButton, setPageState }) {
  // Define project names, categories, and images
  const projectName1 = 'Project 1';
  const projectName2 = 'Project 2';
  const projectName3 = 'Project 3';
  const projectName4 = 'Project 4';

  const projectCategories = {
    [projectName1]: '1',
    [projectName2]: '4',
    [projectName3]: '2',
    [projectName4]: '1',
  };

  const projectImages = {
    [projectName1]: 'https://nicolecreative.github.io/website1/image45.jpg',
    [projectName2]: 'https://nicolecreative.github.io/website1/image2.jpg',
    [projectName3]: 'https://nicolecreative.github.io/website1/image3.jpg',
    [projectName4]: 'https://nicolecreative.github.io/website1/image4.jpg',
  };

  // Define button project orders
  const buttonProjectOrders = {
    1: [projectName1, projectName2, projectName3, projectName4],
    2: [projectName2, projectName4, projectName3, projectName1],
    3: [projectName4, projectName3, projectName2, projectName1],
    4: [projectName3, projectName1, projectName2, projectName4],
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

  // Run after the component has been rendered
  useEffect(() => {
    // Function to check aspect ratio and add 'large' class if aspect ratio is greater than 1
    const checkAspectRatios = () => {
      const projectImages = document.querySelectorAll('.projecta .projectComp .projectImage img');
  
      projectImages.forEach(image => {
        const aspectRatio = image.width / image.height;
  
        if (aspectRatio > 1) {
          image.closest('.projecta').classList.add('large');
        }
      });
    };
  
    // Run the function after all images have loaded
    const images = document.querySelectorAll('.projecta .projectComp .projectImage img');
    let loadedImages = 0;
  
    const imageLoadedHandler = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        checkAspectRatios();
      }
    };
  
    images.forEach(image => {
      if (image.complete) {
        imageLoadedHandler();
      } else {
        image.addEventListener('load', imageLoadedHandler);
      }
    });
  
    // Clean up event listeners when the component unmounts
    return () => {
      images.forEach(image => {
        image.removeEventListener('load', imageLoadedHandler);
      });
    };
  });
  
  
  return (
    <div className='centerthis'>

      <div className='homeBody'>
        
        {/* Render projects */}
        {projects.map(project => (
          <div key={project.title} onClick={() => handleProjectClick(project.title)} className={`projecta ${project.category}`}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
